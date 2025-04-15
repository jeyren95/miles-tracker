import { useState, useEffect } from "react";

export function useFetchData<T>(endpoint: string) {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<T>();
	const [error, setError] = useState("");

	useEffect(() => {
		fetch(endpoint, {
			headers: {
				"Content-Type": "application/json",
				accept: "application/json",
			},
			method: "GET",
		})
			.then((res) => res.json())
			.then((data) => setData(data))
			.catch((err) => setError(err.message))
			.finally(() => setIsLoading(false));
	}, []);

	return {
		isLoading,
		data,
		error,
	}
}
