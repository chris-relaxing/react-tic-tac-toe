
// The Game componenet is the parent component. It keeps track of most of the state in the game.
// It also renders the game board.
class Game extends React.Component {
  constructor(props) {
    super(props)
    this.incrementNumberTurns = this.incrementNumberTurns.bind(this);
    this.populateXLocations = this.populateXLocations.bind(this);
    this.cellClicked = this.cellClicked.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.newGame = this.newGame.bind(this);
    this.changeTurns = this.changeTurns.bind(this);
    this.setGameInProgress = this.setGameInProgress.bind(this);

    // set initial states
    this.state = {
      x_locations : [],
      o_locations : [],
      x_and_os: ['', '', '', '', '', '', '', '', ''],   // to keep track of the board
      number_of_turns: 1,
      currentTurn: 'X',
      gameInProgress: false,
      winner: "",
      gameWon: false,
      catsGame: false
    };
  }

  setGameInProgress(){
    this.setState({
      gameInProgress: !this.state.gameInProgress
    });
  }

  updateBoard(id) {
    let updated_board = this.state.x_and_os;
    updated_board[id-1] = this.state.currentTurn;
    this.setState({
      x_and_os: updated_board
    });
    console.log("Board so far: " + this.state.x_and_os)
  }

  incrementNumberTurns() {
    console.log("NumberTurns so far: " + this.state.number_of_turns)
    var prevCount = this.state.number_of_turns;
    this.setState({
      number_of_turns: prevCount += 1
    });
  }

  cellClicked(id){
    this.updateBoard(id);
    this.populateXLocations(id);
    this.populateOLocations(id);
    this.checkForWinner();
    this.changeTurns();
  }

  newGame(){
    // reset all states
    let new_board = ['', '', '', '', '', '', '', '', ''];
    let x_loc = [];
    let o_loc = [];
    this.setState({
      x_locations: x_loc,
      o_locations: o_loc,
      x_and_os: new_board,   // to keep track of the board
      number_of_turns: 0,
      currentTurn: 'X',
      gameInProgress: false,
      winner: "",
      gameWon: false,
      catsGame: false,
    });
  }

  changeTurns(){
    let new_turn = (this.state.currentTurn == "X") ? "O" : "X"
    this.setState({ currentTurn: new_turn })
  }

  populateXLocations(x_id){
    console.log("populateXLocations() Cell that was clicked " + x_id)
    if(this.state.currentTurn == 'X'){
      this.state.x_locations.push(x_id)
    }
    console.log("X positions so far: " + this.state.x_locations)
  }

  populateOLocations(id){
    console.log("populateOLocations() Cell that was clicked " + id)
    if(this.state.currentTurn == 'O'){
      this.state.o_locations.push(id)
    }
    console.log("O positions so far: " + this.state.o_locations)
  }

  checkForWinner(){
    const winning_combos = [ [1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7],
                             [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7] ];

    if (this.state.x_locations.length >= 3) {

        // Convert the React state array of strings into an array of numbers
        let x_locations = this.state.x_locations;
        let x_array = []
        for(let i=0; i < x_locations.length; i++ ){
          x_array.push(parseInt(x_locations[i]))
        }
        let x_loc = new Set(x_array);

        for(let i=0; i < winning_combos.length; i++){
          let ts = new Set(winning_combos[i]);
          let win = x_loc.intersection(ts);

          if(win.size === 3){
            let winarray = Array.from(win);
            console.log("X is the Winner!" , winarray);
            this.setState({
              winner: "X",
              gameWon: !this.state.gameWon
            });
          }
        }
    }
    if (this.state.o_locations.length >= 3){
        // Convert the React state array of strings into an array of numbers
        let o_locations = this.state.o_locations;
        let o_array = []
        for(let i=0; i < o_locations.length; i++ ){
          o_array.push(parseInt(o_locations[i]))
        }
        let o_loc = new Set(o_array);

        for(let i=0; i < winning_combos.length; i++){
          let ts = new Set(winning_combos[i]);
          let win = o_loc.intersection(ts);

          if(win.size === 3){
            let winarray = Array.from(win);
            console.log("O is the Winner!" , winarray);
            this.setState({
              winner: "O",
              gameWon: !this.state.gameWon
            });
          }
        }
    }
  }

