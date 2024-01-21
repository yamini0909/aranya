import React from 'react'
import MainIcon from "../images/main.png"
const Header = () => {
  return (
    <div className='menu-cnt'>
        <div className='main-icon'>
            <img src={MainIcon}/>
        </div>
        <ul className='menu-list'>
            <li>
            HOME
            </li>
            <li>
            OVERVIEW
            </li>
            <li>
            AMENITIES
            </li>
            <li>
            GALLERY
            </li>
            <li>
            CONTACT
            </li>
        </ul>
        <button className='enquire'>ENQUIRE NOW</button>
    </div>
  )
}

export default Header