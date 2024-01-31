import React from 'react'
import imageLogo from '../../assets/images/logo_donbosco.png'
import 'styles/home-header.css'

const HomeHeader = (props) => {
  return (
    <header className="header-container">
      <div>
        <figure className="header-image">
          <img src={imageLogo} className="" alt="Don Bosco Sucre - Logo" />
        </figure>

        <h1 className="header-title">
          Sistema
          <small>Academico</small>
        </h1>
      </div>
    </header>
  )
}

export default HomeHeader
