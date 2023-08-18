import React from 'react'

import './NavBar.css';
export default function NavbarBlog() {
  return (
    <div className="container">
    <nav className="navbar ">
      
        <h1 >Quiz App</h1>
       
        <div className="link">
            <a href="homepage">Home</a>
            <a href="/create"  
            > New Blog </a>
        </div>
    </nav>
    </div> 
  )
}
