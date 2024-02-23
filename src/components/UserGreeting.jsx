import PropTypes from 'prop-types';

function UserGreeting(props) {
    const wellcomeMessage = <h2 className="wellcome-message">Wellcome {props.username}</h2>;
    const loginPrompt = <h2 className="login-prompt">Please log in to continue</h2>;
    return( props.isLoggedIn ? wellcomeMessage : loginPrompt);
}
UserGreeting.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}
UserGreeting.defaultProps = {
    username: 'Khiem',
    isLoggedIn: false,
}

export default UserGreeting;