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
            req.onreadystatechange()
            req.send()
        }
        let _purple = {}
        _purple.request = request














        return _purple
    }


    if(typeof(window.purple) === 'undefined'){
        window.purple = purple();
    }
})(window)