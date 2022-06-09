import React from 'react'
import product_card from "../data/product_data";

const MainContent =()=>{
  // console.log(product_card);

  const listItems = product_card.map((item)=>
  <div className='card' key={item.id}>
    <div className='card-img'>
      <img src = {item.thumb}/>
    </div>
    <div className='card_header'>
      <h2>{item.productName}</h2>
      <p>{item.description}</p>
      <div className='price'>
      <span class="price1" >{item.newPrice}</span> &nbsp;
      <span class="price2" >{item.priceOff}</span>&nbsp;
      <div className='btn' > Add to Cart</div>
      </div>

      <span class="discount">{item.priceDiscount}</span>

      
    </div>
  </div>
  );

  return(
    <div className='main_Content'>
      {listItems}
    </div>
  )
}
export default MainContent;