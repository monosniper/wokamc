import React, {useEffect, useState} from 'react';
import Layout from "../layouts/main";
import Table from "../components/Table";
import ReactPaginate from "react-paginate";
import Hero from "../components/Hero";
import {getPunishments} from "../api";

const Punishments = () => {
    const [types, setTypes] = useState([
        {label: 'Баны', id: 'bans', count: 0},
        {label: 'Муты', id: 'mutes', count: 0},
        {label: 'Кики', id: 'kicks', count: 0},
    ])
    const modes = [
        // 'ANARCHY-M',
        "GRIEF-M"
    ]

    const [activeType, setActiveType] = useState('bans')
    // const [activeMode, setActiveMode] = useState('ANARCHY-M')
    const [activeMode, setActiveMode] = useState('GRIEF-M')
    const [query, setQuery] = useState('')
    const [data, setData] = useState({})
    const [items, setItems] = useState([])

    useEffect(() => {
        getPunishments().then(rs => setData(rs))
    }, [])

    useEffect(() => {
        if (data[activeType]) {
            setItems(data[activeType]
                .filter(item => item.server_origin === activeMode && item.name.toLowerCase().search(query.toLowerCase()) !== -1))
            setTypes(types.map(type => {
                type.count = data[type.id]
                    .filter(item => item.server_origin === activeMode && item.name.toLowerCase().search(query.toLowerCase()) !== -1).length

                return type
            }))
        }
    }, [data, activeType, activeMode, query])

    const itemsPerPage = 15
    const [itemOffset, setItemOffset] = useState(0);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = items.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(items.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % items.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    return (
        <Layout>
            <Hero
                scroll_id={'table'}
                btn_text={"К таблице"}
                text={"Скорее заходи на сервер и получай массу положительных эмоций! Ты сможешь почувствовать себя лидером среди других! Здесь ты сможешь отдохнуть и распробовать хорошую механику пвп на ПВП-арене и на наших дуэлях!"}
                title={"WOKA"}
                title_2={"Наказания сервера"}
                video={"hero-2.webp"}
                container_styles={{flexDirection: 'row-reverse'}}
            />
            <section id="table" className="punishments">
                <div className="products__container">
                    <div className="products-block">
                        <h2 className="title">Наказания:</h2>
                        <div className={"top__end"}>
                            <div className="products-block__sort">
                                <div className="sort__search">
                                    <div className="label">Выберите сервер:</div>
                                    <button className="sort-box" type="button">
                                        <span className="sort-icon">
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M18.5 2.5C18.5 1.94772 18.0523 1.5 17.5 1.5H2.5C1.94772 1.5 1.5 1.94772 1.5 2.5V7.3C1.5 7.85229 1.94772 8.3 2.5 8.3H17.5C18.0523 8.3 18.5 7.85228 18.5 7.3V2.5Z" stroke="white" strokeWidth="2" strokeLinejoin="round"></path>
                                                <path d="M18.5 12.7C18.5 12.1477 18.0523 11.7 17.5 11.7H2.5C1.94772 11.7 1.5 12.1477 1.5 12.7V17.5C1.5 18.0523 1.94772 18.5 2.5 18.5H17.5C18.0523 18.5 18.5 18.0523 18.5 17.5V12.7Z" stroke="white" strokeWidth="2" strokeLinejoin="round"></path>
                                                <path d="M5.32505 4.04999H4.47505C4.36233 4.04999 4.25423 4.09476 4.17453 4.17447C4.09483 4.25417 4.05005 4.36227 4.05005 4.47499V5.32499C4.05005 5.4377 4.09483 5.54581 4.17453 5.62551C4.25423 5.70521 4.36233 5.74999 4.47505 5.74999H5.32505C5.43777 5.74999 5.54587 5.70521 5.62557 5.62551C5.70527 5.54581 5.75005 5.4377 5.75005 5.32499V4.47499C5.75005 4.36227 5.70527 4.25417 5.62557 4.17447C5.54587 4.09476 5.43777 4.04999 5.32505 4.04999Z" fill="white"></path>
                                                <path d="M5.32505 14.25H4.47505C4.36233 14.25 4.25423 14.2948 4.17453 14.3745C4.09483 14.4542 4.05005 14.5623 4.05005 14.675V15.525C4.05005 15.6377 4.09483 15.7458 4.17453 15.8255C4.25423 15.9052 4.36233 15.95 4.47505 15.95H5.32505C5.43777 15.95 5.54587 15.9052 5.62557 15.8255C5.70527 15.7458 5.75005 15.6377 5.75005 15.525V14.675C5.75005 14.5623 5.70527 14.4542 5.62557 14.3745C5.54587 14.2948 5.43777 14.25 5.32505 14.25Z" fill="white"></path>
                                                <path d="M8.72495 4.04999H7.87495C7.76223 4.04999 7.65413 4.09476 7.57443 4.17447C7.49473 4.25417 7.44995 4.36227 7.44995 4.47499V5.32499C7.44995 5.4377 7.49473 5.54581 7.57443 5.62551C7.65413 5.70521 7.76223 5.74999 7.87495 5.74999H8.72495C8.83767 5.74999 8.94577 5.70521 9.02547 5.62551C9.10517 5.54581 9.14995 5.4377 9.14995 5.32499V4.47499C9.14995 4.36227 9.10517 4.25417 9.02547 4.17447C8.94577 4.09476 8.83767 4.04999 8.72495 4.04999Z" fill="white"></path>
                                                <path d="M8.72495 14.25H7.87495C7.76223 14.25 7.65413 14.2948 7.57443 14.3745C7.49473 14.4542 7.44995 14.5623 7.44995 14.675V15.525C7.44995 15.6377 7.49473 15.7458 7.57443 15.8255C7.65413 15.9052 7.76223 15.95 7.87495 15.95H8.72495C8.83767 15.95 8.94577 15.9052 9.02547 15.8255C9.10517 15.7458 9.14995 15.6377 9.14995 15.525V14.675C9.14995 14.5623 9.10517 14.4542 9.02547 14.3745C8.94577 14.2948 8.83767 14.25 8.72495 14.25Z" fill="white"></path>
                                            </svg>
                                        </span>
                                        <select onChange={e => setActiveMode(e.target.value)} className={'select'}>
                                            {modes.map(mode => <option key={'mode-'+mode} value={mode}>{mode}</option>)}
                                        </select>
                                    </button>
                                </div>
                            </div>
                            <div className="products-block__sort">
                                <div className="sort__search">
                                    <div className="label">Поиск по нику:</div>
                                    <button className="sort-box" type="button">
                                        <span className="sort-icon">
                                            <svg width="20" height="20"
                                                 viewBox="0 0 18 18" fill="none"
                                                 xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M11 13C7.68624 13 5 10.3138 5 7C5 3.68624 7.68624 1 11 1C14.3138 1 17 3.68624 17 7C17 10.3138 14.3138 13 11 13Z"
                                                    stroke="white"></path>
                                                <path d="M6 12L1 17"
                                                      stroke="white"></path>
                                            </svg>
                                        </span>
                                        <input value={query} className="input" autoComplete="off" type="text"
                                               name="form[]" onChange={e => setQuery(e.target.value)}
                                               placeholder="Введите текст..."/>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="tabs" data-tabs="">
                        <nav className="tabs__navigation">
                            {types.map(type => {
                                return <button key={'type-'+type.id} onClick={() => setActiveType(type.id)} type="button"
                                               className={"tabs__title" + (activeType === type.id ? ' _tab-active' : '')}>
                                    <span>{type.label} ({type.count})</span>
                                </button>
                            })}
                        </nav>
                        <div className="tabs__content">
                            <div className="tabs__body">
                                <Table items={currentItems}/>
                                <ReactPaginate
                                    className={'pagination'}
                                    breakLabel="..."
                                    nextLabel=">"
                                    onPageChange={handlePageClick}
                                    pageRangeDisplayed={3}
                                    pageCount={pageCount}
                                    previousLabel="<"
                                    activeClassName={'selected'}
                                    renderOnZeroPageCount={null}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Punishments;