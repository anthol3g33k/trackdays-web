import React, { Component } from 'react';

class Home extends Component {
  render() {
    return (
      <div>
        <header className="masthead text-center text-white d-flex">
          <div className="container my-auto">
            <div className="row">
              <div className="col-lg-10 mx-auto">
                <h1 className="text-uppercase">
                  <strong>Organisez votre journée circuit maintenant</strong>
                </h1>
                <hr/>
              </div>
              <div className="col-lg-8 mx-auto">
                <p className="text-faded mb-5">Vous trouverez ici l\'ensemble des trackdays de nos partenaires. Inscrivez-vous dès aujourd\'hui à un événement, participez, cumulez des points et retrouvez vos photos!</p>
                <a className="btn btn-primary btn-xl js-scroll-trigger" href="">Trouver un événement</a>
              </div>
            </div>
          </div>
        </header>

        <section className="bg-primary" id="about">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading text-white">Inscrivez-vous!</h2>
                <hr className="light my-4"/>
                <p className="text-faded mb-4">Créez votre comtpe et accédez à votre espace personnel pour profiter de l\'ensemble des services.</p>
                <a className="btn btn-light btn-xl js-scroll-trigger" href="">Inscription</a>
              </div>
            </div>
          </div>
        </section>

        <section id="services">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <h2 className="section-heading">Vos services</h2>
                <hr className="my-4"/>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-diamond text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3">Réservez votre place</h3>
                  <p className="text-muted mb-0">Bénéficiez d\'avantages en réservant votre place à l\'avance</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-paper-plane text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3">Amusez vous sur la piste</h3>
                  <p className="text-muted mb-0">Profitez de l\'asphalte, nous nous occupons du reste</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-newspaper-o text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3">Récupérez vos photos</h3>
                  <p className="text-muted mb-0">Nos photographes partenaires vous ferons parvenir vos photos</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 text-center">
                <div className="service-box mt-5 mx-auto">
                  <i className="fa fa-4x fa-heart text-primary mb-3 sr-icons"></i>
                  <h3 className="mb-3">Partagez vos performances</h3>
                  <p className="text-muted mb-0">Ajoutez vos vidéos et vos chronos dans votre espace personnel</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="p-0" id="portfolio">
          <div className="container-fluid p-0">
            <div className="row no-gutters popup-gallery">
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="/img/portfolio/fullsize/1.jpg">
                  <img className="img-fluid" src="/img/portfolio/thumbnails/1.jpg" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Photos
                      </div>
                      <div className="project-name">
                        Spa Francorchamps 18/08/18
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="/img/portfolio/fullsize/2.jpg">
                  <img className="img-fluid" src="/img/portfolio/thumbnails/2.jpg" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Photos
                      </div>
                      <div className="project-name">
                        Monza 30/08/18
                      </div>
                    </div>
                  </div>
                </a>
              </div>
              <div className="col-lg-4 col-sm-6">
                <a className="portfolio-box" href="/img/portfolio/fullsize/3.jpg">
                  <img className="img-fluid" src="/img/portfolio/thumbnails/3.jpg" alt=""/>
                  <div className="portfolio-box-caption">
                    <div className="portfolio-box-caption-content">
                      <div className="project-category text-faded">
                        Photos
                      </div>
                      <div className="project-name">
                        Nürburgring 01/09/18
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="contact">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 mx-auto text-center">
                <h2 className="section-heading">Restez connecté!</h2>
                <hr className="my-4"/>
                <p className="mb-5">Vous en voulez plus? De nouvelles fonctionnalités et de nouveaux partenariats sont à venir!</p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-4 ml-auto text-center">
                <i className="fa fa-phone fa-3x mb-3 sr-contact"></i>
                <p>+33 (0)6 11 22 33 44</p>
              </div>
              <div className="col-lg-4 mr-auto text-center">
                <i className="fa fa-envelope-o fa-3x mb-3 sr-contact"></i>
                <p>
                  <a href="mailto:support@trackdays.com">support@trackdays.com</a>
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default Home
