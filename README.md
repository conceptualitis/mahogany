# Mahogany

Don't let one bad apple spoil the bunch. Make them _all_ bad apples.

This is a PostCSS plugin that appends `!important` to every declaration in your CSS.

![I'm very important](http://media.giphy.com/media/dKpTkya14ysJq/giphy.gif)

## Install
`npm install --sav-dev mahogany`

## Use it with Gulp

```js
var postcss = require('gulp-postcss');
var gulp = require('gulp');
var mahogany = require('mahogany');

gulp.task('css', function () {
    return gulp.src('./src/*.css')
        .pipe(postcss([mahogany()]))
        .pipe(gulp.dest('./dest'));
});
```

## Examples

```css
a {
  color: red;
}
```
Becomes:
```css
a {
  color: red !important;
}
```
And
```css
b {
  font-weight: 100;
  color: blue;
}
```
Becomes:
```css
b {
  font-weight: 100 !important;
  color: blue !important;
}
```
