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
        _purple.list = function(){
            console.log(this)
        }

        _purple.getSubbreddit = function(subreddit, callback, options){
            let u = `https://www.reddit.com/r/${subreddit}/.json`
            if(options){
                u+='?'
                let o = options
                let p= Object.keys(o)
                p.forEach((n, i)=>{
                    u+= `${n}=${o[n]}`
                    if(p.length > 0 || i < p.length){
                        u+= '&'
                    }
                },this)
                console.log(u)
            }

            request("GET", u, {}, (err, res)=>{
                if(err){
                    return err
                } else {
                    let response = {
                        posts : res.data.children,
                        after : res.data.after,
                        before: res.data.before,
                        kind: res.kind
                    }
                    callback(response)
                }
            })
        }








        return _purple
    }


    if (typeof (window.purple) === 'undefined') {
        window.purple = purple();
    }
})(window)