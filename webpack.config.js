module.exports = {
    devtool: 'source-map',
    entry: './src/app.js',
    output: {
        path: './out',
        filename: 'curious-hagoth.min.js'
    },
    externals: {
        angular: 'angular'
    }
};
