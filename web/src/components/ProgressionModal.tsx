import { type ProgressionModalProps, type GetMilesRes } from "../types/goals";
import { useFetchData } from "../hooks/useFetchData";

function ProgressionModal({ onClose, selectedRow }: ProgressionModalProps) {
	const { origin, destination, classType, tripType } = selectedRow ?? {};
	console.log(import.meta.env.VITE_API_ENDPOINT)
	const endPoint = `${import.meta.env.VITE_API_ENDPOINT}/miles?origin=${origin}&destination=${destination}&classType=${classType}&tripType=${tripType}`;
	const { isLoading, error, data } = useFetchData<GetMilesRes>(endPoint);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>{error}</div>

	return (
		<div>
			<p>{data?.classType}</p>
			<p>{data?.tripType}</p>
			{(data?.miles || []).map((m) => (
				<div key={m.description}>
					<p>{m.amount}</p>
					<p>{m.description}</p>
				</div>
			))}
		</div>
	)
}

export default ProgressionModal;
