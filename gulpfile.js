var gulp     = require('gulp'),
    jsonLint = require('gulp-jsonlint'),
    gutil    = require('gulp-util');

// Reporter
var jsonReporter = function(file){
    gutil.log('File: ' + file.path + ' is not valid json');
}

// Validate the json file
gulp.task('default', function() {
    
      gulp.src('snippets/snippets.json')
          .pipe(jsonLint())
          .pipe(jsonLint.reporter(jsonReporter))
          .pipe(jsonLint.failOnError()); // 
});
