let bubbleSort = (aList) => {
    let bSwapped = false;

    do {
        bSwapped = false;
        for (let iItem = 0; iItem < aList.length; iItem++) {
            if (aList[iItem] > aList[iItem + 1]) {
                let iTemp = aList[iItem];
                aList[iItem] = aList[iItem + 1];
                aList[iItem + 1] = iTemp;
                bSwapped = true;
            }
        }
    } while (bSwapped);

    return aList;
};