export default function Project() {
    return (
        <div className="project-main">
            <div className='container project'>
                <h3 className="text-center">Projects</h3>
                <section className='mt-4'>
                    <div className="card det">
                        <div className="card-body">
                            <h5 className='card-title'>Cartpole Balancer using Deep Q-Network</h5>
                            <p className="proj-1 card-text">This is web based demonstration of game. It has both Usermode and AI mode to play. The goal is to keep the pole straight which is continuously falling by moving the cart right and left. Here AI was trained by the algorithm called DQN (Deep Q-Network). The whole concept belongs to Reinforcement Learning. It chooses best action based on the highest Q-value among all actions. This game has four states and two actions. The states are Cart Position, Cart Velocity, Pole Angle and Pole Angular Velocity. The actions are Right and Left.</p>
                            <p>Technologies: HTML, CSS, JavaScript, Reinforcement Learning, Flask</p>
                            <p>I have published a research paper at IEEE conference on Cartpole using DQN algorithm. you'll find the link below of that research content in an official IEEE website.</p>
                            <a href="https://ieeexplore.ieee.org/abstract/document/11158143" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">Research Paper</a>
                        </div>
                    </div>
                </section>
                <section className='mt-4 mb-2'>
                    <div className="card det">
                        <div className="card-body ">
                            <h5 className='card-title'>Math Play</h5>
                            <p className="proj-1 card-text">This is web based demonstration of Arithmetic calculation test. This project contains three tests. <em>Addition</em>, <em>Subtraction</em> and <em>Multiplication</em> test. It has the question, so user enter it's correct value. If that answer is correct then score would be increased otherwise it woudn't and next question also won't appear until user enter the correct answer.</p>
                            <p>Technologies: React, JavaScript, HTML, CSS</p>
                            <a href="https://math-play-seven.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">web Link</a>
                        </div>
                    </div>
                </section>
                <section className='mt-4 mb-2'>
                    <div className="card det">
                        <div className="card-body ">
                            <h5 className='card-title'>RelativityLab</h5>
                            <p className="proj-1 card-text">This is web based demonstration of Albert Einstein's Special Theory of Relativity. This web contains two concepts <em>Time Dilation</em> and <em>Length Contraction</em>. This demonstrates the conditions at different speeds. Range bar controls the speed. </p>
                            <p>Technologies: React, JavaScript, HTML, CSS</p>
                            <a href="https://relativitylab.vercel.app/" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">web Link</a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}