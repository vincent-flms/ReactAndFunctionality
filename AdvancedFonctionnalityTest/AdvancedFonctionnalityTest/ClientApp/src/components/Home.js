import React, { Component } from 'react';

export class Home extends Component {
  static displayName = Home.name;

  render() {
      return (
          <div className="main">
              <div className="Intro">
                  <h3>Home page pour ce test, ici on va faire simple,<br />
                      une page envoie des données qui sont stocké en local ( JSON FILE ),<br />
                      puis sur une autre elle affiche un résulta d'une couleur et des données <br />
                      aléatoire prise sur une API d'une autre couleur, le but étant de faire <br />
                      un jeu de bataille navale.
                  </h3>
              </div>
              <div>
                  
              </div>
          </div>
    );
  }
}
