import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/S3.png'
import IMG2 from '../../assets/foodtruck.avif'
import IMG3 from '../../assets/cal.gif'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Amazon Simple Storage Service',
    github: 'https://github.com/saiteja0731',
    demo: 'https://docs.aws.amazon.com/AmazonS3/latest/userguide/example_s3_CreateBucket_section.html'
  },
  {
    id: 2,
    image: IMG2,
    title: 'SFO Food Truck App',
    github: 'https://github.com/saiteja0731/SFOFoodTruck.git',
    demo: 'https://dribbble.com'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Reward Calculator Web-API',
    github: 'https://github.com/saiteja0731/Reward-Calculator_Web-API.git',
    demo: 'https://dribbble.com'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                <a href={github} className='btn' target='_blank'>Github</a>
                <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio