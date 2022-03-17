import React, {useState, useEffect} from 'react';
import Header from '../components/Header.js';
import Main from '../components/Main.js';
import Footer from "./Footer.js";
import PopupWithForm from "./PopupWithForm.js";
import ImagePopup from "./ImagePopup.js";

function App() {
    const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCards] = useState({});

    const handleEditAvatarClick = () => setEditAvatarPopupOpen(true);
    const handleEditProfileClick = () => setEditProfilePopupOpen(true);
    const handleAddPlaceClick = () => setAddPlacePopupOpen(true);
    const handleCardClick = (card) => setSelectedCards(card);

    function closeAllPopups() {
        setEditProfilePopupOpen(false);
        setAddPlacePopupOpen(false);
        setEditAvatarPopupOpen(false);
        setSelectedCards(false);
    }

    // Подключаем закрытие попапов нажатием клавиши Escape
    useEffect(() => {
        function handleEscapeClose(event) {
            if (event.code === 'Escape') {
                closeAllPopups();
            }
        }
        document.addEventListener('keydown', handleEscapeClose)
        return () => document.removeEventListener('keydown', handleEscapeClose)
    })

    return (
        <div className="App">
            <div className="page">
                <Header/>
                <Main onEditProfile={handleEditProfileClick}
                      onAddPlace={handleAddPlaceClick}
                      onEditAvatar={handleEditAvatarClick}
                      onCardClick={handleCardClick}
                />
                <Footer/>
                <PopupWithForm
                    isOpen={isEditProfilePopupOpen}
                    name={"edit"}
                    closePopup={closeAllPopups}
                    title={"Редактировать профиль"}
                    children={<>
                        <div className="popup__input-container">
                            <input type="text" className="popup__input popup__input_type_name" id="profile-name"
                                   name="name" required
                                   minLength="2" maxLength="40" placeholder="Имя"/>
                            <span id="profile-name-error" className="popup__error"></span>
                        </div>
                        <div className="popup__input-container">
                            <input type="text" className="popup__input popup__input_type_description"
                                   id="profile-description"
                                   name="description" required minLength="2" maxLength="200" placeholder="О себе"/>
                            <span id="profile-description-error" className="popup__error"></span>
                        </div>
                    </>
                    }
                    buttonType={"save"}
                    buttonContent={"Сохранить"}
                />
                <PopupWithForm
                    isOpen={isAddPlacePopupOpen}
                    name={"add"}
                    closePopup={closeAllPopups}
                    title={"Новое место"}
                    children={<>
                        <div className="popup__input-container">
                            <input type="text" className="popup__input popup__input_type_place" id="card-name"
                                   name="place" required
                                   minLength="2" maxLength="30" placeholder="Название"/>
                            <span id="card-name-error" className="popup__error"></span>
                        </div>
                        <div className="popup__input-container">
                            <input type="url" className="popup__input popup__input_type_link" id="card-url"
                                   name="link"
                                   placeholder="Ссылка на картинку" required/>
                            <span id="card-url-error" className="popup__error"></span>
                        </div>
                    </>
                    }
                    buttonType={"create"}
                    buttonContent={"Создать"}
                />
                <PopupWithForm
                    isOpen={isEditAvatarPopupOpen}
                    name={"avatar"}
                    closePopup={closeAllPopups}
                    title={"Обновить аватар"}
                    children={<>
                        <input type="url" className="popup__input popup__input_type_link" id="avatar-url"
                               name="link"
                               placeholder="Ссылка на картинку" required/>
                        <span id="avatar-url-error" className="popup__error"></span>
                    </>
                    }
                    buttonType={"change"}
                    buttonContent={"Сохранить"}
                />
                <ImagePopup
                    card={selectedCard}
                    onClose={closeAllPopups}
                />
                <div className="popup popup_type_delete">
                    <div className="popup__overlay"></div>
                    <div className="popup__container">
                        <button className="popup__button-close" type="button"></button>
                        <h3 className="popup__title">Вы уверенны?</h3>
                        <button type="button" className="popup__button popup__button-confirm">Да</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
