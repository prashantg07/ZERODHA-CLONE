function Awards() {
    return (
        <div className="container mt-5">
            <div className="row align-items-center">
                {/* LEFT IMAGE */}
                <div className="col-12 col-md-6 p-4 text-center">
                    <img src="media/images/largestBroker.svg" alt="Largest Broker" className="img-fluid" />
                </div>

                {/* RIGHT TEXT SECTION */}
                <div className="col-12 col-md-6 p-4">
                    <h1>Largest stock broker in India</h1>
                    <p className="mb-4">
                        2+ million Zerodha clients contribute to over 15% of all retail order volumes in India daily by trading and investing in:
                    </p>

                    <div className="row">
                        <div className="col-6">
                            <ul className="ps-3">
                                <li>Futures and Options</li>
                                <li>Commodity derivatives</li>
                                <li>Currency derivatives</li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="ps-3">
                                <li>Stocks & IPOs</li>
                                <li>Direct mutual funds</li>
                                <li>Bonds and Govt. Securities</li>
                            </ul>
                        </div>
                    </div>

                    <img src="media/images/pressLogos.png" alt="Press Logos" className="img-fluid mt-4" />
                </div>
            </div>
        </div>
    );
}

export default Awards;
