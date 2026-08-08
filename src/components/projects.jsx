export default function Project() {
    return (
        <div className="project-main">
            <div className='container project'>
                <h3 className="text-center bg-dark text-white">Projects</h3>
                <section className='mt-4'>
                    <div className="card det">
                        <div className="card-body">
                            <h5 className='card-title fw-bold'>Cartpole Balancer using Deep Q-Network</h5>
                            <p className="proj-1 card-text">This is web based demonstration of game. It has both Usermode and AI mode to play. The goal is to keep the pole straight which is continuously falling by moving the cart right and left. Here AI was trained by the algorithm called DQN (Deep Q-Network). The whole concept belongs to Reinforcement Learning. It chooses best action based on the highest Q-value among all actions. This game has four states and two actions. The states are Cart Position, Cart Velocity, Pole Angle and Pole Angular Velocity. The actions are Right and Left.</p>
                            <p className="fs-6 fw-bold">Technologies</p>
                            <p className="bg-success text-white p-1 rounded "><em className="ms-1">Python, Flask, HTML, CSS, JavaScript, DQN, Rl_Zoo3, Reinforcement Learning</em></p>
                            <p className="proj-1 card-text">I have published a research paper at IEEE conference on Cartpole using DQN algorithm. you'll find the link below of that research content in an official IEEE website.</p>
                            <div className="d-flex justify-content-left gap-2 mt-1">
                                <a href="https://cartpole.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">web link</a>
                                <a href="https://ieeexplore.ieee.org/abstract/document/11158143" target="_blank" rel="noopener noreferrer" className="btn btn-secondary btn-sm">Research Paper</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mt-4 mb-2'>
                    <div className="card det">
                        <div className="card-body ">
                            <h5 className='card-title fw-bold'>Spam Detection</h5>
                            <p className="proj-1 card-text">This is web based demonstration of Machine Learning Classification application which tells whether the user message is spam or not. It provides probabilites with model decision which is spam or not spam.</p>
                            <p className="fs-6 fw-bold">Technologies</p>
                            <p className="bg-success text-white p-1 rounded"><em className="ms-1">Python, Flask, Scikit-Learn, Naive-Bayes, JavaScript, HTML, CSS, Bootstrap</em></p>
                            <div className="d-flex justify-content-left gap-2 mt-1">
                                <a href="https://yaswanth24.pythonanywhere.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">web Link</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mt-4 mb-2'>
                    <div className="card det">
                        <div className="card-body ">
                            <h5 className='card-title fw-bold'>Math Play</h5>
                            <p className="proj-1 card-text">This is web based demonstration of Arithmetic calculation test. This project contains three tests. <em>Addition</em>, <em>Subtraction</em> and <em>Multiplication</em> test. It has the question, so user enter it's correct value. If that answer is correct then score would be increased otherwise it woudn't and next question also won't appear until user enter the correct answer.</p>
                            <p className="fs-6 fw-bold">Technologies</p>
                            <p className="bg-success text-white p-1 rounded"><em className="ms-1">Vite, React, JavaScript, HTML, CSS, Bootstrap</em></p>
                            <div className="d-flex justify-content-left gap-2 mt-1">
                                <a href="https://math-play-seven.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">web Link</a>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='mt-4 mb-2'>
                    <div className="card det">
                        <div className="card-body">
                            <h5 className='card-title fw-bold'>RelativityLab</h5>
                            <p className="proj-1 card-text">This is web based demonstration of Albert Einstein's Special Theory of Relativity. This web contains two concepts <em>Time Dilation</em> and <em>Length Contraction</em>. This demonstrates the conditions at different speeds. Range bar controls the speed. </p>
                            <p className="fs-6 fw-bold">Technologies</p>
                            <p className="bg-success text-white p-1 rounded"><em className="ms-1">Vite, React, JavaScript, HTML, CSS, Bootstrap</em></p>
                            <div className="d-flex justify-content-left gap-2 mt-1">
                                <a href="https://relativitylab.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">web Link</a>
                            </div>
                        </div>
                    </div>
                </section>
                
            </div>
        </div>
    );
}