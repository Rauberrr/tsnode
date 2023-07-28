## tsnode

    yarn init -y
    yarn add -D typescript sucrase
    
    mkdir src     
    New-Item .\src\index.ts

    yarn add -D nodemon    

    yarn add -D eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin

Diretorio Eslint

![image](https://github.com/Rauberrr/tsnode/assets/122047676/2c79cc27-eea9-4a30-b9c6-b5256a96219e)


Seguintes Conficurações:

![image](https://github.com/Rauberrr/tsnode/assets/122047676/069eaf0f-6667-4223-a4c8-f8f00f4f5a98)

Configurações no `settings.json`

    "eslint.autoFixOnSave": true,
    "eslint.validade": [
        "javascript",
        "javascriptreact",
        { "language": "typescript", "autoFix": true },
        { "language": "typescriptreact", "autoFix": true }
    
