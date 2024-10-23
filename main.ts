basic.forever(function () {
    // hola iñaki!!!!!!
    if (!(PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.TrackingStateType.Tracking_State_3))) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -20)
        neZha.setMotorSpeed(neZha.MotorList.M4, 20)
    } else {
        if (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) > 40) {
            neZha.setMotorSpeed(neZha.MotorList.M1, 30)
            neZha.setMotorSpeed(neZha.MotorList.M4, 40)
        } else {
            neZha.setMotorSpeed(neZha.MotorList.M1, 40)
            neZha.setMotorSpeed(neZha.MotorList.M4, -40)
        }
    }
})
