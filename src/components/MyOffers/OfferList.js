import React from "react";
import { connect } from "react-redux";
import OfferItem from "./OfferItem";

const mapStateToProps = (state) => ({
    filteredOffers: state.filteredOffers.offers,
});

const OfferList = (props) => {
    if(props.filteredOffers){
        return (
            <div className="list">
                {props.filteredOffers.map((offer, index) => {
                    return <OfferItem key={index} offer={offer} />;
                })}
            </div>
        );   
    }
    else
    {
        return (
            <div>Loading</div>
        );
    }
    
};

export default connect(mapStateToProps)(OfferList);