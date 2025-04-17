import { BrowserRouter, Routes, Route } from "react-router";

import HomePage from "./pages/HomePage";
import GoalsPage from "./pages/GoalsPage";

import NavTabs from "./components/NavTabs";

import { Pathname } from "./types/common";

function App() {
	return (
		<div className="main">
			<BrowserRouter>
				<NavTabs />
				<Routes>
					<Route path={Pathname.HOME} element={<HomePage />} />
					<Route path={Pathname.GOALS} element={<GoalsPage />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
}

export default App;
