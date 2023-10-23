let m_menu_dropbtn = document.querySelector('#header-m-dropbtn');
let m_menu_dropdown = document.querySelector("#header-m-dropdown");

m_menu_dropbtn.addEventListener('click', function(){
    m_menu_dropdown.classList.toggle("show");
    if (m_menu_dropdown.classList.contains('show')) {
        m_menu_dropdown.style.height = m_menu_dropdown.scrollHeight + 24 + 'px';
        m_menu_dropdown.style.padding = '12px 0'
    }else{
        m_menu_dropdown.style.height = '0px';
        m_menu_dropdown.style.padding = '0'
    }
})