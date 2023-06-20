import { Outlet, Link } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar';
import img2 from './images/Offer-im.png';
import img3 from './images/mybiz.png';
import img4 from './images/luckage.png';
import img5 from './images/Flight Booking, Cheap Flights , Air Ticket Booking at Lowest Airfare _ MakeMyTrip_files/in_v2.png';
import { RiArrowDownSLine } from 'react-icons/ri';
import './nav.css';


export default function Layout() {
    return (
        <>
            <div className="side-div">
                <Navbar.Brand href="#home">
                    <nav>
                        <ul>
                            <li>
                                <Link to="/offer">
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
                                </Link>
                            </li>
                            <li>
                                <Link to="/biz">
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
                                </Link>
                            </li>
                            <li>
                                <Link to="/luck">
                                    <div className='luck'>
                                        <img className='luckage' src={img4} alt="error" />
                                        <h6>My Trips
                                            <p>Manage your bookings</p>
                                        </h6>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link  to="/log">
                                    <div className='login'>
                                        <div className='my'><span className='mylogo'>my</span></div>
                                        <h7>Login or Create Account</h7>
                                        <div className='arow'><RiArrowDownSLine /></div>
                                    </div>
                                </Link>
                            </li>
                            <li>
                                <Link  to="/lan">
                                    <div className='language' >
                                        <img className='img5' width="20px" height="15px" src={img5} alt="error" />
                                        <p className='select'>IN
                                            <div className='v1'></div></p>
                                        <p className='selec'>ENG
                                            <div className='v2'></div></p>
                                        <p className='sele'>INR</p>
                                        <div className='d-arrow'><RiArrowDownSLine /></div>
                                    </div>
                                </Link>
                            </li>
                        </ul>
                    </nav>
                    <Outlet />
                </Navbar.Brand>
            </div>
        </>
    )
}