import {toKph, fromMinutesPerKm, fromMinutesPerDistanceInMeters} from './conversion'

test('rounds kph correctly', () => {
    expect(toKph(13.46576)).toBe(13.5)
})

test('rounds kph without integer without .0 at end', () => {
    expect(toKph(13)).toBe(13)
})

test('rounds kph without integer without .0 at end', () => {
    expect(toKph(13.0)).toBe(13)
})

test('rounds kph without integer without .0 at end', () => {
    expect(toKph(0)).toBe(0)
})

test('6 min per km to be 10 kph', () => {
    expect(fromMinutesPerKm({min:6, sec: 0})).toBe(10)
})

test('4 min 30 per km to be 13.3333... kph', () => {
    expect(fromMinutesPerKm({min:4, sec: 30})).toBe(13.333333333333334)
})

test('0 min 0 per km to be 0 kph', () => {
    expect(fromMinutesPerKm({min:0, sec: 0})).toBe(0)
})

test('3 min per 500 m to be 10 kph', () => {
    expect(fromMinutesPerDistanceInMeters({min:3, sec: 0, distance: 500})).toBe(10)
})

test('4 min 30 per 0 m to be 0 kph', () => {
    expect(fromMinutesPerDistanceInMeters({min:4, sec: 30, distance: 0})).toBe(0)
})

test('0 min 0 per km to be 0 kph', () => {
    expect(fromMinutesPerDistanceInMeters({min:0, sec: 0, distance: 500})).toBe(0)
})

test('2 min 30 per km to be 13.1 kph (Bislett !)', () => {
    expect(+fromMinutesPerDistanceInMeters({min:2, sec: 30, distance: 546}).toFixed(1)).toBe(13.1)
})

