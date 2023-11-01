var $login=false;
var $username;
var max;
$(document).ready(function () {
    var queryString = decodeURIComponent(window.location.search);
    var queries = queryString.split("&");
     $login = queries[0].substring(7);
     $username = queries[1].substring(6);
    console.log($login);
    console.log($username);
    if ($login) {
        $('#Register').after('<li>\n' +
            '                    <div class="input-login" >\n' +
            '                        <input type="search" style="border-radius: 15px;margin:0px 10px;padding-left: 30px">\n' +
            '                        <span class="icon-input" style="    left: 7px;top: -32px;position:relative;">\n' +
            '                                <i class="fas fa-search fa-sm"></i>\n' +
            '                           </span>\n' +
            '                    </div>\n' +
            '\n' +
            '                </li><li><span><i class="fas fa-user fa-lg"></i></span></li>');
        var queryString = "?para1=" + $login + "&para2=" + $username;
        var i;
        for (i = 0; i < $('#navication nav ul li').length; i++) {
            $('#navication nav ul li')[i].children[0].href += queryString;
        }
        var i;
        for (i = 0; i < $('.dropdown-item').length; i++) {
            $('.dropdown-item')[i].href += queryString;
        }
        console.log("5555555");
        $('.Register').remove();
        console.log("5555555");
        $('.Home').remove();
        $('#movieshow')[0].href += queryString;
    }
});
$("#likeatag").click(function () {
    if ( $('#like').css('color') == "rgb(0, 0, 0)") {
        $('#like').removeClass('far');
        $('#like').addClass('fas');
        $('#like').css('color','red');
    } else {
        $('#like').removeClass('fas');
        $('#like').addClass('far');
        $('#like').css('color','black');
    }
});


$("#ShareComment").click(function () {
    var text= $('#text-comment').val();
    if(text.trim()!="") {
        $('.comment:last').after('  <div class="comment">\n' +
            ' <div class="row rowheadercomment" style="\n' +
            '   margin: 10px;\n' +
            '    border-bottom-style: solid;\n' +
            '    border-bottom-color: cornflowerblue;\n' +
            '"><img src="icon/user-silhouette.svg" style="height: 10%;\n' +
            '    width: 10%;\n' +
            '    margin-right: 10px;"><p id="userName" class="h4">'+$username+'</p></div>\n' +
            '        \n' +
            '\n' +
            '<p style="margin: 10px">'+text+'</p>\n' +
            '</div>');

        swal("Good job!", "You clicked the button!", "success");
        $('#CommentModal').modal('hide');
        $('#text-comment').val('');
    }
    else
    {
        swal({
            title: "Write Some Think?",
            type: "warning",
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    }

});
$(".rate").click(function () {
    var i=0;
     max=$(this).index();
    $( '.rate' ).each(function( index ) {
        console.log( $(this).attr('src'));
        $(this).attr('src','icon/like/starungold.svg');
    });
        $( '.rate' ).each(function( index ) {
        console.log( $(this).attr('src'));
        $(this).attr('src','icon/like/star gold.svg');
        console.log( $(this).attr('src'));
        val=$(this).index();
        return ( val !== max );
    });
});
$('#Add-Rate').click(function () {
      $('#RateModal').modal('hide');
      swal({
        title: "success",
        confirmButtonClass: "btn-success",
        confirmButtonText: "ok",
        closeOnConfirm: false
     });
    $('.add-comment:first').after(max+1);
  });
$('.add-comment').click(function () {
    console.log('before');
    if($login)
    {
        console.log('after');
        $('.add-comment:first').attr('data-target','#CommentModal');
        $('.add-comment:last').attr('data-target','#RateModal');
        $('.modal-header h5').html($username);
    }
    else
    {
        swal({
            title: "log in please",
            confirmButtonClass: "btn-danger",
            confirmButtonText: "Ok",
            closeOnConfirm: false
        });
    }
});

