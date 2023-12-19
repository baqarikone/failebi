//    მე 2 კვირა,1 პრაქტიკული

// let num=11
// if (num%2==0){
//     console.log("luwia")
// }else{console.log("kentia")

// }

//  let num= 0
//  if(num<0){
//      console.log("uaryofitia")
//  }else if(num>0){
//      console.log("dadebiTia")
//  }else{
//      console.log("nolis tolia")
//  }

//  let num1 = 18
//  let num2 = 5

//  if (num2!==0){
//      if (num1%num2===0){
//          console.log("iyofa")
//      }else
//       {console.log("ar iyofa") }

//  }
// else{
//  console.log("gayofa daushvebelia")

//  }

// let str="gfkfgk"
// if(str.length == 0){
//     console.log("carielia")
// }else{console.log("ar aris carieli")}

// let sentence="my name is john fucking cena"
// console.log(sentence.includes("my"))

// let sentence="my name is john fucking cena"
// if (sentence.includes("my")){
//     console.log("sheicavs")
// }else{
//     console.log("ar sheicavs")
// }

// let num1=19
// let num2=34
// if(num1>num2){
//     console.log("minimaluri aris" + num2)
// }else if(num2>num1){
//     console.log("minimlaluri aris" +num1)
// }else{
//     console.log("ertmanetis tolia")
// }

// console.log(Math.min(7,34,5,12,4,))
// console.log(Math.max(23,45,2,895,87336))

// let num=123
// let str=num.toString()
// if (str.length<3){
//     console.log("ricxvi naklebia 100ze")
// }else{
//     console.log("ricxvi 100 an 100 ze meti")
// }

//   მე 2 კვირა მე 2 პრაქტიკული

// let age=Number(prompt("what is your age?"))
// if(age<0){
//     console.log("invalid age")
// }else if(age>0&&age<12){
//     console.log("child")
// }else if(age>=13&&age<19){
//     console.log("teenager")
// }else if(age>=20&&age<64){
//     console.log("adult")
// }else if(age>=65){
//     console.log("senior")
// }else{
//     console.log("wrong input")
// }

// console.log((10 / 3).toFixed(5))

// console.log((10/3).toFixed(3))

// let monthNumber=Number(prompt("enter your month number?"))
// if (monthNumber == 1){
//     console.log(31)
// }else if(monthNumber == 2){
//     console.log("28 or 29")
// }else if(monthNumber ==3){
//     console.log(31)
// }else if(monthNumber ==4){
//     console.log(30)
// }else if(monthNumber ==5){
//     console.log(31)
// }else if(monthNumber ==6){
//     console.log(30)
// }else if (monthNumber ==7){
//     console.log(31)
// }else if(monthNumber == 8){
//     console.log(31)
// }else if(monthNumber == 9){
//     console.log(30)
// }else if(monthNumber ==10){
//     console.log(31)
// }else if(monthNumber ==11){
//     console.log(30)
// }else if (monthNumber ==12){
//     console.log(31)
// }else {
//     console.log("wrong input")
// }

// let monthNumber=Number(prompt("enter your month number?"))
// if (monthNumber ==1 ||monthNumber ==3 ||monthNumber ==5 || monthNumber ==7 ||monthNumber ==8 ||monthNumber==10 || monthNumber==12 ){
//     console.log(31)
// }else if(monthNumber == 4 || monthNumber == 6 ||monthNumber ==9 ||monthNumber ==11){
//     console.log(30)
// }else if(monthNumber ==2){
//     console.log("28 or 29")
// }else {
//     console.log("wrong input")
// }

// let monthNumber=Number(prompt("enter your month number?"))
// switch(monthNumber){
//     case 1:
//         console.log(31)
//         break
//     case 2:
//         console.log("28 or 29")
//         break
//     case 3:
//         console.log(31)
//         break
//     case 4:
//         console.log(30)
//         break
//     case 5:
//         console.log(31)
//         break
//     case 6:
//         console.log(30)
//         break
//     case 7:
//         console.log(31)
//         break
//     case 8:
//         console.log(31)
//         break
//     case 9:
//         console.log(30)
//         break
//     case 10:
//         console.log(31)
//         break
//     case 11:
//         console.log(30)
//         break
//     case 12:
//         console.log(31)
//         break
// }

