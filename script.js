const filterBox = document.querySelectorAll('.box');
const navBox = document.querySelectorAll('.oferty ul li');

const filterGoods = filterClass => {

    navBox.forEach(item => item.classList.remove('active'));
    const active = document.querySelector(`[data-f="${filterClass}"]`);
    if (active) active.classList.add('active');
    
    
    filterBox.forEach(item => {
        item.classList.remove('hide');
        if (!item.classList.contains(filterClass) && filterClass !== 'all') {
            item.classList.add('hide');
        }

    })
}

document.querySelector('.oferty').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return;

    let filterClass = event.target.dataset['f'];
    filterGoods(filterClass);
    window.location.hash = event.target.dataset['f'];
});


function pokazKomunikat() {
    
    var message = document.getElementById("message");

    
    message.style.display = "block";

    
    setTimeout(function() {
        message.style.display = "none";
    }, 2000); 
}



function pokazKomunikat2(event) {
    event.preventDefault(); 

    
    var message = document.getElementById("message");

    
    message.style.display = "block";

    setTimeout(function() {
        message.style.display = "none";
    }, 2000); 
}


function toggleMenu() {
    const subMenu = document.getElementById("subMenu");
    subMenu.classList.toggle("open-menu");
  }
  


  
  function toggleEdit() {
    const form = document.getElementById('profile-form');
    const inputs = form.querySelectorAll('input, textarea');
    const editButton = document.getElementById('edit-button');

    
    const isEditing = editButton.textContent === 'Edytuj profil';

    
    
    
    editButton.textContent = isEditing ? 'Zapisz zmiany' : 'Edytuj profil';
}




function toggleOffers() {
    const offersList = document.getElementById('offers-list');
    const button = document.getElementById('show-offers');
    
    if (offersList.style.display === 'none') {
        offersList.style.display = 'block';
        button.innerText = 'Ukryj'; 
    } else {
        offersList.style.display = 'none';
        button.innerText = 'Pokaż wybrane oferty'; 
    }
}



function toggleEdit() {
    const profileInputs = document.querySelectorAll('.profile-data input, .profile-data textarea');
    const editButton = document.getElementById('edit-button');
    const changeImageButton = document.getElementById('change-image-button');
    

    const isEditing = editButton.textContent === 'Edytuj profil';
    editButton.textContent = isEditing ? 'Zapisz zmiany' : 'Edytuj profil';
    
    
    profileInputs.forEach(input => {
        input.disabled = !isEditing;
    });


    changeImageButton.style.display = isEditing ? 'inline-block' : 'none';
}




function editPost(button) {
    const offerContent =  button.closest('article') || button.closest('.content');
    const elementsToEdit = offerContent.querySelectorAll('[contenteditable="false"]');
    
    
    elementsToEdit.forEach(element => {
        element.setAttribute('contenteditable', 'true');
        element.style.border = '1px solid #ccc'; 
    });

    
    button.textContent = 'Zapisz';
    button.setAttribute('onclick', 'savePost(this)');
}


function savePost(button) {
    const offerContent = button.closest('article') || button.closest('.content');
    const elementsToEdit = offerContent.querySelectorAll('[contenteditable="true"]');
    
    
    elementsToEdit.forEach(element => {
        element.setAttribute('contenteditable', 'false');
        element.style.border = 'none'; 
    });

    
    button.textContent = 'Edytuj';
    button.setAttribute('onclick', 'editPost(this)');
}



document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.oferty ul');
  
    menuToggle.addEventListener('click', () => {
      menu.classList.toggle('active');
    });
  });




  function toggleMenu2() {
    const navbar = document.querySelector('.navbar');
    navbar.classList.toggle('active'); 
  }



