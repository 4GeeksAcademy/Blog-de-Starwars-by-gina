import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import { Demo } from "./views/demo";
import injectContext from "./store/appContext";
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import DetallesPersonajes from './views/detallesPersonajes';
import DetallesPlanetas from './views/detallesPlanetas';
import DetallesVehiculos from "./views/detallesVehiculos";

const Layout = () => {
	const basename = process.env.BASENAME || "";

	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/personajes/:id" element={<DetallesPersonajes />} />
						<Route path="/planetas/:id" element={<DetallesPlanetas />} />
						<Route path="/vehiculos/:id" element={<DetallesVehiculos />} />
						<Route path="/demo" element={<Demo />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
					</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);