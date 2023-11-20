const searchBtn = document.querySelector('.link-search')
const logoOld = document.querySelector('.logo')
const logoNew = document.querySelector('.logo2')

const sideBar = document.querySelector('.sidebar')
const searchBar = document.querySelector('.search-bar')


const handleSideBar = () => {
    var flag = false;
    console.log(flag)
    // if (!flag) {
    //     sideBar.classList.toggle = '52px'
    //     searchBar.style.width = '396px'
    //     logoNew.style.display = 'block'
    //     logoOld.style.display = 'none'
    //     flag = true
    // } else {
    //     sideBar.style.width = '17.5%'
    //     searchBar.style.width = '0'
    //     logoNew.style.display = 'none'
    //     logoOld.style.display = 'block'
    // }

    sideBar.classList.toggle('sidebar-close')
    searchBar.classList.toggle('search-bar-open')
    logoNew.classList.toggle('d-block')
    logoOld.classList.toggle('d-none')

}

searchBtn.addEventListener("click", handleSideBar);


