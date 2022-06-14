import { useEffect, useState } from 'react'
import Loader from 'react-loaders'
import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import { useRef } from 'react'
import emailjs from '@emailjs/browser';
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Contact = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const form = useRef()

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs.sendForm(
        'service_xwwp1md', 'template_sblzlk3', event.target, 'cART7uT47w2i0b_a_')
      .then(
        () => {
          alert('Mensaje enviado!')
          window.location.reload(false)
        },
        () => {
          alert('Error al enviar el mensaje, intente de nuevo.')
        }
      )
  }

  return (
    <>
      <div className="container contact-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['C', 'o', 'n', 't', 'a', 'c', 't', 'a', 'm', 'e']}
              idx={15}
            />
          </h1>
          <p>
          Estoy interesado en cualquier proyecto.
          Sin embargo, si tiene una pregunta, 
          no dude en ponerse en contacto conmigo utilizando el siguiente formulario.
          </p>
          <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
              <ul>
                <li className="half">
                  <input 
                    placeholder="Name" 
                    type="text" 
                    name="name" 
                    required 
                  />
                </li>
                <li className="half">
                  <input
                    placeholder="Email"
                    type="email"
                    name="email"
                    required
                  />
                </li>
                <li>
                  <input
                    placeholder="Subject"
                    type="text"
                    name="subject"
                    required
                  />
                </li>
                <li>
                  <textarea
                    placeholder="Message"
                    name="message"
                    required
                  ></textarea>
                </li>
                <li>
                  <input type="submit" className="flat-button" value="Enviar" />
                </li>
              </ul>
            </form>
          </div>
        </div>
        <div className="info-map">
          Bruno Rios,
          <br />
          Uruguay,
          <br />
          Soriano, <br />
          Santa Catalina <br />
          <br />
          <span>brunorios292@gmail.com</span>
        </div>
        <div className="map-wrap">
          <MapContainer center={[-33.79034490936426, -57.48616069945328]} zoom={17}>
            <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
            <Marker position={[-33.79034490936426, -57.48616069945328]}>
            </Marker>
          </MapContainer>
        </div>
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Contact
