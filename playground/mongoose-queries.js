const { ObjectID } = require('mongodb');
const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');

// var id = '5bb1a49945586c16f86827f911';

// if(!ObjectID.isValid(id)){
//     console.log('ID not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => { console.log(e) });

//User.findById

User.findById('5bb05b18875c4d1f44a2467').then((user) => {
    if (!user) {
        return console.log('Unable to find user');
    }

    console.log(JSON.stringify(user, undefined, 3))
}, (e) => {
    console.log(e);
});