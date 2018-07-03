import React from 'react';
import PropTypes from 'prop-types';
import toClassName from '../to-class-name';
import './Experience.scss';
import InlineList from './InlineList';

function field(type, name, value) {
  if (value) {
    return (
      <div className={`${type}-field`}>
        <label>{name}</label>
        <span className={`field-value field-value-${toClassName(name)}`}>{value}</span>
      </div>
    );
  } else { return null; }
}

function experienceField(name, value) {
  return field('experience', name, value);
}

function toList(ps) {
  if (ps) {
    return (<ul>{ps.map((x, i) => <li key={i}>{x}</li>)}</ul>);
  } else {
    return null;
  }
}

function Experience(props) {
  const experience = props.source;

  return (
    <div className="experience">
      <div className="experience-header">
        <div className="company">{experience.company}</div>
        &nbsp;&nbsp;
        <div className="location">{experience.location}</div>
        &nbsp;&nbsp;
        <div className="duration">{experience.started} - {experience.ended || '(ongoing)'}</div>
      </div>
      {experienceField('Description', experience.description)}
      {experienceField('Position', experience.contracted ? 'Contracted' : experience.position)}
      {experienceField('Tech Used', <InlineList>{experience.techUsed}</InlineList>)}
      {experienceField('Summary', toList(experience.summary))}
    </div>
  );
}

Experience.propTypes = {
  source: PropTypes.object.isRequired
};

module.exports = Experience;
