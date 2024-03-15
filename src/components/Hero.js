import React, {useState} from 'react';
import {Discord} from "react-discord-widget";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

// const IP = "play.hightcore.org"
const IP = "mc.woka.fun"

const Hero = ({scroll_id, text, title, title_2, btn_text, video, container_styles}) => {
     const {store} = useContext(Context);
    const [copied, setCopied] = useState(false)

    const handleClick = () => {
        navigator.clipboard.writeText(IP)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    return (
        <section className="hero" style={{background: 'url("../img/'+video+'") no-repeat center/cover'}}>
            {/*<video className={"video"} playsInline autoPlay muted loop>*/}
            {/*    <source src={"img/"+video} type="video/webm" />*/}
            {/*</video>*/}
            <div className="hero__overlay"></div>
            <div className="hero__container" style={container_styles}>
                <div className="hero__content">
                    <h1 className="hero__title"><span>{title}</span>{title_2}</h1>
                    <div className="hero__text">{text}</div>
                    <div className="hero__block">
                        <div className="hero__btn-wrapper">
                            <a href={`#${scroll_id}`} className="hero__btn _icon-arrow-down-circle" type="button">{btn_text}</a>
                        </div>

                        <div className="ip" onClick={handleClick}>
                            <span className={'ip__text'}>{copied ? "Скопировано!" : IP}</span>
                            <svg className={'ip__btn'} width="18" height="18" viewBox="0 0 18 18" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.875 4.662V2.9295C4.8751 2.64979 4.98628 2.38158 5.1841 2.18383C5.38191 1.98609 5.65017 1.875 5.92987 1.875H15.0701C15.3499 1.875 15.6182 1.98614 15.816 2.18397C16.0139 2.38179 16.125 2.6501 16.125 2.92988V12.0705C16.1249 12.3502 16.0137 12.6184 15.8159 12.8162C15.6181 13.0139 15.3498 13.125 15.0701 13.125H13.3189" stroke="white"></path>
                                <path d="M12.0705 4.875H2.92913C2.64948 4.8752 2.38137 4.98642 2.1837 5.18423C1.98604 5.38204 1.875 5.65023 1.875 5.92987V15.0701C1.875 15.3499 1.98614 15.6182 2.18397 15.816C2.38179 16.0139 2.6501 16.125 2.92988 16.125H12.0705C12.3502 16.1249 12.6184 16.0137 12.8162 15.8159C13.0139 15.6181 13.125 15.3498 13.125 15.0701V5.93025C13.1251 5.79169 13.0978 5.65448 13.0448 5.52645C12.9918 5.39843 12.9141 5.28209 12.8162 5.1841C12.7182 5.0861 12.6019 5.00837 12.4739 4.95533C12.3459 4.9023 12.2087 4.875 12.0701 4.875H12.0705Z" stroke="white"></path>
                            </svg>
                        </div>

                        <div className="online">
                            <div className="online__title">Онлайн на сервере</div>
                            <div className="online__info">
                                <div className="online__icon">
                                    <img src="img/online-indicator-success.svg" alt="Image"/>
                                </div>
                                <div className="online__num">
                                    {store.getTotalOnline()} из 240
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero__img">
                    <div className="discord">
                        <Discord
                            id="990485164687785994"
                            width={300}
                            height={400}
                            theme="dark"
                            showMembers={true}
                            showOnline={true}
                            showJoinButton={true}
                        />
                    </div>
                    {/*<div className="hero-list">*/}
                    {/*    <div className="hero-list__header">*/}
                    {/*        <div className="hero-list__th">#</div>*/}
                    {/*        <div className="hero-list__th">Аватар</div>*/}
                    {/*        <div className="hero-list__th">Ник</div>*/}
                    {/*    </div>*/}
                    {/*    <div className="hero-list__body">*/}
                    {/*        <div className="hero-list__row">*/}
                    {/*            <div className="hero-list__td">1</div>*/}
                    {/*            <div className="hero-list__td">*/}
                    {/*                <img src="https://minotar.net/avatar/Minardo/25" alt="Image"/>*/}
                    {/*            </div>*/}
                    {/*            <div className="hero-list__td">DarkWhite</div>*/}
                    {/*        </div>*/}
                    {/*        <div className="hero-list__row">*/}
                    {/*            <div className="hero-list__td">2</div>*/}
                    {/*            <div className="hero-list__td">*/}
                    {/*                <img src="https://minotar.net/avatar/Minardo/25" alt="Image"/>*/}
                    {/*            </div>*/}
                    {/*            <div className="hero-list__td">DarkWhite</div>*/}
                    {/*        </div>*/}
                    {/*        <div className="hero-list__row">*/}
                    {/*            <div className="hero-list__td">3</div>*/}
                    {/*            <div className="hero-list__td">*/}
                    {/*                <img src="https://minotar.net/avatar/Minardo/25" alt="Image"/>*/}
                    {/*            </div>*/}
                    {/*            <div className="hero-list__td">DarkWhite</div>*/}
                    {/*        </div>*/}
                    {/*        <div className="hero-list__row">*/}
                    {/*            <div className="hero-list__td">4</div>*/}
                    {/*            <div className="hero-list__td">*/}
                    {/*                <img src="https://minotar.net/avatar/Minardo/25" alt="Image"/>*/}
                    {/*            </div>*/}
                    {/*            <div className="hero-list__td">DarkWhite</div>*/}
                    {/*        </div>*/}
                    {/*        <div className="hero-list__row">*/}
                    {/*            <div className="hero-list__td">5</div>*/}
                    {/*            <div className="hero-list__td">*/}
                    {/*                <img src="https://minotar.net/avatar/Minardo/25" alt="Image"/>*/}
                    {/*            </div>*/}
                    {/*            <div className="hero-list__td">DarkWhite</div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                    {/*<img src="img/sereshki.png" alt="Image"/>*/}
                </div>
            </div>
        </section>
    );
};

export default observer(Hero);