import React from 'react'
import '../styles/footer.css'

const Footer = () => {

    return (
      <>
        <footer className="footer">
          <p>
            App creada consumiendo
            <a href="https://pokeapi.co/" target="_blank" rel="noreferrer"> pokeapi</a>
          </p>
          <p> all rights reserved © 2021</p>
          <p>Brayan Puentes Ruiz</p>
        </footer>
      </>
    );
}

export {
    Footer
}