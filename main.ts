basic.forever(function () {
    if (PlanetX_Basic.trackingSensor(PlanetX_Basic.DigitalRJPin.J2, PlanetX_Basic.TrackingStateType.Tracking_State_1)) {
        neZha.setMotorSpeed(neZha.MotorList.M1, -60)
        neZha.setMotorSpeed(neZha.MotorList.M2, -60)
    } else {
        if (PlanetX_Basic.ultrasoundSensor(PlanetX_Basic.DigitalRJPin.J1, PlanetX_Basic.Distance_Unit_List.Distance_Unit_cm) > 50) {
            neZha.setMotorSpeed(neZha.MotorList.M1, 60)
            neZha.setMotorSpeed(neZha.MotorList.M2, 60)
        } else {
            neZha.setServoSpeed(neZha.ServoList.S1, 60)
        }
    }
})
