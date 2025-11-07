// Comentario em js

/**
 * 
 *comentario em 
  varias linhas 
 * 
 */

  // Exibe um alterta na tela do usuario (ultimo recurso)
  // alert("Olá mundo!"); // Isso é infernal

  // Exibe dados no console do navegador (Ótimo para depuração)
  console.log("Olá amiguinhos!");
  console.warn("Devo aparecer amarelinho!");
  console.error("Eu devo estar vermelinho!");

  // para criar variaveis usamos ou var, let e const
  // var é uma forma primitiva e tem escopo global
  var texto = "Um texto muito loco!";
  console.log("Variavel texto: " + texto)

  //let tem escopo local e é mais indicado
  let ano = 2025;
  console.log("Variavel ano:", ano);

  // const cria um valor que jamais poderá ser alterado
  const pi = 3.14 
  console.log("Variavel pi:" + pi, "Sempre usam isso para const!");

  /**
   * O js é fracamente tipado, não falamos o tipo da variavel
   * e ela pode mudar de tipo bastando passar um novo valor para ela.
   * 
   * No JS não existe existe explicitamente float e int, tudo é number
   */

  // podermos transportar um elemnto do HTML para o JS
  // Usamos a função getElementById ou similar
  // a pagina como um todo é chamada e document e tudo vem dela

  let nome = document.getElementById('nome');

  let nascimento = document.getElementById('nascimento');

  let faculdade = document.getElementById('faculdade');

  let cor = document.getElementById('cor');

  let resultado = document.getElementById('resultado');

  /**
   * O JS ao abrir uma página mapeia toda a página de internet e transforma
   * tudo em variaveis ramificadas (Objetos)
   * 
   * O document possui todo o HTML da pagina mapeado como propriedades 
   * Ex de como pegar todo o body da página : document.body
   */
  document.title = "Troquei o title da página com JS!"


  console.error(resultado.innerHTML)

  function calcularIdade() {
    let idade = ano - nascimento.value;
    let textoResultado = `Você nasceu em ${nascimento.value}, estamos em ${ano}, então você tem ${idade}!`
    console.log(textoResultado)
    resultado.innerHTML = textoResultado
  }

  function trocarCorPagina() {
    document.body.style.backgroundColor = cor.value;
  }




