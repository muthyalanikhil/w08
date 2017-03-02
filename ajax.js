(function ($) {

  $('#btnLoadText').click(function () { $("#showResult").load("show.txt"); });
  $('#btnAjax').click(function () { callRestAPI() });

  // Perform an asynchronous HTTP (Ajax) API request.
  function callRestAPI() {
    var root = 'https://jsonplaceholder.typicode.com';
    var  randomNum = Math.floor(Math.random() * 100);
    $.ajax({
      
      url: root + '/posts/' + randomNum,
      method: 'GET'
    }).then(function (response) {
      console.log(response);
      $('#showResult').html(response.body);
       $('#rand').html("Random number used: " +  randomNum);
    });
  }
})(jQuery);