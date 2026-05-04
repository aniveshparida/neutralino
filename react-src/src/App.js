import React from 'react';
// The exact import from Option 1
import { os } from "@neutralinojs/lib"; 

function App() {

  // A simplified function without async/await for testing
  const showInfo = () => {
    os.showMessageBox('Hello', 'This is a native popup from Neutralino!')
      .then(() => console.log("Message box shown!"))
      .catch((err) => console.error("Error showing box:", err));
  };

  return (
    <div className="App">
      <button onClick={showInfo}>Click Me!</button>
    </div>
  );
}

export default App;