import Nav from './Nav'
import Home from './Home'
import TBD from './TBD'
import Header from './Header'

const Main = (props) => {

    return (
        <div className="main">
            <Header />
            <Nav/>
            <Home/>
        </div>
    )
}

export default Main