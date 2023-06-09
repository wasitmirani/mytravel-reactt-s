import React, { useEffect } from 'react';


const Home: React.FC = () => {


    useEffect(() => {
    
  }, []);


  return (
    <div>

    <section data-anim-wrap className="masthead -type-5">
      <div data-anim-child="fade" className="masthead__bg">
        <img src="img/masthead/5/bg.svg" alt="image" />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-9">
            <h1 data-anim-child="slide-up delay-4" className="text-60 lg:text-40 md:text-30">Best Travel <span className="text-blue-1 relative">Experience <span className="-line">
            <img src="img/general/line.png" alt="image"/></span></span></h1>

            <p data-anim-child="slide-up delay-5" className="mt-20">Experience the various exciting tour and travel packages and Make hotel reservations, find vacation packages, search cheap hotels and events</p>

            <div data-anim-child="slide-up delay-6" className="mainSearch bg-white pr-20 py-20 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 shadow-1 mt-35">
              <div className="button-grid items-center">

                <div className="searchMenu-loc px-30 lg:py-20 lg:px-0 js-form-dd js-liverSearch">

                  <div data-x-dd-click="searchMenu-loc">
                    <h4 className="text-15 fw-500 ls-2 lh-16">Location</h4>

                    <div className="text-15 text-light-1 ls-2 lh-16">
                      <input  type="search" placeholder="Where are you going?" className="js-search js-dd-focus" />
                    </div>
                  </div>


                  <div className="searchMenu-loc__field shadow-2 js-popup-window" data-x-dd="searchMenu-loc" data-x-dd-toggle="-is-active">
                    <div className="bg-white px-30 py-30 sm:px-0 sm:py-15 rounded-4">
                      <div className="y-gap-5 js-results">

                        <div>
                          <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                            <div className="d-flex">
                              <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                              <div className="ml-10">
                                <div className="text-15 lh-12 fw-500 js-search-option-target">London</div>
                                <div className="text-14 lh-12 text-light-1 mt-5">Greater London, United Kingdom</div>
                              </div>
                            </div>
                          </button>
                        </div>

                        <div>
                          <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                            <div className="d-flex">
                              <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                              <div className="ml-10">
                                <div className="text-15 lh-12 fw-500 js-search-option-target">New York</div>
                                <div className="text-14 lh-12 text-light-1 mt-5">New York State, United States</div>
                              </div>
                            </div>
                          </button>
                        </div>

                        <div>
                          <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                            <div className="d-flex">
                              <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                              <div className="ml-10">
                                <div className="text-15 lh-12 fw-500 js-search-option-target">Paris</div>
                                <div className="text-14 lh-12 text-light-1 mt-5">France</div>
                              </div>
                            </div>
                          </button>
                        </div>

                        <div>
                          <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                            <div className="d-flex">
                              <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                              <div className="ml-10">
                                <div className="text-15 lh-12 fw-500 js-search-option-target">Madrid</div>
                                <div className="text-14 lh-12 text-light-1 mt-5">Spain</div>
                              </div>
                            </div>
                          </button>
                        </div>

                        <div>
                          <button className="-link d-block col-12 text-left rounded-4 px-20 py-15 js-search-option">
                            <div className="d-flex">
                              <div className="icon-location-2 text-light-1 text-20 pt-4"></div>
                              <div className="ml-10">
                                <div className="text-15 lh-12 fw-500 js-search-option-target">Santorini</div>
                                <div className="text-14 lh-12 text-light-1 mt-5">Greece</div>
                              </div>
                            </div>
                          </button>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>


                <div className="searchMenu-date px-30 lg:py-20 lg:px-0 js-form-dd js-calendar">

                  <div data-x-dd-click="searchMenu-date">
                    <h4 className="text-15 fw-500 ls-2 lh-16">Check in - Check out</h4>

                    <div className="text-15 text-light-1 ls-2 lh-16">
                      <span className="js-first-date">Wed 2 Mar</span>
                      -
                      <span className="js-last-date">Fri 11 Apr</span>
                    </div>
                  </div>


                  <div className="searchMenu-date__field shadow-2" data-x-dd="searchMenu-date" data-x-dd-toggle="-is-active">
                    <div className="bg-white px-30 py-30 rounded-4">
                      <div className="overflow-hidden js-calendar-slider">
                        <div className="swiper-wrapper">


                          <div className="swiper-slide">
                            <div className="text-28 fw-500 text-center mb-10">January 2022</div>

                            <div className="table-calendar js-calendar-single">
                              <div className="table-calendar__header">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                              </div>

                              <div className="table-calendar__grid overflow-hidden">

                                <div data-index="1" data-week="Sun" data-month="Dec" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="2" data-week="Mon" data-month="Dec" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="3" data-week="Tue" data-month="Dec" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="4" data-week="Wed" data-month="Dec" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="5" data-week="Thu" data-month="Dec" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="6" data-week="Fri" data-month="Dec" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">31</span>


                                </div>


                                <div data-index="7" data-week="Sat" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">1</span>


                                </div>


                                <div data-index="8" data-week="Sun" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="9" data-week="Mon" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="10" data-week="Tue" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="11" data-week="Wed" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="12" data-week="Thu" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="13" data-week="Fri" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="14" data-week="Sat" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="15" data-week="Sun" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">9</span>


                                </div>


                                <div data-index="16" data-week="Mon" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">10</span>


                                </div>


                                <div data-index="17" data-week="Tue" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">11</span>


                                </div>


                                <div data-index="18" data-week="Wed" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">12</span>


                                </div>


                                <div data-index="19" data-week="Thu" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">13</span>


                                </div>


                                <div data-index="20" data-week="Fri" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">14</span>


                                </div>


                                <div data-index="21" data-week="Sat" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">15</span>


                                </div>


                                <div data-index="22" data-week="Sun" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">16</span>


                                </div>


                                <div data-index="23" data-week="Mon" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">17</span>


                                </div>


                                <div data-index="24" data-week="Tue" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">18</span>


                                </div>


                                <div data-index="25" data-week="Wed" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">19</span>


                                </div>


                                <div data-index="26" data-week="Thu" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">20</span>


                                </div>


                                <div data-index="27" data-week="Fri" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">21</span>


                                </div>


                                <div data-index="28" data-week="Sat" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">22</span>


                                </div>


                                <div data-index="29" data-week="Sun" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">23</span>


                                </div>


                                <div data-index="30" data-week="Mon" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">24</span>


                                </div>


                                <div data-index="31" data-week="Tue" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="32" data-week="Wed" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="33" data-week="Thu" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="34" data-week="Fri" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="35" data-week="Sat" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="36" data-week="Sun" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="37" data-week="Mon" data-month="Jan" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">31</span>


                                </div>


                              </div>
                            </div>
                          </div>

                          <div className="swiper-slide">
                            <div className="text-28 fw-500 text-center mb-10">February 2022</div>

                            <div className="table-calendar js-calendar-single">
                              <div className="table-calendar__header">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                              </div>

                              <div className="table-calendar__grid overflow-hidden">

                                <div data-index="38" data-week="Sun" data-month="Jan" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="39" data-week="Mon" data-month="Jan" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">31</span>


                                </div>


                                <div data-index="40" data-week="Tue" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">1</span>


                                </div>


                                <div data-index="41" data-week="Wed" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="42" data-week="Thu" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="43" data-week="Fri" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="44" data-week="Sat" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="45" data-week="Sun" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="46" data-week="Mon" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="47" data-week="Tue" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="48" data-week="Wed" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">9</span>


                                </div>


                                <div data-index="49" data-week="Thu" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">10</span>


                                </div>


                                <div data-index="50" data-week="Fri" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">11</span>


                                </div>


                                <div data-index="51" data-week="Sat" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">12</span>


                                </div>


                                <div data-index="52" data-week="Sun" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">13</span>


                                </div>


                                <div data-index="53" data-week="Mon" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">14</span>


                                </div>


                                <div data-index="54" data-week="Tue" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">15</span>


                                </div>


                                <div data-index="55" data-week="Wed" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">16</span>


                                </div>


                                <div data-index="56" data-week="Thu" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">17</span>


                                </div>


                                <div data-index="57" data-week="Fri" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">18</span>


                                </div>


                                <div data-index="58" data-week="Sat" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">19</span>


                                </div>


                                <div data-index="59" data-week="Sun" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">20</span>


                                </div>


                                <div data-index="60" data-week="Mon" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">21</span>


                                </div>


                                <div data-index="61" data-week="Tue" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">22</span>


                                </div>


                                <div data-index="62" data-week="Wed" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">23</span>


                                </div>


                                <div data-index="63" data-week="Thu" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">24</span>


                                </div>


                                <div data-index="64" data-week="Fri" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="65" data-week="Sat" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="66" data-week="Sun" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="67" data-week="Mon" data-month="Feb" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">28</span>


                                </div>


                              </div>
                            </div>
                          </div>

                          <div className="swiper-slide">
                            <div className="text-28 fw-500 text-center mb-10">March 2022</div>

                            <div className="table-calendar js-calendar-single">
                              <div className="table-calendar__header">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                              </div>

                              <div className="table-calendar__grid overflow-hidden">

                                <div data-index="68" data-week="Sun" data-month="Feb" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="69" data-week="Mon" data-month="Feb" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="70" data-week="Tue" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">1</span>


                                </div>


                                <div data-index="71" data-week="Wed" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="72" data-week="Thu" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="73" data-week="Fri" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="74" data-week="Sat" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="75" data-week="Sun" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="76" data-week="Mon" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="77" data-week="Tue" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="78" data-week="Wed" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">9</span>


                                </div>


                                <div data-index="79" data-week="Thu" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">10</span>


                                </div>


                                <div data-index="80" data-week="Fri" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">11</span>


                                </div>


                                <div data-index="81" data-week="Sat" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">12</span>


                                </div>


                                <div data-index="82" data-week="Sun" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">13</span>


                                </div>


                                <div data-index="83" data-week="Mon" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">14</span>


                                </div>


                                <div data-index="84" data-week="Tue" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">15</span>


                                </div>


                                <div data-index="85" data-week="Wed" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">16</span>


                                </div>


                                <div data-index="86" data-week="Thu" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">17</span>


                                </div>


                                <div data-index="87" data-week="Fri" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">18</span>


                                </div>


                                <div data-index="88" data-week="Sat" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">19</span>


                                </div>


                                <div data-index="89" data-week="Sun" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">20</span>


                                </div>


                                <div data-index="90" data-week="Mon" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">21</span>


                                </div>


                                <div data-index="91" data-week="Tue" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">22</span>


                                </div>


                                <div data-index="92" data-week="Wed" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">23</span>


                                </div>


                                <div data-index="93" data-week="Thu" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">24</span>


                                </div>


                                <div data-index="94" data-week="Fri" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="95" data-week="Sat" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="96" data-week="Sun" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="97" data-week="Mon" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="98" data-week="Tue" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="99" data-week="Wed" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="100" data-week="Thu" data-month="Mar" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">31</span>


                                </div>


                              </div>
                            </div>
                          </div>

                          <div className="swiper-slide">
                            <div className="text-28 fw-500 text-center mb-10">April 2022</div>

                            <div className="table-calendar js-calendar-single">
                              <div className="table-calendar__header">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                              </div>

                              <div className="table-calendar__grid overflow-hidden">

                                <div data-index="101" data-week="Sun" data-month="Mar" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="102" data-week="Mon" data-month="Mar" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="103" data-week="Tue" data-month="Mar" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="104" data-week="Wed" data-month="Mar" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="105" data-week="Thu" data-month="Mar" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">31</span>


                                </div>


                                <div data-index="106" data-week="Fri" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">1</span>


                                </div>


                                <div data-index="107" data-week="Sat" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="108" data-week="Sun" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="109" data-week="Mon" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="110" data-week="Tue" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="111" data-week="Wed" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="112" data-week="Thu" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="113" data-week="Fri" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="114" data-week="Sat" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">9</span>


                                </div>


                                <div data-index="115" data-week="Sun" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">10</span>


                                </div>


                                <div data-index="116" data-week="Mon" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">11</span>


                                </div>


                                <div data-index="117" data-week="Tue" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">12</span>


                                </div>


                                <div data-index="118" data-week="Wed" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">13</span>


                                </div>


                                <div data-index="119" data-week="Thu" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">14</span>


                                </div>


                                <div data-index="120" data-week="Fri" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">15</span>


                                </div>


                                <div data-index="121" data-week="Sat" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">16</span>


                                </div>


                                <div data-index="122" data-week="Sun" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">17</span>


                                </div>


                                <div data-index="123" data-week="Mon" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">18</span>


                                </div>


                                <div data-index="124" data-week="Tue" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">19</span>


                                </div>


                                <div data-index="125" data-week="Wed" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">20</span>


                                </div>


                                <div data-index="126" data-week="Thu" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">21</span>


                                </div>


                                <div data-index="127" data-week="Fri" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">22</span>


                                </div>


                                <div data-index="128" data-week="Sat" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">23</span>


                                </div>


                                <div data-index="129" data-week="Sun" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">24</span>


                                </div>


                                <div data-index="130" data-week="Mon" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="131" data-week="Tue" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="132" data-week="Wed" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="133" data-week="Thu" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="134" data-week="Fri" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="135" data-week="Sat" data-month="Apr" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">30</span>


                                </div>


                              </div>
                            </div>
                          </div>

                          <div className="swiper-slide">
                            <div className="text-28 fw-500 text-center mb-10">May 2022</div>

                            <div className="table-calendar js-calendar-single">
                              <div className="table-calendar__header">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                              </div>

                              <div className="table-calendar__grid overflow-hidden">

                                <div data-index="136" data-week="Sun" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">1</span>


                                </div>


                                <div data-index="137" data-week="Mon" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="138" data-week="Tue" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="139" data-week="Wed" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="140" data-week="Thu" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="141" data-week="Fri" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="142" data-week="Sat" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="143" data-week="Sun" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="144" data-week="Mon" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">9</span>


                                </div>


                                <div data-index="145" data-week="Tue" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">10</span>


                                </div>


                                <div data-index="146" data-week="Wed" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">11</span>


                                </div>


                                <div data-index="147" data-week="Thu" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">12</span>


                                </div>


                                <div data-index="148" data-week="Fri" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">13</span>


                                </div>


                                <div data-index="149" data-week="Sat" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">14</span>


                                </div>


                                <div data-index="150" data-week="Sun" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">15</span>


                                </div>


                                <div data-index="151" data-week="Mon" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">16</span>


                                </div>


                                <div data-index="152" data-week="Tue" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">17</span>


                                </div>


                                <div data-index="153" data-week="Wed" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">18</span>


                                </div>


                                <div data-index="154" data-week="Thu" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">19</span>


                                </div>


                                <div data-index="155" data-week="Fri" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">20</span>


                                </div>


                                <div data-index="156" data-week="Sat" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">21</span>


                                </div>


                                <div data-index="157" data-week="Sun" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">22</span>


                                </div>


                                <div data-index="158" data-week="Mon" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">23</span>


                                </div>


                                <div data-index="159" data-week="Tue" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">24</span>


                                </div>


                                <div data-index="160" data-week="Wed" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="161" data-week="Thu" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="162" data-week="Fri" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="163" data-week="Sat" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="164" data-week="Sun" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="165" data-week="Mon" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="166" data-week="Tue" data-month="May" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">31</span>


                                </div>


                              </div>
                            </div>
                          </div>

                          <div className="swiper-slide">
                            <div className="text-28 fw-500 text-center mb-10">June 2022</div>

                            <div className="table-calendar js-calendar-single">
                              <div className="table-calendar__header">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                              </div>

                              <div className="table-calendar__grid overflow-hidden">

                                <div data-index="167" data-week="Sun" data-month="May" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="168" data-week="Mon" data-month="May" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="169" data-week="Tue" data-month="May" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">31</span>


                                </div>


                                <div data-index="170" data-week="Wed" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">1</span>


                                </div>


                                <div data-index="171" data-week="Thu" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="172" data-week="Fri" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="173" data-week="Sat" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="174" data-week="Sun" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="175" data-week="Mon" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="176" data-week="Tue" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="177" data-week="Wed" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="178" data-week="Thu" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">9</span>


                                </div>


                                <div data-index="179" data-week="Fri" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">10</span>


                                </div>


                                <div data-index="180" data-week="Sat" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">11</span>


                                </div>


                                <div data-index="181" data-week="Sun" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">12</span>


                                </div>


                                <div data-index="182" data-week="Mon" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">13</span>


                                </div>


                                <div data-index="183" data-week="Tue" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">14</span>


                                </div>


                                <div data-index="184" data-week="Wed" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">15</span>


                                </div>


                                <div data-index="185" data-week="Thu" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">16</span>


                                </div>


                                <div data-index="186" data-week="Fri" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">17</span>


                                </div>


                                <div data-index="187" data-week="Sat" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">18</span>


                                </div>


                                <div data-index="188" data-week="Sun" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">19</span>


                                </div>


                                <div data-index="189" data-week="Mon" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">20</span>


                                </div>


                                <div data-index="190" data-week="Tue" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">21</span>


                                </div>


                                <div data-index="191" data-week="Wed" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">22</span>


                                </div>


                                <div data-index="192" data-week="Thu" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">23</span>


                                </div>


                                <div data-index="193" data-week="Fri" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">24</span>


                                </div>


                                <div data-index="194" data-week="Sat" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="195" data-week="Sun" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="196" data-week="Mon" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="197" data-week="Tue" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="198" data-week="Wed" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="199" data-week="Thu" data-month="Jun" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">30</span>


                                </div>


                              </div>
                            </div>
                          </div>

                          <div className="swiper-slide">
                            <div className="text-28 fw-500 text-center mb-10">July 2022</div>

                            <div className="table-calendar js-calendar-single">
                              <div className="table-calendar__header">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                              </div>

                              <div className="table-calendar__grid overflow-hidden">

                                <div data-index="200" data-week="Sun" data-month="Jun" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="201" data-week="Mon" data-month="Jun" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="202" data-week="Tue" data-month="Jun" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="203" data-week="Wed" data-month="Jun" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="204" data-week="Thu" data-month="Jun" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="205" data-week="Fri" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">1</span>


                                </div>


                                <div data-index="206" data-week="Sat" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="207" data-week="Sun" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="208" data-week="Mon" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="209" data-week="Tue" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="210" data-week="Wed" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="211" data-week="Thu" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="212" data-week="Fri" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="213" data-week="Sat" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">9</span>


                                </div>


                                <div data-index="214" data-week="Sun" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">10</span>


                                </div>


                                <div data-index="215" data-week="Mon" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">11</span>


                                </div>


                                <div data-index="216" data-week="Tue" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">12</span>


                                </div>


                                <div data-index="217" data-week="Wed" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">13</span>


                                </div>


                                <div data-index="218" data-week="Thu" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">14</span>


                                </div>


                                <div data-index="219" data-week="Fri" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">15</span>


                                </div>


                                <div data-index="220" data-week="Sat" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">16</span>


                                </div>


                                <div data-index="221" data-week="Sun" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">17</span>


                                </div>


                                <div data-index="222" data-week="Mon" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">18</span>


                                </div>


                                <div data-index="223" data-week="Tue" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">19</span>


                                </div>


                                <div data-index="224" data-week="Wed" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">20</span>


                                </div>


                                <div data-index="225" data-week="Thu" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">21</span>


                                </div>


                                <div data-index="226" data-week="Fri" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">22</span>


                                </div>


                                <div data-index="227" data-week="Sat" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">23</span>


                                </div>


                                <div data-index="228" data-week="Sun" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">24</span>


                                </div>


                                <div data-index="229" data-week="Mon" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="230" data-week="Tue" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="231" data-week="Wed" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="232" data-week="Thu" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="233" data-week="Fri" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="234" data-week="Sat" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="235" data-week="Sun" data-month="Jul" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">31</span>


                                </div>


                              </div>
                            </div>
                          </div>

                          <div className="swiper-slide">
                            <div className="text-28 fw-500 text-center mb-10">August 2022</div>

                            <div className="table-calendar js-calendar-single">
                              <div className="table-calendar__header">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                              </div>

                              <div className="table-calendar__grid overflow-hidden">

                                <div data-index="236" data-week="Sun" data-month="Jul" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">31</span>


                                </div>


                                <div data-index="237" data-week="Mon" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">1</span>


                                </div>


                                <div data-index="238" data-week="Tue" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="239" data-week="Wed" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="240" data-week="Thu" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="241" data-week="Fri" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="242" data-week="Sat" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="243" data-week="Sun" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="244" data-week="Mon" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="245" data-week="Tue" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">9</span>


                                </div>


                                <div data-index="246" data-week="Wed" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">10</span>


                                </div>


                                <div data-index="247" data-week="Thu" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">11</span>


                                </div>


                                <div data-index="248" data-week="Fri" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">12</span>


                                </div>


                                <div data-index="249" data-week="Sat" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">13</span>


                                </div>


                                <div data-index="250" data-week="Sun" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">14</span>


                                </div>


                                <div data-index="251" data-week="Mon" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">15</span>


                                </div>


                                <div data-index="252" data-week="Tue" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">16</span>


                                </div>


                                <div data-index="253" data-week="Wed" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">17</span>


                                </div>


                                <div data-index="254" data-week="Thu" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">18</span>


                                </div>


                                <div data-index="255" data-week="Fri" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">19</span>


                                </div>


                                <div data-index="256" data-week="Sat" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">20</span>


                                </div>


                                <div data-index="257" data-week="Sun" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">21</span>


                                </div>


                                <div data-index="258" data-week="Mon" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">22</span>


                                </div>


                                <div data-index="259" data-week="Tue" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">23</span>


                                </div>


                                <div data-index="260" data-week="Wed" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">24</span>


                                </div>


                                <div data-index="261" data-week="Thu" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="262" data-week="Fri" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="263" data-week="Sat" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="264" data-week="Sun" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="265" data-week="Mon" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="266" data-week="Tue" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="267" data-week="Wed" data-month="Aug" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">31</span>


                                </div>


                              </div>
                            </div>
                          </div>

                          <div className="swiper-slide">
                            <div className="text-28 fw-500 text-center mb-10">September 2022</div>

                            <div className="table-calendar js-calendar-single">
                              <div className="table-calendar__header">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                              </div>

                              <div className="table-calendar__grid overflow-hidden">

                                <div data-index="268" data-week="Sun" data-month="Aug" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="269" data-week="Mon" data-month="Aug" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="270" data-week="Tue" data-month="Aug" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="271" data-week="Wed" data-month="Aug" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">31</span>


                                </div>


                                <div data-index="272" data-week="Thu" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">1</span>


                                </div>


                                <div data-index="273" data-week="Fri" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="274" data-week="Sat" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="275" data-week="Sun" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="276" data-week="Mon" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="277" data-week="Tue" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="278" data-week="Wed" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="279" data-week="Thu" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="280" data-week="Fri" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">9</span>


                                </div>


                                <div data-index="281" data-week="Sat" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">10</span>


                                </div>


                                <div data-index="282" data-week="Sun" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">11</span>


                                </div>


                                <div data-index="283" data-week="Mon" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">12</span>


                                </div>


                                <div data-index="284" data-week="Tue" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">13</span>


                                </div>


                                <div data-index="285" data-week="Wed" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">14</span>


                                </div>


                                <div data-index="286" data-week="Thu" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">15</span>


                                </div>


                                <div data-index="287" data-week="Fri" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">16</span>


                                </div>


                                <div data-index="288" data-week="Sat" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">17</span>


                                </div>


                                <div data-index="289" data-week="Sun" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">18</span>


                                </div>


                                <div data-index="290" data-week="Mon" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">19</span>


                                </div>


                                <div data-index="291" data-week="Tue" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">20</span>


                                </div>


                                <div data-index="292" data-week="Wed" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">21</span>


                                </div>


                                <div data-index="293" data-week="Thu" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">22</span>


                                </div>


                                <div data-index="294" data-week="Fri" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">23</span>


                                </div>


                                <div data-index="295" data-week="Sat" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">24</span>


                                </div>


                                <div data-index="296" data-week="Sun" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="297" data-week="Mon" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="298" data-week="Tue" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="299" data-week="Wed" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="300" data-week="Thu" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="301" data-week="Fri" data-month="Sep" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">30</span>


                                </div>


                              </div>
                            </div>
                          </div>

                          <div className="swiper-slide">
                            <div className="text-28 fw-500 text-center mb-10">October 2022</div>

                            <div className="table-calendar js-calendar-single">
                              <div className="table-calendar__header">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                              </div>

                              <div className="table-calendar__grid overflow-hidden">

                                <div data-index="302" data-week="Sun" data-month="Sep" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="303" data-week="Mon" data-month="Sep" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="304" data-week="Tue" data-month="Sep" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="305" data-week="Wed" data-month="Sep" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="306" data-week="Thu" data-month="Sep" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="307" data-week="Fri" data-month="Sep" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="308" data-week="Sat" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">1</span>


                                </div>


                                <div data-index="309" data-week="Sun" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="310" data-week="Mon" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="311" data-week="Tue" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="312" data-week="Wed" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="313" data-week="Thu" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="314" data-week="Fri" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="315" data-week="Sat" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="316" data-week="Sun" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="317" data-week="Mon" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="318" data-week="Tue" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="319" data-week="Wed" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="320" data-week="Thu" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="321" data-week="Fri" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="322" data-week="Sat" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="323" data-week="Sun" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">9</span>


                                </div>


                                <div data-index="324" data-week="Mon" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">10</span>


                                </div>


                                <div data-index="325" data-week="Tue" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">11</span>


                                </div>


                                <div data-index="326" data-week="Wed" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">12</span>


                                </div>


                                <div data-index="327" data-week="Thu" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">13</span>


                                </div>


                                <div data-index="328" data-week="Fri" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">14</span>


                                </div>


                                <div data-index="329" data-week="Sat" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">15</span>


                                </div>


                                <div data-index="330" data-week="Sun" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">16</span>


                                </div>


                                <div data-index="331" data-week="Mon" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">17</span>


                                </div>


                                <div data-index="332" data-week="Tue" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">18</span>


                                </div>


                                <div data-index="333" data-week="Wed" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">19</span>


                                </div>


                                <div data-index="334" data-week="Thu" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">20</span>


                                </div>


                                <div data-index="335" data-week="Fri" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">21</span>


                                </div>


                                <div data-index="336" data-week="Sat" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">22</span>


                                </div>


                                <div data-index="337" data-week="Sun" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">23</span>


                                </div>


                                <div data-index="338" data-week="Mon" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">24</span>


                                </div>


                                <div data-index="339" data-week="Tue" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="340" data-week="Wed" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="341" data-week="Thu" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="342" data-week="Fri" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="343" data-week="Sat" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="344" data-week="Sun" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="345" data-week="Mon" data-month="Oct" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">31</span>


                                </div>


                              </div>
                            </div>
                          </div>

                          <div className="swiper-slide">
                            <div className="text-28 fw-500 text-center mb-10">November 2022</div>

                            <div className="table-calendar js-calendar-single">
                              <div className="table-calendar__header">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                              </div>

                              <div className="table-calendar__grid overflow-hidden">

                                <div data-index="346" data-week="Sun" data-month="Oct" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="347" data-week="Mon" data-month="Oct" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">31</span>


                                </div>


                                <div data-index="348" data-week="Tue" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">1</span>


                                </div>


                                <div data-index="349" data-week="Wed" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="350" data-week="Thu" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="351" data-week="Fri" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="352" data-week="Sat" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="353" data-week="Sun" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="354" data-week="Mon" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="355" data-week="Tue" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="356" data-week="Wed" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="357" data-week="Thu" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="358" data-week="Fri" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="359" data-week="Sat" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="360" data-week="Sun" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="361" data-week="Mon" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="362" data-week="Tue" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="363" data-week="Wed" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">9</span>


                                </div>


                                <div data-index="364" data-week="Thu" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">10</span>


                                </div>


                                <div data-index="365" data-week="Fri" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">11</span>


                                </div>


                                <div data-index="366" data-week="Sat" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">12</span>


                                </div>


                                <div data-index="367" data-week="Sun" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">13</span>


                                </div>


                                <div data-index="368" data-week="Mon" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">14</span>


                                </div>


                                <div data-index="369" data-week="Tue" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">15</span>


                                </div>


                                <div data-index="370" data-week="Wed" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">16</span>


                                </div>


                                <div data-index="371" data-week="Thu" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">17</span>


                                </div>


                                <div data-index="372" data-week="Fri" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">18</span>


                                </div>


                                <div data-index="373" data-week="Sat" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">19</span>


                                </div>


                                <div data-index="374" data-week="Sun" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">20</span>


                                </div>


                                <div data-index="375" data-week="Mon" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">21</span>


                                </div>


                                <div data-index="376" data-week="Tue" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">22</span>


                                </div>


                                <div data-index="377" data-week="Wed" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">23</span>


                                </div>


                                <div data-index="378" data-week="Thu" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">24</span>


                                </div>


                                <div data-index="379" data-week="Fri" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="380" data-week="Sat" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="381" data-week="Sun" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="382" data-week="Mon" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="383" data-week="Tue" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="384" data-week="Wed" data-month="Nov" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">30</span>


                                </div>


                              </div>
                            </div>
                          </div>

                          <div className="swiper-slide">
                            <div className="text-28 fw-500 text-center mb-10">December 2022</div>

                            <div className="table-calendar js-calendar-single">
                              <div className="table-calendar__header">
                                <div>Sun</div>
                                <div>Mon</div>
                                <div>Tue</div>
                                <div>Wed</div>
                                <div>Thu</div>
                                <div>Fri</div>
                                <div>Sat</div>
                              </div>

                              <div className="table-calendar__grid overflow-hidden">

                                <div data-index="385" data-week="Sun" data-month="Nov" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="386" data-week="Mon" data-month="Nov" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="387" data-week="Tue" data-month="Nov" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="388" data-week="Wed" data-month="Nov" className="table-calendar__cell lh-1 text-light-1">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="389" data-week="Thu" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">1</span>


                                </div>


                                <div data-index="390" data-week="Fri" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="391" data-week="Sat" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="392" data-week="Sun" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="393" data-week="Mon" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="394" data-week="Tue" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="395" data-week="Wed" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="396" data-week="Thu" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="397" data-week="Fri" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">2</span>


                                </div>


                                <div data-index="398" data-week="Sat" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">3</span>


                                </div>


                                <div data-index="399" data-week="Sun" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">4</span>


                                </div>


                                <div data-index="400" data-week="Mon" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">5</span>


                                </div>


                                <div data-index="401" data-week="Tue" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">6</span>


                                </div>


                                <div data-index="402" data-week="Wed" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">7</span>


                                </div>


                                <div data-index="403" data-week="Thu" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">8</span>


                                </div>


                                <div data-index="404" data-week="Fri" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">9</span>


                                </div>


                                <div data-index="405" data-week="Sat" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">10</span>


                                </div>


                                <div data-index="406" data-week="Sun" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">11</span>


                                </div>


                                <div data-index="407" data-week="Mon" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">12</span>


                                </div>


                                <div data-index="408" data-week="Tue" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">13</span>


                                </div>


                                <div data-index="409" data-week="Wed" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">14</span>


                                </div>


                                <div data-index="410" data-week="Thu" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">15</span>


                                </div>


                                <div data-index="411" data-week="Fri" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">16</span>


                                </div>


                                <div data-index="412" data-week="Sat" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">17</span>


                                </div>


                                <div data-index="413" data-week="Sun" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">18</span>


                                </div>


                                <div data-index="414" data-week="Mon" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">19</span>


                                </div>


                                <div data-index="415" data-week="Tue" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">20</span>


                                </div>


                                <div data-index="416" data-week="Wed" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">21</span>


                                </div>


                                <div data-index="417" data-week="Thu" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">22</span>


                                </div>


                                <div data-index="418" data-week="Fri" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">23</span>


                                </div>


                                <div data-index="419" data-week="Sat" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">24</span>


                                </div>


                                <div data-index="420" data-week="Sun" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">25</span>


                                </div>


                                <div data-index="421" data-week="Mon" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">26</span>


                                </div>


                                <div data-index="422" data-week="Tue" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">27</span>


                                </div>


                                <div data-index="423" data-week="Wed" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">28</span>


                                </div>


                                <div data-index="424" data-week="Thu" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">29</span>


                                </div>


                                <div data-index="425" data-week="Fri" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">30</span>


                                </div>


                                <div data-index="426" data-week="Sat" data-month="Dec" className="table-calendar__cell lh-1 ">
                                  <span className="js-date">31</span>


                                </div>


                              </div>
                            </div>
                          </div>

                        </div>

                        <button className="calendar-icon -left js-calendar-prev z-2">
                          <i className="icon-arrow-left text-24"></i>
                        </button>

                        <button className="calendar-icon -right js-calendar-next z-2">
                          <i className="icon-arrow-right text-24"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="searchMenu-guests px-30 lg:py-20 lg:px-0 js-form-dd js-form-counters">

                  <div data-x-dd-click="searchMenu-guests">
                    <h4 className="text-15 fw-500 ls-2 lh-16">Guest</h4>

                    <div className="text-15 text-light-1 ls-2 lh-16">
                      <span className="js-count-adult">2</span> adults
                      -
                      <span className="js-count-child">1</span> childeren
                      -
                      <span className="js-count-room">1</span> room
                    </div>
                  </div>


                  <div className="searchMenu-guests__field shadow-2" data-x-dd="searchMenu-guests" data-x-dd-toggle="-is-active">
                    <div className="bg-white px-30 py-30 rounded-4">
                      <div className="row y-gap-10 justify-between items-center">
                        <div className="col-auto">
                          <div className="text-15 fw-500">Adults</div>
                        </div>

                        <div className="col-auto">
                          <div className="d-flex items-center js-counter" data-value-change=".js-count-adult">
                            <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down">
                              <i className="icon-minus text-12"></i>
                            </button>

                            <div className="flex-center size-20 ml-15 mr-15">
                              <div className="text-15 js-count">2</div>
                            </div>

                            <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up">
                              <i className="icon-plus text-12"></i>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="border-top-light mt-24 mb-24"></div>

                      <div className="row y-gap-10 justify-between items-center">
                        <div className="col-auto">
                          <div className="text-15 lh-12 fw-500">Children</div>
                          <div className="text-14 lh-12 text-light-1 mt-5">Ages 0 - 17</div>
                        </div>

                        <div className="col-auto">
                          <div className="d-flex items-center js-counter" data-value-change=".js-count-child">
                            <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down">
                              <i className="icon-minus text-12"></i>
                            </button>

                            <div className="flex-center size-20 ml-15 mr-15">
                              <div className="text-15 js-count">1</div>
                            </div>

                            <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up">
                              <i className="icon-plus text-12"></i>
                            </button>
                          </div>
                        </div>
                      </div>

                      <div className="border-top-light mt-24 mb-24"></div>

                      <div className="row y-gap-10 justify-between items-center">
                        <div className="col-auto">
                          <div className="text-15 fw-500">Rooms</div>
                        </div>

                        <div className="col-auto">
                          <div className="d-flex items-center js-counter" data-value-change=".js-count-room">
                            <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down">
                              <i className="icon-minus text-12"></i>
                            </button>

                            <div className="flex-center size-20 ml-15 mr-15">
                              <div className="text-15 js-count">1</div>
                            </div>

                            <button className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up">
                              <i className="icon-plus text-12"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>


                <div className="button-item">
                  <button className="mainSearch__submit button -dark-1 py-15 px-35 h-60 col-12 rounded-4 bg-blue-1 text-white">
                    <i className="icon-search text-20 mr-10"></i>
                    Search
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div data-anim-child="fade" className="masthead__image">
        <img src="img/masthead/5/1.png" alt="image"/>
      </div>
    </section>

    <section className="layout-pt-lg layout-pb-md">
      <div data-anim-wrap className="container">
        <div data-anim-child="slide-up delay-1" className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Most Popular Tours</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
            </div>
          </div>

          <div className="col-auto">

            <a href="#" className="button -md -blue-1 bg-blue-1-05 text-blue-1">
              More <div className="icon-arrow-top-right ml-15"></div>
            </a>

          </div>
        </div>

        <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider" data-gap="30" data-scrollbar data-slider-cols="xl-4 lg-3 md-2 sm-2 base-1" data-nav-prev="js-hotels-prev" data-pagination="js-hotels-pag" data-nav-next="js-hotels-next">
          <div className="swiper-wrapper">

            <div data-anim-child="slide-up delay-2" className="swiper-slide">

              <a href="tour-single.html" className="tourCard -type-1 rounded-4 ">
                <div className="tourCard__image">

                  <div className="cardImage ratio ratio-1:1">
                    <div className="cardImage__content">

                      <img className="rounded-4 col-12" src="img/tours/1.png" alt="image"/>


                    </div>

                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12"></i>
                      </button>
                    </div>


                    <div className="cardImage__leftBadge">
                      <div className="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-dark-1 text-white">
                        LIKELY TO SELL OUT*
                      </div>
                    </div>

                  </div>

                </div>

                <div className="tourCard__content mt-10">
                  <div className="d-flex items-center lh-14 mb-5">
                    <div className="text-14 text-light-1">16+ hours</div>
                    <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                    <div className="text-14 text-light-1">Full-day Tours</div>
                  </div>

                  <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                    <span>Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock</span>
                  </h4>

                  <p className="text-light-1 lh-14 text-14 mt-5">Westminster Borough, London</p>

                  <div className="row justify-between items-center pt-15">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <div className="d-flex items-center x-gap-5">

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                        </div>

                        <div className="text-14 text-light-1 ml-10">3,014 reviews</div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="text-14 text-light-1">
                        From
                        <span className="text-16 fw-500 text-dark-1">US$72</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

            </div>

            <div data-anim-child="slide-up delay-3" className="swiper-slide">

              <a href="tour-single.html" className="tourCard -type-1 rounded-4 ">
                <div className="tourCard__image">

                  <div className="cardImage ratio ratio-1:1">
                    <div className="cardImage__content">


                      <div className="cardImage-slider rounded-4 overflow-hidden js-cardImage-slider">
                        <div className="swiper-wrapper">

                          <div className="swiper-slide">
                            <img className="col-12" src="img/tours/2.png" alt="image"/>
                          </div>

                          <div className="swiper-slide">
                            <img className="col-12" src="img/tours/1.png" alt="image"/>
                          </div>

                          <div className="swiper-slide">
                            <img className="col-12" src="img/tours/3.png" alt="image"/>
                          </div>

                        </div>

                        <div className="cardImage-slider__pagination js-pagination"></div>

                        <div className="cardImage-slider__nav -prev">
                          <button className="button -blue-1 bg-white size-30 rounded-full shadow-2 js-prev">
                            <i className="icon-chevron-left text-10"></i>
                          </button>
                        </div>

                        <div className="cardImage-slider__nav -next">
                          <button className="button -blue-1 bg-white size-30 rounded-full shadow-2 js-next">
                            <i className="icon-chevron-right text-10"></i>
                          </button>
                        </div>
                      </div>

                    </div>

                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12"></i>
                      </button>
                    </div>


                  </div>

                </div>

                <div className="tourCard__content mt-10">
                  <div className="d-flex items-center lh-14 mb-5">
                    <div className="text-14 text-light-1">9+ hours</div>
                    <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                    <div className="text-14 text-light-1">Attractions &amp; Museums</div>
                  </div>

                  <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                    <span>Westminster Walking Tour & Westminster Abbey Entry</span>
                  </h4>

                  <p className="text-light-1 lh-14 text-14 mt-5">Ciutat Vella, Barcelona</p>

                  <div className="row justify-between items-center pt-15">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <div className="d-flex items-center x-gap-5">

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                        </div>

                        <div className="text-14 text-light-1 ml-10">3,014 reviews</div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="text-14 text-light-1">
                        From
                        <span className="text-16 fw-500 text-dark-1">US$72</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

            </div>

            <div data-anim-child="slide-up delay-4" className="swiper-slide">

              <a href="tour-single.html" className="tourCard -type-1 rounded-4 ">
                <div className="tourCard__image">

                  <div className="cardImage ratio ratio-1:1">
                    <div className="cardImage__content">

                      <img className="rounded-4 col-12" src="img/tours/3.png" alt="image"/>


                    </div>

                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12"></i>
                      </button>
                    </div>


                    <div className="cardImage__leftBadge">
                      <div className="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-blue-1 text-white">
                        Best Seller
                      </div>
                    </div>

                  </div>

                </div>

                <div className="tourCard__content mt-10">
                  <div className="d-flex items-center lh-14 mb-5">
                    <div className="text-14 text-light-1">40–55 minutes</div>
                    <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                    <div className="text-14 text-light-1">Private and Luxury</div>
                  </div>

                  <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                    <span>High-Speed Thames River RIB Cruise in London</span>
                  </h4>

                  <p className="text-light-1 lh-14 text-14 mt-5">Manhattan, New York</p>

                  <div className="row justify-between items-center pt-15">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <div className="d-flex items-center x-gap-5">

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                        </div>

                        <div className="text-14 text-light-1 ml-10">3,014 reviews</div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="text-14 text-light-1">
                        From
                        <span className="text-16 fw-500 text-dark-1">US$72</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

            </div>

            <div data-anim-child="slide-up delay-5" className="swiper-slide">

              <a href="tour-single.html" className="tourCard -type-1 rounded-4 ">
                <div className="tourCard__image">

                  <div className="cardImage ratio ratio-1:1">
                    <div className="cardImage__content">

                      <img className="rounded-4 col-12" src="img/tours/4.png" alt="image"/>


                    </div>

                    <div className="cardImage__wishlist">
                      <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                        <i className="icon-heart text-12"></i>
                      </button>
                    </div>


                    <div className="cardImage__leftBadge">
                      <div className="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-yellow-1 text-dark-1">
                        Top Rated
                      </div>
                    </div>

                  </div>

                </div>

                <div className="tourCard__content mt-10">
                  <div className="d-flex items-center lh-14 mb-5">
                    <div className="text-14 text-light-1">94+ days</div>
                    <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                    <div className="text-14 text-light-1">Bus Tours</div>
                  </div>

                  <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                    <span>Edinburgh Darkside Walking Tour: Mysteries, Murder and Legends</span>
                  </h4>

                  <p className="text-light-1 lh-14 text-14 mt-5">Vaticano Prati, Rome</p>

                  <div className="row justify-between items-center pt-15">
                    <div className="col-auto">
                      <div className="d-flex items-center">
                        <div className="d-flex items-center x-gap-5">

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                          <div className="icon-star text-yellow-1 text-10"></div>

                        </div>

                        <div className="text-14 text-light-1 ml-10">3,014 reviews</div>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="text-14 text-light-1">
                        From
                        <span className="text-16 fw-500 text-dark-1">US$72</span>
                      </div>
                    </div>
                  </div>
                </div>
              </a>

            </div>

          </div>


          <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
            <div className="col-auto">
              <button className="d-flex items-center text-24 arrow-left-hover js-hotels-prev">
                <i className="icon icon-arrow-left"></i>
              </button>
            </div>

            <div className="col-auto">
              <div className="pagination -dots text-border js-hotels-pag"></div>
            </div>

            <div className="col-auto">
              <button className="d-flex items-center text-24 arrow-right-hover js-hotels-next">
                <i className="icon icon-arrow-right"></i>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>

    <section className="layout-pt-md layout-pb-md">
      <div data-anim-wrap className="container">
        <div data-anim-child="slide-up delay-1" className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Choose Tour Types</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
            </div>
          </div>

          <div className="col-auto">

            <div className="d-flex x-gap-15 items-center ">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-tour-prev">
                  <i className="icon icon-arrow-left"></i>
                </button>
              </div>

              <div className="col-auto">
                <div className="pagination -dots text-border js-tour-pag"></div>
              </div>

              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-tour-next">
                  <i className="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="relative overflow-hidden pt-40 sm:pt-20 js-section-slider" data-gap="30" data-scrollbar data-slider-cols="xl-5 lg-4 md-3 sm-2 base-1" data-nav-prev="js-tour-prev" data-pagination="js-tour-pag" data-nav-next="js-tour-next">
          <div className="swiper-wrapper">

            <div data-anim-child="slide-up delay-2" className="swiper-slide">

              <a href="tour-single.html" className="tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4">
                <div className="tourTypeCard__content text-center pt-60 pb-24 px-30">
                  <i className="icon-nature text-60 sm:text-40 text-blue-1"></i>
                  <h4 className="text-dark-1 text-18 fw-500 mt-50 md:mt-30">Wildlife Tour</h4>
                  <p className="text-light-1 lh-14 text-14 mt-5">5 Tours From 550$</p>
                </div>
              </a>

            </div>

            <div data-anim-child="slide-up delay-3" className="swiper-slide">

              <a href="tour-single.html" className="tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4">
                <div className="tourTypeCard__content text-center pt-60 pb-24 px-30">
                  <i className="icon-hiking text-60 sm:text-40 text-blue-1"></i>
                  <h4 className="text-dark-1 text-18 fw-500 mt-50 md:mt-30">Adventure Tour</h4>
                  <p className="text-light-1 lh-14 text-14 mt-5">5 Tours From 550$</p>
                </div>
              </a>

            </div>

            <div data-anim-child="slide-up delay-4" className="swiper-slide">

              <a href="tour-single.html" className="tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4">
                <div className="tourTypeCard__content text-center pt-60 pb-24 px-30">
                  <i className="icon-city text-60 sm:text-40 text-blue-1"></i>
                  <h4 className="text-dark-1 text-18 fw-500 mt-50 md:mt-30">City Tours</h4>
                  <p className="text-light-1 lh-14 text-14 mt-5">5 Tours From 550$</p>
                </div>
              </a>

            </div>

            <div data-anim-child="slide-up delay-5" className="swiper-slide">

              <a href="tour-single.html" className="tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4">
                <div className="tourTypeCard__content text-center pt-60 pb-24 px-30">
                  <i className="icon-museum text-60 sm:text-40 text-blue-1"></i>
                  <h4 className="text-dark-1 text-18 fw-500 mt-50 md:mt-30">Museum Tours</h4>
                  <p className="text-light-1 lh-14 text-14 mt-5">5 Tours From 550$</p>
                </div>
              </a>

            </div>

            <div data-anim-child="slide-up delay-6" className="swiper-slide">

              <a href="tour-single.html" className="tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4">
                <div className="tourTypeCard__content text-center pt-60 pb-24 px-30">
                  <i className="icon-beach-umbrella text-60 sm:text-40 text-blue-1"></i>
                  <h4 className="text-dark-1 text-18 fw-500 mt-50 md:mt-30">Beaches Tour</h4>
                  <p className="text-light-1 lh-14 text-14 mt-5">5 Tours From 550$</p>
                </div>
              </a>

            </div>

            <div data-anim-child="slide-up delay-7" className="swiper-slide">

              <a href="tour-single.html" className="tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4">
                <div className="tourTypeCard__content text-center pt-60 pb-24 px-30">
                  <i className="icon-nature text-60 sm:text-40 text-blue-1"></i>
                  <h4 className="text-dark-1 text-18 fw-500 mt-50 md:mt-30">Wildlife Tour</h4>
                  <p className="text-light-1 lh-14 text-14 mt-5">5 Tours From 550$</p>
                </div>
              </a>

            </div>

            <div data-anim-child="slide-up delay-8" className="swiper-slide">

              <a href="tour-single.html" className="tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4">
                <div className="tourTypeCard__content text-center pt-60 pb-24 px-30">
                  <i className="icon-hiking text-60 sm:text-40 text-blue-1"></i>
                  <h4 className="text-dark-1 text-18 fw-500 mt-50 md:mt-30">Adventure Tour</h4>
                  <p className="text-light-1 lh-14 text-14 mt-5">5 Tours From 550$</p>
                </div>
              </a>

            </div>

            <div data-anim-child="slide-up delay-9" className="swiper-slide">

              <a href="tour-single.html" className="tourTypeCard -type-1 d-block rounded-4 bg-blue-1-05 rounded-4">
                <div className="tourTypeCard__content text-center pt-60 pb-24 px-30">
                  <i className="icon-city text-60 sm:text-40 text-blue-1"></i>
                  <h4 className="text-dark-1 text-18 fw-500 mt-50 md:mt-30">City Tours</h4>
                  <p className="text-light-1 lh-14 text-14 mt-5">5 Tours From 550$</p>
                </div>
              </a>

            </div>

          </div>
        </div>
      </div>
    </section>

    <section className="layout-pt-md layout-pb-md">
      <div data-anim-wrap className="container">
        <div data-anim-child="slide-up delay-1" className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Explore Hot Locations</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
            </div>
          </div>

          <div className="col-auto">

            <a href="#" className="button -md -blue-1 bg-blue-1-05 text-blue-1">
              More <div className="icon-arrow-top-right ml-15"></div>
            </a>

          </div>
        </div>

        <div className="row y-gap-30 pt-40 sm:pt-20">

          <div data-anim-child="slide-up delay-2" className="col-xl-3 col-lg-4 col-md-6">
            <a href="#" className="destCard -type-1 d-block">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="destCard__image rounded-4">
                    <img className="size-100 rounded-4" src="img/cities/1/1.png" alt="image" />
                  </div>
                </div>

                <div className="col-auto">
                  <div className="text-18 fw-500">Miami</div>
                  <div className="text-14 lh-14 text-light-1 mt-5">4,090 properties</div>
                </div>
              </div>
            </a>
          </div>

          <div data-anim-child="slide-up delay-3" className="col-xl-3 col-lg-4 col-md-6">
            <a href="#" className="destCard -type-1 d-block">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="destCard__image rounded-4">
                    <img className="size-100 rounded-4" src="img/cities/1/2.png" alt="image" />
                  </div>
                </div>

                <div className="col-auto">
                  <div className="text-18 fw-500">Roma</div>
                  <div className="text-14 lh-14 text-light-1 mt-5">4,090 properties</div>
                </div>
              </div>
            </a>
          </div>

          <div data-anim-child="slide-up delay-4" className="col-xl-3 col-lg-4 col-md-6">
            <a href="#" className="destCard -type-1 d-block">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="destCard__image rounded-4">
                    <img className="size-100 rounded-4" src="img/cities/1/3.png" alt="image" />
                  </div>
                </div>

                <div className="col-auto">
                  <div className="text-18 fw-500">New Delhi</div>
                  <div className="text-14 lh-14 text-light-1 mt-5">4,090 properties</div>
                </div>
              </div>
            </a>
          </div>

          <div data-anim-child="slide-up delay-5" className="col-xl-3 col-lg-4 col-md-6">
            <a href="#" className="destCard -type-1 d-block">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="destCard__image rounded-4">
                    <img className="size-100 rounded-4" src="img/cities/1/4.png" alt="image"/>
                  </div>
                </div>

                <div className="col-auto">
                  <div className="text-18 fw-500">London</div>
                  <div className="text-14 lh-14 text-light-1 mt-5">4,090 properties</div>
                </div>
              </div>
            </a>
          </div>

          <div data-anim-child="slide-up delay-6" className="col-xl-3 col-lg-4 col-md-6">
            <a href="#" className="destCard -type-1 d-block">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="destCard__image rounded-4">
                    <img className="size-100 rounded-4" src="img/cities/1/5.png" alt="image" />
                  </div>
                </div>

                <div className="col-auto">
                  <div className="text-18 fw-500">Amsterdam</div>
                  <div className="text-14 lh-14 text-light-1 mt-5">4,090 properties</div>
                </div>
              </div>
            </a>
          </div>

          <div data-anim-child="slide-up delay-7" className="col-xl-3 col-lg-4 col-md-6">
            <a href="#" className="destCard -type-1 d-block">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="destCard__image rounded-4">
                    <img className="size-100 rounded-4" src="img/cities/1/6.png" alt="image" />
                  </div>
                </div>

                <div className="col-auto">
                  <div className="text-18 fw-500">Berlin</div>
                  <div className="text-14 lh-14 text-light-1 mt-5">4,090 properties</div>
                </div>
              </div>
            </a>
          </div>

          <div data-anim-child="slide-up delay-8" className="col-xl-3 col-lg-4 col-md-6">
            <a href="#" className="destCard -type-1 d-block">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="destCard__image rounded-4">
                    <img className="size-100 rounded-4" src="img/cities/1/7.png" alt="image" />
                  </div>
                </div>

                <div className="col-auto">
                  <div className="text-18 fw-500">Paris</div>
                  <div className="text-14 lh-14 text-light-1 mt-5">4,090 properties</div>
                </div>
              </div>
            </a>
          </div>

          <div data-anim-child="slide-up delay-9" className="col-xl-3 col-lg-4 col-md-6">
            <a href="#" className="destCard -type-1 d-block">
              <div className="row x-gap-20 y-gap-20 items-center">
                <div className="col-auto">
                  <div className="destCard__image rounded-4">
                    <img className="size-100 rounded-4" src="img/cities/1/8.png" alt="image" />
                  </div>
                </div>

                <div className="col-auto">
                  <div className="text-18 fw-500">New Zealand</div>
                  <div className="text-14 lh-14 text-light-1 mt-5">4,090 properties</div>
                </div>
              </div>
            </a>
          </div>

        </div>
      </div>
    </section>

    <section className="layout-pt-md layout-pb-md">
      <div data-anim-wrap className="container">
        <div data-anim-child="slide-up" className="row y-gap-20 justify-between items-end">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Deals &amp; Discounts</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
            </div>
          </div>

          <div className="col-auto">

            <div className="d-flex x-gap-15 items-center ">
              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-left-hover js-deals-prev">
                  <i className="icon icon-arrow-left"></i>
                </button>
              </div>

              <div className="col-auto">
                <div className="pagination -dots text-border js-deals-pag"></div>
              </div>

              <div className="col-auto">
                <button className="d-flex items-center text-24 arrow-right-hover js-deals-next">
                  <i className="icon icon-arrow-right"></i>
                </button>
              </div>
            </div>

          </div>
        </div>

        <div className="row y-gap-30 pt-40">
          <div data-anim-child="slide-up delay-2" className="col-xl-5">

            <div className="ctaCard -type-1 rounded-4 ">
              <div className="ctaCard__image ratio ratio-63:55">
                <img className="img-ratio js-lazy" src="#" data-src="img/backgrounds/6.png" alt="image"/>
              </div>

              <div className="ctaCard__content py-50 px-50 lg:py-30 lg:px-30">

                <div className="text-15 fw-500 text-white mb-10">Enjoy Summer Deals</div>


                <h4 className="text-30 lg:text-24 text-white">Book Early to Save</h4>

                <div className="d-inline-block mt-30">
                  <a href="#" className="button px-48 py-15 -blue-1 -min-180 bg-white text-dark-1">Book Now</a>
                </div>
              </div>
            </div>

          </div>

          <div data-anim-child="slide-left delay-3" className="col-xl-7">
            <div className="relative overflow-hidden js-section-slider" data-gap="30" data-scrollbar data-slider-cols="xl-3 lg-3 md-2 sm-2 base-1" data-nav-prev="js-deals-prev" data-pagination="js-deals-pag" data-nav-next="js-deals-next">
              <div className="swiper-wrapper">

                <div className="swiper-slide">

                  <a href="tour-single.html" className="tourCard -type-1 rounded-4 ">
                    <div className="tourCard__image">

                      <div className="cardImage ratio ratio-1:1">
                        <div className="cardImage__content">

                          <img className="rounded-4 col-12" src="img/tours/1.png" alt="image"/>


                        </div>

                        <div className="cardImage__wishlist">
                          <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                            <i className="icon-heart text-12"></i>
                          </button>
                        </div>


                        <div className="cardImage__leftBadge">
                          <div className="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-dark-1 text-white">
                            LIKELY TO SELL OUT*
                          </div>
                        </div>

                      </div>

                    </div>

                    <div className="tourCard__content mt-10">
                      <div className="d-flex items-center lh-14 mb-5">
                        <div className="text-14 text-light-1">16+ hours</div>
                        <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                        <div className="text-14 text-light-1">Full-day Tours</div>
                      </div>

                      <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                        <span>Stonehenge, Windsor Castle and Bath with Pub Lunch in Lacock</span>
                      </h4>

                      <p className="text-light-1 lh-14 text-14 mt-5">Westminster Borough, London</p>

                      <div className="row justify-between items-center pt-15">
                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <div className="d-flex items-center x-gap-5">

                              <div className="icon-star text-yellow-1 text-10"></div>

                              <div className="icon-star text-yellow-1 text-10"></div>

                              <div className="icon-star text-yellow-1 text-10"></div>

                              <div className="icon-star text-yellow-1 text-10"></div>

                              <div className="icon-star text-yellow-1 text-10"></div>

                            </div>

                            <div className="text-14 text-light-1 ml-10">3,014 reviews</div>
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="text-14 text-light-1">
                            From
                            <span className="text-16 fw-500 text-dark-1">US$72</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                </div>

                <div className="swiper-slide">

                  <a href="tour-single.html" className="tourCard -type-1 rounded-4 ">
                    <div className="tourCard__image">

                      <div className="cardImage ratio ratio-1:1">
                        <div className="cardImage__content">


                          <div className="cardImage-slider rounded-4 overflow-hidden js-cardImage-slider">
                            <div className="swiper-wrapper">

                              <div className="swiper-slide">
                                <img className="col-12" src="img/tours/2.png" alt="image"/>
                              </div>

                              <div className="swiper-slide">
                                <img className="col-12" src="img/tours/1.png" alt="image"/>
                              </div>

                              <div className="swiper-slide">
                                <img className="col-12" src="img/tours/3.png" alt="image"/>
                              </div>

                            </div>

                            <div className="cardImage-slider__pagination js-pagination"></div>

                            <div className="cardImage-slider__nav -prev">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2 js-prev">
                                <i className="icon-chevron-left text-10"></i>
                              </button>
                            </div>

                            <div className="cardImage-slider__nav -next">
                              <button className="button -blue-1 bg-white size-30 rounded-full shadow-2 js-next">
                                <i className="icon-chevron-right text-10"></i>
                              </button>
                            </div>
                          </div>

                        </div>

                        <div className="cardImage__wishlist">
                          <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                            <i className="icon-heart text-12"></i>
                          </button>
                        </div>


                      </div>

                    </div>

                    <div className="tourCard__content mt-10">
                      <div className="d-flex items-center lh-14 mb-5">
                        <div className="text-14 text-light-1">9+ hours</div>
                        <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                        <div className="text-14 text-light-1">Attractions &amp; Museums</div>
                      </div>

                      <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                        <span>Westminster Walking Tour & Westminster Abbey Entry</span>
                      </h4>

                      <p className="text-light-1 lh-14 text-14 mt-5">Ciutat Vella, Barcelona</p>

                      <div className="row justify-between items-center pt-15">
                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <div className="d-flex items-center x-gap-5">

                              <div className="icon-star text-yellow-1 text-10"></div>

                              <div className="icon-star text-yellow-1 text-10"></div>

                              <div className="icon-star text-yellow-1 text-10"></div>

                              <div className="icon-star text-yellow-1 text-10"></div>

                              <div className="icon-star text-yellow-1 text-10"></div>

                            </div>

                            <div className="text-14 text-light-1 ml-10">3,014 reviews</div>
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="text-14 text-light-1">
                            From
                            <span className="text-16 fw-500 text-dark-1">US$72</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                </div>

                <div className="swiper-slide">

                  <a href="tour-single.html" className="tourCard -type-1 rounded-4 ">
                    <div className="tourCard__image">

                      <div className="cardImage ratio ratio-1:1">
                        <div className="cardImage__content">

                          <img className="rounded-4 col-12" src="img/tours/3.png" alt="image"/>


                        </div>

                        <div className="cardImage__wishlist">
                          <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                            <i className="icon-heart text-12"></i>
                          </button>
                        </div>


                        <div className="cardImage__leftBadge">
                          <div className="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-blue-1 text-white">
                            Best Seller
                          </div>
                        </div>

                      </div>

                    </div>

                    <div className="tourCard__content mt-10">
                      <div className="d-flex items-center lh-14 mb-5">
                        <div className="text-14 text-light-1">40–55 minutes</div>
                        <div className="size-3 bg-light-1 rounded-full ml-10 mr-10"></div>
                        <div className="text-14 text-light-1">Private and Luxury</div>
                      </div>

                      <h4 className="tourCard__title text-dark-1 text-18 lh-16 fw-500">
                        <span>High-Speed Thames River RIB Cruise in London</span>
                      </h4>

                      <p className="text-light-1 lh-14 text-14 mt-5">Manhattan, New York</p>

                      <div className="row justify-between items-center pt-15">
                        <div className="col-auto">
                          <div className="d-flex items-center">
                            <div className="d-flex items-center x-gap-5">

                              <div className="icon-star text-yellow-1 text-10"></div>

                              <div className="icon-star text-yellow-1 text-10"></div>

                              <div className="icon-star text-yellow-1 text-10"></div>

                              <div className="icon-star text-yellow-1 text-10"></div>

                              <div className="icon-star text-yellow-1 text-10"></div>

                            </div>

                            <div className="text-14 text-light-1 ml-10">3,014 reviews</div>
                          </div>
                        </div>

                        <div className="col-auto">
                          <div className="text-14 text-light-1">
                            From
                            <span className="text-16 fw-500 text-dark-1">US$72</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </a>

                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="layout-pt-md layout-pb-lg">
      <div className="container">
        <div className="row y-gap-15 justify-center text-center">

          <div className="col-xl-3 col-sm-6">
            <div className="text-40 lh-13 text-blue-1 fw-600">4,958</div>
            <div className="text-14 lh-14 text-light-1 mt-5">Destinations</div>
          </div>

          <div className="col-xl-3 col-sm-6">
            <div className="text-40 lh-13 text-blue-1 fw-600">2,869</div>
            <div className="text-14 lh-14 text-light-1 mt-5">Total Properties</div>
          </div>

          <div className="col-xl-3 col-sm-6">
            <div className="text-40 lh-13 text-blue-1 fw-600">2M</div>
            <div className="text-14 lh-14 text-light-1 mt-5">Happy customers</div>
          </div>

          <div className="col-xl-3 col-sm-6">
            <div className="text-40 lh-13 text-blue-1 fw-600">574,974</div>
            <div className="text-14 lh-14 text-light-1 mt-5">Our Volunteers</div>
          </div>

        </div>
      </div>
    </section>

    <section className="section-bg layout-pt-lg md:pt-0 md:pb-60 sm:pb-40 layout-pb-lg bg-blue-1-05">
      <div className="section-bg__item -right -image col-5 md:mb-60 sm:mb-40">
        <img src="img/backgrounds/5.png" alt="image"/>
      </div>

      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-md-7">
            <h2 className="text-30 fw-600">Why Choose Us</h2>
            <p className="mt-5">These popular destinations have a lot to offer</p>

            <div className="row y-gap-30 pt-60 md:pt-40">

              <div className="col-12">
                <div className="d-flex pr-30">
                  <img className="size-50" src="img/featureIcons/1/1.svg" alt="image"/>

                    <div className="ml-15">
                      <h4 className="text-18 fw-500">Best Price Guarantee</h4>
                      <p className="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex pr-30">
                  <img className="size-50" src="img/featureIcons/1/2.svg" alt="image"/>

                    <div className="ml-15">
                      <h4 className="text-18 fw-500">Easy & Quick Booking</h4>
                      <p className="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
              </div>

              <div className="col-12">
                <div className="d-flex pr-30">
                  <img className="size-50" src="img/featureIcons/1/3.svg" alt="image"/>

                    <div className="ml-15">
                      <h4 className="text-18 fw-500">Customer Care 24/7</h4>
                      <p className="text-15 mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="section-bg layout-pt-lg layout-pb-md">
      <div className="section-bg__item col-12">
        <img src="img/backgrounds/testimonials/bg.png" alt="image"/>
      </div>

      <div data-anim="slide-up delay-1" className="container">
        <div className="row justify-center text-center">
          <div className="col-auto">
            <div className="sectionTitle -md">
              <h2 className="sectionTitle__title">Customer Reviews</h2>
              <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
            </div>
          </div>
        </div>


        <div className="row justify-center pt-60 md:pt-30">
          <div className="col-xl-5 col-lg-8 col-md-11">
            <div className="overflow-hidden js-section-slider" data-slider-cols="base-1" data-gap="30" data-pagination="js-testimonials-pag">
              <div className="swiper-wrapper">

                <div className="swiper-slide">
                  <div className="testimonials -type-2 text-center">
                    <div className="testimonials__image mb-24 md:mb-20">
                      <img src="img/testimonials/2/quote.svg" alt="quote"/>
                        <img src="img/testimonials/2/1.png" alt="quote"/>
                        </div>

                        <h4 className="text-16 fw-500 text-blue-1">Hotel Equatorial Melaka</h4>
                        <div className="fw-500 text-dark-1 mt-20">"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. "</div>

                        <div className="testimonials__author mt-40">
                          <h5 className="text-15 lh-14 fw-500">Brooklyn Simmons</h5>
                          <div className="text-14 text-light-1 mt-5">Web Developer</div>
                        </div>
                    </div>
                  </div>

                  <div className="swiper-slide">
                    <div className="testimonials -type-2 text-center">
                      <div className="testimonials__image mb-24 md:mb-20">
                        <img src="img/testimonials/2/quote.svg" alt="quote"/>
                          <img src="img/testimonials/2/2.png" alt="quote"/>
                          </div>

                          <h4 className="text-16 fw-500 text-blue-1">Hotel Equatorial Melaka</h4>
                          <div className="fw-500 text-dark-1 mt-20">"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. "</div>

                          <div className="testimonials__author mt-40">
                            <h5 className="text-15 lh-14 fw-500">Brooklyn Simmons</h5>
                            <div className="text-14 text-light-1 mt-5">Web Developer</div>
                          </div>
                      </div>
                    </div>

                    <div className="swiper-slide">
                      <div className="testimonials -type-2 text-center">
                        <div className="testimonials__image mb-24 md:mb-20">
                          <img src="img/testimonials/2/quote.svg" alt="quote"/>
                            <img src="img/testimonials/2/3.png" alt="quote"/>
                            </div>

                            <h4 className="text-16 fw-500 text-blue-1">Hotel Equatorial Melaka</h4>
                            <div className="fw-500 text-dark-1 mt-20">"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. "</div>

                            <div className="testimonials__author mt-40">
                              <h5 className="text-15 lh-14 fw-500">Brooklyn Simmons</h5>
                              <div className="text-14 text-light-1 mt-5">Web Developer</div>
                            </div>
                        </div>
                      </div>

                      <div className="swiper-slide">
                        <div className="testimonials -type-2 text-center">
                          <div className="testimonials__image mb-24 md:mb-20">
                            <img src="img/testimonials/2/quote.svg" alt="quote"/>
                              <img src="img/testimonials/2/4.png" alt="quote"/>
                              </div>

                              <h4 className="text-16 fw-500 text-blue-1">Hotel Equatorial Melaka</h4>
                              <div className="fw-500 text-dark-1 mt-20">"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. "</div>

                              <div className="testimonials__author mt-40">
                                <h5 className="text-15 lh-14 fw-500">Brooklyn Simmons</h5>
                                <div className="text-14 text-light-1 mt-5">Web Developer</div>
                              </div>
                          </div>
                        </div>

                        <div className="swiper-slide">
                          <div className="testimonials -type-2 text-center">
                            <div className="testimonials__image mb-24 md:mb-20">
                              <img src="img/testimonials/2/quote.svg" alt="quote"/>
                                <img src="img/testimonials/2/5.png" alt="quote"/>
                                </div>

                                <h4 className="text-16 fw-500 text-blue-1">Hotel Equatorial Melaka</h4>
                                <div className="fw-500 text-dark-1 mt-20">"Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic. "</div>

                                <div className="testimonials__author mt-40">
                                  <h5 className="text-15 lh-14 fw-500">Brooklyn Simmons</h5>
                                  <div className="text-14 text-light-1 mt-5">Web Developer</div>
                                </div>
                            </div>
                          </div>

                        </div>


                        <div className="d-flex x-gap-15 items-center justify-center pt-40 sm:pt-20">
                          <div className="col-auto">
                            <button className="d-flex items-center text-24 arrow-left-hover js-prev">
                              <i className="icon icon-arrow-left"></i>
                            </button>
                          </div>

                          <div className="col-auto">
                            <div className="pagination -dots text-border js-testimonials-pag"></div>
                          </div>

                          <div className="col-auto">
                            <button className="d-flex items-center text-24 arrow-right-hover js-next">
                              <i className="icon icon-arrow-right"></i>
                            </button>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>

                </div>
              </section>

              <section className="layout-pt-lg layout-pb-md">
                <div className="container">
                  <div className="row justify-center text-center">
                    <div className="col-auto">
                      <div className="text-15 lh-1">Trusted by the world’s best</div>
                    </div>
                  </div>

                  <div className="row y-gap-40 justify-between items-center pt-60 lg:pt-40 sm:pt-20">

                    <div className="col-md-auto col-6">
                      <div className="d-flex justify-center">
                        <img src="img/clients/1.svg" alt="image"/>
                      </div>
                    </div>

                    <div className="col-md-auto col-6">
                      <div className="d-flex justify-center">
                        <img src="img/clients/2.svg" alt="image"/>
                      </div>
                    </div>

                    <div className="col-md-auto col-6">
                      <div className="d-flex justify-center">
                        <img src="img/clients/3.svg" alt="image"/>
                      </div>
                    </div>

                    <div className="col-md-auto col-6">
                      <div className="d-flex justify-center">
                        <img src="img/clients/4.svg" alt="image"/>
                      </div>
                    </div>

                    <div className="col-md-auto col-6">
                      <div className="d-flex justify-center">
                        <img src="img/clients/5.svg" alt="image"/>
                      </div>
                    </div>

                    <div className="col-md-auto col-6">
                      <div className="d-flex justify-center">
                        <img src="img/clients/6.svg" alt="image"/>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              <section className="layout-pt-md layout-pb-md">
                <div data-anim-wrap className="container">
                  <div data-anim="slide-up delay-1" className="row justify-center text-center">
                    <div className="col-auto">
                      <div className="sectionTitle -md">
                        <h2 className="sectionTitle__title">Get inspiration for your next trip</h2>
                        <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames</p>
                      </div>
                    </div>
                  </div>

                  <div className="row y-gap-30 pt-40 sm:pt-20">

                    <div data-anim="slide-up delay-3" className="col-lg-4 col-sm-6">

                      <a href="#" className="blogCard -type-1 d-block ">
                        <div className="blogCard__image">
                          <div className="ratio ratio-4:3 rounded-4 rounded-8">
                            <img className="img-ratio js-lazy" src="#" data-src="img/blog/1.png" alt="image"/>
                          </div>
                        </div>

                        <div className="mt-20">
                          <h4 className="text-dark-1 text-18 fw-500">10 European ski destinations you should visit this winter</h4>
                          <div className="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                        </div>
                      </a>

                    </div>

                    <div data-anim="slide-up delay-4" className="col-lg-4 col-sm-6">

                      <a href="#" className="blogCard -type-1 d-block ">
                        <div className="blogCard__image">
                          <div className="ratio ratio-4:3 rounded-4 rounded-8">
                            <img className="img-ratio js-lazy" src="#" data-src="img/blog/2.png" alt="image"/>
                          </div>
                        </div>

                        <div className="mt-20">
                          <h4 className="text-dark-1 text-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                          <div className="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                        </div>
                      </a>

                    </div>

                    <div data-anim="slide-up delay-5" className="col-lg-4 col-sm-6">

                      <a href="#" className="blogCard -type-1 d-block ">
                        <div className="blogCard__image">
                          <div className="ratio ratio-4:3 rounded-4 rounded-8">
                            <img className="img-ratio js-lazy" src="#" data-src="img/blog/3.png" alt="image"/>
                          </div>
                        </div>

                        <div className="mt-20">
                          <h4 className="text-dark-1 text-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                          <div className="text-light-1 text-15 lh-14 mt-5">April 06, 2022</div>
                        </div>
                      </a>

                    </div>

                  </div>
                </div>
              </section>

              <section className="layout-pt-md layout-pb-lg">
                <div className="container">
                  <div className="row y-gap-20 justify-between items-end">
                    <div className="col-auto">
                      <div className="sectionTitle -md">
                        <h2 className="sectionTitle__title">Not a Member Yet?</h2>
                        <p className="text-dark-1 sectionTitle__text mt-5 sm:mt-0">Join us! Our members can access savings of up to 50% and earn Trip Coins while booking.</p>
                      </div>
                    </div>

                    <div className="col-auto">
                      <div className="row x-gap-20 y-gap-20">
                        <div className="col-auto">
                          <button className="button px-40 h-60 -white bg-blue-1 text-white">
                            Sign In
                            <i className="icon-arrow-top-right ml-10"></i>
                          </button>
                        </div>

                        <div className="col-auto">
                          <button className="button px-40 h-60 -outline-blue-1 text-blue-1">
                            Register
                            <i className="icon-arrow-top-right ml-10"></i>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
  );
};

export default Home;

