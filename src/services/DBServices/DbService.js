const { sequelize, User, Role, Department, Comment } = require('../../database/models');
const { Op } = require('sequelize');
/**
 * Get all user
 */
const getUsers = async () => User.findAll({

    // attributes: [[sequelize.fn('MAX', sequelize.col('age')),'max']],

    // attributes: ['id', [sequelize.fn('COUNT', sequelize.col('comments.userId')),'count']],
    // include: [{
    //     model: Comment,
    //     attributes: [],
    //     as: 'comments',
    // }],
    // group: ['User.id'],
    // having : {
    //     count: {
    //         [Op.gte]: 2,
    //     }
    // },

});

/**
 * Get one user by id
 */
const findOneUser = async (id) => User.findOne({
    where: {
        id: id,
    },

    // include: ['roles', 'department'],
    include: [
        {
            model: Role,
            attributes:['roleId'],
            as: 'roles',
        },
        {
            model: Department,
            attributes:['departmentName'],
            as: 'department',
        },
        {
            model: Comment,
            attributes:['comment', 'userId'],
            as: 'comments',
        },
    ],
    attributes: [ 'id', 'name', 'age', 'imageName'],
});

/**
 * Create user
 */
const createUser = async (data) => {

    try {

        await sequelize.transaction(async (t) => {

            const userId = [];

            await User.create({
                name: data.name,
                age: data.age,
                imageName: '',
            }, { transaction: t }).then(res=>{
                userId.push(res.id)
            });

            await Role.create({
                userId: userId,
                roleId: 1,
            },{ transaction: t });

            await Comment.create({
                userId: userId,
                comment: 'one comment',
            },{ transaction: t });

        });
        // If the execution reaches this line, the transaction has been committed successfully
        // `result` is whatever was returned from the transaction callback (the `user`, in this case)
    } catch (error) {
        // If the execution reaches this line, an error occurred.
        // The transaction has already been rolled back automatically by Sequelize!
    }
};

/**
 * Update user by id
 */
const updateUser = async (data) => User.update({
    name: data.name,
    age: data.age,
},{
    where: {
        id: data.id
    },
});

/**
 * Delete user by id
 */
const deleteUser = async (id) => User.destroy({
    where: {
        id: id
    }
});

/**
 * Update imageName for user by id
 */
const updateFile = async (data) => User.update({
    imageName: data.imageName,
},{
    where: {
        id: data.id
    }
});


module.exports = {
    getUsers,
    findOneUser,
    createUser,
    updateUser,
    deleteUser,
    updateFile,
};