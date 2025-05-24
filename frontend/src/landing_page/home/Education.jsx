function Education() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                {/* LEFT IMAGE SECTION */}
                <div className="col-12 col-md-6 text-center mb-4 mb-md-0">
                    <img
                        src="media/images/education.svg"
                        alt="Education"
                        className="img-fluid"
                        style={{ maxWidth: "70%" }}
                    />
                </div>

                {/* RIGHT TEXT SECTION */}
                <div className="col-12 col-md-6">
                    <h1 className="mb-3 fs-2">Free and open market education</h1>
                    <p>
                        Varsity, the largest online stock market education book in the world<br />
                        covering everything from the basics to advanced trading.
                    </p>
                    <a href="#" style={{ textDecoration: "none" }}>
                        Varsity <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                    </a>

                    <p className="mt-4">
                        TradingQ&A, the most active trading and investment community in<br />
                        India for all your market-related queries.
                    </p>
                    <a href="#" style={{ textDecoration: "none" }}>
                        TradingQ&A <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
    );
}

export default Education;
