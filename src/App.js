import './App.css';
import Show from "./components/Show.jsx"
import Create from "./components/Create.jsx";
import Edit from "./components/Edit.jsx";

import { BrowserRouter,Routes,Route } from "react-router-dom";

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Show/>}/>
                    <Route path="/create" element={<Create/>}/> 
                    <Route path="/edit/:id" element={<Edit/>}/>
                </Routes>
            </BrowserRouter>    </div>
    );
}

export default App;
