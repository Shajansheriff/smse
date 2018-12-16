

var users = firebase.database().ref("users");


$("#registrationForm").submit(function (event) {
  event.preventDefault();
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var department = $("#department").val();
  var college = $("#college").val();
  var gender = $("#gender").val();


  users.push({
    "name": name,
    "email": email,
    "phone": phone,
    "department":department,
    "college": college,
    "gender":gender
  });
  $('#thankYou').show();
  $('#formGrid').hide();
  return false;
});

