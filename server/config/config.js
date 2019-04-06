// Puerto

process.env.PORT = process.env.PORT || 8080;

//mongoDB: //localhost:27017/cafe;

//mongoDB: //mongo "mongodb+srv://cluster0-ocvwu.mongodb.net/test"     --username admin


process.env.CADUCIDAD_TOKEN=60*60*24*30;
process.env.SEED= process.env.SEED ||'este-es-el-seed-desarrollo';

process.env.CLIENT_ID = process.env.CLIENT_ID || '36966028305-2259f7cqnv1oqm9s68e0fg5sha0iud7k.apps.googleusercontent.com';
googleAPI = 'AIzaSyCh480wXtuzXyxNFUHKbaZ0M_PXrD20cUc';