import React from 'react';
import axios from 'axios';
export class Home extends React.Component{
	constructor(){
		super();


    this.state = {
      blogdata: []
    }
	}

  GetBlog(){
     var self = this;
     axios.get('http://localhost/blog/public/api/blog?api_token=$2y$10$fnzuDjk3J/RKAz/6pvEB2.fE1VH7WTjXjCv0CKkdctCXxRhaQVPKe')
      .then(function (response) {
        
        self.setState({blogdata: response.data})
        
      })
      .catch(function (error) {
        console.log(error);
      });
  }
  componentWillMount(){
     this.GetBlog();
   }



	render(){
    var alldata = this.state.blogdata.map(function(obj,index){
      return(
             <div className="wow fadeIn pb-80" key={index}>
                 <div className="post-prev-img">
                  <a href="blog-single-sidebar-right.html"><img src={obj.featured_image} alt="img" /></a>
                 </div>
                  
                <div className="post-prev-title">
                  <h3><a href="blog-single-sidebar-right.html">{obj.title}</a></h3>
                </div>
                  
                <div className="post-prev-info">
                  JULE 10<span className="slash-divider">/</span><a href="http://themeforest.net/user/abcgomel/portfolio?ref=abcgomel">JOHN DOE</a><span className="slash-divider">/</span><a href="#">DESIGN</a>, <a href="#">DEVELOPMENT</a>
                </div>
                
                  
                <div className="post-prev-text">
                  {obj.content}
                </div>
                  
                <div className="post-prev-more-cont clearfix">
                  <div className="post-prev-more left">
                    <a href="blog-single-sidebar-right.html" className="blog-more">READ MORE</a>
                  </div>
                  <div className="right">
                    <a href="blog-single-sidebar-right.html#comments" className="post-prev-count"><span aria-hidden="true" className="icon_comment_alt"></span><span className="icon-count">21</span></a>
                    <a href="http://themeforest.net/user/abcgomel/portfolio?ref=abcgomel" className="post-prev-count"><span aria-hidden="true" className="icon_heart_alt"></span><span className="icon-count">53</span></a>
                    <a href="#" className="post-prev-count dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <span aria-hidden="true" className="social_share"></span>
                    </a>
                    <ul className="social-menu dropdown-menu dropdown-menu-right" role="menu">
                      <li><a href="#"><span aria-hidden="true" className="social_facebook"></span></a>
                      </li>
                      <li><a href="#"><span aria-hidden="true" className="social_twitter"></span></a></li>
                      <li><a href="#"><span aria-hidden="true" className="social_dribbble"></span></a></li>
                    </ul>
                  </div>
                </div>
                </div>
       );
    });
       

		return(
            <div>
            
             <div className="row" >
               <div className="col-sm-8 blog-main-posts">
                {alldata}
               </div>
             <div className="col-sm-4 col-md-3 col-md-offset-1">
                <div className="widget">
                
                <h5 className="widget-title">Categories</h5>
                
                <div className="widget-body">
                  <ul className="clearlist widget-menu">
                    <li>
                      <a href="#" title="">Branding</a><small><span className="slash-divider">/</span> 10</small>
                    </li>
                    <li>
                      <a href="#" title="">Development</a><small><span className="slash-divider">/</span> 21</small>
                    </li>
                    <li>
                      <a href="#" title="">Technology </a><small><span className="slash-divider">/</span> 11</small>
                    </li>
                    <li>
                      <a href="#" title="">Social Media</a><small><span className="slash-divider">/</span> 16</small>
                    </li>
                    <li>
                      <a href="#" title="">Entertainment </a><small><span className="slash-divider">/</span> 8</small>
                    </li>
                  </ul>
                </div>
                
              </div>
                   </div>
                </div>

			</div>
			)
	}
}