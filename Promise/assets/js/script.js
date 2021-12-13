// fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res.json()).then(res=>res.forEach(post => {
//     console.log(post.title);
// }))

async function getAllPost(){
    let data=await fetch("https://jsonplaceholder.typicode.com/posts").then(res=>res);
    let posts=await data.json();
    console.log(posts);
}

getAllPost()

// let arr=[1,2,3]

// function printIndexValue(){
//     setTimeout(()=>{
//         arr.forEach(i=>{
//             console.log(i);
//         })
//     },1000)
// }


// setValue();

// function setValue(){
//     setTimeout(()=>{
//         arr.push(4);
//         printIndexValue();
//     },2000)
// }

// function setValuePro(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             arr.push(4);
//             let isFullfilled=false;
//             if(isFullfilled){
//                 resolve();
//             }else{
//                 reject("Some error occur...");
//             }
//         },2000)
//     })
// }

// setValuePro().then(res=>{
//     printIndexValue()
// }).catch(e=>{
//     console.error(e)
// })

// let p1=new Promise(function(resolve, reject) {

//     setTimeout(() => resolve(1), 1000);
  
//   }).then(function(result) {
//     return result * 2;
  
//   }).then(function(result) { 
//     return result * 2;
  
//   }).then(function(result) {
//     return result * 2;
  
//   });

// let p2=Promise.reject("p2");
// let p3=Promise.resolve("p3");

// Promise.race([p1,p2,p3])
// .then(value =>{
//     console.log();
// })
// .catch(value =>{

// })
// const p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The first promise has resolved');
//         resolve(10);
//     }, 1 * 1000);

// });

// const p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('The second promise has rejected');
//         reject("Error 505");
//     }, 2 * 100);
// });


// Promise.race([p1, p2])
//     .then(value => console.log(`Resolved: ${value}`))
