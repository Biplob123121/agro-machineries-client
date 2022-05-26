import React, { useEffect, useState } from 'react';

const AllReview = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/review')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);

    const recentReviews = reviews.reverse();

    return (
        <div>
            <h2 className='text-4xl font-bold text-center text-primary my-8'>Client Review : {reviews.length}</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg: grid-cols-3 gap-4'>
                {
                    recentReviews.map(review => <div key={review._id}>
                        <div className="card w-96 bg-base-100 shadow-xl">
                            <div className="card-body">
                                <h2 className="card-title"> Name : {review.supplier}</h2>
                                <h6 className="card-title">Ratings : {review.rating} star</h6>
                                <p>{review.review}</p>
                            </div>
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default AllReview;