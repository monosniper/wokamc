import React from 'react';

const Servers = () => {
    return (
        <section className="servers">
            <div className="servers__container">
                <h2 className="servers__title title">Наши серверы:</h2>
                <div className="servers__items">
                    <div className="server">
                        <div className="server__header">
                            <div className="server__title">ОСНОВНОЙ IP 💞</div>
                            <div className="server__label">
                                1.19.4 - 1.20.4
                            </div>
                        </div>
                        <div className="server-address">
                            <div className="server-address__value">play.hightcore.org</div>
                            <button className="server-address__btn" type="button">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.875 4.662V2.9295C4.8751 2.64979 4.98628 2.38158 5.1841 2.18383C5.38191 1.98609 5.65017 1.875 5.92987 1.875H15.0701C15.3499 1.875 15.6182 1.98614 15.816 2.18397C16.0139 2.38179 16.125 2.6501 16.125 2.92988V12.0705C16.1249 12.3502 16.0137 12.6184 15.8159 12.8162C15.6181 13.0139 15.3498 13.125 15.0701 13.125H13.3189" stroke="white"></path>
                                    <path d="M12.0705 4.875H2.92913C2.64948 4.8752 2.38137 4.98642 2.1837 5.18423C1.98604 5.38204 1.875 5.65023 1.875 5.92987V15.0701C1.875 15.3499 1.98614 15.6182 2.18397 15.816C2.38179 16.0139 2.6501 16.125 2.92988 16.125H12.0705C12.3502 16.1249 12.6184 16.0137 12.8162 15.8159C13.0139 15.6181 13.125 15.3498 13.125 15.0701V5.93025C13.1251 5.79169 13.0978 5.65448 13.0448 5.52645C12.9918 5.39843 12.9141 5.28209 12.8162 5.1841C12.7182 5.0861 12.6019 5.00837 12.4739 4.95533C12.3459 4.9023 12.2087 4.875 12.0701 4.875H12.0705Z" stroke="white"></path>
                                </svg>
                            </button>
                        </div>
                        {/*<div className="server__footer">*/}
                        {/*    <p>Сейчас играют:</p>*/}
                        {/*    <div className="server__online">*/}
                        {/*        <i>*/}
                        {/*            <img src="img/icons/users.svg" alt="Image"/>*/}
                        {/*        </i>*/}
                        {/*        <span>2 из 2023</span>*/}
                        {/*    </div>*/}
                        {/*    <div className="progress">*/}
                        {/*        <div className="progress-bar" role="progressbar" aria-valuenow="0.09886"*/}
                        {/*             aria-valuemin="0"*/}
                        {/*             aria-valuemax="100" style={{width: '20%', background: '#2a354f', opacity: 1}}>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    <div className="server">
                        <div className="server__header">
                            <div className="server__title">ДЛЯ УКРАИНЫ 🎃</div>
                            <div className="server__label">
                                1.19.4 - 1.20.4
                            </div>
                        </div>
                        <div className="server-address">
                            <div className="server-address__value">ua.hightcore.org</div>
                            <button className="server-address__btn" type="button">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.875 4.662V2.9295C4.8751 2.64979 4.98628 2.38158 5.1841 2.18383C5.38191 1.98609 5.65017 1.875 5.92987 1.875H15.0701C15.3499 1.875 15.6182 1.98614 15.816 2.18397C16.0139 2.38179 16.125 2.6501 16.125 2.92988V12.0705C16.1249 12.3502 16.0137 12.6184 15.8159 12.8162C15.6181 13.0139 15.3498 13.125 15.0701 13.125H13.3189" stroke="white"></path>
                                    <path d="M12.0705 4.875H2.92913C2.64948 4.8752 2.38137 4.98642 2.1837 5.18423C1.98604 5.38204 1.875 5.65023 1.875 5.92987V15.0701C1.875 15.3499 1.98614 15.6182 2.18397 15.816C2.38179 16.0139 2.6501 16.125 2.92988 16.125H12.0705C12.3502 16.1249 12.6184 16.0137 12.8162 15.8159C13.0139 15.6181 13.125 15.3498 13.125 15.0701V5.93025C13.1251 5.79169 13.0978 5.65448 13.0448 5.52645C12.9918 5.39843 12.9141 5.28209 12.8162 5.1841C12.7182 5.0861 12.6019 5.00837 12.4739 4.95533C12.3459 4.9023 12.2087 4.875 12.0701 4.875H12.0705Z" stroke="white"></path>
                                </svg>
                            </button>
                        </div>
                        {/*<div className="server__footer">*/}
                        {/*    <p>Сейчас играют:</p>*/}
                        {/*    <div className="server__online">*/}
                        {/*        <i>*/}
                        {/*            <img src="img/icons/users.svg" alt="Image"/>*/}
                        {/*        </i>*/}
                        {/*        <span>2 из 2023</span>*/}
                        {/*    </div>*/}
                        {/*    <div className="progress">*/}
                        {/*        <div className="progress-bar" role="progressbar" aria-valuenow="0.09886"*/}
                        {/*             aria-valuemin="0"*/}
                        {/*             aria-valuemax="100" style={{width: '20%', background: '#2a354f', opacity: 1}}>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Servers;