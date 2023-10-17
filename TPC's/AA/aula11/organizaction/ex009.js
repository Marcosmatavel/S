var agora = new Date()
var horas = agora.getHours()
    console.log(`Agora sao exatamente ${horas} horas`)
    if(horas > 0 && horas <=5){
            console.log("Agora e de madrugada.")

    }else if (horas > 5 && horas < 12){
            console.log("Bom dia!")
    } else if(horas <=18){
            console.log("Boa tarde.")
    }else if(horas > 18 && horas <=23){
            console.log("Boa noite!")
    }
    