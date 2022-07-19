console.log("Let's get this party started!");

//retrieve value from the form
$('#search').click(function(e) {
  e.preventDefault();
  const gifSearch = $('#search-box').val();
  getData(gifSearch)
  $('form')[0].reset();
})

//send request to giphy API
async function getData(searchTerm) {
  const apiUrl = `http://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym`;
  const res = await axios.get(apiUrl);
  console.log(res);

  //pick a random gif from the array of gifs in the JSON object
  const randomIndex = Math.floor(Math.random() * 50);

  //create an img tag and add the gif source
  const newGif = $('<img/>').attr('src', res.data.data[randomIndex].images.original.url);

  //set the width and margin
  newGif.width('23%').css({margin: '14px', verticalAlign: 'center'});

  //save gif to the page
  newGif.appendTo('div');
}

//remove all gifs
$('#remove').on('click', function () {
  $('#gif-container').html('');
});
