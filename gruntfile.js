module.exports = function (grunt) {
  grunt.initConfig({
    pkg:grunt.file.readJSON('package.json'),
    imagemin: {
      dynamic: {
        files: [{
            expand: true,
            cwd: 'dist/',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'public/'
        }]
      }
    },
    cwebp:{
      dynamic: {
        files: [{
          expand: true,
          cwd: 'src/',
          src: ['**/*.{png,jpg,gif}'],
          dest: 'dist/'
        }]
      }
    }
  });
  grunt.loadNpmTasks('grunt-contrib-imagemin');
   grunt.loadNpmTasks('grunt-cwebp');
  grunt.registerTask('default', ['cwebp','imagemin']);
}
