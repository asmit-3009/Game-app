$(".turn").text("X's Turn");

var count = 0;
var winner = "";
var isGameOver = 0;

var square = $(".square");

square.click(function(){
    if(!isGameOver && $(this).text()===""){
        if(count%2 === 0){ 
            $(this).text("X");
            $(this).css('background', '#FFFF5C');
            $(this).css('color','blue')
            $(".turn").text("O's Turn")
        } else {
            $(this).text("O");
            $(this).css('background', '#FFFF5C');
            $(this).css('color','red')
            $(".turn").text("X's Turn")
        }
        count++;
        checkWin();
     }
});

/* Functionality of the reset button */

$(".btn").click(function(){
    square.text("");
    square.css('background','#e84545');
    count = 0;
    winner = "";
    isGameOver = 0; 
    $(".turn").text("X's Turn");
    $(".result").text("");
});

/* Function to check win or draw conditions */

function checkWin() {
    if(( $("#s1").text()) === ( $("#s2").text()) && ( $("#s1").text()) === ( $("#s3").text()) && ( $("#s1").text())!="") winner = ( $("#s1").text());
    if(( $("#s4").text()) === ( $("#s5").text()) && ( $("#s4").text()) === ( $("#s6").text()) && ( $("#s4").text())!="") winner = ( $("#s4").text());
    if(( $("#s7").text()) === ( $("#s8").text()) && ( $("#s7").text()) === ( $("#s9").text()) && ( $("#s7").text())!="") winner = ( $("#s7").text());
    if(( $("#s1").text()) === ( $("#s4").text()) && ( $("#s1").text()) === ( $("#s7").text()) && ( $("#s1").text())!="") winner = ( $("#s1").text());
    if(( $("#s2").text()) === ( $("#s5").text()) && ( $("#s2").text()) === ( $("#s8").text()) && ( $("#s2").text())!="") winner = ( $("#s2").text());
    if(( $("#s3").text()) === ( $("#s6").text()) && ( $("#s3").text()) === ( $("#s9").text()) && ( $("#s3").text())!="") winner = ( $("#s3").text());
    if(( $("#s1").text()) === ( $("#s5").text()) && ( $("#s1").text()) === ( $("#s9").text()) && ( $("#s1").text())!="") winner = ( $("#s1").text());
    if(( $("#s3").text()) === ( $("#s5").text()) && ( $("#s3").text()) === ( $("#s7").text()) && ( $("#s3").text())!="") winner = ( $("#s3").text());

    if(winner!=""){
        isGameOver = 1;
        $(".turn").text("");
        if(winner==='X') $(".result").text("Player X Wins!");
        else $(".result").text("Player O Wins!");
    }
    
    if(winner==="" && ( $("#s1").text())!="" && ( $("#s2").text())!="" && ( $("#s3").text())!="" && ( $("#s4").text())!="" && ( $("#s5").text())!="" && ( $("#s6").text())!="" && ( $("#s7").text())!="" && ( $("#s8").text())!="" && ( $("#s9").text())!="" ){
        isGameOver = 1;
        $(".turn").text("");
        $(".result").text("Draw !");
    } 
};
