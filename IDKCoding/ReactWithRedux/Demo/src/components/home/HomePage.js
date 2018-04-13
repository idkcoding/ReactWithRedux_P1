import React from 'react';
import {Link} from 'react-router';

class HomePage extends React.Component{
  render(){
      return(
          <div className="jumbotron">
            <h1>Hackathon 2018</h1>
            <p> React, Redux and React Router in ES6 for Ultra fast thin web client</p>
            <link to="about" className="btn btn-primary btn-lg"> Learn More </link>
          </div>
      );
  }
}

export default HomePage;