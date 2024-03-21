import React from 'react';
import {observer} from "mobx-react-lite";
import Product from "./Product";
import {motion, AnimatePresence} from "framer-motion";
import {useStores} from "../root-store-context";

const Products = () => {
    const {
        main: {
            activeTag,
            tags,
            query,
            filteredProducts,
            setActiveMode,
            setActiveTag,
            setQuery,
        },
    } = useStores();

    const tagIcons = {
        'Привилегии': <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-3"
                           xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.9996 2.08331L7.45252 7.28248L1.66669 8.12081L5.85794 12.2183L4.85585 17.9166L10 15.175L15.1438 17.9166L14.15 12.2187L18.3334 8.12123L12.5796 7.28248L10 2.08331H9.9996Z"></path>
        </svg>,
        'Кейсы': <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M9.52835 10.1242C10.0483 10.6334 10.4238 11.2716 10.6163 11.9735C10.8089 12.6754 10.8116 13.4159 10.6242 14.1192C10.4351 14.8234 10.0632 15.4652 9.54616 15.9794C9.02911 16.4936 8.38531 16.8619 7.68001 17.0471C6.9739 17.2339 6.23106 17.2315 5.52615 17.0402C4.82123 16.849 4.17907 16.4756 3.66418 15.9575C2.90909 15.1814 2.49081 14.1387 2.50025 13.0559C2.50969 11.9731 2.94609 10.9378 3.7146 10.175C5.31418 8.58418 7.90043 8.56168 9.52751 10.125L9.52835 10.1242V10.1242Z"
                stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path d="M9.58334 10L16.6667 2.91669" stroke="white" strokeWidth="2" strokeLinecap="round"
                  strokeLinejoin="round"/>
            <path d="M12.6271 7.04169L14.8892 9.29169L17.5279 6.66669L15.2663 4.41669L12.6271 7.04169V7.04169Z"
                  stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        </svg>,
        // 'Тайники': <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        //     <path d="M9.52835 10.1242C10.0483 10.6334 10.4238 11.2716 10.6163 11.9735C10.8089 12.6754 10.8116 13.4159 10.6242 14.1192C10.4351 14.8234 10.0632 15.4652 9.54616 15.9794C9.02911 16.4936 8.38531 16.8619 7.68001 17.0471C6.9739 17.2339 6.23106 17.2315 5.52615 17.0402C4.82123 16.849 4.17907 16.4756 3.66418 15.9575C2.90909 15.1814 2.49081 14.1387 2.50025 13.0559C2.50969 11.9731 2.94609 10.9378 3.7146 10.175C5.31418 8.58418 7.90043 8.56168 9.52751 10.125L9.52835 10.1242V10.1242Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        //     <path d="M9.58334 10L16.6667 2.91669" stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
        //     <path d="M12.6271 7.04169L14.8892 9.29169L17.5279 6.66669L15.2663 4.41669L12.6271 7.04169V7.04169Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
        // </svg>,
        'Тайники': <svg width="20" height="20" fill="#2a354f" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"
             viewBox="0 0 512 512">
            <g>
                <g>
                    <path d="M385.723,84.402H126.277C56.647,84.402,0,141.05,0,210.679v216.919h259.446H512V210.679
                        C512,141.05,455.352,84.402,385.723,84.402z M30.417,271.209h54.186v37.008h120.655v-37.008h54.186v47.777H30.417V271.209z
                         M115.021,277.8v-43.598h59.82V277.8H115.021z M259.446,397.181H30.417v-47.777h229.029V397.181z M259.446,210.679v30.112H205.26
                        v-37.008H84.604v37.008H30.417v-30.113c0-6.034,0.567-11.937,1.637-17.664h228.632
                        C259.875,198.789,259.446,204.685,259.446,210.679z M43.376,162.596c16.621-28.547,47.556-47.778,82.901-47.778h177.341
                        c-15.019,12.882-26.983,29.224-34.652,47.778H43.376z M481.583,397.181h-191.72V271.209h191.72V397.181z M481.583,240.792h-191.72
                        V210.68c0-52.857,43.003-95.86,95.86-95.86c2.478,0,4.934,0.094,7.365,0.28c2.43,0.186,4.837,0.462,7.214,0.826
                        c1.585,0.243,3.157,0.525,4.716,0.845c43.641,8.954,76.565,47.659,76.565,93.909V240.792z"/>
                </g>
            </g>
                        <g>
                <g>
                    <path
                        d="M385.723,135.097v30.417c24.905,0,45.164,20.261,45.164,45.164h30.417C461.305,169.003,427.399,135.097,385.723,135.097z"
                    />
                </g>
            </g>
                        <g>
                <g>
                    <rect x="129.719" y="242.486" width="30.417" height="27.038"/>
                </g>
            </g>
        </svg>,
        'Валюта': <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M10 18.3334C14.6024 18.3334 18.3334 14.6024 18.3334 10C18.3334 5.39765 14.6024 1.66669 10 1.66669C5.39765 1.66669 1.66669 5.39765 1.66669 10C1.66669 14.6024 5.39765 18.3334 10 18.3334Z"
                stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
            <path
                d="M8.33335 6.66667V10H11.25C11.692 10 12.116 9.8244 12.4285 9.51184C12.7411 9.19928 12.9167 8.77536 12.9167 8.33333C12.9167 7.89131 12.7411 7.46738 12.4285 7.15482C12.116 6.84226 11.692 6.66667 11.25 6.66667H10.4167M8.33335 6.66667H10.4167M8.33335 6.66667H6.66669M10.4167 6.66667V5"
                stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
            <path
                d="M8.33335 13.3333V10H12.0834C12.5254 10 12.9493 10.1756 13.2619 10.4882C13.5744 10.8007 13.75 11.2246 13.75 11.6667C13.75 12.1087 13.5744 12.5326 13.2619 12.8452C12.9493 13.1577 12.5254 13.3333 12.0834 13.3333H10.4167M8.33335 13.3333H10.4167M8.33335 13.3333H6.66669H10.4167M10.4167 13.3333V15"
                stroke="white" strokeWidth="2" stroke-linecap="round" strokeLinejoin="round"/>
        </svg>,
        'Другое': <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
                d="M17.5709 12.1855L12.1925 17.563C12.0532 17.7024 11.8878 17.8131 11.7057 17.8885C11.5236 17.964 11.3284 18.0029 11.1313 18.0029C10.9342 18.0029 10.739 17.964 10.5569 17.8885C10.3748 17.8131 10.2094 17.7024 10.07 17.563L3.33337 10.8334V3.33337H10.8334L17.5709 10.0709C17.8501 10.3519 18.0069 10.732 18.0069 11.1282C18.0069 11.5243 17.8501 11.9044 17.5709 12.1855V12.1855Z"
                stroke="white" strokeWidth="2" strokeLinejoin="round"/>
            <path fillRule="evenodd" clipRule="evenodd"
                  d="M7.70837 8.75002C7.98464 8.75002 8.24959 8.64027 8.44494 8.44492C8.64029 8.24957 8.75004 7.98462 8.75004 7.70835C8.75004 7.43209 8.64029 7.16713 8.44494 6.97178C8.24959 6.77643 7.98464 6.66669 7.70837 6.66669C7.4321 6.66669 7.16715 6.77643 6.9718 6.97178C6.77645 7.16713 6.6667 7.43209 6.6667 7.70835C6.6667 7.98462 6.77645 8.24957 6.9718 8.44492C7.16715 8.64027 7.4321 8.75002 7.70837 8.75002Z"
                  fill="white"/>
        </svg>
        ,
    }

    const modes = [
        'ANARCHY-M',
        "GRIEF-M"
    ]

    return (
        <section id="products" className="products">
            <div className="products__container">
                <div className="products-block">
                    <h2 className="title">Наши товары:</h2>
                    <div className="top__end">
                        <div className="products-block__sort">
                            <div className="sort__search">
                                <div className="label">Выберите сервер:</div>
                                <button className="sort-box" type="button">
                                        <span className="sort-icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.5 2.5C18.5 1.94772 18.0523 1.5 17.5 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V7.3C1.5 7.85229 1.94772 8.3 2.5 8.3H17.5C18.0523 8.3 18.5 7.85228 18.5 7.3V2.5Z"
                                                    stroke="white" strokeWidth="2" strokeLinejoin="round"></path>
                                                <path
                                                    d="M18.5 12.7C18.5 12.1477 18.0523 11.7 17.5 11.7H2.5C1.94772 11.7 1.5 12.1477 1.5 12.7V17.5C1.5 18.0523 1.94772 18.5 2.5 18.5H17.5C18.0523 18.5 18.5 18.0523 18.5 17.5V12.7Z"
                                                    stroke="white" strokeWidth="2" strokeLinejoin="round"></path>
                                                <path
                                                    d="M5.32505 4.04999H4.47505C4.36233 4.04999 4.25423 4.09476 4.17453 4.17447C4.09483 4.25417 4.05005 4.36227 4.05005 4.47499V5.32499C4.05005 5.4377 4.09483 5.54581 4.17453 5.62551C4.25423 5.70521 4.36233 5.74999 4.47505 5.74999H5.32505C5.43777 5.74999 5.54587 5.70521 5.62557 5.62551C5.70527 5.54581 5.75005 5.4377 5.75005 5.32499V4.47499C5.75005 4.36227 5.70527 4.25417 5.62557 4.17447C5.54587 4.09476 5.43777 4.04999 5.32505 4.04999Z"
                                                    fill="white"></path>
                                                <path
                                                    d="M5.32505 14.25H4.47505C4.36233 14.25 4.25423 14.2948 4.17453 14.3745C4.09483 14.4542 4.05005 14.5623 4.05005 14.675V15.525C4.05005 15.6377 4.09483 15.7458 4.17453 15.8255C4.25423 15.9052 4.36233 15.95 4.47505 15.95H5.32505C5.43777 15.95 5.54587 15.9052 5.62557 15.8255C5.70527 15.7458 5.75005 15.6377 5.75005 15.525V14.675C5.75005 14.5623 5.70527 14.4542 5.62557 14.3745C5.54587 14.2948 5.43777 14.25 5.32505 14.25Z"
                                                    fill="white"></path>
                                                <path
                                                    d="M8.72495 4.04999H7.87495C7.76223 4.04999 7.65413 4.09476 7.57443 4.17447C7.49473 4.25417 7.44995 4.36227 7.44995 4.47499V5.32499C7.44995 5.4377 7.49473 5.54581 7.57443 5.62551C7.65413 5.70521 7.76223 5.74999 7.87495 5.74999H8.72495C8.83767 5.74999 8.94577 5.70521 9.02547 5.62551C9.10517 5.54581 9.14995 5.4377 9.14995 5.32499V4.47499C9.14995 4.36227 9.10517 4.25417 9.02547 4.17447C8.94577 4.09476 8.83767 4.04999 8.72495 4.04999Z"
                                                    fill="white"></path>
                                                <path
                                                    d="M8.72495 14.25H7.87495C7.76223 14.25 7.65413 14.2948 7.57443 14.3745C7.49473 14.4542 7.44995 14.5623 7.44995 14.675V15.525C7.44995 15.6377 7.49473 15.7458 7.57443 15.8255C7.65413 15.9052 7.76223 15.95 7.87495 15.95H8.72495C8.83767 15.95 8.94577 15.9052 9.02547 15.8255C9.10517 15.7458 9.14995 15.6377 9.14995 15.525V14.675C9.14995 14.5623 9.10517 14.4542 9.02547 14.3745C8.94577 14.2948 8.83767 14.25 8.72495 14.25Z"
                                                    fill="white"></path>
                                            </svg>
                                        </span>
                                    <select onChange={e => setActiveMode(e.target.value)} className={'select'}>
                                        {modes.map(mode => <option key={'mode-' + mode} value={mode}>{mode}</option>)}
                                    </select>
                                </button>
                            </div>
                        </div>
                        <div className="products-block__sort">
                            <div className="sort__search">
                                <div className="label">Поиск по товарам:</div>
                                <button className="sort-box" type="button">
									<span className="sort-icon">
										<svg width="20" height="20" viewBox="0 0 18 18" fill="none"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M11 13C7.68624 13 5 10.3138 5 7C5 3.68624 7.68624 1 11 1C14.3138 1 17 3.68624 17 7C17 10.3138 14.3138 13 11 13Z"
                                                stroke="white" strokeWidth="2" strokeLinejoin="round"></path>
                                            <path d="M6 12L1 17" stroke="white" strokeWidth="2" strokeLinecap="round"
                                                  strokeLinejoin="round"></path>
                                        </svg>
									</span>
                                    <input value={query} onChange={(e) => setQuery(e.target.value)} className="input"
                                           autoComplete="off" type="text"
                                           data-error="Ошибка"
                                           placeholder="Введите текст..."/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tabs" data-tabs="">
                    <nav className="tabs__navigation">
                        <button onClick={() => setActiveTag(undefined)} type="button"
                                className={"tabs__title" + (activeTag === undefined ? ' _tab-active' : '')}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M7.5 2.5H3.33333C2.8731 2.5 2.5 2.8731 2.5 3.33333V7.5C2.5 7.96024 2.8731 8.33333 3.33333 8.33333H7.5C7.96024 8.33333 8.33333 7.96024 8.33333 7.5V3.33333C8.33333 2.8731 7.96024 2.5 7.5 2.5Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                                <path d="M7.5 11.6667H3.33333C2.8731 11.6667 2.5 12.0398 2.5 12.5V16.6667C2.5 17.1269 2.8731 17.5 3.33333 17.5H7.5C7.96024 17.5 8.33333 17.1269 8.33333 16.6667V12.5C8.33333 12.0398 7.96024 11.6667 7.5 11.6667Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                                <path d="M14.5833 8.33333C14.9663 8.33333 15.3456 8.25789 15.6995 8.11132C16.0533 7.96474 16.3749 7.7499 16.6457 7.47906C16.9165 7.20822 17.1314 6.88669 17.2779 6.53283C17.4245 6.17896 17.5 5.79969 17.5 5.41667C17.5 5.03364 17.4245 4.65437 17.2779 4.30051C17.1314 3.94664 16.9165 3.62511 16.6457 3.35427C16.3749 3.08343 16.0533 2.86859 15.6995 2.72202C15.3456 2.57544 14.9663 2.5 14.5833 2.5C13.8097 2.5 13.0679 2.80729 12.5209 3.35427C11.9739 3.90125 11.6666 4.64312 11.6666 5.41667C11.6666 6.19021 11.9739 6.93208 12.5209 7.47906C13.0679 8.02604 13.8097 8.33333 14.5833 8.33333Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                                <path d="M16.6666 11.6667H12.5C12.0397 11.6667 11.6666 12.0398 11.6666 12.5V16.6667C11.6666 17.1269 12.0397 17.5 12.5 17.5H16.6666C17.1269 17.5 17.5 17.1269 17.5 16.6667V12.5C17.5 12.0398 17.1269 11.6667 16.6666 11.6667Z" stroke="white" strokeWidth="2" strokeLinejoin="round"/>
                            </svg>
                            <span>Все товары</span>
                        </button>
                        {tags.filter(({isHidden}) => !isHidden).map(tag => (
                            <button key={"tag-" + tag.id} onClick={() => setActiveTag(tag.id)} type="button"
                                    className={"tabs__title" + (activeTag === tag.id ? ' _tab-active' : '')}>
                                {tagIcons[tag.name]}
                                <span>{tag.name}</span>
                            </button>
                        ))}
                    </nav>
                    <div className="tabs__content">
                        <div className="tabs__body">
                            <motion.div
                                layout
                                className="products__items"
                            >
                                <AnimatePresence>
                                    {filteredProducts.map(product => (
                                        <Product key={'product-' + product.id} product={product}/>
                                    ))}
                                </AnimatePresence>
                                {/*{store.filteredProduct().map(product => {*/}
                                {/*    let className = ''*/}
                                {/*    store.showProduct(product.id)*/}

                                {/*    if (store.activeTag) {*/}
                                {/*        if (product.TagId !== store.activeTag) {*/}
                                {/*            className = 'hide'*/}

                                {/*            setTimeout(() => {*/}
                                {/*                store.hideProduct(product.id)*/}
                                {/*            }, 300)*/}
                                {/*        }*/}
                                {/*    }*/}

                                {/*    return <Product className={className} key={'product-' + product.id}*/}
                                {/*                    product={product}/>*/}
                                {/*})}*/}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default observer(Products);