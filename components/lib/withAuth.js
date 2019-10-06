import React from 'react';
import isEmpty from 'lodash/isEmpty';
import get from 'lodash/get';
import parseCookies from './parseCookies';
import AuthenticationError from '../AuthenticationError';
import AccountPending from '../AccountPending';

const PENDING_ROLE = 'Pending';

const withAuth = (C, isIndex = false) => class AuthComponent extends React.Component {
  constructor(props) {
    super(props);
    this.userCookie = props.userCookie;
  }

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
    if (isEmpty(this.userCookie) && !isIndex) {
      return <AuthenticationError />;
    }
    if (get(this.userCookie, 'role') === PENDING_ROLE && !isIndex) {
      // eslint-disable-next-line jsx-a11y/accessible-emoji
      return <AccountPending />;
    }
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <C {...this.props} />;
  }
};

export default withAuth;
