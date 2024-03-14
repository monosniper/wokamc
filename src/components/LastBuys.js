import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {API_URL} from "../api";
import moment from "moment";
import 'moment/locale/ru';
import Slider from "react-styled-carousel";

const responsive = [
    { breakPoint: 1280, cardsToShow: 4 }, // this will be applied if screen size is greater than 1280px. cardsToShow will become 4.
    { breakPoint: 760, cardsToShow: 2 },
];

const LastBuys = () => {
    const {store} = useContext(Context);

    useEffect(() => {
        store.fetchLastBuys()
    }, []);

    return (
        <section className="last-buy">
            <div className="last-buy__container">
                <h2 className="last-buy__title title">Последние покупки:</h2>
                <Slider
                    responsive={responsive}
                    className="last-buy__items"
                    showArrows={false}
                    padding={'1px'}
                >
                    {store.last_buys.map(buy => buy.Products.map(product => (
                        <div key={'buy-'+buy.id+'-'+product.id} onClick={() => store.showModal("productInfo", product.id)} className="buy-item" data-popup="#info">
                            <div className="buy-item__label">
                                {moment(buy.createdAt).subtract(1, 'm').lang("ru").fromNow()}
                            </div>
                            <div className="buy-item__img -ibg">
                                <img src={API_URL + product.image} alt={product.title}/>
                            </div>
                            <div className="buy-item__title">
                                <span>{product.title}</span>
                                <small className="_icon-user">
                                    {buy.name}
                                </small>
                            </div>
                        </div>
                    )))}
                </Slider>
            </div>
        </section>
    );
};

export default observer(LastBuys);