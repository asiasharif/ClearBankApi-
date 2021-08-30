//get the button from dom - so the button can generate grab the class & use ID for animal type and num facts & they will enable to get data

let generate_btn = document.querySelector('.generate_btn')
let animal_type = document.querySelector('#animal_type') //the data we want to get
let num_facts = document.querySelector("#num_facts")


//get data
generate_btn.addEventListener('click', function () { //check the button is working so you can run function
    let animal_value = animal_type.value.toLowerCase() //to return the data in lower case - built in method

    // max amount of facts that can be generated - parseint to convert data into number (not really needed)

    if (parseInt(num_facts.value) > 500) {
        alert(' Max is 500')
    }

    // Fetch Api using fetch function - could of used ajax displayed else where
    function fetchFacts() {

        fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=${animal_value}&amount=1`) //api url - had trouble with cors make sure cors is enabled - put 1 for amount so user can put as many facts
            // get the response and map it out
            .then(response => response.text())
            .then(data => {
                //get the data that passes
                //here i just want to return the text data 
                //created a var called fact, passes json file (data file and get the text then console.log the fact)
                let fact = JSON.parse(data).text
                console.log(fact)

                //creating the paragraph - created a element for paragraph 
                let para = document.createElement("p");
                //class list - 
                para.classList.add('list-group-item') //bootstrap class 
                para.classList.add('text-dark') //styling
                para.classList.add('p-3') // padding 3
                //node will be containing the data we fetch, we input it into the node - 'fact'
                let node = document.createTextNode(fact);
                //used append child to append the node we have created so the fact
                para.appendChild(node);

                //pass facts
                let facts = document.querySelector(".facts");
                //append the para we created
                facts.appendChild(para);
            })
            //catch the error and show in console
            .catch(err => console.log(err))
    }

    //  Create the button
    //create an element which is a button
    let btn = document.createElement("button");
    //text using inner html
    btn.innerHTML = 'Clear'
    //class list for styling
    btn.classList.add("btn")
    btn.classList.add("btn-transparent")
    btn.classList.add("clear") //to manipulate it later
    //class head - to append the btn
    let head = document.querySelector(".head");
    head.appendChild(btn);

    //creating a button. grab the button with its class above - 

    let clear_btn = document.querySelector('.clear')
    clear_btn.addEventListener('click', function () {
        let facts = document.querySelector(".facts"); //so what ever we have inside the div we clear and start over
        facts.innerHTML = '';  //to clear it out set to nothing
        clear_btn.parentNode.removeChild(clear_btn) // removes a specified child node
    })

    //created a for loop - needed it to run less than 500 times - so gives you 500 facts cause starts at 0 i = 0 then just fetch
    for (let i = 0; i < num_facts.value; i++) {
        fetchFacts()
    }

})