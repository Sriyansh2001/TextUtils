import React , {useEffect}  from 'react';
// import {Link} from "react-router-dom";

export default function Navbar(props) {

  const make_change = () => {
    var val = document.getElementById("select_option").value;
    props.change_color_to(val);
  }

  return (
    <div>
      <nav className='nav'>
        <div className='nav-menu'>
          <div className='dark_mode_class_text'>
            <strong>Enable {props.mode==="Dark"?"Light":"Dark"} mode</strong>
          </div>
          <div className='dark_mode_class'>
            <input type='checkbox' onChange={props.toggle_visiblity_mode} className='switch' id='switch'></input>
          </div>
          <div className='switcharea'>
            <select className="select_option" id="select_option">
              <option>Blue</option>
              <option>Green</option>
              <option>Red</option>
              <option>Purple</option>
            </select>
            <button className='Theme' onClick={make_change}>Change Theme</button>
          </div>

          <div className='list'>
            <b style={{fontSize:"18px"}}>Text Utils</b> &nbsp;
            <a href='/' className='item'>Home</a>
            <a href='/' className='item'>Contact</a>
            <a href='/' className='item'>Helpline</a>
            <a href='/' className='item'>About</a>
          </div>
        </div>
          {/* <button className="Hamburger" onClick={Slide_bar()}>
          X
        </button> */}
      </nav>
    </div>
  )
}
