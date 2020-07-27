import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)

    this.todos = [
      {
        id: 1,
        text: 'Meat'
      },
      {
        id: 2,
        text: 'Fish'
      },
      {
        id: 3,
        text: 'Veges'
      },
      {
        id: 4,
        text: 'Milk'
      }]
  }

  render(){
    return (
      <div className="App">
        <header>
          <div className="bars">
            <i className="fas fa-bars"></i>
          </div>
          <div className="checklist">My Shopping List</div>
        </header>
        <main>
        <div className="notes">
          
          {
            this.todo.map((todo)=>{

              return (
                <div className="line line1">
                  <div className="note note1">{todo.text}</div>
                  <div className="checkbox">.</div>
                </div>
              )
            })
          }
        
        </div>
        </main>
        <footer>
          <div className="button">
            <i className="fas fa-plus-circle"></i>
          </div>
        </footer>
      </div>
    );
  }
  }

export default App;
