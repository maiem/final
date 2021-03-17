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

// const str = ['a','d','y','q'];
// const arr = str.sort();
// const newArr = numb.sort((a,b)=>{
//     return b - a;
// })

// console.log(newArr);

// const myArr = ['ha mai anh', 'ha huu an', 'ha thanh truc'];

// const newArr = myArr.map((value, index) =>{
//     return value.split()
// })

$(function () {
    console.log("maiem");
});

// $(function () {
//     $(".demo").css(
//         {
//         "color": "#ccc",
//         "background": "violet"
//         });
// });

// $(function () {
//    const res = $(".demo").css("background");
//    console.log(res);

//    const index = res.indexOf(")");
//     console.log(index);
// });

//tat thong tin sp bang su kien click, sau 3s hien ra 
$(function () {
    $(".add").click(function (e) { 
        e.preventDefault();

        // $(".demo").css("display", "none");
        // setTimeout(() =>{
        //     $(".demo").css("display", "block");
        // },3000);

        $(".demo").addClass("bg-blue");
    });

    $(".remove").click(function (e) { 
        e.preventDefault();
        
        $(".demo").removeClass('bg-blue');
    });
});

$(function () {
    $("a").click(function (e) { 
        //e.preventDefault();  chặn sự kiện mặc định
        console.log(this);
        
    });

    $("form").click(function (e) { 
        e.preventDefault();
        console.log(this);
        
    });
});

