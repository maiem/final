// let a = 'maiem';
// console.log(a);

// let b = 10;
// console.log(typeof String(b));

// let s='123456789';
// console.log(s.substring(1, s.length-3));

const numb = [1,2, -3,4];
// const newArr = numb.map((value, index) =>{
//     // console.log(value);
//     // console.log(index);
//     return value * 2;
// })


// const arr =  numb.filter((value,index) =>{
//     return value %2 == 0;
// })


// const arr =  numb.some((value,index) =>{
//     return value < 0;
// })

const str = ['a','d','y','q'];
const arr = str.sort();
const newArr = numb.sort((a,b)=>{
    return b - a;
})

console.log(newArr);