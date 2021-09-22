const gulp = require('gulp');
const imagemin = require('gulp-imagemin');
const {src, series, parallel, dest, watch} = require("gulp");

function imgTask(){
  return src('src/**/*.*',  {base: './src/'}).pipe(imagemin()).pipe(gulp.dest('dist'));
}

exports.imgTask = imgTask;
