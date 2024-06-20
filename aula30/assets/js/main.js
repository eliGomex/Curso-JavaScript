const h1 = document.querySelector('.container h1');
const data = new Date();
h1.innerHTML = data.toString();


function getDiaSemanaTexto (diaSemana) {
    let diaSemanaTexto;

    switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domingo';
        return diaSemanaTexto;
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto;
    case 2: 
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto;
    case 3:
        diaSemanaTexto = 'Quarta';
        return diaSemanaTexto;
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto;
    case 5: 
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto;
    case 6: 
        diaSemanaTexto = 'Sábado';
        return diaSemanaTexto;
    }
}

function getNomeMes (numeroMes) {
    let numeroMes;

    switch (numeroMes) {
    case 0:
        diaSemanaTexto = 'janeiro';
        return numeroMes;
    case 1:
        diaSemanaTexto = 'fevereiro';
        return numeroMes;
    case 2:
        diaSemanaTexto = 'março';
        return numeroMes;
    case 3:
        diaSemanaTexto = 'abril';
        return numeroMes;
    case 4:
        diaSemanaTexto = 'maio';
        return numeroMes;
    case 5:
         diaSemanaTexto = 'junho';
        return numeroMes;
    case 6:
        diaSemanaTexto = 'julho';
        return numeroMes;
    case 7:
        diaSemanaTexto = 'agosto';
        return numeroMes;
    case 8:
        diaSemanaTexto = 'setembro';
        return numeroMes;
    case 9:
        diaSemanaTexto = 'outubro';
        return numeroMes;
    case 10:
        diaSemanaTexto = 'novembro';
        return numeroMes;
    case 11:
        diaSemanaTexto = 'dezembro ';
        return numeroMes;
    }
}


h1.innerHTML = getDiaSemanaTexto(data.getDay());