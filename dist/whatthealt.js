/*!
 * What the alt client
 * http://whatthealt.com
 * Copyright 2017 What the alt Authors
 * Copyright 2017 Code HQ (Pty) (Ltd)
 * Licensed under MIT (https://github.com/CodeHQ/whatthealt-client/blob/master/LICENSE)
 */
;
(function (root, factory) {
    if (typeof define === "function" && define.amd) {
        define(["jquery"], factory);
    } else if (typeof exports === "object") {
        module.exports = factory(require("jquery"));
    } else {
        root.whatthealt = factory(root.jQuery);
    }
}(this,
    function (jquery) {
        if (jquery === undefined) {
            alert("whatthealt requires jQuery");
        }
        var whatthealt = {
            get: function (imgUrl, maxCandidates, cb) {
                $.ajax({
                    url: aspnetAuth.url + "/api/Captions",
                    type: "POST",
                    data: {
                        'imgUrl': imgUrl,
                        'maxCandidates': maxCandidates
                    },
                    headers: {
                        'Authorization': "Bearer " + aspnetAuth.authentication.access_token
                    },
                    dataType: "json",
                    success: function (serverData) {
                        cb(serverData);
                    }
                });
            }
        }
        return whatthealt;

    }));