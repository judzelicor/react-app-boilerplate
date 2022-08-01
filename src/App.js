import React from "react";
import {
  Footer,
  NavigationBar
} from "./components";
import {
  Routes,
  Route
} from "react-router-dom";
import { Homepage } from "./pages";

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <NavigationBar />
        <Routes>
          <Route path={ "/" } element={ <Homepage /> } />
        </Routes>
        <Footer />
      </div>
    )
  }
}

export default App;
