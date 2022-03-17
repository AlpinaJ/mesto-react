import React, {useEffect, useState} from 'react';
import api from "../utils/Api";
import Card from "./Card.js";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    // Получаем информацию о пользователе и карточках с сервера
    useEffect(() => {
        api.getUserInfo().then(res => {
            setUserName(res.name);
            setUserDescription(res.about);
            setUserAvatar(res.avatar);
        }).catch(err=>{
            console.log(err);
        });

        api.getInitialCards().then(res => {
            setCards(res);
        }).catch(err=>{
            console.log(err);
        })
    }, []);

    return (
        <main>
            <section className="profile">
                <div className="profile__info">
                    <div className="profile__avatar">
                        <img src={userAvatar} className="profile__avatar-image"
                             alt="Фото пользователя" onClick={onEditAvatar}/>
                    </div>
                    <div className="profile__description">
                        <div className="profile__text">
                            <h1 className="profile__title">{userName}</h1>
                            <button id="edit-button" className="profile__edit-button" type="button"
                                    onClick={onEditProfile}>
                            </button>
                        </div>
                        <h2 className="profile__subtitle">{userDescription}</h2>
                    </div>
                </div>
                <button id="add-button" className="profile__add-button" type="button" onClick={onAddPlace}>
                </button>
            </section>
            <section className="main">
                {cards.map((card) => (<Card card={card} onCardClick={onCardClick} key={card._id}/>))}
            </section>
        </main>
    )
}

export default Main;