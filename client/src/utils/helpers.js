export const pluralize = (name, count) => {
  if (count === 1) {
    return name;
  }
  return name + 's';
};

// Save and retrieve from IndexedDB
export const idbPromise = (storeName, method, object) => {
  return new Promise((resolve, reject) => {
    const request = window.indexedDB.open('she-tech-net', 1);
    let db, tx, store;

    request.onupgradeneeded = function (e) {
      db = request.result; // Use outer db variable
      db.createObjectStore(storeName, { keyPath: '_id' }); // Use storeName for flexibility
    };

    request.onerror = function (e) {
      console.error('There was an error opening IndexedDB:', e); // Log the error with more context
      reject(e); // Reject the promise on error
    };

    request.onsuccess = function (e) {
      db = request.result;
      tx = db.transaction(storeName, 'readwrite');
      store = tx.objectStore(storeName);

      db.onerror = function (e) {
        console.error('Database error:', e);
        reject(e); // Reject the promise on error
      };

      switch (method) {
        case 'put':
          store.put(object);
          resolve(object);
          break;
        case 'get':
          const all = store.getAll();
          all.onsuccess = function () {
            resolve(all.result);
          };
          break;
        case 'delete':
          store.delete(object._id);
          resolve(object._id); // Return the ID of the deleted object for confirmation
          break;
        default:
          console.error('No valid method specified.');
          reject(new Error('No valid method specified.')); // Reject for invalid method
          break;
      }

      tx.oncomplete = function () {
        db.close();
      };
    };
  });
};
