import React, {useState, useEffect} from 'react'
import Head from 'next/head'
import Home from './components/Home';
import Navbar from './components/Navbar'
import Footer from './components/Footer';
import Slider from "react-slick"
import FooterForm from './components/FooterForm';
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import routes from './routes';
import Link from 'next/link';


export default function Index({ dataHomes }) {
  const [faqData, setFaqData] = useState([]);
  const [readMore, setReadMore] = useState(false);
  const [readMoreClass, setReadMoreClass] = useState('hide');
  const updateContent=()=>{
   if(!readMore){
      setReadMore(true);
   }else{
      setReadMore(false);
   }
  }
  const faqqData = dataHomes && dataHomes.faq && dataHomes.faq.length > 0 && dataHomes.faq.map((item, k) => {
    return {
      '@type': 'Question',
      name: item.title,
      acceptedAnswer :{
        '@type': 'Answer',
        description: item.description
      },
    }
  }
)
if(faqqData && faqqData.length > 0){
  //setFaqData(faqqData);

}
 //console.log('vikas',faqqData);
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqqData
  }
  ;
  const [hiddenTitleIndex, setHiddenTitleIndex] = useState(0);


const settings = {
  centerMode: true,
  autoplay: false,
  autoplaySpeed: 1000,
  slidesToShow: 4,
  dots: true,
  arrows: true,
  swipe: true,
  infinite: true,
  swipeToSlide: true, responsive: [{
    breakpoint: 768,
    settings: {
    slidesToShow: 1,
    slidesToScroll: 1
    }
  }
]
  };
  const toggleHiddenTitle = (index) => {
    if (hiddenTitleIndex === index) {
      setHiddenTitleIndex(null);
    } else {
      setHiddenTitleIndex(index);
    }
  };
  return (
    <>
      <Head>
      <meta name='robots' content='index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' />
      <title>Full Service Social Media Creative Agency in India - Engaging Social Media Posts Services</title>
      <meta name="keywords" content="social media creative agency, creative agency social media posts, social media posting agency, full service social media agency, full service creative agency, social media agency for small business, creative social media agency, creative social media services"/>
      <meta name="description" content="Are you searching full-service social media agency in India? Boost your visibility and engagement with our creative social media services. We provide comprehensive solutions for small and large businesses to increase their ROI." />
      <link rel="canonical" href="https://www.socialmediacreativeagency.com/" />
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="Full Service Social Media Creative Agency in India - Engaging Social Media Posts Services" />
      <meta property="og:description" content="Are you searching full-service social media agency in India? Boost your visibility and engagement with our creative social media services. We provide comprehensive solutions for small and large businesses to increase their ROI." />
      <meta property="og:url" content="https://www.socialmediacreativeagency.com/" />
      <meta property="og:site_name" content="Creative Agency" />
      <meta property="article:modified_time" content="2023-02-27T05:38:12+00:00" />
      <link rel="stylesheet" type="text/css" href="https://kit-pro.fontawesome.com/releases/v5.15.3/css/pro.min.css"></link>
      <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500&display=swap"></link>
      {/* <script src="https://code.jquery.com/jquery-3.6.0.js"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" ></script> */}
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <script async
        src="https://www.googletagmanager.com/gtag/js?id=G-4T85M437M3"
        
      />
      <script
        dangerouslySetInnerHTML={{ __html: `
        window.dataLayer = window.dataLayer || [];
        function gtag(){
          dataLayer.push(arguments);
        }
        gtag('js', new Date());

        gtag('config', 'G-4T85M437M3');
      ` }}
      />
      <meta name="google-site-verification" content="muKy4GDWt7CbVzZo5Gly_Z6UieYyZ65RlQsB4ts9uKY" />
      </Head>
      <Navbar />
      <section className="banner-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="banner-caption">
                     <h2>We Love <span >St<img src={"https://smca.ezrankings.in/react-backend/uploads/oshap.png"} className="o-shap" alt=""/>ries</span></h2>
                     <p>We Love to visualize stories beacuse we love people and they inspire us.</p>
                  </div>
               </div>
            </div>
         </div>
      </section>

      <section className="exp-branding-sec">
         <div className="contianer">
            <div className="title-header">
               <h1 className='homeH1'>We’re an experienced branding agency with more than <span>seven hundred projects </span>
                  under our belt.
               </h1>
            </div>
         </div>
         <div className="">
            <div className="col-md-12 for-home-page-slider">
               <h2 className="sliderTitle">Our Work</h2>
               <Slider {...settings} className="slick-slider ">
               {dataHomes.gallery && dataHomes.gallery.length > 0 && dataHomes.gallery.map((galData, i) => (
                     <div className="item" key={i}>
                        <figure><img src={galData.img}  alt={galData.alt} />
                        </figure>
                     </div>
                     ))}
               </Slider>
            </div>
         </div>

      </section>
      <section className="start-retainership-sec ">
         <div className="continer">
            <div className="title-header">
               <h2>Let's Start Retainership with us</h2>
               <div className="currency-wrap">
                  <div className="dollor-wrap">
                     <sup>$</sup>150
                  </div>
                  {/* <div className="divider">/</div> */}
                  <div className="rupee-wrap">
                     {/* <sup>₹</sup>7000 */}
                      <sub>Per month</sub>
                  </div>
               </div>
               <Link href="/contact" className="btn-border">Talk to an Expert</Link>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="content-wrap">
                     <p>We believe that every business
                        is <span>unique and deserves excellent and customized
                        social media creatives,</span> thats why we take the time to
                        develop an enduring connection with our clients.
                     </p>
                  </div>
               </div>
            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="content-wrap2">
                     <h2>Let's create something
                        amazing together.
                     </h2>
                     <Link href="/contact" className="">Get Started</Link>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <FooterForm />
      <section className="blog-one blog-one__blog-page pt-0">
        <div className="container">
            <div className="row">
            <h2 className="faq-title blogHome">Blogs</h2>
              {dataHomes && dataHomes.blog && dataHomes.blog.length > 0 && dataHomes.blog.map((blogD, b)=>(
                <div className="col-xl-4 col-lg-4 col-md-6 " key={b}>
                    <div className="blog-one__single">
                        <div className="blog-one__img">
                            <img src={blogD.img} alt={blogD.alt} />
                            <Link href={`${blogD.linkUrl}`}>
                            <span className="blog-one__plus"></span>
                            </Link>
                            <div className="blog-one__date">
                            <p>{blogD.post_date} <br /> {blogD.post_month.substring(0,3)}</p>
                            </div>
                        </div>
                        <div className="blog-one__content">
                            <ul className="list-unstyled blog-one__meta">
                            <li><Link href="#"><i className="far fa-folder-open"></i> {blogD.category}</Link></li>
                            </ul>
                            <h3 className="blog-one__title">
                             <Link href={`${blogD.linkUrl}`}>{blogD.title.substring(0,65)}</Link>
                            </h3>
                            <div className="blog-one__person">
                                <div className="blog-one__person-img">
                                  <img src="https://www.socialmediacreativeagency.com/wp-content/uploads/2023/02/logo.png" alt={blogD.author} />
                                </div>
                                <div className="blog-one__person-content">
                                    <p>by {blogD.author}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                ))}   
                <div className="homeBlogViewAll">
                  <Link href="/blogs" className="btn-border">Views All</Link>
              </div>                         
            </div>
        </div>
      </section>
      <section className="form-section grow-your-brand pt-0">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
               <h2>A Full-Service Social Media Creative Agency in India to Grow Your Brand</h2>
               <p>Hire our best social media agency for small businesses to grow to big businesses by
                  using our creatives at affordable costs. We are India&#39;s leading social media creative
                  agency to help small and big businesses grow their brand to reach an audience easily and
                  quickly. </p>
                  <div className={readMore ? 'show': 'hide'}>
                                    <p>

                                    Social media is growing rapidly, with nearly 5 billion people using it worldwide. India
                                    becoming the most populated country, has a high potential for marketing through social
                                    media. We are a full-service social media agency in India to offer comprehensive and
                                    customized designs for our clients to achieve their business goals. 
                                    </p>
                                 <p> As India&#39;s top social media creative agency, we help our clients increase their brand
                                    exposure and traffic. We offer creative designs at affordable costs with no compromise in
                                    quality for our clients to develop a loyal following and generate leads. As the best social
                                    media agency for small businesses, we help our clients to have a strong social media
                                    presence for their brand to develop business partnerships, minimize marketing costs and
                                    boost sales. </p>
                                 
                                 
                                 <h3>How Do We Help to Grow the Brand for Our Clients?</h3>
                                 <p>Branding has become the buzzword for businesses to build relationships with their audience
                                    to transform them into loyal customers. As the best full-service social media agency in
                                    India, we can create a brand for our clients to increase their identity and personality. The
                                    following are the ways we help to grow brands for our clients. </p>
                                    <ul>
                                       <li>Choose the right social media network suitable for the brand</li>
                                       <li>Create visual branding to grab the attention of the audience</li>
                                       <li>Develop a unique voice for the creatives to be authentic</li>

                                    </ul>
                                     
                                    <p>
                                    To know more about how the top social media creative agency helps to grow your brand,
                                    call us now.</p>
                              
                              
                                 <h3>Maximizing Reach and Engagement with Effective Social Media Posts &amp; Strategies</h3>
                                 <p> Maximize reach and engagement with our effective social media posts &amp; strategies to boost
                                    sales and increase revenue. We are India&#39;s top social media posting agency to offer
                                    creatives with eye-catching designs and innovative content. Our creative agency&#39;s social
                                    media posts go viral on many platforms to reach the audience easily and quickly. 

                                    All businesses need to engage in social media posts to reach their audience. And doing it for
                                    the sake of posting will not help get the likes, shares and comments to increase
                                    engagement. We offer the best creative agency social media posts on the right platform
                                    for maximum engagement. The following is how we do it to be India&#39;s top social media
                                    posting agency. </p>
                                    <ul>
   <li>We will understand our client&#39;s audience to offer them relevant and engaging posts.</li>
   <li>Our expert team create viral content for our clients to post on the right social media platforms.</li>
</ul>
                                    

<p>Call our consultant now to know how we can maximize reach and engagement with effective
                                    social media postings and strategies to expand your business exponentially. 

                                    Why Creative Social Media Services is a Must-Have for Every Business?

                                    With over five billion mobile users worldwide and nearly five billion social media users, all
                                    businesses need to leverage them to grow to new heights. Unlike trying DIY skills for
                                    creating personal social media posts, hiring creative social media services for business
                                    postings is essential. It is because social media is fast becoming the tool to reach and
                                    engage audiences to grow business to new levels. Especially for small businesses, it is a
                                    cost-effective way for posting viral content to become a big business fast. 

                                    The following are why our best creative social media services are a must-have for every
                                    business.</p>
                                    <ul>
                                       <li>We help to build a brand by creating viral posts to reach and engage the audience to
                                                                        transform them into customers.</li>
                                       <li>We offer a personalized approach to clients to create comprehensive designs per
                                                                        their needs.</li>
                                       <li>We work on a wide range of budgets to be best for small to big businesses.</li>

                                       </ul> 
                 <p>Call our executive now for more reasons why our creative social media services are
                                    essential for every business.</p>

                                    
                                    
                                    
                  </div>

                  <div className="readmoreBtn text-center"><a  onClick={updateContent} className="btn-border">{!readMore ? 'Read More' :'Read less'}</a></div>
                  </div>   
            </div>
         </div>
      </section>
      <section className="faq-section">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <h2 className="faq-title">Frequently Asked Questions (FAQs)</h2>
                  <div className="accordion" id="accordionExample" itemScope="" itemProp="mainEntity" itemType="https://schema.org/Question">
                    {dataHomes && dataHomes.faq && dataHomes.faq.length > 0 && dataHomes.faq.map((dataF, i)=>(
                        <div className="accordion-item" key={i}>
                        <h2 className="accordion-header" id={'headingOne'+i} itemProp={dataF.title}>
                            <button className={hiddenTitleIndex === i ? 'accordion-button collapsed openDesc' : 'accordion-button collapsed'} type="button" data-bs-toggle={'collapseOne'+i} data-bs-target={'#collapseOne'+i}  aria-controls={'collapseOne'+i}  onClick={() => toggleHiddenTitle(i)}>
                            {dataF.status}Q.{i+1} {dataF.title}
                            </button>
                        </h2>
                        <div id={'collapseOne'+i} aria-labelledby={'headingOne'+i} data-bs-parent="#accordionExample" itemScope="" itemProp={dataF.description} itemType="https://schema.org/Answer">
                            <div className={hiddenTitleIndex === i ? 'accordion-body' :''}>
                            {hiddenTitleIndex === i && <div  dangerouslySetInnerHTML={{ __html: dataF.description}} />}
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
    </>
  )
}


export async function getStaticProps() {
  const response = await fetch('https://smca.ezrankings.in/react-backend/homes.php');
  const dataHomes = await response.json();

  return {
    props: { dataHomes }
  };
}