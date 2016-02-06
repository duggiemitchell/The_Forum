import gulp from "gulp";
import browserify from "browserify";
import source from "vinyl-source-stream";

gulp.task("transpile", () => {

  return browserify("src/app.js")
    .transform("babelify")
    .bundle()
    .pipe(source("bundle.js"))
    .pipe(gulp.dest("dist"));

});
gulp.task("watch", ["transpile"], () => {
  //files for gulp to keep track of changes
  gulp.watch("src/**/*.js", ["transpile"]);
})
//Gulp is a dependency of the default task
gulp.task("default", ["transpile"]);
