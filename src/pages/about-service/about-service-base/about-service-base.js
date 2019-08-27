import React from 'react';
import SiteHeader from '../../../global/header/site-header';
import SiteContent from './site-content/site-content';

class AboutServiseBase extends React.Component {
  render() {
    return (
      <div className="page">
        <SiteHeader />
        <SiteContent />
      </div>
    );
  }
}

export default AboutServiseBase;
