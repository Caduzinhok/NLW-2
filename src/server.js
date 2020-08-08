//Variáveis
const express = require('express')
const server = express()

const { pageLanding, pageStudy, pageGiveClasses, pageSuccess, saveClasses} = require('./pages')
//configurar nunjucks
const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})

server
//configurar arquivos estaticos (css, scripts, imagens)
.use(express.urlencoded({extended: true}))
.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.get("/success",pageSuccess)
.post("/save-classes",saveClasses)
.listen(5500)
