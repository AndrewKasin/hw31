const gulp = require('gulp');
const browserSync = require('browser-sync');

gulp.task('server', function() {
    browserSync.init({
        server: {
            baseDir: "./app/"           
        }
        //,
        // server: {
        //      baseDir: './app2/'
        // }
    });
});
// gulp.task('server2', function() {
//     browserSync.init({
//         server: {
//             baseDir: "./app2/index2.html"
//         }
//     });
// });