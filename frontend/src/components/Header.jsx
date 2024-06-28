import { Link } from 'react-router-dom'
import homeIcon from '../assets/images/Home.png'
import logo from '../assets/images/LU.png'
import addPostIcon from '../assets/images/AddPost.png'
import timelineIcon from '../assets/images/Timeline.png'
import profileIcon from '../assets/images/profile.png'


const Header = (props) => {
    return (
        <div className="header">
            <div className='header-left'>
                <img src={logo} alt='Link-Up logo' className='header-logo' />
            </div>
            <div className='header-center'>
            </div>
            <div className='header-right'>
                <Link to="/" className='header-icon'>
                    <img src={homeIcon} alt='Home' />
                </Link>
                <button onClick={props.onOpenModal} className="header-icon">
                    <img src={addPostIcon} alt='Create Post' />
                </button>
                {/* <Link to="/timeline" className='header-icon'>
                    <img src={timelineIcon} alt='Timeline' />
                </Link> */}
                <Link to="/userprofile" className='header-icon'>
                    <img src={profileIcon} alt='User Profile' />
                </Link>
            </div>
        </div>
    )
}
export default Header