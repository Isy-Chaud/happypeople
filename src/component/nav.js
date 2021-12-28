import react from "react";
import logo from '../img/logo.png';

function nav(){
    return(
       <div  className="nav-container">
            <a id="top"></a>
            <nav className="absolute transparent">
                <div className="nav-bar">
                    <div className="module left">
                        <a href="index.html">
                            <img className="logo logo-light" alt="Foundry" src={logo} />
                            <img className="logo logo-dark" alt="Foundry" src={logo} />
                        </a>
                    </div>
                    <div className="module widget-handle offscreen-toggle right">
                        <i className="ti-menu"></i>
                    </div>
                </div>
                <div className="offscreen-container bg-dark text-center">
                    <div className="close-nav">
                        <a href="#">
                            <i className="ti-close"></i>
                        </a>
                    </div>
                    <div className="v-align-transform text-center">
                        <a href="#">
                            <img alt="Logo" className="image-xs mb40 mb-xs-24" src={logo} />
                        </a>
                        <ul className="mb40 mb-xs-24">
                            <li className="fade-on-hover">
                                <a href="#top" className="inner-link">
                                    <h5 class="uppercase mb8">Accueil</h5>
                                </a>
                            </li>
                            <li className="fade-on-hover">
                                <a href="#about" className="inner-link">
                                    <h5 className="uppercase mb8">Apropos</h5>
                                </a>
                            </li>
                            <li className="fade-on-hover">
                                <a href="#work" className="inner-link">
                                    <h5 className="uppercase mb8">Travail</h5>
                                </a>
                            </li>
                            <li className="fade-on-hover">
                                <a href="#clients" className="inner-link">
                                    <h5 className="uppercase mb8">Clients</h5>
                                </a>
                            </li>
                            <li className="fade-on-hover">
                                <a href="#blog" className="inner-link">
                                    <h5 className="uppercase mb8">Services</h5>
                                </a>
                            </li>
                            <li className="fade-on-hover">
                                <a href="#contact" className="inner-link">
                                    <h5 className="uppercase mb8">Contact</h5>
                                </a>
                            </li>
                        </ul>
                        <p className="fade-half">
                            2 brasserie Avenue
                            <br /> Q/ kingabwa C/limete
                            <br /> (243) 9063 049 19
                            <br /> happypeopleservices100@gmail.com
                        </p>
                        <ul className="list-inline social-list">
                            <li>
                                <a href="#">
                                    <i className="ti-twitter-alt"></i>
                                </a>
                            </li>
                            <li>
                                <a href="#">
                                    <i className="ti-dribbble"></i>
                                </a> 
                            </li>
                            <li>
                                <a href="#">
                                    <i className="ti-vimeo-alt"></i>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
              
            </nav>
        </div>
    )
}

export default nav;