module.exports = function babelPluginTransformRelativePaths() {
  return {
    visitor: {
      ImportDeclaration(path) {
        const importPath = path.node.source;
        if (importPath.value.startsWith('../')) {
          importPath.value = `../${importPath.value}`;
        }
        if (importPath.value.startsWith('./')) {
          importPath.value = `.${importPath.value}`;
        }
      },
      CallExpression(path) {
        if (path.node.callee.name !== 'require') {
          return;
        }
        if (!(Array.isArray(path.node.arguments) && path.node.arguments[0])) {
          return;
        }
        const returnPath = path.node.arguments[0];

        if (returnPath.value.startsWith('../')) {
          returnPath.value = `../${returnPath.value}`;
        }
        if (returnPath.value.startsWith('./')) {
          returnPath.value = `.${returnPath.value}`;
        }
      },
    },
  };
};
