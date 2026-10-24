export function About() {
    return (
        <div className="about-main">
            <div className="container about">
                <div className="about mb-2">
                    <h3 className="fw-bolder text-center">About</h3>
                    <section className="p-2 text-muted" id="education">
                        <p>I completed my Bachelor's at Aditya Institute of Technology and Management (AITAM) in Artificial Intelligence and Machine Learning (AIML) branch. I develop web applications (Frontend and Backend) by integrating Machine Learning concepts. I develop Frontend applications using Vite plus React and Backend applications using Python with it's Frameworks (Django, Flask). Developing Machine learning applications and integrating it with web applications to create best user interactive experience.</p>
                        <hr />
                    </section>
                    <section className="mb-3">
                        <p className="fw-semibold mb-2">Tech Skills</p>
                        <ul className="list-group list-group-horizontal fw-semibold">
                            <li id="courses" className="list-group-item rounded">C</li>
                            <li id="courses" className="list-group-item rounded">Java</li>
                            <li id="courses" className="list-group-item rounded">Python</li>
                            <li id="courses" className="list-group-item rounded">OOP</li>
                            <li id="courses" className="list-group-item rounded">HTML</li>
                            <li id="courses" className="list-group-item rounded">CSS</li>
                            <li id="courses" className="list-group-item rounded">JavaScript</li>
                            <li id="courses" className="list-group-item rounded">TypeScript</li>
                            <li id="courses" className="list-group-item rounded">AJAX</li>
                            <li id="courses" className="list-group-item rounded">CI/CD</li>
                            <li id="courses" className="list-group-item rounded">Git</li>
                            <li id="courses" className="list-group-item rounded">GitHub</li>
                            <li id="courses" className="list-group-item rounded">GitHub Actions</li>
                            <li id="courses" className="list-group-item rounded">Django</li>
                            <li id="courses" className="list-group-item rounded">Flask</li>
                            <li id="courses" className="list-group-item rounded">React</li>
                            <li id="courses" className="list-group-item rounded">Vite</li>
                            <li id="courses" className="list-group-item rounded">React Native</li>
                            <li id="courses" className="list-group-item rounded">Expo</li>
                            <li id="courses" className="list-group-item rounded">Express</li>
                            <li id="courses" className="list-group-item rounded">Node Js</li>
                            <li id="courses" className="list-group-item rounded">Next Js</li>
                            <li id="courses" className="list-group-item rounded">SQLite</li>
                            <li id="courses" className="list-group-item rounded">PostGreSQL</li>
                            <li id="courses" className="list-group-item rounded">Scikit-learn</li>
                            <li id="courses" className="list-group-item rounded">Tensorflow</li>
                            <li id="courses" className="list-group-item rounded">Neural Network</li>
                            <li id="courses" className="list-group-item rounded">CNN</li>
                            <li id="courses" className="list-group-item rounded">DQN</li>
                            <li id="courses" className="list-group-item rounded">REST API</li>
                            <li id="courses" className="list-group-item rounded">FastAPI</li>
                            <li id="courses" className="list-group-item rounded">NLP</li>
                            <li id="courses" className="list-group-item rounded">RNN</li>
                            <li id="courses" className="list-group-item rounded">LSTM</li>
                        </ul>
                        <hr />
                    </section>
                    <section className="p-2">
                        <p className="fw-semibold mb-3">Featured Publications</p>
                        <div className="row justify-content-center">
                            <div className="col-md-8 col-sm-12 col-lg-8">
                                <div style={{ backgroundColor: "#fffcf7" }} className="card">
                                    <div className="card-body">
                                        <p className="card-title fw-bold text-dark">Cartpole Balancer using Deep Q-Networks  <span style={{ fontSize: "10px" }} className="ms-1 text-muted">Conference</span></p>

                                        <div className="mb-2" style={{ fontSize: "12px" }}>
                                            <div>
                                                <em className="me-1">Pradeep kumar Mahapatro.,</em>
                                                <em className="me-1 fw-semibold">P. Yaswanth.,</em>
                                                <em className="me-1">Ch. Meghana.,</em>
                                                <em className="me-1">T. Rushanth.,</em>
                                                <em className="me-1">P. Somesh</em>
                                            </div>
                                            <div style={{ fontSize: "12px" }}>
                                                <em>Under review at IEEE WAMS</em>
                                            </div>
                                            <em>2025</em>
                                        </div>

                                        <div className="card-text text-muted">Investigates the application of Deep Q-Learning(DQN) for stablizing the Cartpole balancing environment. This research analyzes reward optimization stratigies, neural network convergence and the transition of trained reinforcement learning models into lightweight web applications.</div>
                                        <div className="d-flex justify-content-end mt-1">
                                            <a style={{ fontSize: "11px" }} href="https://ieeexplore.ieee.org/abstract/document/11158143" target="_blank" rel="noopener noreferrer" className="mt-3 btn btn-dark btn-sm">IEEE Explore <i className="bi bi-arrow-up-right"></i></a>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </section>
                </div>
            </div>
        </div>
    );
}