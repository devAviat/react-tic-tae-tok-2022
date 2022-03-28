import React from 'react';
import ReactDOM from 'react-dom';

function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return <div clssName="warning">Warning!!</div>;
}
class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showWarning: true };
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick = () => {
        this.setState((state) => ({
            showWarning: !state.showWarning,
        }));
    };

    render() {
        return (
            <div>
                <WarningBanner />
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'hide' : 'show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(<Page />, document.getElementById('root'));
