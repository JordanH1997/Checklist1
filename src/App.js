import React, { Component } from 'react';
import './App.css';

class App extends Component {
  
  constructor(props){
    super(props)

    this.state = {
      todos:  [
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
        }
      ],
      noteInputValue: ''
    }
    
  }

// Event Handlers
  handleNoteInputChange = (e)=>{
    this.setState({noteInputValue:e.target.value})
  }
  handleAddButtonClick = (e)=>{
    e.preventDefault()
    var note = {
      id:Date.now(),
      text:this.state.noteInputValue
    }

    var newNotes = [note, ...this.state.todos]

    this.setState({
      todos:newNotes,
      noteInputValue: ''
    })
  }
  handleNoteDelete = (e)=>{
    var noteIdToDelete = parseInt(e.target.id)
    var notes = this.state.todos

    var filteredNotes = notes.filter((item)=>{
      return item.id != noteIdToDelete
    })

    this.setState({todos:filteredNotes})
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
            this.state.todos.map((todo)=>{

              return (                
                <div className="line line1" key={todo.id}>
                  <div className="note note1"><i id={todo.id}className="fas fa-minus-circle" onClick={this.handleNoteDelete}></i> {todo.text}</div>
                  <div className="checkbox">.</div>
                </div>
              )
            })
          }
        
        </div>
        </main>
        <footer>
          
          <form className="note-body">
					  	<div className="form-group">
					    	<label htmlFor="note-input">New note:</label>
					    	  <input type="text" className="form-control" id="note-input" value ={this.state.noteInputValue}onChange={this.handleNoteInputChange}/>                 
                    <i className="fas fa-plus-circle" onClick={this.handleAddButtonClick}></i>
              </div>
              
					</form>
          
        </footer>
      </div>
    );
  }
  }

export default App;
