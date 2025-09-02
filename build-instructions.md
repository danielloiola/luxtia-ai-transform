# Instruções para Deploy com Apache e PHP

## Passo 1: Build da aplicação
```bash
npm run build
# ou
yarn build
```

## Passo 2: Configuração do Apache

1. Copie os arquivos da pasta `dist/` para o diretório do seu servidor Apache (ex: `/var/www/html/` ou `public_html/`)

2. Certifique-se de que o arquivo `.htaccess` está na raiz do diretório

3. Verifique se o Apache tem os módulos necessários habilitados:
   - mod_rewrite (para roteamento)
   - mod_headers (para headers de segurança)
   - mod_deflate (para compressão)
   - mod_expires (para cache)

## Passo 3: Estrutura de arquivos no servidor

```
/var/www/html/ (ou seu diretório)
├── .htaccess
├── index.html
├── deploy.php (opcional, para funcionalidades PHP)
├── assets/
│   ├── index.css
│   ├── index.js
│   └── ...
├── lovable-uploads/
│   └── 46064a06-2be8-4182-afc1-78e6807c6772.png
└── ...
```

## Passo 4: Configuração do PHP (opcional)

Se você quiser usar o arquivo `deploy.php` como ponto de entrada:

1. Renomeie `index.html` para `index.php`
2. Use o conteúdo do `deploy.php` 
3. Atualize os caminhos dos assets para os caminhos corretos do build

## Comandos para build e deploy:

```bash
# Build da aplicação
npm run build

# Copiar arquivos (ajuste os caminhos conforme necessário)
cp -r dist/* /var/www/html/
cp .htaccess /var/www/html/
```

## Teste

Acesse seu domínio e verifique se:
- A página inicial carrega corretamente
- O roteamento funciona (navegação não quebra ao recarregar)
- Os assets estão sendo servidos corretamente
- A compressão e cache estão funcionando