function sponsors() {
	slidesponsor();
	var fadeTime=500;
	function slidesponsor() {
		var img=$('#sponsorslideshow img');
		img.filter('.active').css({opacity:1});
		img.not('.active').css({opacity:0});
		function loop() {
			var active=img.filter('.active')
			var next=active.next().length?active.next():img.filter(':first');
			active.stop();
			active.animate({opacity:0},fadeTime,function() {
				active.removeClass('active');
				next.addClass('active');
				next.animate({opacity:1},fadeTime);
			});
		}
		setInterval(loop,1500);
	}
	$("#sponsorslideshow").click(function() {
	var $active = $('#sponsorslideshow').find('.active');
	switch($active.attr("id")) {
	        case 's0':link="http://www.infopark.in/";
				break;
		case 's1':link="http://www.ksidc.org/";
				break;
		case 's3':link="http://www.factset.com/";
				break;
				case 's4':link="http://www.ebay.in/";
				break;
		

		
	}
	window.open(link,'target="_blank"');
});
}
function dayNight()
{
var hr = (new Date()).getHours();

if(hr>=6&&hr<=10)    //morning    
{
	$("#ban6").css("background-color",'#d9f2fa'); 
    $("#model").css("color",'#000'); 
	$("#col_logo").attr("src", 'evening/col_logo.png');
	$("#ieee_logo").attr("src", 'evening/ieee.png');
    $("#sky_dark_3").attr("src", 'morning/sky_3.png');
    $("#sky_dark_2").attr("src", 'morning/sky_2.png');
    $("#sky_dark").attr("src", 'morning/sky_1.png');
	$('#coll_build').css('background-image','url(morning/college_Morning.png)');
    $("body").css("background-color",'#d9f2fa'); 
    $('#stars').addClass('nill_class');
    $('#sate').addClass('nill_class');
    $('#ufo').addClass('nill_class');
	$('#ufolight').addClass('nill_class');
    $('#met').addClass('nill_class');
	$('#HABalloon').attr("src", 'morning/hab.png');
	$('#pap_logo').attr("src", 'logo_pa_1.png');
}
else if(hr>10&&hr<=16)       //noon     
{
	$("#ban6").css("background-color",'#d9f5fe'); 
    $("#model").css("color",'#000'); 
	$("#col_logo").attr("src", 'evening/col_logo.png');
	$("#ieee_logo").attr("src", 'evening/ieee.png');
    $("#sky_dark_3").attr("src", 'noon/sky_3.png');
    $("#sky_dark_2").attr("src", 'noon/sky_2.png');
    $("#sky_dark").attr("src", 'noon/sky_1.png');
	$('#coll_build').css('background-image','url(noon/college_Noon.png)');
    $("body").css("background-color",'#d9f5fe'); 
    $('#stars').addClass('nill_class');
    $('#sate').addClass('nill_class');
    $('#ufo').addClass('nill_class');
	$('#ufolight').addClass('nill_class');
    $('#met').addClass('nill_class');
	$('#HABalloon').attr("src", 'noon/blip.png');
	$('#pap_logo').attr("src", 'logo_pa_1.png');
	
}
else if(hr>16&&hr<19)    //evening      
{   
	sunfixEvening();
	$("#ban6").css("background-color",'#fad364'); 
    $("#model").css("color",'#000'); 
	$("#col_logo").attr("src", 'evening/col_logo.png');
	$("#ieee_logo").attr("src", 'evening/ieee.png');
    $("#sky_dark_3").attr("src", 'evening/sky_3.png');
    $("#sky_dark_2").attr("src", 'evening/sky_2.png');
    $("#sky_dark").attr("src", 'evening/sky_1.png');
	$('#coll_build').css('background-image','url(evening/college_Evening.png)');
    $("body").css("background-color",'#fad364'); 
    $('#stars').addClass('nill_class');
    $('#sate').addClass('nill_class');
	$('#ufo').addClass('nill_class');
	$('#ufolight').addClass('nill_class');
    $('#met').addClass('nill_class');
	$('#cloud').addClass('nill_class');
	$('#sun').attr("src", 'evening/sun.png');
	$('#pap_logo').attr("src", 'logo_pa_1.png');
}
else   
{
	$('#HABalloon').addClass('nill_class');
	$('#sun').addClass('nill_class');
	//default night function 
}
}

function sunfixEvening()
{
	$('#sun').css({"margin-left":"38%","margin-bottom":"-15%"});
}

