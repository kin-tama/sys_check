const gulp = require("gulp");
const sync = require("browser-sync").create();
const del = require("del");



const server = (done) => {
    sync.init({
        server: {
            baseDir: 'docs'
        },
        cors: true,
        notify: false,
        ui: false,
    });
    done();
}

exports.server = server;

// Watcher

const watcher = () => {
    gulp.watch("source/*.css", gulp.series("docs")).on("change", sync.reload);
    gulp.watch("source/*.html", gulp.series("docs")).on("change", sync.reload);
    gulp.watch("source/*.js", gulp.series("docs")).on("change", sync.reload);
}

exports.default = gulp.series(
    server, watcher
);

// copy

const copy = () => {
    return gulp.src([
        "source/*.js",
        "source/*.css",
        "source/*.html"
    ], {
        base: "source"
    })
        .pipe(gulp.dest("docs"));
};

exports.copy = copy;


// delete

const clean = () => {
    return del("docs");
};

exports.clean = clean;

// docs

const build = gulp.series(
    clean,
    copy,
);

exports.build = build;

// start

const start = gulp.series(
    build,
    server,
    watcher,
);

exports.start = start;
