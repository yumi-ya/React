import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";
// import Header from "./Header-comp";
// import Footer from "./Footer-comp";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Header />
      {/* <h2>Let's get started!</h2> */}
      <Body />
      <Footer />
    </div>
  );
}
