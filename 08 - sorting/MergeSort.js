const merge = (leftArr, rightArr) => {
    debugger;
    const output = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        const leftEl = leftArr[leftIndex];
        const rightEl = rightArr[rightIndex];

        if(leftEl < rightEl) {
            output.push(leftEl);
            leftIndex++;
        } else {
          output.push(rightEl);
          rightIndex++;
        }

    }

    return [...output, ...leftArr.slice(leftIndex), ...rightArr.slice(rightIndex)];
    
}


const mergeSort = array => {
    debugger;
    if (array.length < 2) {
        return array;
    }
 
    const middleIndex = Math.floor(array.length / 2);
    const leftArr = array.slice(0, middleIndex);
    const rightArr = array.slice(middleIndex);
 
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}
