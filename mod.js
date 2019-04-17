$('li h2[data-type="vitamin"]').css('background', '#434dd1');
$('li h2[data-type="mineralwater"]').css('background', '#c1d143');
$('li h2[data-type="proteinbar"]').css('background', '#43d1be');


$("li").css("cursor","pointer");

$(document).ready(function() {
    $('#main-nav li a').click(function(e) {
        
        var targetHref = $(this).attr('href');
        
      $('html, body').animate({
          scrollTop: $(targetHref).offset().top
      }, 1000);
      
      e.preventDefault();
    });
  });

 
  var x = $('#history').clone().prop({'id' : 'history-clone'});
    $('#history').after(x)
    /*x[0].innerText = 'suarez'* JS version and jQuery version is below*/

    $(x).text('my name is real slim shadyLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elementum integer enim neque volutpat ac tincidunt vitae semper quis. Sem nulla pharetra diam sit amet nisl. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum sociis. Proin fermentum leo vel orci porta. Massa vitae tortor condimentum lacinia quis vel. Amet purus gravida quis blandit. Pretium vulputate sapien nec sagittis. Non odio euismod lacinia at quis risus. Consectetur lorem donec massa sapien faucibus. Orci a scelerisque purus semper eget. Aliquet enim tortor at auctor urna nunc id cursus metus. Turpis tincidunt id aliquet risus. At consectetur lorem donec massa sapien faucibus et molestie ac. Adipiscing commodo elit at imperdiet dui accumsan sit. Imperdiet sed euismod nisi porta lorem mollis. Amet risus nullam eget felis. Consectetur libero id faucibus nisl. Quam vulputate dignissim suspendisse in est ante in nibh mauris. Nisl condimentum id venenatis a condimentum vitae sapien pellentesque.    Diam quam nulla porttitor massa id. Tellus cras adipiscing enim eu turpis egestas pretium aenean pharetra. At augue eget arcu dictum varius duis at consectetur lorem. Adipiscing bibendum est ultricies integer quis auctor elit sed vulputate. Maecenas pharetra convallis posuere morbi leo urna molestie. Diam quis enim lobortis scelerisque fermentum dui. Arcu cursus vitae congue mauris. Phasellus vestibulum lorem sed risus. Sit amet venenatis urna cursus eget nunc scelerisque viverra mauris. Tortor at risus viverra adipiscing at in tellus. Enim facilisis gravida neque convallis a cras semper auctor. Convallis convallis tellus id interdum velit laoreet. Morbi blandit cursus risus at. Facilisi etiam dignissim diam quis enim.')

    $(x).css('background', '#9e9e9e');

    var ul = document.querySelector('.navbar');
    var li = document.createElement('li');
    var anchor = document.createElement('a');
    anchor.setAttribute('href','#history-clone');
    anchor.textContent = 'history-clone';

    li.appendChild(anchor);

    ul.appendChild(li);