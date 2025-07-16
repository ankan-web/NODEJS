const fs = require('fs');

fs.writeFile("hello.txt" , "writing file", (err)=>{
  if(err) console.error("Error occurred");
  else console.log('file written ');
});