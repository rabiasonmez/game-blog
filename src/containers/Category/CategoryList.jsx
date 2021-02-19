import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Sidebar from '../../components/layout/SideBar';
import CategoryCard from './CategoryCard';
import CategoryBodyCard from './CategoryBodyCard';

const CatSports = () => {


    return <div className="cat-page-area pd-bottom-80 go-top">
        <div className="container">
            <div className="row">
                <div className="col-lg-9 pd-top-50">
                    <div className="row">
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                    </div>
                    <CategoryBodyCard />
                    <div className="row">
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                        <CategoryCard />
                    </div>
                    <nav className="mt-4 text-center">
                        <ul className="pagination">
                            <li className="page-item prev"><a className="page-link" href="#"><i className="fa fa-angle-left" /></a></li>
                            <li className="page-item active"><a className="page-link" href="#">1</a></li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item"><a className="page-link" href="#">3</a></li>
                            <li className="page-item"><a className="page-link" href="#">4</a></li>
                            <li className="page-item next"><a className="page-link" href="#"><i className="fa fa-angle-right" /></a></li>
                        </ul>
                    </nav>
                </div>
                <Sidebar />
            </div>
        </div>
    </div>

}

export default CatSports