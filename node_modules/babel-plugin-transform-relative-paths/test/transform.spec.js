const babel = require('babel-core');


test('it moves import and require statements up one level', () => {
  const input = `
  import x from 'externalthing'
  import a from './oneup'
  import b from './otherfile'
  import c from '../otherfile'
  import './'
  import ''

  const something = require('./oneup')
  const somethingElse = require('../oneup')
  const some = require()

  const unrelatedCode = '../'
  const unrelatedCodes = './'
  `;

  const expectedOutput = `
import x from 'externalthing';
import a from '../oneup';
import b from '../otherfile';
import c from '../../otherfile';
import '../';
import '';

const something = require('../oneup');
const somethingElse = require('../../oneup');
const some = require();

const unrelatedCode = '../';
const unrelatedCodes = './';`;

  const babelOptions = {
    plugins: [require.resolve('./index.js')],
  };

  const res = babel.transform(input, babelOptions).code;

  expect(res).toEqual(expectedOutput);
});
