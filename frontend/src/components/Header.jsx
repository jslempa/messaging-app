const Header = (props) => {

    const isLoggedIn = props.isLoggedIn

    

    return (
        <div>
            {isLoggedIn ? <h2>Welcome!</h2> : <h2>Create Account</h2>}
            {isLoggedIn && (

        <div className="profile">
        <div className="image">
            {/* axios call for user's picture <img>picture</img> */}
        </div>
        <div className="contact-info">
             {/* axios call for user's email */}
        </div>
        <div className="bio">
            {/* axios call for user's bio <h4>bio</h4>*/}
        </div>
        <div className="following">
            {/* axios call for followers
             <h3>
                followers:
                following:
            </h3>   */}
        </div>
                </div>
            )}
        </div>
    )
}



export default Header