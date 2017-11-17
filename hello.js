//One limitation
// function f(shouldInitialize: boolean) {
//     if (shouldInitialize) {
//         var x = 10;
//     }
//     return x;//dangerous
// }
// console.log(f(true));  // returns '10'
// console.log(f(false));
function f(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x; //dangerous
}
console.log(f(true)); // returns '10'
console.log(f(false));
