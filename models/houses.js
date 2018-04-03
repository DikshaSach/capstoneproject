'use strict'
const mongoose = require('mongoose');

const houseSchema = mongoose.Schema ({
    name: {type: String, required: true},
    price: {type: String},
    location: {type: String},  
    details: {type: String},
    garage: {type:String},
    cooling: {type: String},
    heating: {type:String},
    pool: {type:String},
    creator: {type: mongoose.Schema.ObjectId, required: true},
    image: {
        type: String,
        
      }
});

houseSchema.methods.serialize = function(){
    return { 
        name: this.name,
        price: this.price,
        location: this.location,
        garage: this.garage,
        cooling: this.cooling,
        heating: this.heating,
        pool: this.pool,
        details: this.details,
        creator: this.creator,
        image: this.image
    }
}

const HouseLog = mongoose.model('HouseLog', houseSchema);
module.exports = {HouseLog};