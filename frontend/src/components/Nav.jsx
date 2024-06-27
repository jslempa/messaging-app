import { Link } from 'react-router-dom'
import homeIcon from '../assets/images/Home.png'
import addPostIcon from '../assets/images/AddPost.png'
import Timeline from '../assets/images/Timeline.png'
import profile from '../assets/images/profile.png'

const Nav = ({ onOpenModal }) => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-item">
          <img src={homeIcon} alt='Home' />
          
        </div>
      </Link>
        <button onClick={onOpenModal} className="nav-item">
        <img src={addPostIcon} alt='Create Post' />
        
      </button>
      <Link to="/timeline">
        <div className="nav-item">
          <img src={Timeline} alt='Timeline' />
      
        </div>
      </Link>
      <Link to="/userprofile">
        <div className="nav-item">
        <img src={profile} alt='User Profile' />
        </div>
      </Link>
    </div>
  )
}

export default Nav
