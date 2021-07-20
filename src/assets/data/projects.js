import { v4 as uuidv4 } from 'uuid';
import airbnb from '../images/airbnb.jpg';
import Disney from '../images/disney.jpg';
import Amazon from '../images/amazon.jpg';
import covid from '../images/covid.JPG';
import alan from '../images/alan.jpg';
import facebook from '../images/facebook.png';
import Whatapp from '../images/whatapp.jpeg';

const projects = [
  {
    id: uuidv4(),
    name: 'Disney+ clone',
    desc:
      'A Disney+ Clone app with login functionality. In this project I used React as frontend and firebase.',
    img: Disney,
    
  },
  {
    id: uuidv4(),
    name: 'Full-stack Amazon clone',
    desc:
      'A Amazon Clone with Login with mail and Google login, also with Checkout and Payment. In this Project I used React,Firebase and Stripe Payment Method ',
    img: Amazon,
    
  },
  {
    id: uuidv4(),
    name: 'Facebook Clone',
    desc:
      'A Facebook Clone app with Google login functionality and uploading post with image. In this project I used React as frontend and firebase.',
    img:facebook,
  },
  {
    id: uuidv4(),
    name: "Whatapp Clone",
    desc:
      'A whatsApp Clone app with Google login functionality. In this project I used React as frontend and firebase.',
    img: Whatapp,
  },
  {
    id: uuidv4(),
    name: 'Airbnb clone',
    desc:
      'A Airbnb Clone app with date functionality . In this project I used React as frontend and firebase.',
    img: airbnb,
  },
  {
    id: uuidv4(),
    name: 'Voice-Control News',
    desc:
      'A project where we can see or open news just with voice command which will make life eaiser. Here i have used react and Alan AI',
    img: alan,
  },
  {
    id: uuidv4(),
    name: 'Covid-19 Tracker',
    desc:
      'A project where we can see how many cases, Recovered or death are there due to covid, We can also see according country and Ranking in country according to cases.',
    img: covid,
  },
  
];

export default projects;
