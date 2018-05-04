import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

declare const $: any;
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  animations: [
    trigger('flyInOut', [
      state('in', style({transform: 'translateX(100)'})),
      transition('void => *', [
        style({transform: 'translateX(-100%)'}),
        animate(4000)
      ]),
      /* transition('* => void', [
        animate(100, style({transform: 'translateX(100%)'}))
      ]) */
    ])
  ]
})


export class LandingComponent implements OnInit {

  constructor() { }


  contactUsBtnClicked(){
  this.showNotification("top","right") 
  }

  showNotification(from, align){
    const type = ['','info','success','warning','danger'];

    const color = 2 // Math.floor((Math.random() * 4) + 1);

    $.notify({
        icon: "add_alert",
        message: " Thanks For Contacting Us - We will revert back to you soon."

    },{
        type: type[color],
        timer: 4000,
        placement: {
            from: from,
            align: align
        }
    });
}

  ngOnInit() {
      //smoothscroll
    $('li a[href^="#"]').on('click', function (e) {
        e.preventDefault();
      //  $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,        
            menu = target;
        target = $(target);
       // console.log(target);
        $('html, body').stop().animate({
            'scrollTop': target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
          //  $(document).on("scroll", this.onScroll());
        });
    });

     window.onscroll = _ => {
      var scrollPos = $(document).scrollTop();

      $('.landingNavBar ul li a').each(function () 
      {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
           //alert("scrollpos: "+scrollPos);
         //alert("refElement.position().top: "+refElement.position().top);   
       // console.log(currLink)
         // $('.landingNavBar ul li a').removeClass("active");
        //  $('.landingNavBar ul li ').removeClass("active");
             currLink.closest("li").addClass("active");
            currLink.addClass("active");
            
        }
        else{
            currLink.removeClass("active");
            currLink.closest("li").removeClass("active");
         
        }
      });


        //Alternate Code
     /*  var windscroll = $(window).scrollTop();
      $('.wrapper section').each(function(i) {
        if ($(this).position().top <= windscroll - 550) {
            $('nav a.active').removeClass('active');
            $('nav a').eq(i).addClass('active');
        }
    });*/
    };  
  }


}
