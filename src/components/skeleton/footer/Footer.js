import React from 'react';
import { Layout } from 'antd';

const { Footer: AntFooter } = Layout;

const Footer = ({ footer }) => (
    <AntFooter style={{ textAlign: 'center' }}>{footer}</AntFooter>
);

export default Footer;