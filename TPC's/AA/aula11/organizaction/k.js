function parimp(n){
    if (n%2==0){
        return `par`
    }else{
        return`impar`
    }
}

let resp = parimp(10)
console.log(`O numero e ${resp}`)