import React, { Component } from 'react';

export default class Home extends Component {

    render() {
        return <div className="App-inner-content App-container-width mx-auto">
            <br />
            <h1> Hello! My name is</h1> <h2>Abdul Khaliq</h2>
            I am a Game Developer with a passion for learning new things!
            <br />
            I specialize in gameplay development and in C++ programming.
            <br />
            I currently work in Ubisoft on Skull and Bones, a AAA title that was announced in E3 2017.
            <br />
            <iframe title="Skull And Bones E3 2018" width="560" height="315" src="https://www.youtube.com/embed/916oD5U_vEc" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            <br />
            I have also made some games in game jams such as in the 2020 Global Game Jam.

        </div>;
    }
}