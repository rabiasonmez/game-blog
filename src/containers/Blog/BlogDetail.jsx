import React from 'react';
import SideBar from '../../components/blogLayout/blogSidebar/SideBar';
import PostDetail from '../../components/postLayout/PostDetail';
import Column from '../../components/themeLayout/ColumnLayout';
import Container from '../../components/themeLayout/ContainerLayout';


const BlogDetail = (props) => {

    return (
    
    
    <div>
            <Container className="blog-page-area pd-bottom-80 go-top">
                <div className="row">
                    <div className="col-lg-9 pd-top-50">
                    <PostDetail />

                    <SideBar className="col-lg-3 pd-top-50 go-top" />
                    </div>
                </div>
            </Container>
        </div>
    )


}








export default BlogDetail;