module.exports = {
	$schema: "https://json.schemastore.org/prettierrc",
	printWidth: 120,
	useTabs: true,
	tabWidth: 4,
	semi: true,
	singleQuote: false,
	trailingComma: "es5",
	bracketSpacing: true,
	bracketSameLine: false,
	arrowParens: "always",
	endOfLine: "lf",
	embeddedLanguageFormatting: "auto",
	overrides: [
		{
			files: ["*.cjs", "*.mjs", "*.js", "*.jsx"],
			options: {
				parser: "babel",
			},
		},
		{
			files: ["*.mts", "*.ts", "*.tsx"],
			options: {
				parser: "typescript",
			},
		},
		{
			files: ["*.vue"],
			options: {
				parser: "vue",
				vueIndentScriptAndStyle: false,
				singleAttributePerLine: true,
			},
		},
		{
			files: ["*.css", "*.pcss"],
			options: {
				parser: "css",
			},
		},
		{
			files: ["*.graphql", "*.gql"],
			options: {
				parser: "graphql",
			},
		},
		{
			files: ["*.json", "*.json5", ".prettierrc", ".eslintrc", ".stylelintrc"],
			options: {
				parser: "json",
				singleQuote: false,
				quoteProps: "preserve",
			},
		},
		{
			files: ["*.md"],
			options: {
				parser: "markdown",
				useTabs: false,
				tabWidth: 2,
			},
		},
		{
			files: ["*.yaml"],
			options: {
				parser: "yaml",
				useTabs: false,
				tabWidth: 2,
				bracketSpacing: false,
			},
		},
	],
};
