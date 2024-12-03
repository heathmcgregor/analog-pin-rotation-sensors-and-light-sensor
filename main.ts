basic.forever(function () {
    if (bosonKit.bosonAnalogRead(AnalogPin.P2, bosonKit.BosonSensorAnalogRead.BosonRotation) < 125) {
        basic.showIcon(IconNames.Yes)
    } else {
        basic.showIcon(IconNames.No)
    }
    basic.pause(1000)
    if (bosonKit.bosonAnalogRead(AnalogPin.P0, bosonKit.BosonSensorAnalogRead.BosonLightIntensity) < 125) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
