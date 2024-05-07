import React from "react";
import './App.css';

interface AppState {
    value: number
}

const App = () => {
    const [counter, setCounter] = React.useState<AppState>({value: 0});

    const increment = () => {
        setCounter(prevState => ({value: prevState.value + 1}));
    }

    const decrement = () => {
        setCounter(prevState => ({value: prevState.value - 1}))
    }

    const reset = () =>{
        setCounter({value: 0});
    }

    return (
        <div>
            <h2>{counter.value}</h2>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>reset</button>
        </div>
    );
};

export default App;