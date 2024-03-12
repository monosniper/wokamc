import React from 'react';

const Socials = () => {
    return (
	<section className="socials">
	    <div className="socials__container">
		<h2 className="socials__title title">Мы в социальных сетях:</h2>
		<div className="socials__items">
		    <div className="socials-item">
			<div className="socials-item__block">
			    <a className="stretched-link" href="https://vk.com/wokamc" target={"_blank"}></a>
			    <div className="socials-item__icon">
				<svg width="27" height="17" viewBox="0 0 27 17" fill="none" xmlns="http://www.w3.org/2000/svg">
				    <path
					d="M14.7057 17C5.48087 17 0.219238 10.6186 0 0H4.62086C4.77264 7.79379 8.17918 11.0951 10.8775 11.7758V0H15.2287V6.72172C17.8933 6.43243 20.6924 3.36937 21.6369 0H25.988C25.2628 4.15215 22.2272 7.21522 20.0685 8.47447C22.2272 9.4955 25.6846 12.1672 27 17H22.2103C21.1816 13.7668 18.6185 11.2653 15.2287 10.9249V17H14.7057Z"
					fill="#0077FF"></path>
				</svg>
			    </div>
			    <div className="socials-item__title">
				<span>Мы</span>
				<span>ВКонтакте</span>
			    </div>
			</div>
			<i className="_icon-arrow"></i>
		    </div>
		    <div className="socials-item">
			<div className="socials-item__block">
			    <a className="stretched-link" href="https://discord.gg/4Ph6MTtyNy" target={"_blank"}></a>
			    <div className="socials-item__icon">
				<svg width="26" height="21" viewBox="0 0 31 26" fill="none" xmlns="http://www.w3.org/2000/svg">
				    <path
					d="M26.2421 2.84543C24.2367 1.89709 22.0926 1.20788 19.8509 0.81543C19.5756 1.31853 19.2539 1.99521 19.0322 2.53351C16.6492 2.17128 14.2882 2.17128 11.949 2.53351C11.7273 1.99521 11.3984 1.31853 11.1206 0.81543C8.87649 1.20788 6.72985 1.89962 4.72453 2.85046C0.679783 9.02842 -0.41668 15.0529 0.131553 20.9919C2.81424 23.0168 5.41409 24.2469 7.97006 25.0519C8.60114 24.174 9.16398 23.2407 9.64886 22.2572C8.7254 21.9025 7.84092 21.4648 7.00519 20.9567C7.22691 20.7907 7.44378 20.6171 7.65331 20.4385C12.7506 22.8483 18.289 22.8483 23.3255 20.4385C23.5375 20.6171 23.7543 20.7907 23.9736 20.9567C23.1354 21.4673 22.2485 21.905 21.325 22.2597C21.8099 23.2407 22.3703 24.1765 23.0038 25.0543C25.5623 24.2494 28.1645 23.0194 30.8472 20.9919C31.4905 14.1071 29.7483 8.13793 26.2421 2.84543ZM10.3433 17.3395C8.81313 17.3395 7.55827 15.8956 7.55827 14.1373C7.55827 12.379 8.78633 10.9326 10.3433 10.9326C11.9003 10.9326 13.1551 12.3765 13.1283 14.1373C13.1308 15.8956 11.9003 17.3395 10.3433 17.3395ZM20.6355 17.3395C19.1053 17.3395 17.8504 15.8956 17.8504 14.1373C17.8504 12.379 19.0785 10.9326 20.6355 10.9326C22.1924 10.9326 23.4473 12.3765 23.4205 14.1373C23.4205 15.8956 22.1924 17.3395 20.6355 17.3395Z"
					fill="#5865F2"></path>
				</svg>
			    </div>
			    <div className="socials-item__title">
				<span>Мы в</span>
				<span>Discord</span>
			    </div>
			</div>
			<i className="_icon-arrow"></i>
		    </div>
		</div>
	    </div>
	</section>
    );
};

export default Socials;