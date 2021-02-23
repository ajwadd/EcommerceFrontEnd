import React, { Fragment } from 'react'
import { isAuthanticated } from '../auth/helpers'
import { Link } from 'react-router-dom'

import Layout from './../core/Layout'

function Dashboard() {

    const { user: { name, email, role} } = isAuthanticated()

    const userInfo = () => {

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

    const PurshaseHistory = () => {
        return (
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    Purshase History
                </h5>
                <ul className="list-group- list-group-flush">
                    <li className="list-group-item">History</li>
                    
                </ul>
            </div>
        </div>
        )
    }

    const UserLinks = () => {
        return (
            <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                    Purshase History
                </h5>
                <ul className="list-group- list-group-flush">

                    <li className="list-group-item">

                    <Link className="nav-link" to="/cart">My Cart</Link>

                    </li>
                    <li className="list-group-item">

                    <Link className="nav-link" to="/profile">Profile</Link>  

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
                       {UserLinks()}
                   </div>
               
                   <div className="col-md-9">
                       {userInfo()}
                       <hr/>
                       {PurshaseHistory()}
                   </div>

                   </div>
               


               
            
           
            
            </Layout>
            
        </Fragment>
    )
}

export default Dashboard
