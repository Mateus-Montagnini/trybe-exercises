let pecaXadrez = 'bispo';

switch (pecaXadrez.toLowerCase()) {
  case 'rei':
    console.log('Anda apenas uma casa, mas para qualquer direcao.');
    break;

  case 'rainha':
    console.log('Anda na diagonal, horizontal e vertical.');
    break;

  case 'bispo':
    console.log('Anda na diagonal.');
    break;

  case 'peao':
    console.log('Anda apenas uma casa para frente, no primeiro movimento pode andar duas.');
    break;

  case 'torre':
    console.log('Anda na horizontal e vertical.');
    break;

  case 'cavalo':
    console.log('Anda em "L", podendo pular pecas.');
    break;

  default:
    console.log('Peca invalida.');
    break;
};

