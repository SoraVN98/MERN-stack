import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const PrivateRouting = ({
  component: Component,
  auth: { isAuthenticated, loading },
}) => (isAuthenticated && !loading ? <Component /> : <Navigate to='/login' />);

PrivateRouting.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps)(PrivateRouting);
