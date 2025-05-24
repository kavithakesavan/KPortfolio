import './aboutme.css' ;
import profImg from '../assets/profimage.png'
export default  function AboutMe(){

    return(
        <div className=' bg-gray-950 bg-opacity-30 flex flex-row gap-10'>
        <div className='aboutme'>
            Hi I am<br/>
            Kavitha Kesavan<br/>
            a software Developer<br/>
            As an experienced Software Developer, I specialize in building scalable, user-friendly applications using technologies like MERN, Next.js, Flutter, Go, AWS & much more. I have hands-on 2 years of experience developing and deploying full-stack projects and a strong interest in data structures and algorithms to optimize performance and security. I continuously enhance my skills and stay eager to explore new technologies and deliver impactful solutions.

        </div>
        <img className ="rounded-full w-sm h-sm" src={profImg}/>
        </div>
    );
}       