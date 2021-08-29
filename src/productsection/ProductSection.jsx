import React from 'react';
import {MonthAndProduct} from '../json/content.js';
import orderNowArrow from '../images/orderNowArrow.png';


export default function ProductSection(){

    return (<>{
        MonthAndProduct.map((data) => (
            <>
            <div className="month-wrapper">
                <h4 className="month">{data.monthName}
                {/* <span className="month-subtitle"> <span className="bold-orderNow">product</span> catalogue</span> */}
                </h4>
                <div>
                <a href="https://wa.link/38xs6f"><button className="btn primary-dark-btn">click here to &nbsp; <b className="bold-orderNow"> order now </b>  &nbsp;  &nbsp;  &nbsp;  <img src={orderNowArrow} className="orderNowArrow" /></button></a>
                </div>
            </div>
            <div className="product-wrapper">
            <h4 className="categoryName">{data.categoryName}</h4>
            <div className="description">{data.description}</div>
            <div className="details">
            {
                data.products.map((product)=>(
                    <div className="product-details">
                        <span  className={`productName ${product.favourite ? "favorite" : ""}`}>{product.name}</span>
                        <p className="discount">{product.discountPrice} <span className="product-price">{product.price}</span></p>
                    </div>
                ))
            }
            </div>
            </div>
            </>
            ))
    }</>)

}