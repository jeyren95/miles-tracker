import { useState, useEffect } from "react";

export function useFetchData<T>(endpoint: string) {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<T>();
	const [error, setError] = useState("");

	useEffect(function() {
		fetch(endpoint, {
			headers: {
				"Content-Type": "application/json",
				accept: "application/json",
			},
			method: "GET",
		})
			.then((res) => {
				if (!res.ok) {
					return res.json().then((data) => {
						throw new Error(data.message);
					});
				}
				return res.json();
			})
			.then((data: T) => setData(data))
			.catch((err) => {
				setError(err.message);
			})
			.finally(() => setIsLoading(false));

		return function() {
			setError("");
		};
	}, []);

	return {
		isLoading,
		data,
		error,
	};
}
