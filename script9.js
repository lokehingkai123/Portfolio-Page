const API_KEY = '7FOspydhrEiPPgGFlCrzqW6mAcZhk66L9bKL6pY7F4NqBew6Aw';

let button_div = document.getElementById('buttons')
let gallery_div = document.getElementById('gallery')


let score = 0
let words = ['fish','house','boat','beach','cat','zebra','bottle','shell']
let correct_answer = ''

let score_div = document.getElementById("score")

words.forEach(function(word) {
    let new_button = document.createElement('button')
    new_button.innerHTML = word
    new_button.classList.add('btn','btn-info','mx-2')
    //new_button.classList.add('btn-primary')

    new_button.onclick = function(){
        if (word == correct_answer) {
            score++
            score_div.innerHTML = score
            generate()
        }   else{
            alert("WRONG!")
        }
    }

    button_div.append(new_button)
})
    function generate () {
        gallery_div.innerHTML = null
        let random_number= Math.floor(Math.random() * words.length)
        correct_answer = words[random_number]


    fetch(`https://api.tumblr.com/v2/tagged?tag=gif&api_key=${API_KEY}&tag=${correct_answer}&limit=50`)
    .then(function(response) {
      return response.json(); // convert the raw response into a JSON
    })
    
    .then(function(result){
      //console.log(result.response)
      result.response.forEach(function(post){
          if(post.type == 'photo'){
            //console.log(post.photos[0].original_size.url)
            const pic = document.createElement('img')
            pic.src = post.photos[0].original_size.url
            pic.height = 200
            gallery_div.appendChild(pic)
          }
      })
    })
}
    generate()
    