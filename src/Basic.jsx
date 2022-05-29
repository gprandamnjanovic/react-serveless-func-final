import React, { useEffect, useState } from 'react';
import axios from 'axios';
const url = 'https://temp-serv-func-goran.netlify.app/api/2-basic-api';

const Basic = () => {
  const [product, setProduct] = useState([]);
  const fetchData = async () => {
    try {
      const { data } = await axios.get(url);
      setProduct(data);
    } catch (error) {}
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <section className='section section-center'>
      <div className='title'>
        <h2>Basic setup</h2>
        <div className='title-underline'></div>
      </div>
      <div className='products'>
        {product.map((item) => {
          const {
            id,
            image: { url },
            price,
            name,
          } = item;
          return (
            <article className='product' key={id}>
              <img src={url} alt={name} />
              <div className='info'>
                <h5>{name}</h5>
                <h5 className='price'>${price}</h5>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Basic;
