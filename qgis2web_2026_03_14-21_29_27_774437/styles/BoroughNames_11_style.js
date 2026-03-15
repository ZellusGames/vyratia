var size = 0;
var placement = 'point';

var style_BoroughNames_11 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("''");
    var labelFont = "18.2px \'Songti SC\', sans-serif";
    var labelFill = "#505050";
    var bufferColor = "#cdcdcd";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("BoroughName") !== null) {
        labelText = String(feature.get("BoroughName"));
    }
    
    var style = [ new ol.style.Style({
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor, bufferWidth)
    })];;

    return style;
};