function slideOnLoad()
{   
        
	$("#ban0").stop().animate({left:"-78%"},{easing:"easeOutCubic",duration: 800});
	$("#ban1").stop().animate({left:"-75%"},{easing:"easeOutCubic",duration: 800});
	$("#ban2").stop().animate({left:"-72%"},{easing:"easeOutCubic",duration: 800});
	$("#ban3").stop().animate({left:"-69%"},{easing:"easeOutCubic",duration: 800});
	$("#ban4").stop().animate({left:"-66%"},{easing:"easeOutCubic",duration: 800});
	$("#ban5").stop().animate({left:"-63%"},{easing:"easeOutCubic",duration: 800});
	$("#ban7").stop().animate({left:"100%"},{easing:"easeOutCubic",duration: 800});

}

var ufoSet=0;
function ufopass()
{
	var hr = (new Date()).getHours();
	//if(hr>=19||hr<5)
	{
		var position = $('#ufo').position();

		var percentLeft = Math.ceil(position.left/$("#ban6").width() * 100);
		if(ufoSet==0&&percentLeft>95)
		{
		$("#ufo").animate({left:"45.3%"},{easing:"easeOutExpo",duration:2200});
		$("#ufolight").delay(2300).animate({opacity:"1"},{duration:1000});
		$("#ufolight").delay(200).animate({opacity:"0.05"},{duration:800});
		$("#ufolight").delay(10).animate({opacity:"1"},{duration:800});
		$("#ufolight").delay(10).animate({opacity:"0.05"},{duration:800});
		$("#ufolight").delay(10).animate({opacity:"1"},{duration:800});
		$("#ufolight").delay(20).animate({opacity:"0"},{duration:1000});
		$("#ufo").delay(6550).animate({left:"-20%"},{easing:"easeInOutExpo",duration:2200});
		$("#ufo").animate({left:"100%"},0);
		ufoSet=1;
		}
	}
}

function mecHghtAdj()
{
	var viewHt=$(window).height();
	var viewWt=$(window).width();
	var skyHt=$("#sky_dark").height();
	var sateHt=$("#sate").height();
	var starsHt=$("#stars").height();
	var sat_pathHt=$("#sat_path").height();
	var met_pathHt=$("#met_path").height();
	var sky2Ht=$("#sky_dark_2").height();
	var sky3Ht=$("#sky_dark_3").height();
	var ibetHt=$("#ibet1").height();

	
	var skyHtFix=viewHt-(skyHt/2);
	var sateHtFix=viewHt-(sateHt/2);
	var starsHtFix=viewHt-(starsHt/2);
	var sat_pathHtFix=viewHt-(sat_pathHt/2);
	var met_pathHtFix=viewHt-(met_pathHt/2);
    var sky2HtFix=viewHt-(sky2Ht/2);
    var sky3HtFix=viewHt-(sky3Ht/2);

	$("#sky_dark").css({ top: skyHtFix });
	$("#sate").css({ top: sateHtFix });
	$("#stars").css({ top: starsHtFix});
	$("#sat_path").css({ top: sat_pathHtFix});
	$("#met_path").css({ top: met_pathHtFix});
	$("#sky_dark_2").css({ top: sky2HtFix});
	$("#sky_dark_3").css({ top: sky3HtFix});
	$("#ufo").css({top:skyHtFix});
	$("#ufolight").css({top:skyHtFix,height:skyHt});
	$("#cloud").css({bottom:viewWt/8});
	$("#HABalloon").css({bottom:viewWt/3.5});
	$("#sun").css({bottom:viewWt/4});
	$(".ch-item").css({width:viewWt/8,height:viewWt/8});
	$("#ibet1").css({width:ibetHt});
	
	if(viewWt>viewHt)
	$("#fc-slideshow").css({height:viewHt/1.3,width:viewHt/1.3});
	else
	$("#fc-slideshow").css({height:viewWt/2,width:viewWt/2});
	
	if($(window).width()<920)
	$(".title2").css({left:"90%"})
	else if($(window).width()<980)
	{
		$(".title2").css({left:"90.5%"});
		$(".title21").css({left:"-4.5%"});
	}
	else if($(window).width()<1070)
	{
		$(".title2").css({left:"91%"});
		$(".title21").css({left:"-4%"});
	}
	else if($(window).width()<1210)
	{
		$(".title2").css({left:"92%"});
		$(".title21").css({left:"-3%"});
	}
	else
	{
		$(".title2").css({left:"92.9%"});
		$(".title21").css({left:"-2%"});
	}

}


var parent, ink, d, x, y;
$(".ban").click(function(e){
	parent = $(this);
	//create .ink element if it doesn't exist
	if(parent.find(".ink").length == 0)
		parent.prepend("<span class='ink'></span>");
		
	ink = parent.find(".ink");
	//incase of quick double clicks stop the previous animation
	ink.removeClass("animate");
	
	//set size of .ink
	if(!ink.height() && !ink.width())
	{
		//use parent's width or height whichever is larger for the diameter to make a circle which can cover the entire element.
		d = Math.max(parent.outerWidth(), parent.outerHeight());
		ink.css({height: d, width: d});
	}
	
	//get click coordinates
	//logic = click coordinates relative to page - parent's position relative to page - half of self height/width to make it controllable from the center;
	x = e.pageX - parent.offset().left - ink.width()/2;
	y = e.pageY - parent.offset().top - ink.height()/2;
	
	//set the position and add class .animate
	ink.css({top: y+'px', left: x+'px'}).addClass("animate");
})


