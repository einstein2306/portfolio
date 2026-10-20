
export function Intro() {
    return (
        <div className="intro">
            <div className='container'>
                <div>
                    <div className="row justify-content-center align-items-center mb-0">
                        <div className="col-md-10 col-lg-8 col-8">
                            <div className="py-5">
                                <div className="namespace">
                                    <p className="fw-bold text-primary tracking-wide mb-0 first1">Hi, my name is</p>
                                    <h1 className="display-4 fw-bold text-dark first2">Yaswanth</h1>
                                </div>
                                <div className="design">
                                    <h2 className="h4 text-secondary fw-bold ">Web Developer <span className='text-dark fw-bold'>|</span>  AI/ML Developer</h2>
                                </div>
                                <div>
                                    <p className="description fw-semibold text-muted">I'm a developer with a background in Artificial Intelligence and Machine Learning, passionate about building modern web applications and intelligent solutions. I enjoy combining web technologies with AI/ML to create practical, user-friendly applications.</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-10 col-lg-8 col-8">
                            <div className="d-flex align-items-center">
                                <h6 className="mb-0 fw-bold fs-5 text-dark me-3">Let's Connect: </h6>
                                <a className="btn btn-sm btn-outline-primary me-3" href="mailto:pasinayaswanth@gmail.com">
                                    <i className="bi bi-envelope-fill me-2"></i>Email
                                </a>
                                <a className="btn btn-sm btn-outline-success" href="https://linkedin.com/in/pasina-yaswanth-a052192b8" target="_blank" rel="noopener noreferer">
                                    <i className="bi bi-linkedin me-2"></i>LinkedIn
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}