import React from 'react'

const NavBar = () => {
    return (
        <nav>
        <div className="nav-wrapper accent-2" style={{ backgroundColor: "#082837" }}>
          <a href="#!" className="brand-logo center" style={{ color: 'white', fontWeight: 'bold' }}><i className="material-icons" style={{ color: 'white', fontSize: '30px' }}>bookmark_border</i>Agile Ticketing System</a>
          <ul className="right hide-on-med-and-down">
          <li>
          <div className="fixed-action-btn-left" id="add-project">
            <a href="#add-project-modal" className="btn-floating btn-medium green accent-1 modal-trigger"> 
                <i className="medium material-icons white" style={{ color: "#082837" }} >create_new_folder</i>
            </a>  
          </div>   
          </li>  

           <li>
          <div className="fixed-action-btn-left" id="add-project">
            <a href="#project-list-modal" className="btn-floating btn-medium white darken-1 modal-trigger"> 
                <i className="medium material-icons "style={{ color: "#082837" }}>dehaze</i>
            </a>  
          </div>   
          </li>        
        </ul>
        </div>
      </nav>
    )
}

export default NavBar