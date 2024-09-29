require('dotenv').config();
const axios = require('axios');

// Encode your Coursera API key and secret
const apiKey = process.env.COURSEA_API_KEY;
const apiSecret = process.env.COURSEA_API_SECRET;
const encodedCredentials = Buffer.from(`${apiKey}:${apiSecret}`).toString('base64');

// Function to get the access token
async function getAccessToken() {
  try {
    const response = await axios.post('https://api.coursera.com/oauth2/client_credentials/token',
      new URLSearchParams({
        grant_type: 'client_credentials'
      }),
      {
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          'Authorization': `Basic ${encodedCredentials}`
        }
      }
    );
    console.log('Access Token:', response.data.access_token);
    return response.data.access_token;
  } catch (error) {
    console.error('Error fetching access token:', error.response ? error.response.data : error.message);
  }
}

// Fetch and log the access token
getAccessToken();
