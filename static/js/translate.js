var en = {
    "title": "Trustify",
    "subtitle": "Manage, emit, sign and certify any step across business process.",
    "productTitle1": "The very first decentralized CA, fully integrated to your own business process",
    "productDescription1": "Create, manage, edit documents of facts involved across your own business process. Using the Ethereum Main Network, you can cartifu every significant step, across his entire cycle. Let's minimize the posibility on your business process!",
    "productTitle2": "The Decentralized Custody service platform is here!",
    "productDescription2": "We provide a fault tolerance service storage, securely indexed by the power of Ethereum Main Network.",
    "button": "Free try"
}
var es = {
    "title": "Trustify",
    "subtitle": "Manage, emit, sign and certify any step across business process.",
    "productTitle1": "The very first decentralized CA, fully integrated to your own business process",
    "productDescription1": "Create, manage, edit documents of facts involved across your own business process. Using the Ethereum Main Network, you can cartifu every significant step, across his entire cycle. Let's minimize the posibility on your business process!",
    "productTitle2": "The Decentralized Custody service platform is here!",
    "productDescription2": "We provide a fault tolerance service storage, securely indexed by the power of Ethereum Main Network.",
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
    $('#productTitle1')._t('productTitle1')
    $('#productDescription1')._t('productDescription1')
    $('#productTitle2')._t('productTitle1')
    $('#productDescription2')._t('productDescription1')
}