function Hero() {
    return (
        <div className="container py-5">
            <div className="row justify-content-center text-center">
                <div className="col-12 col-md-10">
                    <img
                        src="media/images/homeHero.png"
                        alt="Hero Image"
                        className="img-fluid mb-5"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                    <h1 className="mt-3">Invest in everything</h1>
                    <p className="lead">Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
                    <button
                        className="btn btn-primary fs-5 mb-5 mx-auto"
                        style={{ minWidth: "150px", maxWidth: "300px", width: "80%" }}
                    >
                        Sign up for free
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Hero;
