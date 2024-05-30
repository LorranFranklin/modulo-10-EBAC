# jQuery - Studies

## Explorando os plugins do jQuery [Mask, Validate, Messages]

[![Generic badge](https://img.shields.io/badge/STATUS-IN_PROGRESS-yellow.svg)](https://shields.io/)

<p align="center">
  <img alt="Imagem da página na web" src="./images/README.png" width="100%">
</p>

- [Acesse o projeto finalizado, online](https://modulo-10-ebac.vercel.app/)

## About

<p>Aqui estamos usando alguns plugins do jQuery para validação de formulários
</p>

link do plugin Mask, este por sua vez é usado na validação das entradas de dados nos inputs. Faça o Download através do link

```
https://igorescobar.github.io/jQuery-Mask-Plugin/
```

após baixar extraia o arquivo e procure a pasta **SRC**, dentro dela haverá um arquivo com o nome de: **jquery.mask**
copie e cole dentro do seu projeto, em uma pasta chamada de **"JS"**, em seguida faça uso dele através do import

```
<script src="./js/jquery.mask.js"></script>
```

plugin Mask faz com que o campo receba apenas o formato que nele é configurado ex:

```
$("#campo-telefone").mask("(00) 00000-0000", {
    placeholder: "(00) 00000-0000",
  });
```

ele pode ser usado para CEP, CPF

```
 $("#cpf").mask("000.000.000-00", {
    placeholder: "123.456.789-00",
  });
```

```
  $("#cep").mask("00000-000", {
    placeholder: "012345-678",
  });
```

agora vejamos sobre o **[validate]**

para Download

```
https://github.com/jquery-validation/jquery-validation/releases/tag/1.19.5
```

após baixar extraia o arquivo e procure a pasta **DIST**, dentro dela haverá um arquivo com o nome de: **jquery.validate.min**
copie e cole dentro do seu projeto, em uma pasta chamada de **JS**, em seguida faça uso dele através do import

```
<script src="./js/jquery.validate.min.js"></script>
```

exemplo de **validate**

```
$("form").validate({
    rules: {
      nome: {
        required: true, //campo obrigatório
        minlength: 3,
      },
      email: {
        required: true, //campo obrigatório
        email: true,
      },
      telefone: {
        required: true, //campo obrigatório
      },
      mensagem: {
        required: true, //campo obrigatório
      },
      veiculoDeInteresse: {
        required: false, //campo obrigatório
      },
    },
```

Ainda dentro da pasta **DIST** entre em **localization** e procure o arquivo com nome **messages_pt_BR**, copie e cole dentro do seu projeto, em uma pasta chamada de **JS**, em seguida faça uso dele através do import

```
<script src="./js/messages_pt_BR.js"></script>
```

exemplo de **messages**

```
messages: {
      nome: {
        required: "Por favor, digite seu nome",
      },
      email: {
        required: "Por favor, digite seu email",
        email: "Por favor, digite um email valido",
      },
      telefone: {
        required: "Por favor, digite seu telefone",
      },
    },
```

## Getting Started

Ensure **[jQuery]** sure imported correctly in your HTML file:

```
<script src="https://code.jquery.com/jquery-3.7.1.js"></script>`
```
