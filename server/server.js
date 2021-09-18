import express from 'express'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import App from '../src/App'

const PORT = 8000

const app = express()

app.use('^$/', (res, req, next)=>{
    fs.readFile(path.resolve('./build/index.html'), 'utf-8', (err, data)=>{
        if(err){
            console.log(err)
            return res.statusCode(500).send('Some error has Occured')
        }
        return res.send(
            data.replace('<div id="root"></div>', `<div id="root">${ReactDOMServer.renderToString(<App/>)}</div>`)
          );
    })
})

app.use(express.static('../build'));

app.listen(PORT, ()=>{
    console.log(`App is listening at ${PORT}`)
} )