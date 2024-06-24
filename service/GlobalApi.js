// GlobalApi.js

import axios from "axios";

const API_KEY = import.meta.env.VITE_STRAPI_API_KEY;

const axiosclient = axios.create({
    baseURL: 'http://localhost:1337', // Adjust according to your server URL
    headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${API_KEY}`
    }
});

const CreateNewResume = (data) => {
    return axiosclient.post('/api/user-resumes', data);
};

export default {
    CreateNewResume
};
