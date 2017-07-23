(function (window) {
    function purple() {
        let request = (method, endpoint, data, callback) => {

            let m = method.toUpperCase()
            let req = new XMLHttpRequest()
            let d = data || {}
            let err = null

            req.open(m, endpoint, true)
            if (m !== "POST" && m !== "GET") {
                return "invalid request method, only get or post are allowed"
            }
            req.onload = function () {
                if (req.status >= 200 && req.status < 400) {
                    // Success!
                    let res = JSON.parse(req.responseText);
                    callback(err, res)
                } else {
                    // We reached our target server, but it returned an error
                    err = req.response;
                    let res = JSON.parse(req.responseText);
                    callback(err, res)
                }
            };

            req.onerror = function () {
                // There was a connection error of some sort
                err = "connection error"
                callback(err)
            };

            req.send(d);
        }

        let _purple = {}
        _purple.test = ()=>{
            console.log(this)
        }
        _purple.request = request














        return _purple
    }


    if (typeof (window.purple) === 'undefined') {
        window.purple = purple();
    }
})(window)