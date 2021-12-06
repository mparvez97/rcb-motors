import React from "react";
import { Link } from "react-router-dom";

const Item = ({ items, others }) => {
    return (
        <div id="list-items">
            { items.map((item, index) => (
                <div key={ item.id } className="item-full">
                    <div>
                        <img src={ others[index].image } alt={ item.model } />
                    </div>
                    <div className="right-details-section">
                        <div>
                            <h1 className="model-title">{ item.title }</h1>
                            <p>{ item.discription }</p>
                        </div>
                        <div className="details">
                            <button className="apply-btn">
                                <Link to={{ pathname: `/Features/${item.id}`, state: {} }}> Features & Specs </Link>
                            </button>
                        </div>
                    </div>
                </div>
            )) }
        </div>
    );
}

export default Item;