function drumplay()
{
		$("#uldrum").stop().delay(100).animate({top:"18%"},{duration:100});
		$("#uldrum").stop().delay(300).animate({top:"17%"},{duration:200});
		
		$("#rjazz").stop().delay(800).animate({top:"17.5%"},{duration:100});
		$("#rjazz").stop().delay(200).animate({top:"17%"},{duration:200,complete:function(){
		
					$("#uldrum").stop().delay(100).animate({top:"18%"},{duration:100});
					$("#uldrum").stop().delay(300).animate({top:"17%"},{duration:200});
					
					$("#rjazz").stop().delay(800).animate({top:"17.5%"},{duration:100});
					$("#rjazz").stop().delay(200).animate({top:"18%"},{duration:200});
					
					$("#cdrum").stop().delay(1300).animate({top:"18%",left:"11%"},{duration:100});
					$("#cdrum").stop().delay(100).animate({top:"17%",left:"10%"},{duration:200});
					
					$("#urdrum").stop().delay(100).animate({top:"19%"},{duration:100});
					$("#urdrum").stop().delay(500).animate({top:"17%"},{duration:300});
					
					$("#ljazz").stop().delay(100).animate({top:"17.5%",left:"8%"},{duration:100});
					$("#ljazz").stop().delay(100).animate({top:"17%",left:"10%"},{duration:200});
					
					$("#ldrum").stop().delay(800).animate({top:"19%",left:"9.5%"},{duration:100});
					$("#ldrum").stop().delay(800).animate({top:"17%",left:"10%"},{duration:200,complete:function(){
					
						$("#uldrum").stop().delay(100).animate({top:"18%"},{duration:100});
						$("#uldrum").stop().delay(300).animate({top:"17%"},{duration:200});
						
						$("#rjazz").stop().delay(800).animate({top:"17.5%"},{duration:100});
						$("#rjazz").stop().delay(200).animate({top:"17%"},{duration:200});
						
						$("#cdrum").stop().delay(1300).animate({top:"18%",left:"11%"},{duration:100});
						$("#cdrum").stop().delay(100).animate({top:"17%",left:"10%"},{duration:200});
						
						$("#urdrum").stop().delay(100).animate({top:"19%"},{duration:100});
						$("#urdrum").stop().delay(500).animate({top:"17%"},{duration:300});
						
						$("#ljazz").stop().delay(100).animate({top:"17.5%",left:"8%"},{duration:100});
						$("#ljazz").stop().delay(100).animate({top:"17%",left:"10%"},{duration:200});
						
						$("#ldrum").stop().delay(800).animate({top:"19%",left:"9.5%"},{duration:100});
						$("#ldrum").stop().delay(800).animate({top:"17%",left:"10%"},{duration:200});
						
					}});
		}});
		
		$("#cdrum").stop().delay(1300).animate({top:"18%",left:"11%"},{duration:100});
		$("#cdrum").stop().delay(100).animate({top:"17%",left:"10%"},{duration:200});
		
		$("#urdrum").stop().delay(100).animate({top:"19%"},{duration:100});
		$("#urdrum").stop().delay(500).animate({top:"17%"},{duration:300});
		
		$("#ljazz").stop().delay(100).animate({top:"17.5%",left:"8%"},{duration:100});
		$("#ljazz").stop().delay(100).animate({top:"17%",left:"10%"},{duration:200});
		
		$("#ldrum").stop().delay(800).animate({top:"19%",left:"9.5%"},{duration:100});
		$("#ldrum").stop().delay(800).animate({top:"17%",left:"10%"},{duration:200,complete:function(){
		
			$("#uldrum").stop().delay(100).animate({top:"18%"},{duration:100});
			$("#uldrum").stop().delay(300).animate({top:"17%"},{duration:200});
			
			$("#rjazz").stop().delay(800).animate({top:"17.5%"},{duration:100});
			$("#rjazz").stop().delay(200).animate({top:"17%"},{duration:200});
			
			$("#cdrum").stop().delay(1300).animate({top:"18%",left:"11%"},{duration:100});
			$("#cdrum").stop().delay(100).animate({top:"17%",left:"10%"},{duration:200});
			
			$("#urdrum").stop().delay(100).animate({top:"19%"},{duration:100});
			$("#urdrum").stop().delay(500).animate({top:"17%"},{duration:300});
			
			$("#ljazz").stop().delay(100).animate({top:"17.5%",left:"8%"},{duration:100});
			$("#ljazz").stop().delay(100).animate({top:"17%",left:"10%"},{duration:200});
			
			$("#ldrum").stop().delay(800).animate({top:"19%",left:"9.5%"},{duration:100});
			$("#ldrum").stop().delay(800).animate({top:"17%",left:"10%"},{duration:200,complete:function(){
			
			$("#uldrum").stop().delay(100).animate({top:"18%"},{duration:100});
		$("#uldrum").stop().delay(300).animate({top:"17%"},{duration:200});
		
		$("#rjazz").stop().delay(800).animate({top:"17.5%"},{duration:100});
		$("#rjazz").stop().delay(200).animate({top:"17%"},{duration:200});
		
		$("#cdrum").stop().delay(1300).animate({top:"18%",left:"11%"},{duration:100});
		$("#cdrum").stop().delay(100).animate({top:"17%",left:"10%"},{duration:200});
		
		$("#urdrum").stop().delay(100).animate({top:"19%"},{duration:100});
		$("#urdrum").stop().delay(500).animate({top:"17%"},{duration:300});
		
		$("#ljazz").stop().delay(100).animate({top:"17.5%",left:"8%"},{duration:100});
		$("#ljazz").stop().delay(100).animate({top:"18%",left:"10%"},{duration:200});
		
		$("#ldrum").stop().delay(800).animate({top:"19%",left:"9.5%"},{duration:100});
		$("#ldrum").stop().delay(800).animate({top:"17%",left:"10%"},{duration:200,complete:function(){
		
				$("#uldrum").stop().delay(100).animate({top:"18%"},{duration:100});
				$("#uldrum").stop().delay(300).animate({top:"17%"},{duration:200});
				
				$("#rjazz").stop().delay(800).animate({top:"17.5%"},{duration:100});
				$("#rjazz").stop().delay(200).animate({top:"17%"},{duration:200});
				
				$("#cdrum").stop().delay(1300).animate({top:"18%",left:"11%"},{duration:100});
				$("#cdrum").stop().delay(100).animate({top:"17%",left:"10%"},{duration:200});
				
				$("#urdrum").stop().delay(100).animate({top:"19%"},{duration:100});
				$("#urdrum").stop().delay(500).animate({top:"17%"},{duration:300});
				
				$("#ljazz").stop().delay(100).animate({top:"17.5%",left:"8%"},{duration:100});
				$("#ljazz").stop().delay(100).animate({top:"18%",left:"10%"},{duration:200});
				
				$("#ldrum").stop().delay(800).animate({top:"19%",left:"9.5%"},{duration:100});
				$("#ldrum").stop().delay(800).animate({top:"17%",left:"10%"},{duration:200});
				
				}});
			
			}});
			
		}});
}

