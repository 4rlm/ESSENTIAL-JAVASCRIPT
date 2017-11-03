// TIPS:
// 1) Add #IDs in html/css for ajax to reference.
// 2) Move forms and views into partials if AJAX is sending back.
// 3) Consider using style="display:none;" in partials.
// 4) Use ID form wrappers to bind to event.

// ** Bikes and Stations via JS
// ** Hacker news upvote via AJAX.
// ** Karaokee form wrapper.
// ** Craig's list associations, list, see profile.
// ** Be careful of associations and tables.  Ask for help if needed.



//== DISPLAY NONE ==//
// style="display: none;"

<% if profile %>
<ul class="list profile" style="display:none;">
<% else %>
<ul class="list">
<% end %>
  <li class="list-item col-1-3">
    <h2>Name</h2>
    <p><%= @horse.name %></p>
  </li>
  <li class="list-item col-1-3">
    <h2>Breed</h2>
    <p><%= @horse.breed %></p>
  </li>
  <li class="list-item col-1-3">
    <h2>Age</h2>
    <p><%= @horse.age %></p>
  </li>
</ul>
//////////////////////

// AJAX REQUIREMENTS:
1) node.js
2) npm package manager
3) live-server (or apache or any server)

// STEPS:
1) CD into folder
2) $ live-server --port 8000 (if 8080 taken, otherwise blank.)
3) loads html file in server (8080, same as node.js)

// JSON FAKER DATA
https://jsonplaceholder.typicode.com/

// event delegation (use sparingly when code will be re-loaded dynamically, to free up the bindings.  So bind to a parent, then get siblings.)
form.reset
.append() vs .replace()
.clone and .text

//////////// BRAD AJAX /////////
// $('document').ready(function(){

// A FEW WAYS TO LOAD HTML PAGES INTO ANOTHER.  LOAD IS EASIEST, BUT HAS RESTRICTIONS

  // LOADS - LOCAL, HTML PAGE INTO ANOTHER
  // $('#result').load('test.html');

  // LOADS - LOCAL, HTML PAGE INTO ANOTHER
  // $('#result').load('test.html', function(
  //   responseTxt, statusTxt, xhr){  // LOAD REPORT
  //     if(statusTxt == "success"){
  //       alert('It went fine');
  //     } else if (statusTxt == "error"){
  //       alert("Error: " + xhr.statusTxt);
  //     }
  // });


  // GET REQUEST - LOCAL, HTML PAGE INTO ANOTHER
  // $.get('test.html', function(data) {
  //   $('#result').html(data);
  // })

  // GET REQUEST - LOCAL, LOADS LOCAL JSON FILE INTO LI
  // $.getJSON('users.json', function(data) {
  //   $.each(data, function(i, user) {
  //     $('ul#users').append('<li>' + user.firstName + '</li>');
  //   })
  // })

  // GET REQUEST - AJAX, LOADS JSON API FAKER VIA AJAX INTO RESULT ID DIV.
  // $.ajax({
  //   method: 'GET',
  //   url: 'https://jsonplaceholder.typicode.com/posts', dataType: 'json'
  // }).done(function(data) {
  //   console.log(data);
  //   $.map(data, function(post, i) {
  //     $('#result').append('<h3>' + post.title + '</h3><p>' + post.body + '</p>');
  //   })
  // })

  // POST REQUEST - AJAX, SENDS FORM DATA TO LOG.
//   $('#postForm').submit(function(e){
//     e.preventDefault();
//
//     var title = $('#title').val();
//     var body = $('#body').val();
//     var url = $(this).attr('action');
//
//     $.post(url, {title:title, body:body}).
//       done(function(data){
//       console.log('Post Saved');
//       console.log(data);
//     });
//   });
// });




//==== AJAX CHECKPOINT-JK =====//
//==== JK AS =====//
//==== HACKER NEWS =====//
//==== LUCKY AJAX =====//
//== HORSES - CHECKPOINT - JK ===//



