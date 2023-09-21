


var fs = require('fs');



//functions
function getalltodos(){
    return JSON.parse(fs.readFileSync('data.json','utf-8'))
}
function savetodos(todo){
//    var todos=JSON.parse(fs.readFileSync('data.json','utf-8'))

//    var newid=(todos.length)?todos[todos.length-1].id+1:1
//    todo.id=newid
//    todos.push(todo)
//    fs.writeFileSync('data.json',JSON.stringify(todos))
//    return todo
   fs.readFileSync('data.json','utf-8',(err,data)=>{
    var todos =JSON.parse(data)
    var newid=(todos.length)?todos[todos.length-1].id+1:1
       todo.id=newid
       todos.push(todo)
       fs.writeFile('data.json',JSON.stringify(todos),(err,data)=>{
        
       })

   })
}
function getTodoById(id){
   var todos=JSON.parse(fs.readFileSync('data.json','utf-8'))
   var todo=todos.find(todo => todo.id==id)
   return todo
}
function todoUpdeteById(id,name){
   var todos=JSON.parse(fs.readFileSync('data.json','utf-8'))
   var todo= todos.find((todo) => todo.id==id)
   todo.name=name
fs.writeFileSync('data.json', JSON.stringify(todos))
return todo
}
function todoDelete(id,name){
   var todos=JSON.parse(fs.readFileSync('data.json','utf-8'))
   // var todo= todos.find((todo) => todo.id==id)
   let tod = todos.findIndex(item => item.id == id);

   todos.splice(tod,1)
   fs.writeFileSync('data.json', JSON.stringify(todos))
   return tod
}

module.exports ={getalltodos,savetodos,getTodoById,todoUpdeteById,todoDelete}