var en = {
    "title": "Our Analysis is your financial results",
    "subtitle": "Mombo is a HTML5 template based on Sass and Bootstrap 4 with modern and creative multipurpose design you can use it as a startups.",
    "button": "Free try"
}
var es = {
    "title": "Nuestro Análisis es tu resultado financiero",
    "subtitle": "Mombo es una plantilla HTML5 basado en Sass y Bootstrap 4 con un diseño multipropósito moderno y creativo que puedes usar para tu startups.",
    "button": "prueba gratis"
}
var currentLanguage = "en"
$.i18n.load(en)

loadTranslates();

$('#btn-demo').click(function(event){
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
    loadTranslates();
});

function loadTranslates(){
    $('#btn-demo')._t("button")
    $('#slogan')._t("title");
    $('#description')._t('subtitle')
}