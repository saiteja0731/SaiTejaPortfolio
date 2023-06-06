import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/arun.png'
import AVTR2 from '../../assets/sahith.png'
import AVTR3 from '../../assets/revanth.png'
import AVTR4 from '../../assets/aditya.png'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';



const data = [
  {
    avatar: AVTR1,
    name: 'Arun',
    review: 'Teja has been an invaluable asset to our team as our go-to expert for Amazon S3. His deep understanding of the service and its associated AWS cloud tools has been instrumental in optimizing our storage infrastructure. Hiss on-call support has been exceptional, providing prompt and effective resolutions to critical issues, even during off-hours. His proficiency in AWS CloudFormation and AWS CLI has allowed us to automate and streamline our S3 deployments. Tejas strong technical skills, commitment to continuous improvement, and outstanding on-call support make his an indispensable member of our team.'
  },
  {
    avatar: AVTR2,
    name: 'Sahith',
    review: 'Teja has consistently demonstrated his expertise in Amazon S3 and the AWS cloud ecosystem. His on-call support has been exemplary, quickly responding to incidents and effectively troubleshooting issues to minimize downtime. Tejas in-depth knowledge of AWS CloudWatch and AWS CloudTrail has enabled us to implement comprehensive monitoring and auditing of our S3 buckets. His proactive approach in utilizing AWS CloudFormation and AWS Lambda for automation has improved our operational efficiency. Tejas dedication to his work, outstanding on-call contributions, and ability to leverage AWS cloud tools make him a highly valuable team member.'
  },
  {
    avatar: AVTR3,
    name: 'Revanth',
    review: 'Teja contributions to our Amazon S3 implementation have been exceptional. His on-call support has been outstanding, demonstrating a deep sense of responsibility and accountability. Tejas proficiency in AWS CloudFront and Amazon CloudWatch has allowed us to build a highly performant and monitored storage solution. His expertise in AWS Identity and Access Management (IAM) has strengthened our security posture. Additionally, Tejas excellent communication skills and ability to provide clear guidance and documentation have been invaluable. His commitment to delivering quality service and leveraging AWS cloud tools make his an invaluable member of our team.'
  },
  {
    avatar: AVTR4,
    name: 'Mohan Aditya',
    review: 'Teja has proven himself to be an outstanding Amazon S3 specialist, consistently delivering high-quality results. His on-call support has been exceptional, responding promptly to critical incidents and applying his expertise to resolve issues efficiently. Tejas extensive knowledge of AWS CloudFormation and AWS CloudTrail has enabled us to automate our S3 infrastructure and gain deep insights into data access and usage patterns. His proficiency in AWS SDKs and AWS Command Line Interface (CLI) has empowered our team to develop custom integrations and automate routine tejas technical proficiency, on-call dedication, and mastery of AWS cloud tools have made him an invaluable member of our organization'
  },
]


const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from Team</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container" 
      // install Swiper modules
      modules={[Pagination]} spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar}/>
              </div>
              <h5 className='client__name'>{name}</h5>
              <small className='client__review'>{review}</small>
            </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials