$(document).ready(function () {
    $('#SIGN-UP').click(
        function (e) {
            e.preventDefault();
            var $userName = $('#usernameinput').val();
            var $password = $('#userpassinput').val();
            var $email =$('#input-email').val();
            var $Phone = $('#Phone').val();
            var login;
            if ($userName.trim() != "" && $password.trim() != ""&&validateEmail($email)) {
                login = true;
                var queryString = "?para1=" +login + "&para2=" +$userName;
                window.location.href = "Artists.html" + queryString;
            } else
                swal({
                    title: "UserName or PassWord or email Not Correct",
                    type: "warning",
                    confirmButtonClass: "btn-danger",
                    confirmButtonText: "Ok",
                    closeOnConfirm: false
                });
        }
    );
});

function validateEmail(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}