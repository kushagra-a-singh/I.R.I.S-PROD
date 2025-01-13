import React from 'react';
import './KushagraSingh.css';

const camelCaseToWords = (text) => {
    return text.replace(/([a-z])([A-Z])/g, '$1 $2'); // Adds space between camelCase
  };

const skills = {
  languages: [
    { name: 'Python', logo: '/images/python.png' },
    { name: 'C', logo: '/images/C.png' },
    { name: 'C++', logo: '/images/C++.png' }
  ],
  packages: [
    { name: 'Torch', logo: '/images/pytorch.jpeg'},
    { name: 'OpenCV', logo: '/images/opencv.png' },
    { name: 'Pandas', logo: '/images/pandas.png' },
    { name: 'NumPy', logo: '/images/numpy.png' },
    { name: 'TensorFlow', logo: '/images/tensorflow.png' },
    { name: 'Seaborn', logo: '/images/seaborn.png'},
    { name: 'Scikit-Learn', logo: '/images/scikit.png'},
    { name: 'Tkinter', logo: '/images/tkinter.png'},
    { name: 'StreamLit', logo: '/images/stramlit.png'}
  ],
  electronics: [
    { name: 'Raspberry Pi', logo: '/images/raspberry.jpg' },
    { name: 'Arduino', logo: '/images/arduino.png'},
    { name: 'STM32', logo: '/images/stm.png'}
  ],
  webDevelopment: [
    { name: 'Next.js', logo: '/images/next.png' },
    { name: 'React', logo: '/images/reacg.png' },
    { name: 'Node.js', logo: '/images/node.jpeg' },
    { name: 'Express.js', logo: '/images/express.png' },
    { name: 'HTML', logo: '/images/html.png'},
    { name: 'CSS', logo: '/images/css.png'},
    { name: 'JavaScript', logo: '/images/js.png'},
    { name: 'Bootstrap', logo: '/images/bootstrap.png'}
  ],
  bigDataTechnology: [
    { name: 'Cloudera', logo: '/images/cloudera.webp' },
    { name: 'HDFS', logo: '/images/hdfs.png' },
    { name: 'Apache Pig', logo: '/images/pig.png' },
    { name: 'Hive', logo: '/images/hive.png' },
    { name: 'HBase', logo: '/images/hbase.png'},
    { name: 'Apache Spark', logo: '/images/spark.png'}
  ],
  databases: [
    { name: 'MySQL', logo: '/images/mysql.png' },
    { name: 'MongoDB', logo: '/images/mongodb.svg' },
    { name: 'PostgreSQL', logo: '/images/prostgresql.png' }
  ],
  software: [
    { name: 'AutoCAD', logo: '/images/autocad.png' },
    { name: 'TinkerCAD', logo: '/images/Tinkercad.png' }
  ]
};

const projects = [
  {
    title: 'Tarzan [Ongoing]',
    points: [
      'Developing an autonomous vehicle portable module for non-ADAS enabled cars.',
      'Uses an app to input images and run custom deep learning models (YOLOv8) to make decisions for car steering angle, acceleration, and braking values.',
      'Takes surroundings like other cars, potholes, barricades, etc., to make its decisions.'
    ],
    link: 'https://github.com/kushagra-a-singh/Tarzan-I.R.I.S.',
    image: '/simulation.jpg'
  },
  {
    title: 'IRIS Website',
    points: [
      'Developed an official website for the club to provide a centralized platform to share IRIS updates, event details, recruitments and resources.',
      'Handling multiple concurrent real-time payments and updating entries for events.',
      'Features include event registrations with a payment gateway, dynamic blogging with a voting system and comment section, club project highlights, recruitment and contact forms.',
      'Utilized Razorpay SDK, Supabase Database, and continuous deployment on Vercel with GitHub CI/CD integration.'
    ],
    link: 'https://github.com/kushagra-a-singh/I.R.I.S-PROD',
    image: '/website_img.png'
  },
  {
    title: 'ForVis - Formula 1 Analytics',
    points: [
      'Developed a dynamic GUI using PyQt5 to visualize Formula 1 race telemetry with real-time and historical data analysis.',
      'Integrated FastF1 APIs and stored telemetry in HDFS, achieving a 30% reduction in processing time using Apache Spark.',
      'Implemented Random Forest Classification and Linear Regression models for pit stop predictions and race strategy optimization with an 86% accuracy rate.',
      'Enabled multi-driver comparison, lap time analysis & tyre strategy insights via interactive dashboards.',
      'Currently trying to integrate a Kafka-based pipeline to handle real-time telemetry and analytics.'
    ],
    link: 'https://github.com/kushagra-a-singh/ForVis',
    image: '/KushagraProj1.png'
  },
  {
    title: 'Driver Safety Monitoring System',
    points: [
      'Integrated MQ3 alcohol sensor, accelerometer/gyroscope, GPS module, LED screen, GSM module and buzzer into a vehicle’s onboard system using C++ and Arduino.',
      'Developed a comprehensive system to monitor driver behavior, detect alcohol presence, and deliver real-time alerts to promote safe driving practices.',
      'Enabled timely feedback for enhanced driver safety, utilizing sensors for real-time monitoring and instant notifications.'
    ],
    link: 'https://github.com/kushagra-a-singh/Embedded-Arduino-System-for-Car-Road-Safety',
    image: '/KushagraProj2.jpg'
  },
];

