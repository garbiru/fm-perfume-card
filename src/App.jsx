import { useEffect } from "react";
import imageDesktop from "./assets/image-desktop.jpg";
import imageMobile from "./assets/image-mobile.jpg";
import IconCart from "./assets/icon-cart.svg";

function App() {
	useEffect(() => {
		window.addEventListener("resize", () => {
			const width = window.innerWidth;
			const img = document.querySelector(".item-display__img");
			if (width < 680) {
				img.src = imageMobile;
			} else {
				img.src = imageDesktop;
			}
		});
	}, []);
	return (
		<main>
			<div className="perfume-card">
				<div className="item-display">
					<img src={imageDesktop} alt="Perfume" className="item-display__img" />
				</div>
				<div className="item-info">
					<p className="item-info__category">PERFUME</p>

					<h1 className="item-info__title">Gabrielle Essence Eau De Parfum</h1>

					<p className="item-info__description">
						A floral, solar and volumptuous interpretation composed by Oliver
						Polge, Perfumer-Creator for the Gouse of CHANEL
					</p>

					<div className="item-info__pricing">
						<p className="pricing__current">$149.99</p>
						<p className="pricing__previous">$169.99</p>
					</div>

					<button className="item-info__btn">
						<img src={IconCart} alt="Cart icon" />
						Add to Cart
					</button>
				</div>
			</div>
		</main>
	);
}

export default App;
