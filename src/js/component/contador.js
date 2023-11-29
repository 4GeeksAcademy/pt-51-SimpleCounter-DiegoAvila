import React from "react";

function Contador({digito1, digito2, digito3, digito4, digito5, digito6}){
    return(
        
        <div className="row justify-content-md-center pt-3 pb-3 bg-secondary" >
            <div className="col-sm-auto mb-3 mb-sm-0" >
                <div className="card">
                <div className="card-body bg-dark rounded" style={{height: "100px"}}>                   
                    <p className="card-text text-white fs-1"><i className="fa fa-clock text-white"></i> </p>
                </div>
                </div>
            </div>
              
            <div className="col-sm-auto mb-3 mb-sm-0 ">
                <div className="card">
                <div className="card-body bg-dark rounded" style={{height: "100px"}}>                   
                    <p className="card-text text-white fs-1">{digito6}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-auto mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body bg-dark rounded" style={{height: "100px"}}>    
                    <p className="card-text text-white fs-1">{digito5}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-auto mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body bg-dark rounded" style={{height: "100px"}}>    
                    <p className="card-text text-white fs-1">{digito4}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-auto mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body bg-dark rounded" style={{height: "100px"}}>    
                    <p className="card-text text-white fs-1">{digito3}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-auto mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body bg-dark rounded" style={{height: "100px"}}>    
                    <p className="card-text text-white fs-1">{digito2}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-auto mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body bg-dark rounded " style={{height: "100px"}}>    
                    <p className="card-text text-white fs-1">{digito1}</p>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Contador;