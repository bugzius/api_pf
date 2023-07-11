module.exports = async function({IdSelling}){
    const data = await SellingTotal.findByPk(IdSelling);
    return data;
}