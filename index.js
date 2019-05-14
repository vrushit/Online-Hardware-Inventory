//Reading th e Content of JSON File

const fs = require('fs'); // Core Node  Modules

const http = require('http'); //Another Core Module

const url = require('url'); //inbuild

const json = fs.readFileSync(`${__dirname}/data/data.json`,'utf-8'); // Method Of FS

const MouseJson = fs.readFileSync(`${__dirname}/data/data-display.json`,'utf-8');

const keyboardJson = fs.readFileSync(`${__dirname}/data/data-keyboard.json`,'utf-8');

const graphicCardJson = fs.readFileSync(`${__dirname}/data/data-graphicCard.json`,'utf-8');

const monitorJson = fs.readFileSync(`${__dirname}/data/data-monitor.json`,'utf-8');

const speakerJson = fs.readFileSync(`${__dirname}/data/data-speaker.json`,'utf-8');

const processorJson = fs.readFileSync(`${__dirname}/data/data-processor.json`,'utf-8');

const videoCardJson = fs.readFileSync(`${__dirname}/data/data-videoCard.json`,'utf-8');

//JSON String returns Object

const laptopData = JSON.parse(json); 

const mouseData = JSON.parse(MouseJson);

const keyboardData = JSON.parse(keyboardJson);

const graphicCardData = JSON.parse(graphicCardJson);

const monitorData = JSON.parse(monitorJson);

const speakerData = JSON.parse(speakerJson);

const processorData = JSON.parse(processorJson);

const videoCardData = JSON.parse(videoCardJson);


const server = http.createServer((req,res) => {

    // res response
    // req request

  const pathname =  url.parse(req.url,true).pathname; // url stored = req
    //console.log(pathname);
    const queryID  = url.parse(req.url,true).query.id;

    console.log(queryID);
    ///Product OVerview

    if(pathname === '/product' || pathname ==='/')
    {

        res.writeHead(200, {'Content-type': 'text/html'}); //return HTML  //everythong Fine = 200
        fs.readFile(`${__dirname}/templates/template-overview.html`,'utf-8',(err,data)=>{
            let overviewOutput = data;
            fs.readFile(`${__dirname}/templates/template-cards.html`,'utf-8',(err,data)=>{



               const cardsOutput =  laptopData.map(el => replaceTemplate(data,el)).join('');

                overviewOutput = overviewOutput.replace('{%CARDS%}',cardsOutput);
                res.end(overviewOutput);

            }) ;

        }) ;

    }
    //////LAPTOP Detail
    else if(pathname === '/laptop' && queryID < laptopData.length)
    {
        res.writeHead(200, {'Content-type': 'text/html'}); //return HTML  //everythong Fine = 200
        fs.readFile(`${__dirname}/templates/template-laptop.html`,'utf-8',(err,data)=>{

            const laptop = laptopData[queryID];
const output = replaceTemplate(data,laptop);
             res.end(output);



        }) ; 
    }
    
    // --------------Graphic Card---------------------

    else if(pathname === '/graphicCard') {
        res.writeHead(200, {'Content-type': 'text/html'}); //return HTML  //everythong Fine = 200
        fs.readFile(`${__dirname}/templates/graphicCard.html`,'utf-8',(err,data)=>{
            let overviewOutput = data;
            fs.readFile(`${__dirname}/templates/template-graphicCard.html`,'utf-8',(err,data)=>{


               const cardsOutput =  graphicCardData.map(el => replaceTemplategraphicCard(data,el)).join('');

                overviewOutput = overviewOutput.replace('{%CARDS%}',cardsOutput);
                res.end(overviewOutput);

            }) ;

        }) ;

    }

    //-----------------------Mouse -------------------- 
    else if(pathname === '/Mouse') {
        res.writeHead(200, {'Content-type': 'text/html'}); //return HTML  //everythong Fine = 200
        fs.readFile(`${__dirname}/templates/mouse.html`,'utf-8',(err,data)=>{
            let overviewOutput = data;
            fs.readFile(`${__dirname}/templates/template-mouse.html`,'utf-8',(err,data)=>{


               const cardsOutput =  mouseData.map(el => replaceTemplateMethod(data,el)).join('');

                overviewOutput = overviewOutput.replace('{%CARDS%}',cardsOutput);
                res.end(overviewOutput);

            }) ;

        }) ;

    }
    //------------------------- Processors -------------
    else if(pathname === '/Processor') {
        res.writeHead(200, {'Content-type': 'text/html'}); //return HTML  //everythong Fine = 200
        fs.readFile(`${__dirname}/templates/processor.html`,'utf-8',(err,data)=>{
            let overviewOutput = data;
            fs.readFile(`${__dirname}/templates/template-processor.html`,'utf-8',(err,data)=>{


               const cardsOutput =  processorData.map(el => replaceTemplateMethod(data,el)).join('');

                overviewOutput = overviewOutput.replace('{%CARDS%}',cardsOutput);
                res.end(overviewOutput);

            }) ;

        }) ;

    }
    
    // ---------------------Monitor -------------------//
    else if(pathname === '/Monitor') {
        res.writeHead(200, {'Content-type': 'text/html'}); //return HTML  //everythong Fine = 200
        fs.readFile(`${__dirname}/templates/monitor.html`,'utf-8',(err,data)=>{
            let overviewOutput = data;
            fs.readFile(`${__dirname}/templates/template-monitor.html`,'utf-8',(err,data)=>{


               const cardsOutput =  monitorData.map(el => replaceTemplateMethod(data,el)).join('');

                overviewOutput = overviewOutput.replace('{%CARDS%}',cardsOutput);
                res.end(overviewOutput);

            }) ;

        }) ;

    }

    // --------------Video card -------------------//

    else if(pathname === '/videoCard') {
        res.writeHead(200, {'Content-type': 'text/html'}); //return HTML  //everythong Fine = 200
        fs.readFile(`${__dirname}/templates/videoCard.html`,'utf-8',(err,data)=>{
            let overviewOutput = data;
            fs.readFile(`${__dirname}/templates/template-videoCard.html`,'utf-8',(err,data)=>{


               const cardsOutput = videoCardData.map(el => replaceTemplateMethod(data,el)).join('');

                overviewOutput = overviewOutput.replace('{%CARDS%}',cardsOutput);
                res.end(overviewOutput);

            }) ;

        }) ;

    }

    //------------ Speakers------------------------
    else if(pathname === '/Speakers') {
        res.writeHead(200, {'Content-type': 'text/html'}); //return HTML  //everythong Fine = 200
        fs.readFile(`${__dirname}/templates/speaker.html`,'utf-8',(err,data)=>{
            let overviewOutput = data;
            fs.readFile(`${__dirname}/templates/template-speaker.html`,'utf-8',(err,data)=>{


               const cardsOutput =  speakerData.map(el => replaceTemplateMethod(data,el)).join('');

                overviewOutput = overviewOutput.replace('{%CARDS%}',cardsOutput);
                res.end(overviewOutput);

            }) ;

        }) ;

    }

     //------------Keyboards------------------------
     else if(pathname === '/Keyboard') {
        res.writeHead(200, {'Content-type': 'text/html'}); //return HTML  //everythong Fine = 200
        fs.readFile(`${__dirname}/templates/keyboards.html`,'utf-8',(err,data)=>{
            let overviewOutput = data;
            fs.readFile(`${__dirname}/templates/template-keyboards.html`,'utf-8',(err,data)=>{


               const cardsOutput =  keyboardData.map(el => replaceTemplateMethod(data,el)).join('');

                overviewOutput = overviewOutput.replace('{%CARDS%}',cardsOutput);
                res.end(overviewOutput);

            }) ;

        }) ;

    }

    // -------------Home-----------------
    else if(pathname === '/home') {
        res.writeHead(200, {'Content-type': 'text/html'}); //return HTML  //everythong Fine = 200
        fs.readFile(`${__dirname}/templates/template-overview.html`,'utf-8',(err,data)=>{
            let overviewOutput = data;
            fs.readFile(`${__dirname}/templates/template-cards.html`,'utf-8',(err,data)=>{


               const cardsOutput =  laptopData.map(el => replaceTemplate(data,el)).join('');

                overviewOutput = overviewOutput.replace('{%CARDS%}',cardsOutput);
                res.end(overviewOutput);

            }) ;

        }) ;

    }

    //IMAGE
        else if((/\.(jpg|jpeg|png|gif)$/i).test(pathname))
    {
        fs.readFile(`${__dirname}/data/img${pathname}`,(err,data)=>{

            res.writeHead(200, {'Content-type': 'Image/jpg'});

            res.end(data);

        });
    }
    else
    {
        res.writeHead(404, {'Content-type': 'text/html'}); //return HTML  //everythong Fine = 200

        res.end('!!ERROR!!');
    }


});

