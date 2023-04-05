import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./component/common/Header";
import MainRoute from "./routes";
import Footer from "./component/common/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Banner from "./component/Banner";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {/* <Banner /> */}
        {/* <h1 data-testid="heading1">Unit Testing</h1> */}
        <MainRoute />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
