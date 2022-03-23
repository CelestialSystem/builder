const { series, src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const concat = require("gulp-concat");

function js() {
   return src(process.argv[4])
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(dest(process.argv[6]));
}

exports.default = series(js);

