import sketch from 'sketch';
var fileHelper = {

    stringify: function(obj, prettyPrinted) {
        var prettySetting = prettyPrinted ? NSJSONWritingPrettyPrinted : 0,
            jsonData = NSJSONSerialization.dataWithJSONObject_options_error(obj, prettySetting, null);
        return NSString.alloc().initWithData_encoding(jsonData, NSUTF8StringEncoding);
    },

    saveJsonToFile: function(jsonObj, filePath) {
        return writeTextToFile(stringify(jsonObj, true), filePath);
    },
      
    readTextFromFile: function(filePath) {
        return NSString.stringWithContentsOfFile_encoding_error(filePath, NSUTF8StringEncoding, null);
    },
      
    jsonFromFile: function(filePath, mutable) {
        var data = NSData.dataWithContentsOfFile(filePath);
        var options = mutable == true ? NSJSONReadingMutableContainers : 0;
        return NSJSONSerialization.JSONObjectWithData_options_error(data, options, null);
    },

    writeTextToFile: function(text, filePath, type) {
        let json;
        if(type === "json") {
            try {
                json = JSON.parse(""+text);
            } catch(e){
                try {
                    json = this.stringify(text);
                } catch(e) {
                    sketch.UI.message(e);
                    return;
                }
            }
            text = this.stringify(text);
        }
        
      var errorPtr = MOPointer.alloc().init();
      try{
        var result = text.writeToFile_atomically_encoding_error(filePath, true, NSUTF8StringEncoding, errorPtr);
      } catch (e) {
        return e;
      }
      return result;
    }
}

export default fileHelper;