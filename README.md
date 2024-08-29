# WeatherAppOd

## Start Of Configurations

If you use NeoVim on LazyVim as editor , you can use the following configurations:

### To Use Standard JS

Prerequisites

- Mason.vim
- LSP
- all the eslinters and prettier may be installed by Mason.vim

This project has been created using the standard JS. To use it, add the following to your init.lua file:

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

Run in your terminal in the root directory of this project, the following command:

```bash
npm npm install
```

And if you don't have vscode-server-languages installed, then:
(I recommend installing them globally)

```bash
npm i -g vscode-langservers-extracted
```

## Technologies Used

- Vanilla Javascript
- HTML
- CSS
- Weather API by Visual Crossing
- Eslint
- Standard JS
