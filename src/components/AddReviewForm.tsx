import React, { useState } from 'react';
import {addReview} from "../service/api";

const ReviewForm: React.FC = () => {
    const [rating, setRating] = useState<number | null>(null);
    const [reviewText, setReviewText] = useState<string>('');

    const handleRatingChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRating(Number(event.target.value));
    };

    const handleTextChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setReviewText(event.target.value);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (rating === null || reviewText.trim() === '') {
            alert('Please fill out both fields.');
            return;
        }
        const Review = ({rating : rating, reviewText : reviewText})
        // Handle the submission (e.g., send to server)
        const response = await addReview(Review);
        if (response.status == 200)

        console.log('Rating:', rating);
        console.log('Review:', reviewText);

        // Reset form
        setRating(null);
        setReviewText('');
    };

    return (
        <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
            <h2>Add Review</h2>
            <div>
                <label>Rating:</label>
                <div>
                    {[1, 2, 3, 4, 5].map((value) => (
                        <label key={value}>
                            <input
                                type="radio"
                                value={value}
                                checked={rating === value}
                                onChange={handleRatingChange}
                            />
                            {value}
                        </label>
                    ))}
                </div>
            </div>
            <div>
                <label htmlFor="review_text">Review:</label>
                <textarea
                    id="review_text"
                    value={reviewText}
                    onChange={handleTextChange}
                    rows={4}
                    required
                />
            </div>
            <button type="submit">Submit Review</button>
        </form>
    );
};

export default ReviewForm;
