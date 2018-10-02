const { ObjectID } = require('mongodb');

const { mongoose } = require('./../server/db/mongoose');
const { Todo } = require('./../server/models/todo');
const { User } = require('./../server/models/user');


// Todo.remove({}).then((result)=>{
//     console.log(result);
// });

Todo.findByIdAndRemove('5bb39a9011a01748d2e7fbe9').then((todo)=>{
    console.log(todo);
});

Todo.findOneAndRemove({_id: '5bb39a9011a01748d2e7fbe9'}).then((todo)=>{
    console.log(todo);
});

