const { User, SellingTotal, Book, Review } = require('../db');

module.exports = async function ({ picture, sub, email, name }) {
    const [,IdUser] = sub.split('|');
    console.log(IdUser);

    const [user, created] = await User.findOrCreate({ 
        where:{
            email
        },
        defaults:{
            picture, name, IdUser
        },
        include:[
            {
                model: SellingTotal
            },
            {
                model: Book,
                as:'wichListBook'
            },
            {
                model: Review
            }
        ]
    });

    console.log([user, created]);

    return [user, created];
}