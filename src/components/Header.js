import React, {useContext} from 'react';
import Basket from "./modals/Basket";
import {Link} from "react-router-dom";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const Header = () => {
    const {store} = useContext(Context);

    const toggleMobileMenu = () => {
        document.querySelector('html').classList.toggle('lock')
        document.querySelector('html').classList.toggle('menu-open')
    }

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
                <div className="header__action">
                    <div className="header__cart cart" onClick={() => store.showModal('basket')}>
                        <button className="cart__btn" data-popup="#order" type="button">
                            <span className="_icon-cart">{store.getTotalBasket()}.00 ₽</span>
                            <i className="_icon-arrow"></i>
                        </button>
                    </div>
                    <button onClick={toggleMobileMenu} type="button" className="menu__icon icon-menu"><span></span></button>
                </div>
            </div>
            <Basket />
        </header>
    );
};

export default observer(Header);