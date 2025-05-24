function LeftSection({
    imageURL,
    productName,
    productDescription,
    productLink1,
    productLink2,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container ">
            <div className="row align-items-center ">
                <div className="col-12 col-md-6 mt-5 mb-5">
                    <img src={imageURL} className="img-fluid" />
                </div>
                <div className="col-12 col-md-6 p-5 ">
                    <h1>{productName}</h1>
                    <p
                        className="text-muted text-wrap pt-3 pb-3"
                        style={{ lineHeight: "1.8", fontSize: "18px" }}
                    >
                        {productDescription}
                    </p>
                    <div className="">
                        {productLink1 && (
                            <a className="text-decoration-none" href="">
                                {productLink1}
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </a>
                        )}
                        {productLink2 && (
                            <a className="text-decoration-none ms-5" href="">
                                {productLink2}
                                <i className="fas fa-long-arrow-alt-right"></i>
                            </a>
                        )}
                    </div>
                    <div className="mt-4">
                        <a href={googlePlay}>
                            <img
                                src="media\images\googlePlayBadge.svg"
                                className="img-fluid"
                            />
                        </a>
                        <a href={appStore}>
                            <img
                                className=" ms-5 me-3 img-fluid"
                                src="media\images\appstoreBadge.svg"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;