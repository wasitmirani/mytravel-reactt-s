

const footer = () => {
    return (
        <>
            <section className="layout-pt-md layout-pb-md bg-blue-1">
                <div className="container">
                    <div className="row y-gap-30 justify-between items-center">
                        <div className="col-auto">
                            <div className="d-flex y-gap-20 flex-wrap items-center">
                                <div className="icon-newsletter text-60 sm:text-40 text-white"></div>

                                <div className="ml-30">
                                    <h4 className="text-26 text-white fw-600">Your Travel Journey Starts Here</h4>
                                    <div className="text-white">Sign up and we'll send the best deals to you</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-auto">
                            <div className="single-field -w-410 d-flex x-gap-10 y-gap-20">
                                <div>
                                    <input className="bg-white h-60" type="text" placeholder="Your Email" />
                                </div>

                                <div>
                                    <button className="button -md h-60 bg-yellow-1 text-dark-1">Subscribe</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <footer className="footer -type-1 text-white bg-blue-1">
                <div className="container">
                    <div className="pt-60 pb-60">
                        <div className="row y-gap-40 justify-between xl:justify-start">
                            <div className="col-xl-2 col-lg-4 col-sm-6">
                                <h5 className="text-16 fw-500 mb-30">Contact Us</h5>

                                <div className="mt-30">
                                    <div className="text-14 mt-30">Toll Free Customer Care</div>
                                    <a href="#" className="text-18 fw-500 mt-5">+(1) 123 456 7890</a>
                                </div>

                                <div className="mt-35">
                                    <div className="text-14 mt-30">Need live support?</div>
                                    <a href="#" className="text-18 fw-500 mt-5">hi@gotrip.com</a>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-4 col-sm-6">
                                <h5 className="text-16 fw-500 mb-30">Company</h5>
                                <div className="d-flex y-gap-10 flex-column">
                                    <a href="#">About Us</a>
                                    <a href="#">Careers</a>
                                    <a href="#">Blog</a>
                                    <a href="#">Press</a>
                                    <a href="#">Gift Cards</a>
                                    <a href="#">Magazine</a>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-4 col-sm-6">
                                <h5 className="text-16 fw-500 mb-30">Support</h5>
                                <div className="d-flex y-gap-10 flex-column">
                                    <a href="#">Contact</a>
                                    <a href="#">Legal Notice</a>
                                    <a href="#">Privacy Policy</a>
                                    <a href="#">Terms and Conditions</a>
                                    <a href="#">Sitemap</a>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-4 col-sm-6">
                                <h5 className="text-16 fw-500 mb-30">Other Services</h5>
                                <div className="d-flex y-gap-10 flex-column">
                                    <a href="#">Car hire</a>
                                    <a href="#">Activity Finder</a>
                                    <a href="#">Tour List</a>
                                    <a href="#">Flight finder</a>
                                    <a href="#">Cruise Ticket</a>
                                    <a href="#">Holiday Rental</a>
                                    <a href="#">Travel Agents</a>
                                </div>
                            </div>

                            <div className="col-xl-2 col-lg-4 col-sm-6">
                                <h5 className="text-16 fw-500 mb-30">Mobile</h5>

                                <div className="d-flex items-center px-20 py-10 rounded-4 border-white-15">
                                    <div className="icon-apple text-24"></div>
                                    <div className="ml-20">
                                        <div className="text-14 text-white">Download on the</div>
                                        <div className="text-15 lh-1 fw-500">Apple Store</div>
                                    </div>
                                </div>

                                <div className="d-flex items-center px-20 py-10 rounded-4 border-white-15 mt-20">
                                    <div className="icon-play-market text-24"></div>
                                    <div className="ml-20">
                                        <div className="text-14 text-white">Get in on</div>
                                        <div className="text-15 lh-1 fw-500">Google Play</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="py-20 border-top-white-15">
                        <div className="row justify-between items-center y-gap-10">
                            <div className="col-auto">
                                <div className="row x-gap-30 y-gap-10">
                                    <div className="col-auto">
                                        <div className="d-flex items-center">
                                            © 2022 GoTrip LLC All rights reserved.
                                        </div>
                                    </div>

                                    <div className="col-auto">
                                        <div className="d-flex x-gap-15">
                                            <a href="#">Privacy</a>
                                            <a href="#">Terms</a>
                                            <a href="#">Site Map</a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="col-auto">
                                <div className="row y-gap-10 items-center">
                                    <div className="col-auto">
                                        <div className="d-flex items-center">
                                            <button className="d-flex items-center text-14 fw-500 text-white mr-10">
                                                <i className="icon-globe text-16 mr-10"></i>
                                                <span className="underline">English (US)</span>
                                            </button>

                                            <button className="d-flex items-center text-14 fw-500 text-white">
                                                <i className="icon-usd text-16 mr-10"></i>
                                                <span className="underline">USD</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div className="col-auto">
                                        <div className="d-flex x-gap-20 items-center">
                                            <a href="#"><i className="icon-facebook text-14"></i></a>
                                            <a href="#"><i className="icon-twitter text-14"></i></a>
                                            <a href="#"><i className="icon-instagram text-14"></i></a>
                                            <a href="#"><i className="icon-linkedin text-14"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}


export default footer;