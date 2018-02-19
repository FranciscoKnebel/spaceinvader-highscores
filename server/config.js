const helmet = require('helmet');
const morgan = require('morgan');


module.exports = (app) => {
	app.use(helmet());
	app.use(morgan('[:date[clf]] :method :url :status :response-time ms - :res[content-length]'));

	app.engine('html', require('ejs').renderFile);

	app.set('view engine', 'html');
};
