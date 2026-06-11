import React, { Component } from 'react';
import './App.css';
import Wrapper from './components/Wrapper';

export default class App extends Component {
  constructor(props) { // Також є методом життєвого цикла
    super(props);
    this.state = {
      visible: true,
      likes: 0,
      seconds: 0,
    }
  };

  // componentDidMount коли компонент вже створився чи ще створюється?
  // Як це зробити все на функціональних компонентах


  // componentDidMount() { // Відпрацює один раз коли компонент створився/створюється. Тут зважди роблять якісь запити на сервер, таймери, тайм-аути, інтервали і т.д..
  //   this.timerId = setInterval(() => { // звідки береться назва timerId
  //     this.setState({ seconds: this.state.seconds + 1 });
  //   }, 1000);
  //   console.log(this.state.seconds);
  // };

  componentDidUpdate(prevProps, prevState) { // Коли компонент оновлюється, наприклад коли оновлюються пропси або стейт
    if (prevState.seconds !== this.state.seconds) {
      console.log(this.state);
    }
  };

  shouldComponentUpdate(nextProps, nextState) { // відпрацьовує до того як componentDidUpdate викликався
    if (nextState.likes === 10) {
      console.log("Вітаю! У вас більше 10 лайків");
    }
    return true;
  }

  componentWillUnmount() { // Коли компонент размонтовується
    clearInterval(this.timerId);
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ visible: !this.state.visible })} >Show Component</button>
        <h2>Загальна кількість лайків: {this.state.likes}</h2>
        <button onClick={() => this.setState({ likes: this.state.likes + 1 })}>Збільшити на +1</button>
        {this.state.visible && <Wrapper seconds={this.state.seconds} />}
      </div>
    );
  };
};
