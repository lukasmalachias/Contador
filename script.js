function calcular(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    
    let i = Number(ini.value)
    let f = Number(fim.value)
    let p = Number(passo.value)


    if (i == 0 || f == 0 || p == 0){
        alert('ERRO')
    }else{
        res.innerHTML = 'Contando: '
        if(i < f){
            for(i; i <= f; i += p){
            res.innerHTML += `${i} `
        }
        }else{
            for(i; i <= f; i -= p){
                res.innerHTML += `${i} `
        }
        }
        res.innerHTML += `FIM`
    }
}           
    
