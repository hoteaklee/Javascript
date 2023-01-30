//25번 - 복권발행 프로그램 v1...
let Lotto_v1 = (lotto, mykey) =>{
    let match = 0;
    let msg = '아쉽지만, 다음기회에!!';

   /* if (Lotto[0]== mykey[0] || Lotto[0]== mykey[1]
        || Lotto[0]== mykey[2]) { ++match;}

    if (Lotto[1]== mykey[0] || Lotto[1]== mykey[1]
        || Lotto[1]== mykey[2]) { ++match;}

    if (Lotto[2]== mykey[0] || Lotto[2]== mykey[1]
        || Lotto[2]== mykey[2]) { ++match;}*/

    for (let i = 0; i <= 2; ++i){
        for (let j = 0; j <= 2; ++j){
            if (Lotto[i] == mykey[j]){ ++match;}
        }
    }

    if (match == 1){ msg = '1개 일치!!';}
    else if (match == 2){ msg = '2개 일치!!';}
    else if (match == 3){ msg = '당첨!! 상금 100만원!!';}

    return msg;
};


//#26
let computeTax = (isMarried, salary) => {
    let tax = 0;

    if (isMarried == 'no') {
        if (salary < 3000) {
            tax = salary * (10 / 100);
        } else {
            tax = salary * (25 / 100);
        }
    } else {
        if (salary < 6000) {
            tax = salary * (15 / 100);
        } else {
            tax = salary * (35 / 100);
        }
    }

    return `결혼여부:${isMarried}, 연봉:${salary} 만원,
            납부세금:${tax} 만원`;
};

//#30
let catchNumber = (num2) => {
    let num1 = 0;
    result = '';
    while (true){
        num1 = parseInt(prompt('임의의 숫자 3자리는?'));
        if (num1 > num2){
            result = '추측한 숫자가 켜요~';
        }else if (num1 < num2){
            result = '추측한 숫자가 작아요~';
        }else {
            document.write('빙고~숫자맞아요 <br>');
            break;
        }
        console.log(result);
    }
};


//32
let checkNumber = () => {
    let nums = parseInt(prompt('임의의 숫자는?'));
    let result = '범위 밖 값';

    if (nums < 10000){result = `${nums}: 10000미만입니다.<br>`;}
    else if (nums < 20000) {result = `${nums}: 10000 ~ 20000입니다.<br>`; }
    else if (nums < 30000) {result =`${nums}: 20000 ~ 30000입니다.<br>`; }

    return result;
};

//#33
let cardCheck = (cardnum) =>{
    let result = '잘못입력된 카드번호입니다.';
    let cdnum = cardnum[1] + cardnum[2] +cardnum[3] +cardnum[4] +cardnum[5];
    if (cardnum[0] == '4'){ result = 'visa - ';
        if (cdnum == '04825') result += ' 비씨카드';
        else if (cdnum == '38676') result += ' 신한카드';
        else if (cdnum == '57973') result += ' 국민은행';
    }else if (cardnum[0] == '5'){
        result = '마스터카드 - ';
        switch (cdnum){
            case '15594': result += '신한카드'; break;
            case '24353': result += '외환카드'; break;
            case '40926': result += '국민은행'; break;
        }

    }else if (cardnum[0] == '3' && cardnum[1] == '5'){
        cdnum = cardnum[2] +cardnum[3] +cardnum[4] +cardnum[5];
        result = 'JCD카드 - ';
        switch (cdnum){
            case '6317': result += 'NH농협카드'; break;
            case '6901': result += '신한카드'; break;
            case '6912': result += 'KB국민카드'; break;
        }
    }
    return result;
};


//#35
let checkDayTime = (daytime) => {
    result = '';

    switch (daytime) {
        case 'morning hours' : result = '아침시간(7 -12)'; break;
        case 'midday' : case 'noon' : result = '점심시간(12 -1)';break;
        case 'afternoon' : result = '오후(1 - 6)';break;
        case 'evening hours' : result = '저녁시간(6 - 9)';break;
        case 'night hours' : result = '밤시간(9 - 12)';break;
        default : result = '잘못입력하셨습니다.' ; break;
    }
    return result;
};


//#48
let computeInvestment = (account,interest) =>{
    let sum = account;
    let year = 0;

    while (true) {
        if (sum > account*2) break;
        sum += sum * (interest /100);
        ++year;
        //console.log(year,'/',sum);
    }
    return `${year}년 / ${parseInt(sum)}원`;
};