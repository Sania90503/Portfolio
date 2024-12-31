import React from 'react'
import SectionTitle from '../../components/SectionTitle'

function About() {
    const skills=
    [
        "JavaScript",
        "React",
        "Nodejs",
        "Express",
        "MongoDB",
        "Java"
    ]
    return (
        <div>
            <SectionTitle title="About" />
            <div className="flex items-center w-full">
                <div className='h-[70vh] w-1/2'><dotlottie-player src="https://lottie.host/39c8809d-416b-4128-b689-1402473e5370/6lZABEzQ54.lottie" background="transparent" speed="1" autoplay></dotlottie-player>
                </div>
                <div className="flex flex-col gap-5 text-tertiary w-1/2" >
                    <p>I am Sania, a passionate and detail-oriented software developer with a solid foundation in front-end and full-stack development. I excel in creating responsive and user-friendly web applications using technologies like React.js, JavaScript, HTML, CSS, and backend tools such as Node.js and MongoDB. My strong analytical skills and ability to solve complex problems allow me to craft scalable and efficient solutions tailored to meet user needs.</p>
                    <p>With a focus on collaboration and innovation, I thrive in dynamic team environments where I can contribute to meaningful projects. My excellent communication skills and proactive mindset enable me to work seamlessly with cross-functional teams to deliver high-quality results.</p>
                </div>
            </div>
            <div className='py-5'>
                <h1 className="text-secondary text-xl">
                    Here are a few technology I've been wroking with recently :
                </h1>
                <div className="flex flex-wrap gap-10 mt-5">
                    {skills.map((skills,index)=>(
                        <div className='border border-secondary py-3 px-10'>
                            <h1 className='text-secondary'>{skills}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default About
