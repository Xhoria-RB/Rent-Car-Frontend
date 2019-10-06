import React from 'react';
import PropTypes from 'prop-types';
import {
  DropdownItem, NavItem, NavLink
} from 'reactstrap';

const NavItems = ({ url, title }) => (
  <>
    <DropdownItem>
      <NavItem>
        <NavLink href={url}>{title}</NavLink>
      </NavItem>
    </DropdownItem>
    <DropdownItem divider />
  </>
);

NavItems.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default NavItems;
