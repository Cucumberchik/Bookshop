
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import AddBooksing from './context/addBooks';
import NavbarContext from './context/navbarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <AddBooksing>
            <NavbarContext>
                <App />
            </NavbarContext>
        </AddBooksing>
    </BrowserRouter>
);

