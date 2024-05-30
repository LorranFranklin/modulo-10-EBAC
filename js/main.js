$(document).ready(function () {
  $("#carousel-imagens").slick({
    autoplay: true,
    dots: true, //PERMITE QUE O USUARIO NAVEGUE NAS IMAGENS PONTINHOS ABAIXO DAS IMAGENS
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
  // aqui temos o menu hamburguer sendo clicado após isso ele nos mostra o menu de navegação
  $(".menu-hamburguer").click(function () {
    $("nav").slideToggle();
  });
  // mascara de telefone usando biblioteca jQuery mask, pode ser usado para outros tipos de mascaras, data etc..
  $("#campo-telefone").mask("(00) 00000-0000", {
    placeholder: "(00) 00000-0000",
  });

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
    submitHandler: function (form) {
      console.log(form);
      // form.submit();
    },
    invalidHandler: function (evento, validador) {
      let camposIncorretos = validador.numberOfInvalids();
      if (camposIncorretos) {
        alert(`Existem ${camposIncorretos} campos incorretos`);
      }
    },
  });
  $("ul button").click(function () {
    const destino = $("#contato");
    const nomeVeiculo = $(this).parent().find("h3").text();
    $("#veiculo-interesse").val(nomeVeiculo);

    $("html").animate({ scrollTop: destino.offset().top }, 2000);
  });
});
