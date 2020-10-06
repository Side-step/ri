// required jquery
// how to use
// language_load("test", "ko"); // file name, language code
function language_load(lang_file, lang_param){
    var lang = lang_param
    var jsonLocation = '../lang/'+lang_file+'_' + lang + '.json';

    $.getJSON(jsonLocation, function (data){
        var lang_items = $(".lang_properties");
       $.each(data, function (idx, item) {
           $.each(lang_items, function (sub_idx, sub_item) {
                if ($(sub_item).data("langid") == item.id){
                    $(sub_item).html(item.text);
                }
           });
       })
    });
}
// how to use
// get_commonlang("common.popup1","ko", function (data){ alert(data);});    //common id, language code, call back
function get_commonlang(id, lang_param, callback) {
    var lang = lang_param
    var jsonLocation = '../lang/common_' + lang + '.json';
    var result = "";
    $.getJSON(jsonLocation).done(function (data){
        $.each(data, function (idx, item) {
            if (id == item.id){
                result = item.text;
                callback(result);
            }
       })
    });
}

function set_lang(lang) {
    localStorage.setItem("language", lang);
    location.reload();
}

function get_lang() {
    var lang = localStorage.getItem("language");
    if (lang == undefined || lang == null || lang == '') {
        lang = 'en';
    }
    return lang;
}