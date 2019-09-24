import React from 'react';
import parseCookies from './parseCookies';

const withAuth = (C) => class AuthComponent extends React.Component {
  static getInitialProps({ req }) {
    const cookies = parseCookies(req);
    if (cookies && cookies.user) {
      return {
        userCookie: JSON.parse(cookies.user)
      };
    }
    return { userCookie: {} };
  }

  render() {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <C {...this.props} />;
  }
};

export default withAuth;
