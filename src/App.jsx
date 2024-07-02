import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./pages/Register";
import Footer from "./components/footer";
import Courses from "./pages/Courses";
import Admin from "./pages/Admin";

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/register" element={<Register />} />
					<Route path="/courses/:id" element={<Courses />} />
					<Route path="/admin" element={<Admin />} />
				</Routes>
				<Footer />
			</Router>
		</>
	);
}

export default App;
