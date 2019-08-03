import postcss from 'postcss';
import * as fs from 'fs';
import * as path from 'path';

export default function getVariable(filePath: string) {
  const variables: {
    [key: string]: string;
  } = {};
  const file = fs.readFileSync(filePath, { encoding: 'utf8' });
  const format = path.extname(filePath);
  const root = postcss.parse(file);

  root.walkDecls((node) => {
    const name = getVariableName(format, node.prop),
      variableReference = getVariableName(format, node.value);

    if (name && variableReference && variables[variableReference]) {
      // this references another variable which exists
      variables[name] = variables[variableReference];
    } else if (name && variableReference) {
      // this references a variable that DOESN'T exist
      throw node.error(`$${name} references $${variableReference} which doesn't exist!`);
    } else if (name) {
      // this defines a variable
      variables[name] = node.value;
    }
  });

  return Object.keys(variables).map(key => {
    return {
      key: '$' + key,
      value: variables[key]
    };
  });
}

/**
 * get the name of a sass variable
 * @param  {string} str
 * @return {null|string}
 */
function getSassVariableName(str: string) {
  const match = str.match(/^\$(.*?)$/i);

  return match && match[1];
}

/**
 * get the name of a less variable
 * @param  {string} str
 * @return {null|string}
 */
function getLessVariableName(str: string) {
  const match = str.match(/^@(.*?)$/i);

  return match && match[1];
}


function getVariableName(format: '.scss' | '.less' | string, str: string) {
  switch (format) {
    case '.scss': return getSassVariableName(str);
    case '.less': return getLessVariableName(str);
    default: return '';
  }
}