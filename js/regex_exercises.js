    
//Exercicio Nr 1:
{   let espaco = document.querySelector("#exercise1");

    console.log('Exercicio Nr 1');
    var target = "11a22b33c";

    var exp1 = new RegExp('(\\d\\d)(\\w)', 'g');

    let tar1 = exp1.exec(target);

    let tar2 = exp1.exec(target);

    let tar3 = exp1.exec(target);
    espaco.textContent = `Targets are: [${tar1}], [${tar2}], [${tar3}]`;
}
//Exercicio Nr 2:
{       
    let espaco = document.querySelector("#exercise2");
    console.log('Exercicio Nr 2');

        var anoMesDia = '2007-12-31';

        var exp2 = /-/g;

        anoMesDia = anoMesDia.replace(exp2, '/');
        console.log(anoMesDia);
}
//exercicio Nr 3:
{       let espaco = document.querySelector("#exercise3");
    console.log('Exercicio Nr 3');
        var arquivo = '100,200-150,100;20';

        var exp3 = /[,;-]/;

        var valores = arquivo.split(exp3);

        console.log(valores);

        var soma = 0;

        for(let num of valores){
            num = Number(num);
            soma += num;
        }

        console.log(soma);
}
//Exercicio Nr 4:
{   let espaco = document.querySelector("#exercise4");       
    console.log('Exercicio Nr 4');

        var codigos = 'A121B12112C12212F12G01';

        var exp4 = /[A-Za-z]\d+/g;

        var codigosExtraidos = codigos.match(exp4);

        console.log(codigosExtraidos);
}

let espaco = document.querySelector("#exercise1");