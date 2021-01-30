let insertionSort = (aList) => {
    for (let i = 1; i < aList.length; i++) {
        let key = aList[i];
        let j = i - 1;
        while (j >= 0 && aList[j] > key) {
            aList[j + 1] = aList[j];
            j = j - 1;
        }
        aList[j + 1] = key;
    }

    return aList;
};