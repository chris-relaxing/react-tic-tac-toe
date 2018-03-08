// To Do:
// When there is a winner, the game is over. So change the game state.
// Highlight the rows for the win by changing the background color. And give a message.
// A button should appear for restarting the game, after selecting who goes first. (radio buttons)

class Game extends React.Component {
  constructor(props) {
    super(props)

    // this.someMethod = this.someMethod.bind(this);
    // this.someMethod2 = this.someMethod2.bind(this);
    this.incrementNumberTurns = this.incrementNumberTurns.bind(this);
    this.populateXLocations = this.populateXLocations.bind(this);
    this.cellClicked = this.cellClicked.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.startGame = this.startGame.bind(this);
    this.gameOver = this.gameOver.bind(this);
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
    };
  }

  setGameInProgress(){
    this.setState({
      gameInProgress: !this.state.gameInProgress
    });
    console.log("Game in progress: " + this.state.gameInProgress)
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
    // this.startGame();
    this.updateBoard(id);
    this.populateXLocations(id);
    this.populateOLocations(id);
    this.checkForWinner();
    this.changeTurns();
  }

  startGame(){
    this.setState({
      gameInProgress: true
    });
  }

  gameOver(){
    this.setState({
      gameInProgress: false,
      x_and_os: ['', '', '', '', '', '', '', '', '']
    });
  }

  changeTurns(){
    // console.log("NumberTurns: " + this.state.number_of_turns)
    // console.log("changeTurns() currentTurn:" + this.state.currentTurn)
    let new_turn = (this.state.currentTurn == "X") ? "O" : "X"
    this.setState({ currentTurn: new_turn })
    // console.log("currentTurn is now " + this.state.currentTurn)
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
          }
        }
    }
  }


  render() {
    return (
      <div>
        <div className="container">
          <div className="grid">
            <Cell className="cell" id="1" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked}/>
            <Cell className="cell" id="2" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked}/>
            <Cell className="cell" id="3" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked}/>
            <Cell className="cell" id="4" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked}/>
            <Cell className="cell" id="5" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked}/>
            <Cell className="cell" id="6" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked}/>
            <Cell className="cell" id="7" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked}/>
            <Cell className="cell" id="8" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked}/>
            <Cell className="cell" id="9" currentTurn={this.state.currentTurn} xo={this.state.x_and_os} incrementNumberTurns={this.incrementNumberTurns} cellClicked={this.cellClicked}/>
          </div>
        </div>
        <Choosefirstplayer currentTurn={this.state.currentTurn} changeTurns={this.changeTurns} setGameInProgress={this.setGameInProgress} gameinprogress={this.state.gameInProgress}/>
    </div>
    )
  }
}

class Choosefirstplayer extends React.Component {
  constructor(props) {
     super(props)
     this.selectFirst = this.selectFirst.bind(this);
  }
  selectFirst(fp){
      // console.log("currentTurn:", this.props.currentTurn)
      console.log("Made it to selectFirst.", fp)
      if (fp === 'O'){
        this.props.changeTurns();
      }
      this.props.setGameInProgress();
      // console.log("currentTurn:", this.props.currentTurn)

  }

  render() {
    if (this.props.gameinprogress){
      return <h1 className="center-label">Current turn: {this.props.currentTurn}</h1>;
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




   class Cell extends React.Component {
     constructor(props) {
        super(props)
        // set initial state
        this.state = {
          clicked: false,
          value: ""
        }
       this.handleClick = this.handleClick.bind(this);
     }
     handleClick (){
       this.setState({
         clicked: !this.state.clicked,
         value: "X",
       });

       let clicked_id = this.props.id;
       console.log("Cell " + clicked_id + " was clicked");

       // Call the parent functions:
       this.props.incrementNumberTurns();
       this.props.cellClicked(clicked_id);
       // this.props.someMethod(this.props.id);
       // this.props.someMethod2(this.props.id);
       // console.log("Child communication, number of turns from parent: ", this.props.numturns);
     }

     render() {
        // The value of the cells should come not from the click, but from a stored state
        // in the parent.
        return (
          <div className="cell" onClick={this.handleClick} id={this.props.id}>
            {this.state.clicked ? this.props.xo[this.props.id-1] : ""}
          </div>
        )
     }
   }


 // function Gamestate(props) {
 //   const gameInProgress = props.gameInProgress;
 //   if (gameInProgress) {
 //     return <Game/>;
 //   }
 //   return <h2>Game over!</h2>;
 // }

ReactDOM.render(
  <div>
    <h1>React Tic-Tac-Toe</h1>
    <Game/>
  </div>
  ,
  document.getElementById('app'));


Set.prototype.intersection = function(setB) {
  var intersection = new Set();
  for (var elem of setB) {
    if (this.has(elem)) {
      intersection.add(elem);
    }
  }
  return intersection;
}
