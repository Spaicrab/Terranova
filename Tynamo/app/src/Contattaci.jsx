import React from 'react'
import { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import GetClientCountry from './api/GetClientCountry';
import './Contattaci.css'

export default function Contattaci() {
  const [clientCountry, setClientCountry] = useState("");
  
  useEffect(() => {
    async function asyncFunction() {
      const apiResult = await GetClientCountry()
      setClientCountry(apiResult)
    }
    asyncFunction()
  }, []);

  return (
    <div className="page-Contattaci">
      <Helmet>
        <title>Tynamo - Contattaci</title>
        <body className="body-Default"/>
      </Helmet>
    
      <div className="riquadro" style={
        (clientCountry != "Italy") ? {"height": "340px"} : {}
      }>
        {(clientCountry == "Italy") ? <PageContent/> : (
          (clientCountry != "") ? <div className="noResource">
            <i className='bx bxs-map'/>
            <h2>Italy</h2>
            <br/>
            <h1>Cannot load resource</h1>
          </div> : null
        )}
        <a className="repositoryLink" href="https://github.com/Spaicrab/Terranova">
          <p>Github Repository Link</p>
          <i className='bx bx-link-external'/>
        </a>
      </div>
    </div>
  )
}

function PageContent() {
  return (<>
    <div className="contatti">
      <h1>Contattaci</h1>
      <div className="contenuto">
        <i className='bx bx-code-alt'/>
        <div>
          <h3>Lead Developer</h3>
          <p>Giulio De Felice</p>
          <p className="email">giuliodf2005@gmail.com</p>
        </div>
      </div>
      <br/>
      <div className="contenuto">
        <i className='bx bxs-palette'/>
        <div>
          <h3>UI Developer</h3>
          <p>Giuseppe Russo</p>
          <p className="email">giuseppe.russo.c2019@gmail.com</p>
        </div>
      </div>
      <br/>
      <div className="contenuto">
        <i className='bx bxs-wrench'/>
        <div>
          <h3>Technician</h3>
          <p>Mattia Cremasco</p>
        </div>
      </div>
      <br/>
      <div className="contenuto">
        <i className='bx bxs-user-rectangle'></i>
        <div>
          <h3>Project Manager</h3>
          <p>Riccardo Lovato</p>
          <p className="email">riccardo.lovato05@icloud.com</p>
        </div>
      </div>
    </div>
    <div className="divMappa">
      <i className='bx bxs-map'/>
      <h2>Verona, Italy</h2>
      <br/>
      <iframe className="mappa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0660318602972!2d10.9692262766284!3d45.42817023584146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5f61f8852227%3A0xfab7331910c8e071!2sITIS%20Guglielmo%20Marconi!5e0!3m2!1sit!2sit!4v1714310186579!5m2!1sit!2sit" 
        allowFullScreen=""
        referrerPolicy="no-referrer-when-downgrade">
      </iframe>
    </div>
  </>);
}
