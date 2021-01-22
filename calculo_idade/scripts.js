function verificar() {
    var data = new Date();
    var ano = data.getFullYear();
    var fano = document.getElementById('txtano');
    var res = document.querySelector('div#res'); //Outra forma de setar elementos 

    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('ERRO Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img') //criando elemento img
        img.setAttribute('id' , 'foto') //setando atributos para img

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','bebe-m.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovem-m.png')
            }else if (idade < 51){
                //adulto
                img.setAttribute('src','adulto-m.png')
            }else {
                //idoso
                img.setAttribute('src','idoso-m.png')
            }
        }else if(fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade <10){
                //criança
                img.setAttribute('src','bebe-f.png')
            }else if(idade < 21){
                //jovem
                img.setAttribute('src','jovem-f.png')
            }else if (idade < 51){
                //adulto
                img.setAttribute('src','adulto-f.png')
            }else {
                //idoso
                img.setAttribute('src','idoso-f.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img) // para adicionar o elemento criado dinamicamente
    }
}