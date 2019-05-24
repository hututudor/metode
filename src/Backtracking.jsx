import React from 'react';
import probs from './problems.json';

class Content extends React.Component {
  render() {
    return (
      <div className="container-2">
        <h1>Backtracking</h1>
        <div className="text">
          <h2>
            <span>#</span> Definitie
          </h2>
          <p>
            Backtracking este o metodă de parcurgere sistematică a spaţiului
            soluţiilor posibile al unei probleme.{' '}
          </p>
          <p>
            Este o metodă generală de programare, şi poate fi adaptata pentru
            orice problemă pentru care dorim să obţinem toate soluţiile
            posibile, sau să selectăm o soluţie optimă, din mulţimea soluţiilor
            posibile.{' '}
          </p>
          <p>
            Solutia este compusa din mai multe elemente (x1, x2, x3…xn) in care
            fiecare element xi este ales dintr-o multime corespunzatoare Mi
            numita multimea de baza a elementului xi.
          </p>
          <p>
            Backtracking este însă şi cea mai costisitoare metodă din punct de
            vedere al timpului de execuţie.
          </p>
          <h2>
            <span>#</span> Exemplu din viata reala
          </h2>
          <p>
            Imaginaţi-vă că astăzi este ziua vostră şi aveţi invitaţi. Aranjaţi
            o masă frumoasă, apoi vă gândiţi cum să vă aşezaţi invitaţii la
            masă. Aţi vrea să ştiţi toate posibilităţile de aşezare a
            invitaţilor la masă, dar realizaţi în acelaşi timp că trebuie să
            ţineţi seama şi de preferinţele lor. Printre invitaţi există anumite
            simpatii dar şi unele antipatii, de care doriţi neapărat să ţineţi
            seama, pentru ca petrecerea să fie o bucurie pentru toţi.{' '}
          </p>
          <p>
            Să ne gândim cum procedaţi pentru a identifica toate posibilităţile
            de a plasa invitaţii la masă. Începeţi prin a scrie nişte cartonaşe
            cu numele invitaţilor.{' '}
          </p>
          <p>Alegeţi un invitat. </p>
          <p>
            Pentru a-l alege pe al doilea, selectaţi din mulţimea cartonaşelor
            rămase un alt invitat. Dacă ştiţi că cele două persoane nu se
            agreează, renuntaţi la cartonaşul lui şi alegeţi altul şi aşa mai
            departe.{' '}
          </p>
          <p>
            Se poate întâmpla ca la un moment dat, când vreţi să alegeţi
            cartonaşul unui invitat să constataţi că nici unul dintre invitaţii
            rămaşi nu se potriveşte cu ultima persoană slectată până acum. Cum
            procedaţi?{' '}
          </p>
          <p>
            Schimbaţi ultimul invitat plasat cu un invitat dintre cei rămaşi şi
            încercaţi din nou, dacă nici aşa nu reuşiti, schimbaţi penultimul
            invitat cu altcineva şi încercaţi din nou şi aşa mai departe până
            când reuşiţi să plasati toţi invitaţii. Înseamnă că aţi obţinut o
            soluţie.{' '}
          </p>
          <p>
            Pentru a obţine toate celelalte soluţii, nu vă rămâne decât să o
            luaţi de la început. Aveţi cam mult de muncit, iar dacă numărul
            invitaţilor este mare...operaţiunea devine foarte anevoioasă. Iată
            de ce aveţi nevoie de un calculator şi cunoştinţe de programare .{' '}
          </p>
          <h2>
            <span>#</span> Procedam astfel
          </h2>
          <ul>
            <li>
              La fiecare pas k pornim de la o soluţie parţială v=(
              v1,v2,v3,...,vk-1) determinată până în acel moment şi încercăm să
              extindem această soluţie adăugând un nou element la sfârşitul
              vectorului.
            </li>
            <li>Căutăm în mulţimea Sk , un nou element. </li>
            <li>
              Dacă există un element neselectat încă, verificăm dacă acest
              element îndeplineşte condiţiile impuse de problemă, numite
              condiţii de continuare.{' '}
            </li>
            <li>
              Dacă sunt respectate condiţiile de continuare, adăugăm elementul
              soluţiei parţiale.
            </li>
            <li>Verificăm dacă am obţinut o soluţie completă.</li>
            <li className="sub">
              <ul className="sub">
                <li>
                  Dacă am obţinut o soluţie completă o afişăm şi se reia
                  algoritmul de la pasul 1.
                </li>
                <li>
                  Kacă nu am obţinut o soluţie, {'k <- k+1'} si se reia
                  algoritmul de la pasul 1.
                </li>
              </ul>
            </li>
            <li>
              Dacă nu sunt respectate condiţiile de continuare se reia
              algoritmul de la pasul 2.{' '}
            </li>
            <li>
              Dacă nu mai există nici un element neverificat în mulţimea Sk
              înseamnă că nu mai avem nici o posibilitate din acest moment, să
              construim soluţia finală aşa că trebuie să modificăm alegerile
              făcute în prealabil, astfel {'k <- k-1'} şi se reia problema de la
              pasul 1.{' '}
            </li>
          </ul>

          <br />
          <h2>
            <span>#</span> Probleme
          </h2>
          <div className="row">
            {probs.map(
              (prob, index) =>
                prob.type === 'backtracking' && (
                  <div className="col-md-3">
                    <div
                      onClick={() => this.props.history.push('/p/' + index)}
                      className="card">
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
