import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {createLink} from "./store/action";

class App extends Component {
    state = {
        link: ''
    };


    submitForm = event => {
        event.preventDefault();

        const link = {
            link: this.state.link
        };
        this.props.create(link).then(() => {
            this.setState({link: ''})
        });
    };

    inputChangeHandler = event => {
        this.setState({link: event.target.value})
    };

    render() {
        return (
            <div className="App">
                <form onSubmit={this.submitForm}>
                    <h1>Shorten your link</h1>
                    <input type="text" onChange={this.inputChangeHandler} value={this.state.link}/>
                    <button type="submit">Shorten</button>
                    {this.props.shortLink ?
                        <div>
                            <p>Your link looks now like this</p>
                            <link href={this.props.shortLink}>http://links/{this.props.shortLink}</link>
                        </div>
                        : null}
                </form>
            </div>
        );
    }
}


const mapStateToProps = state => {
    return {
        shortLink: state.link
    }
};

const mapDispatchToProps = dispatch => {
    return {
        create: (link) => dispatch(createLink(link))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
