import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

const withHelmet = (Component) => {
  const routeComponent = ({ route, ...props }) => (
    <>
      <Helmet>
        <link
          rel="shortcut icon"
          href={route.title || 'favicons/favicon-32x32.png'}
        />
        <title>{route.title}</title>
      </Helmet>
      <Component {...props} route={route} />
    </>
  );

  routeComponent.propTypes = {
    route: PropTypes.shape({
      title: PropTypes.string.isRequired,
      favicon: PropTypes.string,
    }).isRequired,
  };

  return routeComponent;
};

export default withHelmet;
