let data = document.querySelector("#timeData");
let date = new Date();
// navList()

function NavList() {
  const info = {
    Sobre: `
    Nome = 'Gustavo de Almeida Mori',<br>
    Idade = '22 anos',<br>
    Cidade = 'Santa Cruz do Sul - RS',<br>
    Cursando_Algo = True,<br>
    Faculdade = 'Engenharia de Software',<br>
    Comeco_Fim = '03/2022 - 12/2025',<br>
    Modalidade_Facul = 'EAD',<br>
    Curso_Extra = 'True', <br>
    Nome_Curso = 'Alura, RocketSeat, Freecodecamp.org',<br>
    Hobby = 'Olhar uma série/filme, jogar algum jogo com os amigos, olhar um vídeo no Youtube(especialmente um react de comida do Casemiro, "meteu essa??").<br>
    Objetivo_Profissional = 'Meu objetivo profissional é se tornar um Desenvolvedor Front-End, com foco em auxiliar pessoas como faço hoje em dia, porém, através do código. Dá uma olhadinha nos projetos abaixo e vê o que tu acha, aproveita e me dá um feedback, meus meios de contatos estarão disponíveis aqui, até mais! ;).'
    `,
    Projetos: `
    Tenho alguns projetos no meu GitHub, projetos criados apartir de cursos, e também alguns projetos testes no <a class="links" target="_blank" href="https://codepen.io/gustavoalmei">Codepain (clica aqui pra dar uma olhadinha)</a>.
    `,
    Experiências: `
    Empresa = 'Faculdade Dom Alberto'<br>
    Entrou = '03/2021',<br>
    Trabalho_Atual = True,<br>
    Resumo = 'Dou suporte a alunos e colaboradores da IES, também realizado manutenção em computadores, configuração rede rede, desde servidores à wi-fi.'
    `,
    Conhecimento: `
    Linguagens = 'HTML, CSS, JavaScript',<br>
    Controle_Versionamento = 'Git'
    `,
    Contato: `
    Pra entrar em contato só clicar nos links abaixo, ou clicar no iconezinho do lado.<br>
    Linkedin: <a target="_blank" href="https://www.linkedin.com/in/gustavoalmeidda/">Gustavo Almeida</a>,<br>
    E-Mail: <a target="_blank" href="mailto:gustavo.almei2@hotmail.com">gustavo.almei2@hotmail.com</a>,<br>
    WhatsApp: <a target="_blank" href="https://api.whatsapp.com/send?phone=5551996195414&text=Ol%C3%A1%20Gustavo%2C%20Vamos%20conversar!">Envie sua mensagem através do WhatsApp</a>,<br>
    Twitter: <a target="_blank" href="https://twitter.com/iamgustavouu">@iamgustavouu.<br>
    `,
  };

  let body = document.querySelector(".body");

  for (let li of list.children) {
    li.addEventListener("click", () => {
      let list = li.innerText;
      body.innerHTML += `
        <p class="letters">
          C:\\Users\\Gustavo Almeida> ${list}
        </p>
        <p class="letters">
        ${info[list]}
        </p>
        `;
      console.log(info[list]);
    });
  }
}
NavList();
