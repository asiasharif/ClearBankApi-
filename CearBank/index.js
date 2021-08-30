let generate_btn = document.querySelector(".Random_btn"); // calling the button using variable

generate_btn.addEventListener("click", fetchPics); // click sound using an event listener

function fetchPics() {
    let catsImgDiv = document.querySelector(".catsImgDiv") // this is where the api will display the image 
    catsImgDiv.innerHTML = '' //make it null so images dont repeat themselves, so to refresh pics user presses button each time to retrieve new picture




    fetch('https://api.thecatapi.com/v1/images/search') // asking to fetch api 
        .then(response => response.json())
        .then((data) => {
            let catsDiv = (data[0].url)

            let catsDivEl = document.createElement("img") // pass element i created e.g image element
            //set the attribute here
            catsDivEl.setAttribute('src', `${catsDiv}`) //usually would have to specifiy the source, using a back tick to pass image - why

            let catsImgDiv = document.querySelector(".catsImgDiv") //append the new position 
            catsImgDiv.appendChild(catsDivEl) //appends the last node as the last child of a node w3schools helped

        })

        //catch error
        .catch(err => console.log(err))
}


