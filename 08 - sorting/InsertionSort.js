let insertionSort = (aList) => {
    for (let i = 1; i < aList.length; i++) {
        let iTemp = aList[i];
        let j = i - 1;
        while (j >= 0 && aList[j] > iTemp) {
            aList[j + 1] = aList[j];
            j--;
        }
        aList[j + 1] = iTemp;
    }

    return aList;
};