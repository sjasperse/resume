import React from 'react';
import PropTypes from 'prop-types';
import './ResumeHeader.scss';

export default function ResumeHeader({ name, email, picture, linkedInUrl, githubUrl }) {
  return (
    <header className="resume-header clearfix">
      <img className="picture" src={picture} alt="Picture of me!" />
      <div className="details">
        <div className="">
          <h1 className="name">{name}</h1>
          <span className="email">{email}</span>
        </div>
        <div className="subtext">
          <a href={linkedInUrl} className="linkedIn">{linkedInUrl}</a>
          <a href={githubUrl} className="github">{githubUrl}</a>
        </div>
      </div>
    </header>
  );
}

ResumeHeader.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  linkedInUrl: PropTypes.string.isRequired,
  githubUrl: PropTypes.string.isRequired
};
