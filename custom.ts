/**
 * Use this file to define custom functions and blocks.
 * Read more at https://makecode.adafruit.com/blocks/custom
 */

/**
 * Custom blocks
 */
//% color=180 icon="\uf0ad" weight=90 block="Toolbox"
namespace com.github.maxwellb.toolbox {
    //% block="Do nothing"
    export function noop(): void {
        // no operation
    }

    //% block="Blink %pixeloffset|at a rate of %bpm|%repeat|times"
    export function blink(pixeloffset: number, bpm: number, repeat: number): void {
        const baseColor = light.pixelColor(pixeloffset);
        const steps = [0, 10, 10, 10, 40, 80, 120, 180, 240];
        const msPerBeat = 60000/bpm;
        const msPerHalfBeat = msPerBeat/2;
        const msPerStep = msPerHalfBeat/steps.length;
        const dark = light.rgb(0,0,0);

        light.setPixelColor(pixeloffset, dark);
        for (let i = 0; i < repeat; i++) {
            for (let j = 0; j < steps.length; j++) {
                light.setPixelColor(pixeloffset, color.fade(baseColor, steps[j]));
                basic.pause(msPerStep);
            }
            for (let j = 0; j < steps.length; j++) {
                light.setPixelColor(pixeloffset, color.fade(baseColor, steps[steps.length-j-1]));
                basic.pause(msPerStep);
            }
        }
        light.setPixelColor(pixeloffset, baseColor);
    }
}
