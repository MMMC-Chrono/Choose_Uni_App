$(document).ready(function() {
    console.log('hi')
    $.getJSON('/list/uni', function(data) {
        // console.log(data.length)
        let list = []
        list = data
        console.log(list)
    })
})