import React from 'react' // import react

class Bomb extends React.Component {

   constructor(props) { //pass in props
    super(props); //pass in props

    this.state = {
      secondsLeft: props.initialCount, //initialCount set in index.js
    };
  }

  render() {
    console.log(this.props);
   //console.log('inside of the render method in the BOMB componet', this.props);

   var message;

    if (this.state.secondsLeft === 0) {
      message = "Boom!"
    } else {
      message = `${this.state.secondsLeft} seconds left before I go boom!`
    }

    return (
      <div>
        {message}
      </div>
    )
  }
}

export default Bomb
