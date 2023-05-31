
import React, { useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  
  
  useEffect(()=>{
    
  });

  return (
    <div>
     <header data-add-bg="-header-5-sticky" className='header -type-5 js-header '  data-x="header" data-x-toggle="is-menu-opened">
      <div data-anim="fade" className="header__container container is-in-view">
        <div className="row justify-between items-center">

          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="mr-20">
                <button className="d-flex items-center icon-menu text-dark-1 text-20" data-x-click="desktopMenu"></button>
              </div>

              <a href="index.html" className="header-logo mr-20" data-x="header-logo" data-x-toggle="is-logo-dark">
                <img src="img/general/logo-dark.svg" alt="logo icon" />
                <img src="img/general/logo-dark.svg" alt="logo icon" />
              </a>


              <div className="header-menu " data-x="mobile-menu" data-x-toggle="is-menu-active">
                <div className="mobile-overlay"></div>

                <div className="header-menu__content">
                  <div className="mobile-bg js-mobile-bg"></div>

                  <div className="menu js-navList">
                    <ul className="menu__nav text-dark-1 -is-active">

                    <li>
                          <Link to="/">Home</Link>
                        </li>
                        <li>
                          <Link to="/listings">Listings</Link>
                        </li>
                        <li>
                          <Link to="/about">About Us</Link>
                        </li>
                        {/* <li>
                          <Link to="/blogs">Blogs</Link>
                        </li> */}

                  

                    





                      <li className="menu-item-has-children">
                        <a data-barba="">
                          <span className="mr-10">Dashboard</span>
                          <i className="icon icon-chevron-sm-down"></i>
                        </a>

                        <ul className="subnav">
                          <li className="subnav__backBtn js-nav-list-back">
                            <a href="#"><i className="icon icon-chevron-sm-down"></i> Dashboard</a>
                          </li>

                          <li><a href="db-dashboard.html">Dashboard</a></li>

                          <li><a href="db-booking.html">Booking</a></li>

                          <li><a href="db-settings.html">Settings</a></li>

                          <li><a href="db-wishlist.html">Wishlist</a></li>

                          <li><a href="db-vendor-dashboard.html">Vendor dashboard</a></li>

                          <li><a href="db-vendor-add-hotel.html">Vendor add hotel</a></li>

                          <li><a href="db-vendor-booking.html">Vendor booking</a></li>

                          <li><a href="db-vendor-hotels.html">Vendor hotels</a></li>

                          <li><a href="db-vendor-recovery.html">Vendor recovery</a></li>

                        </ul>

                      </li>


                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>

                  <div className="mobile-footer px-20 py-20 border-top-light js-mobile-footer">
                  </div>
                </div>
              </div>


              <div className="desktopMenu js-desktopMenu" data-x="desktopMenu" data-x-toggle="is-menu-active">
                <div className="desktopMenu-overlay"></div>

                <div className="desktopMenu__content">
                  <div className="mobile-bg js-mobile-bg"></div>

                  <div className="px-30 py-20 sm:px-20 sm:py-10 border-bottom-light">
                    <div className="row justify-between items-center">
                      <div className="col-auto">
                        <div className="text-20 fw-500">Main Menu</div>
                      </div>

                      <div className="col-auto">
                        <button className="icon-close text-15" data-x-click="desktopMenu"></button>
                      </div>
                    </div>
                  </div>

                  <div className="h-full px-30 py-30 sm:px-0 sm:py-10">
                    <div className="menu js-navList">
                      <ul className="menu__nav  -is-active">

                        <li className="menu-item-has-children">
                          <a data-barba="">
                            <span className="mr-10">Home</span>
                            <i className="icon icon-chevron-sm-down"></i>
                          </a>

                          <ul className="subnav">
                            <li className="subnav__backBtn js-nav-list-back">
                              <a href="#"><i className="icon icon-chevron-sm-down"></i> Home</a>
                            </li>

                            <li><a href="index.html">Home 1</a></li>

                            <li><a href="home-2.html">Home 2</a></li>

                            <li><a href="home-3.html">Home 3</a></li>

                            <li><a href="home-4.html">Home 4</a></li>

                            <li><a href="home-5.html">Home 5</a></li>

                            <li><a href="home-6.html">Home 6</a></li>

                            <li><a href="home-7.html">Home 7</a></li>

                            <li><a href="home-8.html">Home 8</a></li>

                            <li><a href="home-9.html">Home 9</a></li>

                            <li><a href="home-10.html">Home 10</a></li>

                          </ul>

                        </li>


                        <li className="menu-item-has-children -has-mega-menu">
                          <a data-barba="">
                            <span className="mr-10">Categories</span>
                            <i className="icon icon-chevron-sm-down"></i>
                          </a>

                          <ul className="subnav mega-mobile">
                            <li className="subnav__backBtn js-nav-list-back">
                              <a href="#"><i className="icon icon-chevron-sm-down"></i> Category</a>
                            </li>

                            <li className="menu-item-has-children">
                              <a data-barba="">
                                <span className="mr-10">Hotel</span>
                                <i className="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul className="subnav">
                                <li className="subnav__backBtn js-nav-list-back">
                                  <a href="#"><i className="icon icon-chevron-sm-down"></i> Hotel</a>
                                </li>


                                <li><a href="hotel-list-1.html">Hotel List v1</a></li>

                                <li><a href="hotel-list-2.html">Hotel List v2</a></li>

                                <li><a href="hotel-single-1.html">Hotel Single v1</a></li>

                                <li><a href="hotel-single-2.html">Hotel Single v2</a></li>

                                <li><a href="booking-pages.html">Booking Page</a></li>

                              </ul>
                            </li>

                            <li className="menu-item-has-children">
                              <a data-barba="">
                                <span className="mr-10">Tour</span>
                                <i className="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul className="subnav">
                                <li className="subnav__backBtn js-nav-list-back">
                                  <a href="#"><i className="icon icon-chevron-sm-down"></i> Tour</a>
                                </li>

                                <li><a href="tour-list-1.html">Tour List v1</a></li>

                                <li><a href="tour-grid-1.html">Tour List v2</a></li>

                                <li><a href="tour-map.html">Tour Map</a></li>

                                <li><a href="tour-single.html">Tour Single</a></li>

                              </ul>
                            </li>

                            <li className="menu-item-has-children">
                              <a data-barba="">
                                <span className="mr-10">Activity</span>
                                <i className="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul className="subnav">
                                <li className="subnav__backBtn js-nav-list-back">
                                  <a href="#"><i className="icon icon-chevron-sm-down"></i> Activity</a>
                                </li>

                                <li><a href="activity-list-1.html">Activity List v1</a></li>

                                <li><a href="activity-grid-1.html">Activity List v2</a></li>

                                <li><a href="activity-map.html">Activity Map</a></li>

                                <li><a href="activity-single.html">Activity Single</a></li>

                              </ul>
                            </li>

                            <li className="menu-item-has-children">
                              <a data-barba="">
                                <span className="mr-10">Rental</span>
                                <i className="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul className="subnav">
                                <li className="subnav__backBtn js-nav-list-back">
                                  <a href="#"><i className="icon icon-chevron-sm-down"></i> Rental</a>
                                </li>

                                <li><a href="rental-list-1.html">Rental List v1</a></li>

                                <li><a href="rental-grid-1.html">Rental List v2</a></li>

                                <li><a href="rental-map.html">Rental Map</a></li>

                                <li><a href="rental-single.html">Rental Single</a></li>

                              </ul>
                            </li>

                            <li className="menu-item-has-children">
                              <a data-barba="">
                                <span className="mr-10">Car</span>
                                <i className="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul className="subnav">
                                <li className="subnav__backBtn js-nav-list-back">
                                  <a href="#"><i className="icon icon-chevron-sm-down"></i> Car</a>
                                </li>

                                <li><a href="car-list-1.html">Car List v1</a></li>

                                <li><a href="car-grid-1.html">Car List v2</a></li>

                                <li><a href="car-map.html">Car Map</a></li>

                                <li><a href="car-single.html">Car Single</a></li>

                              </ul>
                            </li>

                            <li className="menu-item-has-children">
                              <a data-barba="">
                                <span className="mr-10">Cruise</span>
                                <i className="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul className="subnav">
                                <li className="subnav__backBtn js-nav-list-back">
                                  <a href="#"><i className="icon icon-chevron-sm-down"></i> Cruise</a>
                                </li>

                                <li><a href="cruise-list-1.html">Cruise List v1</a></li>

                                <li><a href="cruise-grid-1.html">Cruise List v2</a></li>

                                <li><a href="cruise-map.html">Cruise Map</a></li>

                                <li><a href="cruise-single.html">Cruise Single</a></li>

                              </ul>
                            </li>

                            <li className="menu-item-has-children">
                              <a data-barba="">
                                <span className="mr-10">Flights</span>
                                <i className="icon icon-chevron-sm-down"></i>
                              </a>

                              <ul className="subnav">
                                <li className="subnav__backBtn js-nav-list-back">
                                  <a href="#"><i className="icon icon-chevron-sm-down"></i> Flights</a>
                                </li>

                                <li><a href="flights-list.html">Flights List v1</a></li>

                              </ul>
                            </li>
                          </ul>
                        </li>

                        <li>
                          <a href="destinations.html">
                            Destinations
                          </a>
                        </li>


                        <li className="menu-item-has-children">
                          <a data-barba="">
                            <span className="mr-10">Blog</span>
                            <i className="icon icon-chevron-sm-down"></i>
                          </a>

                          <ul className="subnav">
                            <li className="subnav__backBtn js-nav-list-back">
                              <a href="#"><i className="icon icon-chevron-sm-down"></i> Blog</a>
                            </li>

                            <li><a href="blog-list-1.html">Blog list v1</a></li>

                            <li><a href="blog-list-2.html">Blog list v2</a></li>

                            <li><a href="blog-single.html">Blog single</a></li>

                          </ul>

                        </li>


                        <li className="menu-item-has-children">
                          <a data-barba="">
                            <span className="mr-10">Pages</span>
                            <i className="icon icon-chevron-sm-down"></i>
                          </a>

                          <ul className="subnav">
                            <li className="subnav__backBtn js-nav-list-back">
                              <a href="#"><i className="icon icon-chevron-sm-down"></i> Pages</a>
                            </li>

                            <li><a href="404.html">404</a></li>

                            <li><a href="about.html">About</a></li>

                            <li><a href="become-expert.html">Become expert</a></li>

                            <li><a href="help-center.html">Help center</a></li>

                            <li><a href="login.html">Login</a></li>

                            <li><a href="signup.html">Register</a></li>

                            <li><a href="terms.html">Terms</a></li>

                            <li><a href="invoice.html">Invoice</a></li>

                            <li><a href="ui-elements.html">UI elements</a></li>

                          </ul>

                        </li>


                        <li className="menu-item-has-children">
                          <a data-barba="">
                            <span className="mr-10">Dashboard</span>
                            <i className="icon icon-chevron-sm-down"></i>
                          </a>

                          <ul className="subnav">
                            <li className="subnav__backBtn js-nav-list-back">
                              <a href="#"><i className="icon icon-chevron-sm-down"></i> Dashboard</a>
                            </li>

                            <li><a href="db-dashboard.html">Dashboard</a></li>

                            <li><a href="db-booking.html">Booking</a></li>

                            <li><a href="db-settings.html">Settings</a></li>

                            <li><a href="db-wishlist.html">Wishlist</a></li>

                            <li><a href="db-vendor-dashboard.html">Vendor dashboard</a></li>

                            <li><a href="db-vendor-add-hotel.html">Vendor add hotel</a></li>

                            <li><a href="db-vendor-booking.html">Vendor booking</a></li>

                            <li><a href="db-vendor-hotels.html">Vendor hotels</a></li>

                            <li><a href="db-vendor-recovery.html">Vendor recovery</a></li>

                          </ul>

                        </li>


                        <li>
                          <a href="contact.html">Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>


          <div className="col-auto">
            <div className="d-flex items-center">
              <div className="header__buttons d-flex items-center is-menu-opened-hide">
                <a href="become-expert.html" className="button h-50 px-30 fw-400 text-14 -blue-1 bg-white text-dark-1 sm:d-none">Become An Expert</a>
                <a href="signup.html" className="button h-50 px-30 fw-400 text-14 -outline-white text-white ml-20 sm:ml-0">Sign In / Register</a>
              </div>


            </div>
          </div>

        </div>
      </div>
    </header>
    </div>
  );
}

export default Header;