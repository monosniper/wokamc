import React, {useState} from 'react';
import Modal from "react-modal";
import {observer} from "mobx-react-lite";
import {useStores} from "../../root-store-context";

const PaymentChoose = () => {
    const {
        main: { pay },
        modal: { state: { paymentChoose }, hide },
        basket: { payData, total }
    } = useStores();

    const [variant, setVariant] = useState('freekassa')

    const handleClick = () => {
        pay({...payData, variant})
    }

    return (
        <Modal
            ariaHideApp={false}
            closeTimeoutMS={500}
            className={'modal popup_small'}
            isOpen={paymentChoose}
            shouldCloseOnOverlayClick={true}
            onRequestClose={() => hide('paymentChoose')}
            overlayRef={() => document.querySelector('.overlay')}
        >
            <div className="popup__content">
                <button onClick={() => hide('paymentChoose')} type="button" className="popup__close _icon-close"></button>
                <div className="popup__text">
                    <div className="popup__title" style={{marginBottom: '1rem'}}>Оплата</div>
                    <p className="popup__text">Выберите предпочитаемый способ оплаты</p>
                    <div className="payments">
                        <div className={"payment " + (variant === 'freekassa' ? 'active' : '')} onClick={() => setVariant('freekassa')}>
                            <img src="/img/freekassa.svg" alt="FreeKassa"/>
                            <div className="payment__text">Минимум 10 ₽</div>
                        </div>
                        <div className={"payment " + (variant === 'lava' ? 'active' : '')} onClick={() => setVariant('lava')}>
                            <img src="/img/lava.svg" alt="Lava"/>
                            <div className="payment__text">Минимум 200 ₽</div>
                        </div>
                    </div>
                    <div className="modal__footer">
                        <button onClick={handleClick} className="form__button">
                            Оплатить ({total}.00 ₽)
                        </button>
                    </div>
                </div>
            </div>
        </Modal>
    );
};

export default observer(PaymentChoose);