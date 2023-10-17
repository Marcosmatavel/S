let num = [20,7,3,10,9,8]
num.sort()
/*
for(let pos= 0; pos<num.length;pos++){
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}
*/
for(let pos in num){
    console.log(`A posicao ${pos} tem o valor ${num[pos]}`)
}