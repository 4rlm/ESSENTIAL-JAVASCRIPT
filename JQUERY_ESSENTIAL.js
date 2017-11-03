////////// BRAD JQUERY ////////
// jQuery Selectors
// jQuery Event Methods
// jQuery Effect Methods
// jQuery HTML / CSS Methods
// jQuery Traversing Methods
// jQuery AJAX Methods
// jQuery Misc Methods
// jQuery Properties

$('document').ready(function(){

  // JQUERY CLASS/ID SELECTORS
  $('h1').hide(); // hides all h1s
  $('h1#heading1').hide(); // just hides the h1 with id heading1
  $('.heading2').hide();  // hides the class heading2
  $('p span').css('color', 'red'); // spans inside p red.
  $('ul#list li:first').css('color', 'red'); // first li red.
  $('ul#list li:last').css('color', 'blue'); // last li blue.
  $('ul#list li:even').css('background', 'yellow'); // even li yellow bg.
  $('ul#list li:odd').css('background', 'gray'); // even li gray bg.
  $('ul#list li:nth-child(3n)').css('list-style', 'none'); // every third no bullets.

  // JQUERY TYPE SELECTORS
  $(':button').hide(); // hides all the buttons
  $(':text').hide(); // hides the text box.

  // JQUERY ATTRIBUTE SELECTORS
  $('[href]').css('color', 'red'); // href links red.
  $('a[href="http://www.yahoo.com"]').css('color', 'blue'); // yahoo href link blue.
  $('*').hide(); // wildcard - targets entire content!

  // JQUERY MOUSE EVENTS
  $('#btn1').click(function(){
    alert('Button Clicked!'); // same as below via on/click method.
  });

  // $('#btn1').on('click', function(){
  //   alert('Button Clicked!'); // same as above via click.
  // });

  $('#btn1').click(function(){
    $('.para2').hide();
  });

  $('#btn2').click(function(){
    $('.para2').show();
  });

  $('#btn3').click(function(){
    $('.para2').toggle();
  });

  $('#btn4').dblclick(function(){
    $('.para2').toggle();
  });

  // $('#btn5').on('mouseenter', function(){
  //   $('.para2').toggle();  // same as hover below
  // });

  // $('#btn5').on('mouseleave', function(){
  //   $('.para2').toggle(); // same as hover below
  // });

  $('#btn5').hover(function(){
    $('.para2').toggle();
  });

  $('#btn6').mousemove(function(){
    $('.para2').toggle();
  });

  $('#btn7').on('mousedown', function(){
    $('.para2').toggle();
  });

  $('#btn7').on('mouseup', function(){
    $('.para2').toggle();
  });

  $('#btn8').click(function(e){
    console.log(e); // send event to console, in chrome.
  });

  $('#btn9').click(function(e){
    alert(e.currentTarget.id); // alerts event id.
    alert(e.currentTarget.innerHTML); // alerts event id.
    alert(e.currentTarget.outerHTML); // alerts event id.
    alert(e.currentTarget.idName); // alerts event id.
  });

  $('#btn10').on('mousemove', function(e){
    console.log('Coords: Y: ' + e.clientY + 'X: '+ e.clientX);
  });

  // $(document).on('mousemove', function(e){  // keeps adding to bottom.
  //   $('#coords').append('Coords: Y: ' + e.clientY + 'X: '+ e.clientX);
  // });

  $(document).on('mousemove', function(e){ // updates it, only one at a time.
    $('#coords').html('Coords: Y: ' + e.clientY + ', X: '+ e.clientX);
  });

  // FORM FIELDS

  $('input').focus(function() { // changes color of form input
    $(this).css('background', 'yellow');
  })

  $('input').blur(function() { // returns color to white on form input.
    $(this).css('background', 'white');
  })

  $('input').keyup(function (e) { // passes in form typed value to log.
    console.log(e.target.value);
  })

  $('select#gender').change(function (e) { // alerts value of select.
    alert(e.target.value);
  })

  $('#form').submit(function(e) { // passes form name to log.
    e.preventDefault();
    var name = $('input#name').val();
    console.log(name);
  })


  // DOM MANIPULATION

  $('p.para_a').css({color: 'red', background: '#ccc'});
  // $('p.para_b').addClass('myClass'); // adds class
  // $('p.para_b').removeClass('myClass'); // removes class

  $('#btn_a').click(function () {
    $('p.para_b').toggleClass('myClass'); // toggles class.
  })

  // $('#myDiv').text('Hello World'); // adds text to empty div.
  // $('#myDiv').html('<h3>Hello World</h3>'); // adds h3 to empty div.
  // alert($('myDiv').text()); // adds li with alert, then removes.
  // $('ul').append('<li>Append LI Item</li>') // APPEND LI
  // $('ul').prepend('<li>Prepend LI Item</li>') // PREPEND LI
  // $('.para_a').appendTo('.para_b'); // APPEND P
  // $('.para_a').prependTo('.para_b'); // PREPEND P
  // $('ul').before('<h4>Hello</h4>') // ADD STRING BEFORE UL
  // $('ul').after('<h4>World</h4>') // ADD STRING AFTER UL
  // $('ul').empty(); // EMPTY UL
  // $('ul').detach(); // EMPTY UL
  // $('a').attr('target', '_blank'); // OPEN URL NEW WINDOW
  // alert($('a').attr('href')); // ALERT URL
  // $('a').removeAttr('target'); REMOVE A ATTR
  // $('p').wrap('<h1>') // WRAP
  // $('p').wrapAll('<h1>') // WRAP ALL
  $('#newItem').keyup(function(e){ // INPUT TO BOTTOM OF UL LI
    var code = e.which;
    if(code == 13){ // 13 is code for 'enter'
      e.preventDefault();
      $('ul').append('<li>' +e.target.value +'</li>');
    }
  });

  var myArr = ['Brad', 'Kelley', 'Nate', 'Jose'];
  $.each(myArr, function(i, val) { // ARRAY TO HTML UL LI
    $('#users').append('<li>' + val + '</li>');
  });

  var newArr = $('ul#list li').toArray();
  $.each(newArr, function(i, val) { // LOG LI ITEMS
    console.log(val.innerHTML);
  });

  // EFFECTS AND ANIMATION

  $('#btnFadeOut').click(function() { // FADE OUT
    $('#box').fadeOut(2000, function(){ // callback function
      $('#btnFadeOut').text('It\'s Gone');
    });
  });

  $('#btnFadeIn').click(function() { // FADE IN
    $('#box').fadeIn(2000);
  });

  $('#btnFadeTog').click(function() { // TOGGLE FADE
    $('#box').fadeToggle(1000);
  });

  $('#btnSlideUp').click(function() { // SLIDE UP
    $('#box').slideUp(2000);
  });

  $('#btnSlideDown').click(function() { // SLIDE DOWN
    $('#box').slideDown(2000);
  });

  $('#btnSlideTog').click(function() { // TOGGLE SLIDE
    $('#box').slideToggle(2000);
  });

  $('#btnStop').click(function() { // STOP SLIDE
    $('#box').stop();
  });

  $('#moveRight').click(function() { // SLIDE RIGHT
    $('#box2').animate({
      left: 500,
      height: '300px',
      width: '300px',
      opacity: '0.5'
    });
  });

  $('#moveLeft').click(function() { // SLIDE LEFT
    $('#box2').animate({
      left: 0,
      height: '100px',
      width: '100px',
      opacity: '1'
    });
  });

  $('#moveAround').click(function() {
    var box = $('#box2');
    box.animate({
      "border-radius": "50%",
      left: 300
    });
    box.animate({
      top: 300
    });
    box.animate({
      left: 0,
      top: 300
    });
    box.animate({
      "border-radius": "0%",
      left: 0,
      top: 0
    });
  })

  // $('#target').animate({
  //   "border-radius": "50%"
  // }, 500);


  ////// DBC ///////

  // GET VALUES FROM MULTIPLE INPUT FIELDS ON FORM
  // Shorthand for document ready
  $(function(){
    // your code goes here.
    $("#style_editor").submit(function(event){
      event.preventDefault();
       selector = $('input[name="selector"]').val();
       property = $('input[name="property"]').val();
       value = $('input[name="value"]').val();
       $(selector).css(property,value);
    });

  });


  // CREATE TABS / LIKE BOOTSTRAP WELLS
  // $(".tabs a").click(function(e){
  //   e.preventDefault()
  //   $(this).parent().siblings().removeClass("active");
  //   $(this).parent().addClass("active");
  //   tabClass = $(this).attr("href");
  //   $(".container").find("div").addClass("tab-content");
  //   $(".container").find(tabClass).removeClass("tab-content");
  // });

  // HIDE BUTTON AFTER CLICKING, THEN SHOW FORM UNDER IT
  // $('#new_comment_button').on('click', function(e) {
  //   e.preventDefault();
  //   $(this).hide()
  //   $('#new_comment_form').show()
  // })

  // DELETE BUTTON
  // $('#comment_list').on('click', '.delete-button', function(e) {
  //   e.preventDefault();
  //   $(this).parent().parent().remove();
  // })
// });
