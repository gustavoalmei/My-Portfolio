let data = document.querySelector("#timeData");
let article = document.querySelector("#post");
let date = new Date();
let main = document.querySelector("main");

function eventTerminal() {
  let minimizeTerminal = document.querySelector(".mini");
  let closeTerminal = document.querySelector(".close-icon");
  let iconCMD = document.querySelector("#iconCMD");
  let containerTerminal = document.querySelector("#container-terminal");
  let terminal = document.querySelector("#terminal");

  minimizeTerminal.addEventListener("click", () => {
    containerTerminal.classList.toggle("mini-container");
    terminal.classList.toggle("mini-terminal");
  });

  closeTerminal.addEventListener("click", () => {
    containerTerminal.classList.add("close-container");
    terminal.classList.add("close-terminal");

    if (
      containerTerminal.classList[1] == "mini-container" &&
      terminal.classList[1] == "mini-terminal"
    ){
      containerTerminal.classList.remove("mini-container");
      terminal.classList.remove("mini-terminal");
    }
  });

  iconCMD.addEventListener("click", () => {
    containerTerminal.classList.remove("close-container");
    terminal.classList.remove("close-terminal");
  });

}
eventTerminal();

// navList()

function NavList() {
  const info = {
    Sobre: "a",
    Projetos: "b",
    experiencia: "c",
    conhecimento: "d",
    contato: "e",
  };

  let body = document.querySelector(".body");

  for (let li of list.children) {
    li.addEventListener("click", () => {
      let list = li.innerText;

        console.log(list[info])
    });
  }
}
NavList();
