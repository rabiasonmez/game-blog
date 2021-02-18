import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const Breadcrumb = (props) => {
    
    let HeaderTitle = props.headertitle;
    let Subheader = props.subheader ? props.subheader : HeaderTitle

    return (
        <section className="page-title-area">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="breadcrumb-inner">
                            <h5 className="page-title">{HeaderTitle}</h5>
                            <ul className="page-list">
                                <li><Link to="/">Ana Sayfa</Link></li>
                                <li>{Subheader}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Breadcrumb