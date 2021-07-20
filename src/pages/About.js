import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';

import AboutImg from '../assets/images/Me.jpeg';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';
import GitHubIcon from '@material-ui/icons/GitHub';


const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Smit Parikh</span>
              </p>
              <h2 className="about__heading">A FrontEnd Developer</h2>
              <div className="about__info">
                <PText>
                  I am from Pune, Maharashtra. I am orginally from Gujarat.
                  Since my childhood, i love to do something in computer field and later on in college
                  i started to learn about website developing. I always
                  try to find some project where i can learn new things.
                  <br /> <br />
                  I started coding from first year of my college. I love it and now 
                  I have the opportunity to design along with the coding. I find it 
                  really interesting and I enjoyed the process a lot.
                  <br />
                  <br />
                  I always try to learn new things through learing different project on youtube.
                  And also I want to do something that can help people through my knowledege.
                  You can find my projects link in my github 
                  <br/>
                  <br/>
                  
                    
                  
                </PText>
              </div>
              
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="School"
                items={['Citizen School, Surat, Gujarat']}
              />
              <AboutInfoItem
                title="Collage"
                items={['MIT ADT University, Pune']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem
                title="FrontEnd"
                items={['HTML', 'CSS', 'JavaScript', 'REACT']}
              />
              <AboutInfoItem
                title="BackEnd"
                items={['Node', 'Express', 'SQL']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Experiences</h1>

              <AboutInfoItem
                title="2019-2019"
                items={['Student Intern at Aalborg University, Denmark']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Achievements</h1>
              <br/>
              <br/>
              <AboutInfoItem
                title="2021"
                items={['Control Desktop Applications with a Simple Webcam and Gesture Recognition using DL in International Journal of Innovative Science and Research Technology']}
              />
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <AboutInfoItem
                title="2021"
                items={['Human-Computer Interaction Using Dynamic Hand Gesture Recognition To Conveniently Control The System in International Journal of Engineering Applied Sciences and Technology']}
              />
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <AboutInfoItem
                title="2020"
                items={['A Survey on Security System using Machine Learning and Deep Learning in publication descriptionInternational Journal of Innovative Science and Research Technology']}
              />
              <br/>
              <br/>
              <br/>
              <AboutInfoItem
                title="2019"
                items={['Cytrojan(A software to prevent hacking and viruses) in Universal Review']}
              />

            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
