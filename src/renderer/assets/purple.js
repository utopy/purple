(function (window) {
    function purple() {
        let P_TYPES= [{id:"t1", name:"comment"},{id:"t2", name:"account"},{id:"t3", name:"link"}]
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
                    err = "err";
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

        _purple.returnQuery = function(query){
            let u = "?"
            if(query){
                let o = query
                let p = Object.keys(o)
                p.forEach((n, i)=>{
                    u+= `${n}=${o[n]}`
                    if(p.length > 0){
                        if(p.length -1 !== i){
                            u+="&"
                        }
                    }
                },this)
                return u
            }
        }

        _purple.getSubredditPosts = function(subreddit, callback, options){
            let u = `https://www.reddit.com/r/${subreddit}/.json`
            if(options){
                u += this.returnQuery(options)
            }

            request("GET", u, {}, (err, res)=>{
                let e = null
                if(err){
                    e = "error"
                } else {
                    res.data.children.forEach((p, i)=>{
                        P_TYPES.forEach((t, ii)=>{
                            if(t.id === p.kind){
                                p.kind = t.name
                                
                            }
                        },this)
                    },this)
                    let response = {
                        posts : res.data.children,
                        after : res.data.after,
                        before: res.data.before,
                        kind: res.kind
                    }
                    callback(e, response)
                }
            })
        }

        _purple.searchSubreddit = function(query, callback){
            let u = "https://www.reddit.com/api/search_subreddit"
            u += this.returnQuery(query)
            request("POST", u, {}, )
        }








        return _purple
    }


    if (typeof (window.purple) === 'undefined') {
        window.purple = purple();
    }
})(window)