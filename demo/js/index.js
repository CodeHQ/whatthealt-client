// set the url for authentication
aspnetAuth.url = "http://www.whatthealt.com";

if (aspnetAuth.authentication) {
    // user is logged on
    $('#rowLogin').hide();
    $('#rowQuery').show();
}

$('#formLogin').on('submit',
    function(e) {
        e.preventDefault();
        var username = $("#formLogin input[name=username]").val();
        var password = $("#formLogin input[name=password]").val();
        aspnetAuth.login(username,
            password,
            function(result) {
                $('#rowLogin').hide();
                $('#rowQuery').show();
                alert(result.message);
            });
    });

$('#formQuery').on('submit',
    function(e) {
        e.preventDefault();
        // add input text image url to array
        var imgUrl = $("#formQuery input[name=imgUrl]").val();
        var maxCandidates = 1;
        whatthealt.get(imgUrl,
            maxCandidates,
            function (result) {
                console.log(result);
                var imgUrl = result.imageUrl;
                var caption = result.captions[0].text;
                var $row = $("<div>").addClass("row").append(
                    $("<div>").addClass("col-lg-6").append(
                        $("<div>").addClass("thumbnail").append(
                            $("<img>").attr("src", imgUrl)
                                .attr("alt", caption))
                            .append(
                            $("<div>").addClass("caption").append(
                                $("<p>").html(caption)))));

                $("#intro .container").append($row);
            });
    });