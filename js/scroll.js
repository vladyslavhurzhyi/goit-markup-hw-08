;(() => {
    const refs = {
        openMenubtn: document.querySelector('[data-menu-open]'),

        menu: document.querySelector('[data-menu]'),
        body: document.querySelector('body'),
    }

    refs.openMenubtn.addEventListener('click', toggleModal)

    function toggleModal() {
        refs.body.classList.toggle('no-scroll')
    }
})()
