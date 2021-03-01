import React from 'react';
import BlogTheme370x150 from '../../../components/blog/BlogTheme370x150';
import BlogTheme100x85 from '../../../components/blog/BlogTheme100x85';
import BlogTheme370x270 from '../../../components/blog/BlogTheme370x270';
import CategoryTheme304x130 from '../../../components/category/CategoryTheme304x130';
import Container from '../../../components/theme/Container';
import data from '../../../data/data.json'

const Banner = (props) => {
    return (
        <div class="pd-top-80  pd-bottom-50">
            <Container>
                <div class="col-lg-3 col-md-6">
                    <div class="section-title">
                        <h6 class="title">Trending Blog </h6>
                    </div>
                    <div class="trending-post">
                        {data.blog2.map(item => (
                            <BlogTheme370x150 data={item} />
                        ))}
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="section-title">
                        <h6 class="title">Latest Blog</h6>
                    </div>
                    <div>
                        {data.blog3.map(item => (
                            <BlogTheme100x85 data={item} />
                        ))}
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="section-title">
                        <h6 class="title">Whats Blog</h6>
                    </div>
                    <div>
                        {data.blog4.map(item => (
                            <BlogTheme370x270 data={item} />
                        ))}
                    </div>
                </div>
                <div class="col-lg-3 col-md-6">
                    <div class="section-title">
                        <h6 class="title">Category</h6>
                    </div>
                    <div className={"row"}>
                        {data.category.map(item => (
                            <CategoryTheme304x130 data={item} className={"col-sm-6"} />
                        ))}
                    </div>
                </div>
            </Container>
        </div >
    );
}
export default Banner;