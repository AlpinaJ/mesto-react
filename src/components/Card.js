import React from "react";

function Card({card, onCardClick}){
    function handleClick() {
        onCardClick(card);
    }
    return(
        <div className="card">
            <button className="card__thrash" type="button"></button>
            <img src={card.link} className="card__image" alt={card.name}  onClick={handleClick}/>
                <div className="card__info">
                    <h3 className="card__title">{card.name}</h3>
                    <div className="card__likes">
                        <button className="card__like" type="button"></button>
                        <p className="card__likes-number">{card.likes.length}</p>
                    </div>
                </div>
        </div>
    )
};

export default Card;