function extraOnMain()
{
	var img1= document.getElementById('date');
    var height =img1.clientHeight ;
    var ht= height/2;
    var ht1=ht+170;
    $("#days").css({'top' :ht1});
    
    var img2= document.getElementById('spa');
    var height1 =img2.clientHeight ;
    var ht2= height1*0.23;
    var ht3=ht2+20;
    $("#sp1").css({'bottom' :ht3});
    
     
    $("#tem1").click(function () {
    $("#tem1").stop().animate({left:"0%"},{easing:"easeOutCubic",duration: 520});
    });
  var topFix= document.getElementById('ch123');
  var height3 =img1.clientHeight ;
  var ht4= height3/2;
  var tp1= $('#ch123').css('margin-top');
  var tp2=tp1-ht4;
  $("#ch123").css({'margin-top' :tp2});
}

function compLoad()
{	
	$('.compItem').stop(true,true).animate({opacity:'0'},{duration:10});	
		
	$('#ecComp').hover(					//sub menu hover function to hide all other menus
		function(){
			$("#CompControl").circleMenu('open');
			$("#ecComp").circleMenu('open');
			$("#ecComp .compItem").stop(true,true).animate({opacity:'1'},{duration:10});
			$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
			$("#ECCompM").addClass('comp_rotate comp_transition');
		},function(){
			
			
		}
	);
	$('#csComp').hover(
		function(){
			$("#CompControl").circleMenu('open');
			$("#csComp").circleMenu('open');
			$("#csComp .compItem").stop(true,true).animate({opacity:'1'},{duration:10});
			$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
			$("#CSCompM").addClass('comp_rotate comp_transition');
		},function(){
			
			
			
		}
	);
	$('#eeComp').hover(
		function(){
			$("#CompControl").circleMenu('open');
			$("#eeComp").circleMenu('open');
			$("#eeComp .compItem").stop(true,true).animate({opacity:'1'},{duration:10});
			$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
			$("#EECompM").addClass('comp_rotate comp_transition');
		},function(){
			
		
			
		}
	);

	$('#geComp').hover(
		function(){
			$("#CompControl").circleMenu('open');
			$("#geComp").circleMenu('open');
			$("#geComp .compItem").stop(true,true).animate({opacity:'1'},{duration:10});
			$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
			$("#GECompM").addClass('comp_rotate comp_transition');
		},function(){
			
		
			
		}
	);

	$('#bmComp').hover(
		function(){
			$("#CompControl").circleMenu('open');
			$("#bmComp").circleMenu('open');
			$("#bmComp .compItem").stop(true,true).animate({opacity:'1'},{duration:10});
			$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
			$("#BMCompM").addClass('comp_rotate comp_transition');
			
		},function(){
			
	
		}
	); 
	$('#ntComp').hover(
		function(){
			$("#CompControl").circleMenu('open');
			$("#ntComp").circleMenu('open');
			$("#ntComp .compItem").stop(true,true).animate({opacity:'1'},{duration:10});
			$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
			$("#NTCompM").addClass('comp_rotate comp_transition');
		},function(){
			
			
		}
	);
	var viewHt=$(window).height();			//initialising the positions
	var viewWt=$(window).width();				
	$('#CompControl').circleMenu({ item_diameter:viewWt/12 , circle_radius: viewWt/9.8, direction: 'full', delay:500, step_out:100, step_in:100,trigger:'none' });		//may need some fine tweeking here depending upon no of elements
	$('#ecComp').circleMenu({ item_diameter:viewWt/18 , circle_radius: viewWt/10.5, angle:{start:50, end: 130} , delay:1200 , step_out:50, step_in:50,trigger:'none' });
	$('#csComp').circleMenu({ item_diameter:viewWt/18 , circle_radius: viewWt/8, angle:{start:-70, end: 50}, delay:1200, step_out:50, step_in:50,trigger:'none' });
	$('#eeComp').circleMenu({ item_diameter:viewWt/18 , circle_radius: viewWt/11.5, angle:{start:-60,end:-128} , delay:1200, step_out:50, step_in:50,trigger:'none'  });
	$('#geComp').circleMenu({ item_diameter:viewWt/18 , circle_radius: viewWt/9, angle:{start:-130,end:-170} , delay:1200, step_out:50, step_in:50,trigger:'none'  });
	$('#bmComp').circleMenu({ item_diameter:viewWt/18 , circle_radius: viewWt/8, angle:{start:150, end: 160}  , delay:1200, step_out:50, step_in:50,trigger:'none' });
	$('#ntComp').circleMenu({ item_diameter:viewWt/18 , circle_radius: viewWt/6.8, angle:{start:-60, end: 102} , delay:1200, step_out:50, step_in:50,trigger:'none' });
	
	$('#CompControlM').hover(function(){				//main menu div hover to rotate it and fade all sub menus
		$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
		$('.compItem').stop(true,true).animate({opacity:'0'},{duration:10});
		$("#ecComp ").stop(true,true).animate({opacity:'1'},{duration:500});
		$("#csComp ").stop(true,true).animate({opacity:'1'},{duration:500});
		$("#eeComp ").stop(true,true).animate({opacity:'1'},{duration:500});
		$("#geComp ").stop(true,true).animate({opacity:'1'},{duration:500});
		$("#bmComp ").stop(true,true).animate({opacity:'1'},{duration:500});
		$("#ntComp ").stop(true,true).animate({opacity:'1'},{duration:500});
		$('#CompControl').circleMenu('open');
		$('#ntComp').circleMenu('close');
		$('#csComp').circleMenu('close');
		$('#eeComp').circleMenu('close');
		$('#geComp').circleMenu('close');
		$('#bmComp').circleMenu('close');
		$('#ecComp').circleMenu('close');
		$("#ECCompM").removeClass('comp_rotate');
		$("#CSCompM").removeClass('comp_rotate');
		$("#EECompM").removeClass('comp_rotate');
		$("#GECompM").removeClass('comp_rotate');
		$("#BMCompM").removeClass('comp_rotate');
		$("#NTCompM").removeClass('comp_rotate');
	},function(){
	});
	$('#CompBox').hover(function(){				//main menu hover out to rotate it's div and fade all sub menus
		
	},function(){
		$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
		$('.compItem').stop(true,true).animate({opacity:'0'},{duration:10});
		$('#CompControl').circleMenu('close');
		$('#ntComp').circleMenu('close');
		$('#csComp').circleMenu('close');
		$('#eeComp').circleMenu('close');
		$('#geComp').circleMenu('close');
		$('#bmComp').circleMenu('close');
		$('#ecComp').circleMenu('close');
		$("#ECCompM").removeClass('comp_rotate');
		$("#CSCompM").removeClass('comp_rotate');
		$("#EECompM").removeClass('comp_rotate');
		$("#GECompM").removeClass('comp_rotate');
		$("#GECompM").removeClass('comp_rotate');
		$("#BMCompM").removeClass('comp_rotate');
		$("#NTCompM").removeClass('comp_rotate');
	});
	
	$('#ECCompM').hover(function(){
		$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
		$('#CompControl').circleMenu('open');
		$('#ecComp').circleMenu('open');
		$('#csComp').circleMenu('close');
		$('#eeComp').circleMenu('close');
		$('#geComp').circleMenu('close');
		$('#bmComp').circleMenu('close');
		$('#ntComp').circleMenu('close');
		$("#ecComp .compItem").stop(true,true).animate({opacity:'1'},{duration:10});
		$("#ecComp ").stop(true,true).animate({opacity:'1'},{duration:10});
		$("#csComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#eeComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#geComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#bmComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ntComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#CSCompM").removeClass('comp_rotate');
		$("#EECompM").removeClass('comp_rotate');
		$("#GECompM").removeClass('comp_rotate');
		$("#BMCompM").removeClass('comp_rotate');
		$("#NTCompM").removeClass('comp_rotate');
		
	
	},function(){
		
	});
	$('#CSCompM').hover(function(){
		$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
		$('#CompControl').circleMenu('open');
		$('#csComp').circleMenu('open');
		$('#ecComp').circleMenu('close');
		$('#eeComp').circleMenu('close');
		$('#geComp').circleMenu('close');
		$('#bmComp').circleMenu('close');
		$('#ntComp').circleMenu('close');
		$("#csComp .compItem").stop(true,true).animate({opacity:'1'},{duration:10});
		$("#csComp ").stop(true,true).animate({opacity:'1'},{duration:10});
		$("#ecComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#geComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#eeComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#bmComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ntComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ECCompM").removeClass('comp_rotate');
		$("#EECompM").removeClass('comp_rotate');
		$("#GECompM").removeClass('comp_rotate');
		$("#BMCompM").removeClass('comp_rotate');
		$("#NTCompM").removeClass('comp_rotate');
	},function(){
		
	});
	$('#EECompM').hover(function(){
		$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
		$('#CompControl').circleMenu('open');
		$('#eeComp').circleMenu('open');
		$('#geComp').circleMenu('close');
		$('#csComp').circleMenu('close');
		$('#ecComp').circleMenu('close');
		$('#bmComp').circleMenu('close');
		$('#ntComp').circleMenu('close');
		$("#eeComp .compItem").stop(true,true).animate({opacity:'1'},{duration:10});
		$("#eeComp ").stop(true,true).animate({opacity:'1'},{duration:10});
		$("#csComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ecComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#geComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#bmComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ntComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ECCompM").removeClass('comp_rotate');
		$("#CSCompM").removeClass('comp_rotate');
		$("#GECompM").removeClass('comp_rotate');
		$("#BMCompM").removeClass('comp_rotate');
		$("#NTCompM").removeClass('comp_rotate');
	
	},function(){
		
	});
	$('#BMCompM').hover(function(){
		$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
		$('#CompControl').circleMenu('open');
		$('#bmComp').circleMenu('open');
		$('#csComp').circleMenu('close');
		$('#eeComp').circleMenu('close');
		$('#geComp').circleMenu('close');
		$('#ecComp').circleMenu('close');
		$('#ntComp').circleMenu('close');
		$("#bmComp .compItem").stop(true,true).animate({opacity:'1'},{duration:10});
		$("#bmComp ").stop(true,true).animate({opacity:'1'},{duration:10});
		$("#csComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#geComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#eeComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ecComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ntComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ECCompM").removeClass('comp_rotate');
		$("#CSCompM").removeClass('comp_rotate');
		$("#EECompM").removeClass('comp_rotate');
		$("#GECompM").removeClass('comp_rotate');
		$("#NTCompM").removeClass('comp_rotate');
	},function(){
		
	});


	$('#NTCompM').hover(function(){
		$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
		$('#CompControl').circleMenu('open');
		$('#ntComp').circleMenu('open');
		$('#csComp').circleMenu('close');
		$('#eeComp').circleMenu('close');
		$('#geComp').circleMenu('close');
		$('#bmComp').circleMenu('close');
		$('#ecComp').circleMenu('close');
		$("#ntComp .compItem").stop(true,true).animate({opacity:'1'},{duration:10});
		$("#ntComp ").stop(true,true).animate({opacity:'1'},{duration:10});
		$("#csComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#geComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#eeComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#bmComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ecComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ECCompM").removeClass('comp_rotate');
		$("#CSCompM").removeClass('comp_rotate');
		$("#GECompM").removeClass('comp_rotate');
		$("#EECompM").removeClass('comp_rotate');
		$("#BMCompM").removeClass('comp_rotate');
		$('#EECompM').unbind('mouseenter mouseleave');
		$('#BMCompM').unbind('mouseenter mouseleave');
	},function(){
		
	});

   $('#GECompM').hover(function(){
		$("#CompControlM").stop(true,true).animate({opacity:'1'},{duration:500});
		$('#CompControl').circleMenu('open');
		$('#ntComp').circleMenu('close');
		$('#csComp').circleMenu('close');
		$('#eeComp').circleMenu('close');
		$('#geComp').circleMenu('open');
		$('#bmComp').circleMenu('close');
		$('#ecComp').circleMenu('close');
		$("#geComp .compItem").stop(true,true).animate({opacity:'1'},{duration:10});
		$("#ntComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#csComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#geComp ").stop(true,true).animate({opacity:'1'},{duration:10});
		$("#eeComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#bmComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ecComp ").stop(true,true).animate({opacity:'0'},{duration:500});
		$("#ECCompM").removeClass('comp_rotate');
		$("#CSCompM").removeClass('comp_rotate');
		$("#GECompM").removeClass('comp_rotate');
		$("#EECompM").removeClass('comp_rotate');
		$("#BMCompM").removeClass('comp_rotate');
	},function(){
		
	});
	
	
	var subIcoHt=$("#ECCompM").height();
	$('.compSubec').css({top:subIcoHt/2});
	$('.compSubec').circleType({dir:-1,fluid:true});
	
	$('.compSubcs').css({top:subIcoHt/2});
	$('.compSubcs').circleType({dir:-1,fluid:true});
	
	$('.compSubee').css({top:subIcoHt/2});
	$('.compSubee').circleType({dir:-1,fluid:true});
	
	$('.compSubbm').css({top:subIcoHt/2});
	$('.compSubbm').circleType({dir:-1,fluid:true});
	
	$('.compSubnt').css({top:subIcoHt/2});
	$('.compSubnt').circleType({dir:-1,fluid:true});
}



