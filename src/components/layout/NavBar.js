import React from 'react'

const NavBar = () => {
    return (
        <nav>
        <div className="nav-wrapper blue-grey darken-1">
          <a href="#!" className="brand-logo center"><i className="material-icons">bookmark</i>Agile Ticketing System</a>
          <ul className="right hide-on-med-and-down">
          <li>
          <div className="fixed-action-btn-left" id="add-project">
            <a href="#add-project-modal" className="btn-floating btn-large indigo darken-3 darken-1 modal-trigger"> 
                <i className="large material-icons">add_circle_outline</i>
            </a>  
          </div>   
          </li>  

           <li>
          <div className="fixed-action-btn-left" id="add-project">
            <a href="#project-list-modal" className="btn-floating btn-large indigo darken-3 darken-1 modal-trigger"> 
                <i className="large material-icons">line_weight</i>
            </a>  
          </div>   
          </li>        
        </ul>
        </div>
      </nav>
    )
}

export default NavBar