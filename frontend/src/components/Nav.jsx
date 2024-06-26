import { Link } from 'react-router-dom'
import homeIcon from '../assets/images/Home.png'
import addPostIcon from '../assets/images/AddPost.png'

const Nav = ({ onOpenModal }) => {
  return (
    <div className="nav">
      <Link to="/">
        <div className="nav-item">
          <img src={homeIcon} alt='Home' />
          <span>Home</span>
        </div>
      </Link>
      <button onClick={onOpenModal} className="nav-item">
        <img src={addPostIcon} alt='Create Post' />
        <span>Add Post</span>
      </button>
      <Link to="/timeline">
        <div className="nav-item">
          <img src={addPostIcon} alt='Timeline' />
          <span>Timeline</span>
        </div>
      </Link>
    </div>
  )
}

export default Nav
