import axios from 'axios';
import { jwtDecode } from 'jwt-decode';

interface TokenPayload {
    role: string;
    exp: number;
}
const BASE_URL = process.env.REACT_APP_BASE_API_URL;


export const login = async (body: any) => {

    try {
        console.log(`${BASE_URL}auth/login`);
        const response = await axios.post(`${BASE_URL}auth/login`, body)
        if (response.status) {
            localStorage.setItem('auth_token', response?.data.token);
            return response;
        } else {
            throw new Error('Something went wrong');
        }
    } catch (error) {
        console.error("Login failed:", error);
        throw new Error('Something went wrong');
    }
};

export const getUserRole = (): string | null => {
    const token = localStorage.getItem('auth_token');
    if (!token) return null;

    try {
        const decodedToken: TokenPayload = jwtDecode(token);
        if (decodedToken.exp * 1000 < Date.now()) {
            localStorage.removeItem('token');
            return null;
        }
        return decodedToken.role;
    } catch (error) {
        console.error("Invalid token:", error);
        return null;
    }
};
