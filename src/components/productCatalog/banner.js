import React from 'react';

function Banner(){
    return(
        <section className="banner text-center">
        <div className="banner__overlay"></div>
        <div className="banner__content">
            <h1 className="banner__title">Fashion for <br/> Upcoming Winter</h1>
            <p className="banner__description">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
            <button type="button" className="btn btn__big btn--bold  btn--white" aria-label="Center Align">View Collection</button>
        </div>
    </section>
    )
}

export default Banner;