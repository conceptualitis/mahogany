import test from 'ava';
import mahogany from './';

function run(input, output, t) {
  t.is(mahogany.process(input).css, output);
}

test('much transform, very important', t => run(
  'a { color: red; font-size: 12px; } b { font-weight: 400; }',
  'a { color: red !important; font-size: 12px !important; } b { font-weight: 400 !important; }',
  t
));

test('much transform, too much important', t => run(
  'a { color: red !important; } b { font-weight: 400; }',
  'a { color: red !important; } b { font-weight: 400 !important; }',
  t
));
