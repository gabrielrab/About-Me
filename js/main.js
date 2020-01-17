var typedInicial = new Typed(".prompt", {
  strings: [
    'npm install apresentação^1000<br> `<span class="gray">installing components...</span><br>` ^1000\n `<span class="gray">Fetching from source...</span><br>` ^1000\n `Olá meu nome é Gabriel Rabelo Camargos,<br>tenho 19 anos,<br>Sou Desenvolvedor Web e estudante de Ciências da Computacào na UTFPR !<br><br><br><br><br><br><br><br><br><br><br><span class="gray">Saiba mais clicando nos links abaixo.</span>`'
  ],
  typeSpeed: 50,
  backSpeed: false,
  //fadeOut: true,
  loop: false
});

$("#habilidades").click(function() {
  $(".terminal").empty();
  $(".terminal").append('$&nbsp;<span class="prompt"></span>');
  var typedHab = new Typed(".prompt", {
    strings: [
      'cd habilidades^1000<br> `habilidades>` ^1000\n `ls<br>` ^1000\n `&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Front-End => </span>ReactJS - HTML - CSS - JS <br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Back-End =></span>NodeJs - PHP<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Banco de Dados =></span> MongoDB - MySQL<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Softwares Gráficos =></span> Photoshop - Illustrator - CorelDraw...<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Extras =></span>AWS - Git/GitHub - Wordpress - Infra - Redes de Computadores - Montagem/Manutenção de Computadores<br>`'
    ],
    typeSpeed: 50,
    backSpeed: false,
    //fadeOut: true,
    loop: false,
    insertCursor: false
  });
  //$('.typed-cursor').empty();
});

$("#experiencia").click(function() {
  $(".terminal").empty();
  $(".terminal").append('$&nbsp;<span class="prompt"></span>');
  var typedExp = new Typed(".prompt", {
    strings: [
      'cd experiencia^1000<br> `experiencia>` ^1000 `ls<br>` `&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Carmograf(2015-2017) => </span>Designer Gráfico e Arte Finalista <br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Sistema BUSQUEI(2017-Atualmente) => </span>Desenvolvedor/Proprietário<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Encontro de Professores - Cefet Divinópolis(2018) => </span>Desenvolvedor Back-End<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Sistema SIGEV(2018) => </span>Desenvolvedor<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Freelancer (2018) => </span>Desenvolvedor Full-Stack<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Freelancer (2019-Atualmente) => </span>Desenvolvedor Full-Stack na CodeBy<br>`'
    ]
  });
  $("typed-cursor").empty();
});

$("#contato").click(function() {
  $(".terminal").empty();
  $(".terminal").append('$&nbsp;<span class="prompt"></span>');
  var typedExp = new Typed(".prompt", {
    strings: [
      'cd contato^1000<br> `contato>` ^1000 `ls<br>` `&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Telefone => </span>(37) 99863-7969 <br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">E-mail => </span>rabelogabriel72@gmail.com<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">GitHub => </span>http://github.com/gabrielrab<br>`'
    ]
  });
  $("typed-cursor").empty();
});
