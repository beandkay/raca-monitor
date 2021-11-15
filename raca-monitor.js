const request = require('request');
const chalk = require('chalk');

function showinfo()
{	
	console.log('-------------------------------------------------------------------------------')
    request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&name=egg&order=asc&saleType&category=17&tokenType',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.yellow('Lowest egg price:') + chalk.red(body['list'][0]['fixed_price']));
        });
    request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=yellow',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.green('Lowest yellow diamond price:') + chalk.red(body['list'][0]['fixed_price']));
        });
    request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=metamon&saleType&category=13&tokenType',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.blue('Lowest metamon price:') + chalk.red(body['list'][0]['fixed_price']));
    });
    request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=15&tokenType',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.magenta('Lowest potion price:') + chalk.red(body['list'][0]['fixed_price']));
    });
    request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=&saleType&category=20&tokenType',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.cyan('Lowest KISS land price:') + chalk.red(body['list'][0]['fixed_price']));
    });
    request('https://market-api.radiocaca.com/nft-sales?pageNo=1&pageSize=20&sortBy=fixed_price&order=asc&name=purple',
        { json: true }, (err, res, body) => {
            if (err) {
                return console.log(err); }
            console.log(chalk.magentaBright('Lowest purple diamond price:') + chalk.red(body['list'][0]['fixed_price']));
    });
}
setInterval(showinfo,10000);