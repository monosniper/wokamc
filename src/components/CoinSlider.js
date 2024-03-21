import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import Slider from 'react-input-slider'
import {useStores} from "../root-store-context";

const CoinSlider = () => {
    const { basket: { items, add, remove } } = useStores()
    const [amount, setAmount] = useState(10)
    const [count, setCount] = useState(13)
    const min = 10
    const max = 5000

    useEffect(() => {
        if(amount <= 500) {
            setCount((amount * 1.25).toFixed(0))
        } else if(amount <= 2500) {
            setCount((amount * 1.30).toFixed(0))
        } else if(amount <= 5000) {
            setCount((amount * 1.35).toFixed(0))
        }
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
                        xmax={max}
                        xmin={min}
                        xstep={5}
                        disabled={items.find(({id}) => id === 'money')}
                        onChange={({ x }) => setAmount(x)}
                        styles={{
                            track: {
                                backgroundColor: '#ebebeb',
                                width: '100%',
                                cursor: "pointer",
                            },
                            active: {
                                backgroundColor: '#2a354f',
                                cursor: "pointer",
                            },
                            thumb: {
                                width: 40,
                                height: 40,
                                boxShadow: "0 0 20px 1px #2a354f",
                                backgroundImage: "url('/img/slider-handler.jpg')",
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
                {items.find(({id}) => id === 'money') ? (
                        <div className="product__action">
                            <button className="btn-buy btn-buy_detail" type="button">
                                {items.find(({id}) => id === 'money').count} €
                            </button>
                            <button onClick={() => remove('money')} className="btn-del _icon-del"
                                    type="button"></button>
                        </div>
                    ) :
                    <button onClick={() => add('money', null, count, amount)} className="_icon-cart coin-slider__btn">В Корзину</button>
                }
            </div>
        </div>
    </section>;
};

export default observer(CoinSlider);