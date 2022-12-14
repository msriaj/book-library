import React from "react";
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from "react-photo-view";
import {AiFillStar,AiOutlineStar} from 'react-icons/ai'
import { FaStarHalf } from 'react-icons/fa'


export async function getServerSideProps({params:{id}}) {
    console.log(id)
    const res = await fetch(`https://book-library-server.vercel.app/book/${id}`)
    const data = await res.json()
    return {
      props: {product:data}
    }
  }


const Product = ({product}) => {
    console.log(product)
    return (
        <div className="w-11/12 mx-auto bg-teal-300 rounded-lg">
      <div className="card lg:card-side  h-4/6 shadow-2xl grid md:grid-cols-2 my-5 p-5">
        {/* PhotoProvider for ZoomIn */}
        <PhotoProvider>
          <PhotoView src={product?.url}>
            <img
              style={{height:'500px'}}
              className="w-11/12 h-11/12"
              src={product?.url}
              alt=""
            />
          </PhotoView>
        </PhotoProvider>
        <div className="card-body">
          <h2 className="card-title -ml-1 text-5xl">{product?.title}</h2>
          <p><small>{product?.author}</small></p>
          <p className="font-bold">Category Name: {product?.category_name}</p>
          <p className="font-mono">{product?.description}</p>
          <p className="text-4xl font-bold text-fuchsia-600">Price: ${product?.price}</p>
          <p>Publisher: {product?.publisher}</p>
          <div className='stars flex items-center items-center'>
             <div><AiFillStar/></div>
             <div><AiFillStar/></div>
             <div><AiFillStar/></div>
             <div><AiFillStar/></div>
             <div><FaStarHalf/></div>
             <div>{product?.rating}</div>
           </div>
          <div className="card-actions justify-end mt-5">
            <button className='bg-amber-400 rounded-md text-white px-5 py-2 mr-5'>Add To Favorites</button>
            <button className='bg-amber-400 rounded-md text-white px-5 py-2'>Add To Cart</button>
          </div>
        </div>
      </div>

      {/* <div>
        <Reviews product={product}></Reviews>
      </div> */}
    </div>
    );
};

export default Product;