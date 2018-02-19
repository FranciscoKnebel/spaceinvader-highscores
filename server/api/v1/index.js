module.exports = (app) => {
	require('./scores/top10')(app);
	require('./scores/user')(app);
};
