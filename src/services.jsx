import webdev from './assets/icons/webdev-icon.png'
import webapp from './assets/icons/webapp-icon.png'
import mobileapp from './assets/icons/mobile-app-icon.png'
import software from './assets/icons/software-icon.png'
import gamedev from './assets/icons/gamedev-icon.png'
const MyServices = () => {
    return ( 
      <div id='services'>
          <h2>My Services</h2>
          <div className='services-container'>
            <div className='grid'>
              <div className="service">
                <img src={webdev} alt="web development" width={30}/>
                <div className='title'>Web Development</div>
                <div className='text'>Fsat, responsive websites built for modern devices and performance.<br/>
                Includes clean frontend interfaces and solid backend systems for full functionality.</div>
              </div>
              <div className="service">
                <img src={webapp} alt="web app development" width={30}/>
                <div className='title'>Web App Development</div>
                <div className='text'>Interactive web applications with smooth UI and powerful backend systems.<br/>
                Built for dashboards, platforms, and scalable online tools.</div>
              </div>
              <div className="service">
                <img src={mobileapp} alt="mobile app development" width={30}/>
                <div className='title'>Mobile App Development</div>
                <div className='text'>Cross-platform monile apps for Android and iOS with clean, intuitive design, and reliable backend systems.<br/>
                Focused on performance, usability, and real-world functionality.</div>
              </div>  
            </div>
            <div className='grid mt2'>
              <div className="service">
                <img src={software} alt="software development" width={30}/>
                <div className='title'>Software Development</div>
                <div className='text'>Custom software solutions tailored to your business needs with integrated backend architectures.<br/>
                  Built for automation and, efficiency, and long-term scalability.
                </div>
              </div>
              <div className="service">
                <img src={gamedev} alt="game development" width={30}/>
                <div className='title'>Game Development</div>
                <div className='text'>Engaging 2d/3d games with smooth mechanics and interactive gameplay.<br/>
                Designed to deliver fun, performance, and immersive user experience.</div>
              </div>
            </div>
          </div>
      </div>
     );
}
 
export default MyServices;