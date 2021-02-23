import React, { Fragment } from 'react'
import { isAuthanticated } from '../auth/helpers'
import { Link } from 'react-router-dom'

import Layout from './../core/Layout'

function AdminDashboard() {

    const { user: { name, email, role} } = isAuthanticated()

    const adminInfo = () => {

        return (
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    User Information
                </h5>
                <ul className="list-group- list-group-flush">
                    <li className="list-group-item">{name}</li>
                    <li className="list-group-item">{email}</li>
                    <li className="list-group-item">{role ? 'Admin' : 'User'}</li>
                </ul>
            </div>
        </div> 
        )
    }



    const adminLinks = () => {
        return (
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    Purshase History
                </h5>
                <ul className="list-group- list-group-flush">

                    <li className="list-group-item">

                    <Link className="nav-link" to="/category/create">Create Category</Link>

                    </li>
                    <li className="list-group-item">

                    <Link className="nav-link" to="/product/create">Product create</Link>  

                    </li>                                 
                </ul>
            </div>
        </div>
        )
    }

    return (
        <Fragment>
            <Layout
               
               title="Dashboard"
               description={`Welcome ${ name }`}
               className="container"
               >

               <div className="row">
                   <div className="col-md-3">
                       {adminLinks()}
                   </div>
               
                   <div className="col-md-9">
                       {adminInfo()}
                       
                   </div>

                   </div>
               


               
            
           
            
            </Layout>
            
        </Fragment>
    )
}

export default AdminDashboard
