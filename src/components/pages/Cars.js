import React, { useState, useEffect  } from 'react';
import Item from '../Layout/Item';
// import data from "../../Data/db.json";
import firedb from '../../Data/firebase';
import { onValue, ref } from '@firebase/database';
import Civic from '../../Assets/Civic.jpg';
import CRV from '../../Assets/CRV.jpg';

function Cars() {

    const carsImage = [
        {
            image: CRV
        },
        {
            image: Civic
        }
    ]
    
    const [Cars, setCars] = useState([]);

    useEffect(() => {
        const database = ref(firedb, "Cars");
        onValue(database, (snapshot) => {
            setCars(snapshot.val());
        })
    }, []);

    return (
        <div id="jobs-container">
            <h1>Cars Catalogue</h1>
            { Cars && <Item items={ Cars } others={ carsImage } /> }
        </div>
    );
}

export default Cars;