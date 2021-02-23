import React, {useState, useEffect} from 'react'
import Layout from './Layout'
import { getProducts } from './ApiCore';
import Card from './Card';
import Search from './Search'

const Home = () =>  {

    const [productBestSellers, setProdcutsBestSellers] = useState([])
    const [productArrivals, setProdcutsArrivals] = useState([])
    
    const loadBestSellers = () => {

        getProducts({sortBy:'sold',order: 'desc',limit: 6})
        .then(products => setProdcutsBestSellers(products))

    }

    const loadArrivals = () => {

        getProducts({sortBy:'createdAt',order: 'desc',limit: 3})
        .then(products => setProdcutsArrivals(products))

    }

    useEffect(() => {
        loadArrivals()
        loadBestSellers()
    }, [])

    return (
        <div>
            <Layout title="Home Page"
             description="Node React Ecommerce App" 
             className="container"
             >
            <Search />
            <hr/>
            <h1>Arrival Products</h1>
               <div className="row">
               {productArrivals.map((product,i) => (
                <div className="col-md-4">
                    <Card product={product}></Card>    
                </div>    
               ))} 
               </div>
            
            <hr/> 

            <h1>Best Sellers</h1>
            <div className="row">
               {productBestSellers.map((product,i) => (
                <div className="col-md-4">
                    <Card product={product}></Card>    
                </div>    
               ))} 
               </div>
            
            
            </Layout>
        </div>
    )
}

export default Home
