import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')

  const nameArray = ['B', 'r', 'u', 'n', 'o', ' ', 
  'R', 'i', 'o','s']
  const jobArray = ['u', 'n', ' ', 
  'a', 'n', 'a', 'l', 'i', 's', 't', 'a', ' ', 
  'p', 'r', 'o', 'g', 'r', 'a', 'm', 'a', 'd', 'o', 'r', '.']

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass} _6`}>H</span>
            <span className={`${letterClass} _7`}>o</span>
            <span className={`${letterClass} _8`}>l</span>
            <span className={`${letterClass} _9`}>a,</span>
            <br/>
            <span className={`${letterClass} _6`}>S</span>
            <span className={`${letterClass} _7`}>o</span>
            <span className={`${letterClass} _8`}>y</span>
            <br/>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={6}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={6}
            />
          </h1>
          <h2>Estudiante en la CTC</h2>
          <Link to="/contact" className="flat-button">
            CONTACTAME
          </Link>
        </div>
      </div>

      <Loader type="pacman" />
    </>
  )
}

export default Home
