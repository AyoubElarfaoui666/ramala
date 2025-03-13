import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Authentification from "./authentification";
import { store } from "./redux/store.js";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.js";
import AjouterConvention from "./AjouterConvention.js";
import AfficherConventions from "./AfficherConventions.js";

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<Authentification />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/AjouterConventions" element={<AjouterConvention />} />
          <Route path="/AfficherConventions" element={<AfficherConventions />} />
        </Routes>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
