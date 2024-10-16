import axios from "axios";

const BASE_URL = process.env.REACT_APP_BASE_API_URL;

export const signup = async (body: any) => {
    try {
        const result = await axios.post(`${BASE_URL}user/register`, body)
        return result;
       } catch (error) {
           throw error
       }
}

export const editBooks = async (body: any) => {
    try {
        const result = await axios.put(`${BASE_URL}books/${body.id}`, body)
        return result;
       } catch (error) {
           throw error
       }
}

export const deleteBook = async (id: any) => {
    try {
        const result = await axios.delete(`${BASE_URL}books/${id}`)
        return result;
    } catch (error) {
        throw error
    }
}

export const getBooks = async () => {
    try {
        return axios.get(`${BASE_URL}books/findAllBooks`);
    } catch (error) {
        throw error
    }
   
}

export const createBook = async (bookData: any) => {
    try {
        return axios.post(`${BASE_URL}books/AddBook`, bookData);
    } catch (error) {
        throw error
    }
}

export const getBookbyId = async (id: any) => {
    try {
        const result = await axios.get(`${BASE_URL}books/${id}`)
        return result;
       } catch (error) {
           throw error
       }
}

export const getReviewbyBookId = async (id: any) => {
    try {
        const result = await axios.get(`${BASE_URL}reviews`)
        return result;
    } catch (error) {
        throw error
    }
}

export const addReview = async (id: any) => {
    try {
        const result = await axios.get(`${BASE_URL}reviews/AddReview`, id)
        return result;
    } catch (error) {
        throw error
    }
}
