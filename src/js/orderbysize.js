document.querySelector('#zoom')
.addEventListener('mousemove', function(e){
    var zoomer = e.currentTarget;
    e.offsetX ? offsetX = e.offsetX : offsetX = e.touches[0].pageX
    e.offsetY ? offsetY = e.offsetY : offsetX = e.touches[0].pageX
    x = offsetX/zoomer.offsetWidth*100
    y = offsetY/zoomer.offsetHeight*100
    zoomer.style.backgroundPosition = x + '% ' + y + '%';
})

let zoomimages = document.querySelectorAll('#Main .images .image img');
let zoomimg1 = document.querySelector('#Main #zoom');
let zoomimg2 = document.querySelector('#Main #zoom img');

zoomimages.forEach(item => {
  item.addEventListener('click', function() {
    // let style = zoomimg1.currentStyle || window.getComputedStyle(zoomimg1, false);
    // let bi = style.backgroundImage.slice(4, -1).replace(/"/g, "");
    zoomimg1.style.backgroundImage = `url("${item.src}")`;
    zoomimg2.setAttribute('src', item.src);
  })
})

document.querySelectorAll(".drop-zone__input").forEach((inputElement) => {
    const dropZoneElement = inputElement.closest(".drop-zone");
  
    dropZoneElement.addEventListener("click", (e) => {
      inputElement.click();
    });
  
    inputElement.addEventListener("change", (e) => {
      if (inputElement.files.length) {
        updateThumbnail(dropZoneElement, inputElement.files[0]);
      }
    });
  
    dropZoneElement.addEventListener("dragover", (e) => {
      e.preventDefault();
      dropZoneElement.classList.add("drop-zone--over");
    });
  
    ["dragleave", "dragend"].forEach((type) => {
      dropZoneElement.addEventListener(type, (e) => {
        dropZoneElement.classList.remove("drop-zone--over");
      });
    });
  
    dropZoneElement.addEventListener("drop", (e) => {
      e.preventDefault();
  
      if (e.dataTransfer.files.length) {
        inputElement.files = e.dataTransfer.files;
        updateThumbnail(dropZoneElement, e.dataTransfer.files[0]);
      }
  
      dropZoneElement.classList.remove("drop-zone--over");
    });
  });
  
  /**
   * Updates the thumbnail on a drop zone element.
   *
   * @param {HTMLElement} dropZoneElement
   * @param {File} file
   */
  function updateThumbnail(dropZoneElement, file) {
    let thumbnailElement = dropZoneElement.querySelector(".drop-zone__thumb");
  
    // First time - remove the prompt
    if (dropZoneElement.querySelector(".drop-zone__prompt")) {
      dropZoneElement.querySelector(".drop-zone__prompt").remove();
    }
  
    // First time - there is no thumbnail element, so lets create it
    if (!thumbnailElement) {
      thumbnailElement = document.createElement("div");
      thumbnailElement.classList.add("drop-zone__thumb");
      dropZoneElement.appendChild(thumbnailElement);
    }
  
    thumbnailElement.dataset.label = file.name;
  
    // Show thumbnail for image files
    if (file.type.startsWith("image/")) {
      const reader = new FileReader();
  
      reader.readAsDataURL(file);
      reader.onload = () => {
        thumbnailElement.style.backgroundImage = `url('${reader.result}')`;
      };
    } else {
      thumbnailElement.style.backgroundImage = null;
    }
  }


let dropitems = document.querySelectorAll(".dropitem");
let dropitemsubs = document.querySelectorAll(".dropitem-sub");

dropitems.forEach(dropitem => {
    let loc = dropitem.querySelector('.name-div');
    let locIsClicked = false

    let nextElement = dropitem.nextElementSibling;
    nextElement.style.height = 0 + 'px';
    // nextElement.style.height = (nextElement.scrollHeight + 1) + 'px';
    if (nextElement.scrollHeight > 230) {
        if (nextElement.classList.contains('noscrollbar')) {
            nextElement.classList.remove('noscrollbar')
        }
    }else{
        if (!nextElement.classList.contains('noscrollbar')) {
            nextElement.classList.add('noscrollbar')
        }
    }

    loc.addEventListener('click', function(e){
        e.preventDefault();
        nextElement.classList.toggle('active');
        let hght = nextElement.scrollHeight;
        if (nextElement.classList.contains('active')){
            nextElement.style.height = (hght + 1) + 'px';
        }else{
            nextElement.style.height = 0 + 'px';
        }
    })
})

let modal = document.querySelector("#Modal");

document.querySelector("#modal-close-btn").addEventListener("click", function() {
  modal.style.display = "none"
})

document.querySelector(".tutorial").addEventListener("click", function() {
  modal.style.display = "flex"
})

// let loc = document.querySelector('.loc .name-div');
// let locIsClicked = false

// document.querySelector('#loc-sub').style.height = (document.querySelector('#loc-sub').scrollHeight + 1) + 'px';
// if (document.querySelector('#loc-sub').scrollHeight > 230) {
//     if (document.querySelector('#loc-sub').classList.contains('noscrollbar')) {
//         document.querySelector('#loc-sub').classList.remove('noscrollbar')
//     }
// }else{
//     if (!document.querySelector('#loc-sub').classList.contains('noscrollbar')) {
//         document.querySelector('#loc-sub').classList.add('noscrollbar')
//     }
// }

// loc.addEventListener('mousedown', function(e){
//     e.preventDefault();
//     let subloc = document.querySelector('#loc-sub');
//     subloc.classList.toggle('active');
//     let hght = subloc.scrollHeight;
//     if (subloc.classList.contains('active')){
//         subloc.style.height = (hght + 1) + 'px';
//     }else{
//         subloc.style.height = 0 + 'px';
//     }
// })

// let category = document.querySelector('.category .name-div');
// let categoryIsClicked = false

// document.querySelector('#category-sub').style.height = (document.querySelector('#category-sub').scrollHeight + 1) + 'px';
// if (document.querySelector('#category-sub').scrollHeight > 230) {
//     if (document.querySelector('#category-sub').classList.contains('noscrollbar')) {
//         document.querySelector('#category-sub').classList.remove('noscrollbar')
//     }
// }else{
//     if (!document.querySelector('#category-sub').classList.contains('noscrollbar')) {
//         document.querySelector('#category-sub').classList.add('noscrollbar')
//     }
// }

// category.addEventListener('mousedown', function(e){
//     e.preventDefault();
//     let subcategory = document.querySelector('#category-sub');
//     subcategory.classList.toggle('active');
//     let hght = subcategory.scrollHeight;
//     if (subcategory.classList.contains('active')){
//         subcategory.style.height = (hght + 1) + 'px';
//     }else{
//         subcategory.style.height = 0 + 'px';
//     }
// })