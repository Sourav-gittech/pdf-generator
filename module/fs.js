const fs=require('fs'); 





//create a file 
// fs.writeFile('./test.text','hello world',function(err){
//     if(err) throw err;
//     console.log('file created');
// })

//read a file
fs.readFile('./test.text','utf8',function(err,data){
    if(err) throw err;
    console.log(data);
})

//update/ append a file



//delete a file