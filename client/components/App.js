import React, { Component } from "react";
import MouseTracker from "./MouseTracker";

class App extends Component {
  render() {
    return (
      <MouseTracker
        // render={({ x, y }) => (
        //   <p>
        //     The current mouse position is ({x}, {y})
        //   </p>
        // )}
        render={({x, y}) => <img 
          src="http://pngimg.com/uploads/cat/cat_PNG132.png"
          width="80"
          style={{position: "absolute", top: y-20, left:x-5}}
        />}
      />
    );
  }
}

export default App;
