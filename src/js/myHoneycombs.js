import $ from 'jquery'
const honeycombs = function() {
    $('.honeycombs').honeycombs({
        combWidth:170,  // width of the hexagon
        margin: 0,      // spacing between hexagon
        threshold: 3    // hide placeholder hexagons when number of hexagons in a row is more than the threshold number
    });
};

export default honeycombs;
