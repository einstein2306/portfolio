import unified from '../assets/img/unified_mentor.jpeg'
import cloudTech from '../assets/img/CloudTech.jpeg'
import DigiToad from '../assets/img/DigiToad.jpeg'
import DigiIndia from '../assets/img/Digital_india.jpeg'
export function Certifications(){
    return(
        <div className="container certifications">
            <h3 className="text-center">Certifications</h3>
            <div className="mt-4 row p-2">
                <div className="col">
                    <img className='img-fluid shadow shadow-sm rounded mx-auto d-block' src={unified} alt="Unified Mentor" />
                </div>
                <div className="col">
                    <img className='img-fluid shadow shadow-sm rounded mx-auto d-block' src={DigiToad} alt="DigiToad" />

                </div>
            </div>
            <div className="mt-4 row p-2">
                <div className="col">
                    <img className='img-fluid shadow shadow-sm rounded mx-auto d-block' src={DigiIndia} alt="Digital India" />
                </div>
                <div className="col">
                    <img className='img-fluid shadow shadow-sm rounded mx-auto d-block' src={cloudTech} alt="Cloud Tech" />
                </div>
            </div>
            <h3 className='text-center mt-2'>Credentials</h3>
            <ul className="list-group">
                <li className="list-group-item mt-1"><a href="https://media.geeksforgeeks.org/certificates/1752920854/5eaf35b52a35c242961c14e13594cd54.pdf" target="_blank" rel="noopener noreferrer">Data Structures and Algorithms issued by (GeekForGeeks)</a></li>
                <li className="list-group-item mt-1"><a href="https://www.credly.com/badges/f208c915-042a-45da-9ace-ac9450f2dd3f" target="_blank" rel="noopener noreferrer">AWS Academy Graduate - Cloud Foundations issued by (Amazon Web Services Training and Certification)</a></li>
                <li className="list-group-item mt-1"><a href="https://www.credly.com/badges/2137cb71-5d9c-4034-99d8-b2c2524ff0f3" target="_blank" rel="noopener noreferrer">AWS Academy Graduate - Machine Learning Foundations issued by (Amazon Web Services Training and Certification)</a></li>
            </ul>   
        </div>
    )
}