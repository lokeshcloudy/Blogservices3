import Header from "../component/header/header.tsx"

export const App = () => {
  return (
    <div className='blog-static-page'>
            <div className='nav2-bar'>
            <Header/>
                <div className="container py-2 ">
                    <nav aria-label="breadcrumb">
                        <ol className="breadcrumb mx-1">
                            <li className="breadcrumb-item">Home</li>
                            <li className="breadcrumb-item active" aria-current="page">Blog</li>
                        </ol>
                    </nav>
                </div>
            </div>
            <div className='container py-4'>
                <div className='row'>
                    <div className='col-md-8 left-column'>
                        <h1>Crypto Blog</h1>
                        <a href='/blog/what-is-cryptocurrency-its-history-benefits-future-and-more'><h2>What is Cryptocurrency? Its History, Benefits, Future, and More</h2></a>
                        <a href='/blog/what-is-cryptocurrency-its-history-benefits-future-and-more'><img className='img-fluid ' src={"/what-is-crypto.png"} alt="" /></a>
                        <p><span><img className='img-fluid me-2' src={"/clock.svg"} alt="" />08 september 2022 <img className='img-fluid mx-2 ms-4' src={"/category.svg"} alt="" />NFTs</span></p>
                        <p>The Crypto World- Cryptocurrencies have grown increasingly popular in recent years, with more than 1,600 cryptocurrencies currently available...</p>
                        <div className='row medium-img'>
                            <div className='col-md-6 mt-3 '>
                                <a href="/blog/step-by-step-guide-on-nft-taxes"><img className='img-fluid ' src={"/step-by-step-m-nft.png"} alt="" /></a>
                                <p><span><img className='img-fluid me-2' src={"/clock.svg"} alt="" />08 september 2022 <img className='img-fluid mx-2 ms-4' src={"/category.svg"} alt="" />NFTs</span></p>
                                <a href='/blog/step-by-step-guide-on-nft-taxes'><h5>Step-by-Step Guide on NFT Taxes</h5></a>
                            </div>
                            <div className='col-md-6 mt-3'>
                                <a href='/blog/what-are-the-different-types-of-cryptocurrency'><img className='img-fluid' src={"/types-of-cryptocurrency-m.png"} alt="" /></a>
                                <p><span><img className='img-fluid me-2' src={"/clock.svg"} alt="" />08 september 2022 <img className='img-fluid mx-2 ms-4' src={"/category.svg"} alt="" />NFTs</span></p>
                                <a href='/blog/what-are-the-different-types-of-cryptocurrency'><h5>What Are The Different Types of Cryptocurrency?</h5></a>
                            </div>
                        </div>
                        
                        <hr className='my-4' />
                        <div className='row'>
                            <div className='col-6 text-start '>
                                <button className='previous-btn'>Previous</button>
                            </div>
                            <div className='col-6 text-end'>
                                <button className='Next-btn'>Next</button>
                            </div>
                        </div>
                        <hr className='my-4' />
                        <div>
                            <h2>About Blog</h2>
                            <p>If you are a crypto miner, you can use your personal computer to earn some extra dollars. It can be a pretty good side gig to generate passive If you are a crypto miner, you can use your personal computer to earn some extra dollars.
                            </p>
                            <p>
                                It can be a pretty good side gig to generate passiveIf you are a crypto miner, you can use your personal computer to earn some extra dollars. It can be a pretty good side gig to generate passiveIf you are a crypto miner, you can use your personal computer to earn some extra dollars. It can be a pretty good side gig to generate passive</p>
                        </div>
                    </div>
                    <div className='col-md-4 sidebar'>
                        {/* <div className="input-group rounded serch-box">
                            <input type="search" className="form-control my-3 " placeholder="Search" aria-label="Search" aria-describedby="search-addon" />
                            <img src={imageHost + "/search-outline.svg"} alt="" />
                        </div> */}
                        <h5 className="mb-3">Most Viewed Articles</h5>
                        <div className='row article-img'>
                            <div className='col-5 '><a href='./what-is-cryptocurrency-its-history-benefits-future-and-more'><img src={"/what-is-cryptocurrency-s.png"} alt="" /></a></div>
                            <div className='col-7'><a href='./what-is-cryptocurrency-its-history-benefits-future-and-more'>What is Cryptocurrency? Its History, Benefits, Future, and More</a>
                            </div>
                            <div className='my-3'><hr/></div>
                            <div className='col-5'><a href='./step-by-step-guide-on-nft-taxes'><img src={"/step-by-step-s-nft.png"} alt="" /></a></div>
                            <div className='col-7 '><a href='./step-by-step-guide-on-nft-taxes'>Step-by-Step Guide on NFT Taxes</a></div>
                            <div className='my-3'><hr /></div>
                            <div className='col-5'><a href='./what-are-the-different-types-of-cryptocurrency'><img src={"/types-of-cryptocurrency-s.png"} alt="" /></a></div>
                            <div className='col-7 '><a href='./what-are-the-different-types-of-cryptocurrency'>What Are The Different Types of Cryptocurrency?</a></div>
                            <div className='my-3'><hr /></div>
                            
                        </div>
                        <div className='row   categories'>
                            <h5>Categories</h5>
                            <div className='col-10 '><p>Exchange payment</p></div>
                            <div className='col-2 text-end '><b>10</b></div>
                            <div><hr /></div>
                            <div className='col-10'><p>Security</p></div>
                            <div className='col-2 text-end'><b>03</b></div>
                            <div ><hr /></div>
                            <div className='col-10'><p>Stablecoins</p></div>
                            <div className='col-2 text-end'><b>13</b></div>
                            <div ><hr /></div>
                            <div className='col-10 '><p>DeFi Tokens</p></div>
                            <div className='col-2 text-end '><b>05</b></div>
                            <div ><hr /></div>
                            <div className='col-10'><p><a href='/blog/Step-by-Step-Guide-on-NFT-Taxes'>NFTs</a></p></div>
                            <div className='col-2 text-end'><b>01</b></div>
                            <div ><hr /></div>
                            <div className='col-10'><p>Asset-backed Tokens</p></div>
                            <div className='col-2 text-end'><b>11</b></div>
                        </div>

                    </div>
                 
                </div>
              
                
            </div>
            <div className="container">
                <hr />
            </div>
              </div>
  )
}
