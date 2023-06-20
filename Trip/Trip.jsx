import './nav.css';
import img1 from './images/mmtLogoWhite.png';
import img2 from './images/Offer-im.png';
import img3 from './images/mybiz.png';
import img4 from './images/luckage.png';
import img5 from './images/Flight Booking, Cheap Flights , Air Ticket Booking at Lowest Airfare _ MakeMyTrip_files/in_v2.png';
import { RiArrowDownSLine } from 'react-icons/ri';
import img7 from './images/Flight.jpg';
import img8 from './images/Hotel.jpg';
import img9 from './images/Home.jpg';
import img10 from './images/Holiday.jpg';
import img11 from './images/Train.jpg';
import img12 from './images/Bus.jpg';
import img13 from './images/Cap.jpg';
import img14 from './images/Forex.jpg';
import img15 from './images/charterflight.jpg';
import img16 from './images/Activities.jpeg';
import { CgChevronDoubleDown } from 'react-icons/cg';
import img17 from './images/Flight Booking, Cheap Flights , Air Ticket Booking at Lowest Airfare _ MakeMyTrip_files/icon-wheretogo-23062022.png';
import img18 from './images/Flight Booking, Cheap Flights , Air Ticket Booking at Lowest Airfare _ MakeMyTrip_files/trip-money-1.png';
import img19 from './images/Flight Booking, Cheap Flights , Air Ticket Booking at Lowest Airfare _ MakeMyTrip_files/dt_tert_flights.png';
import img20 from './images/Flight Booking, Cheap Flights , Air Ticket Booking at Lowest Airfare _ MakeMyTrip_files/mice icon - square.png';
import img21 from './images/Flight Booking, Cheap Flights , Air Ticket Booking at Lowest Airfare _ MakeMyTrip_files/gift card 1.png';
// import { BrowserRouter, Routes, Route} from "react-router-dom";
// import { Link } from 'react-router-dom';
// import Lay from './Layo';
// import Flight from "./Flight";
// import Hotel from './Hotel';



