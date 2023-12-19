// დავალება1.დაწერეთ ფუნქცია generateRandomNumber, რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.
function generateRandomNumber(num1, num2) {
  let randomNumber = Math.floor(Math.random() * (num2 - num1 + 1)) + num1;

  return randomNumber;
}
console.log(generateRandomNumber(2, 3));
// მრავალ მასივში საერთო ელემენტები  ხვალისთვის

// ამოიღეთ მასივიდან ისეთი ელემენტი რომელიც მეორდება
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 7];
// let reduced = arr.reduce(
//   (acc, element, index, arr) =>
//     arr.indexOf(element) === index ? acc : element,
//   undefined
// );
// console.log(reduced);

function equalElements(array) {
  let values = array.reduce(
    (equals, current) => current === array[0] && equals,
    true
  );
  return values;
}
console.log(equalElements([1, 4, 1, 1, 1, 1, 1]));
// function takeWords (arr){
//   let newarr = []
//     for (let i=0; i< arr.length; i++){
//      if(arr[i][0] === "b"){
//         newarr.push(arr[i])
//      }
//     }
//     return newarr
// }
//  console.log(takeWords(["bad","blue","chair","book","cat"]));

//  let arr=["bad","blue","chair","book","cat"]
//  let newarr = []
//  for(let x of arr){
//      if(x[0]==="b"){
//     newarr.push(x)
//      }
//  }
//  console.log(newarr)

// დაწერეთ ფუნქცია რათა ამოიღთ ყველა ცრუ მნიშვნელობა მასივიდან
// let array = ["ნინო", NaN, null, false, undefined, "", 23, 34];
// function find(arr) {
//   let newarr = [];
//   for (let item of arr) {
//     if (item) {
//       newarr.push(item);
//     }
//   }
//   return newarr;
// }
// console.log(find(array));

// let array = ["ნინო", NaN, null, false, undefined, "", 23, 34, 0];
// let fitlered = array.filter((item) => !item);
// console.log(fitlered);

// let array = ["ნინო", NaN, null, false, undefined, "", 23, 34, 0];
// let fitlered = array.filter(Boolean);
// console.log(fitlered);

// dawereT programa raTa sheamowmoT aris tu ara striqoni palindromi
// function find(sentence){
//   let splited = sentence.split("")
//   let reversed = splited.reverse()
//   let originali = splited.toString()
//   let originalirep= originali.replaceAll(",","")
//   let shebrunebuli = reversed.toString()
//   let shebrunebulirep = shebrunebuli.replaceAll(",","")
//   if(originalirep === shebrunebulirep){
//       return true
//   }
//   return false

// }
// console.log(find("sit on a potato pan Otis"))
