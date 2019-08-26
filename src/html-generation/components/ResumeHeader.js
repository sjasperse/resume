import React from 'react';
import PropTypes from 'prop-types';
import './ResumeHeader.scss';

export default function ResumeHeader(props) {
  return (
    <header className="resume-header">
      <div className="clearfix">
        <h1 className="name">{props.name}</h1>
        <span className="email">{props.email}</span>
      </div>
      <div className="subtext">
        <a href={props.linkedInUrl} className="linkedIn">{props.linkedInUrl}</a>
        <a href={props.githubUrl} className="github">{props.githubUrl}</a>
      </div>
    </header>
  );
}

ResumeHeader.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  linkedInUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired
};
