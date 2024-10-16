import { useEffect, useState } from "react";
import {getBookbyId, getBooks} from "../service/api";
import { useParams } from "react-router-dom";
import Reviews from "./Review";
import Navbar from "./Navbar";
import {type} from "node:os";
import AddReviewForm from "./AddReviewForm";
import ReviewList from "./ReviewList";
import {Review} from "../Types/ReviewType"
const BookDetailComponent = (props: any) => {
    const book = props.book;
    return (
        <>
            <Navbar/>
            <h3>Book Detail Page</h3>
            <dl>
                <dt>Title</dt>
                <dd>{book.title}</dd>
                <dt>Author</dt>
                <dd>{book.author}</dd>
                <dt>Publication Date</dt>
                <dd>{book.publicationDate}</dd>
            </dl>
         <ReviewList id={book.id} />
<AddReviewForm/>
        </>
    )
}

export default BookDetailComponent;