const experiences = [
  {
    logo: '/images/info.png',
    company: 'Infosys Springboard',
    role: 'ML Project Intern',
    location: 'Remote',
    date: 'Oct - Nov 2024',
    description: [
      'Designed and implemented a handwritten digit recognition application using neural networks (MLP, CNN, LeNet5) for MNIST dataset classification.',
      'Developed custom PyTorch models with dropout, activation functions, and convolutional layers for efficient feature extraction and classification.',
      'Built an interactive web application using Streamlit to predict digits from uploaded images,     with support for model selection and real-time predictions. Achieved 90.04%, 98.93% & 98.95% accuracies respectively for each model on the test dataset.',
      'Utilized image preprocessing (grayscale conversion, normalization, resizing) and dataset augmentation for robust model performance.',
      'Created a digit visualization tool to save and display images from the MNIST dataset using Matplotlib.',
      'Deployed models with pre-trained weights and integrated custom UI design for a seamless user experience during prediction.',
    ],
  },
  {
    logo: '/logo2.png',
    company: 'IRIS',
    role: 'Technical Head',
    location: 'Pune',
    date: 'Aug 2024 - Present',
    description: [
      'Spearheaded the development of the official I.R.I.S. club website, taking the lead in designing, coding, and deploying it for live hackathon event registrations for 200+ people, integrated with Razorpay payment gateway to enable seamless fee collection.',
      'Currently leading and managing the tech team to oversee website updates, changes, & new feature implementations. Provide mentorship and technical guidance while also directly contributing to challenging tasks, such as backend development for the blogging system, voting system authentication, & comment section functionality.',
      'Collaborate with faculty and peers to identify and initiate new tech-based projects, fostering innovation within the club.',
      'Led the website’s successful deployment during live events, ensuring smooth operation and scalability for real-time registrations and payments.',
      'Also developing an autonomous vehicle module for non-ADAS cars using YOLOv8 deep learning models and sensor-based simulations for decision-making and steering control',
    ],
  },
];

const roles = [
  {
    image: '/logo2.png',
    role: 'IRIS [Student Club, MIT-WPU] - Technical Head',
    date: 'Aug 2024 - Present',
  },
  {
    image: '/images/info.png',
    role: 'Infosys Springboard [Remote] - ML Intern',
    date: 'Oct 2024 - Dec 2024',
  },
];

const achievements = [
  'Smart India Hackathon (SIH) 2024 - Top 25 Finalist : Collaborated with a multidisciplinary team to qualify as one of the top 25 teams in the internal round of SIH 2024. Designed and developed PlantWise, an AI-powered Ayurvedic health companion for disease prediction and natural remedies.',
  'HackMITWPU’24 Ideathon - Finalist : Proposed DermDetect, an AI-powered tool for preliminary dermatological diagnosis using image processing for remote consultations and personalized skincare solutions for underserved regions, enhancing early detection and skin condition management.',
];

