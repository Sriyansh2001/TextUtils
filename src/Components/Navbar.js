import React , {useState} from 'react';
// import {Link} from "react-router-dom";

export default function Navbar(props) {

  const make_change = () => {
    var val = document.getElementById("select_option").value;
    props.change_color_to(val);
  }

  const slide_bar= () => {
    const hamburger = document.querySelector(".Hamburger");
    const nav = document.querySelector(".nav-menu");
    console.log(hamburger);
    if(hamburger) {
        hamburger.addEventListener("click",() => {
          hamburger.classList.toggle("active")
        })
        nav.addEventListener("click",() => {
          nav.classList.toggle("active")
        })
        
    }
  }

  return (
    <div>
      <nav className='nav'>
        <div className='nav-menu'>
          <span className='dark_mode_class_text'>
            <strong>Enable {props.mode=="Dark"?"Light":"Dark"} mode</strong>
          </span>
          <span className='dark_mode_class'>
            <input type='checkbox' onChange={props.toggle_visiblity_mode} className='switch' id='switch'></input>
          </span>
          <span className='switcharea'>
            <select className="select_option" id="select_option">
              <option>Blue</option>
              <option>Green</option>
              <option>Red</option>
              <option>Purple</option>
            </select>
            <button className='Theme' onClick={make_change}>Change Theme</button>
          </span>

          <span className='list'>
            <b style={{fontSize:"18px"}}>Text Utils</b> &nbsp;
            <a href='/' className='item'>Home</a>
            <a href='#' className='item'>Contact</a>
            <a href='#' className='item'>Helpline</a>
            <a href='/about' className='item'>About</a>
          </span>
        </div>
          <button className="Hamburger" onClick={slide_bar}>
          X
        </button>
      </nav>
    </div>
  )
}
