
function primelimit(lowlimit, upplimit) {
    for (let i = lowlimit; i <= upplimit; i++) {
        let flag = 0;
        for (let j = 2; j < i; j++) {
            if (i % j == 0) {

                flag = 1;
                break
            }
        }

        if (flag == 0) {
            console.log(i);

        }
    }
}

primelimit(5, 10)







