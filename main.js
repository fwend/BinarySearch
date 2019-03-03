const arr = [1,2,3,4,5,6,7,8,9];

const binarySearch = (a, val) => {
    let lo = 0;
    let hi = a.length - 1;
  
    while (lo <= hi) {
          const mid = Math.floor((lo + hi) / 2);
      
          if (a[mid] === val) {
              return mid; 
            
          } else if (a[mid] > val) {
              hi = mid - 1;
            
          } else {
              lo = mid + 1;
          }
     }
     return -1;
};

console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, 7));
console.log(binarySearch(arr, 9));
console.log(binarySearch(arr, 0));