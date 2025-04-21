import {
	createContext,
	useState,
	type Dispatch,
	type SetStateAction,
	type ReactNode,
} from "react";

import { getLocalStorage } from "./utils";

type User = {
	totalMiles: number;
};

const storedUser = getLocalStorage<User>("user");
const initialUser = storedUser || { totalMiles: 0 };
export const UserContext = createContext<{
	user: User;
	setUser: Dispatch<SetStateAction<User>>;
} | null>(null);
UserContext.displayName = "UserContext";

export function UserContextProvider({ children }: { children: ReactNode }) {
	const [user, setUser] = useState<User>(initialUser);

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
	);
}
