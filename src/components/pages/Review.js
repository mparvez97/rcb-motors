import React, { useState, useEffect  } from 'react';
import firedb from "../../Data/firebase";
import { ref, onValue } from '@firebase/database';

const Review = () => {
    const [Contact, setContact] = useState([]);
    const [Reviews, setReviews] = useState([]);

    useEffect(() => {
        const database1 = ref(firedb, "Contact");
        onValue(database1, (snapshot) => {
            setContact(snapshot.val());
        })
    }, []);

    useEffect(() => {
        const database = ref(firedb, "Review");
        onValue(database, (snapshot) => {
            setReviews(snapshot.val());
        })
    }, []);

    return (
        <div id="jobs-container">
            { Contact && Contact.map((contact, index) => (
                <div key={ contact.id }>
                    <h1>Contact Info</h1>
                    <div className="contact-info">
                        <h3>{ contact.company }</h3>
                        <h3>{ contact.address }</h3>
                        <h3>{ contact.email }</h3>
                    </div>
                </div>
            )) }

            <div>
                <h1>Review</h1>
                <div className="review-list">
                    { Reviews && Reviews.map((review, index) => (
                        <div key={ review.id } className="review">
                            <h2> { review.name } </h2>
                            <h5> { review.review } </h5>
                        </div>
                    )) }
                </div>
            </div>
            
            
            
        </div>
    );
}

export default Review;