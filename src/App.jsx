import './App.css';
import MainLayout from "./components/layout/main.jsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
    return (<>
        <BrowserRouter>
            <Routes>
                <Route path="/*" element={<MainLayout/>}/>
            </Routes>
        </BrowserRouter>
    </>)
}

export default App;
