const About = () => {
    return ( 
      <div id='about'>
        <div className='col1'>
          <h2>About Me</h2>
          <div className='about-txt'>
            Discover my journey, skill and what drive to build high-performance digital solutions.
          </div>
          <div className="years-exp">
            <span className="year-int" > 5+</span> 
            <div>years <br/>
            Experience
            </div>
          </div>
        </div>
        <div className='about-txt2'>
          I am a versatile and self-taught software developer with experience in web development, web app, mobile apps, game development and also built MInecraft next gen addons.
          I'm skilled in building interactive applications using modern rameworks and tools. 
          <br/>
          <br/>
          I've optimized application performance and handled data flow between frontend and backend, and implemented clean UI components and improved user experience
          <br/>
          <br/>
          My process involves passion for understanding how systems work with a strong problem-solving mindset, and creating efficient, scalable solutions. Seeking remote opportunities to contribute to innovative development teams.
          <br></br>
          Created a simple box movement game where your box(player) has to avoid colliding with other boxes on a narrow path. I made use of screen interaction codes to detect which part of the mobile screen was tapped to control movement. Now I’ve upgraded the game from using a box to using an actual player and currently implementing parkour movements to the game to hence I named the game ‘CubeKour’. 
          <br/>
          <a href="#contact">Let's Talk</a>
          <br />

          
          <h4>My Skills</h4>
          <div className="skills">
            <div className="skill">HTML 5</div>
            <div className="skill">CSS</div>
            <div className="skill">JavaScript</div>
            <div className="skill">React</div>
            <div className="skill">React Native</div>
            <div className="skill">PHP</div>
            <div className="skill">SQL</div>
            <div className="skill">Python</div>
            <div className="skill">Django</div>
            <div className="skill">Postgresql</div>
            <div className="skill">Dart</div>
            <div className="skill">Flutter</div>
            <div className="skill">Firebase</div>
            <div className="skill">Java</div>
            <div className="skill">SpringBoot</div>
            <div className="skill">C#</div>
            <div className="skill">Unity 3d</div>
          </div>
        </div>
      </div>
     );
}
 
export default About;