// let monthNumber=Number(prompt("enter your month number?"))
// switch(monthNumber){
//     case 1:
//     case 3:
//     case 5:
//     case 7:
//     case 8:
//     case 10:
//     case 12:
//         console.log(31)
//         break
//     case 2:
//     case 4:
//     case 6:
//     case 9:
//     case 11:
//         console.log(30)
//         break
//     case 2:
//         console.log("28 or 29")
//         break
//     default:
//       console.log("wrong input")
//     break
// }

// მე 2 კვირა,მე 3 პრაქტიკული
// function greeting() {
// let word = "hello word"
// console.log(word)
//  }
//  greeting()

// function greeting(){

//   return  "hello word"
// }
// console.log(greeting())

// function sum(a,b){
//     console.log(a+b)
// }
// sum(12,34)

// function count(){
//     let str="real madrid"
//     return str.length
// }
// console.log(count())

// function divide(x,y){
//     return x%y
// }
// console.log(divide(12,5))

// მე 3 კვირა, პირველი პრაქტიკული

// for (let i=0;i<=10;i++){
//     console.log(i)
// }

// for(let i = 1;i<20;i++){
//     if (i % 2 ==0){
//         console.log(i);
//     }
// }

// let count = 0

// for(let i = 1;i<100;i++){
//     count = count +i
// }
// console.log(count)

// let secretNumber = 6
// let userNumber = Number(prompt("what is your number?"))
// if (userNumber <1 || userNumber > 10){
//       console.log("enter right number")
//   }
// while(userNumber!==secretNumber){
//   userNumber = Number(prompt("what is your number?"))
//   if (userNumber <1 || userNumber > 10){
//       console.log("enter right number")
//   }
// }
// console.log("congratulation")

// let secretNumber = 7
// let userNumber
// do{
// userNumber = Number(prompt("what is your number?"));
// }while(userNumber !== secretNumber)
//     console.log("congratulations")

//   მე 3 კვირა,მე 2 პრაქტიკული
// function first(a,b){
// function sumDigits(num){
//     let word=num.toString()
// let count=0
//     for(let i = 0;i < word.length;i++){
//         count+=Number(word[i])

//     }
//   return count
// }
// console.log(sumDigits(345))

// function countsB(word){
//     let count=0
//     for(let i=0;i<word.length;i++){
//         if (word[i]=="B"){
//             count=count+1
//              }
//     }
//     return count
// }
// console.log(countsB("hello Bitcamp find B and another BBBBBBB"));

// function guessNumber(){
//   let correctPassword="12345";
// let password=prompt("please enter the number")
// while(password!==correctPassword){
//     password=prompt("please enter the number")
// }
//   console.log("swori parolia")

// }
// guessNumber()

// function findLargest(sentense){
//  let splited=sentense.split(" ")
//  let max=splited[0]
//  for(let i =1;i<splited.length;i++){
//      if(splited[i].length>max.length){
//          max=splited[i]
//      }
//  }
//  return max.length
// }
// console.log(findLargest("hello bitcamp front end react course"))

//  მე 4 კვირა ,1 პრაქტიკული,
// let a="tansacmeli"
// let b="fexsacmeli"
// let contract="furceli"
// ["tansacmeli","furceli"]

// let person={
//     name:"nika",
//     age:20,
//     education:"bitcamp",
//     gender:"male",
//     numbers:[12,23,123,345,],
//     hobby:function(){
//       console.log("i am playing chess")
//     }

// }
// console.log(person.numbers)

// let person={
//     name:"nika",
//     age:20,
//     education:"bitcamp",
//     gender:"male",
//     numbers:[12,23,123,345,],
//     hobby:function(){
//       console.log("i am playing chess")
//     }

// }

// delete person.numbers;
// person.numbers=[1,2,3]
// console.log(person)

// let arr=[1,2,3,true,"bitcamp",null,false,"person"]
// arr.push("ragaca")
// arr.unshift("ai")
// arr.pop();
// console.log(arr)

//  დაწერეთ პროგრამა რომელიც იპოვის მასივის ყველა ელემენტის ჯამს
// let array=[1,2,3,4,5,6,7,8,9,10]
// let count=0
// function sum(arr){

//     for(let i=0;i<arr.length;i++){
//      count=count+arr[i]
//     }
//   return count
// }
// console.log(sum(array))

// დაწერეთ პროგრამა მასივში რიცხვების ზრდის მიხედვით დასალაგებლად
// let arr=["a","D","b","c"]
// let sorted=arr.sort()
// console.log(sorted)

// let arr=[5,4,8,13,10,19,16]
// function sortArray(arr){
//     return arr.sort((a,b)=>{
//         return a-b
//     })
// }
// console.log(sortArray(arr))  <<<<<<<<<< a-b ალაგებს ზრდადობით და b-a ალაგებს კლებადობით

