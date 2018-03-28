module.exports = {
	root: true,
	parser: "babel-eslint",
	parserOptions: {
		sourceType: 'module'
	},
	env: {
		browser: true,
	},
	plugins: [
		"html"
	],
	rules: {
		"indent": [2, "tab"],
		"prefer-const": ["error", {
			"destructuring": "any",
			"ignoreReadBeforeAssign": true
		}],
		"no-const-assign": "error",
		"no-var": "error",
		"object-shorthand": ["error", "always"],
		"array-callback-return": ["error"],
		"prefer-destructuring": ["error", {
			"array": true,
			"object": true
		}],
		"prefer-template": ["error"],
		"template-curly-spacing": ["error", "always"],
		"space-before-function-paren": ["error"],
		"space-before-blocks": ["error"],
		"no-param-reassign": ["error"]
	}
}