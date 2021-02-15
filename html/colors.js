


var Body={
    setbackgroundColor:function (color) {
    //document.querySelector('body').style.backgroundColor=color;
    $('body').css('backgroundColor',color);
    },
    
    setcolor:function(color){
   // document.querySelector('body').style.color =color;
   $('body').css('color',color);
}

}

var Links={
        color:function(color) {
            // var alist=document.querySelectorAll('a');
            // var i=0;
            // while(i<alist.length)
            //         {alist[i].style.color=color;
            //             i=i+1;
            //         }
            $('a').css('color',color);
                }
    }


//    function BodySetBackgroundColor(color) {
//     var target = document.querySelector('body');
//     target.style.backgroundColor=color;
//    } 

// function BodySetColor(color){
//      document.querySelector('body').style.color =color;
//     }

// function LinkColor(color) {

//     var alist=document.querySelectorAll('a');
//     var i=0;
//      while(i<alist.length)
//             {alist[i].style.color=color;
//                 i=i+1;
//             }
// }

function nightcolorhendle(self){
var target = document.querySelector('body');

if(self.value === 'night'){
    
    Body.setbackgroundColor('black');
    //BodySetBackgroundColor('black');
    //target.style.backgroundColor='black';
    
    Body.setcolor('white');
    //BodySetColor('white');
    //target.style.color='white';
    self.value ='day';

    Links.color('powderblue');
   // LinkColor('powderblue');
    // var alist=document.querySelectorAll('a');
    // var i=0;
    //     while(i<alist.length)
    //     {
    //         alist[i].style.color='powderblue';
    //         i=i+1;
    //     }

}
else{
    Body.setbackgroundColor('white');
    //BodySetBackgroundColor('white');
    //target.style.backgroundColor='white';
    
    Body.setcolor('black');
    //BodySetColor('black');
    //target.style.color='black';
    self.value = 'night';

    Links.color('blue');
    //LinkColor('blue');
    // var alist=document.querySelectorAll('a');
    //     var i=0;
    // while(i<alist.length){
    //     alist[i].style.color='blue';
    //     i=i+1;
    // } 
}
}