//    მე 4 კვირა პრაქტიკული 2
//   1 დაწერეთ პროგრამა მასივშ ელემენტის ინდექსისი საპოვნელად
// function findIndex(arr, element){
//     let index=arr.indexOf(element)
//     return index
// }
// console.log(findIndex([1,2,3],2))
//   გაკეთების მეორე გზა

// function findIndex(arr,element){
//     for (let i =0;i<arr.length;i++){
//         if (arr[i]===element){
//             return i
//         }
//     }
//     return -1
// }
// console.log(findIndex([1,2,3],5))

//   2 დაწერეთ პროგრამა რომელიც დაადგენს მდებარეობს თუ არა მასივში კონკრეტული ელემენტი

// function includes(arr,element){
//     return arr.includes(element)
// }
// console.log(includes([1,2,3],7))
//           გაკეთების მეორე გზა

//   function includes(arr,element){
//      for (let i=0;i<arr.length;i++){
//          if(arr[i]===element){
//              return true
//          }
//      }return false
//  }
//   console.log(includes([1,2,3],6))

//   for of ლუპით

//  function includes(arr,elements){
//      for(let numbers of arr){
//          if (numbers===elements){
//              return true
//          }
//      } return false
//  }
//  console.log(includes([1,2,3],2))

// 3 დაწერეთ ფუნქცია რომელიც აბრუნებს ობიექტში ფროფერთის სახელების (key) და მნიშვნელობების (value) მასივს

// function keyValues(obj){
//     return [Object.keys(obj),Object.values(obj)]

// }

// let object={
//     name: "temo",
//     age:19
//   }

//   console.log(keyValues(object))         <<<<<< ეს არის ჩვეულებრივი ფუნქციით

// const keyValues = obj => {
//     return [Object.keys(obj),Object.values(obj)]
// }
// let object={
//     name: "temo",
//     age:19
//   }
//   console.log(keyValues(object))  <<< ეს არის arow ფუნქციით, და obj მიტო წერია კოდში და არა object რომ ქვევით გამოძახების დროს კონსოლ ლოგშ ვანიჭებთ obj ს object ის მნიშვნელობას

//  for in ლუპით

//   const keyValues = obj => {
//       let keys = []
//       let values = []
//   for (let key in obj){
//       values.push(obj[key])
//       keys.push(key);
//   }
//   return [keys,values]
// }
// let object={
//     name: "temo",
//     age:19
//   }
//   console.log(keyValues(object))

// დაწერეთ პროგრამა რომელიც რიცხვების  მასივიდა გააცალკევებსნ ლუწი და ენტი რიცხ

// const evenOdd = function(arr){
//     let obj={
//         even:[],
//         odd:[],
//     }
//     for(number of arr){
//         if (number%2===0){
//             obj.even.push(number)
//         }else {
//             obj.odd.push(number)
//         }
//     }return obj
// }
// console.log(evenOdd([1,2,3,4]))

// მე 4 კვირა,მე 3 პრაქტიკული

// დაწერეთ პროგრამა მასივში სიდიდით მეორე რიცხვის დასადგენად
// let arr=[1,2,3,8,9,13,19,16]
// function findSecond(arr){
// let sorted=arr.sort((a,b)=>(b-a))
// return sorted[1]
// }
// console.log(findSecond(arr))

//                2 დაწერეთ პროგრამა მასივში ლუწი რიცხვების ჯამის საპოვნელად
// let array=[1,2,3,8,9,13,19,16]
// function sum(arr){
//     let count=0
//     for(i=0;i<arr.length;i++){
//       if(arr[i]%2===0){
//             count+=arr[i]
//       }
//     }
//     return count
// }
// console.log(sum(arr))

//              დაწერეთ პროგრამა რათა გავიგოთ არის თუ არა 2 მასივი ტოლი
// let array1=[1,2,3]
// let array2=[1,2,3]
// function arrays(arr1,arr2){
//     if (arr1.length===arr2.length){
//         for(let i=0;i<arr2.length;i++){
//             if(!arr1.includes(arr2[i])){
//               return "ar aris ori masivi ertmanetis toli"
//             }
//         }
//         return"ori masivi ertmanetis tolia"
//     }else{
//         return"ar aris toli"
//     }
// }
// console.log(arrays(array1,array2))  <<<< ვიკითხო 24 ხაზის შესახებ

