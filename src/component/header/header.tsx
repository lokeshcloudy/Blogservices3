import React, { Component } from 'react';
// import "../../sass/pages/shared/header.scss"
// import { MainService } from '../../services/main-service'
type MyProps = {};
type MyState = { isReload: Boolean };
var imageHost = process.env.REACT_APP_IMAGEHOST!;
var mainServiceUrl = process.env.REACT_APP_URL!;
export class header extends Component<MyProps, MyState> {
    // mainService = new MainService("header");
    url: String = window.location.href;
    urlArr: Array<String> = this.url.split("/")
    noVisArr: Array<String> = ["signup", "login", "two-factor-authentication"]
    isLogin: boolean = false;
    user: any;
    userName: any;
    visibility: boolean = true;
    toggleMenu: any = false;
    constructor(props: any) {
        super(props);
        this.gettingUserData();
    }

    isLoginfn(): boolean {
        let access_token = localStorage.getItem("access_token");
        if (access_token === undefined || access_token === "" || access_token === null) {
            return false;
        }
        else {
            return true;
        }
    }

    gettingUserData() {
        this.isLogin = this.isLoginfn();
        if (this.noVisArr.some(element => this.url.includes(`${element}`))) {
            this.visibility = false;
        }
        else {
            this.visibility = true;
        }
        if (this.isLogin) {
            this.isLogin = true;
            this.user = localStorage.getItem("user");
            this.user = JSON.parse(this.user);
            if (this.user == null) {
                localStorage.removeItem("user");
                this.noUserFound();
            }
            else {
                this.userName = this.user.username;
            }
        }
        else {
            this.isLogin = false;
        }
    }
    async noUserFound() {
        try {
            await this.mainService.getUserDetail();
            this.user = localStorage.getItem("user");
            this.user = JSON.parse(this.user);
            this.userName = this.user.username;
            this.setState({ isReload: true })
        } catch (error) {
            console.log(error);
            this.logOut();
        }
    }
    redirectHome() {
        if (this.isLogin) {
            window.location.href = "/user-portfolio"
        }
        else {
            window.location.href = "/"
        }
    }
    logOut() {
        try {
            this.mainService.logoutUser();
            this.isLogin = false;
            localStorage.clear();
            window.location.href = "/";
        } catch (e) {
            console.log(e);
        }
    }
    render() {
        return (
            <div className='header-navbar'>
                
                <div className="desktop-view">
                    {this.visibility ?
                        <div className="sticky">
                            <nav className="navbar navbar-expand-lg header-border text-white p-0 bg-header fixed-top">
                                <div className="container navbar-container text-white">
                                    <div className="row ">
                                        <div className="col-6 col-lg-3 p-0">
                                          
                                            <a className="navbar-brand" href={mainServiceUrl}>
                                                <img className="img-fluid header-logo" src={imageHost + '/reverse-logo.svg'} alt="CRPTM" />
                                            </a>
                                        </div>
                                        <div className="col-6 hamburger-menu-container p-0">
                                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                                                <ul className="navbar-nav m-auto">
                                                    {!this.isLogin ?
                                                        <li className={String(this.urlArr.slice(-1)) === ("") ? "nav-item navbar-item active" : "nav-item navbar-item"} onClick={() => { this.redirectHome() }}>
                                                            <a href={mainServiceUrl} className="nav-link navbar-link header-text">Home</a>
                                                        </li>
                                                        : <></>}
                                                    <div className={["portfolio", "products", "user-portfolio", "cryptotax", "investment-strategies", "pay-by-crypto"].includes(String(this.urlArr.slice(-1))) ? "nav-item navbar-item active dropdown" : "nav-item navbar-item dropdown"}>
                                                        <button className="nav-link navbar-link dropdown-toggle btn btn-link header-text" id="navbarDropdownMenuLink"
                                                            aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
                                                            Products
                                                        </button>
                                                        <ul className={"dropdown-menu hide"} aria-labelledby="navbarDropdownMenuLink">
                                                            <li><a  className={["portfolio", "user-portfolio"].includes(String(this.urlArr.slice(-1))) ? "dropdown-item dropdown-text active" : "dropdown-item dropdown-text"} href={this.isLogin ? mainServiceUrl+"/user-portfolio" : mainServiceUrl+ "/portfolio"}>Portfolio</a></li>
                                                            <li><a className={String(this.urlArr.slice(-1)) === "cryptotax" ? "dropdown-item dropdown-text active" : "dropdown-item dropdown-text"} href={mainServiceUrl+"/cryptotax"}>Crypto Tax</a></li>
                                                            <li><a className={String(this.urlArr.slice(-1)) === "investment-strategies" ? "dropdown-item dropdown-text active" : "dropdown-item dropdown-text"} href={mainServiceUrl+"/investment-strategies"} >Investment Strategies</a></li>
                                                            <li><a className={String(this.urlArr.slice(-1)) === "pay-by-crypto" ? "dropdown-item dropdown-text active" : "dropdown-item dropdown-text"} href={mainServiceUrl+"/pay-by-crypto"} >Pay By Crypto</a></li>
                                                        </ul>
                                                    </div>
                                                    {!this.isLogin ?
                                                        <li className={String(this.urlArr.slice(-1)) === ("integrations") ? "nav-item navbar-item active" : "nav-item navbar-item"} onClick={() => { window.location.href = "/integrations" }}>
                                                            <a href={mainServiceUrl+"/integrations"} className="nav-link navbar-link header-text ">Integrations</a>
                                                        </li>
                                                        :
                                                        <div className={["add-account", "my-accounts"].includes(String(this.urlArr.slice(-1))) ? "nav-item navbar-item active dropdown" : "nav-item navbar-item dropdown"}>
                                                            <button className="nav-link navbar-link dropdown-toggle btn btn-link header-text  " id="navbarAccountDropdownMenuLink"
                                                                aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
                                                                Accounts
                                                            </button>
                                                            <ul className={"dropdown-menu hide"} aria-labelledby="navbarAccountDropdownMenuLink">
                                                                <li><a className={String(this.urlArr.slice(-1)) === "add-account" ? "dropdown-item dropdown-text  active" : "dropdown-item dropdown-text"} href={mainServiceUrl+"/add-account"} >Add Account</a></li>
                                                                <li><a className={String(this.urlArr.slice(-1)) === "my-accounts" ? "dropdown-item dropdown-text active" : "dropdown-item dropdown-text"} href={mainServiceUrl+"/my-accounts"} >My Accounts</a></li>
                                                            </ul>
                                                        </div>
                                                    }
                                                    {this.isLogin ?
                                                        <li className={String(this.urlArr.slice(-1)) === ("transactions") ? "nav-item navbar-item active" : "nav-item navbar-item"} onClick={() => { window.location.href = "/transactions" }}>
                                                            <a className="nav-link navbar-link header-text">Transactions</a>
                                                        </li> : <></>
                                                    }
                                                
                                                </ul>
                                            </div>
                                        </div>
                                        <div className='col-md-3 text-end'>
                                            {this.isLogin ?
                                                <div className="collapse navbar-collapse justify-content-end">
                                                    <img src={imageHost + "/user-icon.svg"} alt="" />
                                                    <ul className="navbar-nav">
                                                        <li className="nav-item dropdown">
                                                            <button className="nav-link user-btn dropdown-toggle btn btn-link header-text" id="navbarDropdownMenuLink"
                                                                aria-haspopup="true" data-bs-toggle="dropdown" aria-expanded="false">
                                                                {this.userName}
                                                            </button>
                                                            <ul className="dropdown-menu m-0" aria-labelledby="navbarDropdownMenuLink">
                                                                <li><a className="dropdown-item dropdown-text user-dropdown" href="/settings">SETTINGS</a></li>
                                                                <li><button onClick={() => { this.logOut() }} className="dropdown-item user-dropdown dropdown-text">LOGOUT</button></li>
                                                            </ul>
                                                        </li>
                                                    </ul>
                                                </div>
                                                :
                                                <div className="dflex  ">
                                                   <a href={mainServiceUrl+"/signup"}> <button  className="text-signup" >Sign Up</button></a>
                                                    <a className="header-login  ps-3" href={mainServiceUrl+"/login"}>LogIn</a>
                                                </div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </nav>
                        </div >
                        : <div></div>}
                </div>
                <div className="mobile-view">
                    {this.visibility ?
                        <div className='sticky'>
                            <nav className="navbar fixed-top navbar-expand-lg navbar-white bg-header box-shadow ">
                                <div className="container mobile-navbar-padding">
                                    <a className="navbar-brand" href={mainServiceUrl}>
                                        <img className="header-logo" src={imageHost + '/reverse-logo.svg'} alt="CRPTM" />
                                    </a>
                                    <button className="navbar-toggler collapsed d-flex d-lg-none flex-column" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                        <span className="toggler-icon top-bar"></span>
                                        <span className="toggler-icon middle-bar"></span>
                                        <span className="toggler-icon bottom-bar"></span>
                                    </button>
                                    <div className="collapse navbar-collapse" id="navbarNav">
                                        <ul className="navbar-nav text-center w-nav-overlay">
                                            {this.isLogin ?
                                                <><hr /></>
                                                :
                                                <>
                                                    <hr />
                                                    <li className={String(this.urlArr.slice(-1)) === ("") ? "nav-item navbar-item active" : "nav-item navbar-item"} onClick={() => { this.redirectHome() }}>
                                                        <a href={mainServiceUrl} className="nav-link header-text" aria-current="page">Home</a>
                                                    </li>
                                                </>}
                                            <li className={["portfolio", "products", "user-portfolio", "cryptotax", "investment-strategies", "pay-by-crypto"].includes(String(this.urlArr.slice(-1))) ? "dropdown-toggle navbar-item nav-item active" : "dropdown-toggle navbar-item nav-item"} id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                <a className='nav-link header-text d-inline-block' href="#">Products</a>
                                            </li>
                                            <ul className="dropdown-menu text-center" aria-labelledby="dropdownMenuLink">
                                                <li className="new-bg"><a >  <span className="no-show">space</span>   </a></li>
                                                <li><a className={["portfolio", "user-portfolio"].includes(String(this.urlArr.slice(-1))) ? "dropdown-item dropdown-text active" : "dropdown-item dropdown-text portfolio-bg"} href={this.isLogin ? mainServiceUrl+"/user-portfolio" : mainServiceUrl+"/portfolio"}>Portfolio</a></li>
                                                <li><a className={String(this.urlArr.slice(-1)) === "cryptotax" ? "dropdown-item dropdown-text active" : "dropdown-item dropdown-text"} href={mainServiceUrl + "/cryptotax"}>Crypto Tax</a></li>
                                                <li><a className={String(this.urlArr.slice(-1)) === "investment-strategies" ? "dropdown-item dropdown-text active" : "dropdown-item dropdown-text"} href={mainServiceUrl+"/investment-strategies"}>Investment Strategies</a></li>
                                                <li><a className={String(this.urlArr.slice(-1)) === "pay-by-crypto" ? "dropdown-item dropdown-text active" : "dropdown-item dropdown-text"} href={mainServiceUrl+"/pay-by-crypto"}>Pay By Crypto</a></li>
                                            </ul>
                                            {!this.isLogin ?
                                                <li className={String(this.urlArr.slice(-1)) === ("integrations") ? "nav-item navbar-item active" : "nav-item navbar-item"} onClick={() => { window.location.href = "/integrations" }}>
                                                    <a className="nav-link navbar-link header-text">Integrations</a>
                                                </li>
                                                : <>

                                                    <li className={["all-exchange", "add-exchange", "my-exchange"].includes(String(this.urlArr.slice(-1))) ? "dropdown-toggle navbar-item nav-item active" : "dropdown-toggle navbar-item nav-item"} id="accountDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                                        <a className='nav-link header-text d-inline-block' href="#">Accounts</a>
                                                    </li>
                                                    <ul className="dropdown-menu text-center" aria-labelledby="accountDropdownMenuLink">
                                                        <li className="new-bg"><a>  <span className="no-show">space</span>   </a></li>
                                                        <li><a className={String(this.urlArr.slice(-1)) === "add-account" ? "dropdown-item dropdown-text active" : "dropdown-item dropdown-text"} href={mainServiceUrl+"/add-account"}>Add Account</a></li>
                                                        <li><a className={String(this.urlArr.slice(-1)) === "my-accounts" ? "dropdown-item dropdown-text active" : "dropdown-item dropdown-text"} href={mainServiceUrl+"/my-accounts"}>My Accounts</a></li>
                                                    </ul>
    
                                                </>
                                            }
                                            {this.isLogin ?
                                                <>
                                                    <li className={String(this.urlArr.slice(-1)) === ("integrations") ? "nav-item navbar-item active" : "nav-item navbar-item"} onClick={() => { window.location.href = "/transactions" }}>
                                                        <a className="nav-link navbar-link header-text">Transactions</a>
                                                    </li>
                                                </> : <></>
                                            }
                                            {this.isLogin ?
                                                <>
                                                    <li className={String(this.urlArr.slice(-1)) === "user-details" ? "nav-item navbar-item active" : "nav-item navbar-item"} onClick={() => { window.location.href = ("/user-details") }}>
                                                        <a className="nav-link header-text" href="/settings">Settings</a>
                                                    </li>
                                                    <li className="nav-item navbar-item" onClick={() => { this.logOut() }}>
                                                        <a className="nav-link header-text" href="#">Log Out</a>
                                                    </li>
                                                </>
                                                :
                                                <>
                                                    <a href={mainServiceUrl+"/signup"}><button className='rounded-pill mt-4 btn-start' >Get Started for Free</button></a>
                                                   <a href={mainServiceUrl+"/login"}> <button className='rounded-pill mt-4 btn-login'>LogIn</button></a>
                                                </>}
                                        </ul>
                                    </div>
                                </div>
                            </nav>
                        </div>
                        : <div></div>}
                </div>
            </div>
        )
    }
}
export default header;