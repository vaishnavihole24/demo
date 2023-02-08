var censoreWords=["sad","bad","mad"];
var customCensoreWords=[];
function censor(inStr)
{
    for(idx in censoreWords){
        inStr=inStr.replace(censoreWord[idx],"****");     
    }
    for (idx in customCensoreWords){
        inStr=inStr.replace(customeCensoreWord[idx],"****");
    }
    return inStr;
}
function addCensoreWord(word)
{
    customCensoreWords.push(word);
}
function getCensoreWords(){
    return censoreWords.concat(customCensoreWords);
}
exports.censor=censor;
exports.addCensoreWord=addCensoreWord;
exports.getCensoreWords=getCensoreWords;