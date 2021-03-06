import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import './App.css';
import {Home} from "./components/Home";
import {DetailView} from "./components/DetailView";
import NoMatch from "./components/NoMatch";




function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path="/beer/:id" element={<DetailView/>}></Route>
                <Route path="*" element={<NoMatch />} />

            </Routes>

        </BrowserRouter>

    </div>
  );
}

export default App;
