import React from 'react';
import PropTypes from 'prop-types';
import './Section.scss';
import toClassName from '../to-class-name';

function Section(props) {
  return (
    <section className={`section-${toClassName(props.name)}`}>
      <header>{props.name}</header>
      <div className="section-body">{props.children}</div>
    </section>
  );
}

Section.propTypes = {
  name: PropTypes.string,
  children: PropTypes.any
};

module.exports = Section;
