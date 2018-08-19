const {ObjectId} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id = '5b70bc2d4c0a8c205a34c6eb';

User.findById(id).then((user) => {
    if(!user){
        return console.log('User not found');
    }
    console.log('User',user);
}).catch((e) => console.log(e));
// var id = '5b710b0b786583941dbeb3c511';
//
// if(!ObjectId.isValid(id)) {
//     return console.log('ID not valid');
// }
// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos: ',todos);
// });
//
// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo',todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by ID', todo);
// }).catch((e) => console.log(e));
