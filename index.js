
const charLimit = 7;
const racks = document.getElementById("Rack").innerHTML;
var words = [];

var showRacks = function(rack){
    rack.map(racks=>
        {$("#bingos").append(`<li><span>${racks}</span></li>`);});
    
};
var genericGetRequest = function(){
   
};

$(document).ready(function(){
    
    var getWords = function(){
        var wordList = [];
        var currentWord = "";
        var loop = function(rack,depth){
            if(depth<7){
                for (let index = 0; index < rack.length; index++) {
                    var element = rack[index];
                    currentWord+=element;
                    wordList.push(currentWord);
                    loop(rack,depth+1);
                    currentWord = currentWord.slice(0,currentWord.length-1);
                    //double check the currWord is the right size idk if this work
                }
            };
        }
        loop(racks,0);
        console.log(wordList);
        rackList = JSON.stringify(wordList);
        console.log(wordList);
    
        return wordList;
    }
    words = getWords();

    
});




$("#generateRack").on('click', function(){
    console.log("index.php"+"?"+"words=['"+words+"']");
    words.forEach(element => {
        element = 
    });
    $.ajax({
        url:"index.php"+"?"+"words=["+words+"]",
        method:"GET",
        success:data=>{
            console.log("success");
            console.log(data);
            showRacks(data);
        }
    });
});
