import { getVariables } from '../src';
import * as path from 'path';

describe('getVariables', () => {
  it('sass works', () => {
    expect(getVariables(path.join(__dirname, 'vars.scss'))).toEqual([
      { key: '$test', value: '1px' }
    ])
  });

  it('less works', () => {
    expect(getVariables(path.join(__dirname, 'vars.less'))).toEqual([
      { key: '$test', value: '1px' }
    ])
  });
});
