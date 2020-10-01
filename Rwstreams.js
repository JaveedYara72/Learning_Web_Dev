 const fs= require('fs');
 //Here data is loaded in chunks instead of whole file at once
 const readStream=fs.createReadStream('./example.txt','utf8');
 const writeStream=fs.createWriteStream('example2.txt'); 
 readStream.on('data',(chunk)=>{
     writeStream.write(chunk);//this writes data as its being read in chunks
 });

 // Using Streams basically speeds up reading and writing as we do it in chunks
 // Also for very large files having memory in Gigs we need to have that much buffer memory available to use the readFile method.
 // When we use readable Streams we do not need a large buffer memory
