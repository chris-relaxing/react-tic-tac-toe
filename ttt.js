const e = React.createElement;

class Game extends React.Component {
  constructor() {
    super()
    this.state = {  } // set initial state
  }
  render() {
    return (
      'div',
      { className: "container", },
      grid
    )
  }
}

class grid extends React.Component {
  constructor() {
    super()
    this.state = {  } // set initial state
  }

  loadCells(){
    for(i=1; i<= 9; i++){
      return (
        'Cell',
        { number: i,
          key:i,
          cellValue: i,},
      )
    }
  }

  render() {
    return (
      'div',
      { className: "grid", },
      loadCells
    )
  }
}

class Cell extends React.Component {
  constructor() {
    super()
    this.state = { clicked: false } // set initial state
  }
  render() {
    return (
      'div',
      {
        className: "cell",
        // on click calls setState and flips the 'clicked' state
        onClick: () => this.setState({
          clicked: !this.state.clicked
        })
      },
      this.state.clicked ? 'X' : ''
    )
  }
}


// let cells = [];
// for(i=1; i<= 9; i++){
//   // cells.push(e(Cell, { number: i, key:{i}, cellValue: i} , ))
//   cells.push(<Cell number=i key={i} cellValue=i/>)
// }

// const grid = e('div', { className: 'grid'}, cells);

// const Game = e('div', { className: 'container'}, grid);

ReactDOM.render(Game, document.getElementById('app'))
