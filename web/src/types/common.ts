export enum Pathname {
	HOME = "/",
	GOALS = "/goals"
}

export type ReducerAction<T, K> = {
	type: T;
	payload: K;
};