$(window).resize(function () {
	mecHghtAdj();
	extraOnMain();
	compLoad();
});

var presBann=10;
$(document).ready(function() {
    
    
	extraOnMain();
    sponsors();
    dayNight();
	mecHghtAdj();
	compLoad();
	slideOnLoad();

$(".compItem").click(function(){
     
    $('#CompControlM').css('opacity', '1');



    });

	$("#ban0").click( function()
	{    jQuery.fx.interval = 1;
		
		if(presBann!=0)
		{
		presBann=0;
		$("#ban7").stop().animate({left:"96%"},{easing:"easeOutCubic",duration: 150});
		$("#ban0").stop().animate({left:"0%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban1").stop().animate({left:"3%"},{easing:"easeOutCubic",duration: 1520});
	    	$("#ban2").stop().animate({left:"6%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban3").stop().animate({left:"9%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban4").stop().animate({left:"12%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban5").stop().animate({left:"15%"},{easing:"easeOutCubic",duration: 1520,complete: function(){ufoSet=0; $("#ban0>.title1").stop().animate({bottom:"2%"},{duration:500});}});
		$(".title2").stop().animate({top:"46%"},{duration:500});
		$(".title1").stop().animate({bottom:"-10%"},{duration:500});
		$("#ban0>.title2").stop().animate({top:"-30%"},{duration:500});
		
		}
		
	});
	$("#ban1").click( function()
	{   
	    jQuery.fx.interval = 1;
		if(presBann!=1)
		{
		presBann=1;
		$("#ban7").stop().animate({left:"96%"},{easing:"easeOutCubic",duration: 150});
		$("#ban0").stop().animate({left:"-78%"},{easing:"easeOutCubic",duration: 520});
		$("#ban1").stop().animate({left:"3%"},{easing:"easeOutCubic",duration: 1520});
	   	$("#ban2").stop().animate({left:"6%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban3").stop().animate({left:"9%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban4").stop().animate({left:"12%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban5").stop().animate({left:"15%"},{easing:"easeOutCubic",duration: 1520,complete: function(){ufoSet=0;			$("#ban1>.title1").stop().animate({bottom:"2%"},{duration:500});
}});
		$(".title2").stop().animate({top:"46%"},{duration:500});
		$(".title1").stop().animate({bottom:"-10%"},{duration:500});
		$("#ban1>.title2").stop().animate({top:"-30%"},{duration:500});
		}
		
	});
	$("#ban2").click( function()
	{   
		jQuery.fx.interval = 1;
		if(presBann!=2)
		{
		presBann=2;
		$("#ban7").stop().animate({left:"96%"},{easing:"easeOutCubic",duration: 150});
		$("#ban0").stop().animate({left:"-78%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban1").stop().animate({left:"-75%"},{easing:"easeOutCubic",duration: 1520});
	    	$("#ban2").stop().animate({left:"6%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban3").stop().animate({left:"9%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban4").stop().animate({left:"12%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban5").stop().animate({left:"15%"},{easing:"easeOutCubic",duration: 1520,complete: function(){ufoSet=0;			$("#ban2>.title1").stop().animate({bottom:"2%"},{duration:500});
}});
		$(".title2").stop().animate({top:"46%"},{duration:500});
		$(".title1").stop().animate({bottom:"-10%"},{duration:500});
		$("#ban2>.title2").stop().animate({top:"-30%"},{duration:500});
		}
	
	});
	$("#ban3").click( function()
	{   
		jQuery.fx.interval = 1;
		if(presBann!=3)
		{
		presBann=3;
		$("#ban7").stop().animate({left:"96%"},{easing:"easeOutCubic",duration: 150});
		$("#ban0").stop().animate({left:"-78%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban1").stop().animate({left:"-75%"},{easing:"easeOutCubic",duration: 1520});
	    	$("#ban2").stop().animate({left:"-72%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban3").stop().animate({left:"9%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban4").stop().animate({left:"12%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban5").stop().animate({left:"15%"},{easing:"easeOutCubic",duration: 1520,complete: function(){ufoSet=0;			$("#ban3>.title1").stop().animate({bottom:"2%"},{duration:500});
}});
		$(".title2").stop().animate({top:"46%"},{duration:500});
		$(".title1").stop().animate({bottom:"-10%"},{duration:500});
		$("#ban3>.title2").stop().animate({top:"-30%"},{duration:500});
		}
	
	});
	$("#ban4").click( function()
	{   jQuery.fx.interval = 1;
		if(presBann!=4)
		{
		presBann=4;
		$("#ban7").stop().animate({left:"96%"},{easing:"easeOutCubic",duration: 150});
		$("#ban0").stop().animate({left:"-78%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban1").stop().animate({left:"-75%"},{easing:"easeOutCubic",duration: 1520});
	    	$("#ban2").stop().animate({left:"-72%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban3").stop().animate({left:"-69%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban4").stop().animate({left:"12%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban5").stop().animate({left:"15%"},{easing:"easeOutCubic",duration: 1520,complete: function(){ufoSet=0;			$("#ban4>.title1").stop().animate({bottom:"2%"},{duration:500});
}});
		$(".title2").stop().animate({top:"46%"},{duration:500});
		$(".title1").stop().animate({bottom:"-10%"},{duration:500});
		$("#ban4>.title2").stop().animate({top:"-40%"},{duration:500});
		}
		
	});
	$("#ban5").click( function()
	{   jQuery.fx.interval = 1;
		if(presBann!=5)
		{
		presBann=5;
		$("#ban7").stop().animate({left:"96%"},{easing:"easeOutCubic",duration: 150});
		$("#ban0").stop().animate({left:"-78%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban1").stop().animate({left:"-75%"},{easing:"easeOutCubic",duration: 1520});
	    	$("#ban2").stop().animate({left:"-72%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban3").stop().animate({left:"-69%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban4").stop().animate({left:"-66%"},{easing:"easeOutCubic",duration: 1520});
		$("#ban5").stop().animate({left:"15%"},{easing:"easeOutCubic",duration: 1520,complete: function(){ufoSet=0;			$("#ban5>.title1").stop().animate({bottom:"2%"},{duration:500});
}});
		$(".title2").stop().animate({top:"46%"},{duration:500});
		$(".title1").stop().animate({bottom:"-10%"},{duration:500});
		$("#ban5>.title2").stop().animate({top:"-30%"},{duration:500});
		// setTimeout(function() {
		// 	drumplay();
		// }, 1000);
		setTimeout(function() {
			$(".side_t").stop().animate({top:"6%"},{duration:500});
		}, 1000);
		setTimeout(function() {
			$(".side_t1").stop().animate({top:"6%"},{duration:1000});
		}, 1000);
		setTimeout(function() {
			$(".side_t2").stop().animate({left:"0px"},{duration:1400});
			$(".side_t3").stop().animate({left:"50%"},{duration:1400});
		}, 1000);
		}
		
	});
	$("#ban7").click( function()
	{   jQuery.fx.interval = 1;
		if(presBann!=6)
		{
		presBann=6;
		slideOnLoad();
		ufopass();
		$(".title2").stop().animate({top:"46%"},{duration:500});
		$(".title1").stop().animate({bottom:"-10%"},{duration:500});
		}
		
	});
	
	
});

                            