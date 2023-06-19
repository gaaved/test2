const { User } = require('../../database/models');

/**
 * Get all user
 */
const getUsers = async () => User.findAll();

/**
 * Get one user by id
 */
const findOneUser = async (id) => User.findOne({
    where: {
        id: id
    },
    include: ['roles', 'department'],
});

/**
 * Create user
 */
const createUser = async (data) => User.create({
    name: data.name,
    age: data.age,
    imageName: '',
});

/**
 * Update user by id
 */
const updateUser = async (data) => User.update({
    name: data.name,
    age: data.age,
},{
    where: {
        id: data.id
    }
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