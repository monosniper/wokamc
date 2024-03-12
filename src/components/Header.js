import React, {useContext, useState} from 'react';
import Basket from "./Basket";
import {Link} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Header = () => {
    const {store} = useContext(Context);
    const [basketModal, setBasketModal] = useState(false)

    const handleOpenModal = () => setBasketModal(true);
    const handleCloseModal = () => setBasketModal(false);

    return (
        <header className="header">
            <div className="header__container">
                <Link unstable_viewTransition to="/" className="header__logo logo">
                    <img src="img/logo.png" alt="Logo"/>
                    <span>hightcore</span>
                </Link>
                <div className="header__menu menu">
                    <nav className="menu__body">
                        <ul className="menu__list">
                            <li className="menu__item"><a target={'_blank'} href="https://llaun.ch/ru"
                                                          className="menu__link">Скачать Minecraft</a></li>
                            <li className="menu__item"><a target={'_blank'}
                                                          href="https://discord.gg/Kuk3PFAm"
                                                          className="menu__link">Правила</a></li>
							<li className="menu__item"><Link to="/punishments"
														  className="menu__link" unstable_viewTransition>Наказания</Link></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__action" onClick={handleOpenModal}>
                    <div className="header__cart cart">
                        <button className="cart__btn" data-popup="#order" type="button">
                            <span className="_icon-cart">{store.getTotalBasket()}.00 ₽</span>
                            <i className="_icon-arrow"></i>
                        </button>
                    </div>
                    <button type="button" className="menu__icon icon-menu"><span></span></button>
                </div>
            </div>
            <Basket modal={basketModal} handleCloseModal={handleCloseModal}/>
        </header>
    );
};

export default observer(Header);