import React, { Component } from 'react';
import './design/Home.css'

export class Home extends Component {
   static displayName = Home.name;
    constructor(props) {
        super(props);
        this.state = {
            selectedCell: null,
            boat : 3,
            lignes: 3,
            cases: 3,
            tableau: Array(11).fill().map(() => Array(11).fill(false)),
            cellColors: {},
            maxtabBoatMulti: [],
            calcMaxTab : 0
        }
    }
    chargeMaxBoat = () => {
        this.setState({ calcMaxTab: parseInt(this.state.lignes * this.state.cases, 10) })
        if (parseInt(this.state.calcMaxTab, 10) > 52) {
            this.setState({
                maxtabBoatMulti: [
                    [2, 6],
                    [4, 4],
                    [4, 3],
                    [6, 2]
                ]
            })
        } else if (parseInt(this.state.calcMaxTab, 10) > 26) {
            this.setState({
               maxtabBoatMulti: [
                    [1, 6],
                    [2, 4],
                    [2, 3],
                    [3, 2]
               ]
            })
        } else {
            this.setState({
               maxtabBoatMulti: [
                    [3, 2]
               ]
            })
        }
    }
    handleLigneChange = (e) => {
        this.setState({ calcMaxTab: parseInt(this.state.lignes * this.state.cases, 10) })

        if (parseInt(e.target.value, 10) >= 3) {
            if (parseInt(this.state.calcMaxTab, 10) > 5)
            this.setState({ cases: parseInt(e.target.value, 10) });
            this.setState({ lignes: parseInt(e.target.value, 10) });
        }
        
        this.chargeMaxBoat();
    };
    handleCaseChange = (e) => {
        this.setState({ calcMaxTab: parseInt(this.state.lignes * this.state.cases, 10) })

        if (parseInt(this.state.calcMaxTab, 10) >= 52) {
            if (parseInt(e.target.value, 10) >= 8 && parseInt(e.target.value, 10) <= 16) {
                this.setState({ boat: parseInt(e.target.value, 10) });
            } else if (parseInt(e.target.value, 10) < 8) {
                this.setState({ boat: 8 });
            } else if (parseInt(e.target.value, 10) > 16) {
                this.setState({ boat: 16 });
            }
        } else if (parseInt(this.state.calcMaxTab, 10) > 26 && parseInt(this.state.calcMaxTab, 10) < 52) {
            if (parseInt(e.target.value, 10) >= 3 && parseInt(e.target.value, 10) <= 8) {
                this.setState({ boat: parseInt(e.target.value, 10) });
            } else if (parseInt(e.target.value, 10) < 3) {
                this.setState({ boat: 3 })
            } else if (parseInt(e.target.value, 10) > 8) {
                this.setState({ boat: 8 })
            }
        } else if (parseInt(this.state.calcMaxTab, 10) < 26) {
            this.setState({ boat : 3})
        }
    };

    HandleCaseId = (rowIndex, cellIndex) => {
        // Faites quelque chose avec les indices, si nécessaire
    };

    handleChangeColor = (cellIndex, rowIndex) => {
        const { selectedCell, cellColors } = this.state;
        // Appliqué les règles  ici avec la sélection de couleur
        const newColor = 'red';
        this.setState({
            selectedCell: { rowIndex, cellIndex },
            cellColors: {
                ...cellColors,
                [`${rowIndex}-${cellIndex}`]: newColor,
            }
        });
    };
    
    render() {
        const {
            boat,
            lignes,
            cases,
            selectedCell,
            cellColors
        } = this.state
        return (
            <div className="main">
                <div className="Intro">
                    <label>Home page pour ce test, ici on va faire simple,<br />
                    </label>
                    <br />
                </div>
                <div className="LetsGO">
                    <h1>Testons ici !!</h1>
                    <br />
                    <label>Taille du tableau : </label>
                    <input type="number" className="select" value={lignes} onChange={this.handleLigneChange} />
                    <br />
                    <br />
                    <label>Nombre de batteau : </label>
                    <input type="number" className="select" value={boat} onChange={this.handleCaseChange} />
                    <br />
                    <br />
                    <table>
                        <tbody>
                            {Array.from({ length: lignes }).map((_, rowIndex) => (
                                <tr key={rowIndex}>
                                    {Array.from({ length: cases }).map((_, cellIndex) => (
                                        <td key={cellIndex}>
                                            <input
                                                type="button"
                                                id={`${rowIndex}-${cellIndex}`}
                                                className="divClass"
                                                style={{
                                                    backgroundColor:
                                                        cellColors[`${rowIndex}-${cellIndex}`] ||
                                                            (selectedCell &&
                                                                selectedCell.rowIndex === rowIndex &&
                                                                selectedCell.cellIndex === cellIndex)
                                                            ? cellColors[`${rowIndex}-${cellIndex}`] || 'red'
                                                            : 'white'
                                                }}
                                                onClick={() => this.handleChangeColor(cellIndex, rowIndex)}
                                            />
                                        </td>
                                    ))}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
          </div>
    );
  }
}