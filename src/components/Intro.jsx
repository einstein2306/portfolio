
export function Intro() {
    return (
        <div className="intro">
            <div className='container'>
                <div>
                    <div className="row justify-content-center align-items-center mb-0">
                        <div className="col-md-6 col-lg-6 col-8">
                            <div className="py-4">
                                <div className="namespace mb-2">
                                    <div className="fw-bold text-primary tracking-wide mb-0 first1">Hi, my name is</div>
                                    <div style={{ color: "#352b25" }} className="display-4 fw-bold first2">Yaswanth</div>
                                </div>
                                <div className="design mb-3">
                                    <h2 className="h4 text-secondary fw-bold ">Web Developer <span className='text-dark fw-bold'>|</span>  AI/ML Developer</h2>
                                </div>
                                <div>
                                    <p style={{ fontSize: "14px" }} className="description fw-semibold text-muted">I'm a developer with a background in Artificial Intelligence and Machine Learning, passionate about building modern web applications and intelligent solutions. I enjoy combining web technologies with AI/ML to create practical, user-friendly applications.</p>
                                </div>
                                <hr />
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center">
                        <div className="col-md-6 col-lg-6 col-8">
                            <div className="d-flex flex-md-row flex-column gap-2">
                                <h6 className="mb-0 fw-bold fs-5 text-dark me-3">Let's Connect: </h6>
                                <div>
                                    <a style={{ fontSize: "12px" }} className="btn btn-sm btn-primary me-3" href="mailto:pasinayaswanth@gmail.com">
                                        <i className="bi bi-envelope-fill me-2"></i>Email
                                    </a>
                                </div>
                                <div>
                                    <a style={{ fontSize: "12px" }} className="btn btn-sm btn-success" href="https://linkedin.com/in/pasina-yaswanth-a052192b8" target="_blank" rel="noopener noreferer">
                                        <i className="bi bi-linkedin me-2"></i>LinkedIn
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}