//==== AJAX CHECKPOINT-JK =====//
$(document).ready(function() {

  $("form.flex.flex-column").on("submit",function(event){
    event.preventDefault();
    form = $(this);
    if ($("form#new-horse-form").length > 0)  {
      form.hide();
      $("form#new-horse-form").show()
    } else{
      let call_ajax = $.ajax({
        url: form.attr("action"),
        type: form.attr("method")
      });
      call_ajax.done(function(response){
        form.hide();
        $("div.container.flex.flex-column").append(response);
      });
      }
  })

  $("div.container.flex.flex-column").on("submit","form#new-horse-form",function(event){
    event.preventDefault();
    form = $(this)
    let call_ajax = $.ajax({
      url: form.attr("action"),
      type: form.attr("method"),
      data: form.serialize()
    });
    call_ajax.done(function(response){
      $(".list").append(response);
      $("form.flex.flex-column").show();
      form.trigger("reset")
      form.hide();
    });
  })

  $(".list").on("click",".big.fancy-text.light-link",function(event){
    event.preventDefault();
    let link = $(this);
    if ( link.data('requestRunning') ) {
        return;
    }
    if ( link.parent().children().length > 1) {
      if (link.siblings().is(":visible")){
        link.siblings().slideUp();
      } else {
        link.siblings().slideDown();
      }
    } else {
      link.data('requestRunning', true);
      let call_ajax = $.ajax({
        url: link.attr("href"),
        type: "GET"
      });
      call_ajax.done(function(response){
        link.parent().append(response).children().last().slideDown();
        link.data('requestRunning', false);
      });
    }
  });
});

//==== AJB-JK AS =====//
$(document).ready(function() {

  // ### Release 0: Update Writing a New Post
  $("section#sidebar").on("submit", "form#new-post-form", function(e){
    e.preventDefault();
    var form = $(this)

    $.ajax({
      url: form.attr("action"), // action="/posts"
      type: form.attr("method"), // method="post"
      data: form.serialize()
    })
    .done(function(response){
      $("ul#post-list").prepend(response)
      form.trigger("reset")
      form.find("input").first().attr("placeholder","")
      form.find("textarea").attr("placeholder", "")
      console.log('Form Submission Success. Data Saved') // for testing
    })
    .fail(function(jqXHR, textStatus, errorThrown){
      errors = jqXHR.responseText.split(".")
      form.find("input").first().attr("placeholder",errors[1])
      form.find("textarea").attr("placeholder", errors[0])
      console.log('Submission Failed.  Invalid Data.') // for testing
    })
    .always(function() {
      console.log("Successfully reached server.")
    })
  });

  // ### Release 1: Update Liking a Post
  // "ul#post-list" is on posts/index.erb, which iterates through all posts and for each, renders _post.erb as li, which renders _post_like_form.erb as a button, which is being bound to the initial event below, preventing it from being clicked, and replacing its action with sending xmh 'like' count to server to increase the total likes.
  $('ul#post-list').on('submit', 'form.form.new-post-like-form', function(e){
    e.preventDefault()
    var form = $(this)
    var post = form.parent();

    $.ajax({
      method: "put",
      url: form.attr("action") // /posts/<%= post.id %>/like
    })
    .done(function(response){
      post.find("span#like_count").html(response + " likes");
      console.log("Successfully increased like count.");
    })
    .fail(function() {
      console.log("Failed to increase like count.");
    })
    .always(function() {
      console.log("Successfully reached server.");
    })
  });

});


