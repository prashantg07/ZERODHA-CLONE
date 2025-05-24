import { useState } from 'react';

function Signup() {
    const [mobile, setMobile] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`OTP sent to +91-${mobile}`);
    };

    return (
        <div className="container py-5">
            {/* Headings */}
            <div className="text-center mb-5 px-3">
                <h1 className="fw-semibold display-6">
                    Open a free demat and trading account online
                </h1>
                <p className="text-muted fs-5">
                    Start investing brokerage free and join a community of 1.6+ crore investors and traders
                </p>
            </div>

            {/* Main Section */}
            <div className="row g-4 g-lg-5 align-items-center justify-content-center">
                {/* LEFT: Image */}
                <div className="col-12 col-md-8 col-lg-6 text-center">
                    <img
                        src="media/images/account_open.svg"
                        alt="Zerodha Preview"
                        className="img-fluid"
                        style={{ maxWidth: '100%', height: 'auto' }}
                    />
                </div>

                {/* RIGHT: Signup Form */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="p-4 border rounded shadow-sm bg-white mx-auto" style={{ maxWidth: '360px' }}>
                        <h4 className="mb-2">Signup now</h4>
                        <p className="text-muted mb-3 small">Or track your existing application</p>

                        <form onSubmit={handleSubmit}>
                            <div className="input-group mb-3">
                                <span className="input-group-text bg-light">
                                    <img
                                        src="https://flagcdn.com/w40/in.png"
                                        alt="India Flag"
                                        width="20"
                                        height="15"
                                        className="me-1"
                                    />
                                    +91
                                </span>
                                <input
                                    type="tel"
                                    className="form-control"
                                    placeholder="Enter your mobile number"
                                    value={mobile}
                                    onChange={(e) => setMobile(e.target.value)}
                                    required
                                    pattern="[0-9]{10}"
                                />
                            </div>

                            <button type="submit" className="btn btn-primary w-100">
                                Get OTP
                            </button>

                            <p className="text-muted mt-3 small text-center">
                                By proceeding, you agree to the Zerodha <a href="#">terms</a> & <a href="#">privacy policy</a>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Signup;