// appwrite.js

import { Appwrite } from 'appwrite';

const appwrite = new Appwrite();

appwrite
    .setEndpoint(process.env.REACT_APP_APPWRITE_ENDPOINT) // Your Appwrite endpoint
    .setProject(process.env.REACT_APP_APPWRITE_PROJECT_ID) // Your Appwrite project ID
    .setKey(process.env.REACT_APP_APPWRITE_API_KEY); // Your Appwrite API key

export default appwrite;
