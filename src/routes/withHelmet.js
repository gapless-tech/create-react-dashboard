import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const Head = ({ title = '' }) => (
  <Helmet>
    <link rel="shortcut icon" href="favicons/favicon-32x32.png" />
    <title>{title}</title>
  </Helmet>
);

const withHelmet = (Component) => {
  const routeComponent = ({ route, ...props }) => (
    <Fragment>
      <Head title={route.title} favicon={route.favicon} />
      <Component {...props} route={route} />
    </Fragment>
  );

  routeComponent.propTypes = {
    route: PropTypes.object,
  };

  return routeComponent;
};

withHelmet.propTypes = {
  Component: PropTypes.element,
};

export default withHelmet;
