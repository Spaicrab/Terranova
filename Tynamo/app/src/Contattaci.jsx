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

      <div className="riquadro">
        <div>
          <h1>Contattaci</h1>
          <div className="contenuto">
            <i className='bx bxs-home-alt-2'/>
            <h3>+39 02 12345678</h3>
            <br/>
            <i className='bx bx-devices'/>
            <h3>+39 347 9876543</h3>
          </div>
          <br/>
          <div className="contenuto">
            <i className='bx bxs-envelope'/>
            <h3>tynamo@assistenza.com</h3>
            <br/>
            <i className='bx bxs-info-circle'/>
            <h3>tynamo@info.com</h3>
          </div>
        </div>
        <div className="separatore"/>
        <div>
          <i className='bx bxs-map'/>
          {(clientCountry == "Italy") ? <>
            <h2>Verona, Italy</h2>
            <br/>
            <iframe className="mappa" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2800.0660318602972!2d10.9692262766284!3d45.42817023584146!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x477f5f61f8852227%3A0xfab7331910c8e071!2sITIS%20Guglielmo%20Marconi!5e0!3m2!1sit!2sit!4v1714310186579!5m2!1sit!2sit" 
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </> : (!(clientCountry == "") ? <>
              <p>Italy</p>
              <br/>
              <h1>Cannot load resource</h1>
            </> : <></>
          )}
        </div>
      </div>
    </div>
  );
}
