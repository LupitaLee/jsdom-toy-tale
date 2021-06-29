let addToy = false;

const divCollect = document.querySelector('#toy-collection')


  
document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });

});

function getToys(){
  return fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  
  
  
}
function postToys(toys){
  return fetch('http://localhost:3000/toys', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
    "Accept": "application/json"
  }, 
  body: JSON.stringify({
    name: toys.name.value,
    image: toys.image.value,
    likes: toys.likes.value
  })
  .then(resp => resp.json())
  .then((toy) => {
    renderToys(toy)
  })
})};


// function likes(e) {
//   e.preventDefault()
//   let more = parseInt(e.target.previousElementChild.innerText) + 1
//   fetch(`http://localhost:3000/toys/${e.target.id}`, {
//       method: "PATCH",
//       headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json"

//       },
//       body: JSON.stringify({
//         "likes": more
//       })
//     })
//     .then(res => res.json())
//     .then((toy => {
//       e.target.previousElementSibling.innerText = `${more} likes`;
//     }))
// }



function renderToys(toy) {
  let h2 = document.createElement('h2')
  h2.innerText = toy.name

  let img = document.createElement('img')
  img.setAttribute('src', toy.image)
  img.setAttribute('class', 'toy-avatar')

  let p = document.createElement('p')
  p.innerText = `${toy.likes} likes`

  let btn = document.createElement('button')
  btn.setAttribute('class', 'like-btn')
  btn.setAttribute('id', toy.id)
  btn.innerText = "like"
  btn.addEventListener('click', (e) => {
    console.log(e.target.dataset);
    likes(e)
  })

  let divCard = document.createElement('div')
  divCard.setAttribute('class', 'card')
  divCard.append(h2, img, p, btn)
  divCollect.append(divCard)
}

// start by getting all toys

getToys().then(toys => {
  toys.forEach(toy => {
    //function to render toys goes here or something
    renderToys(toy)
  })
})