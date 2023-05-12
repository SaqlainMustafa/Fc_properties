// import '../src/scss/_navbar.scss';
import {
	BrowserRouter,
	Routes,
	Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Layout from "./components/Layout";
import Buy from './components/Buy';
import Rent from './components/Rent';
import Places from "./components/Places";


function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path='/' element={<Layout />}> </Route>
					<Route path='/buy' element={<Buy />}> </Route>
					<Route path='/rent' element={<Rent />}> </Route>
				</Routes>
				<Footer />
			</BrowserRouter>
			<Places/>
		</>
	);
}

export default App;
