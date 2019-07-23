import React, { Component } from 'react';
import BodyForm from "./BodyForm";
import BodyOther from "./BodyOther";

const Body=()=>{
        return (
            <div>
                <div className="container">
                <div className="row">
                    <div className="col-md-6">
                    <BodyOther />
                    </div>
                    <div className="col-md-6">
                        <BodyForm />
                    </div>
                </div>

                </div>
            </div>
        )
    }


export default Body;
