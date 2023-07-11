const { SellingTotal } = require("../db");

module.exports = async function(){
    const data = await SellingTotal.findAll();
    return data;
}