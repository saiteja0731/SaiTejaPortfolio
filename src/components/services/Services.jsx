import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Where I worked</h5>
      <h2>My Work Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Amazon Web Services</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Experience with AWS S3 services creating buckets, configuring buckets with permissions, logging, versioning, and tagging.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Designed, developed, and tested an intelligent, thoughtful, and continuously running sweeper program to reduce the amount of data stored in Amazon S3.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Managing cloud services, cloud Watch metrics and DynamoDB tables.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Analysis of Amazon's storage solutions: S3, S3 Standard IA, S3 Reduced Redundancy to further drastically reduce the team's costs.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Work in an agile environment to deliver high-quality software.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Involved in unit testing of various modules by generating test cases using Junit, Mockito, Google Guice Module Testing and Karma.</p>
            </li>
          </ul>
        </article>
        {/* END OF Amazon Web Services */}
        <article className="service">
          <div className="service__head">
            <h3>Edikio System Integrators</h3>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Used Hibernate annotations for Object Relational Mapping (ORM) with Oracle database</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Involved in various phases of Software Development Life Cycle (SDLC) of the application like Requirement gathering, Design, Analysis, Code development and estimating the timeline for the stories and project.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Worked on GIT as a version control. Utilized NPM scripts for build and test environments in a Node.js application.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Design and develop and test HTML5, CSS3, Bootstrap, JavaScript, jQuery and Angular.js that meets accessibility and web browser standards for website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Expertise worked on continuous build integration (CI/CD) tools Jenkins.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Implemented RESTful web services which produces both XML and JSON files to perform tasks, RESTful web service using Jersey for JAX-RS implementation, which leveraged both web and mobile applications.</p>
            </li>
          </ul>
        </article>
        {/* End Of Edikio System Integrators */}
        <article className="service">
          <div className="service__head">
            <h3>Internships</h3>
            <small className='text-light'>VN Career Solutions</small><br></br>
            <small className='text-light'>Lasya Infotech</small>
          </div>

          <ul className='service__list'>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Identifying the threats in the account by manual reading of the entire timeline of the account holders</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>I have done so many analyses like Twitter data analysis, Pokémon go data analysis using different methods in data science</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Developed bulk digital benefit purchase and management functionality which is now publicly known as buy for others feature on amazon retail website.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Successfully executed a large-scale database migration from SQL to NoSQL for a live digital gifting application, ensuring zero downtime during the transition.</p>
            </li>
            <li>
              <BiCheck className='service__list-icon' />
              <p>Prepared a Design documentation on Project Analysis.</p>
            </li>
          </ul>
        </article>
        {/* END OF InternShips */}
      </div>
    </section>
  )
}

export default Services