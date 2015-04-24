# Mahogany

Don't let one bad apple spoil the bunch. Make them _all_ bad apples.

This is a PostCSS plugin that appends `!important` to every declaration in your CSS.

![I'm very important](http://media.giphy.com/media/dKpTkya14ysJq/giphy.gif)

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
