module.exports = {
    // Adapted from the following post:
    // http://www.jquerybyexample.net/2012/06/get-url-parameters-using-jquery.html
    getUrlParameter: function(sParam) {
        var sPageURL = decodeURIComponent(window.location.search.substring(1)),
            sURLVariables = sPageURL.split("&"),
            sParameterName,
            i;

        for (i=0; i < sURLVariables.length; i++) {
            // Only split on first occurrence of equals sign
            sParameterName = sURLVariables[i].split(/=(.+)/);

            if (sParameterName[0] === sParam) {
                return sParameterName[1] === undefined ? true : sParameterName[1];
            }
        }
    }
}
