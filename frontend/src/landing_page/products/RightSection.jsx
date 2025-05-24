function RigthSection({ productName, productDescription, productLink, imageURL }) {
    return (
        <div className='container'>
            <div className='row mt-2 align-items-center'>
                <div className='col-12 col-md-6 p-3'>
                    <h1 className=''>{productName}</h1>
                    <p className='text-muted text-wrap pt-3 pb-3' style={{ lineHeight: "1.8", fontSize: "18px" }}>{productDescription}</p>
                    <a className='mt-3 text-decoration-none fs-5' href="">{productLink} <i className="fas fa-long-arrow-alt-right"></i></a>
                </div>
                <div className='col-12 col-md-6 mt-5 mb-5'>
                    <img src={imageURL} alt="prodictImg" className='img-fluid' />
                </div>
            </div>
        </div>
    )
}

export default RigthSection;