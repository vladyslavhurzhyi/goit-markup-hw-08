;(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-modal-open]'),
        closeModalBtn: document.querySelector('[data-modal-close]'),
        modal: document.querySelector('[data-modal]'),
        body: document.querySelector('body'),
    }

    refs.openModalBtn.addEventListener('click', toggleModal)
    refs.closeModalBtn.addEventListener('click', toggleModal)

    function toggleModal() {
        refs.modal.classList.toggle('is-hidden')
        refs.body.classList.toggle('no-scroll')
    }
})()

// ______________________no-scroll-menu______________
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
