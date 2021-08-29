//refrence of form + submit and callback function which executes e.prevent

$("#form").submit(function (e) { //get the form
    e.preventDefault()

    let query = $("#search").val() //get the query which the user has entered - provide id 'search' use .val to get value

    let result = '' //declare result variable - to null to then add result at the bottom with the html code

    let API_KEY = '7568fee28d6fc762ad465c4ddd332299' //declare variable implement api key


    let url = 'http://api.serpstack.com/search?access_key=' + API_KEY + '&type=web&query=' + query
    console.log(url) //simple way to make request to the api + console.log the url


    //pass the url using callback function which holds the data and we console.log the data so if it is correct + if not - (initially used console and inspect to see it was working with access key)
    $.get(url, function (data) {
        //when making a new request, clear out previous content via null
        $("#result").html('')

        console.log(data)

        //from inspect you can see the results generated, we will need to display the organic results
        //a for each loop allows it to loop through the data and display results


        data.organic_results.forEach(res => { //response 
            //each element has a url title and a displayed url and a snippet, therefore declare the variable result 
            //used back tick to write the html code 
            //target blank - attached an attribute to the anchor tag to open the tab in a new window 
            //e.g res.title displaying title in url 
            //snippet is still displayed under the heading

            result = `
            
            <h1>${res.title}</h1><br><a target=" _blank" href="${res.url}">${res.url}</a>
            <p>${res.snippet}</p>

            `

            //add result to dom element and use append method to pass the result - target id result in html
            $("#result").append(result)

        });
    })

})

//when i was learning to become a software engineer - important to document code well so who ever reads the code can understand
//that is why i have well documented it
//appreciate well documented code
//made it habit and makes it accessible to others engineers viewing my code
