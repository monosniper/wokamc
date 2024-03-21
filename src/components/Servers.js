import React, {useEffect, useRef, useState} from 'react';
import * as d3 from "d3";
import {observer} from "mobx-react-lite";
import {useStores} from "../root-store-context";

const IP = "mc.woka.fun"

// const Tooltip = ({data, position}) => {
//     return (
//         <div
//             className="graph-tooltip"
//             style={{
//                 left: position.x - 20 + "px",
//                 top: position.y - 35 + "px",
//             }}
//         >
//             {data}
//         </div>
//     );
// };


const Servers = () => {
    const { main: { online: data } } = useStores()

    const [copied, setCopied] = useState(false)
    const svgRef = useRef(null)
    // const svgRef2 = useRef(null)

    const handleCopy = () => {
        navigator.clipboard.writeText(IP)
        setCopied(true)
        setTimeout(() => setCopied(false), 1500)
    }

    useEffect(() => {

        if (!data.length) return;

        const draw = () => {
            // const refs = [svgRef, svgRef2]
            // const modes = ['ANARCHY-M', 'GRIEF-M']
            //
            // modes.forEach((mode, i) => {
            //     const data = store.online[mode]
            //
            //     if(data.length) {
            //
            //     }
            // })

            // const ref = refs[i]

            const ref = svgRef

            const parentWidth = ref.current?.parentElement?.clientWidth || 400;

            const width = parentWidth - 40;
            const height = 150;

            const online_array = data.map(({online}) => online)

            const maxValue = d3.max(online_array) || 1;
            const minValue = d3.min(online_array) || 0;

            // Очищаем предыдущий график, если он был
            d3.select(ref.current).selectAll("*").remove();

            // Создаем SVG элемент
            const svg = d3
                .select(ref.current)
                .attr("width", width)
                .attr("height", height);

            // Создаем шкалу для x и y
            const xScale = d3
                .scaleLinear()
                .domain([
                    0,
                    online_array.length > 0 ? online_array.length - 1 : 1,
                ]) // Изменили диапазон
                .range([10, width - 10]);

            const yScale = d3
                .scaleLinear()
                .domain([minValue, maxValue])
                .range([height - 10, 20]);

            // Создаем градиент для заливки
            const gradient = svg
                .append("defs")
                .append("linearGradient")
                .attr("id", "chartGradient")
                .attr("x1", "100%")
                .attr("x2", "100%")
                .attr("y1", "0%")
                .attr("y2", "100%");

            gradient
                .append("stop")
                .attr("offset", "0%")
                .attr("stop-color", "#5c81d7"); // Начальный цвет градиента (яркий)

            gradient
                .append("stop")
                .attr("offset", "100%")
                .attr("stop-color", "#a4b8e70d"); // Конечный цвет градиента (тусклый)

            // Создаем кривую Безье
            d3.curveCardinal.tension(0.3); // Здесь можно настроить уровень напряжения (tension)

            // Создаем заливку под линией с использованием градиента
            const area = d3
                .area()
                .x((_, i) => xScale(i))
                .y0(height) // Начало заливки на дне графика
                .y1((d) => yScale(d));

            svg
                .style("overflow", "visible")

            // Рисуем заливку с градиентом
            svg
                .append("path")
                .datum(online_array)
                .transition()
                .duration(500)
                .attr("fill", "url(#chartGradient)") // Используем градиент
                .attr("d", area);

            // Создаем линию с кривой Безье
            const line = d3
                .line()
                .x((_, i) => xScale(i))
                .y((d) => yScale(d))
                .curve(d3.curveCardinal.tension(0.3));

            // Рисуем линию поверх заливки
            svg
                .append("path")
                .datum(online_array)
                .transition()
                .duration(200)
                .attr("fill", "none") // Нет заливки
                .attr("stroke", "#2a354f") // Цвет линии
                .attr("stroke-width", 4) // Толщина линии
                .attr("d", line);

            svg
                .selectAll(".data-point")
                .data(online_array)
                .enter()
                .append("circle")
                .attr("class", "data-point")
                .attr("cx", (_, i) => xScale(i))
                .attr("cy", (d) => yScale(d))
                .attr("r", 4) // Размер точки
                .attr("fill", "#2e4477")
                .style("fill-opacity", 1);

            // Обработчик наведения на точку
            svg
                .selectAll(".data-point")
                .attr("fill", "#2e4477") // Цвет точки
                .style("fill-opacity", 0);

            // const _min = maxValue - minValue >= 10 ? minValue : (minValue-1 - (maxValue - minValue))

            const leftScale = d3.scaleLinear()
                .domain([minValue, maxValue])
                .range([height, 0]);

            const y_axis = d3.axisLeft()
                .scale(leftScale).tickFormat(d3.format('d'));

            svg.append("g")
                .attr("transform", "translate(-5, 0)")
                .attr("color", "#2e4477")
                .call(y_axis);

            const scale = d3.scaleUtc()
                .domain([new Date(data[0].createdAt), new Date(data[data.length-1].createdAt)])
                .range([0, width]);

            const x_axis = d3.axisBottom()
                .scale(scale).ticks(d3.utcMinute.every(2));

            svg.append("g")
                .attr("transform", "translate(0, "+(height+5)+")")
                .attr("color", "#2e4477")
                .call(x_axis);
        };

        draw();
        window.addEventListener("resize", draw);

        return () => {
            window.removeEventListener("resize", draw);

        }
    }, [data]);

    return (
        <section className="servers">
            <div className="servers__container">
                <h2 className="servers__title title">Мониторинг сервера:</h2>
                <div className="servers__items">
                    <div className="server">
                        <div className="server__header">
                            <div className="server__title">SERVER-M 🌿</div>
                            <div className="server__label">
                                1.16.5 - 1.20.4
                            </div>
                        </div>
                        <div className="server-address">
                            <div className="server-address__value">{copied ? "Скопировано!" : IP}</div>
                            <button onClick={handleCopy} className="server-address__btn" type="button">
                                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.875 4.662V2.9295C4.8751 2.64979 4.98628 2.38158 5.1841 2.18383C5.38191 1.98609 5.65017 1.875 5.92987 1.875H15.0701C15.3499 1.875 15.6182 1.98614 15.816 2.18397C16.0139 2.38179 16.125 2.6501 16.125 2.92988V12.0705C16.1249 12.3502 16.0137 12.6184 15.8159 12.8162C15.6181 13.0139 15.3498 13.125 15.0701 13.125H13.3189" stroke="white"></path>
                                    <path d="M12.0705 4.875H2.92913C2.64948 4.8752 2.38137 4.98642 2.1837 5.18423C1.98604 5.38204 1.875 5.65023 1.875 5.92987V15.0701C1.875 15.3499 1.98614 15.6182 2.18397 15.816C2.38179 16.0139 2.6501 16.125 2.92988 16.125H12.0705C12.3502 16.1249 12.6184 16.0137 12.8162 15.8159C13.0139 15.6181 13.125 15.3498 13.125 15.0701V5.93025C13.1251 5.79169 13.0978 5.65448 13.0448 5.52645C12.9918 5.39843 12.9141 5.28209 12.8162 5.1841C12.7182 5.0861 12.6019 5.00837 12.4739 4.95533C12.3459 4.9023 12.2087 4.875 12.0701 4.875H12.0705Z" stroke="white"></path>
                                </svg>
                            </button>
                        </div>
                        <div className={"coin-chart"}>
                            <svg className="pointer-events-auto" ref={svgRef}></svg>
                        </div>
                        {/*<div className="server__footer">*/}
                        {/*    <p>Сейчас играют:</p>*/}
                        {/*    <div className="server__online">*/}
                        {/*        <i>*/}
                        {/*            <img src="img/icons/users.svg" alt="Image"/>*/}
                        {/*        </i>*/}
                        {/*        <span>2 из 2023</span>*/}
                        {/*    </div>*/}
                        {/*    <div className="progress">*/}
                        {/*        <div className="progress-bar" role="progressbar" aria-valuenow="0.09886"*/}
                        {/*             aria-valuemin="0"*/}
                        {/*             aria-valuemax="100" style={{width: '20%', background: '#2a354f', opacity: 1}}>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                    {/*<div className="server">*/}
                    {/*    <div className="server__header">*/}
                    {/*        <div className="server__title">ANARCHY-M 🔥</div>*/}
                    {/*        <div className="server__label">*/}
                    {/*            1.16.5 - 1.20.4*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*    <div className="server-address">*/}
                    {/*        <div className="server-address__value">{copied ? "Скопировано!" : IP}</div>*/}
                    {/*        <button onClick={handleCopy} className="server-address__btn" type="button">*/}
                    {/*            <svg width="18" height="18" viewBox="0 0 18 18" fill="none"*/}
                    {/*                 xmlns="http://www.w3.org/2000/svg">*/}
                    {/*                <path d="M4.875 4.662V2.9295C4.8751 2.64979 4.98628 2.38158 5.1841 2.18383C5.38191 1.98609 5.65017 1.875 5.92987 1.875H15.0701C15.3499 1.875 15.6182 1.98614 15.816 2.18397C16.0139 2.38179 16.125 2.6501 16.125 2.92988V12.0705C16.1249 12.3502 16.0137 12.6184 15.8159 12.8162C15.6181 13.0139 15.3498 13.125 15.0701 13.125H13.3189" stroke="white"></path>*/}
                    {/*                <path d="M12.0705 4.875H2.92913C2.64948 4.8752 2.38137 4.98642 2.1837 5.18423C1.98604 5.38204 1.875 5.65023 1.875 5.92987V15.0701C1.875 15.3499 1.98614 15.6182 2.18397 15.816C2.38179 16.0139 2.6501 16.125 2.92988 16.125H12.0705C12.3502 16.1249 12.6184 16.0137 12.8162 15.8159C13.0139 15.6181 13.125 15.3498 13.125 15.0701V5.93025C13.1251 5.79169 13.0978 5.65448 13.0448 5.52645C12.9918 5.39843 12.9141 5.28209 12.8162 5.1841C12.7182 5.0861 12.6019 5.00837 12.4739 4.95533C12.3459 4.9023 12.2087 4.875 12.0701 4.875H12.0705Z" stroke="white"></path>*/}
                    {/*            </svg>*/}
                    {/*        </button>*/}
                    {/*    </div>*/}
                    {/*    <div className={"coin-chart"}>*/}
                    {/*        <svg className="pointer-events-auto" ref={svgRef2}></svg>*/}
                    {/*    </div>*/}
                    {/*    /!*<div className="server__footer">*!/*/}
                    {/*    /!*    <p>Сейчас играют:</p>*!/*/}
                    {/*    /!*    <div className="server__online">*!/*/}
                    {/*    /!*        <i>*!/*/}
                    {/*    /!*            <img src="img/icons/users.svg" alt="Image"/>*!/*/}
                    {/*    /!*        </i>*!/*/}
                    {/*    /!*        <span>2 из 2023</span>*!/*/}
                    {/*    /!*    </div>*!/*/}
                    {/*    /!*    <div className="progress">*!/*/}
                    {/*    /!*        <div className="progress-bar" role="progressbar" aria-valuenow="0.09886"*!/*/}
                    {/*    /!*             aria-valuemin="0"*!/*/}
                    {/*    /!*             aria-valuemax="100" style={{width: '20%', background: '#2a354f', opacity: 1}}>*!/*/}
                    {/*    /!*        </div>*!/*/}
                    {/*    /!*    </div>*!/*/}
                    {/*    /!*</div>*!/*/}
                    {/*</div>*/}
                </div>
            </div>
        </section>
    );
};

export default observer(Servers);