import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='container navbar'>
        <h1>Aranoz.</h1>
        <ul>
            <Link to={"/"} className="link">Home</Link>
            <Link to={"/basket"} className="link">Basket</Link>
            <Link to={"/favorite"} className="link">Favorit</Link>
            <Link className="link">Blog</Link>
            <Link className="link">Contact</Link>
        </ul>
        <div className="navicon">
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <FontAwesomeIcon icon={faHeart} />
        <FontAwesomeIcon icon={faCartShopping} />
        </div>

    </div>
  )
}

export default Navbar