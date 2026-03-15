var size = 0;
var placement = 'point';

var style_ocatianhighwaylabels_19 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("");
    var labelFont = "5.2px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "#fafafa";
    var bufferWidth = 3.0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'point';
    if (feature.get("Road") !== null) {
        labelText = String(feature.get("Road"));
    }
    var style = [ new ol.style.Style({
        image: new ol.style.Icon({
                  imgSize: [380, 380],
                  scale: 0.06842105263157895,
                  anchor: [190.0, 190.0],
                  anchorXUnits: "pixels",
                  anchorYUnits: "pixels",
                  rotation: 0.0,
                  src: "styles/Screenshot_2026-03-15_at_11.10.13_AM-removebg-preview.svg"
            }),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];

    return style;
};
