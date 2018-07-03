import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import data from './index.json';
import Section from './Section';

function toClassName(name) {
  return name.toLowerCase().replace(/\ /g, '-');
}

function field(type, name, value) {
  if (value) {
    return (
      <div className={`${type}-field`}>
        <label>{name}</label>
        <span className={`field-value field-value-${toClassName(name)}`}>{value}</span>
      </div>
    );
  }
  else { return null; }
}

function experienceField(name, value) {
  return field('experience', name, value);
}

function contractField(name, value) {
  return field('contract', name, value);
}

function toParagraphs(ps) {
  if (ps) {
    return ps.map((x,i) => <p key={i}>{x}</p>);
  } else {
    return null;
  }
}

function toInlineList(ps) {
  if (ps) {
    return (<ul className="inline-list">{ps.map((x,i) => <li key={i}>{x}</li>)}</ul>);
  } else {
    return null;
  }
}

function toList(ps) {
  if (ps) {
    return (<ul>{ps.map((x,i) => <li key={i}>{x}</li>)}</ul>);
  } else {
    return null;
  }
}

const resume = (
  <div>
    <header className="resume-header">
      <div className="clearfix">
        <h1 className="name">{data.personalInfo.name}</h1>
        <span className="email">{data.personalInfo.email}</span>
      </div>
      <div className="subtext">
        <a href={data.personalInfo.linkedIn} className="linkedIn">{data.personalInfo.linkedIn}</a>
        <a href={data.personalInfo.github} className="github">{data.personalInfo.github}</a>
      </div>
    </header>

    <Section name="Objective">
      <p>{data.objective}</p>
    </Section>

    <Section name="Summary">
      {toParagraphs(data.summary)}
    </Section>

    <Section name="Interested In">
      {toInlineList(data.interestedIn)}
    </Section>

    <Section name="Experience">
      {data.experience.map((experience,i) => (
      <div className="experience" key={i}>
        <div className="experience-header">
          <div className="company">{experience.company}</div>
          &nbsp;&nbsp;
          <div className="location">{experience.location}</div>
          &nbsp;&nbsp;
          <div className="duration">{experience.started} - {experience.ended || '(ongoing)'}</div>
        </div>
        {experienceField('Description', experience.description)}
        {experienceField('Position', experience.contracted ? 'Contracted' : experience.position)}
        {experienceField('Tech Used', toInlineList(experience.techUsed))}
        {experienceField('Summary', toList(experience.summary))}
      </div>
    ))}
    </Section>

    {data.references && (
      <Section name="References">
        <p>Available on request</p>
      </Section>
    )}

    <Section name="Meta">
      <small>Resume rendered via HTML/React/Webpack and available at <a href={data.resumeRepoUrl}>{data.resumeRepoUrl}</a> </small>
    </Section>
  </div>
);

ReactDOM.render(
  resume
  , document.getElementById('app'));