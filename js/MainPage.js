
$(document).ready(function () {
        $('#SIGNIN').click(
            function (e) {
                e.preventDefault();
                var $userName = $('#usernameinput').val();
                var $password = $('#userpassinput').val();
                var login;

                if ($userName.trim() != "" && $password.trim() != "") {
                    login = true;
                    var queryString = "?para1=" +login + "&para2=" +$userName;
                    window.location.href = "Artists.html" + queryString;
                } else
                    swal({
                        title: "UserName or PassWord Not Correct",
                        type: "warning",
                        confirmButtonClass: "btn-danger",
                        confirmButtonText: "Ok",
                        closeOnConfirm: false
                    });
            }
        );
    });

