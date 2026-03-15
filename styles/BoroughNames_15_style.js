var size = 0;
var placement = 'point';

var style_BoroughNames_15 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("''");
    var labelFont = "15.600000000000001px \'Shree Devanagari 714\', sans-serif";
    var labelFill = "#505050";
    var bufferColor = "#ffffff";
    var bufferWidth = 0.8999999999999999;
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