// let word="hello word"
// let updated=word.slice(2)  <<<<<<<<<<<<<< slice მეთოდი
// console.log(updated)

// let arr=[1,2,3,4,5]
// let updated = arr.slice(0,3) <<<<<< slice მეთოდი
// console.log(updated)

//   let arr=[1,2,3,4,5]
//   let updated = arr.splice(0,2,"baqari")
//   console.log(arr)
//  console.log(updated) <<< რაც წავშალეთ

// პირველი პარამეტრია საიდან დაიწყოს მოჭრა,მეორე პარამე
// //                                                 ტრია თუ რამდენი რამე გააქროს და მესამე პარამეტრია თ რა დაემატოს,ნებისმიერი რამის დამატება შეიძლე  //

// კვირა 6,დავალება

//         დაწერეთ ფუნქცია generateRandomNumber, რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად
// და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.
// function generateRandomNumber(num1) {
//   let generated = Math.random();
// }
// console.log(generateRandomNumber(47));

// 2დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.

// function capitalizeWords(str){
//     let splited = str.split(" ")
//     let organized = splited.filter((word)=>word!=="")

//     let capitalized = organized.map((word)=>word[0].toUpperCase() + word.slice(1))

//     return capitalized.join(" ")

// }

// console.log(capitalizeWords("i have very  badass cat"))

// 3)დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.
// let array = [
//   { name: "baqari", age: 30, hobby: "chess" },
//   { name: "temo", age: 20, hobby: "swimming" },
//   { name: "lasha", age: 23, hobby: "chess" },
// ];
// function find(arr, hobi) {
//   let mapped = arr.map((word) => word[hobi]);
//   console.log(mapped);
//   let filtered = mapped.filter(
//     (word, index, mapped) => mapped.indexOf(word) === index
//   );
//   return filtered;
// }
// console.log(find(array, "hobby"));

//  მე 6 კვირის დავალებები
// დავალება 2 დაწერეთ ფუნქცია სახელწოდებით capitalizeWords, რომელიც იღებს წინადადებას (სტრიქონს) არგუმენტად და აბრუნებს ახალ წინადადებას, სადაც თითოეული სიტყვის პირველი ასო დიდია.
// function capitalizeWords(str) {
//   let splited = str.split(" ");
//   let filtered = splited.filter((word) => word !== "");
//   let mapped = filtered.map((word) => word[0].toUpperCase() + word.slice(1));

//   return mapped.join(" ");
// }
// console.log(capitalizeWords("i have badass cat"));
// დავალება1.დაწერეთ ფუნქცია generateRandomNumber, რომელიც იღებს მინიმალურ და მაქსიმალურ რიცხვს არგუმენტებად და აბრუნებს შემთხვევით რიცხვს მინიმალურ და მაქსიმალურ მნიშვნელობებს შორის.
// function generateRandomNumber(num1, num2) {
//   let random = Math.random();
//   let reduced = random.reduce((num1, num2));
// }
// console.log(generateRandomNumber(20, 50));
// დავალება 3.დაწერეთ ფუნქცია, რომელიც მიიღებს ობიექტების მასივს და თვისების სახელს და აბრუნებს ამ თვისების უნიკალური მნიშვნელობების მასივს ყველა ობიექტიდან.
// let array = [
//   { name: "baqari", age: 30, hobby: "chess", edu: "bit" },
//   { name: "temo", age: 20, hobby: "swimming", edu: "bitc" },
//   { name: "lasha", age: 23, hobby: "chess", edu: "bit" },
// ];
// function find(arr, hobi) {
//   let mapped = arr.map((word) => word[hobi]);
//   let filtered = mapped.filter(
//     (element, index, mapped) => mapped.indexOf(element) === index
//   );
//   return filtered;
// }
// console.log(find(array, "edu"));
// დავალება 4,დაწერეთ ფუნქცია, რომელიც იღებს სტრიქონს შეყვანად და აბრუნებს ჭეშმარიტს, თუ ის არის პანგრამა (შეიცავს ანბანის ყველა ასოს ერთხელ მაინც), ცრუ სხვა შემთხვევაში.
// function findPangram(str) {
//   if (
//     str.includes(
//       "q",
//       "w",
//       "e",
//       "r",
//       "t",
//       "y",
//       "u",
//       "i",
//       "o",
//       "p",
//       "l",
//       "k",
//       "j",
//       "h",
//       "g",
//       "f",
//       "d",
//       "s",
//       "a",
//       "z",
//       "x",
//       "c",
//       "v",
//       "b",
//       "n",
//       "m"
//     )
//   ) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(findPangram("uritogkfkmcxxslsd"));

