
//Using the Focus() and Blur() event
$($(function(){
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

}));

//Using the change event 
$(function() {

  // The change event occurs when the value of an element has been changed (only works on <input>, <textarea> and <select> elements).

  //The change() method triggers the change event, or attaches a function to run when a change event occurs.


  $("#checkbox").change(function() {
    //The is() method checks if one of the selected elements matches the selectorElement.
    var isChecked = $(this).is(":checked");  // or .prop("checked")

    if (isChecked) {
   
      $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #181");
    } else {
      $(this).add("label[for='checkbox']").css("box-shadow", "0 0 4px #811");
    }
  });

  //Mini Challenge! Add a select element to your html for options. When the value changes, alert with that element you selected. 


  $("#selection").change(function() {
    let chosen = $(this).find(":selected").text();
    alert(chosen);
  });

});