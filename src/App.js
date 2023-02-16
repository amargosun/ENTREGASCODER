import './App.css';
import Show from "./components/Show.jsx"

import { BrowserRouter,Routes,Route } from "react-router-dom";
// import Crear from "./components/Crear";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Show/>}/>
                    {/* <Route path="/create" element={<Crear/>}/> */}
                    {/*   <Route path="/edit/:id" element={<Edit/>}/> */}
                </Routes>
            </BrowserRouter>    </div>
    );
}

export default App;
