 /*******************************************************************
  * Name         : goiBoxMaker
  * Author       : Hiroshi51
  * ver          : 0.0.1
  * lastModified : 2016-03-03 
  *******************************************************************/
(function ( $ ) {

$.fn.goiBoxMaker = function(settingOption) {
    
    //extend settingOption to override the default
	var setting = $.extend({          
		"boxWidth"     : 200,
		"boxHeight"    : 200, 
		"clickAction"  : 180
		},settingOption);

    //Get the element Width
    var surfaceWidth = setting.boxWidth;

    //Get the element Height
    var surfaceHeight = setting.boxHeight;
    
    //print out on the console
    //console.log(surfaceHeight,surfaceWidth)

	//Compute half height and half width
	var halfHeight = surfaceHeight/2;
	var halfWidth = surfaceWidth/2;
    
	//set cube children position to absolute
	this.children("div.front,div.back,div.top,div.bottom").css({
		"position":"absolute",
		"width":surfaceWidth, 
		"height":surfaceHeight
	});
	this.children("div.right,div.left").css({
		"position":"absolute",
		"width":surfaceHeight, 
		"height":surfaceHeight
	});

	//create a cube by css setting 
	this.css({
		"width":surfaceWidth, "height":surfaceHeight, 
		"position": "relative",
		"-webkit-transform-style": "preserve-3d",
		"-ms-transform-style": "preserve-3d",
		"-o-transform-style": "preserve-3d",
		"transform-style": "preserve-3d",
		"-webkit-transition":"all 1000ms",
		"-o-transition":"all 1000ms",
		"transition":"all 1000ms"
	});

	this.parent().css({
		"position"            : "relative",
		"-webkit-perspective" :1000,
		"-ms-perspective"     :1000,
		"-o-perspective"      :1000,
		"-moz-perspective"    :1000
	});
	this.children("div.front").css("transform","translateZ("+halfHeight+"px)");
	this.children("div.back").css("transform","translateZ(-"+halfHeight+"px) rotateX(180deg)");
	this.children("div.bottom").css({
		"top"                 : halfHeight+"px",
		"-webkit-transform"   :"rotateX(90deg)",
		"-ms-transform"       :"rotateX(90deg)",
		"-o-transform"        :"rotateX(90deg)",
		"transform"           :"rotateX(90deg)"
	});
	this.children("div.top").css({
		"top"                 :"-"+halfHeight+"px",
		"-webkit-transform"   :"rotateX(-90deg)",
		"-ms-transform"       :"rotateX(-90deg)",
		"-o-transform"        :"rotateX(-90deg)",
		"transform"           :"rotateX(-90deg)"
	});
	this.children("div.left").css({
		"left"                :"-"+halfHeight+"px",
		"-webkit-transform"   :"rotateY(90deg)",
		"-ms-transform"       :"rotateY(90deg)",
		"-o-transform"        :"rotateY(90deg)",
		"transform"           :"rotateY(90deg)"
	});	
    this.children("div.right").css({
		"right"                :"-"+halfHeight+"px",
		"-webkit-transform"   :"rotateY(90deg)",
		"-ms-transform"       :"rotateY(90deg)",
		"-o-transform"        :"rotateY(90deg)",
		"transform"           :"rotateY(90deg)"
	});	
	
	this.on('click',function(event){
         event.preventDefault();
         if(typeof this.flag === "undefined" || this.flag === 0){
	         $(this).css({
			"-webkit-transform": "rotateY(-"+setting.clickAction+"deg)",
			"-ms-transform"    : "rotateY(-"+setting.clickAction+"deg)",
			"-o-transform"     : "rotateY(-"+setting.clickAction+"deg)",
			"transform"        : "rotateY(-"+setting.clickAction+"deg)",
			});
	         this.flag = 1;
         }
         else if(this.flag == 1){
			$(this).css({
			"-webkit-transform": "rotateY(0deg)",
			"-ms-transform"    : "rotateY(0deg)",
			"-o-transform"     : "rotateY(0deg)",
			"transform"        : "rotateY(0deg)"
			});
			this.flag = 0;
	     }
     });   
   return this;
 }; 
})( jQuery );

