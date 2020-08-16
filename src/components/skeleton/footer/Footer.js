import React from 'react';
import { Layout } from 'antd';
import PropTypes from 'prop-types';

const { Footer: AntFooter } = Layout;

const Footer = ({ footer }) => (
  <AntFooter style={{ textAlign: 'center' }}>{footer}</AntFooter>
);

Footer.propTypes = {
  footer: PropTypes.string.isRequired,
};

export default Footer;
