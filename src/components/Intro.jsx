import darkback from '../assets/darkback1.mp4'
export function Intro(){
    return(
        <div>
            <div className='container intro'>
                    <div>
                        <video id="bg-video" src={darkback} autoPlay loop muted></video>
                    </div>
                    <div className='anime'>
                        <p><p id="name">Hi, i'm </p><span className='name'>Yaswanth</span></p>
                        <h1 className='design'>AI & Web Developer</h1>
                        <p id="content" className="mt-2">I design Web Applications by using Frontend and Backend tools. Mostly focuses on demostrating Machine Learning algorithms and Physics concepts in a Web based form. </p>
                    </div>
            </div>
        </div>
    );
}