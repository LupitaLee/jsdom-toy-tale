let addToy = false;

const toyCollect = document.querySelector('#toy-collection')
// const card = 


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


  getToys()

});

function getToys(){
  return fetch('http://localhost:3000/toys')
  .then(resp => resp.json())
  .then(json => console.log(json))
}

function postToys(){
  return fetch('http://localhost:3000/toys',{
    method: "POST",
    headers: {
    "Content-Type": "application/json",
    "Accept": "application/json"
    },
    body: JSON.stringify()
  })
}