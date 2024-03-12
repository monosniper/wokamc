import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const LastBuys = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        store.fetchLastBuys()
    }, []);

    return (
        <section className="last-buy">
            <div className="last-buy__container">
                <h2 className="last-buy__title title">Последние покупки:</h2>
                <div className="last-buy__items">
                    {store.last_buys.map(buy => (
                        <div className="buy-item" data-popup="#info">
                            <div className="buy-item__label">
                                5 дней назад
                            </div>
                            <div className="buy-item__img -ibg">
                                <img src="img/products/privilege/01.png" alt="Image"/>
                            </div>
                            <div className="buy-item__title">
                                <span>780 € (Дон. Валюта)</span>
                                <small className="_icon-user">
                                    Foxik_PvP
                                </small>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default observer(LastBuys);