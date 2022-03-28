import React from 'react';
import ReactDOM from 'react-dom';

function FormattedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = { date: new Date() };
    }
    //mount
    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date(),
        });
    }

    render() {
        return (
            <div>
                <h1>Hello, world!</h1>
                <FormattedDate date={this.state.date} />
            </div>
        );
    }
}

class LoggingButton extends React.Component {
    handleClick() {
        console.log('this is:', this);
    }

    render() {
        // 이 문법은 `this`가 handleClick 내에서 바인딩되도록 합니다.
        return <button onClick={() => this.handleClick()}>Click me</button>;
    }
}

function App() {
    return (
        <div>
            <div>
                <Clock />
                <LoggingButton />
            </div>
        </div>
    );
}

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: false };
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
