import React, { useEffect, useState } from 'react';
// import '../../sass/pages/shared/footer.scss'

let visibility: boolean;
let isLogin: boolean;
var mainServiceUrl = process.env.REACT_APP_URL!;

function Footer() {
    const [isLogin, setIsLogin] = useState<any>();
    const url = String(window.location.href)
    const urlArr: Array<String> = url.split("/")
    var imageHost = process.env.REACT_APP_IMAGEHOST!;
    function isLoginfn(): boolean {
        let access_token = localStorage.getItem("access_token");
        if (access_token === undefined || access_token === "" || access_token === null) {
            return false;
        }
        else {
            return true;
        }
    }

    if (["signup", "login", "two-factor-authentication"].some(element => url.includes(`${element}`))) {
        visibility = false;
    }
    else {
        visibility = true;
    }

    return (
        <div className='footer mt-4 '>
            {visibility ?
                <div className='bg-white'>
                    {isLoginfn() ? <div></div> :
                        <div className="mobile-screen-section">
                            <div className="container pb-5  ">
                                <div className="row mb-3 top-section ">
                                    <h3 className='upper-banner-header'>See What Global Analysts Say About Cryptocurrency.</h3>
                                    <div className="col-6 col-md-6 col-lg-3 ">
                                        <a target="_blank" href='https://www.forbes.com/crypto-blockchain/?sh=456e95ee2b6e'><img className=' img-fluid' src={imageHost + "/forbes.svg"} alt="" /></a>
                                    </div>
                                    <div className="col-6 col-md-6 col-lg-3 ">
                                        <a target="_blank" href='https://www.bloomberg.com/crypto?sref=N6C6cytb'><img className=' img-fluid' src={imageHost + "/bloomberg.svg"} alt="" /></a>
                                    </div>
                                    <div className="col-6 col-md-6 col-lg-3 margin-image">
                                        <a target="_blank" className="next-line-img" href='https://www.cnbc.com/cryptoworld/'><img className=' img-fluid ' src={imageHost + "/cnbc.svg"} alt="" /></a>
                                    </div>
                                    <div className="col-6 col-md-6 col-lg-3 margin-image ">
                                        <a target="_blank" href='https://www.investopedia.com/articles/forex/091013/future-cryptocurrency.asp'><img className='  img-fluid' src={imageHost + "/investopedia.png"} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                            <div className="container">
                                <hr />
                            </div>
                            <div className="container">
                                <div className="lower-banner text-left">
                                    <div>
                                        <h3 className=' lower-banner-header' >Beyond Cryptocurrency</h3>
                                        <p className='lower-banner-para'>CRPTM spans across an entire Crypto world    <span>
                                            <a className='get-started-btn ms-3' href='/signup' >Get Started</a> <img className="img-fluid ms-5" src={imageHost + '/pointing-hand-mascot.svg'} alt="" />
                                        </span></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    <div className="top-border footer-bg-map  pb-3">
                        <img className='footer-box-image ' src={imageHost + '/arrow-cut-shape.png'} alt="Footer Box" />
                        <div className="row container m-auto">
                            <div className="col-sm-12 col-md-6 col-lg-3 padding-left-content">
                                <h4 className="content-heading" >Products</h4>
                                <ul className="footer-heading-text">
                                    <li className="footer-heading-list"><a className="footer-heading-link" href={mainServiceUrl + "/cryptotax"}>Crypto Tax</a></li>
                                    <li className="footer-heading-list"><a className="footer-heading-link" href={mainServiceUrl + "/investment-strategies"}>Investment Strategies</a></li>
                                    <li className="footer-heading-list"><a className="footer-heading-link" href={mainServiceUrl + "/pay-by-crypto"}>Pay by Crypto</a></li>
                                    <li className="footer-heading-list"><a className="footer-heading-link" href={mainServiceUrl + "/integrations"}>Integrations</a></li>
                                </ul>
                            </div>
                            <div className="col-sm-12 col-md-6 col-lg-3  padding-left-content">
                                <h4 className="content-heading">Company Info</h4>
                                <ul className="footer-heading-text">
                                    <li className="footer-heading-list"><a className="footer-heading-link" href={mainServiceUrl + "/privacy-policy"}>Privacy Policy</a></li>
                                    <li className="footer-heading-list"><a className="footer-heading-link" href={mainServiceUrl + "/terms-of-use"}>Terms of  Use</a></li>
                                    <li className="footer-heading-list"><a className="footer-heading-link" href={mainServiceUrl + "/contactus"} >Contact Us</a></li>
                                    <li className="footer-heading-list"><a className="footer-heading-link" href={mainServiceUrl + "/faq"}>FAQs</a></li>
                                </ul>
                            </div>
                            <div className="footer-right col-sm-12 col-lg-3 padding-left-content">
                                <h4 className="content-heading mb-3 ">About Us</h4>
                                <img className="img-fluid mt-1" src={imageHost + '/logo-with-tagline.svg'} alt="logo-with-tagline" />
                                <p className="footer-paragraph mt-3">At CRPTM , we cherish the vision to provide a trusted and...<a href={mainServiceUrl + "/aboutus"}> Read More</a></p>      
                            </div>
                            <div className="footer-right col-sm-12 col-lg-3 padding-left-content">
                                          <div className="social-icon-section">
                                            <h4 className="content-heading mb-4">Follow Us</h4>
                                            <div className="social-inline ">
                                                <a href="https://www.facebook.com/crptm.official" target="_blank"><img className=' social-icon-margin img-fluid' src={imageHost + "/facebook.svg"} alt="" /></a>
                                                <a href="https://twitter.com/CrptmOfficial" target="_blank"><img className=' social-icon-margin img-fluid' src={imageHost + "/twitter.svg"} alt="" /></a>
                                                <a href="https://www.instagram.com/crptm.official/" target="_blank"><img className=' social-icon-margin img-fluid' src={imageHost + "/instagram.svg"} alt="" /></a>
                                                <a href="https://www.youtube.com/channel/UCy6IZhZ3GQd4_tkiyAEyo_g" target="_blank"><img className=' social-icon-margin img-fluid' src={imageHost + "/youtube.svg"} alt="" /></a>
                                            </div>
                                        </div>
                            </div>
                        </div>
                    </div>
                    <div className="row footer-band m-0">
                        <div className="col-sm-12 col-lg-12 text-center m-0">
                            <p className='band-para copyright' >© 2022 CRPTM All Rights Reserved</p>
                        </div>
                    </div>
                </div>
                : <div></div>}
        </div>
    )
}

export default Footer;