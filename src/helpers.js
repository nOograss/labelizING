var countRadioButton = 0;
var countNotif = 0;
var browserWindow;


var helpers = {
    init: function(bw) {
        browserWindow = bw;
    },
    sendMessage: function(type, message){
        try{
            browserWindow.webContents
            .executeJavaScript(type+'("'+message+'")')
            .then(res => {
            // do something with the result
            //sketch.UI.message("feedback sent:"+message);
            })
        } catch(e) {
            console.log(e, "error");
        }
    },
    sanitize : function (value) {
        return typeof value.replace === 'function' ? value.replace(/Ã©/g, 'é').replace(/Ã/g, 'à').replace(/â/g, "'")
        .replace(/à©/g, 'è').replace(/Â/g, '').replace(/à¹/g, 'ù').replace(/'¢/g, '\n').replace(/'¨/g, '\n'): '';
    },
    format: function(name){
        return name.replace(/ /g, '');
    },
    getNameForItem: function(name) {
        switch(name) {
            case 'buttons/flat/colored':
                return 'NextButton';
            case 'buttons/flat/gray':
                return 'BackButton';
            case '- common/forms/selectors/radio/unselected - enabled':
            case '- common/forms/selectors/radio/selected - enabled':
                countRadioButton += 1;
                return 'RadioButton_' + (countRadioButton > 1 ? countRadioButton.toString() : '');
            case '- common/notifications/info-blue-bg':
                countNotif += 1;
                return 'InfoBox_' + (countNotif > 1? countNotif.toString() : '');
            case '- common/notifications/warning-orange-background':
                countNotif += 1;
                return 'WarningBox_'+ (countNotif > 1? countNotif.toString() : '');;
            case '- common/content/buttons and links/link list':
                return 'Link';
            case '- common/content/buttons and links/button/flat main-colored':
                return 'DoneButton';
            case '- opened/miscellaneous/category tag/with arrow':
                return 'Arrow';
            case '- common/forms/dropdown/initial':
                return 'selectorDefaultLabel';
            
        }
        if(name.indexOf('- closed/content/account/account selector no amount') > -1){
            return "selectorItem";
        }
        return name;
      }
}

export default helpers;