import React from "react";
import PropTypes from "prop-types";
import { Route, Redirect } from "react-router-dom";

import { store } from "../store/index";

import AuthLayout from "../pages/_layouts/auth";
import DefaultLayout from "../pages/_layouts/default";

export default function RouterWrapper({
  component: Component,
  isPrivate = false,
  ...rest
}) {
  const { signed, user } = store.getState().auth;
  console.log(signed, user);

  if (!signed && isPrivate) {
    return <Redirect to="/" />;
  }

  if (signed && !isPrivate) {
    return <Redirect to="/professionals" />;
  }

  const Layout = signed ? DefaultLayout : AuthLayout;

  return (
    <Route
      {...rest}
      render={(props) => (
        <Layout>
          <Component {...props} />
        </Layout>
      )}
    />
  );
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
};
