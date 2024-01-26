/*
    Keifer Buss 
    COSC-3020-01 
    Last modified Jan 25 2024
    Sources: 
    - https://github.com/COSC3020/mystery-func (slicing lists)
*/

function binarySearch(list, element) {
    var i = list.length;
    switch(i) {
        case 0: // Empty list
            return -1;
        case 1: // One element inside list; test for said element
            return ((element == list[0]) ? 0 : -1);
        default: // Recursive cases
            var midPos = Math.floor(i / 2); // Define middle position

            // Parent case
            if (element == list[midPos]) {
                var checkLeft = binarySearch(list.slice(0, midPos), element); // Searches for first occurring case
                return ((checkLeft == -1) ? midPos : checkLeft); 
            } 

            // Child cases
            var accum = 0; // Accumulator value for index return value if found
            var result;
            if (element < list[midPos]) { // Element less than middle value
                result = binarySearch(list.slice(0, midPos), element);
            } else { // Element greater than middle value (equal has already been checked)
                accum += midPos;
                result = binarySearch(list.slice(midPos, i), element);
            }
            return ((result == -1) ? -1 : (accum + result)); 
            // Returns -1 if not found or index if found in recursive calls
        }
}
