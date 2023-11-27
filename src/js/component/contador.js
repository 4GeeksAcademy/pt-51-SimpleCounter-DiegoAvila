import React from "react";

function Contador({digito1, digito2, digito3, digito4, digito5, digito6}){
    return(
        <div className="row">
            <div className="col-sm-2 mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body">    
                    <p className="card-text">{digito6}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-2 mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body">    
                    <p className="card-text">{digito5}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-2 mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body">    
                    <p className="card-text">{digito4}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-2 mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body">    
                    <p className="card-text">{digito3}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-2 mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body">    
                    <p className="card-text">{digito2}</p>
                </div>
                </div>
            </div>
            <div className="col-sm-2 mb-3 mb-sm-0">
                <div className="card">
                <div className="card-body">    
                    <p className="card-text">{digito1}</p>
                </div>
                </div>
            </div>
        </div>
    );
}
export default Contador;