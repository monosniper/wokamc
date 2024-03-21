import React, {useEffect} from 'react';
import {observer} from "mobx-react-lite";
import {API_URL} from "../api";
import moment from "moment";
import 'moment/locale/ru';
import Slider from "react-styled-carousel";
import {useStores} from "../root-store-context";

const responsive = [
    { breakPoint: 1280, cardsToShow: 4 },
    { breakPoint: 760, cardsToShow: 2 },
    { breakPoint: 500, cardsToShow: 1 },
];

const LastBuys = () => {
    const {
        main: { activeMode, last_buys, fetchLastBuys },
        modal: { show }
    } = useStores()

    useEffect(() => {
        fetchLastBuys()
    }, []);

    return (
        <section className="last-buy">
            <div className="last-buy__container">
                <h2 className="last-buy__title title">Последние покупки:</h2>
                <Slider
                    responsive={responsive}
                    className="last-buy__items"
                    showArrows={false}
                    DotsWrapper={()=>{}}
                    padding={'1px'}
                >
                    {last_buys.filter(({isCompleted}) => isCompleted).map(buy => buy.Products.filter(({mode}) => mode === activeMode).map(product => (
                        <div key={'buy-'+buy.id+'-'+product.id} onClick={() => show("productInfo", product.id)} className="buy-item" data-popup="#info">
                            <div className="buy-item__label">
                                {moment(buy.created_at).subtract(1, 'm').lang("ru").fromNow()}
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