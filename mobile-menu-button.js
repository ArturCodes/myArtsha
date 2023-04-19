function show() {
    var bar1 = getElementByClass('bar1')
    var bar2 = getElementByClass('bar2')
    var bar3 = getElementByClass('bar3')


    document.getElementById('opacity-bg').classList.replace('hide', 'show');
    document.getElementById('navbar-menu').classList.replace('hide', 'show');
}

function hide() {
    document.getElementById('opacity-bg').classList.replace('show', 'hide');
    document.getElementById('navbar-menu').classList.replace('show', 'hide');
}

function menuBars() {
    
}