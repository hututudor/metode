import React from 'react';
import probs from './problems.json';

class Content extends React.Component {
  render() {
    return (
      <div className="container-2">
        <h1>Metoda Greedy</h1>

        <div className="text">
          <h2>
            <span>#</span> Prezentare
          </h2>
          <p>
            Metoda de programare Greedy se aplică problemelor de optimizare.
            Aceasta metoda constă în faptul că se construieşte solutia optimă
            pas cu pas, la fiecare pas fiind selectat în solutie elementul care
            pare „cel mai bun/cel mai optim” la momentul respectiv, în speranta
            că această alegere locală va conduce la optimul global.{' '}
          </p>
          <p>
            Metoda de programare Greedy se aplică problemelor de optimizare.
            Aceasta metoda constă în faptul că se construieşte solutia optimă
            pas cu pas, la fiecare pas fiind selectat în solutie elementul care
            pare „cel mai bun/cel mai optim” la momentul respectiv, în speranta
            că această alegere locală va conduce la optimul global.{' '}
          </p>
          <p>
            Metoda Greedy se aplică problemelor pentru care se dă o mulţime A cu
            n elemente şi pentru care trebuie determinată o submulţime a sa, S
            cu m elemente, care îndeplinesc anumite condiţii, numite si conditii
            de optim. Algoritmul in limbaj natural al metodei de programare
            Greedy are urmatoarea structura:
          </p>
          <h2>
            <span>#</span> Algoritmul Greedy
          </h2>
          <ul>
            <li>Se dă o mulţime A</li>
            <li>Se cere o submulţime S din multimea A care sa:</li>
            <li className="sub">
              <ul>
                <li>
                  Să îndeplinească anumite condiţii interne (să fie acceptabilă)
                </li>
                <li>Să fie optimală (să realizeze un maxim sau un minim).</li>
              </ul>
            </li>
          </ul>

          <h2>
            <span>#</span> Principiul metodei Greedy
          </h2>
          <ul>
            <li>
              Se iniţializează mulţimea soluţiilor S cu mulţimea vidă, S=Ø
            </li>
            <li>
              La fiecare pas se alege un anumit element x∈A (cel mai promiţător
              element la momentul respectiv) care poate conduce la o soluţie
              optimă
            </li>
            <li>
              Se verifică dacă elementul ales poate fi adăugat la mulţimea
              soluţiilor:
            </li>
            <li className="sub">
              <ul className="sub">
                <li>Dacă da atunci</li>
                <li className="sub">
                  <ul className="sub">
                    <li>
                      Va fi adăugat şi mulţimea soluţiilor devine S=S∪{'{x}'} -
                      un element introdus în mulţimea S nu va mai putea fi
                      eliminat
                    </li>
                  </ul>
                </li>
                <li>Altfel</li>
                <li className="sub">
                  <ul className="sub">
                    <li>El nu se mai testează ulterior</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              Procedeul continuă, până când au fost determinate toate elementele
              din mulţimea soluţiilor
            </li>
          </ul>
          <h2>
            <span>#</span> Probleme
          </h2>
          <br />
          <div className="row">
            {probs.map(
              (prob, index) =>
                prob.type === 'greedy' && (
                  <div className="col-md-3">
                    <div onClick={() => this.props.history.push('/p/' + index)} className="card">
                      <h3>{prob.name}</h3>
                      <h4>
                        {prob.type.charAt(0).toUpperCase() + prob.type.slice(1)}
                      </h4>
                    </div>
                  </div>
                ),
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
