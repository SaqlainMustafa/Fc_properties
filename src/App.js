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
import HomeFooter from "./components/HomeFooter";


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
				<HomeFooter />
			</BrowserRouter>
		</>
	);
}

export default App;
