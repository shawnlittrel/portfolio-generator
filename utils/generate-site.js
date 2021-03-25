const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err =>{
            //iff there's an error, reject promise and send error to catch method
            if(err){
                reject(err);
                //return out of function to make sure the promise doesn't complete
                return;
            }

            //if everything works, resolve the promise and send the successful data to .then
            resolve({
                ok: true,
                message: 'File created.'
            });
        });
    });
};

const copyFile = () =>{
    return new Promise((resolve, reject) =>{
        fs.copyFile('./src/style.css', './dist/style.css', err=>{
            if(err){
                reject(err);
                return;
        }
            resolve({
                ok: true,
                message: 'Style sheet copied successfully.'
            });      
         });
    });
};

module.exports = { writeFile, copyFile };