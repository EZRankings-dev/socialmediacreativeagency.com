import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Portfolio from './components/Portfolio';
import axios from 'axios';

import Navbar from './components/Navbar'
import Footer from './components/Footer';
import FooterForm from './components/FooterForm';
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Link from 'next/link';

  export default function PortfolioIndex({ portData }) {
    const [hiddenTitleIndex, setHiddenTitleIndex] = useState(1);
    const [currentPage, setCurrentPage] = useState(2);
    const [startImg, setStartImg] = useState(0);
    const[toImg, setToImg]= useState(9);
    let blogDatta;
    let blogWDatta;
    if(portData && portData.blog && portData.blog.length > 0){
      blogDatta = portData.blog;
    }
    const [postList, setPostList] = useState(blogDatta);
    useEffect(() => {
      setTimeout(() => {
      }, 5000);
      }, []);
    const toggleHiddenTitle = (index) => {
        if (hiddenTitleIndex === index) {
          setHiddenTitleIndex(null);
        } else {
          setHiddenTitleIndex(index);
        }
      };
      const settings = {

        autoplay: false,
        autoplaySpeed: 1000,
        slidesToShow: 2,
        dots: true,
        arrows: true,
        responsive: [
       {
         breakpoint: 768,
         settings: {
         slidesToShow: 1,
         slidesToScroll: 1
         }
       }
      ]
    } 

    const settings2 = {

      autoplay: false,
      autoplaySpeed: 1000,
      slidesToShow: 1,
      dots: true,
      arrows: true,
      responsive: [
     {
       breakpoint: 768,
       settings: {
       slidesToShow: 1,
       slidesToScroll: 1
       }
     }
    ]
  }
    const Fancybox = {
    }

    const handleNextPage = () => {
      setToImg(toImg+9);
    }    
  return (
    <>
      <Head>
    <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
    <title>Our Portfolio - Social Media Creative Agency</title>
    <meta name="description" content="Find the list of Social Media projects which has been done by Social Media Creative Agency with good results." />
    <link rel="canonical" href="https://www.socialmediacreativeagency.com/portfolio" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:type" content="article" />
    <meta property="og:title" content="Our Portfolio - Social Media Creative Agency" />
    <meta property="og:description" content="Find the list of Social Media projects which has been done by Social Media Creative Agency with good results." />
    <meta property="og:url" content="https://www.socialmediacreativeagency.com/portfolio" />
    <meta property="og:site_name" content="Creative Agency" />
    <meta property="og:image" content="https://smca.ezrankings.in/react-backend/uploads/logo.png" />
    <meta property="article:modified_time" content="" />
    <meta name="twitter:card" content="summary_large_image" />
    <link rel="stylesheet" type="text/css" href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css"content="noindex, nofollow"></link>
    <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"></link>
    <link rel="stylesheet" type="text/css" href="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.css"content="noindex, nofollow"></link>
    <script src="https://cdn.jsdelivr.net/npm/@fancyapps/ui@5.0/dist/fancybox/fancybox.umd.js"></script>
    <script async src="https://www.googletagmanager.com/gtag/js?id=G-4T85M437M3" />
      <script
        dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){
          dataLayer.push(arguments);
        }
        gtag('js', new Date());
      `     
    }}
      
      />

      <meta name="google-site-verification" content="muKy4GDWt7CbVzZo5Gly_Z6UieYyZ65RlQsB4ts9uKY" />
      </Head>
      <Navbar />
      <section className="banner-section our-portfolio-title">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="banner-caption portfolio-o-logo">
                     <h1> <span>OUR Portfolio</span></h1>
                     <img src={"https://smca.ezrankings.in/react-backend/uploads/oshap.png"} className="o-shap" alt=""/>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="porfolio-slider">
        <div className="container">
            <div className="row">
                <div className="col-md-9 mx-auto">
                    <div className="slider-porfolio">
                    <Slider {...settings} className="slick-slider2">
                      
                      {portData && portData.gallery && portData.gallery.length > 0 && portData.gallery.map((data, i)=>(
                        <div className="item" key={i}>
                          <figure><img src={data.image} alt={data.alt}/>
                          </figure>
                        </div>
                      ))}
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
      </section>
      <section className="testimonial-section porfolio-slider2">
        <h2>Our Client Speaks</h2>
        <div className="container">
            <div className="row">
                <div className="col-md-9 mx-auto">
                    <div className="slider-porfolio">
                    <Slider {...settings2} className="slick-slider2">
                      
                    <div className='testi-item'>

                      <p className="des"><span className='start'><i className="far fa-quote-left"></i></span> Prasthan tours n travels, a travel company in Ahmedabad- one stop destination for all the travel needs. We were actually looking for someone who could handle our social media pages, but due to some of the other reason was not getting time to find the one n at that same time I received a call from SMCA. 
Even during that time I was running out of time due to some preoccupied work n commitments. I kept telling Tanu to call me later, n she never failed to take the follow ups. Seeing her dedication I felt that they are the one who deserves to work for our company. A very good deal was made for us. Apart from that they are very prompt n punctual with their services. Even their work is apt n to the point. They very well understood my requirement n need for the type of creatives I need for my company, which saves a lot of time in editing n posting. It's been 3 months now n I m very much satisfied with their work, even there's an increased number of likes n following for my pages after they have taken over.
<br/>
I would recommend SMCA to everyone who don't get time for their social media pages n who want it to be handled the way they want it to be. <span className='end'><i className="far fa-quote-right"></i></span></p>
                    
                    <div className="about-avtar">
                      <h4 className='name'>Nidhi Arya
</h4>
<p className='desination'>Sales and marketing</p>
<p className='company-name'>Prasthan tours n travels</p>
<p className='city-name'>Ahmedabad 
</p>
</div>
                    </div>

                    <div className='testi-item'>

<p className='des'><span className='start'><i className="far fa-quote-left"></i></span>SMCA helps us in creative design work for our social media page. They are very prompt with their services. I just wanted to share a quick note and let you know that you guys do a really good job. I'm glad and I decided to work with you. We are working since past 3 months and I am happy with their work. 
<br/>
I will surely recommend SMCA to anyone who is looking for good Creative Designs in the social media pages.<span className='end'><i className="far fa-quote-right"></i></span></p>

<div className="about-avtar">
<h4 className='name'>Ejas Ahmed
</h4>
<p className='desination'>Punnackal Jewellers</p>
<p className='company-name'>DWA Fashion PVT LTD.</p>
{/* <p className='city-name'>DWA Fashion PVT LTD.</p> */}
</div>
</div>
                    </Slider>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <section className="portfolio-sec">
  <div className="container">
      <div className="row">
      {postList && postList.slice(startImg,toImg).map((blogImg, b) =>(
        <div className="col-md-4" key={b}>
            <div className="portfolio-card">
                <figure> <a href={blogImg.image} data-fancybox="gallery" data-caption={blogImg.alt}>
                    <img src={blogImg.image} alt={blogImg.alt} />
                    <span className="zoom-img"><i className="fas fa-search-plus"></i></span>
                  </a>
                </figure>
            </div>
        </div>
      ))}
      {postList && postList.map((blogImg, b) =>(
        <div className="col-md-4" key={b}>
            <div className="portfolio-card hide">
                <figure> <a href={blogImg.image} data-fancybox="gallery" data-caption={blogImg.alt}>
                    <img src={blogImg.image} alt={blogImg.alt} />
                    <span className="zoom-img"><i className="fas fa-search-plus"></i></span>
                  </a>
                </figure>
            </div>
        </div>
      ))}      
        <div className="col-md-12">
            <div className="load-more-btn">
                <a onClick={handleNextPage}>Load More</a>
            </div>
        </div>
      </div>
  </div>
</section>
      <section className="start-retainership-sec ">
        <div className="continer">
          <div className="row">
            <div className="col-md-12">
              <div className="content-wrap">
                <p>We believe that every business 
                is <span>unique and deserves excellent and customized 
                social media creatives,</span> that's why we take the time to 
                develop an enduring connection with our clients.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div className="content-wrap2">
                <h2>Let’s create something 
                amazing together.
                </h2>
                <Link href="/contact" className="">Get Started</Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FooterForm />
        <section className="faq-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
                  <div className="accordion" id="accordionExample" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
                    {portData.faq && portData.faq.length > 0 && portData.faq.map((dataF, i)=>(
                        <div className="accordion-item" key={i}>
                        <h2 className="accordion-header" id={'headingOne'+i} itemProp={dataF.title}>
                            <button className={hiddenTitleIndex === i ? 'accordion-button collapsed openDesc' : 'accordion-button collapsed'} type="button" data-bs-toggle={'collapseOne'+i} data-bs-target={'#collapseOne'+i}  aria-controls={'collapseOne'+i}  onClick={() => toggleHiddenTitle(i)}>
                            {dataF.status}Q.{i+1} {dataF.title}
                            </button>
                        </h2>
                        {/* <p className="hide">vikasGwl</p> */}
                        <div id={'collapseOne'+i} aria-labelledby={'headingOne'+i} data-bs-parent="#accordionExample" itemScope="" itemProp={dataF.description} itemType="https://schema.org/Answer">
                            <div className={hiddenTitleIndex === i ? 'accordion-body' :''}>
                            {hiddenTitleIndex === i && <div dangerouslySetInnerHTML={{ __html: dataF.description}} />}
                            </div>
                        </div>
                    </div>
                    ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
      <Footer />
      <script
        dangerouslySetInnerHTML={{ __html: `
        Fancybox.bind("[data-fancybox]", {
          // Your custom options
      });
      ` 
    }}
      
      />
    </>
  )
}
export async function getServerSideProps(data) {
  let currNo = 1;
  const response = await axios.get(`https://smca.ezrankings.in/react-backend/portData.php?page=${currNo}`);
  const portData = response.data;
  return {
    props: {
      portData,
    },
  };
}