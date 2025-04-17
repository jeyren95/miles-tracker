import { useState, type SyntheticEvent } from "react";
import { Tabs, Tab } from "@mui/material";
import { Link } from "react-router";

import { PATHNAME_TO_TEXT } from "../utils";

function NavTabs() {
	const [tabIndex, setTabIndex] = useState(0);

	function handleTabChange(_e: SyntheticEvent, newIndex: number) {
		setTabIndex(newIndex);
	}

	return (
		<Tabs
			className="nav-tabs"
			role="navigation"
			aria-label="navigation tabs"
			value={tabIndex}
			onChange={handleTabChange}
		>
			{Object.entries(PATHNAME_TO_TEXT).map(([pathname, text]) => (
				<Tab
					key={pathname}
					label={<Link to={pathname}>{text}</Link>}
				/>
			))}
		</Tabs>
	);
}

export default NavTabs;
