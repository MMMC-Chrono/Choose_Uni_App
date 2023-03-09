$(document).ready(function() {
    $.getJSON('/list/uni', function(data) {
        $.each(data, function(i, val) {
            if (val.about.trim() === '') {
                val.about = '---'
            }
            if (val.note.trim() === '') {
                val.note = '---'
            }
            let border_color;
            if (val.selection === 'ok') {
                border_color = 'white'
            } else {
                border_color = 'red'
            }
            console.log(val.selection)

            $('<div>', {
                'class': `uni ${border_color}`,
                html: `
                <h6>Name:</h6>
                <p>${val.title}</p><br/>
                <h6>Price:</h6>
                <p>${val.price}</p>
                <a href=${val.link} target='_black' id='link'>View price</a><br/>
                <h6>Program:</h6>
                <p>${val.program}</p>
                <a href=${val.about} target='_black' id='about'>View program</a><br/>
                <h6>Deadline:</h6>
                <p>${val.deadline}</p>
                <a href=${val.deadline_link} target='_black' id='about'>View deadline</a><br/>
                <h6>Note:</h6>
                <p>${val.note}</p><br/>
                `
            }).appendTo('#list')
        })
    })
})