radio.onReceivedString(function (receivedString) {
    basic.showString(receivedString)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("hi Emmett")
})
radio.setGroup(10)
basic.forever(function () {
	
})
