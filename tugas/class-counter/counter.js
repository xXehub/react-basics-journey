// Counter Button Component (menggunakan props)
class CounterButton extends React.Component {
    render() {
        return (
            <button onClick={this.props.onClick} style={{ margin: "10px" }}>
                {this.props.children}
            </button>
        );
    }
}

// Main Counter App Component (Class Component dengan State)
class CounterApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = { itung: 0 };
    }

    handleIncrement = () => {
        this.setState({ itung: this.state.itung + 1 });
    };

    handleDecrement = () => {
        this.setState({ itung: this.state.itung - 1 });
    };

    render() {
        return (
            <div>
                <h1>Pengenalan React Tingkat Dasar</h1>
                <h2>Counter: {this.state.itung}</h2>
                <CounterButton onClick={this.handleDecrement}>-1</CounterButton>
                <CounterButton onClick={this.handleIncrement}>+1</CounterButton>
            </div>
        );
    }
}

ReactDOM.createRoot(document.getElementById('root')).render(<CounterApp />);