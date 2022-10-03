
let settingsmenu = document.querySelector('.settings-menu')
let darkBtn = document.getElementById('dark-btn')

settingsMenuToggle = () => {
    settingsmenu.classList.toggle('setting-menu-height')
    // document.body.classList.toggle('dark-theme')


}



darkBtn.addEventListener('click', () => {
    darkBtn.classList.toggle('dark-btn-on')
    document.body.classList.toggle('dark-theme')
    if (localStorage.getItem('theme') == 'light') {
        localStorage.setItem('theme', 'dark')
    }
    else {
        localStorage.setItem('theme', 'light')
    }
})


if (localStorage.getItem('theme') == 'light') {
    darkBtn.classList.remove('dark-btn-on')
    document.body.classList.remove('dark-the')
}
else if (localStorage.getItem('theme') == 'dark') {
    darkBtn.classList.add('dark-btn-on')
    document.body.classList.add('dark-the')
}
else {
    localStorage.setItem('theme', "light")
}



