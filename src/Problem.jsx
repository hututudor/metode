import React from 'react';
import problems from './problems.json';

class Content extends React.Component {
  state = {
    prob: null,
  };

  componentDidMount() {
    let id = this.props.match.params.id;
    if (problems[id]) {
      this.setState({
        prob: problems[id],
      });
    }
  }

  download = e => {
    e.preventDefault();
    window.open('/probs/' + this.state.prob.name + '.cpp');
  };

  render() {
    const {prob} = this.state;
    return !prob ? (
      ''
    ) : (
      <div className="container-2">
        <h1>{prob.name}</h1>
        <div className="text">
          <h2>
            <span>#</span> Descrierea problemei
          </h2>
          <p>{prob.desc}</p>
          <h2>
            <span>#</span> Date de intrare
          </h2>
          <p>{prob.din}</p>
          <h2>
            <span>#</span> Date de iesire
          </h2>
          <p>{prob.dout}</p>
          <h2>
            <span>#</span> Restrictii
          </h2>
          <ul>
            {prob.res.map((r, i) => (
              <li key={i}>{r}</li>
            ))}
          </ul>
          <h2>
            <span>#</span> Exemplu
          </h2>
          <table>
            <thead>
              <tr>
                <td>{prob.name + '.in'}</td>
                <td>{prob.name + '.out'}</td>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {prob.in.map((p, i) => (
                    <React.Fragment key={i}>
                      {p} <br />
                    </React.Fragment>
                  ))}
                </td>
                <td>
                  {prob.out.map((p, i) => (
                    <React.Fragment key={i}>
                      {p} <br />
                    </React.Fragment>
                  ))}
                </td>
              </tr>
            </tbody>
          </table>
          <h2>
            <span>#</span> Descrierea solutiei
          </h2>
          <p>{prob.dsol}</p>
          <h2>
            <span>#</span> Solutia
          </h2>
          <button onClick={this.download}>Vezi solutia</button>
        </div>
      </div>
    );
  }
}

export default Content;
