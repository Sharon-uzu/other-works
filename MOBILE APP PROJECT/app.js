var prompt = require('prompt-sync')({sigint: true})

const fs = require('fs');

// const jsonFile = "test.json"
// fs.readFile(jsonFile, 'utf8', function(err,data){
//     if (err) throw err;
//     console.log('File created');
    

     
// } )


// } );

const arrObj = []
    // function sign_up() {
        
        const username = prompt('Choose Username: ');
        const password = prompt('Choose Password: ');
        const pin = (prompt('Choose pin:'));
        
        
        const text = "text.txt"
       
        
       
        var str = [];
        
        if(fs.existsSync(text)){
           
            const contents =fs.readFileSync(text,'utf8')
                const arr = str
                arr.push({username, password, pin});
            fs.appendFileSync(text, JSON.stringify(arr) )
        }
        else{
            fs.appendFileSync(text,[str])
        }
        // fs.appendFile(text,JSON.stringify(arrObj),'utf8', function(err){
        //     if (err) throw err;
        //     console.log('File created');
    
        // })
        console.log(text);
    // }
    // sign_up()


// sign_up()