function Hero() {
    return (
        <section className="container-fluid" id="supportHero" style={{ backgroundColor: "#387ed1" }}>
            <div className="container   p-5 mt-5 mb-5 text-white">
                <div className="row d-flex justify-content-between align-items-center">
                    <div className="col-12 col-md-6">
                        <h4 className="p-3">Support Portal</h4>
                    </div>
                    <div className="col-12 col-md-6 text-md-end">
                        <a href="" className="text-white fw-bold p-3 d-inline-block">Track Tickets</a>
                    </div>
                </div>
                <div className="row mt-4">
                    <div className="col-12 col-md-6 text-white">
                        <h5 className="p-3">Search for an answer or browse help topics to create a ticket</h5>
                        <input className="w-100 p-3 m-3 rounded-1 border-0" placeholder="Eg: how do i activate F&amp;O, why is my order getting rejected ..." />
                        <br />
                        <ul className="d-flex flex-column flex-md-row gap-3 p-3 ">
                            <li className="list-unstyled"><a className="text-white fw-bold" href="">Track account opening</a></li>
                            <li className="list-unstyled"><a className="text-white fw-bold" href=" ">Track segment activation</a></li>
                            <li className="list-unstyled"><a className="text-white fw-bold" href=" ">Intraday margins</a></li>
                            <li className="list-unstyled"><a className="text-white fw-bold" href="">Kite user manual</a></li>
                        </ul>
                    </div>
                    <div className="col-12 col-md-6 p-5">
                        <h3 className="">Featured</h3>
                        <ol className="ps-3">
                            <li className="p-3 fw-bold">Surveillance measure on scrips - April 2025</li>
                            <li className=" p-3 fw-bold">Latest Intraday leverages and Square-off timings</li>
                        </ol>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;