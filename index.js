



//MODAL no register
function iniciaModal(modalID){
    const modal = document.getElementById(modalID)
    if(modal){
        modal.classList.add('show')
        modal.addEventListener('click', (e) =>{
            if(e.target.id == modalID || e.target.className == "close"){
                modal.classList.remove('show')
                // localStorage.closeModal = modalID
            }
        })
    }

}

const buttonFinished = document.querySelector('.done')

buttonFinished.addEventListener('click', () =>{
    event.preventDefault()
    iniciaModal('finished')
})
