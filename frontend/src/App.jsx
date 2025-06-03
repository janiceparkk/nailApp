import { BrowserRouter, Routes, Route } from "react-router-dom";
import Collection from "./pages/Collection";
import "./App.css";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/collections" element={<Collection />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
