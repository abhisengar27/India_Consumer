var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//messages and mandatory fields

var OAOProductDetail = new Schema({

                product_code:{type: String, required: true},
                product_name: {type: String, required: true},
                child_of:{type: String, required: true},
                linked_crossselling_product:{type: String},
                linked_upsell_product:{type: String},
                display_text:{type: String},
                display_text_upsell:{type:String},
                cre_time:{type: Date,default: Date.now},
                mod_time:{type: Date,default: Date.now},
                cre_by:{type:String,default:'SETUP'},
                mod_by:{type: String,default:'SETUP'},
                del_flg:{type:Boolean,default:false},
                sequence:{type:String,default:'000'},
                core_identifier:{type:String},
                verification_mode:{type:Boolean,default:false}
    });

module.exports = mongoose.model('OAOProductDetail', OAOProductDetail);