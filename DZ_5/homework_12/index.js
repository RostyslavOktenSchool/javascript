const swap = (arr, index1, index2) =>{
    let temp = arr[index1]
        arr[index1] = arr[index2]
        arr[index2] = temp
        return arr;
}
console.log(swap([10,20,30], 0, 1));