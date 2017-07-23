(function(window){
    function purple(){
        let request = (method, endpoint, data, callback)=>{

            let method = method.toUpperCase()
            let req = new XMLHttpRequest()
            let data = data || {}

            req.open(method, endpoint, true)
            (method === "POST") ? httpRequest.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
            if (method !== "POST" && method !== "GET"){
                return "error"
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