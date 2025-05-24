function Pricing() {
    return (
        <div className="container my-5">
            <div className="row align-items-center">
                {/* Left text */}
                <div className="col-12 col-md-4 mb-4 mb-md-0">
                    <h1 className="mb-3 fs-2">Unbeatable pricing</h1>
                    <p>
                        We pioneered the concept of discount broking and price transparency in India.
                        Flat fees and no hidden charges.
                    </p>
                    <a href="#" style={{ textDecoration: "none" }}>
                        See pricing <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                    </a>
                </div>

                {/* Spacer on larger screens */}
                <div className="d-none d-md-block col-md-2"></div>

                {/* Price cards */}
                <div className="col-12 col-md-6">
                    <div className="row text-center">
                        <div className="col-12 col-sm-6 p-3 border mb-3 mb-sm-0">
                            <h1 className="mb-3">₹0</h1>
                            <p>
                                Free equity delivery <br /> and direct mutual funds
                            </p>
                        </div>
                        <div className="col-12 col-sm-6 p-3 border">
                            <h1 className="mb-3">₹20</h1>
                            <p>Intraday and F&O</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;
