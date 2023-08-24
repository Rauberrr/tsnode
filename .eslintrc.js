module.exports = {
    parser: "@typescript-eslint/parser",
    "env": {
        "es2021": true,
        "node": true
    },
    plugins: ["@typescript-eslint"],
    "extends": [
        "plugin:@typescript-eslint/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
        {
            "env": {
                "node": true
            },
            "files": [
                ".eslintrc.{js,cjs}"
            ],
            "parserOptions": {
                "sourceType": "script"
            }
        }
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "rules": {
    }
}
