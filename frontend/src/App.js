import React, {Component} from 'react';
import './App.css';
import {connect} from "react-redux";
import {createLink, openShortLink} from "./store/action";

class App extends Component {
    state = {
        link: ''
    };


    submitForm = event => {
        event.preventDefault();

        let link = {
           originalURL: this.state.link
        };
     
        this.props.create(link).then(() => {
            this.setState({link: ''})
        });
    };

    inputChangeHandler = event => {
        this.setState({link: event.target.value})
    };
    openShortLink = link => {
        this.props.openShortLink(link)
    };

    render() {
        return (
            <div className="App">
                <form onSubmit={this.submitForm}>
                    <h1>Shorten your link</h1>
                    <input type="text" onChange={this.inputChangeHandler} value={this.state.link}/>
                    <button type="submit">Shorten</button>
                </form>
                    {this.props.shortLink ?
                        <div>
                            <p>Your link looks now like this</p>
                            <button onClick={() => this.openShortLink(this.props.shortLink)}>http://links/{this.props.shortLink}</button>
                        </div>
                        : null}
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
        create: link => dispatch(createLink(link)),
        openShortLink: link => dispatch(openShortLink(link))
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);
