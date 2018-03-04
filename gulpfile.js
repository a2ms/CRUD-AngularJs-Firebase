var gulp = require('gulp')
var config = require('./gulpfile.config')
var inject = require('gulp-inject')
var concat = require('gulp-concat')
var rename = require('gulp-rename')
var runSequence = require('run-sequence')
var uglify = require('gulp-uglify')
var imagemin = require('gulp-imagemin')
var cache = require('gulp-cache')
var cleanCSS = require('gulp-clean-css')

gulp.task('default', function (callback) {
  runSequence('dev', 'build', callback)
  console.log('DONE')
})

gulp.task('inject-html', function () {
  return gulp.src('./index.tpl.html')
    .pipe(inject(gulp.src(config.dev.css.concat(config.dev.js), {
      read: false
    })))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('.'))

  console.log(config.dev.css.concat(config.dev.js))
})

gulp.task('watch', function() {
  gulp.watch('./assets/js/*.js', ['inject-html'])
  gulp.watch('./*.js', ['inject-html'])
  //gulp.watch('./view/**/*.js', ['inject-html'])
  gulp.watch('./view/*.html', ['inject-html'])
  gulp.watch('./assets/css/*.css', ['inject-html'])
})

gulp.task('dev', [
  'inject-html',
  'watch'
])

// gulp.task('minify:js', function () {
//   return gulp.src(config.dev.js)
//     // .pipe(concat('main.js'))
//     // .pipe(rename({suffix: '.min'}))
//     .pipe(uglify().on('error', function (error) {
//       console.log(error)
//     }))
//     .pipe(gulp.dest('./dist/js'))
// })

// gulp.task('minify:css', function () {
//   return gulp.src(config.dev.css)
//     // .pipe(concat('main.css'))
//     .pipe(rename({suffix: '.min'}))
//     .pipe(gulp.dest('./dist/css'))
// })

// gulp.task('minify:img', function () {
//   return gulp.src('assets/img/*')
//     .pipe(cache(imagemin({ optimizationLevel: 5, progressive: true, interlaced: true })))
//     .pipe(gulp.dest('dist/img'))
// })

// gulp.task('handle:html', function () {
//   return gulp.src('./index.html')
//     .pipe(gulp.dest('./dist'))
// })

gulp.task('build', [
  // 'handle:html',
  // 'minify:js',
  // 'minify:css',
  // 'minify:img',
  'inject-html'
])