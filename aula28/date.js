//  const tresHoras = 60 * 60 * 60 * 3 * 1000;
// const umDIa = 60 * 60 * 24 * 1000;
// const data = new Date(0 + tresHoras - umDIa);
// const data = new Date(2019, 3); 
// const data = new Date(2019, 03, 20, 15, 14, 27); // a, m, d, h, min, segubdos
//const data = new Date('2024-06-14 20:20:59');
const data = new Date(1718412017879);
console.log('Dia', data.getDate());
console.log('Mes', data.getMonth()); // Mes começa no zero
console.log('Ano', data.getFullYear());
console.log('Hora', data.getHours());
console.log('Min', data.getMinutes());
console.log('Seg', data.getSeconds());
console.log('Ms', data.getMilliseconds());
console.log('DIa semana', data.getDay()); // 0 domingo, 1 sabado
console.log(data.toString());
console.log(Date.now()); // os milesimos de aegundos da data atual










/*
function zeroAEsquerda (num) {
    return num >= 10 ? num : `0${num}`;
  } 
  
  
  function formataData(data) {
    const dia = zeroAEsquerda(data.getDate());
    const mes = zeroAEsquerda(data.getMonth() + 1);
    const ano = zeroAEsquerda(data.getFullYear());
    const hora = zeroAEsquerda(data.getHours());
    const min = zeroAEsquerda(data.getMinutes());
    const seg = zeroAEsquerda(data.getSeconds());
    return `${dia}/${mes}/${ano} ${hora}:${min}:${seg}`;
  }
  const data = new Date();
  const dataBrasil = formataData(data);
  console.log(dataBrasil);
  */