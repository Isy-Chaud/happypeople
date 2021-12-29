import background from './img/642903.jpg';
import './App.css';
import Nav from './component/nav.js';
import logo from './img/logo.png';
import logoabc from './img/LogoABC.png';
import logoIsat from './img/LogoIsat.png';
import logoSckapital from './img/SCKAPITAL-01.png';
import logoHptv from './img/hptv.jpg';
import Hptravel from './img/hptravel.jpg';
import Hpsecurity from './img/hpsecurity.png';
import Zandonet from './img/zandonet.png';
import ImperialSong from './img/imperialSong.png';
import OneAction from './img/oneaction.png';
import JerusalemChurch from './img/jerusalemChurch.png';
import Empire from './img/empire.png';

function App() {
  return (
    <div className="App">
      <Nav/>
        <div className="main-container">
            <section className="bg-primary pt240 pb240 pt-xs-120 pb-xs-80 overlay image-bg">
                <div className="background-image-holder">
                    <img alt="image" className="background-image" src={background} />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
                            <h3 className="mb56 mb-xs-24">
                                Happy people services est une entreprise (groupe) oeuvrant dans les domaine de service et sous traitence(Satisfactions des besoins ou services)
                            </h3>
                            <a className="btn btn-lg btn-white mb0" href="https://fr-fr.facebook.com/HappyPeopleSerice/" target="_blank">Mieux nous connaitre</a>
                        </div>
                    </div>
                    
                </div>
              
            </section>
            <a id="about"></a>
            <section className="pt180 pb180 pt-xs-80 pb-xs-80">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center">
                            <h3 className="mb40 mb-xs-32">Une entreprise oeuvrant dans les domaines de sous traitence</h3>
                            <p className="lead mb0">
                                Vous voulez acheter?,vendre?, besoins d'un service, assistance ou soutien? Nous sommes la pour vous HappyPeopleService une entreprise pas comme les autres
                            </p>
                        </div>
                    </div>
              
                </div>
                
            </section>
            <a id="work"></a>
           
            <section className="image-bg overlay pt120 pb120 pt-xs-80 pb-xs-80">
                <div className="background-image-holder">
                    <img alt="image" className="background-image" src="img/agency4.jpg" />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <h5 className="uppercase">
                                <strong>Aviary Gallery</strong>
                            </h5>
                            <h4 className="mb160 mb-xs-80">This impeccably designed Melbourne gallery establishes a new online presence.</h4>
                            <a className="btn btn-lg btn-filled" href="#">View Case Study</a>
                        </div>
                    </div>
                    
                </div>
              
            </section>
            <a id="clients"></a>
            
            <section className="bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-md-8 col-md-offset-2 col-sm-10 col-sm-offset-1 text-center overflow-hidden">
                            <h5 className="uppercase text-center fade-half mb64 mb-xs-32">partenaireS</h5>
                            <div className="col-sm-6">
                                <ul>
                                    <li>
                                        <h6 className="uppercase mb8">Finca,western union, Rawbank, BCDC</h6>
                                    </li>
                                    <li>
                                        <h6 className="uppercase mb8">Instaprint</h6>
                                    </li>
                                    <li>
                                        <h6 className="uppercase mb8">Complast, Bracongo</h6>
                                    </li>
                                    <li>
                                        <h6 className="uppercase mb8">Studio Dakrecords,STUDIO JAZZ,MSON MULOMBI</h6>
                                    </li>
                                    <li>
                                        <h6 className="uppercase mb8"> SOCIETE NRI</h6>
                                    </li>
                                    <li>
                                        <h6 className="uppercase mb8">AMANI TRAVEL</h6>
                                    </li>
                                    <li>
                                        <h6 className="uppercase mb8">Mson FREddyS IMPRIMANTE</h6>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-sm-6">
                                <ul>
                                    <li>
                                        <h6 className="uppercase mb8">Eglise la borne</h6>
                                    </li>
                                    <li>
                                        <h6 className="uppercase mb8">institut superieur de commerce</h6>
                                    </li>
                                    <li>
                                        <h6 className="uppercase mb8">departement de l'education des etats-unis</h6>
                                    </li>
                                    <li>
                                        <h6 className="uppercase mb8">Ministere de l'education et de formation proffessionelle(ESPAGNE)</h6>
                                    </li>
                                    <li>
                                        <h6 className="uppercase mb8">Ministere de l'ensegnement primaire,secondaire et techniques(EPST-INPP)</h6>
                                    </li>
                                    <li>
                                        <h6 className="uppercase mb8">Ministere de l'education nationale francaise(institut francaise)</h6>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
              
                </div>
            
            </section>
            <a id="blog"></a>
            <section className="pt180 pb180 pt-xs-80 pb-xs-80">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h3 className="mb64 mb-xs-32">Services</h3>
                        </div>
                    </div>
                    
                    <div className="row masonry">
                        <div className="masonry-item col-md-4 col-sm-6">
                            <div className="feature bg-secondary p32 pt40 pb40 mb0">
                                <span className="fade-1-4 mb16 display-block">ABC TRAINING SCHOOL</span>
                                <h4 className="mb120">Ecole de langues et metiers</h4>
                                    <img alt="logoABc" src={logoabc}/>
                                
                            </div>
                        </div>
                        <div className="masonry-item col-md-4 col-sm-6">
                            <div className="feature bg-secondary p32 pt40 pb40 mb0">
                                <span className="fade-1-4 mb16 display-block">ISAT Une agence oeuvrant dans les domaines:</span>
                                <h4 className="mb120"> Douane, cabinet de conseil, immobilier,bureau d'etude</h4>
                                <img alt="logoisat" src={logoIsat} />
                            </div>
                        </div>
                        <div className="masonry-item col-md-4 col-sm-6">
                            <div className="feature bg-secondary p32 pt40 pb40 mb0">
                                <span className="fade-1-4 mb16 display-block">SCKAPITAL MULTISERVICES:</span>
                                <h4 className="mb120">Bureau de change, Transfert money, achat et vente des biens</h4>
                                <img alt="logoSckapital" src={logoSckapital} />
                            </div>
                        </div>
                        <div className="masonry-item col-md-4 col-sm-6">
                            <div className="feature bg-secondary p32 pt40 pb40 mb0">
                                <span className="fade-1-4 mb16 display-block">Imperialsong une structure oeuvrant dans le domaine de production:</span>
                                <h4 className="mb120">Musique, cinema, livres, evenement</h4>
                                <img alt="imperialSOng" src={ImperialSong} />
                            </div>
                        </div>
                        <div className="masonry-item col-md-4 col-sm-6">
                            <div className="feature bg-secondary p32 pt40 pb40 mb0">
                                <span className="fade-1-4 mb16 display-block">HappyPeople TV une chaine television baser sur:</span>
                                <h4 className="mb120">L'education, documentaires, divertissement et promotion </h4>
                                <img alt="logohptv" src={logoHptv} />
                            </div>
                        </div>
                        <div className="masonry-item col-md-4 col-sm-6">
                            <div className="feature bg-secondary p32 pt40 pb40 mb0">
                                <span className="fade-1-4 mb16 display-block">One action for children </span>
                                <h4 className="mb120">Assistant les enfants orphelins, les eleves ou etudiants en difficulter d'etude</h4>
                                <img alt="oneAction" src={OneAction} />
                            </div>
                        </div>
                    </div>
              
                </div>
              
            </section>
            <section className="pt180 pb180 pt-xs-80 pb-xs-80">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 text-center">
                            <h3 className="mb64 mb-xs-32"></h3>
                        </div>
                    </div>
                    
                    <div className="row masonry">
                        <div className="masonry-item col-md-4 col-sm-6">
                            <div className="feature bg-secondary p32 pt40 pb40 mb0">
                                <span className="fade-1-4 mb16 display-block">Jerusalem church une eglise en jesus christ ou nous assistons les fidels par:</span>
                                <h4 className="mb120">Prieres, soins de sante, assistance social et vos contributions sont le bienvenues</h4>
                                    <img alt="logoABc" src={JerusalemChurch}/>
                                
                            </div>
                        </div>
                        <div className="masonry-item col-md-4 col-sm-6">
                            <div className="feature bg-secondary p32 pt40 pb40 mb0">
                                <span className="fade-1-4 mb16 display-block">Happy people Empire </span> 
                                <h4 className="mb120">Une cite construite aux normes internationaux</h4>
                                <img alt="logoisat" src={Empire} />
                            </div>
                        </div>
                        <div className="masonry-item col-md-4 col-sm-6">
                            <div className="feature bg-secondary p32 pt40 pb40 mb0">
                                <span className="fade-1-4 mb16 display-block">Happy People Travel est une agence qui organise de voyage</span>
                                <h4 className="mb120">Voyage touristique, d'etude, d'affaire et autres</h4>
                                <img alt="logohptravel" src={Hptravel} />
                            </div>
                        </div>
                        <div className="masonry-item col-md-4 col-sm-6">
                            <div className="feature bg-secondary p32 pt40 pb40 mb0">
                                <span className="fade-1-4 mb16 display-block">Happy People Security une structure engagees pour la securite des personnes et leur biens</span>
                                <h4 className="mb120">Entreprise, maisons, hopitaux, demenagement et depannage</h4>
                                <img alt="logohpsecurity" src={Hpsecurity} />
                            </div>
                        </div>
                        <div className="masonry-item col-md-4 col-sm-6">
                            <div className="feature bg-secondary p32 pt40 pb40 mb0">
                                <span className="fade-1-4 mb16 display-block">Zandonet est une direction specialiser dans le domaine alimentaire ventes des produits</span>
                                <h4 className="mb120">Aliment bio, viande, poisson frais, legumes, poissons sale, chenille et l'eau(Happy water)</h4>
                                <img alt="logozandonet" src={Zandonet}  />
                            </div>
                        </div>
                        <div className="masonry-item col-md-4 col-sm-6">
                            <div className="feature bg-secondary p32 pt40 pb40 mb0">
                                <span className="fade-1-4 mb16 display-block">Happy People Service</span>
                                <h4 className="mb120">Fournisseur des solutions</h4>
                                <img alt="logoHP" src={logo} />
                            </div>
                        </div>
                    </div>
              
                </div>
              
            </section>
            <a id="contact"></a>
            <section>
                <h2>contact</h2>
                <h3>2 brasserie Avenue
                    <br/>Q/ kingabwa C/limete
                    <br/>(243) 9063 049 19
                    <br/>happypeopleservices100@gmail.com</h3>
            </section>
            
            <footer className="footer-2 bg-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6 col-md-offset-3 col-sm-8 col-sm-offset-2 text-center">
                            <a href="#">
                                <img alt="Logo" className="image-xs mb32 fade-on-hover" src={logo} />
                            </a>
                            <h5 className="fade-1-4">Handcrafted by IsyChaud &copy; 2022</h5>
                            <ul className="list-inline social-list mb0">
                                <li>
                                    <a href="#">
                                        <i className="ti-twitter-alt"></i>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://fr-fr.facebook.com/HappyPeopleSerice/">
                                        <i className="ti-facebook"></i>
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
                  
                </div>
                
            </footer>
        </div>
       
    </div>
  );
}

export default App;
