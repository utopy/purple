(function(window){
    function purple(){
        let _purple = {}
        return _purple
    }


    if(typeof(window.purple) === 'undefined'){
        window.purple = purple();
    }
})(window)