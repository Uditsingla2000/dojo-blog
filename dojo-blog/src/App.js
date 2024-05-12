import Navbar from './Navbar';
import Home from "./Home";

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className="content">
       <Home></Home>
      </div>
    </div>
  );
}

// App.js
//  .navbar.js
//  .blogdetails.js
//  .sidebar.js -> categories.js and tags.js

export default App;
