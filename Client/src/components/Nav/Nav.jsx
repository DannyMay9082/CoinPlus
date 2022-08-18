import React from 'react'
import Logo from '../../assets/img/coin+logo.png'

function Nav() {
  return (
    <nav class="navbar navbar-expand-sm navbar-dark bg-warning px-md-5 px-1">
        <div class="container-fluid w-100">
          <img src={Logo} alt="C+" width="150"/>

            <button class="navbar-toggler" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#navbarSupportedContent"
                aria-controls="#navbarSupportedContent"
                aria-expanded="false"
                aria-label="toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link">Home</a></li>
                    <li class="nav-item"><a class="nav-link">Services</a></li>
                    <li class="nav-item"><a class="nav-link">About</a></li>
                    <li class="nav-item"><a class="nav-link">Notifications</a></li>
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default Nav