server.listen(1337, '127.0.0.1', () => {
   console.log('Server has started listening');
});

function replaceTemplate(originalHTML,laptop){
    let output  = originalHTML.replace(/{%PRODUCTNAME%}/g,laptop.productName);
    output = output.replace(/{%IMAGE%}/g,laptop.image);
    output = output.replace(/{%PRICE%}/g,laptop.price);
    output = output.replace(/{%SCREEN%}/g,laptop.screen);
    output = output.replace(/{%CPU%}/g,laptop.cpu);
    output = output.replace(/{%STORAGE%}/g,laptop.storage);
    output = output.replace(/{%RAM%}/g,laptop.ram);
    output = output.replace(/{%DESCRIPTION%}/g,laptop.description);
    output = output.replace(/{%ID%}/g,laptop.id);
    return output;
}


function replaceTemplategraphicCard(originalHTML, laptop)
{
    let output  = originalHTML.replace(/{%PRODUCTNAME%}/g,laptop.productName);
    output = output.replace(/{%IMAGE%}/g,laptop.image);
    output = output.replace(/{%PRICE%}/g,laptop.price);
    output = output.replace(/{%COMPANY%}/g,laptop.company);
    output = output.replace(/{%DESCRIPTION%}/g,laptop.description);
    output = output.replace(/{%ID%}/g,laptop.id);
    return output;   
}

function replaceTemplateMethod(originalHTML, laptop)
{
    let output  = originalHTML.replace(/{%PRODUCTNAME%}/g,laptop.productName);
    output = output.replace(/{%IMAGE%}/g,laptop.image);
    output = output.replace(/{%PRICE%}/g,laptop.price);
    output = output.replace(/{%COMPANY%}/g,laptop.company);
    output = output.replace(/{%DESCRIPTION%}/g,laptop.description);
    output = output.replace(/{%ID%}/g,laptop.id);
    return output;   
}







