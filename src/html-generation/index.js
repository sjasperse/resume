import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import data from '../resume-data.json';
import picture from '../picture.jpg';
import ResumeHeader from './components/ResumeHeader';
import Section from './components/Section';
import Paragraphs from './components/Paragraphs';
import InlineList from './components/InlineList';
import Experience from './components/Experience';

const resume = (
  <div>
    <ResumeHeader
      name={data.personalInfo.name}
      email={data.personalInfo.email}
      picture={picture}
      githubUrl={data.personalInfo.github}
      linkedInUrl={data.personalInfo.linkedIn}
    />

    <Section name="Summary">
      <Paragraphs>{data.summary}</Paragraphs>
    </Section>

    <Section name="Interested In">
      <InlineList>{data.interestedIn}</InlineList>
    </Section>

    <Section name="Experience">
      {data.experience.map((x, i) => <Experience key={i} source={x}></Experience>)}
    </Section>

    <Section name="References">
      <p>Available on request</p>
    </Section>

    <Section name="Meta">
      <small>Resume rendered via HTML/React/Webpack and available at <a href={data.resumeRepoUrl}>{data.resumeRepoUrl}</a> </small>
    </Section>
  </div>
);

ReactDOM.render(
  resume
  , document.getElementById('app'));
