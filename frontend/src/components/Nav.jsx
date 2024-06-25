import { Link } from 'react-router-dom'

const Nav = ({ onOpenModal }) => {
  return (
    <div className="nav">
      <h2>This is nav</h2>
      <div>
        <Link to="/">Home</Link>
        <button onClick={onOpenModal}>Create Post</button>
      </div>
    </div>
  )
}

export default Nav
