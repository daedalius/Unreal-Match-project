var gulp = require('gulp');
var mainBowerFiles = require('main-bower-files');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var less = require('gulp-less');
var uglifycss = require('gulp-uglifycss');

// copy vendors libs from bower to Resources/Scripts/Vendors
gulp.task('mainfiles', function() {
    return gulp.src(mainBowerFiles({
		"overrides" : {
			"jquery" : {
				"main" : [
					"./dist/jquery.min.js"
				]
			},
			"angular" : {
				"main" : [
					"angular.min.js"
				]
			},
			"angular-animate" : {
				"main" : [
					"angular-animate.min.js"
				]
			},
			"angular-cookies" : {
				"main" : [
					"angular-cookies.min.js"
				]
			},
			"angular-ui-router" : {
				"main" : [
					"./release/angular-ui-router.min.js"
				]
			},
			"howler.js" : {
				"main": "howler.min.js",
			}
		}
	}))
    .pipe(gulp.dest('Resources/Scripts/Vendors'))
});

// deploy site on local server
gulp.task('cite-copy', function() {
	var relativeOutputDirectoryPath = '../../../../Servers/UnrealMatch/';
	
	// Resources folder
	gulp.src('Resources/**/*', { "base" : "." }).pipe(gulp.dest(relativeOutputDirectoryPath));
	// index.html
	gulp.src('smashscreen.html').pipe(gulp.dest(relativeOutputDirectoryPath));
	gulp.src('index.html').pipe(gulp.dest(relativeOutputDirectoryPath));
	gulp.src('web.Release.config').pipe(rename("web.config")).pipe(gulp.dest(relativeOutputDirectoryPath));	
});

gulp.task('full-deploy', ['ui-css', 'concat-ui-css', 'concat-ui-js', 'uglify-ui-js', 'cite-copy']);

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////

// compile ui less to css
gulp.task('ui-css', function() {
	return gulp.src([
        'Resources/Styles/ui-menu.less',	
        'Resources/Styles/ui-screen-keyboard.less',
        'Resources/Styles/ui-animations.less'       
	])
	.pipe(less())
    .pipe(gulp.dest('Resources/Styles'))
});

// merge all ui css in one file
gulp.task('concat-ui-css', function () {
	gulp.src([		
		'Resources/Styles/Reset.css',
        'Resources/Styles/clearfix.css',
        'Resources/Styles/Fonts.css',
        'Resources/Styles/ui-menu.css',	
        'Resources/Styles/ui-screen-keyboard.css',  
        'Resources/Styles/ui-animations.css'         
	])
	.pipe(concat('ui.css'))
	.pipe(gulp.dest('Resources/Styles'));
});

gulp.task('concat-ui-js', function() {	
	gulp.src([
        // vendors
        'Resources/Scripts/Vendors/jquery.min.js',
        'Resources/Scripts/Vendors/howler.min.js',
        'Resources/Scripts/Vendors/angular.min.js',
        'Resources/Scripts/Vendors/angular-animate.min.js',
        'Resources/Scripts/Vendors/angular-cookies.min.js',
        'Resources/Scripts/Vendors/angular-ui-router.min.js',
        // libs Global
        'Resources/Scripts/Global/namespace.js',
        'Resources/Scripts/Global/gamepad-input.js',
        'Resources/Scripts/Global/gamepad-connect.js',
        'Resources/Scripts/Global/gamepad-input-callbacks.js',
        'Resources/Scripts/Global/gampad-initialize.js',       
		// libs UI
        'Resources/Scripts/UI/other/screen-keyboard.js',  
        'Resources/Scripts/UI/other/select-cycle.js',       
        // application
		'Resources/Scripts/UI/application/app.js',        
        'Resources/Scripts/UI/application/routes.js',      
        'Resources/Scripts/UI/other/menu-sounds.js',  
        'Resources/Scripts/UI/other/background-translations.js',
        'Resources/Scripts/UI/other/gamepad-navigation.js',
        'Resources/Scripts/UI/other/gamepad-input-keyboard-callbacks.js',
        'Resources/Scripts/UI/other/gamepad-input-menu-callbacks.js',
        'Resources/Scripts/UI/other/gamepad-input-select-callbacks.js',         
        // services      
        'Resources/Scripts/UI/services/navigation.service.js',	        
        // controllers	        
        'Resources/Scripts/UI/controllers/main.controller.js',	
        'Resources/Scripts/UI/controllers/start.controller.js',        
        'Resources/Scripts/UI/controllers/new-game.controller.js',	        
        'Resources/Scripts/UI/controllers/join-game.controller.js',	        
        'Resources/Scripts/UI/controllers/gamepad-info.controller.js',
        'Resources/Scripts/UI/controllers/game-settings.controller.js'
	])
	.pipe(concat('ui.js'))
    .pipe(gulp.dest('Resources/Scripts/UI'))
});

gulp.task('uglify-ui-js', function() {  
  return gulp.src(["Resources/Scripts/UI/ui.js"])
    .pipe(uglify())
    .pipe(rename("ui.min.js"))
    .pipe(gulp.dest('Resources/Scripts/UI'))
});

///////////////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////////////