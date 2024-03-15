import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container">
                <div className="footer__top">
                    <div className="footer__left">
                        <div className={'footer__about'}>
                            <a href="/" className="footer__logo logo"><img src="img/logo.png" alt="Logo"/></a>
                            <div className="footer__info">
                                <p>
                                    <svg width="14" height="11" viewBox="0 0 14 11" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 4.99995L5.00001 8.99995L13 1" stroke="#2a354f" strokeWidth="2"></path>
                                    </svg>
                                    <span> © 2024 </span>
                                    <strong>WokaMC</strong>
                                </p>
                                <small>Все права защищены.</small>
                            </div>
                        </div>
                        <div className={'footer__ip'}>
                            <p>ИП XASANOV SHAXZOD RUSTAM O‘G‘LI</p>
                            <p>ПИНФЛ: 52211056450050</p>
                            <p>ОГРНИП: 5903828</p>
                            <p>wokamc@bk.ru (ПН-ПТ 10:00-18:00 МСК)</p>
                        </div>
                    </div>
                    <div className="footer__center">
                        <p>
                            Woka не связан с MojangAB,
                            Все средства идут на развитие проекта
                            Коммерческая деятельность проекта
                            соответствует <a href="mojang.pdf" target={"_blank"}>политике Mojang AB</a>.
                        </p>
                        <Link unstable_viewTransition to="/policy" className={'links-footer__link'}>Договор Оферты</Link>
                    </div>
                    <div className="footer__links links-footer">
                        <div className="links-footer__title">
                            Ссылки
                        </div>
                        <ul>
                            <li><a href="https://llaun.ch/ru" className="links-footer__link">
                                Скачать Minecraft
                            </a></li>
                            <li><a href="https://vk.com/topic-214173785_48914833" className="links-footer__link">
                                Правила
                            </a></li>
                            <li><Link unstable_viewTransition to="/punishments" className="links-footer__link">
                                Наказания
                            </Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;