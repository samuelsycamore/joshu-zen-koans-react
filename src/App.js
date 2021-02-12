import React, { Component } from 'react';
import Header from './components/Header';
import KoanButton from './components/KoanButton';
import Footer from './components/Footer';
import TitleAndText from './components/TitleAndText';
import './App.css';
import boxOfKoans from './KoanCollection';

class App extends Component {

  state = {
    title: boxOfKoans[1].title,
    text: boxOfKoans[1].text

  }


generateNewKoan = () => {

  let num = Math.floor(Math.random() * boxOfKoans.length)

  let newKoan = boxOfKoans[num];

  this.setState({
    title: newKoan.title,
    text: newKoan.text
  })

}


  render() {
    return (
      <div className="App">

        <div className="container mx-auto p-3 flex flex-col justify-center items-center tracking-wide text-xl">

          <Header />

          <KoanButton generateNewKoan={this.generateNewKoan} />

          <TitleAndText currentKoan={this.state} />

          <Footer />

        </div>
       
      </div>

    );
  }
}

export default App;
