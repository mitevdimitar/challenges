/* Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery. 
Update the current existing inventory item quantities (in arr1). If an item cannot be found, 
add the new item and quantity into the inventory array. 
The returned inventory array should be in alphabetical order by item. */

function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    for (let newProduct of arr2) {
        let newProductName = newProduct[1];
        let isUniqueProduct = true;
        arr1.forEach(curProduct => {
            if (curProduct[1] === newProductName) {
                isUniqueProduct = false;
                curProduct[0] += newProduct[0];
            }
        })
        if (isUniqueProduct) {
            arr1.push(newProduct);
        }
        
    }
    let sortedArr = arr1.sort((a, b) => {
        if(a[1] < b[1]) { return -1; }
        if(a[1] > b[1]) { return 1; }
        return 0;
    });
    return sortedArr;
}

// Example inventory lists
const curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

const newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
