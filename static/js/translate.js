var en = {
    "title": "this is a title",
    "button": "Free try"
}
var es = {
    "title": "este es un titulo",
    "button": "prueba gratis"
}
var currentLanguage = "en"
$.i18n.load(en)

$('#btn')._t("button")

$('#btn').click(function(event){
    $.i18n.unload();
    console.log(currentLanguage)
    if(currentLanguage == "en"){
        currentLanguage = "es";
        $.i18n.load(es);
    }
    else{
        currentLanguage = "en";
        $.i18n.load(en)
    }
    $('#btn')._t("button");
});