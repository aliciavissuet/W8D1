import React from 'react';
import { connect } from 'react-redux';
import Header from './header';
import { logout } from '../../actions/session_actions';

const mSTP = (state) => ({
  currentUser: state.entities.users[state.session.id]
})

const mDTP = (dispatch) => ({
  logout: () => dispatch(logout()),
})

const HeaderContainer = connect(mSTP, mDTP)(Header);

export default HeaderContainer;