import React from 'react';

const Testimonials = (props) => {

        return (

          <section style={{marginBottom: 80, maxWidth: 1000, margin: 'auto', marginTop: 100}}>
          <h2 className="display-4" style={{textAlign: 'center', marginBottom: 20, fontWeight: 700, fontSize: 60}} >Témoignages</h2>
          <p className="lead" style={{maxWidth: 1000, textAlign: 'center', margin: 'auto', fontFamily: 'unset', fontSize: 24, marginTop: -30, marginBottom: 80}} >Ils sont inscrits à Createur.com, et ils adorent !</p>
          <div className="card-columns" id='testimonials'  >
          <div className="card p-3">
              <blockquote className="blockquote card-body">
                <p>Chaque email me donne au moins 1 idée à appliquer à mon business.</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                  Anthony <cite title="Source Title">Lyon</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card p-3">
              <blockquote className="blockquote card-body">
                <p>J’adore les idées mais j’adore aussi la partie framework qui m’aide à développer ma propre créativité.</p>
                <footer className="blockquote-footer" style={{marginTop: 30}}>
                  <small className="text-muted">
                  Julie <cite title="Source Title">Dax</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card p-3">
              <blockquote className="blockquote card-body">
                <p>J’économise des heures de recherches toutes les semaines. Et en plus c’est drôle :-) Merci !</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                  Alexis. <cite title="Source Title">Lille</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>Createur.com est de loin ma newsletter préférée ! Je lis chaque mot, chaque semaine.</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                  Romain <cite title="Source Title">Paris</cite>
                  </small>
                </footer>
              </blockquote>
            </div>
            <div className="card p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>Chaque email est comme un shot d’inspiration et d’excitation. Non seulement j’ai des nouvelles idées, mais mon niveau d'énergie est décuplée.</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                  Sarah<cite title="Source Title">Niort</cite>
                  </small>
                </footer>
              </blockquote>
            </div>

            <div className="card p-3">
              <blockquote className="blockquote mb-0 card-body">
                <p>J’utilise l’email comme un exercice hebdomadaire de brainstorming avec mon équipe.</p>
                <footer className="blockquote-footer">
                  <small className="text-muted">
                  Laura<cite title="Source Title">Montpellier</cite>
                  </small>
                </footer>
              </blockquote>
            </div>

            
            
          </div>
          </section>

  )
}

export default Testimonials