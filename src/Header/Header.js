import React, { Component } from 'react';
import HeaderForm from "./HeaderForm";

const Header=()=>{
        return (
            <div className="container-fluid color-facebook-header">
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <h1 className="ml-5 pt-4 text-white weight-fb">facebook</h1>
                    </div>
                    <div className="col-md-6">
                        <HeaderForm />
                    </div>
                </div>
                
                </div>
            </div>
        )
    }


export default Header;
