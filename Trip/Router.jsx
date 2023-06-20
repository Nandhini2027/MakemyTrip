import './nav.css';
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
import { Outlet, Link } from "react-router-dom";
// import Navbar from 'react-bootstrap/Navbar';




export default function Router() {
    return (
        <>
            <div className='img-div'>
                <nav>
                    <ul>
                        <li>
                            <Link to="/flight">
                                <div className='flight'>
                                    <img className='flight-img1' src={img7} alt="error" />
                                    <p className='txt-1'>Flights</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/hotel">
                                <div className='flight1'>
                                    <img className='flight-img2' src={img8} alt="error" />
                        <p className='text-2'>Hotels</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/homestay">
                                <div className='flight2'>
                                    <img className='flight-img3' src={img9} alt="error" />
                        <p className='text-3'>Homestays</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/holiday">
                                <div className='flight3'>
                                    <img className='flight-img4' src={img10} alt="error" />
                        <p className='text-4'>Holiday Packages</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/train">
                                <div className='flight4'>
                                    <img className='flight-img5' src={img11} alt="error" />
                        <p className='text-5'>Trains</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/buses">
                                <div className='flight5'>
                                    <img className='flight-img6' src={img12} alt="error" />
                        <p className='text-6'>Buses</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/cab">
                                <div className='flight6'>
                                    <img className='flight-img7' src={img13} alt="error" />
                        <p className='text-7'>Cabs</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/forex">
                                <div className='flight7'>
                                    <img className='flight-img8' src={img14} alt="error" />
                        <p className='text-1'>Forex</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/charterflight">
                                <div className='flight8'>
                                    <img className='flight-img9' src={img15} alt="error" />
                        <p className='text-9'>Charter Flights</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to="/activities">
                                <div className='flight9'>
                                    <img className='flight-img10' src={img16} alt="error" />
                        <p className='text-10'>Activities</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <Outlet />
            </div>
        </>
    )
}