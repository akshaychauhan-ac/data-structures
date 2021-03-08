# Sorting -

	1. Bubble sort -
	      Sort from right
	      Highest gets pushed to end
		    Check swap, if yes continue else break (sort complete)
  
	2. Selection sort -
	      Find min
	      Swap min with first element
	      Continue from next element
	      Check for same number then swap
  
	3. Insertion sort -
	      Find small number. Push the number to index & Shift right the rest till the index where small number was found
	      Nearly sorted arrays
	      O(1) additional memory space
	      Sorting can occur as the data is received

	4. Merge Sort -
	      Split -> Compare and merge
	      O(n log n) O(n log n) O(n log n)
	      O(n) additional memory space
	      Example : 
	      var array = [1, 4, 2, 8, 345, 123, 43, 32, 5643, 63, 123, 43, 2, 55, 1, 234, 92];
	      var sortedArray = mergeSort(array);

	5. Quick sort -
	      O(n log n) O(n log n) O(n2)
	      O(log n) additional memory space
	      Example : 
	      	var items = [9, 6, 4, 3, 8, 5, 4, 1, 2, 6];
		var sortedArray = quickSort(items, 0, items.length - 1);
