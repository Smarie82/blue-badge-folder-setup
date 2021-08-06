/*
    -SPREAD OPERATOR
        - The spread operator pulls out all elements in an array and gives them back to you as a standalone list of elements.
        - It takes an iterable object and/or object and expands it into individual elements. The spread operator is typically used to make copise of an array/object.
         -Denoted by the ellipsis(...)
*/

let students = ["Jake Greene", "Stephanie Falls"];
//WRONG SUNTAX
//...students

let copiedStudents = [...students];

//let copiedStudents = [students];


students.push("Leslie Phillips");
//console.log(students, copiedStudents);