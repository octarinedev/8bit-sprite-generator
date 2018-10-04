/** BLOCK_SIZE is the size in pixels of each block
 * SPRITE_SPACING is the distance in pixels between each sprite
 * SPRITE_SIZE is the number of blocks horizontally and vertically that make up a sprite
 * NUM_SPRITES_VERT is the number of sprites we want to draw vertically
 * NUM_SPRITES_HORI is the number of sprites we want to draw horizontally
 */

var BLOCK_SIZE = 10;
var SPRITE_SPACING = 32;
var SPRITE_SIZE = 7;
var NUM_SPRITES_VERT = 1;
var NUM_SPRITES_HORI = 1;

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}


function redraw() {
    for (var j = 0; j < NUM_SPRITES_VERT; j++) {
        for (var i = 0; i < NUM_SPRITES_HORI; i++) {
            var r = getRandomInt(0, 256);
            var g = getRandomInt(0, 256);
            var b = getRandomInt(0, 256);
            var c0 = rgbToHex(r, g, b);
            var c1 = '#2C343D';//rgbToHex(0, 0, 0);
            var toMirror = new Array(Math.round(SPRITE_SIZE * SPRITE_SIZE / 2));

            for (var y = 0; y < SPRITE_SIZE; y++) {
                for (var x = 0; x < SPRITE_SIZE; x++) {
                    var pix = 1;
                    var absoluteX = i * (BLOCK_SIZE * SPRITE_SIZE + SPRITE_SPACING);
                    var absoluteY = j * (BLOCK_SIZE * SPRITE_SIZE + SPRITE_SPACING);
                    var toDrawX = absoluteX + x * BLOCK_SIZE;
                    var toDrawY = absoluteY + y * BLOCK_SIZE;
                    var halfSize = SPRITE_SIZE / 2;

                    if (x < halfSize) {
                        pix = getRandomInt(0, 2);
                        toMirror[x * SPRITE_SIZE + y] = pix;
                    } else if (x == halfSize) {
                        pix = getRandomInt(0, 2);
                    } else {
                        pix = toMirror[(SPRITE_SIZE - 1 - x) * SPRITE_SIZE + y];
                    }

                    if (pix === 0) {
                        ctx.fillStyle = c0;
                        //stroke(c0);
                        //fill(c0);
                    } else {
                        ctx.fillStyle = c1;
                    }
                    ctx.fillRect(toDrawX, toDrawY, BLOCK_SIZE, BLOCK_SIZE);
                    //rect(toDrawX, toDrawY, BLOCK_SIZE, BLOCK_SIZE);
                }
            }
        }
    }
}
