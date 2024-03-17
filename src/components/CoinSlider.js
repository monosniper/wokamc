import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import Slider from 'react-input-slider'

const CoinSlider = () => {
    const [amount, setAmount] = useState(500)
    const [count, setCount] = useState(500)

    useEffect(() => {
        if(amount <= 1500) {
            setCount(amount)
        } else if(amount <= 2499) {
            setCount((amount * 1.1).toFixed(0))
        } else if(amount <= 5000) {
            setCount((amount * 1.2).toFixed(0))
        }
    }, [amount]);

    return <section className="coin-slider">
        <div className="coin-slider__container">
            <div className="coin-slider__wrapper">
                <div className="coin-slider__img">
                    <img src="/img/coin-slider.svg" alt="Coin Slider"/>
                </div>
                <div className="coin-slider__body">
                    <div className="coin-slider__title">Покупка игровой валюты</div>
                    <Slider
                        axis="x"
                        x={amount}
                        xmax={5000}
                        xmin={50}
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
                                backgroundImage: "url('/img/coin-slider.svg')",
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
                <button className="coin-slider__btn">Приобрести</button>
            </div>
        </div>
    </section>;
};

export default observer(CoinSlider);