// Counter Button Component (menggunakan props)
const CounterButton = (props) => {
    return (
        <button onClick={props.onClick} style={{ margin: "10px" }}>
            {props.children}
        </button>
    );
}

// Main Counter App Component
const CounterApp = () => {
    const [itung, setCount] = React.useState(0);

    const handleIncrement = () => {
        setCount(itung + 1);
    };

    const handleDecrement = () => {
        setCount(itung - 1);
    };

    return (
        <div>
            <h1>Pengenalan React Tingkat Dasar</h1>
            <h2>Counter: {itung}</h2>
            <CounterButton onClick={handleDecrement}>-1</CounterButton>
            <CounterButton onClick={handleIncrement}>+1</CounterButton>
        </div>
    );
}

ReactDOM.createRoot(document.getElementById('root')).render(<CounterApp />);