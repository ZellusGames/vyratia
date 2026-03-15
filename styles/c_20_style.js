var size = 0;
var placement = 'point';

var style_c_20 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "7.800000000000001px \'Open Sans\', sans-serif";
    var labelFill = "#ffffff";
    var bufferColor = "#fafafa";
    var bufferWidth = 0.6000000000000001;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("hname") !== null) {
        labelText = String(feature.get("hname"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [428, 392],
                  scale: 0.04439252336448598,
                  anchor: [214.0, 196.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Screenshot_2026-03-15_at_11.17.59_AM-removebg-preview.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
