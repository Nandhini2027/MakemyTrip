// import { Link } from "react-router-dom";
import row1 from './images/Cafe/page-1_img03.jpg';
import row2 from './images/Cafe/page-1_img04.jpg';
import row3 from './images/Cafe/page-1_img05.jpg';
import cen1 from './images/Cafe/page-1_img06.jpg';
import cen2 from './images/Cafe/page-1_img07.jpg';
import cen3 from './images/Cafe/page-1_img08.jpg';
import col1 from './images/Cafe/page-1_img09.jpg';
import col2 from './images/Cafe/page-1_img10.jpg';
import col3 from './images/Cafe/page-1_img11.jpg';


export default function Cuision() {
  return (
        <>
      <div>
        <h1>Our</h1>
        <h4>Cuision</h4>
      </div>
      <div className='imbanner'>
        <div className='column1'>
          <img className='drp-dw' width="100%" src={row1} alt='temp'></img>
          <div className='drop'> Lorem Blandit Integer convallis orci vel
            mi nellore, at ornare lorem consequat. Phasellus era nisl</div>
          <img className='img' width="100%" src={row2} alt='temp'></img>
          <img className='img' width="100%" height="375px" src={row3} alt='temp'></img>
        </div>
        <div className='centercolumn'>
          <div className='column2'>
            <img className='img' width="100%" src={cen1} alt='temp'></img>
            <img className='img' width="100%" src={cen2} alt='temp'></img>
            <img className='img' width="100%" height="470px" src={cen3} alt='temp'></img>
          </div>
          <div className='column3'>
            <img className='img' width="100%" src={col1} alt='temp'></img>
            <img className='img' width="100%" src={col2} alt='temp'></img>
            <img className='img' width="100%" height="384px" src={col3} alt='temp'></img>
          </div>
        </div>
      </div>
      </>
      );
}
