import IsLoggedIn from './Login'
import IsLoggedOut from './Loggedout'

const Layout = (props) => {
    console.log(props)
    if (!props.isLoggedIn) {
        return <IsLoggedOut onLogin={props.onLogin} />
    } else {
        return <IsLoggedIn userName={props.userName} />
    }
}

export default Layout
