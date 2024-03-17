import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import Slider from 'react-input-slider'
import {Context} from "../index";

const CoinSlider = () => {
    const {store} = useContext(Context);
    const [amount, setAmount] = useState(100)
    const [count, setCount] = useState(125)

    useEffect(() => {
        if(amount <= 500) {
            setCount((amount * 1.25).toFixed(0))
        } else if(amount <= 2500) {
            setCount((amount * 1.30).toFixed(0))
        } else if(amount <= 5000) {
            setCount((amount * 1.35).toFixed(0))
        }
        // if(amount <= 1500) {
        //     setCount(amount)
        // } else if(amount <= 2499) {
        //     setCount((amount * 1.1).toFixed(0))
        // } else if(amount <= 5000) {
        //     setCount((amount * 1.2).toFixed(0))
        // }
    }, [amount]);

    return <section className="coin-slider">
        <div className="coin-slider__container">
            <div className="coin-slider__wrapper">
                <div className="coin-slider__img">
                    <img src="/img/slider.png" alt="Coin Slider"/>
                </div>
                <div className="coin-slider__body">
                    <div className="coin-slider__title">Покупка игровой валюты</div>
                    <Slider
                        axis="x"
                        x={amount}
                        xmax={5000}
                        xmin={10}
                        xstep={5}
                        onChange={({ x }) => setAmount(x)}
                        styles={{
                            track: {
                                backgroundColor: '#ebebeb',
                                width: '100%',
                                cursor: "pointer",
                            },
                            active: {
                                backgroundColor: '#3dd17e',
                                cursor: "pointer",
                            },
                            thumb: {
                                width: 40,
                                height: 40,
                                boxShadow: "0 0 20px 1px #3dd17e",
                                backgroundImage: "url('/img/slider-handler.png')",
                                backgroundPosition: "center",
                                backgroundSize: "contain",
                            },
                            disabled: {
                                opacity: 0.5
                            }
                        }}
                    />
                    <div className="result-box">
                        <div className="result-box__item result-box__left">{amount}₽</div>
                        <div className="result-box__sep">
                            <img src="/img/right.svg" alt="To"/>
                        </div>
                        <div className="result-box__item result-box__right">{count}€</div>
                    </div>
                </div>
                {store.basket.find(({id}) => id === 'money') ? (
                        <div className="product__action">
                            <button className="btn-buy btn-buy_detail" type="button">
                                {store.basket.find(({id}) => id === 'money').count} €
                            </button>
                            <button onClick={() => store.removeFromBasket('money')} className="btn-del _icon-del"
                                    type="button"></button>
                        </div>
                    ) :
                    <button onClick={() => store.addToBasket('money', null, count, amount)} className="coin-slider__btn">В Корзину</button>
                }
            </div>
        </div>
    </section>;
};

export default observer(CoinSlider);