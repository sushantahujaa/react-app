import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StartQuiz extends Component {
  render() {
    return (
      <div>
        <Link to="/quiz/1">StartQuiz</Link>    
      </div>
    );
  }
}

export default StartQuiz;