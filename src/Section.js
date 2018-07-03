import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';

function toClassName(name) {
  return name.toLowerCase().replace(/\ /g, '-');
}

function Section(props) {
  return (
    <section className={`section-${toClassName(props.name)}`}>
      <header>{props.name}</header>
      <div className="section-body">{props.children}</div>
    </section>
  );
}

Section.propTypes = {
  name: PropTypes.string
};

module.exports = Section;



