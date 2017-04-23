// set the url for authentication
aspnetAuth.url = "http://www.whatthealt.com";

if (aspnetAuth.authentication) {
    // user is logged on
    $('#rowLogin').hide();
    $('#rowLogout').show();
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
                alert(result.message);
            });
    });

$('#formQuery').on('submit',
    function(e) {
        e.preventDefault();
        // add input text image url to array
        var imgUrls = [
            $("#formQuery input[name=imgUrl]").val()
        ];
        var numberOfCaptions = 1;
        whatthealt.get(imgUrls,
            numberOfCaptions,
            function(results) {
                console.log(results);
                results.forEach(function(result) {
                    var $row = $("<div>").addClass("row").append(
                        $("<div>").addClass("col-lg-6").append(
                            $("<div>").addClass("thumbnail").append(
                                $("<img>").attr("src", result.imageUrl)
                                .attr("alt", result.description.captions[0].text))
                            .append(
                                $("<div>").addClass("caption").append(
                                    $("<p>").html(result.description.captions[0].text)))));

                    $("#intro .container").append($row);
                });
            });
    });