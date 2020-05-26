/* Algorithms: Find the Symmetric DifferencePassed */
/* Create a function that takes two or more arrays and returns an array of their symmetric difference. 
The returned array must contain only unique values (no duplicates). */

function sym(args) {
    let entryArrs = [];
    for (let inputArr of arguments) {
        entryArrs.push(inputArr)
    }
    let dyfArr = entryArrs[0];

    let symDifference = (arr1, arr2) => {
        let baseArr = arr1;
        let compareArr = arr2;
        for (let i = 0; i < arr1.length; i++) {
            let index = arr2.indexOf(arr1[i])
            if (index !== -1) {
                baseArr = baseArr.filter((num) => {
                    return num !== arr1[i];
                });
                compareArr = compareArr.filter((num) => {
                    return num !== arr2[index];
                });
            }
        }
        let resultArr = baseArr.concat(compareArr);
        return resultArr;
    }

    for (let i = 1; i < entryArrs.length; i++) {
        dyfArr = symDifference(dyfArr, entryArrs[i]);
    }

    return dyfArr
        .sort((a, b) => {
        return a - b;
        })
        .filter((num, index) => {
        return dyfArr.indexOf(num) === index;
        });
 
}
