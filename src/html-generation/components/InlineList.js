import React from 'react';
import PropTypes from 'prop-types';
import './InlineList.scss';

function InlineList(props) {
  const ps = props.children;

  if (ps) {
    return (<ul className="inline-list">{ps.map((x, i) => <li key={i}>{x}</li>)}</ul>);
  } else {
    return null;
  }
}

InlineList.propTypes = {
  children: PropTypes.arrayOf(PropTypes.string)
};

module.exports = InlineList;
