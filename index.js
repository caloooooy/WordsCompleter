var textArea = document.getElementById("textArea");


textArea.onkeyup = function() {
    var word = textArea.value;
   
    var word = getLastWord(textArea.value);
    if(wordMatches(word))
    {
        textArea.value= replaceLastWord(textArea.value, word);
    }
   

}
function getLastWord(text){
    var result = "";
    for(var i = text.length; i > 0; i--){
        if(text.substring(i,i-1) != " "){
            result = text.substring(i,i-1)+result;
        }
        else {
            break;
        }
    }
    return result;
}

var keyWord = ["mag", "po", "mata"];
var availableWords = ["maganda", "pogi", "matalino"];

function wordMatches(text){
    text = text.toLowerCase();
    for(var i = 0; i < keyWord.length; i++){
        if (text.substring(0,keyWord[i].length) == keyWord[i])
        {
            return true;
        }
    }
    return false;
}
function replaceLastWord(text, word)
{
    var result ="";
    if(onlyLetterNotSpace(text))
    {
        result = wordInstead(word);
        result = result.substring(0,1).toUpperCase() + result.substring(1,result.length);

    }
    else
    {
        result = text.substring(0,text.length-word.length)+ wordInstead(word);
    }
    
    return result
}

function wordInstead(word)
{
    word = word.toLowerCase();
    for(var i = 0; i < keyWord.length; i++)
    {
        if (word.substring(0,keyWord[i].length)== keyWord[i])
        {
            return availableWords[i];
        }
    }
}
function onlyLetterNotSpace(text)
{
    var result = true;
    for(var i = 0; i < text.length; i++)
    {
        if (text.substring(i,i+1) != " ")
        { 
            result = true;
        }
        else
        {
            result = false;
            break;
        }
    }
    return result;
}