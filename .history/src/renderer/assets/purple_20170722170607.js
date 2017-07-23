(function(window){
    function purple(){
        let request = (method, endpoint, data, callback)=>{

            let m = method.toUpperCase()
            let req = new XMLHttpRequest()
            let d = data || {}

            req.open(m, endpoint, true)
            if (m !== "POST" && m !== "GET"){
                return "invalid request method, only get or post are allowed"
            }
            request.onload = function() {
            if (request.status >= 200 && request.status < 400) {
                // Success!
                var data = JSON.parse(request.responseText);
            } else {
                // We reached our target server, but it returned an error

            }
            };

            request.onerror = function() {
            // There was a connection error of some sort
            };

            request.send();
        }
        let _purple = {}
        _purple.request = request














        return _purple
    }


    if(typeof(window.purple) === 'undefined'){
        window.purple = purple();
    }
})(window)