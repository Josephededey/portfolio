import { TypeAnimation } from 'react-type-animation';
import dp from './assets/images/dp.jpg'

const Welcome = () => {
    return ( 
      <div id='home' className='intro'> 
        <div className='intro-head'>
          <div className='t1'>Hi, i am</div>
          <div className='t2'>
            <TypeAnimation
            sequence={[
              'Joseph Ededey',
              3500,
              'A Web Developer',
              3500,
              'A Web App Developer',
              3500,
              'A Mobile App Developer',
              3500,
              'A Game Developer',
              3500
            ]}
            wrapper='span'
            speed={30}
            repeat={Infinity}
            cursor={false}
            className='custom-writer'
            />
          </div>
          <div className='intro-about'>
            A Sotware Engineer with the motivation for crafting beautiful digital experiences, that merges creativity with technology. 
          </div>
          <div className='intro-about'>
            Specializing with modern web ecosystems and cross-platform software development.
          </div>
        </div>
        <div className='intro-anim'>
          <div className='int-anim-flex'>
            <div className='b1'></div>
            <div className='b2'></div>
            <div className='b3'></div>
          </div>
          <div className='b4'>
            <img src={dp} alt="my profile picture" />
          </div>
        </div>
      </div>
     );
}
 
export default Welcome;