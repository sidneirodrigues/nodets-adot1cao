import express from 'express';
import dotenv from 'dotenv';
import mustache from 'mustache-express';
import path, { dirname } from 'path';
import mainRoutes from './routes/index';

dotenv.config();

const server = express();
// CONFIGURAÇAO DO TEMPLATE ENGINE MUSTACHE
server.set('view engine', 'mustache');
server.set('views', path.join(__dirname, 'views'));
server.engine('mustache', mustache())
// CONFIGURAÇÃO DA PASTA PUBLICA
server.use(express.static(path.join(__dirname, '../public')));

// CONFIGURAÇÕES DAS ROTAS
server.use('/', mainRoutes);

// CONFIGURAÇÃO DE PÁGINA NÃO ENCONTRADA
server.use((req, res)=>{
    res.render('pages/404');
})

// CONFIGURAÇÃO DE ESCUTA DO SERVIDOR WEB
server.listen(process.env.PORT);
console.log(`Rodando na porta: ${process.env.PORT}`);