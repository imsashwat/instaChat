
export function user() {
    
    let user = ' '
    $('.loginbtn').click( () => {
        user = $('.loginbox').val()
    });
}