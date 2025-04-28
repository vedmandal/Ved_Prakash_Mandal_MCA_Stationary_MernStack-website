import React, { useEffect, useState } from 'react'
import Layout from '../../components/layout/Layout'
import AdminMenu from '../../components/layout/AdminMenu'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { Link } from 'react-router-dom'

const Products = () => {
  const[products,setproducts]=useState([])
  const GetAllProduct=async()=>{
    try {
      const {data}=await axios.get(`${process.env.REACT_APP_API}/api/v1/product/get-product`);
      if(data.success){
        setproducts(data.product)
        toast.success(data.message)
      }else{
        toast.error(data.message)
      }
      
    } catch (error) {
      console.log(error);
      
    }


  }
  useEffect(()=>{
    GetAllProduct()

  },[])
  return (
    <Layout>
    <div className='product__container grid mt-5'>
    
        <div className='filter__data'><AdminMenu/></div>
        <div className='popular__container container grid'>
          
           {
              products.map((p)=>(
                <Link to={`/dashboard/admin/products/${p.slug}`}>
                <article className='popular__card'>
                  
                 <img  className='popular__img' src={`${process.env.REACT_APP_API}/api/v1/product/photo-product/${p._id}`} />
                <h3 className='popular__name'>{p.name}</h3>
                  
                  <span className='popular__description'>{p.description.substring(0,10)}</span>
                  <span className='popular__price'>Rs{p.price}</span>
                  <button className='more__details'   ><i class="ri-more-fill"></i></button>
                  <button className='popular__button'> <i class="ri-shopping-bag-line"></i></button>

                
                 

                </article>
                </Link>
                
               
              ))
            }

           
            

          </div>
        

    

   </div>
        
    </Layout>
  )
}

export default Products