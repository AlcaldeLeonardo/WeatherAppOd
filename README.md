# WeatherAppOd

## Start Of Configurations

If you use NeoVim as editor and LazyVim, you can use the following configurations:

### To Use Standard JS

Prerequisites

- Mason.vim
- LSP
- all the eslinters and prettier may be installed by Mason.vim

Run on your terminal the following command:

```bash
npm install eslint-config-standard eslint-plugin-import eslint-plugin-node eslint-plugin-promise --save-dev
```

If you don't have vscode-server-languages installed globally then:

```bash
npm i -g vscode-langservers-extracted
```

And, if you want a auto-fix on save, in the init.lua file add the following:

```lua
require('lspconfig').eslint.setup {
  settings = {
    validate = "on",
    codeAction = {
      enable = true,
      mode = "all", -- Habilita todas las acciones de corrección
    },
  },
  on_attach = function(client, bufnr) -- Para realizar los fix al guardar
    vim.api.nvim_create_autocmd("BufWritePre", {
      buffer = bufnr,
      callback = function()
        vim.cmd("EslintFixAll")-- Comando de neoVim (:EslintFixAll)
      end,
    })
  end,
}
```

## Technologies Used

- Vanilla Javascript
- HTML
- CSS
- Weather API by Visual Crossing
