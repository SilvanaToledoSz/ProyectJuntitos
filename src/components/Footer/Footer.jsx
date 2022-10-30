import React from 'react'
import {Link} from "react-router-dom"
import './Footer.css'
import { FaInstagram } from 'react-icons/fa'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaWhatsappSquare } from 'react-icons/fa'


function Footer() {

  let logoFooter = { 
    width: "90px",
    margin: "0px",
    display: "flex",
    padding: "10px",
    opacity: "0.7"
    }

  return (
    <>
        <div className="container-fluid footer__div">
            <div className="row div__fila--footer align-items-center">
                <div className="col-md-4 text-center" >
                    <Link to="/" >
                        <img src="https://visionary-buttercream-a05d6d.netlify.app/static/media/logo.4be06ad06e3c321446bc.png" alt="Logo Juntitos" style={logoFooter} className="img-fluid"/>
                    </Link>
                </div>
                <div className="col-md-4 div__disclaimer--footer text-center text-grey" >
                    © 2022 Juntitos, todos los derechos reservados.
                </div>
                <div className="col-md-4 div__redes--footer" >
                    <a href="https://www.instagram.com/juntitosbebe/" rel="noreferrer" target="_blank">
                      <FaInstagram style={{fontSize: '30px'}} />
                    </a>
                    <a href="https://www.facebook.com/Juntitosropabebe" rel="noreferrer" target="_blank">
                      <FaFacebookSquare className='text-light' style={{fontSize: '30px'}} />
                    </a>
                    <Link to="/">
                      <FaWhatsappSquare className='text-light' style={{fontSize: '30px'}} />
                    </Link>
                  
                </div>
            </div>
        </div>
    </>
  )
}

export default Footer