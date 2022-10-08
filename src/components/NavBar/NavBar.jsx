import React from 'react'
import CartWidget from './CartWidget/CartWidget'
import logo from './logo.png'
import './NavBar.css'
import {Link} from "react-router-dom"

function NavBar() {



  return (
    <>
        <nav className="navbar navbar-expand-lg bg-light sticky-top">
            <div className="container-fluid">
                <img className='logoNavbar' src={logo} alt="Logo Juntitos"/>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link active" aria-current="page">Catálogo</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link to="/" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorías
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link to="/category/ropa" className="dropdown-item">Ropa</Link></li>
                                <li><Link to="/category/accesorios" className="dropdown-item">Accesorios</Link></li>
                                
                                {/* <li><hr className="dropdown-divider"/></li>
                                <li><a className="dropdown-item" href="#">Something else here</a></li> */}
                            </ul>
                        </li>                        
                    </ul>
                    <CartWidget/>
                {/* <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button className="btn btn-outline-success" type="submit">Search</button>
                </form> */}
                </div>
            </div>
        </nav>
    
    </>
  )
}

export default NavBar