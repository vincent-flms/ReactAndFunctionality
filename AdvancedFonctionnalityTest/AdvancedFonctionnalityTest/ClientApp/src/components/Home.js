import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
      return (
          <div className="main">
              <div className="Intro">
                  <h3>Home page pour ce test, ici on va faire simple,<br />
                      une page envoie des donn�es qui sont stock� en local ( JSON FILE ),<br />
                      puis sur une autre elle affiche un r�sulta d'une couleur et des donn�es <br />
                      al�atoire prise sur une API d'une autre couleur, le but �tant de faire <br />
                      un jeu de bataille navale.
                  </h3>
              </div>
              <div>
                  
              </div>
          </div>
    );
  }
}
