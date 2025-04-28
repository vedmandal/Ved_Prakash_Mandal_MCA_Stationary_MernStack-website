
import React from 'react'
import Layout from '../components/layout/Layout'
import img1 from "./assets/img/home-sushi-rolls.png"
import leaf1 from "./assets/img/leaf-branch-4.png"
import leaf2 from "./assets/img/leaf-branch-3.png"
import sushi from "./assets/img/home-sushi-title.png"
import sushititle from "./assets/img/about-sushi-title.png"
import sushiabout from "./assets/img/about-sushi.png" 
import leafbranch1 from "./assets/img/leaf-branch-1.png"
import pop1 from "./assets/img/popular-onigiri.png"
import pop2 from "./assets/img/popular-spring-rols.png"
import pop3 from "./assets/img/popular-sushi-rolls.png"
import rec1 from "./assets/img/spinach-leaf.png"
import rec2 from "./assets/img/recently-salmon-sushi.png"
import rec3 from "./assets/img/leaf-branch-2.png"
import rec4 from "./assets/img/leaf-branch-3.png"




const Home = () => {
  return (
   <Layout>
    <main className='main'>
    <section className="home section" id="home">
  <div className="home__container container grid">
    <img src="https://images.unsplash.com/photo-1593526411462-6fbbec21d9a2?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="home image" className="home__img" />
    <div className="home__data">
      <h1 className="home__title">
      Quality Stationary For All
        <div>
          <img src={sushi} alt />
          Stationary Items
        </div>
      </h1>
      <p className="home__discription">
      Find the best copy, pen, chart paper, envelopes, files and other stationary items here.
      </p>
      <a href="#" className="button"> Order Now <i className="ri-arrow-right-line" /></a>
    </div>
  </div>
 <img src={leaf1}  className="home__leaf-1"/>
  <img src={leaf2} alt className="home__leaf-2" />
</section>




<section className="about section" id="about">
  <div className="about__container container grid">
    <div className="about__data">
      <span className="section__subtitle">
        About us
      </span>
      <h2 className="section__title about__title">
        <div>
          we provide
          <img src={sushititle} alt />
        </div>
        All Stationary Items
      </h2>
      <p className="about__description">
      R P ENTERPRISE is India's best online stationery shop near you that brings the most recognised stationery from around the world together in one place. We strive to bring originality to the Indian stationery market.
      </p>
    </div>
    <img src={"https://images.unsplash.com/photo-1593526367339-673b8872f19a?q=80&w=1468&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} alt className="about__img" />
  </div>
  <img src={leafbranch1} alt className="about__leaf" />
</section>



<section className="popular section" id="popular">
  <span className="section__subtitle">The Best And</span>
  <h2 className="section__title">Popular Products</h2>
  <div className="popular__container container grid">
    <article className="popular__card">
      <img src="https://www.freeiconspng.com/uploads/black-pen-png-transparent-1.png" alt={"product_img"}className="popular__img" />
      <h3 className="popular__name">pen</h3>
      <span className="popular__description">Japanese pen</span>
      <span className="popular__price">Rs 50</span>
      <button className="popular__button"><i className="ri-shopping-bag-line" /></button>
    </article>
    <article className="popular__card">
      <img src="https://www.freeiconspng.com/uploads/download-png-image-pencil-png-image-28.png" alt className="popular__img" />
      <h3 className="popular__name">Pencils</h3>
      <span className="popular__description">sharp pencil</span>
      <span className="popular__price">Rs 15</span>
      <button className="popular__button"><i className="ri-shopping-bag-line" /></button>
    </article>
    <article className="popular__card">
      <img src="https://www.freeiconspng.com/uploads/pen-png-15.png" alt className="popular__img" />
      <h3 className="popular__name">pen</h3>
      <span className="popular__description">chinese pen</span>
      <span className="popular__price">Rs 80</span>
      <button className="popular__button"><i className="ri-shopping-bag-line" /></button>
    </article>
  </div>
</section>




<section className="recently section" id="recently">
  <div className="recently__container container grid">
    <div className="recently__data">
      <span className="section__subtitle">Recently Added</span>
      <h2 className="section__title">Stationeries With Appearance <br /> Stationery Gets An AStationery.</h2>
      <p className="recently__description">New Stationery, We're Commiitted. <br/>Things Go Better With Notebook.
       
      </p>
      <a href="#" className="button">Order Now <i className="ri-arrow-right-line" /></a>
      <img src={rec1} alt className="recently__data-img" />
    </div>
    <img src="https://www.freeiconspng.com/uploads/book-png-3.png"  alt className="recently__img" />
  </div>
  <img src={rec3} alt className="recently__leaf-1" />
  <img src={rec4} alt className="recently__leaf-2" />
</section>





</main>



   </Layout>
  )
}

export default Home