// let array = ["q",
//       "w",
//       "e",
//       "r",
//       "t",
//       "y",
//       "u",
//       "i",
//       "o",
//       "p",
//       "l",
//       "k",
//       "j",
//       "h",
//       "g",
//       "f",
//       "d",
//       "s",
//       "a",
//       "z",
//       "x",
//       "c",
//       "v",
//       "b",
//       "n",
//       "m"]
// function findPangram(arr,str){
//   let answer = arr.every((element)=>str.includes(element))
//   return answer
// }
// console.log(findPangram(array,"hfjmxnbvhdue"))   <<<<<<<<<<<<<<<<< გაკეთების მეორე გზა
// დავალება 5,დაწერეთ ფუნქცია, რომელიც მიიღებს წინადადებას შესაყვანად და აბრუნებს უნიკალური სიტყვების მასივს ანბანური თანმიმდევრობით, გამოკლებით გავრცელებული ინგლისური სიტყვების, როგორიცაა "the", "a" და "is".
// function findUnique(str) {
//   let splited = str.split(" ");
//   let filtered = splited.filter(
//     (element, index, arr) => arr.indexOf(element) === index
//   );
//   let sorted = filtered.sort((a, b) => a.localeCompare(b));
//   let filtered2 = sorted.filter(
//     (element) => element !== "the" && element !== "a" && element !== "is"
//   );
//   return filtered2;
// }
// console.log(
//   findUnique("my beautiful cat is a most beautiful cat in the house")
// );
//  ეს მეორე გზა ქვემოთ
// let arr = ["the", "a", "is"];
// function findUnique(str) {
//   let splited = str.split(" ");
//   let filtered = splited.filter((element) => !arr.includes(element));
//   let filtered2 = filtered.filter(
//     (element, index, arr) => arr.indexOf(element) === index
//   );
//   let sorted = filtered2.sort((a, b) => a.localeCompare(b));
//   return sorted;
// }
// console.log(
//   findUnique("my beautiful cat is a most beautiful cat in the house")
// );
// დავალება 6,დაწერეთ პროგრამა, რომ ამოიღოთ ყველა ცრუ მნიშვნელობა მასივიდან.
// let arr = [NaN, false, undefined, "", 23, "DOG", "kkxkxk"];
// let filtered = arr.filter(Boolean);
// console.log(filtered);
// დავალება 7,დაწერეთ პროგრამა წინადადებაში სიტყვების თანმიმდევრობის შესაბრუნებლად.

// function reverse(str) {
//   let splited = str.split(" ");
//   let reversed = splited.reverse();
//   return reversed.join(" ");
// }
// console.log(reverse("what a wonderful day"));

// დავალება 8,დაწერეთ პროგრამა, რათა შეამოწმოთ არის თუ არა სტრიქონი პალინდრომი.
// function findPalindrome(str) {
//   let shewebebuli = str.replaceAll(" ", "");
//   let splited = shewebebuli.split("");
//   let shebrunebuli = splited.reverse();
//   let sabolooShebrunebuli = shebrunebuli.join("");
//   return shewebebuli === sabolooShebrunebuli;
//   if (shewebebuli !== sabolooShebrunebuli) {
//     return false;
//   } else {
//     return true;
//   }
// }
// console.log(findPalindrome("aia aia"));
// დავალება 9,დაწერეთ პროგრამა,რომელიც იპოვის მასივში ყველაზე დიდ რიცხვს(არ გამოვიყენოთ სორტი).
// let arr = [1, 2, 3, 4, 5, 45, 234, 26];
// let sorted = arr.sort((a, b) => b - a);
// console.log(sorted[0]);
// let array = [1, 2, 3, 4, 5, 45, 234, 26];
// function findLargestNumber(arr) {
//   let max = arr[0];
//   for (let num of arr) {
//     if (num > max) {
//       max = num;
//     }
//   }
//   return max;
// }
// console.log(findLargestNumber(array));
// დავალება 10,დაწერეთ პროგრამა,რომელიც შეკრიბავს მასივის ყველა რიცხვს(არ გამოვიყენოთ reduce).
// let array = [12, 2, 3, 4, 5, 6, 7, 8, 9];
// let reduced = array.reduce((acc, number) => acc + number, 10);
// console.log(reduced);

