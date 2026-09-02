// $(document).ready(function () {
//     //here we write jquery code
//     $("#btn").click(() => {
//         console.log("hello jquery")
//     })
// })


// $(function () {
//     //here we write jquery code
//     $("#btn").click(() => {
//         console.log("hello jquery")
//     })
// })

$(document).ready(function () {

    // $("p").css("color","red")    
    // $("#para").css("font-size", "50px")
    // $(".cls").css("font-size", "50px")
    // $("p.cls").css("color", "red")

    // $("button").click(()=>{
    //   console.log("jquery")  ;
    // })

    // $("*").css("color", "red")



    // $("#btn").click(function () {
    //     console.log("hello jquery")
    // })


    // $("#btn").click(function () {
    //     // $("p.cls").hide()
    //     $("p.cls").css("color","red")

    // })


    // $("#btn").click(function () {
    //     $("p.cls").css("color", "red")

    // })

    // $("#btn").dblclick(function () {
    //     $("p.cls").css("color", "blue")

    // })


    // $("h1").click(() => {
    //     $("p.cls").css("color", "blue")
    //     $("p.cls").css("font-weight", "900")
    // })


    //this point currunt event element
    // $("h1").mouseenter(function () {
    //     // console.log("enter mouse")
    //     $(this).css("background-color", "red")
    // });

    // $("h1").mouseleave(function () {
    //     // console.log("enter mouse")
    //     $("h1").css("background-color", "white")
    // });


    // $("#myint").focus(() => {
    //     console.log("focus working")
    //     $("#myint").css("background-color", "red")
    // })

    // $("#myint").blur(() => {
    //     console.log("blur working")
    //     $("#myint").css("background-color", "white")
    // })


    // Attach multiple event handlers to a btn element:
    // $("#btn").on({
    //     click: function () {
    //         console.log("btn is clicked")
    //     },
    //     mouseenter: function () {
    //         $("#btn").css("background-color", "red")
    //     },
    //     mouseleave: function () {
    //         $("#btn").css("background-color", "white")
    //     }
    // })




    // hide() , show() , toggle()

    // $("#btn").click(() => {
    //     $("#box").hide()
    // })

    // $("#btn").click(() => {
    //     $("#box").show()
    // })

    // $("#btn").click(() => {
    //     $("#box").toggle()
    // })


    //  $("#btn").click(() => {
    //     $("#box").hide(5000)
    // })

      $("#btn").click(() => {
        $("#box").slideToggle(500)
    })

});