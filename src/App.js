import React, {Component} from 'react';
import cs61b from './cs61b.jpg';
import cs70 from './cs70.jpg';
import ee16b from './ee16b.jpg';
import sasian142 from './sasian142.jpg'
import tree from './tree.gif'

import Quicklinks from './components/Quicklinks';

import './App.css';



class App extends Component {

  state = {
    quicklinks: [
      {
        id: 1,
        title: "CS61B",
        info: "Data Structures",
        link: "https://inst.eecs.berkeley.edu/~cs61b/sp20/",
        image: cs61b
      },
      {
        id:2,
        title: "CS70",
        info: "Discrete Math and Probability Theory",
        link: "https://www.eecs70.org",
        image: cs70
      },
      {
        id:3,
        title: "EECS16B",
        info: "Designing Information Systems and Devices II",
        link: "https://www.eecs16b.org",
        image: ee16b
      }, 
      {
        id:4,
        title: "SASIAN142", 
        info: "India's Great Epics",
        link: "https://tbp.berkeley.edu/courses/south-asian/142/",
        image: sasian142
      }
    ]
  }

  render() {
    console.log(this.state.quicklinks)
    return ( 
        <div className="App" id="outerelement">
            <header className="App-header">
            <h1>Hello, Michael. What's the plan for today?<br></br></h1>
             <img src={tree} className="App-logo" alt="logo" />
            <div class="input-group md-form form-lg form-1 pl-0" id="searchbar">
              <div class="input-group-prepend">
                <span class="input-group-text cyan lighten-2" id="basic-text1"><i class="fas fa-search text-white"
                    aria-hidden="true"></i></span>
              </div>
             
              <input class="form-control my-0 py-1" type="text" placeholder="Search" aria-label="Search" id="searchbar" action="https://www.google.com/"></input>
            </div>
            <div class="row">
              <div class="col" id="extension">Debit: <br></br>$20.00</div> 
              <div class="col" id="extension">Swipes Remaining: 12</div>
              <div class="col" id="extension">Flex Dollars: $300</div>
            </div>
            <div class="row">
              <div class="col"></div>
            </div>
             <div id="quicklink">< Quicklinks quicklinks = {this.state.quicklinks} /></div>
            </header>
        </div>
      
      );
  }
}

export default App;