//==== HACKER NEWS =====//
$(document).ready(function() {

  // UP VOTE
  $('.post-container').on('click', '.upvote-button', function(e) {
    e.preventDefault()
    var button = $(this)
    var form = $(this).closest('form')
    button.css('color', '#42f4bc')

    $.ajax({
      method: form.attr('method'),
      url: form.attr('action'),
      // dataType: 'json',
    })
    .done(function(vote_count) {
      var post_id = button.closest("article").find('.points')
      $(post_id).html(vote_count.count)
      console.log('Successfully Updated Vote Count')
    })
    .fail(function() {
      console.log('fail') // for testing
    })
    .always(function() {
      console.log("wow!  so smooth!")
      button.css('color', '#8C8C8C')
    })
  })


  // DELETE
  $('.post-container').on('click', ".delete", function(e) {
    e.preventDefault()
    var a_tag = $(this)

    $.ajax({
      url: a_tag.attr('href'),
      type: 'delete',
    })
    .done(function(response) {
      var article = a_tag.closest("article")
      $(article).remove()
      console.log('Successfully Deleted from Article')
    })
    .fail(function() {
      $('.post-container').append('Invalid Input.  Try again.')
      console.log('fail input error') // for testing
    })
    .always(function() {
      console.log("wow!  so smooth!")
    })
  })


  // CREATE NEW POSTS
  $('form#posts').submit(function(e) {
    e.preventDefault()
    var form = $(this)
    console.log(form)

    $.ajax({
      method: form.attr('method'),
      url: form.attr('action'),
      data: form.serialize()
    })
    .done(function(response) {
      $('.post-container').append(response)
      console.log('Success!') // for testing
    })
    .fail(function() {
      $('.post-container').append('Invalid Input.  Try again.')
      console.log('fail input error') // for testing
    })
    .always(function() {
      console.log("wow!  so smooth!")
    })
  })
});

//==== LUCKY AJAX =====//
$(document).ready(function () {

  $('form').submit(function(e) {
    e.preventDefault();
    var form = $(this)
    var data = form.serialize()

    $.ajax({
      method: form.attr('method'), // FORM POST
      data: data, // sides=6
      url: form.attr('action'), // rolls
      // dataType: 'json',
    })
    .done(function(response) {
      var rollResult = `<div class="die"><span class="roll">${response}</span></div>`
      $('#die-container').html(rollResult)
    })
    .fail(function(){
      alert('Fail!!');
    })
    .always(function() {
      alert('Big Money!');
      // console.log("ahhh...yeah!")
    })

  })
  // PSEUDO-CODE:
  //   1- intercept the form submission event using jQuery
  //   2- prevent the default action for that event from happening
  //   3- use jQuery to submit an AJAX post to the form's action
  //   4- when the AJAX post is done, display the new die roll using jQuery
});



//== HORSES - CHECKPOINT - JK ===//
$(document).ready(function() {

  // Click Event to append new-horse-form at bottom of home page.
  $("form.flex.flex-column").on("submit",function(e){
    e.preventDefault();
    let form = $(this);
    $.ajax({
      url: form.attr("action"), // action="/horses/new"
      type: form.attr("method") // method="GET"
    })
    .done(function(response){
      form.hide();
      $("div.container.flex.flex-column").parent().append(response);
      console.log('Successfully loaded form#new-horse-form')
    })
    .fail(function() {
    console.log('Failed to load form#new-horse-form') // for testing
    })
    .always(function() {
    console.log("Successfully reached server")
    })
  });


  // click event for submitting for a new horse
  $('div.container.flex.flex-column').on('submit', "form#new-horse-form", function(e) {
    e.preventDefault();
    let form = $(this)

    $.ajax({
      url: form.attr("action"), // action="/horses"
      type: form.attr("method"), // method="post"
      data: form.serialize()
    })
    .done(function(response){
      $(".list").append(response);
      $("form.flex.flex-column").show();
      form.trigger("reset")
      form.hide();
    })
  })


  // click event on horse link to show info
  $(".list").on("click",".big.fancy-text.light-link",function(e){
    e.preventDefault();
    let link = $(this);
    if ( link.data('requestRunning') ) {
        return;
    }
    if ( link.parent().children().length > 1) {
      if (link.siblings().is(":visible")){
        link.siblings().slideUp();
      } else {
        link.siblings().slideDown();
      }
    } else {
      link.data('requestRunning', true);
      $.ajax({
        url: link.attr("href"),
        type: "GET"
      });
      .done(function(response){
        link.parent().append(response).children().last().slideDown();
        link.data('requestRunning', false);
      });
    }
  });

});
