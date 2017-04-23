
aspnetAuth.url = "https://localhost:44356";

if (aspnetAuth.authentication) {
    // user is logged on
    $('#rowLogin').hide();
    $('#rowLogout').show();
    $('#rowQuery').show();
    
}

$('#formLogin').on('submit', function (e) {
    e.preventDefault();
    var username = $("#formLogin input[name=username]").val();
    var password = $("#formLogin input[name=password]").val();
    aspnetAuth.login(username, password, function (result) {
        $('#rowLogin').hide();
        alert(result.message);
    });
});

$('#formQuery').on('submit',
    function (e) {
        e.preventDefault();
        // add input text image url to array
        var imgUrls = [
            $("#formQuery input[name=imgUrl]").val()
        ];
        var numberOfCaptions = 1;
        whatthealt.get(imgUrls, numberOfCaptions, function (result) {
            console.log(result);
        });
    });
$("#btnLogOut").click(function () {
    aspnetAuth.logout(function (result) {
        $('#rowLogin').show();
        alert(result.message);
    });
});