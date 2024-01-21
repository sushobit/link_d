import {IoMdMic, IoMdMail} from 'react-icons/io'
import {RiAppsLine} from 'react-icons/ri'
import {FaLocationArrow} from 'react-icons/fa'
import './index.css'

const Sliders = () => (
  <>
    <div className="slider-container">
      <div className="cont-1">
        <div className="header-container">
          <div className="Mail-con">
            <IoMdMail />
            <p className="li-p-item">
              Coffee? <span className="span-para-1">- Mail from Marisa Lu</span>
            </p>
          </div>
          <IoMdMic />
        </div>
        <div className="name-cont">
          <h3 className="h3">Marisa Lu</h3>
          <p className="p">Just Now</p>
        </div>
        <h2 className="p-2">Coffee ?</h2>
        <p className="p-3">Hey Json,</p>
        <p className="p-4">
          was wondering if you had be interested in meeting my team at Philz
          Coffee at 11.00 Am today. No pressure if you can't make it, althought
          i think you guys would really get along!
        </p>
        <p className="p-5">Marisa</p>
        <hr className="hr-line" />
        <div className="button-container">
          <p className="b-1">Reply</p>
          <p className="b-2">Forward</p>
          <p className="b-3">Delete</p>
        </div>
        <div className="bottom-container">
          <RiAppsLine className="app-icon" />
          <p className="p-6">More actions</p>
        </div>
      </div>
      <div className="cont-1">
        <div className="header-container">
          <p className="li-p-item">See my availability : today</p>
          <IoMdMic />
        </div>
        <div className="name-cont">
          <h3 className="h4">Available until 1 PM</h3>
        </div>
        <p className="p-3">
          Would you like to create an event for <br />
          Coffee with Marisa at 11 AM?
        </p>
        <div className="time-container">
          <div className="t-cont-1">
            <p className="t-1">9.41 AM</p>
            <li className="time-list">
              <p className="l-1">11 AM</p>
              <p className="l-1">1 PM</p>
              <p className="l-1">3 PM</p>
            </li>
          </div>
          <div className="t-cont-2">
            <hr className="t-hr-line" />
            <div className="t-coffee-cont">
              <p className="t-paragraph">
                Coffee with Marisa
                <span className="t-span-ele">Philz Coffee</span>
              </p>
            </div>
            <div className="t-meeting-cont">
              <p className="t-paragraph">
                Meeting with Danney Trinh
                <span className="t-span-ele">Mars Land</span>
              </p>
            </div>
          </div>
        </div>
        <hr className="hr-line" />
        <div className="button-container">
          <p className="b-4">Create Event</p>
          <p className="b-5">Edit Event</p>
          <p className="b-6">Full Calender</p>
          <p className="b-7">Dismiss</p>
        </div>
        <div className="bottom-container">
          <RiAppsLine className="app-icon" />
          <p className="p-6">More actions</p>
        </div>
      </div>
      <div className="cont-1">
        <div className="header-container">
          <div className="Mail-con">
            <p className="li-p-item">
              Philz Coffee{'  '}
              <span className="span-para-1">- Location</span>
            </p>
          </div>
          <IoMdMic />
        </div>
        <img
          src="https://www.kff.org/wp-content/themes/kaiser-foundation-2016/static/images/map-ca-office.png"
          alt="Coffee-pic"
          className="img"
        />
        <div className="location-cont">
          <h2>Philz Coffee</h2>
          <p className="l-p-1">Custom blended-java in casual setting </p>
          <p className="l-p-2">
            20686 Stevens Creek Blvd <br /> Cupertino, CA 95014
          </p>
        </div>
        <hr className="hr-line" />
        <div className="button-container">
          <div className="location-cont-1">
            <FaLocationArrow className="arrow-icon" />
            <div className="location-button">
              <p className="l-p-3">Get Directions</p>
              <p className="l-p-4">Required your location</p>
            </div>
          </div>
          <p className="b-2">See Details</p>
          <p className="b-8">Find more cafe's nearby</p>
        </div>
        <div className="bottom-container">
          <RiAppsLine className="app-icon" />
          <p className="p-6">More actions</p>
        </div>
      </div>
    </div>
  </>
)
export default Sliders
