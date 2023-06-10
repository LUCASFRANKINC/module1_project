var gulp = require('gulp');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('prefix', function() {
  return gulp.src("css/*.css")
  .pipe(autoprefixer({ browsers: ['IE 6','Chrome 9', 'Firefox 14']}))
  .pipe(gulp.dest("built_css"));
});

gulp.task('default', () => {
	gulp.watch('css/*.css', gulp.series('prefix'));
}	);