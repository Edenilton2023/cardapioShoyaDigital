document
  .querySelectorAll('.meuBotao')
  ./*pegando todos os botoes*/ forEach((button) => {
    button.addEventListener('click', function () {
      const targetId = this.getAttribute('data-target');

      document.querySelectorAll('.secao').forEach((secao) => {
        secao.classList.remove('ativa');
      });
      document.getElementById(targetId).classList.add('ativa');
    });
  });

// const troca = (item) =>{
//     item.classList.toggle('secao')
// }

// const prato = document.querySelector('.pai')
// const $pratos = Array.from(prato)

// console.log(typeof prato);

// prato.addEventListener('click',()=>{
//   prato.children[1].classList.toggle('secao')
//   prato.children[0].classList.toggle('secao');

// })

const pratos = Array.from(document.querySelectorAll('.pai'));

pratos.map((item) => {
  item.addEventListener('click', () => {
    if (item.children.length >= 2) {
      // Alterna a classe 'secao' para os filhos do elemento

      item.children[1].classList.toggle('secao');
      item.children[0].classList.toggle('secao');
    }
  });
});