function KushagraSingh() {
  return (
    <div>
      <video className="background-video" autoPlay muted loop>
        <source
          src="https://rkvbuqdjkilvqlywzjsi.supabase.co/storage/v1/object/sign/AboutPhotos/Videos/vid2.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJBYm91dFBob3Rvcy9WaWRlb3MvdmlkMi5tcDQiLCJpYXQiOjE3MzA5MDA1MDcsImV4cCI6MTc2MjQzNjUwN30.qMfRi7Uxvtpz4rRnaN6bTSQzEE_AtxrRQMBp2qR5YEI&t=2024-11-06T13%3A41%3A48.487Z"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <img
            src="/Kushagra.jpeg"
            className="hero-image"
          />
          <div className="hero-text">
            <h2>Hi, I'm Kushagra Singh</h2>
            <p>I’m a Third Year Computer Science Engineering student at MIT WPU, Pune, with hands-on experience in Machine Learning, Web Development and Embedded Systems & IoT. I’ve interned at Infosys Springboard, and as the Technical Head of the IRIS Tech Club, I lead a team focused on building tech solutions and managing live projects. I’m driven by challenges and always looking for new ways to solve real-world problems with a focus on creating practical and user-centric applications.</p>
            <div className="social-links">
              <a href="https://in.linkedin.com/in/kushagra-anit-singh" target="_blank" rel="noopener noreferrer"><img src="/images/linkedin.png" alt="LinkedIN" className="icon"></img>LinkedIn</a>
              <a href="https://github.com/kushagra-a-singh" target="_blank" rel="noopener noreferrer"><img src="/images/github.png" alt="GitHub" className="icon"></img>GitHub</a>
              <a target="_blank" rel="noopener noreferrer"><img src="/images/gmail.webp" alt="Gmail" className="gmail-icon"></img>kushagraa.n@gmail.com</a>
            </div>
            <div className="section-links">
              <a href="#experience">Experience</a>
              <a href="#projects">Projects</a>
              <a href="#skills">Skills</a>
              <a href="#roles-achievements">Roles & Achievements</a>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience">
        <h2>Experience</h2>
        <div className="experience-container">
          {experiences.map((exp, index) => (
            <div className="experience-card" key={index}>
              <img src={exp.logo} alt={`${exp.company} Logo`} className="experience-logo" />
              <div className="experience-details">
                <div className="experience-header">
                  <h3 className="experience-company">{exp.company}</h3>
                  <span className="experience-date">{exp.date}</span>
                </div>
                <div className="experience-subheader">
                  <p className="experience-role">{exp.role}</p>
                  <p className="experience-location">{exp.location}</p>
                </div>
                <ul>
                  {exp.description.map((desc, idx) => (
                    <li key={idx}>{desc}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="projects-grid">
            {projects.map((project, index) => (
            <div className="project-card" key={index}>
                <img
                src={project.image}
                alt={project.title}
                className="project-image"
                />
                <div className="project-details">
                <p className="project-title"><strong>{project.title}</strong></p>
                <ul className="project-points">
                    {project.points.map((point, idx) => (
                    <li key={idx}>{point}</li>
                    ))}
                </ul>
                <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-button"
                >
                    View on GitHub
                </a>
                </div>
            </div>
            ))}
        </div>
        </section>


      <section id="skills">
        <h2>Skills</h2>
        <div className="skills-container">
          {Object.keys(skills).map((category) => (
            <div className="skills-category" key={category}>
              <h3>{camelCaseToWords(category.charAt(0).toUpperCase()) + camelCaseToWords(category.slice(1))}</h3>
              <div className="skills-list">
                {skills[category].map((skill) => (
                  <div className="skill-box" key={skill.name}>
                    <img src={skill.logo} alt={`${skill.name} Logo`} />
                    <p>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

    <section id="roles-achievements">
      <h2>Roles and Achievements</h2>
      <div className="roles-achievements-container">
        {/* Roles Box */}
        <div className="roles-box">
          <h3>Roles</h3>
          <div className="roles-list">
            {roles.map((roleData, index) => (
              <div className="role-item" key={index}>
                <div className="role-left">
                <img
                    src={roleData.image}
                    alt={`${roleData.role} logo`}
                    className="role-image"
                  />
                  <p>{roleData.role}</p>
                </div>
                <div className="role-right">
                  <span className="role-date">{roleData.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Achievements Box */}
        <div className="achievements-box">
          <h3>Achievements</h3>
          <div className="achievements-list">
            {achievements.map((achievement, index) => (
              <div className="achievement-item" key={index}>
                <p>{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default KushagraSingh;
