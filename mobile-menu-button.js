function openNav() {
    document.getElementById('opacity-bg').classList.replace('closeNav', 'openNav');
    document.getElementById('navbar-container-mobile').classList.replace('closeNav', 'openNav');
}

function closeNav() {
    document.getElementById('opacity-bg').classList.replace('openNav', 'closeNav');
    document.getElementById('navbar-container-mobile').classList.replace('openNav', 'closeNav');
}