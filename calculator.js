
//this displays all values on the screen
$(function(){

 
$(".calc-btn").on('click', function(){
   
    
    if ($(this).attr('data-role')!='operator'){
        $('.entry').val($(".entry").val()+$(this).val());
    //begining of test
    }else{
        if($(this).attr('value') !='+' || '-'){
            //testing the above
        }else{
        if($(".entry").val()!=''){
            $('.entry').val($('.entry').val()+$(this).val());
        }
    else{
         if($(".entry").val()!='.calculate.btn'){
            $('.entry').val($(".entry").val()+$(this).val());

        }
    }
}
    }
});


$(".plusminus-btn").on('click', function(){

var n =$('.entry').val();
$('.entry').val(eval(n * -1));
});

//this clears on entry on the screen
$(".clear-btn").on('click',function(){
    $('.display, .entry').val('');
          
});

$('.backspace').on('click', function(){
    var x = $('.entry').val();
    if(x.length==0){return}
    var y = x.substr(0,x.length-1)
    $('.entry').val(y)
    
});
    

//perfoms the arithmetic operation
$(".equal-btn").on('click', function(){
    var calculation = $('.entry').val();
   $('.display').val(eval(calculation)); 
       var solved = $('.display').val();
   
    $('.entry').val(eval(solved));
   
});


// styling and effects begins


});