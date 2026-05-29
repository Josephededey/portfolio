import { useState } from 'react';

const Navbar = () => {
  let [mobileNav, setMobileNav] = useState(false);
  const navToggle = () => {
    if (mobileNav) {
      setMobileNav(false);
    } else {
      setMobileNav(true);
    }
  }


    return ( 
      <nav className={`navbar`}>
        <div className="nav-txt">
          <span className='logo1'>I C E F O X</span> <span className='logo2'>D E V</span>
        </div>
        {/* desktop navbar */}
        <ul className='horiz-nav'>
          <li><a href='#home'>Home</a></li>
          <li><a href='#about'>About</a></li>
          <li><a href='#services'>Services</a></li>
          <li><a href='#projects'>Projects</a></li>
          <li><a href='#contact'>Contact</a></li>
        </ul>
        {/* hamburger button */}
        <button onClick={navToggle} className="ham-border">
            <div className="ham-line">
            </div>
            <div className="ham-line">
            </div>
            <div className="ham-line">
            </div>
        </button>

        {/* mobile navbar */}
        <div className={`mobile-nav ${mobileNav ? 'mb-nav-active' : 'mb-nav-deactive'}`}>
          <div className='blur'>
          <ul className='nav-style'>
            <li><a href='#home'>Home</a></li>
            <li><a href='#about'>About</a></li>
            <li><a href='#services'>Services</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#contact'>Contact</a></li>
          </ul>

          </div>
        </div>
      </nav>
     );
}
 
export default Navbar;