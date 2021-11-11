import React from 'react'
import OwlCarousel from 'react-owl-carousel'
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import ScreenHeading from '../../utilites/ScreenHeading/ScreenHeading'
import ScrollService from '../../utilites/ScrollService'
import Animations from '../../utilites/Animations';
import './Testimonial.css'

export default function Testimonial(props) {
    let fadeInScreenHalder = (screen) => {
        if (screen.fadeInScreen !== props.id) return;
        Animations.animations.fadeInScreen(props.id);
      };// eslint-disable-next-line
      const fadeInSubscription =
        ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHalder);
        const options = {
            loop: true,
            marign: 0,
            nav: true,
            animateIn: "bounceInRight",
            animateOut: "bounceOutRight",
            dots: true,
            autoplay: true,
            smartSpeed: 1000,
            responsive: {
                0:{
                    items: 1,
                },
                768:{
                    items: 1,
                },
                1000:{
                    items: 3,
                },
            }
        }
    return (
        <div>
            <ScreenHeading title={'Testimonial'} subHeading={'What people say about Me'}/>
            <section className="testimonial-section" id={props.id}>
                <div className="container">
                    <div className="row">
                        <OwlCarousel className="owl-carousel" id="testimonial-carousel"{...options}>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className="fa fa-quote-left" />
                                            Testimonial
                                            <i className="fa fa-quote-right" />
                                        </p>
                                        <ul className="stars list-unstyled">
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src="img/Testimonial/lady.png" alt="No internet connection"></img>
                                        <h5>Person 1</h5>
                                        <p>CEO L&T</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="testi-item">
                                    <div className="testi-comment">
                                        <p>
                                            <i className="fa fa-quote-left" />
                                            Testimonial
                                            <i className="fa fa-quote-right" />
                                        </p>
                                        <ul className="stars list-unstyled">
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                            <li>
                                                <i className="fa fa-star" />
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="client-info">
                                        <img src="img/Testimonial/lady.png" alt="No internet connection"></img>
                                        <h5>Person 1</h5>
                                        <p>CEO L&T</p>
                                    </div>
                                </div>
                            </div>
                            
                        </OwlCarousel>
                        </div>
                </div>
            </section>
            <div className="footer-image" >
                            <img src={require ('../../assets/Testimonial/shape-bg.png')} alt="No Internet Connection"/>
                        </div>
        </div>
    )
}
