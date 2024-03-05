import logo from './logo.svg';
import './Contact.css';
function Contact() {
    return (<div className="Contact">
        <div className="upperLine">
            < p className="blackTxt"><span className="ashTxt">Home /</span> Contact</p>
        </div>
        <div className="middleArea">
            <div className="leftPart">
                <div className="boldTxt">Call To Us</div>
                <div>We are available 24/7,7days a week</div>
                <div>Phone:+8801678814708</div>
                <hr></hr>
                <div className="boldTxt">Write To US</div>
                <div>Fill out our form and we will contact <br></br>you within 24 hours.</div>
                <div>Emails: customer@exclusive.com</div>
                <div>Emails: support@exclusive.com</div>


            </div>
            <div className="rightPart">
                <div className="threeField">
                    <input className="box" type="text" placeholder='Your Name' required />
                    <input className="box3" type="text" placeholder='Your Email' required />
                    <input className="box" type="text" placeholder='Your Phone' required />
                </div>
                <div>
                <input className="box1" type="text" placeholder='Your Massage' required />
                </div>
                <div className="redBtnDiv">
                    <button className="redbtn">Send Massage</button>
                </div>

            </div>
        </div>
    </div>
    );

}
export default Contact;