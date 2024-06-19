import React, { FunctionComponent } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './components/App.css'; // Importer le fichier CSS
import PurityNbPerS from './components/PurityNbPerS';
import PurityMassPerS from './components/PurityMassPerS';
import Camembert from './components/Camembert';
import Occup from './components/Occup';

const App: FunctionComponent = () => {
    return (
        <Router>
            <div className="container">
                {/* Première rangée */}
                <div className="row header-row">
                    <nav className="bar">
                        <Link to="/" className="brand-link">
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/48/Veolia_logo.svg/640px-Veolia_logo.svg.png"
                                alt="Veolia Logo"
                                className="brand-logo"
                            />
                        </Link>
                        <h1 className="title">Portik</h1>
                    </nav>
                </div>

                {/* Deuxième rangée */}
                <div className="row middle-row">
                    <div className="component"><PurityNbPerS/></div>
                    <div className="component"><PurityMassPerS/></div>
                    <div className="component"><Occup/></div>
                    <div className="component"><Camembert/></div>
                </div>

                {/* Troisième rangée */}
                <div className="row footer-row">
                    <img src="https://www.usinenouvelle.com/mediatheque/4/1/0/000698014_896x598_c.jpg" alt="Image 1" className="footer-image" />
                    <img src="https://www.environnement-magazine.fr/e-docs/00/01/D9/3E/veolia-teste-robottrieur-fonctionnant-intelligence-artificielle_620x350.jpg" alt="Image 2" className="footer-image" />
                    
                </div>
            </div>
        </Router>
    );
}

export default App;
