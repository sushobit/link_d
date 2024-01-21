import {IoIosAdd, IoMdMail} from 'react-icons/io'
import {FaFacebookMessenger, FaTwitter} from 'react-icons/fa'

import './index.css'

const Sidebar = () => (
  <>
    <ul>
      <l1>
        <div className="list-item-0">
          <IoIosAdd />
          <p className="li-p-item">New flow</p>
        </div>
        <div className="list-item">
          <IoMdMail className="mail-icon" />
          <p className="li-p-item">
            Coffee? <span className="span-para">-Marisa Lu</span>
          </p>
        </div>
        <div className="list-item-1">
          <IoMdMail />
          <p className="li-p-item">
            Feedback <span className="span-para">- Lindsey Weiss</span>
          </p>
        </div>
        <div className="list-item-1">
          <IoMdMail />
          <p className="li-p-item">
            Post-grad plans <span className="span-para">Evelyn Ma</span>
          </p>
        </div>
        <div className="list-item-1">
          <IoMdMail />
          <p className="li-p-item">
            Launch plan <span className="span-para">- Dennis jin</span>
          </p>
        </div>
        <div className="list-item-2">
          <FaFacebookMessenger />
          <p className="li-p-item">Victoria Wang</p>
        </div>
        <div className="list-item-2">
          <FaFacebookMessenger />
          <p className="li-p-item">Advaid kalakkad</p>
        </div>
        <div className="list-item-2">
          <FaTwitter />
          <p className="li-p-item">Advaid kalakkad</p>
        </div>
      </l1>
    </ul>
  </>
)
export default Sidebar
