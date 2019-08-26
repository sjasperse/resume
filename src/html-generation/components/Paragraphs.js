import React from 'react';
import PropTypes from 'prop-types';

export default function Paragraphs(props) {
  const ps = props.children;
  if (ps && ps.length > 0) {
    return ps.map((x, i) => <p key={i}>{x}</p>);
  } else {
    return null;
  }
}

Paragraphs.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string)
};