// let array = [12, 2, 3, 4, 5, 6, 7, 8, 9];
// function sum(arr) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     count = count + arr[i];
//   }
//   return count;
// }
// console.log(sum(array));

//    მე 8 კვირა,პრაქტიკული 1
//  1.დაწერეთ ფუნქცია რომელიც პარამეტრად მიიღებს  callback ფუნქციებს და გამოიძახებს მათ იმის მიხედვით თუ რამდენად სწორად შესრულდა რაიმე პირობა.
//   დაწერეთ იგივე პირობა promise ის გამოყენებით

//                       ქოლბექებით

// function equalsCheck(successCallback, errorCallback) {
//   if (1 + 1 === 5) {
//     successCallback("Equals");
//   } else {
//     errorCallback("doesn't equal");
//   }
// }

// equalsCheck(
//   (message) => {
//     console.log("succes:", message);
//   },
//   (error) => {
//     console.log("failed:", error);
//   }
// );
//
//                                          პრომისებით

// function equals() {
//   return new Promise((resolve, reject) => {
//     if (1 + 1 === 2) {
//       resolve("equals");
//     } else {
//       reject("doesn't equal");
//     }
//   });
// }
// equals()
//   .then((message) => {
//     console.log("succes:", message);
//   })
//   .catch((error) => {
//     console.log("failed:", error);
//   });

//    2.create two promises.the first one resolves with the number,and second one multiplies resolved number by 2.
//  promise chaining
// function promiseOne() {
//   return new Promise((resolve) => {
//     resolve(5);
//   });
// }
// function promiseTwo(number) {
//   return new Promise((resolve,reject) => {
//     reject("failed");
//     // resolve(number * 2);
//   });
// }
// promiseOne()
//   .then((result) => promiseTwo(result))
//   .then((finalResult) => {
//     console.log(finalResult);
//   })
//   .catch((error) => {
//     console.log(error);
//   });
//    3.write a function that runs after two seconds when  executed,counts 1 to 10 and then fetches the github user data
// async function getGithubUser(user) {
//   const response = await fetch(`https://api.github.com/users/${user}`);
//   const data = await response.json();
//   console.log(data);
// }
// function mainFunction() {
//   let counter = 0;
//   let interval = setInterval(() => {
//     counter++;
//     console.log(counter);
//     if (counter >= 10) {
//       clearInterval(interval);
//       getGithubUser("marikuna246");
//     }
//   }, 100);
// }
// setTimeout(() => mainFunction(), 10);
//                                                             8 კვირა,დავალება 1
// 1,Callback Basics: Write a function that takes a callback as an argument and calls it after a delay of 1 second.

// function callCallback() {
//   console.log("HELLO");
// }
// function call(callBackFunc) {
//   setTimeout(callBackFunc, 1000);
// }
// call(callCallback);
//                                                       8 კვირა,დავალება2
// 2,Promise Basics: Create a promise that resolves after 2 seconds and logs a success message.

// function promise() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("congratulations");
//     }, 2000);
//   });
// }
// promise().then((message) => {
//   console.log(message + " to you");
// });
//                                                           8 კვირა,დავალება3
// 3,Promise Chain: Create a chain of promises where each resolves after 1 second and logs a message.
// function promiseGenerator() {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("congratulations");
//     }, 1000);
//   });
// }
// promiseGenerator()
//   .then((message) => {
//     console.log(message);
//     return promiseGenerator();
//   })
//   .then((message) => {
//     console.log(message);
//   });
//                                                             8 კვირა,დავალება 4
// 4, Async/Await: Write an asynchronous function using async/await that simulates fetching data from an API after 2 seconds.
// async function userData() {
//   let response = await fetch("https://api.github.com/users/marikuna246");
//   let data = await response.json();
//   console.log(data);
// }
// setTimeout(userData, 2000);

//                                                         8 კვირა,პრაქტიკული 2
//   1.write a function that runs after two seconds when  executed,counts 1 to 10 and then fetches the github user data
// async function getGithubUser(user) {
//   const response = await fetch(`https://api.github.com/users/${user}`);
//   const data = await response.json();
//   return data;
// }
// function mainFunction() {
//   let counter = 0;
//   const userPromise = getGithubUser("marikuna246");
//   let interval = setInterval(async () => {
//     counter++;
//     console.log(counter);
//     if (counter >= 10) {
//       clearInterval(interval);
//       console.log(await userPromise);
//     }
//   }, 100);
// }

// setTimeout(() => mainFunction(), 2000);

// 2. write a program that fetches two different data and prints them after both of them are fetched
