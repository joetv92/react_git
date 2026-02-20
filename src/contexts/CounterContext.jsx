import { createContext, useReducer } from "react";

export const CounterContext = createContext();

const initialState = { count: 0 };

function reducer(state, action) {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        case "RESET":
            return initialState;
        default:
            return state;
    }
}

export function CounterProvider({ children }) {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <CounterContext.Provider value={{ state, dispatch }}>
            {children}
        </CounterContext.Provider>
    );
}