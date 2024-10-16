// src/ReviewList.tsx
import React, {useEffect, useState} from 'react';
import {Review} from '../Types/ReviewType';
import {getReviewbyBookId} from "../service/api";

const ReviewList = (props: any) => {
        const [reviews, setData] = useState<Review[]>([]);
        useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await getReviewbyBookId(props.id);
                    setData(response.data);
                } catch (error) {
                    alert('something went wrong');
                    console.log('something went wrong', error)
                }
            };
            fetchData();
        });
    return (
        <div>
            <h2>Reviews</h2>
            {reviews.length === 0 ? (
                <p>No reviews yet.</p>
            ) : (
                <ul>
                    {reviews.map((review: any) => (
                        <li key={review.id}>
                            <strong>Rating:</strong> {review.rating} <br />
                            <strong>Review:</strong> {review.reviewText}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default ReviewList;
