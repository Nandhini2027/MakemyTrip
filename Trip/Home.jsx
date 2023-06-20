import img from './images/Cafe/slide01.jpg';
import im from './images/Cafe/page-1_img01.jpg';
import im2 from './images/Cafe/page-1_img02.jpg';
// import './App.css';

export default function Home() {
    return (
      <>
              <div className="main">
        <img className='img' src={img} width="100%" alt='temp'></img>
        </div>
        <div>
            <h1>Welcome</h1>
            <h3>to Our Place</h3>
            </div>
            <div className='banner'>
                <div className='center'>
                    <img className='img1' src={im} alt='temp'></img>
                    <img className='img2' src={im2} alt='temp'></img>
                </div>
            </div>
            <div className='words'>
                <p className='para1'>Integer convallis orci vel mi 
                nelaoreet, at ornare lorem consequat. Phasellus 
                era nisl auctor vel veliterol. sed,pharetra venenatis nulla.
                Vestibulum volutpat turpis ut massa commodo, quis aliquam
                 massa facilisis.Integer convallis orci vel mi nelaoreet,
                 at ornare lorem consequat. Phasellus era nisl auctor vel 
                 veliterol. sed,pharetra venenatis nulla.</p>

                <p className='para2' >Integer convallis orci vel mi nelaoreet,
                at ornare lorem consequat. Phasellus era nisl auctor vel 
                veliterol. sed,pharetra venenatis nulla. Vestibulum volutpat 
                turpis ut massa commodo, quis aliquam massa facilisis.Integer 
                convallis orci vel mi nelaoreet, at ornare lorem consequat.
                Phasellus era nisl auctor vel veliterol. sed,pharetra venenatis nulla.</p>
            </div>

      </>
    );
  }
  
