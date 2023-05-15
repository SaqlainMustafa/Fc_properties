// import '../src/scss/_navbar.scss';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Layout from "./components/Layout";
import Buy from './components/Buy';
import Rent from './components/Rent';
import Footer from "./components/Footer";
import About from "./components/About";
import ContactUs from "./components/ContactUs";
// import secondaryMarket from "./components/SecondaryMarket";
import SecondaryMarket from "./components/SecondaryMarket";


function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Layout />}> </Route>
					<Route path='/buy' element={<Buy />}> </Route>
					<Route path='/rent' element={<Rent />}> </Route>
					<Route path='/about' element={<About />}> </Route>
					<Route path='/contact' element={<ContactUs />}> </Route>
					<Route path='/secondarymarket' element={<SecondaryMarket />}> </Route>
				</Routes>
				<Footer />
			</BrowserRouter>
		</>
	);
}

export default App;
