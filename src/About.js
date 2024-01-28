import React from 'react'

const About = () => {
  return (
    <section id="about">
    <div className="container mt-4 pt-4">
        <h1 className="text-center">About Me</h1>
        <div className="row mt-4">
            <div className="col-lg-4">
                <img src= {require ("./images/DSC_1660.JPG")}  className= "imageAboutPage" alt=""/>
            </div>

            <div className="col-lg-8">
                <p> The only way to achieve the impossible is to believe it is possible.
                    
                </p>
                <div className="row mt-3">
                    <div className="col-md-6">
                        <ul>
                            <li>Name: Khemraj</li>
                            <li>Age: 21</li>
                            <li>Occupation: Developer and Creator</li>

                        </ul>
                    </div>
                    <div className="col-md-6">
                        <ul>
                            <li>Phone: +977 9815055006</li>
                            <li>Email: khemrajlapcha14@gmail.com</li>
                            <li>Address: Nepal</li>
                        </ul>
                    </div>
                </div>
                <div className="row mt-3">
                    <p>Hello, I'm Khemraj Lapcha, a dedicated student currently pursuing my BSc.
                         CSIT at Mechi Multiple Campus, currently in the 6th semester.
                          I reside in Buddhashanti-6, Jhapa. My passion lies in the world of coding,
                           where I enjoy exploring and creating innovative solutions.
                            Apart from academics, I find joy in music,
                             and I have an avid interest in continually learning new things.
                              This journey of combining my love for coding, exploration of new knowledge,
                               and appreciation for music keeps me motivated and excited about the possibilities that lie ahead. </p>
                </div>
            </div>
        </div>
    </div>
</section>
  )
}

export default About