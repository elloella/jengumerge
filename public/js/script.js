
//Setting up the chat box. Sourced from - https://www.skptricks.com/2018/02/facebook-style-chat-box-popup-layout-design.html
$('.GPCHAT').click(function(){
  $('.chat').show();
  return false;
});

$('.msg_head').click(function(){ //Setting transition for the chatbox
  var chatbox
  $('.msg_wrap').slideToggle('slow');
  return false;
});

$('.exit').click(function(){ //Setting the exit button for chat box
  $('.chat').hide();
  return false;
});

$('textarea').keypress( //Setting the text area to send message on press of enter key
  function(e){
    if (e.keyCode == 13) {
      var msg = $(this).val();
      $(this).val('');
      if(msg.trim().length != 0){
        var chatbox = $(this).parents().parents().parents().attr("rel") ;
        $('<div class="msg-right">'+msg+'</div>').insertBefore('[rel="'+chatbox+'"] .msg_push');
        $('.msg_body').scrollTop($('.msg_body')[0].scrollHeight);
      }
      var question = document.getElementById('msg-footer'); //Stting up the automatic response
      document.getElementById('msg').style.display="block";
      document.getElementById('msg').style.opacity="1";
    }
  });

  $(document).ready(function(){
    var date_input=$('input[name="date"]'); //our date input has the name "date"
    var container=$('.modal-body form').length>0 ? $('.modal-body form').parent() : "body";
    var options={
      format: 'mm/dd/yyyy',
      container: container,
      todayHighlight: true,
      autoclose: true,
    };
    date_input.datepicker(options);
  })

  window.onload = function() { //Setting up copyright
    currentYear();
  };
  function currentYear(){
    const date = new Date();
    const autoDate = document.querySelector('#autoDate');
    autoDate.textContent = date.getFullYear();
  };