  render() {
    return (
      <div>
        <div className="container">
          <div className="grid">
            <Cell className="cell" id="1" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} newGame={this.newGame} gameWon={this.state.gameWon}
                                          incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked} gameinprogress={this.state.gameInProgress}/>
            <Cell className="cell" id="2" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} newGame={this.newGame} gameWon={this.state.gameWon}
                                          incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked} gameinprogress={this.state.gameInProgress}/>
            <Cell className="cell" id="3" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} newGame={this.newGame} gameWon={this.state.gameWon}
                                          incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked} gameinprogress={this.state.gameInProgress}/>
            <Cell className="cell" id="4" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} newGame={this.newGame} gameWon={this.state.gameWon}
                                          incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked} gameinprogress={this.state.gameInProgress}/>
            <Cell className="cell" id="5" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} newGame={this.newGame} gameWon={this.state.gameWon}
                                          incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked} gameinprogress={this.state.gameInProgress}/>
            <Cell className="cell" id="6" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} newGame={this.newGame} gameWon={this.state.gameWon}
                                          incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked} gameinprogress={this.state.gameInProgress}/>
            <Cell className="cell" id="7" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} newGame={this.newGame} gameWon={this.state.gameWon}
                                          incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked} gameinprogress={this.state.gameInProgress}/>
            <Cell className="cell" id="8" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} newGame={this.newGame} gameWon={this.state.gameWon}
                                          incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked} gameinprogress={this.state.gameInProgress}/>
            <Cell className="cell" id="9" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} newGame={this.newGame} gameWon={this.state.gameWon}
                                          incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked} gameinprogress={this.state.gameInProgress}/>
          </div>
        </div>
        <Choosefirstplayer currentTurn={this.state.currentTurn}
                           changeTurns={this.changeTurns}
                           setGameInProgress={this.setGameInProgress}
                           gameinprogress={this.state.gameInProgress}
                           newGame={this.newGame}
                           winner={this.state.winner}
                           gameWon={this.state.gameWon}/>
    </div>
    )
  }
}

// The Choosefirstplayer componenet is a child component that allows the player to choose either X or O to go first.
class Choosefirstplayer extends React.Component {
  constructor(props) {
     super(props)
     this.selectFirst = this.selectFirst.bind(this);
  }
  selectFirst(fp){
      console.log("Made it to selectFirst.", fp)
      if (fp === 'O'){
        this.props.changeTurns();
      }
      this.props.setGameInProgress();
  }

  render() {
    if (this.props.gameinprogress){
      if (this.props.gameWon){
        return (
          <div>
            <h1 className="center-label">Player {this.props.winner} Wins! </h1>
            <Playagain className="cell-3" newGame={this.props.newGame} gameWon={this.props.gameWon}/>
          </div>
        )
      }
      else {
        return <h1 className="center-label">Current turn: {this.props.currentTurn}</h1>;
      }
    }
    else {
      return (
        <div>
          <h3 className="center-label">New Game:<br/>Choose who goes first:</h3>
          <div className="component">
            <div className="grid-2">
              <Playerbox className="cell-2" selectFirst={this.selectFirst}
                                            changeTurns={this.props.changeTurns}
                                            currentTurn={this.props.currentTurn}
                                            setGameInProgress={this.props.setGameInProgress}
                                            firstplayer="X" />
              <Playerbox className="cell-2" selectFirst={this.selectFirst}
                                            changeTurns={this.props.changeTurns}
                                            currentTurn={this.props.currentTurn}
                                            setGameInProgress={this.props.setGameInProgress}
                                            firstplayer="O" />
            </div>
          </div>
        </div>
      )
    }
  }
}

// The Playerbox component is a child of the Choosefirstplayer component. It renders the hoverable X and O 'buttons'.
class Playerbox extends React.Component {
  constructor(props) {
     super(props)
     this.state = {  }
     this.handleClick = this.handleClick.bind(this);
  }

  handleClick (){
    this.props.selectFirst(this.props.firstplayer);
  }

  render() {
      return (
        <div className="cell-2" onClick={this.handleClick} firstplayer={this.props.firstplayer}>
          {this.props.firstplayer}
        </div>
      )
  }
}

// The Playagain component is a child of the Choosefirstplayer component. It renders the hoverable Play Again button.
class Playagain extends React.Component {
  constructor(props) {
     super(props)
     this.handleClick = this.handleClick.bind(this);
  }
  handleClick (){
    console.log("Playagain gameWon?",this.props.gameWon);
    this.props.newGame();
  }
  render() {
      return (
        <div className="component">
          <div className="grid-3">
            <div className="cell-3" onClick={this.handleClick}>Play Again</div>
          </div>
        </div>
      )
  }
}

// The Cell component is a child of the Game component. It renders each of the individual
// cells on the boards and monitors them for clicks.
 class Cell extends React.Component {
   constructor(props) {
      super(props)
      this.state = {
        clicked: false,
      }
     this.handleClick = this.handleClick.bind(this);
   }
   handleClick (){
     this.setState({
       clicked: !this.state.clicked,
     });

     let clicked_id = this.props.id;
     console.log("Cell " + clicked_id + " was clicked");

     if(this.props.gameWon){
       this.props.newGame();
     }
     else {
       if (this.props.gameinprogress){
         // Call the parent functions:
         this.props.incrementNumberTurns();
         this.props.cellClicked(clicked_id);
       }
     }
   }

   render() {
      return (
        <div className="cell" onClick={this.handleClick} id={this.props.id}>
          {this.props.xo[this.props.id-1]}
        </div>
      )
   }
 }

// This is the main React render(). It loads the parent component Game.
ReactDOM.render(
  <div>
    <h1 style={{fontFamily:"Arial"}}>React Tic-Tac-Toe</h1>
    <Game/>
  </div>
  ,
  document.getElementById('app'));

// This Set function is for enabling set intersection in order to check for winning combos.
Set.prototype.intersection = function(setB) {
  var intersection = new Set();
  for (var elem of setB) {
    if (this.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}
