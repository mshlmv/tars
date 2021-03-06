'use strict';

const gulp = tars.packages.gulp;
const gutil = tars.packages.gutil;

/**
 * Re-init builder
 */
module.exports = () => {
    return gulp.task('service:re-init', ['service:remove-init-fs'], () => {
        if (!tars.cli) {
            tars.say(
                gutil.colors.yellow('This command is depricated and won\'t be supported in the future!\n')
            );
        }
        gulp.start('service:init');
    });
};