export default function Trip() {
    return (
        <>
            <div className="main">
                <div className='nav'>
                    <img className='my-trip-img' src={img1} alt="error" />
                    <div className='side-div'>
                        <div className='offer'>
                            <img className='offer-img' src={img2} alt="error" />
                            <p className='percentage'>%</p>
                            <h4><b>Super offers</b>
                                <p>Explore great deals & offers</p></h4>
                        </div>
                        <div className='dotted'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                        
                        <div className='mybiz'>
                            <img className='biz-img' src={img3} alt="error" />
                            <h5><b>Introducing myBiz</b>
                                <p>Business Travel Solution</p></h5>
                        </div>
                        <div className='dotted2'>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                            <span className='dot'></span>
                        </div>
                        <div className='luck'>
                            <img className='luckage' src={img4} alt="error" />
                            <h6>My Trips
                                <p>Manage your bookings</p>
                            </h6>
                        </div>
                        <div className='login'>
                            <div className='my'><span className='mylogo'>my</span></div>
                            <h7>Login or Create Account</h7>
                            <div className='arow'><RiArrowDownSLine /></div>
                        </div>
                        <div className='language' >
                            <img className='img5' width="20px" height="15px" src={img5} alt="error" />
                            <p className='select'>IN
                                <div className='v1'></div></p>
                            <p className='selec'>ENG
                                <div className='v2'></div></p>
                            <p className='sele'>INR</p>
                            <div className='d-arrow'><RiArrowDownSLine /></div>
                        </div>
                    </div>
                </div>
                <div className='main2'>
                    <div className='content'>
                        <div className='nav-div'>
                            <input className='rdn' type="radio" id="html" name="fav_language" value="HTML"></input>
                            <h8>One Way</h8>
                            <input className='btn' type="radio" id="html" name="fav_language" value="HTML"></input>
                            <h9>Round Trip</h9>
                            <input className='btn' type="radio" id="html" name="fav_language" value="HTML"></input>
                            <h9>Multi City</h9>
                            <h10>Book International and Domestic Flights</h10>
                        </div>
                        <div className='city-names'>
                            <div className='c1'>
                                <h11>From</h11>
                                <h2 className='delhi'><b>Delhi</b></h2>
                                <p className='parah'>DEL, Delhi Airport India </p>
                            </div>
                            <div className='c2'>
                                <h13>To</h13>
                                <h2 className='mumbai'><b> Mumbai</b></h2>
                                <h13>BOM, Chhatrapati Shivaji Internation</h13>
                            </div>
                            <div className='c3'>
                                <h16>Departure</h16>
                                <div className='arrow'><RiArrowDownSLine /></div><br />
                                <h14>29</h14>
                                <h15>May'23</h15>
                                <p className='date'>Monday</p>
                            </div>
                            <div className='c4'>
                                <h16>Return</h16>
                                <div className='arrow'><RiArrowDownSLine /></div><br />
                                <h14>31</h14>
                                <h15>May'23</h15>
                                <p className='date'>Wednesday</p>
                            </div>
                            <div className='c5'>
                                <h16>Travellers & Class</h16>
                                <div className='arrow'><RiArrowDownSLine /></div><br />
                                <h14>1</h14>
                                <h15>Traveller</h15>
                                <p className='economy'>Economy/premium Economy</p>
                            </div>
                        </div>
                        <div className='last-div'>
                            <div className='type1'>
                                <p className='type-name'>Select A Fare Type:</p>
                            </div>
                            <div className='type2'>
                                <input className='radio' type="radio" id="html" name="fav_language" value="HTML"></input>
                                <p className='radio-name'>Regular<br />Fares</p>
                            </div>
                            <div className='type3'>
                                <input className='radio' type="radio" id="html" name="fav_language" value="HTML"></input>
                                <p className='radio-name'>Armed Forces<br />Fares</p>
                            </div>
                            <div className='type4'>
                                <input className='radio' type="radio" id="html" name="fav_language" value="HTML"></input>
                                <p className='radio-name'>Student<br />Fares</p>
                            </div>
                            <div className='type5'>
                                <input className='radio' type="radio" id="html" name="fav_language" value="HTML"></input>
                                <p className='radio-name'>Senior Citizen<br />Fares</p>
                            </div>
                            <div className='type6'>
                                <input className='radio' type="radio" id="html" name="fav_language" value="HTML"></input>
                                <p className='radio-name'>Doctors & Nurses<br />Fares</p>
                            </div>
                            <div className='type7'>
                                <input className='radio' type="radio" id="html" name="fav_language" value="HTML"></input>
                                <p className='radio-name7'>Double Seat<br />Fares</p>
                            </div>
                        </div>
                        <button value='search' type='search'>SEARCH</button>
                        <div className='explore'>
                            <CgChevronDoubleDown />Explore More
                            <CgChevronDoubleDown /></div>
                    </div>
                </div>
                <div className='img-div'>
                    <div className='flight' onClick="function()">
                        <img className='flight-img1' src={img7} alt="error" />
                        <p className='text-1'>Flights</p>
                    </div>
                    <div className='flight1'>
                        <img className='flight-img2' src={img8} alt="error" />
                        <p className='text-2'>Hotels</p>
                    </div>
                    <div className='flight2'>
                        <img className='flight-img3' src={img9} alt="error" />
                        <p className='text-3'>Homestays</p>
                    </div>
                    <div className='flight3'>
                        <img className='flight-img4' src={img10} alt="error" />
                        <p className='text-4'>Holiday Packages</p>
                    </div>
                    <div className='flight4'>
                        <img className='flight-img5' src={img11} alt="error" />
                        <p className='text-1'>Trains</p>
                    </div>
                    <div className='flight5'>
                        <img className='flight-img6' src={img12} alt="error" />
                        <p className='text-6'>Buses</p>
                    </div>
                    <div className='flight6'>
                        <img className='flight-img7' src={img13} alt="error" />
                        <p className='text-7'>Cabs</p>
                    </div>
                    <div className='flight7'>
                        <img className='flight-img8' src={img14} alt="error" />
                        <p className='text-1'>Forex</p>
                    </div>
                    <div className='flight8'>
                        <img className='flight-img9' src={img15} alt="error" />
                        <p className='text-9'>Chartet Flights</p>
                    </div>
                    <div className='flight9'>
                        <img className='flight-img10' src={img16} alt="error" />
                        <p className='text-1'>Activities</p>
                    </div>
                </div>
            </div>
             <div className='end-div'>
                            <div className='travel1'>
                                <img className='where1' src={img17} alt="error" />
                                <p className='w-text1'>Where2Go</p>
                            </div>
                            <div className='travel2'>
                                <img className='where2' src={img18} alt="error" />
                                <p className='w-text2'>Trip Money</p>
                                {/* <p className='w-textb1'>Loan Credit and More</p> */}
                             </div>
                            <div className='travel3'>
                                <img className='where3' src={img19} alt="error" />
                                <p className='w-text3'>Explore Internationals Flights</p>
                                {/* <p className='w-textb2'>Cheapest Flights to Paris, Bali, Tokyo & more</p> */}
                             </div>
                            <div className='travel4'>
                                <img className='where4' src={img20} alt="error" />
                                <p className='w-text4'>Mice</p>
                                {/* <p className='w-textb3'>Offsites, Events & Meetings</p> */}
                             </div>
                            <div className='travel5'>
                                <img className='where5' src={img21} alt="error" />
                                <p className='w-text5'>Gift Cards</p>
                            </div>
                        </div> 
            <div className='main3'>
                <div className='offerstool'>
                    <div className='offerss'></div>
                </div>
            </div>
        </>
    )
}
