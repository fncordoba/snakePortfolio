const DATA = {
    images: [
      {"url": "https://images.unsplash.com/photo-1611178206724-76cce39da1d7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=926&q=80"},
      {"url": "https://images.unsplash.com/photo-1611415483576-b1d5a9d8bc5e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=401&q=80"},
      {"url": "https://images.unsplash.com/photo-1611401138000-237b6d8d746d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
      {"url": "https://images.unsplash.com/photo-1611418371637-cbef42051463?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
      {"url": "https://images.unsplash.com/photo-1611416274901-faef46b63128?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=799&q=80"},
      {"url": "https://images.unsplash.com/photo-1611417362063-32c5b14035fc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},
      {"url": "https://images.unsplash.com/photo-1611336291050-b39ff09d531b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"},
      {"url": "https://images.unsplash.com/photo-1611360022966-018bd7eba328?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"},
      {"url": "https://images.unsplash.com/photo-1611387696625-ea2c48101a44?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80"}
    ]
  };
  const $photos = document.querySelector('#photos');
   
  function mapImagesToFragment(images) {
      const fragment = document.createDocumentFragment();
    images
        .map(image => image.url)
      .reduce((frag, imageUrl) => {
          const imageEl = document.createElement('img');
        imageEl.src = imageUrl;
        imageEl.width = 100;
        imageEl.height = 100;
          frag.appendChild(imageEl);
        return frag;
      }, fragment);
    return fragment;
  }
   
  const imagesFragment = mapImagesToFragment(DATA.images);
  $photos.appendChild(imagesFragment);

  function validateRadio() {
      const type = document.getElementsByName("type");
      const grid = document.getElementsByClassName("photo")
      if(type[0].checked) { 
        grid.classList.replace("list", "photo");
      } else {
        grid.classList.replace("photo", "list");
      }
    };