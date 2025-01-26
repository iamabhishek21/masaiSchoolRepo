// // // // you are given an array your task is to find the maximum occuring element
// // // //  from the array
// // // let arr =[8,1,2,3,8,4,3,2,8]
// // // ouptut = 8

// // // //1. Read question
// // // //2. Read Input and Output
// // // //3. Try to build logic in copy and pen
// // // //4. Try to convert the logic into code

// // //                   i
// // // [8,1,2,3,8,4,3,2,8]

// // // // element - occuring
// // //         8 - 3
// // //         1 - 1
// // //         2 - 2
// // //         3 - 2
// // //         4 - 1

// // //             i
// // // arr  =[4,1,3,1]

// // // // if element is not in object we will add element with frequency 1
// // // // if the element is already in object we will increase frequency

// // // let obj ={
// // // //element : value
// // //       4 : 1,
// // //       1 : 2,
// // //       3 : 1,

// // // }

// // // output = 1

// // // first part
// // // 1. we need one object to store the element and  their frequency -done
// // // 2. we need to run a loop for array -done
// // // 3. check condition - 1. if element is not present in object
// //                         // 2. if element is present in object

// // // second part we will get the maximum occuring element from object
// // // 1. from the object we need to find the max occuring element

// // let arr  =[4,1,5,1,2,1]

// // let obj ={};

// // for(let i =0; i<arr.length ; i++){

// //     if(obj[arr[i]]==undefined){ // element is not present in object
// //         obj[arr[i]] = 1
// //     }
// //     else{
// //       obj[arr[i]]++   // if element already there increase the frequency
// //     }
// // }

// // let max  =0;
// // let ans =undefined

// // for( let key in obj){

// //   if(obj[key] > max){
// //     max  =obj[key]
// //     ans =key
// //   }

// // }
// // console.log(ans,max)

// // // second part
// // // 1. need two vairbale max and element  and  iterate in object
// // // 2. compare the vlauae of each key with max
// //     // 1. if value > max max  =value elemnet = key

// //   // obj =
// //   // {key : value
// //   //   '1': 3,
// //   //   '2': 1,
// //   //   '4': 1,
// //   //   '5': 1

// //   // }

// // // you are given an array with all unique element expect one
// // // one element is coming twice find that element

// // let arr =[ 10, 20 30, 40 ,30]

// // Problem-1 Rectangle Object

// // Create a rectangle object with length and width properties
// // Create two methods area and perimeter, that will return the area and perimeter of the rectangle

// // take 1 min to understand this question
// // follow the step to solve this problem
// //1. read the problem
// //2. try to build logic
// //3. covert this into code

// let rectangle ={

//   length : 12 ,  // we have just taken the default value
//   width  : 5, // we have just taken the default value

//   //  create a method
//   // methodname : function(){
//   //   // what ever the operation you want to perform
//   // }

//   area : function(){
//     // return the area of rectangle
//     rectangleArea = this.length* this.width
//     return rectangleArea
//   } ,

//   perimeter : function(){
//     // return the perimeter of rectangle
//     rectanglePerimeter = 2*(this.length+this.width)
//     return rectanglePerimeter
//   }
// }

// rectangle.length=15;
// rectangle.width=10;

// console.log(rectangle.area())
// console.log(rectangle.perimeter())

// ### **Products Cart Object**

// - Given an input of products in the below format (Name Quantity Price)
// - Input

// ```
// name =["Rice", "Dal", "Salt"]
// Quantity =[2, 3, 1]
// Price =[60, 50, 20]

// ```

// - Create an object with the key `data` which is an array of objects with the format `{name: "Rice", quantity: 2, price: 60}`
// - The object must have a method called `total` which calculates the total values of items (multiplying quantity of each with its price)
// - Sample output for the above case `290`

// {
//   "name":name
//   "Quantity":Quantity
//   "price" :price
// }

// let name =["Rice", "Dal", "Salt"]
// let Quantity =[2, 3, 1]
// let Price =[60, 50, 20]

// let cart ={

//   data :[],

//   // method:function(){
//   //   // what ever the operation you want to perform
//   // }

//   dataEntry : function(){
//     for(let i=0; i< name.length ; i++){
//      let obj ={
//        name:name[i],
//        quantity:Quantity[i],
//        price:Price[i]
//      }

//      this.data.push(obj)

//     }
//     }
//     ,

//  total :function(){
//       let totalValue =0;

//       for(let i=0; i<this.data.length ; i++){
//         totalValue+=this.data[i].quantity*this.data[i].price
//       }

//       return(totalValue)
//     }

// }

// cart.dataEntry()

// let a  =cart.total()

// console.log(a)

// let num = ["C", "A", "T"];

// for (i = 0; i < num.length; i++) {
//   if (num[i] === "A") {
//     num[i] = "#";
//   }
// }
// console.log(num);

// let arr = ["a", "b", "h", "i", "s", "h", "e", "k"];

// for (i = 0; i < arr.length; i++) {
//   if (arr[i] === "h") {
//     arr[i] = "$";
//   }
//   console.log(arr);
// }

// let obj = ["m", "a", "s", "a", "i"];

// for (let i = 0; i < obj.length; i++) {
//   if (obj[i] === "a") {
//     obj[i] = "#";
//   }
// }
// console.log(obj);

let temp = [4, 6, 8, 5, 2, 10, 12];

temp[3] += 2;

for (let i = 0; i < temp.length; i++) {
  console.log(temp[i] + "°C");
}
