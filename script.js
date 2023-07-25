const countdown = document.querySelector(".countdown");
let time = 10;

countdown.innerHTML= time;

setTimeout(() =>{
    countdown.innerHTML= time--;
    setTimeout(() =>{
        countdown.innerHTML= time--;
        setTimeout(()=>{
            countdown.innerHTML= time--;
            setTimeout(()=>{
                countdown.innerHTML= time--;
                setTimeout(()=>{
                    countdown.innerHTML= time--;
                    setTimeout(()=>{
                        countdown.innerHTML= time--;
                        setTimeout(()=>{
                            countdown.innerHTML=time--;
                            setTimeout(()=>{
                                countdown.innerHTML=time--;
                                setTimeout(()=>{
                                    countdown.innerHTML=time--;
                                    setTimeout(() =>{
                                        countdown.innerHTML=time--;
                                        setTimeout(()=> {
                                            countdown.innerHTML="Happy Independence Day!"
                                        },1000)
                                    },1000)
                                },1000)
                            },1000)
                        },1000)
                    },1000)
                },1000)
            },1000)
        },1000)
    },1000)
},1000)