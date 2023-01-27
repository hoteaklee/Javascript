//25번
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