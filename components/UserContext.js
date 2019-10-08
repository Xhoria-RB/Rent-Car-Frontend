/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/no-unused-state */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Router from 'next/router';
import Cookie from 'js-cookie';

const UserContext = React.createContext({});

class UserProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      loggedIn: false,
      inspection: ''
    };

    this.logIn = (data) => {
      this.setState({
        user: { ...data },
        loggedIn: true
      }, () => {
        Cookie.set('user', data);
        Router.push('/');
      });
    };

    this.logOut = () => {
      this.setState({
        user: null,
        loggedIn: false
      }, () => {
        Cookie.remove('user');
        Router.push('/');
      });
    };
  }

  render() {
    return (
      <UserContext.Provider value={{
        state: this.state, logIn: this.logIn, logOut: this.logOut
      }}
      >
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

UserProvider.propTypes = {
  children: PropTypes.node.isRequired
};

export default UserContext;
export { UserProvider };
