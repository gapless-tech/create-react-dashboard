import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const { Footer: AntFooter } = Layout;

const Footer = function ({ footer }) {
  return <AntFooter style={{ textAlign: 'center' }}>{footer}</AntFooter>;
};

Footer.propTypes = {
  footer: PropTypes.string.isRequired,
};

export default Footer;
