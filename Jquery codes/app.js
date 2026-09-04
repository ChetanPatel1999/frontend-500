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
  //     $("#box").hide("fast")
  // })



  //  $("#btn").click(() => {
  //     $("#box").hide("slow")
  // })

  // $("#btn").click(() => {
  //   $("#box").hide(2000, () => {
  //     console.log("hidden is complete")
  //   })
  // })


  // $("#btn").click(() => {
  //   $("#box").hide(2000, () => {
  //         $("#box").show(2000)
  //   })
  // })

  //fadeIn() fadeOut() fadeToggle()  fadeTo()

  // $("#btn").click(() => {
  //   $("#box").fadeOut(2000, () => {
  //     $("#box").fadeIn(2000, () => {
  //       $("#box").fadeOut(2000, () => {
  //         $("#box").fadeIn(2000,)
  //       })
  //     })
  //   })
  // })

  // $("#btn").click(() => {
  //   $("#box").fadeToggle()
  // })

  // $("#btn").click(() => {
  //   $("#box").fadeTo(2000, 0.1)
  // })

  //slideDown()  slideUp()   slideToggle()

  // $("#btn").click(() => {
  //   $("#box").slideUp(2000)
  // })

  //   $("#btn").click(() => {
  //   $("#box").slideDown(2000)
  // })

  // $("#btn").click(() => {
  //   $("#box").slideToggle("slow",()=>{
  //     $("body").css("background-color","blue")
  //   })
  // })

  // animation using jquery
  // $(selector).animate({params},speed,callback);

  // $("#btn").click(() => {
  //   $("#box").animate({ marginLeft: '250px' }, 2000, () => {
  //     $("#box").animate({ marginTop: '250px' }, 2000, () => {
  //       $("#box").animate({ marginLeft: '0px' }, 2000, () => {
  //         $("#box").animate({ marginTop: '0px' }, 2000)
  //       })
  //     })
  //   })
  // })

  // $("#btn").click(() => {
  //   $("#box").animate({
  //     marginLeft: '250px',
  //     height: '150px',
  //     opacity: "0.5"
  //   }, 2000)
  // })


  // $("#btn").click(() => {
  //   $("#box").animate({
  //     height: '+=10px',
  //   })
  // })

  // $("#btn").dblclick(() => {
  //   $("#box").animate({
  //     width: '+=10px',
  //   })
  // })

  // $("#btn").click(function () {
  //   $("#box").animate({
  //     // height: 'toggle',
  //     width: 'toggle',
  //   });
  // });


  // $("#btn").click(() => {
  //   let d = $("#box")
  //   d.animate({ height: '300px', opacity: '0.4' }, "slow");
  //   d.animate({ width: '300px', opacity: '0.8' }, "slow");
  //   d.animate({ height: '100px', opacity: '0.4' }, "slow");
  //   d.animate({ width: '100px', opacity: '0.8' }, "slow");
  // })

  // $("button").click(function () {
  //   var div = $("div");
  //   div.animate({ marginLeft: '100px' }, "slow");
  //   div.animate({ fontSize: '50px' }, "slow");
  // });


  //stop() :- its stop animation and affect


  // $("#btn").click(function () {
  //   $("#box").slideToggle(4000);
  // });

  // $("#stop").click(function () {
  //   $("#box").stop(false, false)
  // });

  // $("#btn").click(function () {
  //   $("#box").css("backgroundColor", "blue").fadeTo(1000,0.5).slideUp(2000);
  // });


  // text() - Sets or returns the text content of selected elements
  // html() - Sets or returns the content of selected elements(including HTML markup)
  // val() - Sets or returns the value of form fields

  // $("#btn").click(function (e) {
  //   let data = $("#head").text()
  //   $("#para").text(data)
  // });


  //make counter
  // $("#btn").click(function (e) {
  //   $("#head").text(Number($("#head").text()) + 1)
  // });

  // $("#btn").click(function (e) {
  //   $("#head").html(Number($("#head").html()) + 1)
  // });


  // $("#btn").click(function (e) {
  //   let data = $("#box").html()
  //   console.log(data)
  // });

  // $("button").click(function (e) {
  //   let d = $("input").val()
  //   $("h1").text(d)
  //   $("input").val("")
  // });


});