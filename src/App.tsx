import MainLayout from './layouts/MainLayout';
import About from './routes/About';
import Home from './routes/Home';
import './sass/app.scss';
import { Routes, BrowserRouter, Route } from 'react-router-dom';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<MainLayout />}>
                    <Route path={`/`} element={<Home />} />
                    <Route path={`/about`} element={<About />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
