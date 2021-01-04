var typedInicial = new Typed(".prompt", {
  strings: [
    'npm install apresentação^1000<br> `<span class="gray">installing components...</span><br>` ^1000\n `<span class="gray">Fetching from source...</span><br>` ^1000\n `Olá meu nome é Gabriel Rabelo Camargos,<br>tenho 20 anos,<br>Sou Desenvolvedor Web e estudante de Ciências da Computação na UTFPR !<br><br><br><br><br><br><br><br><br><br><br><span class="gray">Saiba mais clicando nos links abaixo.</span>`',
  ],
  typeSpeed: 50,
  backSpeed: false,
  //fadeOut: true,
  loop: false,
});

$("#habilidades").click(function () {
  $(".terminal").empty();
  $(".terminal").append('$&nbsp;<span class="prompt"></span>');
  var typedHab = new Typed(".prompt", {
    strings: [
      'cd habilidades^1000<br> `habilidades>` ^1000\n `ls<br>` ^1000\n `&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Front-End => </span>ReactJS (React Hooks, ContextAPI, Patterns) - HTML - CSS - JS (ES6 / ES7/ ES8), UI entre outros... <br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Back-End =></span>NodeJs - PHP - APIs RESTful - Microservices - Serverless<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Banco de Dados =></span> NoSQL (MongoDB e DynamoDB) - SQL (MySQL, MariaDB, PostgreSQL)<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Extras =></span>SOLID - DDD - Docker - AWS - Git/GitHub - CI/CD<br>`',
    ],
    typeSpeed: 50,
    backSpeed: false,
    //fadeOut: true,
    loop: false,
    insertCursor: false,
  });
  //$('.typed-cursor').empty();
});

$("#experiencia").click(function () {
  $(".terminal").empty();
  $(".terminal").append('$&nbsp;<span class="prompt"></span>');
  var typedExp = new Typed(".prompt", {
    strings: [
      'cd experiencia^1000<br> `experiencia>` ^1000 `ls<br>` `&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Carmograf(2015-2017) => </span>Designer Gráfico e Arte Finalista <br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Sistema BUSQUEI(2017) => </span>Desenvolvedor/Proprietário<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Encontro de Professores - Cefet Divinópolis(2018) => </span>Desenvolvedor Back-End<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Sistema SIGEV(2018) => </span>Desenvolvedor<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Freelancer (2018) => </span>Desenvolvedor Full-Stack<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">CodeBy (2019-2020) => </span>Desenvolvedor Full-Stack<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Rapicare (2020-atualmente) => </span>Desenvolvedor Back-End<br>`',
    ],
  });
  $("typed-cursor").empty();
});

$("#contato").click(function () {
  $(".terminal").empty();
  $(".terminal").append('$&nbsp;<span class="prompt"></span>');
  var typedExp = new Typed(".prompt", {
    strings: [
      'cd contato^1000<br> `contato>` ^1000 `ls<br>` `&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">Telefone => </span>(37) 99863-7969 <br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">E-mail => </span>rabelogabriel72@gmail.com<br>&nbsp;&nbsp;<span class="green">✓</span> <span class="gray">GitHub => </span>http://github.com/gabrielrab<br>`',
    ],
  });
  $("typed-cursor").empty();
});
