import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './About.module.css';
// import backgroundVideo from './vid2.mp4';

function About() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, []);

  const [backgroundVideo, setLink] = useState("https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/vid2.mp4?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL3ZpZDIubXA0IiwiaWF0IjoxNzI5MzU5NDI1LCJleHAiOjE3NjA4OTU0MjV9.zDVElXE2k7_Hrz-KRJGieH1K3_J_LO_9Slu6L3VNzmE&t=2024-10-19T17%3A37%3A05.403Z")


  return (
    <div className={styles.aboutUs}>
      <div className={styles.videoBackground}>
        <video autoPlay muted loop>
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.overlay}></div>

      <main className={styles.content + ' py-5'}>
        <div className="container">
          <h1 className={styles.title}>About I.R.I.S</h1>
          <p className={styles.titleDesc}>I.R.I.S (Innovation Research & Intelligence Support) is a tech club dedicated to fostering innovation and supporting research in the field of technology.</p>
          <div className="row">
            <div className="col-md-6">
              <div className={styles.contactInfo + ' p-4'}>
                <h2>Contact Information</h2>
                <p>Email: iris@mitwpu.edu.in</p>
                <p>Phone: +91 7715958053</p>
                <p>Address: MIT World Peace University Survey No, 124, Paud Rd, Kothrud, Pune, Maharashtra 411038</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className={styles.mission + ' p-4'}>
                <h2>Our Mission</h2>
                <h4>To provide a platform for tech enthusiasts to:</h4>
                <h5>* Collaborate</h5>
                <h5>* Learn</h5>
                <h5>* Innovate</h5>
              </div>
            </div>
          </div>
          <div className={styles.vision + ' p-4'}>
            <h2>Our Vision</h2>
            <p>To be the leading tech community that drives technological advancements and shapes the future of innovation.</p>
          </div>
          <div className="row">
          <h2>Faculty Mentors</h2>
            <div className="col-md-6">
              {/* Faculty Mentor 1 */}
              <div className={styles.mentor}>
                <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/shamlaMaam.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9zaGFtbGFNYWFtLmpwZWciLCJpYXQiOjE3Mjk0MjI4MTcsImV4cCI6MTc2MDk1ODgxN30.rGAsQNl6P1pLiV__LejelwbLDTJCZA8SUjB8r3ekW-U&t=2024-10-20T11%3A13%3A37.833Z" alt="Shamla Mantri" className={styles.mentorImage} />
                <div className={styles.mentorInfo}>
                  <h3>Dr. Shamla Mantri</h3>
                  <p>Associate Professor</p>
                  <a href="https://scholar.google.com/citations?user=IUUENAMAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              {/* Faculty Mentor 2 */}
              <div className={styles.mentor}>
                <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/yogeshSir.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy95b2dlc2hTaXIuanBnIiwiaWF0IjoxNzI5NDIyODk1LCJleHAiOjE3NjA5NTg4OTV9.j1Oy83jFbb1CMXzEn0MJVw5QS-2QNzukLvAczd0LWm8&t=2024-10-20T11%3A14%3A55.926Z" alt="Dr.Yogesh Kulkarni" className={styles.mentorImage} />
                <div className={styles.mentorInfo}>
                  <h3>Dr. Yogesh Kulkarni</h3>
                  <p>Assistant Professor</p>
                  <a href="https://scholar.google.com/citations?user=9GsTeoQAAAAJ&hl=en" target="_blank" rel="noopener noreferrer">
                    View Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div id="team-members" className={styles.teamMembers + ' p-4'}>
            <h2>Team Members</h2>
            <div className="row">

              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/durgesh.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9kdXJnZXNoLmpwZyIsImlhdCI6MTcyOTQyMjkxMywiZXhwIjoxNzYwOTU4OTEzfQ.7-eDej-c3_YdQVy9hCvsiy-uWQJaDDAYGsiD-2FV_y0&t=2024-10-20T11%3A15%3A14.480Z" alt="Team Member 3" />
                  <div className={styles.cardContent}>
                    <h3>Durgesh Deore</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/durgesh-deore-74a75a281/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/kavish.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9rYXZpc2guanBlZyIsImlhdCI6MTcyOTQyMjkyOSwiZXhwIjoxNzYwOTU4OTI5fQ.NrftfWkOATL5mDNsCR2jaCbnOuAT4uRJIrbRTNVCWEQ&t=2024-10-20T11%3A15%3A30.343Z" alt="Team Member 3" />
                  <div className={styles.cardContent}>
                    <h3>Kavish Jain</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/kavish-jain-38b812247/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/chinmay.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9jaGlubWF5LmpwZyIsImlhdCI6MTcyOTQyMjk0MCwiZXhwIjoxNzYwOTU4OTQwfQ.OmQp2VoMvp-SLxv04SjelLsb_1woipp9_cbTKkZQZKA&t=2024-10-20T11%3A15%3A41.137Z" alt="Team Member 3" />
                  <div className={styles.cardContent}>
                    <h3>Chinmay Huddar</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/chinmay-huddar-3536761ab/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="logo2.png" alt="Team Member 3" />
                  <div className={styles.cardContent}>
                    <h3>Raghunandan</h3>
                    <p>Founder</p>
                    <a href="" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* President */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/taksh.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy90YWtzaC5qcGVnIiwiaWF0IjoxNzI5NDIyOTg2LCJleHAiOjE3NjA5NTg5ODZ9.ct77ZJaEgZwMTNNnYffPqG1iAwgaXSSoBFlAAsTzLD4&t=2024-10-20T11%3A16%3A27.053Z" alt="Team Member 1" />
                  <div className={styles.cardContent}>
                    <h3>Taksh Dhabalia</h3>
                    <p>President</p>
                    <a href="https://www.linkedin.com/in/taksh-dhabalia-2b6969202/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* Vice President */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/samanyu.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9zYW1hbnl1LmpwZyIsImlhdCI6MTcyOTQyMzAwMCwiZXhwIjoxNzYwOTU5MDAwfQ.vYcEvdAU5b06BTbsM-zGfNVxM-6ZZqAmoFGp3dOhEa0&t=2024-10-20T11%3A16%3A41.395Z" alt="Team Member 2" />
                  <div className={styles.cardContent}>
                    <h3>Samanyu Bhate</h3>
                    <p>Vice President </p>
                    <a href="https://www.linkedin.com/in/samanyu-bhate-17136b1ab/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* TREASURER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/Brandon.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9CcmFuZG9uLmpwZyIsImlhdCI6MTcyOTQyMzAxMywiZXhwIjoxNzYwOTU5MDEzfQ.B4Ze8R2zNyRHQqr6Q7WLD2Djdodk12YXNC6Ux4gFJ_s&t=2024-10-20T11%3A16%3A54.165Z" alt="Team Member 3" />
                  <div className={styles.cardContent}>
                    <h3>Brandon Cerejo</h3>
                    <p>Treasurer</p>
                    <a href="https://www.linkedin.com/in/brandon-cerejo-921275247/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* GS */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/grishma.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9ncmlzaG1hLmpwZyIsImlhdCI6MTcyOTQyMzAzNiwiZXhwIjoxNzYwOTU5MDM2fQ.I8P4uTUpJgooJwP8YJvkJUBlQN7SWICyPc0gbakajgY&t=2024-10-20T11%3A17%3A17.478Z" alt="Team Member 4" />
                  <div className={styles.cardContent}>
                    <h3>Grishma Shinde</h3>
                    <p>General Secretary</p>
                    <a href="https://www.linkedin.com/in/grishma-shinde-835343294?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* TECH TEAM */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/Kush.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9LdXNoLmpwZyIsImlhdCI6MTcyOTQyMzA0OCwiZXhwIjoxNzYwOTU5MDQ4fQ.c5f_yThyQIbzGRHOFzgsA6IB8rWa2RRGzQ8UtZeObaw&t=2024-10-20T11%3A17%3A29.288Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Kushagra Singh</h3>
                    <p>Lead Developer</p>
                    <a href="https://www.linkedin.com/in/kushagra-anit-singh/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* TECH TEAM */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/gagan.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9nYWdhbi5qcGciLCJpYXQiOjE3Mjk0MjMwNjQsImV4cCI6MTc2MDk1OTA2NH0.KJtTfmbOMSmNGLIVtqWiIwwTsVWPUnTGZ62Eoo51e-U&t=2024-10-20T11%3A17%3A44.792Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Gaganjot Kaur</h3>
                    <p>Lead Developer</p>
                    <a href="https://www.linkedin.com/in/gaganjot-kaur-badwal-4017062a7/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/*  TECH TEAM  */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/Purva.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9QdXJ2YS5wbmciLCJpYXQiOjE3Mjk0MjMwODAsImV4cCI6MTc2MDk1OTA4MH0.tDpra2wafOD7o1kA1sFZ5yhyzW7ykTrDRw2nZqPXXS0&t=2024-10-20T11%3A18%3A00.806Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Purva Rana</h3>
                    <p>Lead Developer</p>
                    <a href="https://www.linkedin.com/in/purva-rana-b231a0253/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/*  RESEARCH HEAD  */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/nishad.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9uaXNoYWQuanBnIiwiaWF0IjoxNzI5NDIzMTA2LCJleHAiOjE3NjA5NTkxMDZ9.t9uMO8N1GAXsxWof3ulyH_52VLWtO-fPO4qWZXuGoWM&t=2024-10-20T11%3A18%3A27.175Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Nishad Dhodapkar</h3>
                    <p>Research Head</p>
                    <a href="https://www.linkedin.com/in/nishad-dhodapkar/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* NON-TECH HEAD  */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/kawas.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9rYXdhcy5qcGVnIiwiaWF0IjoxNzI5NDIzMTIwLCJleHAiOjE3NjA5NTkxMjB9.knMRgrpVweGN8U6_gyc-QdBTS7c6d7uo0IAu1FmszOA&t=2024-10-20T11%3A18%3A40.941Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3> Kaustubha M</h3>
                    <p>Marketing Head</p>
                    <a href="https://www.linkedin.com/in/kawas-nandan/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* NON-TECH HEAD  */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/Riya.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9SaXlhLmpwZyIsImlhdCI6MTcyOTQyMzEyOSwiZXhwIjoxNzYwOTU5MTI5fQ.57HIcO342lHB7rRu48eRON4NcmECh0yNxiXUvZzZJWA&t=2024-10-20T11%3A18%3A50.448Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Riya Kondawar</h3>
                    <p>Social Media Head</p>
                    <a href="https://www.linkedin.com/in/riyakondawar/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* NON-TECH HEAD  */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/Richa.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9SaWNoYS5qcGciLCJpYXQiOjE3Mjk0MjMxMzksImV4cCI6MTc2MDk1OTEzOX0.X3ovTaySdqIJhkxAX6XijD-nCHuoZN6Tc4oTgRaGkjs&t=2024-10-20T11%3A19%3A00.017Z" alt="Team Member 5" />
                  <div className={styles.cardContent}>
                    <h3>Richa Shukla</h3>
                    <p>Event Operation Head</p>
                    <a href="https://www.linkedin.com/in/richa-shukla-026516258/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/Parth.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9QYXJ0aC5qcGciLCJpYXQiOjE3Mjk0MjMxNDksImV4cCI6MTc2MDk1OTE0OX0.h2PVMvI_XgGZGzZjxYv6ck2s_E00elqsFWOKXe9mhhA&t=2024-10-20T11%3A19%3A10.119Z" alt="Team Member 6" />
                  <div className={styles.cardContent}>
                    <h3>Parth Ware</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/parth-ware-48993324a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/dhyey.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9kaHlleS5qcGciLCJpYXQiOjE3Mjk0MjMxNTksImV4cCI6MTc2MDk1OTE1OX0.Yc7KYMtb4gqmVwLALcicLiSht8Q5mTiNLDcvrid6Wwk&t=2024-10-20T11%3A19%3A19.592Z" alt="Team Member 7" />
                  <div className={styles.cardContent}>
                    <h3>Dhyey Ladani</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/dhyey-ladani/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
              {/* FOUNDING MEMBER */}
              <div className="col-md-4">
                <div className={styles.card}>
                  <img src="https://vibgvvzzunbfcqwcjfbk.supabase.co/storage/v1/object/sign/IRIS%20Stuff/AboutPics/sarthak.jpeg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJJUklTIFN0dWZmL0Fib3V0UGljcy9zYXJ0aGFrLmpwZWciLCJpYXQiOjE3Mjk0MjMxNzEsImV4cCI6MTc2MDk1OTE3MX0.C134IkOhV22gJt5SPnPVM_lPD4548miCIMHT_ISRTj4&t=2024-10-20T11%3A19%3A31.937Z" alt="Team Member 8" />
                  <div className={styles.cardContent}>
                    <h3>Sarthak Patil</h3>
                    <p>Founder</p>
                    <a href="https://www.linkedin.com/in/sarthak-patil-aa453a219/" className={styles.button} target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

    </div>
  );
}

export default About;
