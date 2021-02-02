// Set to true to test
if (false) {
    com.github.maxwellb.toolbox.noop()
    pause(2000)
    light.setAll(0xff8000)
    pause(1000)
    com.github.maxwellb.toolbox.blink(1, 120, 10)
    pause(2000)
    light.setAll(0x000000)
    pause(1000)
}
