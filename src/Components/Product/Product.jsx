import React, { Fragment } from 'react';


import coca1 from "../../images/product/Rectangle_414.png";
import coca2 from "../../images/product/Rectangle_415.png";
import coca3 from "../../images/product/Rectangle_416.png";
import coca4 from "../../images/product/Rectangle_417.png";
import face1 from "../../images/face1.png";
import face2 from "../../images/face2.png";
import face3 from "../../images/face3.png";
import coca5 from "../../images/product/Rectangle_451.png";
import coca6 from "../../images/product/Rectangle_451_gq.png";
import coca7 from "../../images/product/Rectangle_451_gr.png";
import coca9 from "../../images/product/Rectangle_451_gu.png";
import coca8 from "../../images/product/Rectangle_451_gs.png";
import coca10 from "../../images/product/Rectangle_451_gt.png";
import rev1 from "../../images/product/Ellipse_166.png";
import shopping from "../../images/product/Rectangle_423.png";
import { BsArrowLeft } from "react-icons/bs";
import './Product.css';


function Product() {

    return (
        <Fragment>

            <div className="products marTop bg-white px-4 py-3">

                <BsArrowLeft className=" mainColor" size={50} />
                <p className="linksFont"><span className="text-muted">Home / Coca-Cola /</span> Ramadan Offers</p>
                {/* ----------------------product--------------------------- */}
                <div className="row mb-5">
                    <div className="col-xl-6 col-lg-12">
                        <div className="row">
                            <div className="col-md-12 mb-4">
                                <img src={coca1} alt=".." className="img-fluid" />
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <img src={coca2} alt=".." className="img-fluid" />
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <img src={coca3} alt=".." className="img-fluid" />
                            </div>
                            <div className="col-md-4 col-sm-6">
                                <img src={coca4} alt=".." className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-6 col-lg-12">
                        <h3>Lorem ipsum dolor</h3>
                        <div className="my-1 bigCardFont">
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star checked"></span>
                            <span className="fa fa-star"></span>
                            <span className="reviewsFont ml-3">4.8 from 30 reviews</span>
                        </div>
                        <p className="priceFont font-weight-bold d-inline"><sup>$</sup>80.95</p>
                        <span className="reviewsFont ml-3 ship">Without Shipping + packaging</span>
                        <p className="font-weight-bold mb-0">Lorem ipsum dolor sit</p>
                        <span className="fontsLore">Lorem ipsum dolor sit amet, consetetur
                        sadipscing elitr, sed diam nonumy eirmod
                        tempor invidunt ut labore et dolore magna
                        </span>
                        <ul className="list-unstyled ulFace mt-1">
                            <li className="d-inline"><img src={face1} alt=".." className="face1" /></li>
                            <li className="d-inline"><img src={face2} alt=".." className="face2" /></li>
                            <li className="d-inline"><img src={face3} alt=".." className="face3" /></li>
                            <li className="d-inline"><img src={face1} alt=".." className="face4" /></li>
                            <li className="d-inline"><i className="fas fa-plus-circle fa-2x face5"></i></li>
                            <span className="vendor mt-2">11 Other people buy it</span>
                        </ul>
                        <div className="mt-5">
                            <div><i className="far fa-check-circle mainColor"></i> <span className="chatFont">Chat with our Consultants</span></div>
                            <div><i className="far fa-check-circle mainColor"></i> <span className="chatFont">Chat with our Consultants</span></div>
                            <div><i className="far fa-check-circle mainColor"></i> <span className="chatFont">Chat with our Consultants</span></div>
                        </div>
                        <div>
                            <p className="mainColor mb-0 chatFont">Choose Your Size</p>
                            <div className="d-flex justify-content-around">
                                <span className="py-1 sizeBrb paddXX">XS</span>
                                <span className="py-1 sizeBrb paddX">S</span>
                                <span className="py-1 sizeBrb sizeBrbSelected paddX">M</span>
                                <span className="py-1 sizeBrb paddX">L</span>
                                <span className="py-1 sizeBrb paddXX">XL</span>
                                <span className="py-1 sizeBrb paddXXX">2XL</span>
                            </div>
                        </div>
                        <div>
                            <p className="mainColor mb-0 chatFont">Choose Your Color</p>
                            <div className="d-flex justify-content-around pb-2">
                                <span className="color1 rounded-circle"></span>
                                <span className="color2 rounded-circle"></span>
                                <span className="color3 rounded-circle"></span>
                                <span className="color4 rounded-circle"></span>
                                <span className="color5 rounded-circle"></span>
                                <span className="color6 rounded-circle"></span>
                                <span className="color7 rounded-circle"></span>
                            </div>
                        </div>
                        <i className="fas fa-heart mainColor fa-lg mt-2 iconBg"></i>
                        <i className="fas fa-chart-bar mainColor fa-lg ml-2 mt-2 iconBg"></i>
                        <button href="#" className="addCrt float-right btnHov">Add to cart</button>
                        <div className="clearfix"></div>
                    </div>
                </div>
                {/* ----------------------product--------------------------- */}

                {/* ----------------------Product Details-------------------------- */}
                
                <div>
                    <h5 className="prodBrb text-center mainColor w-25 m-0">Product Details</h5>
                    <hr className="mainBgColor mt-0" />
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <img src={coca3} alt=".." className="img-fluid" />
                    </div>
                    <div className="col-md-9 pl-0">
                        <div className="letter">
                            <span className="mainColor pordNam">Coca-Cola</span> <span className="pordDet">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
                            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
                            rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit
                            amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
                            takimata sanctus est Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                            <hr className="mainBgColor" />
                        </div>
                    </div>
                    <div className="row  pl-4">
                        <div className="col-md-12">
                            <span className="mainColor font-weight-bold">Brand Name : </span>
                            <span>Coca - cola</span>
                            <p className="my-2 mainColor">Product parameters :</p>
                        </div>
                        <div className="col-md-4">
                            <p className="my-2 detail">Product Name :</p>
                            <p className="my-2 detail">Model :</p>
                            <p className="my-2 detail">Manufacturer :</p>
                            <p className="my-2 detail">Working method :</p>
                            <p className="my-2 detail">After-sales service :</p>
                        </div>
                        <div className="col-md-5">
                            <p className="my-2 detail">Warranty period :</p>
                            <p className="my-2 detail">Package type :</p>
                            <p className="my-2 detail">Color classNameification :</p>
                            <p className="my-2 detail">Whether to support ergonomics :</p>
                            <p className="my-2 detail">Whether it is boxed genuine :</p>
                        </div>
                        <div className="col-md-3">
                            <p className="my-2 detail">Condition :</p>
                            <p className="my-2 detail">Brand :</p>
                            <p className="my-2 detail">Interface Type :</p>
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                            <hr className="mainBgColor" />
                        </div>
                    </div>
                    <div className="col-md-12">
                        <div>
                            <span className="mainColor pordNam">Coca-Cola</span> <span className="pordDeta ml-2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
                            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet
                            clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
                            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At
                            vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
                            ipsum dolor sit amet.
                            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore
                            magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
                            bergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span>
                        </div>
                    </div>
                </div>

                {/* ----------------------Product Details-------------------------- */}

                {/* ----------------------sale--------------------------- */}
                <div className="col-xl-12 p-0 secMar mt-4">
                    <div>
                        <img src={coca5} alt=".." className="img-fluid" />
                    </div>
                </div>
                <div className="col-xl-12 p-0 secMar mt-4">
                    <div>
                        <img src={coca6} alt=".." className="img-fluid" />
                    </div>
                </div>
                <div className="col-xl-12 p-0 secMar mt-4">
                    <div>
                        <img src={coca7} alt=".." className="img-fluid" />
                    </div>
                </div>
                <div className="col-xl-12 p-0 secMar mt-4">
                    <div>
                        <img src={coca8} alt=".." className="img-fluid" />
                    </div>
                </div>
                <div className="col-xl-12 p-0 secMar mt-4">
                    <div>
                        <img src={coca9} alt=".." className="img-fluid" />
                    </div>
                </div>
                <div className="col-xl-12  p-0 secMar mt-4">
                    <div>
                        <img src={coca10} alt=".." className="img-fluid" />
                    </div>
                </div>
                <div className="text-center mb-4">
                    <div><span className="FrtSize">See More</span>
                        <div><i className="fas fa-chevron-down mainColor"></i> </div>
                    </div>
                </div>
                {/* ----------------------sale--------------------------- */}

                {/* ----------------------Reviews--------------------------- */}
                <div className="text-center mb-4">
                    <h4 className="revwLine">Reviews</h4>
                </div>
                <div className="row mb-4">
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 px-2 mb-2">
                        <div className="revColor  px-2 py-2">
                            <div className="row">
                                <div className="col-3 pr-0">
                                    <img src={rev1} alt=".." className="img-fluid" />
                                </div>
                                <div className="col-4 pl-0">
                                    <div className="spac1">
                                        <p className="revNameFont">James Wilson</p>
                                        <p className="revTimeFont">13 Jan 4:30 PM</p>
                                    </div>
                                </div>
                                <div className="col-5 pl-0 pr-1">
                                    <div>
                                        <span className="fa fa-star checked fa-sm"></span>
                                        <span className="fa fa-star checked fa-sm"></span>
                                        <span className="fa fa-star checked fa-sm"></span>
                                        <span className="fa fa-star checked fa-sm"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>
                            <p className="revwFont  pb-0 mt-2">Lorem ipsum dolor sit amet, consetetur
                                   sadipscing elitr, sed diam nonumy eirmod</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 px-2 mb-2">
                        <div className="revColor px-2 py-2">
                            <div className="row">
                                <div className="col-3 pr-0">
                                    <img src={rev1} alt=".." className="img-fluid" />
                                </div>
                                <div className="col-4  pl-0">
                                    <div className="spac1">
                                        <p className="revNameFont">James Wilson</p>
                                        <p className="revTimeFont">13 Jan 4:30 PM</p>
                                    </div>
                                </div>
                                <div className="col-5 pl-0 pr-1">
                                    <div>
                                        <span className="fa fa-star checked fa-sm"></span>
                                        <span className="fa fa-star checked fa-sm"></span>
                                        <span className="fa fa-star checked fa-sm"></span>
                                        <span className="fa fa-star checked fa-sm"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>
                            <p className="revwFont  pb-0 mt-2">Lorem ipsum dolor sit amet, consetetur
                                   sadipscing elitr, sed diam nonumy eirmod</p>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 px-2 mb-2">
                        <div className="revColor  px-2 py-2">
                            <div className="row">
                                <div className="col-3 pr-0">
                                    <img src={rev1} alt=".." className="img-fluid" />
                                </div>
                                <div className="col-4  pl-0">
                                    <div className="spac1">
                                        <p className="revNameFont">James Wilson</p>
                                        <p className="revTimeFont">13 Jan 4:30 PM</p>
                                    </div>
                                </div>
                                <div className="col-5 pl-0 pr-1">
                                    <div>
                                        <span className="fa fa-star checked fa-sm"></span>
                                        <span className="fa fa-star checked fa-sm"></span>
                                        <span className="fa fa-star checked fa-sm"></span>
                                        <span className="fa fa-star checked fa-sm"></span>
                                        <span className="fa fa-star"></span>
                                    </div>
                                </div>
                            </div>
                            <p className="revwFont  pb-0 mt-2">Lorem ipsum dolor sit amet, consetetur
                                   sadipscing elitr, sed diam nonumy eirmod</p>
                        </div>
                    </div>
                </div>

                {/* ----------------------Reviews--------------------------- */}

                {/* ----------------------Complete your shopping--------------------------- */}
                <div className="text-center mb-4">
                    <div>
                        <h4 className="shoppLine">Complete your shopping</h4>
                    </div>
                </div>
                <div className="row mb-4">
                    <div className="col-md-10 m-auto">
                        <div className="row">
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 mb-2">
                                <div className="cardBrb shadow-lg">
                                    <img src={shopping} alt=".." className="img-fluid" />
                                    <div className="py-2 px-2">
                                        <h6 className="mainColor">Lorem ipsum dolor</h6>
                                        <p className="revwFont">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="text-center">
                                            <button href="#" className="shopCrt btnHov">Try it Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6  mb-2">
                                <div className="cardBrb shadow-lg">
                                    <img src={shopping} alt=".." className="img-fluid" />
                                    <div className="py-2 px-2">
                                        <h6 className="mainColor">Lorem ipsum dolor</h6>
                                        <p className="revwFont">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="text-center">
                                            <button href="#" className="shopCrt btnHov">Try it Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6 mb-2">
                                <div className="cardBrb shadow-lg">
                                    <img src={shopping} alt=".." className="img-fluid" />
                                    <div className="py-2 px-2">
                                        <h6 className="mainColor">Lorem ipsum dolor</h6>
                                        <p className="revwFont">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                        <div className="text-center">
                                            <button href="#" className="shopCrt btnHov">Try it Now</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* ----------------------Complete your shopping--------------------------- */}


            </div>
        </Fragment >
    )
}
export default Product;