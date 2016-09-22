import gulp from 'gulp';
import sass from 'gulp-sass';
import {path, tasks} from './const';

const SASS = '**/*.scss';

gulp.task(tasks.CLIENT_BUILD_SASS, () => {
  return gulp.src(SASS)
             .pipe(sass())
             .pipe(gulp.dest('.'));
});
