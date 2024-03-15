import React from 'react';
import Hero from "../components/Hero";
import Products from "../components/Products";
import Servers from "../components/Servers";
// import Socials from "../components/Socials";
import LastBuys from "../components/LastBuys";
import Layout from "../layouts/main";

const Home = () => {
    return (
	<Layout>
	    <Hero
			scroll_id={'products'}
			btn_text={"К товарам"}
			text={"Скорее заходи на сервер и получай массу положительных эмоций! Ты сможешь почувствовать себя лидером среди других! Здесь ты сможешь отдохнуть и распробовать хорошую механику пвп на ПВП-арене и на наших дуэлях!"}
			title={"WOKA"}
			title_2={"уникальный сервер"}
			video={"hero.webp"}
		/>
		{/*<div className="light light_1"></div>*/}
		{/*<div className="light light_2"></div>*/}
	    <Products />
	    <Servers />
	    {/*<Socials />*/}
	    <LastBuys />
	</Layout>
    );
};

export default Home;