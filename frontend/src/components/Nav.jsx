import { Link } from 'react-router-dom'

const Nav = (props) => {

    return (
        <div className="nav">
            <h2>This is nav</h2>

            <Link to="/">
            <h2> Home </h2>
            </Link>


        </div>
    )
}

export default Nav