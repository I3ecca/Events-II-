$(function(){
  let inputFields = $("input:text, input:password, textarea");

  inputFields.focus(function(){
    $(this).css("box-shadow", "0 0 4px #2d41d6");
  })


  inputFields.blur(function(){
    $(this).css("box-shadow", "none");
  })

  // Mini Challenge! Use the blur() event to check if the name has at least 3 characters. If it does not have at least 3 characters, you let the user know by making the focus red. Make a green box shadow if everything is correct. 


// this is basic form validation
  $("#name").blur(function(){
    let text = $(this).val();
    if(text.length < 3){
      $(this).css("box-shadow", "0 0 4px red");
    } else {
      $(this).css("box-shadow", "0 0 4px green");
    }

  })


});