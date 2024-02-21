import childProcess from 'child_process';
import gulp from 'gulp';
import { cpSync } from 'fs';
import { GulpCompletionCallback, PACKAGES_DIR, PACKAGES_BUILD_DIR } from './common';

gulp.task('build', gulp.series(
  compileTypescript,
  linkNotCompiledSource,
));

function compileTypescript(done: GulpCompletionCallback): void {
  childProcess.execSync('tsc -p tsconfig.build.json');
  done();
}

/*
 * Move binaries to folder containing tsc output.
 * Could not be handled by configuring tsconfig.json
 */
function linkNotCompiledSource(done: GulpCompletionCallback): void {
  cpSync(`${PACKAGES_DIR}/metro-config/bin`, `${PACKAGES_BUILD_DIR}/metro-config/bin`, { recursive: true });
  done();
}
