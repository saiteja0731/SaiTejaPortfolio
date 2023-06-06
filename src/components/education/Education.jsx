import React from 'react'
import './education.css'
import IMG1 from '../../assets/UC.jpeg'
import IMG2 from '../../assets/MREC.webp'

// DO NOT USE THE IMAGES IN PRODUCTION

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'University Of Cincinnati',
    major: 'Masters in Computer Science',
    year: 'Aug 2021 - Dec 2022',
    graduated: 'https://www.uc.edu/about/registrar/graduation/diplomas/cecredential/cecredential-validation.html'
  },
  {
    id: 2,
    image: IMG2,
    title: 'Malla Reddy Group Of Institution',
    major: 'Bachelors in Computer Science',
    year: 'Aug 2016 - May 2020',
    graduated: 'https://www.mallareddyuniversity.ac.in/'
  },
]


const Education = () => {
  return (
    <section id='education'>
      <h5>Where I Studied</h5>
      <h2>Education</h2>

      <div className="container education__container">
        {
          data.map(({id, image, title, major, year, graduated}) => {
            return (
              <article key={id} className='education__item'>
              <div className="education__item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <small className='text-light'>{major}</small><br></br>
              <small className='text-light'>{year}</small>
              <div className="education__item-cta">
                <a href={graduated} className='btn' target='_blank'>Graduated</a>
              </div>
            </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Education