import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Footer from "./components/footer";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
