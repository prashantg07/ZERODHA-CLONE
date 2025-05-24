function Hero() {
    return (
        <div className="container">
            <div className="row px-3 px-md-5 mt-5 border-bottom text-center">
                <h1>Pricing</h1>
                <h3 className="text-muted mt-2 fs-5">
                    Free equity investments and flat ₹20 intraday and F&O trades
                </h3>
            </div>
            <div className="row px-3 px-md-5 mt-5 text-center">
                <div className="col-12 col-sm-6 col-md-4 p-4">
                    <img src="media/images/pricingEquity.svg" className="img-fluid mx-auto d-block" />
                    <h1 className="fs-4 mt-3">Free equity delivery</h1>
                    <p className="text-muted mt-2">
                        All equity delivery investments (NSE, BSE) are absolutely free — ₹0 brokerage.
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 p-4">
                    <img src="media/images/intradayTrades.svg" className="img-fluid mx-auto d-block" />
                    <h1 className="fs-4 mt-3">Intraday and F&O trades</h1>
                    <p className="text-muted mt-2">
                        Flat ₹20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity.
                    </p>
                </div>
                <div className="col-12 col-sm-6 col-md-4 p-4">
                    <img src="media/images/pricingEquity.svg" className="img-fluid mx-auto d-block" />
                    <h1 className="fs-4 mt-3">Free direct MF</h1>
                    <p className="text-muted mt-2">
                        All direct mutual fund investments are absolutely free — ₹0 commissions & DP charges.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Hero;