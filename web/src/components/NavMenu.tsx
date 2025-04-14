import { NavLink } from "react-router";

import { Pathname } from "../types/common";

function NavMenu() {
	return (
		<nav className="nav-menu">
			<NavLink to={Pathname.HOME}>Summary</NavLink>
			<NavLink to={Pathname.GOALS}>Your Goals</NavLink>
		</nav>
	);
}

export default NavMenu;
