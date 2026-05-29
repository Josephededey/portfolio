import linkedin from "./assets/images/icons/linkedin.png";
import emailic from "./assets/images/icons/email.png";
import whatsapp from "./assets/images/icons/whatsapp.png";
import phone from "./assets/images/icons/phone.png";
import emailjs from '@emailjs/browser';
import { useState } from 'react'

const Contact = () => {
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [text,setText] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!name || !email || !text) {
            alert('Please fill in all fields before submitting the form.');
            return;
        }
        const template = { name, email, message: text };
        emailjs.send('service_draw4tw', 'template_2g2aozy', template, 'WEsZ4UzQbaiMNN9pg')
          .then((result) => {
              console.log(result.text);
              alert('Message sent successfully!');
              setName('');
              setEmail('');
              setText('');
          })
          .catch((error) => {
              console.log(error.text || error);
              alert('Failed to send message. Please try again later.');
          });
    }

    return ( 
        <div id="contact">
          <h2>Get In Touch</h2>
            <div className="context">Interested in hiring, working together or discussing a project? <br/>
            I'm available for freelance work, collaborations and development opportunities.
            </div>
            <div className="grid">
                <div className="part">
                    <div className="linkedin flex space">
                        <img src={linkedin} alt="linkedin" height={30} width={30} />
                        <div className="contact-txt">
                            <div className="sub-title">LikedIn Profile</div>
                            <a href="https://www.linkedin.com/in/joseph-ededey-b969612b1">https://www.linkedin.com/in/joseph-ededey-b969612b1</a>
                        </div>
                    </div>
                    <div className="email flex space">
                        <img src={emailic} alt="linkedin" height={30} width={30} />
                        <div className="contact-txt">
                            <div className="sub-title">Email</div>
                            <div>josephededey872@gmail.com</div>
                        </div>
                    </div>
                    <div className="whatsapp flex space">
                        <img src={whatsapp} alt="linkedin" height={30} width={30} />
                        <div className="contact-txt">
                            <div className="sub-title">WhatsApp</div>
                            <div>+2349046831394</div>
                        </div>
                    </div>
                    <div className="number flex space">
                        <img src={phone} alt="linkedin" height={30} width={30} />
                        <div className="contact-txt">
                            <div className="sub-title">Phone Number</div>
                            <div>+2349031511020</div>
                        </div>
                    </div>
                </div>
                <div className="part2">
                    <form onSubmit={handleSubmit}>
                        <div>
                            <input name='name' type="text" value={name} placeholder="Your Name" onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div>
                            <input name='email' type="email" value={email} placeholder="Your Email"  onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <textarea name='message' placeholder="Write Your Message..." rows={7} value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        </div>
                        <input type="submit" value="Send" />
                    </form>
                </div>
            </div>
        </div>
     );
}
 
export default Contact;