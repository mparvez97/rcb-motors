import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import data from "../../Data/db.json";
import { onValue, ref } from '@firebase/database';
import firedb from '../../Data/firebase';
import Civic from '../../Assets/Civic.jpg';
import CRV from '../../Assets/CRV.jpg';


const Features = () => {
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

    let params = useParams();
    let id = Number(params.id);

    return (
        <div>
            { Cars.map((car, index) => ( id === car.id ? 
                <div key={car.id} className="cars-details-container">
                    <div className="image-details">
                        <div className="image-container">
                            <img src={ carsImage[id-1].image } alt={ car.model } className="img"/>
                        </div>
                        <div className="car-details">
                            <div>
                                <h1>{ car.title } </h1>
                
                                <h2>{ car.price } </h2>
                                <p> { car.discription } </p>
                            </div>
                            <div>
                                <h1>Features</h1>
                                <ul>
                                    { car.features.split(",").map((feat, index) => (
                                        <li> <h3>{ feat }</h3> </li>
                                    )) }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div> 
            : null ))}
        </div>
    )
}

export default Features;
