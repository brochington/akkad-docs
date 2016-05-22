import React, {Component} from 'react';
import TallNav from './partials/TallNav';

class App extends Component {
    render() {
        return (
            <div className="app col w-100vw">
                <div className='row 100vw'>
                    <TallNav />
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default App;
