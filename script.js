$(document).ready(function(){
    
   $('.cardServices').hover(
       function(){
           $(this).animate({
               marginTop: "-=3%",
           },200);
       },
       function(){
           $(this).animate({
               marginTop: "0%"
           },200);
       }
   );
   $('.cardServicesTwo').hover(
    function(){
        $(this).animate({
            marginTop: "-=3%",
        },200);
    },
    function(){
        $(this).animate({
            marginTop: "0%"
        },200);
    }
);

});

//submit form

$('#submit').click(function(){
    var name = $('#name').val();
    var phone = $('#phone').val();
    var email = $('#email').val();
    var message = $('#message').val();

    if(name && phone && email && message){
        swal("Sent!", {
            button: false,
          });

    }
})

window.sr= ScrollReveal();
sr.reveal('.med', {
  duration: 1000, 
  origin: 'top'
});


window.sr= ScrollReveal();
sr.reveal('.aut', {
  duration: 1500, 
  origin: 'top',
  delay:300
});

window.sr= ScrollReveal();
sr.reveal('.choose', {
  duration: 2000, 
  origin: 'top',
  distance: '50px',
  viewFactor: 0.2
})
window.sr= ScrollReveal();
sr.reveal('.imgOne', {
  duration: 2000, 
  origin: 'left',
  distance: '70px',
  viewFactor: 0.2
})
window.sr= ScrollReveal();
sr.reveal('.imgTwo', {
  duration: 2000, 
  origin: 'bottom',
  distance: '70px',
  viewFactor: 0.2
})
window.sr= ScrollReveal();
sr.reveal('.imgThree', {
  duration: 2000, 
  origin: 'right',
  distance: '70px',
  viewFactor: 0.2
})

window.sr= ScrollReveal();
sr.reveal('.serviceTxt', {
  duration: 2000, 
  origin: 'right',
  distance: '200px',
  viewFactor: 0.2
})

window.sr= ScrollReveal();
sr.reveal('.autoRepairTitle', {
  duration: 2000, 
  origin: 'top',
  distance: '50px',
  viewFactor: 0.2
})

window.sr= ScrollReveal();
sr.reveal('.cardImgService', {
  duration: 2500, 
  origin: 'bottom',
  distance: '50px',
  viewFactor: 0.2
})

window.sr= ScrollReveal();
sr.reveal('.screwImg', {
  duration: 3000, 
  origin: 'top',
  viewFactor: 0.2
})