import React from 'react';
import probs from './problems.json';
import _ from 'lodash';

class Content extends React.Component {
  
  /*renderProblems = () => {
    let divRests = probs.length % 3;
    let divCounts = Math.ceil(probs.length / 3);
    let divLength = probs.length;
    console.log(divCounts);


    return (
      <React.Fragment>
      {_.times(divCounts).map((div, index) => (
        <div className="row">
          {_.times(3).map((div2, index2) => (
            <React.Fragment>
            {index * 3 + index2 < divLength ?
            <div className="card">
              <h3>{probs[index * 3 + index2].name}</h3>
              <h4>{probs[index * 3 + index2].type}</h4>  
            </div>
              :
              <div className="card"></div>}
            </React.Fragment>
          ))}
        </div>
      ))} 
    </React.Fragment>
    )
  }*/

  render() {
    return (
      <div className="container-2">
        <h1>Probleme</h1>
        <div className="row">
          {probs.map((prob, index) => (
            <div className="col-md-3">
              <div onClick={() => this.props.history.push('/p/' + index)}  className="card">
                <h3>{prob.name}</h3>
                <h4>{prob.type.charAt(0).toUpperCase() + prob.type.slice(1)}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Content;
