import axios from "axios";

export const BACKEND_URL =  "https://qtify-backend-labs.crio.do";

export const fetchTopAlbums = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/albums/top`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchNewAlbums = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/albums/new`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchSongs = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/songs`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}

export const fetchFilters = async () => {
    try {
        const response = await axios.get(`${BACKEND_URL}/genres`);
        return response.data;
    } catch (e) {
        console.error(e);
    }
}