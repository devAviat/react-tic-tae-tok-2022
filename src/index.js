import React from 'react';
import ReactDOM from 'react-dom';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
    }

    handleChange(event) {
        this.setState({ value: event.targe.value });
    }

    handleSumbmit(event) {
        alert('A name was submitted : ' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSumbmit}>
                    <label>
                        Name:
                        <input type="text" value={this.state.value} onChange={this.handleChange} />
                    </label>
                    <input type="text" value="Submit" />
                </form>
                <textarea>Hello there, this is some text in a text area</textarea>
            </div>
        );
    }
}

class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 'Please write an essay about your favorite DOM element',
        };
    }

    handelChange(event) {
        this.setState({ value: event.target.value });
    }
    handelSubmit(event) {
        alert('An essay was submitted:' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Essay:
                    <textarea value={this.state.value} onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}
class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: 'coconut' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        console.log(event.target.value);
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Pick your favorite flavor:
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="grapefruit">Grapefruit</option>
                        <option value="lime">Lime</option>
                        <option value="coconut">Coconut</option>
                        <option value="mango">Mango</option>
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

ReactDOM.render(<FlavorForm />, document.getElementById('root'));
