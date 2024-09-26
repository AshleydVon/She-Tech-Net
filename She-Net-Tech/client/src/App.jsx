import { Outlet } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { StoreProvider } from './utils/GlobalState'; // Import the corrected StoreProvider

// Set up HTTP link for Apollo Client (connecting to your GraphQL API)
const httpLink = createHttpLink({
  uri: '/graphql',  // Adjust this URI based on your backend endpoint
});

// Set up Authorization link to add the token to headers
const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

// Initialize Apollo Client with cache and authLink
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <StoreProvider> {/* Make sure you're using StoreProvider */}
        <Navbar />
        <Outlet />  {/* This will render the child routes based on your main.jsx router */}
        <Footer />
      </StoreProvider>
    </ApolloProvider>
  );
}

export default App;
