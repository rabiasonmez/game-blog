import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from '../../components/blogLayout/blogSidebar/SideBar';
import CategoryCard from './CategoryCard';
import CategoryBodyCard from './CategoryBodyCard';
import Container from '../themeLayout/ContainerLayout';
import Column from '../themeLayout/ColumnLayout';

const CategoryList = (props) => {


    return <div className="cat-page-area pd-bottom-80 go-top">
        <Container>
            <Column className="col-lg-9 pd-top-50">
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
            </Column>
            <Column className="col-lg-3 pd-top-50 go-top">
                <Sidebar />
            </Column>
        </Container>
    </div>

}

export default CategoryList