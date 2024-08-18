




/*pegando todos os botoes*/ 
const botoes = Array.from(document.querySelectorAll('.meuBotao'));
const pratos = Array.from (document.querySelectorAll('.secao'));

botoes.map((butao)=>{
  butao.addEventListener('click',(Event)=>{
    const targetId = Event.currentTarget.getAttribute('data-target');

    

    pratos.forEach((secao)=>{
      secao.classList.add('Desativo'); // adicionamdo aclase 'Desativo' para garantir que todos esteja invisivel  para assi garantir a troca  de pagina  e aparecer apenas uma 
    })
    const secao = pratos.filter((prato) => prato.id === targetId)[0];
     if (secao) {
       secao.classList.remove('Desativo'); // Remova a classe 'Desativo'
       secao.classList.add('Ativo'); // Se necessário, adicione uma nova classe
     } else {
       console.error('Seção não encontrada:', targetId);
     }
  })
})


  // ALTERAÇAO ENTRE OS TAMANHOS DAS
{
    const todasFotosgrand = Array.from(document.querySelectorAll('.fotogr'));

const todasFotosPequen = Array.from(document.querySelectorAll('.imgcont'));

const $fotoPq = Array.from(document.querySelectorAll('.fotoPq'));

$fotoPq.map((item) => {
  item.addEventListener('click', (Event) => {
    // Primeiro, desativa todas as fotos grandes e pequenas
    todasFotosgrand.map((foto) => foto.classList.add('Desativo'));
    todasFotosPequen.forEach((foto) => foto.classList.remove('Desativo'));

    // Em seguida, alterna a classe da foto pequena clicada e da foto grande correspondente
    const fotoPq = Event.currentTarget.parentElement;
    const fotoGr = Event.currentTarget.parentElement.parentElement.children[0];
    fotoPq.classList.toggle('Desativo');
    fotoGr.classList.toggle('Desativo');
    // quando clicar na foto grande ela  escode e aparece a pquena
    fotoGr.addEventListener('click', () => {
      fotoPq.classList.remove('Desativo');
      fotoGr.classList.add('Desativo');
    });
  });
});
}

 







