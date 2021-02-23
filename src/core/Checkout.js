import React, { useState, useEffect} from 'react'
import { isAuthanticated } from './../auth/helpers'
import { Link } from 'react-router-dom'
import DropIn from 'braintree-web-drop-in-react'
import { getBraintreeToken } from './ApiCore'

const Checkout = ({ products}) => {

    const [data, setData] = useState({
        braintreeToken: null,
        error: null,
        instance: {}
    })
    const userId =  isAuthanticated() && isAuthanticated().user._id;
    const token = isAuthanticated() && isAuthanticated().token;
    
    useEffect(() => {
        getBraintreeToken(userId, token)
        .then(res => setData({...data, braintreeToken: res.token}))
        .catch(err => setData({...data, error: err}))
    }, [])

    const totalToCheckout = (products) => {

       return products.reduce((total, product) => total+ (product.count * product.price), 0)
    }

    const dropIn = () => {
        <div>
               {data.braintreeToken !== null && products.length > 0 && (
                     <DropIn options={{
                         authorization: data.braintreeToken

                     }} 
                     onInstance={instance => data.instance = instance}
                     />
                )}
        </div>
      
    }

    const showBtnToCkechkout = () => {

        if(isAuthanticated()) {
            return (
                <>
                {dropIn()}
                <button className="btn btn-raised btn-success btn-block">Checkout</button>
                </>
            )
        }
        return (
            
                <Link to="/signin">
                <button className="btn btn-raised btn-warning btn-block">SignIn to Checkout</button>
                </Link>
            
            
        )
    }

    return (
        <div>
            <h2 className="text-center">Total : <span className="badge badge-success"> {totalToCheckout(products)}</span></h2>
            {showBtnToCkechkout()}
        </div>
    )
}

export default Checkout
