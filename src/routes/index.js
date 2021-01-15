const newsRoute = require('./news');
const coursesRoute = require('./courses');
const meRoute = require('./me');
const siteRoute = require('./site');

function route(app) {
    app.use('/news', newsRoute);
    app.use('/courses', coursesRoute);
    app.use('/me', meRoute);

    app.use('/', siteRoute);
}

module.exports = route;
