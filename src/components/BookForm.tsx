import React, { useState } from 'react';
import CreateBook from "../pages/CreateBook";
import {createBook} from "../service/api";

interface BookData {
    title: string;
    author: string;
    publicationDate: string;
}

const BookForm: React.FC = () => {
    const [bookData, setBookData] = useState<BookData>({
        title: '',
        author: '',
        publicationDate: '',
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setBookData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await createBook(bookData);
        if (response.status == 200)
            console.log('Book Submitted:', bookData);

        // Reset the form
        setBookData({ title: '', author: '', publicationDate: '' });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Title:
                    <input
                        type="text"
                        name="title"
                        value={bookData.title}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Author:
                    <input
                        type="text"
                        name="author"
                        value={bookData.author}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <div>
                <label>
                    Publication Date:
                    <input
                        type="date"
                        name="publicationDate"
                        value={bookData.publicationDate}
                        onChange={handleChange}
                        required
                    />
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
};

export default BookForm;
