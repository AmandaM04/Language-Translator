function translate_this(language) {
var chinese_dictionary = {"merry":"快活", "christmas":"圣诞", "and":"和", "happy":"快乐", "new":"新", "year":"年"};
var spanish_dictionary = {"merry":"alegre", "christmas":"Navidad", "and":"y", "happy":"contento", "new":"nuevo", "year":"año"};
var french_dictionary = {"merry":"joyeux", "christmas":"Noël", "and":"et", "happy":"content", "new":"Nouveau", "year":"an"};
var allowed_words = ["merry", "christmas", "and", "happy", "new", "year"];

//get input text
var input_text = document.getElementById("input_text").value;
var words = input_text.split(" ");
var num_words = words.length;

//clear error 
document.getElementById("error_text").innerHTML = "";

//make sure text is valid inside dictionary
for (i=0; i<num_words; i++) {
    //if text isn't part of predefined dict, return an error
    if (allowed_words.indexOf(words[i]) == -1){
    document.getElementById("error_text").innerHTML = "Invalid Words Entered.";
    return;
    }
}

//translate based on selected language
var translation = "";
var languageIndex = 0;
for (i=0; i<num_words; i++) {
    switch(language) {
        case "chinese":
            translation += chinese_dictionary[words[i]] += " ";
            languageIndex = 0;
        break;
        case "spanish":
            translation += spanish_dictionary[words[i]] += " ";
            languageIndex = 1;
        break;
        case "french":
            translation += french_dictionary[words[i]] += " ";
            languageIndex = 3;
        break;
    }
}

//show output in desired language
document.getElementById("output_text").innerHTML = translation;


//text to speech
// speak(translation);
   var languageCode = ["zh-CN","es-ES","fr-FR"];
   var languageSelected = languageCode[languageIndex];
   speak(translation,languageSelected);
 
// say a message
function speak(text, lang, callback) {
    var u = new SpeechSynthesisUtterance();
    u.text = text;
    u.lang = lang;
 
    u.onend = function () {
        if (callback) {
            callback();
        }
    };
 
    u.onerror = function (e) {
        if (callback) {
            callback(e);
        }
    };
 
    speechSynthesis.speak(u);
}



//lang code for chinese: zh or zh-CN
//lang code for spanish: es or es-MX
//lang code for french: fr or fr-FR

//http://www.lingoes.net/en/translator/langcode.htm








}
