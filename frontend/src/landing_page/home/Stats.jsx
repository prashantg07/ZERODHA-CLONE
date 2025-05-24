function Stats() {
    return (
        <div className="container p-3">
            <div className="row p-5">
                {/* Text content */}
                <div className="col-12 col-md-6 p-3 p-md-5">
                    <h1 className="fs-2 mb-4">Trust with confidence</h1>

                    <h2 className="fs-4">Customer-first always</h2>
                    <p className="text-muted">
                        That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.
                    </p>

                    <h2 className="fs-4">No spam or gimmicks</h2>
                    <p className="text-muted">
                        No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. Our philosophies.
                    </p>

                    <h2 className="fs-4">The Zerodha universe</h2>
                    <p className="text-muted">
                        Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.
                    </p>

                    <h2 className="fs-4">Do better with money</h2>
                    <p className="text-muted">
                        With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.
                    </p>
                </div>

                {/* Image + links */}
                <div className="col-12 col-md-6 p-3 p-md-5 text-center">
                    <img
                        src="media/images/ecosystem.png"
                        alt="Zerodha Ecosystem"
                        style={{ width: "90%", maxWidth: "400px", height: "auto" }}
                        className="mb-4"
                    />
                    <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                        <a href="#" style={{ textDecoration: "none" }}>
                            Explore our products <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                        </a>
                        <a href="#" style={{ textDecoration: "none" }}>
                            Try kite demo <i className="fas fa-long-arrow-alt-right" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Stats;
