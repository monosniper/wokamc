import React, {useContext, useEffect} from 'react';
import {Context} from "../index";
import {toJS} from "mobx";
import {observer} from "mobx-react-lite";
import Product from "./Product";

const Products = () => {
    const {store} = useContext(Context);

    return (
        <section id="products" className="products">
            <div className="products__container">
                <div className="products-block">
                    <h2 className="title">Наши товары:</h2>
                    <div className="top__end">
                        <div className="products-block__sort">
                            <div className="sort__search">
                                <div className="label">Поиск по товарам:</div>
                                <button className="sort-box" type="button">
									<span className="sort-icon">
										<svg width="20" height="20" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M11 13C7.68624 13 5 10.3138 5 7C5 3.68624 7.68624 1 11 1C14.3138 1 17 3.68624 17 7C17 10.3138 14.3138 13 11 13Z" stroke="white"></path>
											<path d="M6 12L1 17" stroke="white"></path>
										</svg>
									</span>
                                    <input value={store.query} onChange={(e) => store.setQuery(e.target.value)} className="input" autoComplete="off" type="text"
                                           data-error="Ошибка"
                                           placeholder="Введите текст..."/>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="tabs" data-tabs="">
                    <nav className="tabs__navigation">
                        <button onClick={() => store.setActiveTag(undefined)} type="button"
                                className={"tabs__title" + (store.activeTag === undefined ? ' _tab-active' : '')}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-3"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M9.9996 2.08331L7.45252 7.28248L1.66669 8.12081L5.85794 12.2183L4.85585 17.9166L10 15.175L15.1438 17.9166L14.15 12.2187L18.3334 8.12123L12.5796 7.28248L10 2.08331H9.9996Z"></path>
                            </svg>
                            <span>Все товары</span>
                        </button>
                        {store.tags.map(tag => (
                            <button key={"tag-"+tag.id} onClick={() => store.setActiveTag(tag.id)} type="button"
                                    className={"tabs__title" + (store.activeTag === tag.id ? ' _tab-active' : '')}>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" className="mr-3"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.9996 2.08331L7.45252 7.28248L1.66669 8.12081L5.85794 12.2183L4.85585 17.9166L10 15.175L15.1438 17.9166L14.15 12.2187L18.3334 8.12123L12.5796 7.28248L10 2.08331H9.9996Z"></path>
                                </svg>
                                <span>{tag.name}</span>
                            </button>
                        ))}
                    </nav>
                    <div className="tabs__content">
                        <div className="tabs__body">
                            <div className="products__items">
                                {store.products.filter(product => product.title.toLowerCase().search(store.query.toLowerCase()) !== -1).map(product => {
                                    let className = ''
                                    store.showProduct(product.id)

                                    if (store.activeTag) {
                                        if (product.TagId !== store.activeTag) {
                                            className = 'hide'

                                            setTimeout(() => {
                                                store.hideProduct(product.id)
                                            }, 300)
                                        }
                                    }

                                    return <Product className={className} key={'product-' + product.id}
                                                    product={product}/>
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default observer(Products);