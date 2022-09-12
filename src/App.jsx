import Info from "./components/Info";
import Form from "./components/Form";
import Footer from "./components/Footer";

import "./App.css";

const App = () => {
  return (
    <>
      <div className="main">
        <div className="container">
          <Info />
          <Form />
        </div>
        <Footer />
      </div>
    </>
  );
};

export default App;
