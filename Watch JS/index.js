function timeFunc(){
    let time = new Date();
    let hr = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    let meridian = document.getElementById('meridian');

    if(hr>12){
        meridian = "PM";
    }
    if(hr<12){
        meridian = "AM";
    }
    if(hr > 12){
        hr = hr - 12;
    }

    if(hr<10){
        hr = '0' + hr ;
    }

    if(min<10){
        min = '0' + min ;
    }

    if(sec<10){
        sec = '0' + sec ;
    }

    let timeZ = document.getElementById("timeZone");
    timeZ.innerText = `${hr} : ${min} : ${sec} ${meridian}` ;

}

setInterval(timeFunc, 1000);
