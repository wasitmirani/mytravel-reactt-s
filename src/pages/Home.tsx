const Home: React.FC = () => {
    return (
        <>
            <section className="masthead -type-9">
                <div className="masthead-slider js-masthead-slider-9">
                    <div className="swiper-wrapper">

                        <div className="swiper-slide">
                            <div className="masthead__bg bg-dark-3">
                                <img src="img/masthead/9/bg.png" alt="image" />
                            </div>

                            <div className="container">
                                <div className="row justify-center">
                                    <div className="col-xl-9">
                                        <div className="text-center">
                                            <div className="text-white fw-500 uppercase mb-10">TOUR EXPERIENCE</div>
                                            <h1 className="text-80 lg:text-60 sm:text-40 text-white">Find The Best Cruise For You</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="masthead__bg bg-dark-3">
                                <img src="img/masthead/9/bg.png" alt="image" />
                            </div>

                            <div className="container">
                                <div className="row justify-center">
                                    <div className="col-xl-9">
                                        <div className="text-center">
                                            <div className="text-white fw-500 uppercase mb-10">TOUR EXPERIENCE</div>
                                            <h1 className="text-80 lg:text-60 sm:text-40 text-white">Find The Best Cruise  For You</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="swiper-slide">
                            <div className="masthead__bg bg-dark-3">
                                <img src="img/masthead/9/bg.png" alt="image" />
                            </div>

                            <div className="container">
                                <div className="row justify-center">
                                    <div className="col-xl-9">
                                        <div className="text-center">
                                            <div className="text-white fw-500 uppercase mb-10">TOUR EXPERIENCE</div>
                                            <h1 className="text-80 lg:text-60 sm:text-40 text-white">Find The Best Cruise For You</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="masthead-slider__nav -prev">
                        <button className="button py-10 js-prev">
                            <span className="h-1 w-48 bg-white"></span>
                        </button>
                    </div>

                    <div className="masthead-slider__nav -next">
                        <button className="button py-10 js-next">
                            <span className="h-1 w-48 bg-white"></span>
                        </button>
                    </div>
                </div>

                <a href="#secondSection" className="masthead__scroll">
                    <div className="d-flex items-center">
                        <div className="text-white lh-15 text-right mr-10">
                            <div className="fw-500">Scroll Down</div>
                            <div className="text-15">to discover more</div>
                        </div>

                        <div className="-icon">
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                </a>

                <div className="container">
                    <div className="mainSearch-wrap bg-white shadow-1">
                        <div className="mainSearch bg-white px-20 py-20 lg:px-20 lg:pt-5 lg:pb-20">
                            <div className="button-grid items-center">

                                <div className="searchMenu-loc pr-80 lg:py-20 lg:px-0 js-form-dd js-liverSearch">

                                    <div data-x-dd-click="searchMenu-loc">
                                        <h4 className="text-15 fw-500 ls-2 lh-16">Where to</h4>

                                        <div className="text-15 text-light-1 ls-2 lh-16">
                                            <input type="search" placeholder="All Destination" className="js-search js-dd-focus" />
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


                                <div className="px-35 lg:py-20 lg:px-0">
                                    <h4 className="text-15 fw-500 ls-2 lh-16">All Cruise Line</h4>
                                    <p className="text-15 ls-2 lh-16">Holland America Line</p>
                                </div>


                                <div className="searchMenu-guests px-35 lg:py-20 lg:px-0 js-form-dd js-form-counters">

                                    <div data-x-dd-click="searchMenu-guests">
                                        <h4 className="text-15 fw-500 ls-2 lh-16">Departure Month</h4>

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
                                    <button className="mainSearch__submit button -blue-1 py-15 px-35 h-60 col-12 rounded-4 bg-yellow-1 text-dark-1">
                                        <i className="icon-search text-20 mr-10"></i>
                                        Search
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout-pt-lg layout-pb-md relative z--1" id="secondSection">
                <div data-anim-wrap className="container">
                    <div data-anim-child="slide-up delay-1" className="row y-gap-20 justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Popular Destinations</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
                            </div>
                        </div>
                    </div>

                    <div className="row x-gap-10 y-gap-10 pt-40 sm:pt-20">

                        <div data-anim-child="slide-up delay-2" className="col-xl col-lg-3 col-6">
                            <a href="#" className="citiesCard -type-5 d-flex items-center sm:flex-column sm:items-start px-20 py-20 sm:px-15 sm:py-20 bg-light-2 rounded-4">
                                <i className="icon-destination text-24"></i>

                                <div className="ml-10 sm:ml-0 sm:mt-10">
                                    <h4 className="text-16 fw-500">New York</h4>
                                    <p className="text-14">4,090 properties</p>
                                </div>
                            </a>
                        </div>

                        <div data-anim-child="slide-up delay-3" className="col-xl col-lg-3 col-6">
                            <a href="#" className="citiesCard -type-5 d-flex items-center sm:flex-column sm:items-start px-20 py-20 sm:px-15 sm:py-20 bg-light-2 rounded-4">
                                <i className="icon-destination text-24"></i>

                                <div className="ml-10 sm:ml-0 sm:mt-10">
                                    <h4 className="text-16 fw-500">London</h4>
                                    <p className="text-14">4,090 properties</p>
                                </div>
                            </a>
                        </div>

                        <div data-anim-child="slide-up delay-4" className="col-xl col-lg-3 col-6">
                            <a href="#" className="citiesCard -type-5 d-flex items-center sm:flex-column sm:items-start px-20 py-20 sm:px-15 sm:py-20 bg-light-2 rounded-4">
                                <i className="icon-destination text-24"></i>

                                <div className="ml-10 sm:ml-0 sm:mt-10">
                                    <h4 className="text-16 fw-500">Los Angeles</h4>
                                    <p className="text-14">4,090 properties</p>
                                </div>
                            </a>
                        </div>

                        <div data-anim-child="slide-up delay-5" className="col-xl col-lg-3 col-6">
                            <a href="#" className="citiesCard -type-5 d-flex items-center sm:flex-column sm:items-start px-20 py-20 sm:px-15 sm:py-20 bg-light-2 rounded-4">
                                <i className="icon-destination text-24"></i>

                                <div className="ml-10 sm:ml-0 sm:mt-10">
                                    <h4 className="text-16 fw-500">Paris</h4>
                                    <p className="text-14">4,090 properties</p>
                                </div>
                            </a>
                        </div>

                        <div data-anim-child="slide-up delay-6" className="col-xl col-lg-3 col-6">
                            <a href="#" className="citiesCard -type-5 d-flex items-center sm:flex-column sm:items-start px-20 py-20 sm:px-15 sm:py-20 bg-light-2 rounded-4">
                                <i className="icon-destination text-24"></i>

                                <div className="ml-10 sm:ml-0 sm:mt-10">
                                    <h4 className="text-16 fw-500">Istanbul</h4>
                                    <p className="text-14">4,090 properties</p>
                                </div>
                            </a>
                        </div>

                        <div data-anim-child="slide-up delay-7" className="col-xl col-lg-3 col-6">
                            <a href="#" className="citiesCard -type-5 d-flex items-center sm:flex-column sm:items-start px-20 py-20 sm:px-15 sm:py-20 bg-light-2 rounded-4">
                                <i className="icon-destination text-24"></i>

                                <div className="ml-10 sm:ml-0 sm:mt-10">
                                    <h4 className="text-16 fw-500">Rome</h4>
                                    <p className="text-14">4,090 properties</p>
                                </div>
                            </a>
                        </div>

                        <div data-anim-child="slide-up delay-8" className="col-xl col-lg-3 col-6">
                            <a href="#" className="citiesCard -type-5 d-flex items-center sm:flex-column sm:items-start px-20 py-20 sm:px-15 sm:py-20 bg-light-2 rounded-4">
                                <i className="icon-destination text-24"></i>

                                <div className="ml-10 sm:ml-0 sm:mt-10">
                                    <h4 className="text-16 fw-500">Madrid</h4>
                                    <p className="text-14">4,090 properties</p>
                                </div>
                            </a>
                        </div>

                    </div>
                </div>
            </section>

            <section className="layout-pt-md layout-pb-lg">
                <div data-anim-wrap className="container">
                    <div data-anim-child="slide-up delay-1" className="row y-gap-20 justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Featured Cruise Deals</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
                            </div>
                        </div>
                    </div>

                    <div className="row y-gap-30 pt-40 sm:pt-20">

                        <div data-anim-child="slide-up delay-2" className="col-lg-3 col-sm-6">

                            <a href="cruise-single.html" className="cruiseCard -type-1 rounded-4 ">
                                <div className="cruiseCard__image">

                                    <div className="cardImage ratio ratio-6:5">
                                        <div className="cardImage__content">

                                            <img className="rounded-4 col-12" src="img/cruises/1.png" alt="image" />


                                        </div>

                                        <div className="cardImage__wishlist">
                                            <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                                <i className="icon-heart text-12"></i>
                                            </button>
                                        </div>


                                        <div className="cardImage__leftBadge">
                                            <div className="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-dark-1 text-white">
                                                Cruise only
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="cruiseCard__content mt-10">
                                    <div className="text-14 lh-14 text-light-1 mb-5">Norwegian Getawayy</div>

                                    <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                                        <span>7 Night Cruise to the Western Mediterranean</span>
                                    </h4>

                                    <p className="text-light-1 lh-14 text-14 mt-5"></p>

                                    <div className="row y-gap-10 justify-between items-center">

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Sailing Date</div>
                                            <div className="text-14 text-light-1">18/06/2022</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Departs</div>
                                            <div className="text-14 text-light-1">Southampton</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Ports (7)</div>
                                            <div className="text-14 text-light-1">Sete, Toulon...</div>
                                        </div>

                                    </div>

                                    <div className="row y-gap-20 justify-between items-center pt-5">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="icon-star text-yellow-1 text-10 mr-5"></div>

                                                <div className="text-14 text-light-1">
                                                    <span className="text-15 text-dark-1 fw-500">4.82</span>
                                                    94 reviews
                                                </div>
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

                        <div data-anim-child="slide-up delay-3" className="col-lg-3 col-sm-6">

                            <a href="cruise-single.html" className="cruiseCard -type-1 rounded-4 ">
                                <div className="cruiseCard__image">

                                    <div className="cardImage ratio ratio-6:5">
                                        <div className="cardImage__content">


                                            <div className="cardImage-slider rounded-4 overflow-hidden js-cardImage-slider">
                                                <div className="swiper-wrapper">

                                                    <div className="swiper-slide">
                                                        <img className="col-12" src="img/cruises/2.png" alt="image" />
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <img className="col-12" src="img/cruises/3.png" alt="image" />
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <img className="col-12" src="img/cruises/1.png" alt="image" />
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

                                <div className="cruiseCard__content mt-10">
                                    <div className="text-14 lh-14 text-light-1 mb-5">Norwegian Getaway</div>

                                    <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                                        <span>12 Night Cruise to the British Isles & Western Europe</span>
                                    </h4>

                                    <p className="text-light-1 lh-14 text-14 mt-5"></p>

                                    <div className="row y-gap-10 justify-between items-center">

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Sailing Date</div>
                                            <div className="text-14 text-light-1">18/06/2022</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Departs</div>
                                            <div className="text-14 text-light-1">Southampton</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Ports (7)</div>
                                            <div className="text-14 text-light-1">Sete, Toulon...</div>
                                        </div>

                                    </div>

                                    <div className="row y-gap-20 justify-between items-center pt-5">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="icon-star text-yellow-1 text-10 mr-5"></div>

                                                <div className="text-14 text-light-1">
                                                    <span className="text-15 text-dark-1 fw-500">4.82</span>
                                                    94 reviews
                                                </div>
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

                        <div data-anim-child="slide-up delay-4" className="col-lg-3 col-sm-6">

                            <a href="cruise-single.html" className="cruiseCard -type-1 rounded-4 ">
                                <div className="cruiseCard__image">

                                    <div className="cardImage ratio ratio-6:5">
                                        <div className="cardImage__content">

                                            <img className="rounded-4 col-12" src="img/cruises/3.png" alt="image" />


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

                                <div className="cruiseCard__content mt-10">
                                    <div className="text-14 lh-14 text-light-1 mb-5">Norwegian Getaway</div>

                                    <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                                        <span>11 Night Cruise to the Eastern Mediterranean</span>
                                    </h4>

                                    <p className="text-light-1 lh-14 text-14 mt-5"></p>

                                    <div className="row y-gap-10 justify-between items-center">

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Sailing Date</div>
                                            <div className="text-14 text-light-1">18/06/2022</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Departs</div>
                                            <div className="text-14 text-light-1">Southampton</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Ports (7)</div>
                                            <div className="text-14 text-light-1">Sete, Toulon...</div>
                                        </div>

                                    </div>

                                    <div className="row y-gap-20 justify-between items-center pt-5">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="icon-star text-yellow-1 text-10 mr-5"></div>

                                                <div className="text-14 text-light-1">
                                                    <span className="text-15 text-dark-1 fw-500">4.82</span>
                                                    94 reviews
                                                </div>
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

                        <div data-anim-child="slide-up delay-5" className="col-lg-3 col-sm-6">

                            <a href="cruise-single.html" className="cruiseCard -type-1 rounded-4 ">
                                <div className="cruiseCard__image">

                                    <div className="cardImage ratio ratio-6:5">
                                        <div className="cardImage__content">

                                            <img className="rounded-4 col-12" src="img/cruises/4.png" alt="image" />


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

                                <div className="cruiseCard__content mt-10">
                                    <div className="text-14 lh-14 text-light-1 mb-5">Norwegian Getawayy</div>

                                    <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                                        <span>13 Night Cruise to the Baltic Sea Western Europe</span>
                                    </h4>

                                    <p className="text-light-1 lh-14 text-14 mt-5"></p>

                                    <div className="row y-gap-10 justify-between items-center">

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Sailing Date</div>
                                            <div className="text-14 text-light-1">18/06/2022</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Departs</div>
                                            <div className="text-14 text-light-1">Southampton</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Ports (7)</div>
                                            <div className="text-14 text-light-1">Sete, Toulon...</div>
                                        </div>

                                    </div>

                                    <div className="row y-gap-20 justify-between items-center pt-5">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="icon-star text-yellow-1 text-10 mr-5"></div>

                                                <div className="text-14 text-light-1">
                                                    <span className="text-15 text-dark-1 fw-500">4.82</span>
                                                    94 reviews
                                                </div>
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
            </section>

            <section className="section-bg layout-pt-lg layout-pb-lg">
                <div className="section-bg__item -right -w-1165 bg-light-2"></div>

                <div className="section-bg__item -video-left">
                    <div className="row y-gap-30">
                        <div className="col-sm-6">
                            <img src="img/video/1.png" alt="image" />
                        </div>

                        <div className="col-sm-6">
                            <img src="img/video/2.png" alt="image" />
                        </div>
                    </div>
                </div>

                <div className="container lg:mt-30">
                    <div className="row">
                        <div className="offset-xl-6 col-xl-5 col-lg-6">
                            <h2 className="text-30 fw-600">GoTrip is a World Leading Cruise Booking Platform</h2>
                            <p className="text-dark-1 mt-40 lg:mt-20 sm:mt-15">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                            <div className="d-inline-block mt-40 lg:mt-30 sm:mt-20">

                                <a href="#" className="button -md -blue-1 bg-yellow-1 text-dark-1">
                                    Learn More <div className="icon-arrow-top-right ml-15"></div>
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout-pt-lg layout-pb-md">
                <div data-anim-wrap className="container">
                    <div data-anim-child="slide-up delay-1" className="row y-gap-30">
                        <div className="col-xl-4 col-lg-5">
                            <h2 className="text-30 fw-600">Why Choose Us</h2>
                            <p className="mt-5">These popular destinations have a lot to offer</p>

                            <p className="text-dark-1 mt-40 sm:mt-20">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>

                            <div className="d-inline-block mt-40 sm:mt-20">

                                <a href="#" className="button -md -blue-1 bg-yellow-1 text-dark-1">
                                    Learn More <div className="icon-arrow-top-right ml-15"></div>
                                </a>

                            </div>
                        </div>

                        <div className="col-xl-6 offset-xl-1 col-lg-7">
                            <div className="row y-gap-60">

                                <div data-anim-child="slide-up delay-3" className="col-sm-6">
                                    <img src="img/featureIcons/3/1.svg" alt="image" className="size-60" />
                                    <h5 className="text-18 fw-500 mt-10">Best Price Guarantee</h5>
                                    <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>

                                <div data-anim-child="slide-up delay-4" className="col-sm-6">
                                    <img src="img/featureIcons/3/2.svg" alt="image" className="size-60" />
                                    <h5 className="text-18 fw-500 mt-10">Best Price Guarantee</h5>
                                    <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>

                                <div data-anim-child="slide-up delay-5" className="col-sm-6">
                                    <img src="img/featureIcons/3/3.svg" alt="image" className="size-60" />
                                    <h5 className="text-18 fw-500 mt-10">Best Price Guarantee</h5>
                                    <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>

                                <div data-anim-child="slide-up delay-6" className="col-sm-6">
                                    <img src="img/featureIcons/3/4.svg" alt="image" className="size-60" />
                                    <h5 className="text-18 fw-500 mt-10">Best Price Guarantee</h5>
                                    <p className="mt-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout-pt-md layout-pb-lg">
                <div data-anim-wrap className="container">
                    <div data-anim-child="slide-up" className="row y-gap-20 justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Recommended Cruise</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames ac ante ipsum</p>
                            </div>
                        </div>
                    </div>

                    <div className="row y-gap-30 pt-40 sm:pt-20">

                        <div data-anim-child="slide-up delay-2" className="col-lg-4 col-sm-6">

                            <a href="cruise-single.html" className="cruiseCard -type-1 rounded-4 ">
                                <div className="cruiseCard__image">

                                    <div className="cardImage ratio ratio-6:5">
                                        <div className="cardImage__content">

                                            <img className="rounded-4 col-12" src="img/cruises/1.png" alt="image" />


                                        </div>

                                        <div className="cardImage__wishlist">
                                            <button className="button -blue-1 bg-white size-30 rounded-full shadow-2">
                                                <i className="icon-heart text-12"></i>
                                            </button>
                                        </div>


                                        <div className="cardImage__leftBadge">
                                            <div className="py-5 px-15 rounded-right-4 text-12 lh-16 fw-500 uppercase bg-dark-1 text-white">
                                                Cruise only
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div className="cruiseCard__content mt-10">
                                    <div className="text-14 lh-14 text-light-1 mb-5">Norwegian Getawayy</div>

                                    <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                                        <span>7 Night Cruise to the Western Mediterranean</span>
                                    </h4>

                                    <p className="text-light-1 lh-14 text-14 mt-5"></p>

                                    <div className="row y-gap-10 justify-between items-center">

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Sailing Date</div>
                                            <div className="text-14 text-light-1">18/06/2022</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Departs</div>
                                            <div className="text-14 text-light-1">Southampton</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Ports (7)</div>
                                            <div className="text-14 text-light-1">Sete, Toulon...</div>
                                        </div>

                                    </div>

                                    <div className="row y-gap-20 justify-between items-center pt-5">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="icon-star text-yellow-1 text-10 mr-5"></div>

                                                <div className="text-14 text-light-1">
                                                    <span className="text-15 text-dark-1 fw-500">4.82</span>
                                                    94 reviews
                                                </div>
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

                        <div data-anim-child="slide-up delay-3" className="col-lg-4 col-sm-6">

                            <a href="cruise-single.html" className="cruiseCard -type-1 rounded-4 ">
                                <div className="cruiseCard__image">

                                    <div className="cardImage ratio ratio-6:5">
                                        <div className="cardImage__content">


                                            <div className="cardImage-slider rounded-4 overflow-hidden js-cardImage-slider">
                                                <div className="swiper-wrapper">

                                                    <div className="swiper-slide">
                                                        <img className="col-12" src="img/cruises/2.png" alt="image" />
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <img className="col-12" src="img/cruises/3.png" alt="image" />
                                                    </div>

                                                    <div className="swiper-slide">
                                                        <img className="col-12" src="img/cruises/1.png" alt="image" />
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

                                <div className="cruiseCard__content mt-10">
                                    <div className="text-14 lh-14 text-light-1 mb-5">Norwegian Getaway</div>

                                    <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                                        <span>12 Night Cruise to the British Isles & Western Europe</span>
                                    </h4>

                                    <p className="text-light-1 lh-14 text-14 mt-5"></p>

                                    <div className="row y-gap-10 justify-between items-center">

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Sailing Date</div>
                                            <div className="text-14 text-light-1">18/06/2022</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Departs</div>
                                            <div className="text-14 text-light-1">Southampton</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Ports (7)</div>
                                            <div className="text-14 text-light-1">Sete, Toulon...</div>
                                        </div>

                                    </div>

                                    <div className="row y-gap-20 justify-between items-center pt-5">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="icon-star text-yellow-1 text-10 mr-5"></div>

                                                <div className="text-14 text-light-1">
                                                    <span className="text-15 text-dark-1 fw-500">4.82</span>
                                                    94 reviews
                                                </div>
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

                        <div data-anim-child="slide-up delay-4" className="col-lg-4 col-sm-6">

                            <a href="cruise-single.html" className="cruiseCard -type-1 rounded-4 ">
                                <div className="cruiseCard__image">

                                    <div className="cardImage ratio ratio-6:5">
                                        <div className="cardImage__content">

                                            <img className="rounded-4 col-12" src="img/cruises/3.png" alt="image" />


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

                                <div className="cruiseCard__content mt-10">
                                    <div className="text-14 lh-14 text-light-1 mb-5">Norwegian Getaway</div>

                                    <h4 className="cruiseCard__title text-dark-1 text-18 lh-16 fw-500">
                                        <span>11 Night Cruise to the Eastern Mediterranean</span>
                                    </h4>

                                    <p className="text-light-1 lh-14 text-14 mt-5"></p>

                                    <div className="row y-gap-10 justify-between items-center">

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Sailing Date</div>
                                            <div className="text-14 text-light-1">18/06/2022</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Departs</div>
                                            <div className="text-14 text-light-1">Southampton</div>
                                        </div>

                                        <div className="col-auto">
                                            <div className="text-14 text-dark-1 fw-500">Ports (7)</div>
                                            <div className="text-14 text-light-1">Sete, Toulon...</div>
                                        </div>

                                    </div>

                                    <div className="row y-gap-20 justify-between items-center pt-5">
                                        <div className="col-auto">
                                            <div className="d-flex items-center">
                                                <div className="icon-star text-yellow-1 text-10 mr-5"></div>

                                                <div className="text-14 text-light-1">
                                                    <span className="text-15 text-dark-1 fw-500">4.82</span>
                                                    94 reviews
                                                </div>
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
            </section>

            <section className="section-bg layout-pt-lg layout-pb-lg bg-light-2">
                <div className="section-bg__item col-12">
                    <img src="img/backgrounds/11.png" alt="image" />
                </div>

                <div className="container">
                    <div className="row justify-center pt-50 md:pt-30">
                        <div className="col-xl-7 col-lg-10">
                            <div className="overflow-hidden js-section-slider" data-pagination="js-testimonials-pag" data-slider-cols="base-1">
                                <div className="swiper-wrapper">

                                    <div className="swiper-slide">
                                        <div className="text-center">
                                            <div className="mb-40">
                                                <img src="img/misc/quote-2.svg" alt="quote" />
                                            </div>

                                            <div className="text-22 md:text-18 fw-600 text-white">
                                                "Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic."
                                            </div>

                                            <div className="text-white mt-40 sm:mt-30">
                                                <h5 className="text-15 lh-15 fw-500">Ali Tufan</h5>
                                                <div className="text-14">Product Manager, Apple Inc</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="text-center">
                                            <div className="mb-40">
                                                <img src="img/misc/quote-2.svg" alt="quote" />
                                            </div>

                                            <div className="text-22 md:text-18 fw-600 text-white">
                                                "Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic."
                                            </div>

                                            <div className="text-white mt-40 sm:mt-30">
                                                <h5 className="text-15 lh-15 fw-500">Ali Tufan</h5>
                                                <div className="text-14">Product Manager, Apple Inc</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="text-center">
                                            <div className="mb-40">
                                                <img src="img/misc/quote-2.svg" alt="quote" />
                                            </div>

                                            <div className="text-22 md:text-18 fw-600 text-white">
                                                "Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic."
                                            </div>

                                            <div className="text-white mt-40 sm:mt-30">
                                                <h5 className="text-15 lh-15 fw-500">Ali Tufan</h5>
                                                <div className="text-14">Product Manager, Apple Inc</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="text-center">
                                            <div className="mb-40">
                                                <img src="img/misc/quote-2.svg" alt="quote" />
                                            </div>

                                            <div className="text-22 md:text-18 fw-600 text-white">
                                                "Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic."
                                            </div>

                                            <div className="text-white mt-40 sm:mt-30">
                                                <h5 className="text-15 lh-15 fw-500">Ali Tufan</h5>
                                                <div className="text-14">Product Manager, Apple Inc</div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="swiper-slide">
                                        <div className="text-center">
                                            <div className="mb-40">
                                                <img src="img/misc/quote-2.svg" alt="quote" />
                                            </div>

                                            <div className="text-22 md:text-18 fw-600 text-white">
                                                "Our family was traveling via bullet train between cities in Japan with our luggage - the location for this hotel made that so easy. Agoda price was fantastic."
                                            </div>

                                            <div className="text-white mt-40 sm:mt-30">
                                                <h5 className="text-15 lh-15 fw-500">Ali Tufan</h5>
                                                <div className="text-14">Product Manager, Apple Inc</div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div className="pt-40 lg:pt-40 sm:pt-30">

                                    <div className="d-flex x-gap-15 items-center justify-center pt-30">
                                        <div className="col-auto">
                                            <button className="d-flex items-center text-24 arrow-left-hover text-white js-prev">
                                                <i className="icon icon-arrow-left"></i>
                                            </button>
                                        </div>

                                        <div className="col-auto">
                                            <div className="pagination -dots text-white-50 js-testimonials-pag"></div>
                                        </div>

                                        <div className="col-auto">
                                            <button className="d-flex items-center text-24 arrow-right-hover text-white js-next">
                                                <i className="icon icon-arrow-right"></i>
                                            </button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="layout-pt-lg layout-pb-lg">
                <div data-anim-wrap className="container">
                    <div data-anim-child="slide-up delay-1" className="row justify-center text-center">
                        <div className="col-auto">
                            <div className="sectionTitle -md">
                                <h2 className="sectionTitle__title">Get inspiration for your next trip</h2>
                                <p className=" sectionTitle__text mt-5 sm:mt-0">Interdum et malesuada fames</p>
                            </div>
                        </div>
                    </div>

                    <div className="row y-gap-30 pt-40">

                        <div data-anim-child="slide-up delay-2" className="col-lg-3 col-sm-6">

                            <a href="#" className="blogCard -type-2 d-block bg-white rounded-4 shadow-4">
                                <div className="blogCard__image">
                                    <div className="ratio ratio-1:1 rounded-4">
                                        <img className="img-ratio js-lazy" src="#" data-src="img/blog/1.png" alt="image" />
                                    </div>
                                </div>

                                <div className="px-20 py-20">
                                    <h4 className="text-dark-1 text-16 lh-18 fw-500">10 European ski destinations you should visit this winter</h4>
                                    <div className="text-light-1 text-15 lh-14 mt-10">April 06, 2022</div>
                                </div>
                            </a>

                        </div>

                        <div data-anim-child="slide-up delay-3" className="col-lg-3 col-sm-6">

                            <a href="#" className="blogCard -type-2 d-block bg-white rounded-4 shadow-4">
                                <div className="blogCard__image">
                                    <div className="ratio ratio-1:1 rounded-4">
                                        <img className="img-ratio js-lazy" src="#" data-src="img/blog/2.png" alt="image" />
                                    </div>
                                </div>

                                <div className="px-20 py-20">
                                    <h4 className="text-dark-1 text-16 lh-18 fw-500">Booking travel during Corona: good advice in an uncertain time</h4>
                                    <div className="text-light-1 text-15 lh-14 mt-10">April 06, 2022</div>
                                </div>
                            </a>

                        </div>

                        <div data-anim-child="slide-up delay-4" className="col-lg-3 col-sm-6">

                            <a href="#" className="blogCard -type-2 d-block bg-white rounded-4 shadow-4">
                                <div className="blogCard__image">
                                    <div className="ratio ratio-1:1 rounded-4">
                                        <img className="img-ratio js-lazy" src="#" data-src="img/blog/3.png" alt="image" />
                                    </div>
                                </div>

                                <div className="px-20 py-20">
                                    <h4 className="text-dark-1 text-16 lh-18 fw-500">Where can I go? 5 amazing countries that are open right now</h4>
                                    <div className="text-light-1 text-15 lh-14 mt-10">April 06, 2022</div>
                                </div>
                            </a>

                        </div>

                        <div data-anim-child="slide-up delay-5" className="col-lg-3 col-sm-6">

                            <a href="#" className="blogCard -type-2 d-block bg-white rounded-4 shadow-4">
                                <div className="blogCard__image">
                                    <div className="ratio ratio-1:1 rounded-4">
                                        <img className="img-ratio js-lazy" src="#" data-src="img/blog/4.png" alt="image" />
                                    </div>
                                </div>

                                <div className="px-20 py-20">
                                    <h4 className="text-dark-1 text-16 lh-18 fw-500">The best times & places to see the Northern Lights in Iceland</h4>
                                    <div className="text-light-1 text-15 lh-14 mt-10">April 06, 2022</div>
                                </div>
                            </a>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
};

export default Home;