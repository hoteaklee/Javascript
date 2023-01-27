function computLeapYear(year){
    let result = '평년입니다.';
    if ((year % 4) == 0 && (year % 100) !== 0
        || (year % 400) == 0){
        result = ' - 윤년입니다.<br>';
    }
    return `${year}년은 ${result}`;
}


function showStarPyramid(floor) {
    let result = '';

    for (let j = 1; j <= floor; ++j) { //층 반복문
        for (let i = 1; i <= j; ++i) { //별 반복문
            result += `* `;
        }
        result += '<br>';
    }
    document.write(result);
}


function showAMPM(time) {
    let result = '오후 입니다.!!'
    time = "15:47:40";
    hour = time[0] + time[1];
    if (hour < 12) {result = hour, " - 오전 입니다.";}
    return `${hour}시는 ${result}`;
}


function computeSungJuk(kor, eng, mat) {
    let tot = 0, avg = 0, grd = '가'; // 다중변수 선언

    tot = kor+ eng + mat ;
    avg = tot /3;
    switch (parseInt(avg / 10 )){
        case 10:
        case 9: result = '수';break;
        case 8: result = '우';break;
        case 7: result = '미';break;
        case 6: result = '양';break;
    }
    document.write(`총점은 ${tot}, 평균은 ${avg}
                          학점은 ${grd} 입니다. <br>`);
}

