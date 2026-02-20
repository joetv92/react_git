import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

function Page1() {
    const { state, dispatch } = useContext(CounterContext);

    return (
        <>
            <h1>{state.count}</h1>
            <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
            <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
            <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
        </>
    );
}
export default Page1;