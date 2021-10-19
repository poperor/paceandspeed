import { toKph, fromMinutesPerKm, fromMinutesPerDistanceInMeters, fromMph, fromMinutesPerMile, fromMinutesPerDistanceInYards, toMinutesPerKm } from './conversion'

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
    expect(fromMinutesPerKm({ min: 6, sec: 0 })).toBe(10)
})

test('4 min 30 per km to be 13.3333... kph', () => {
    expect(fromMinutesPerKm({ min: 4, sec: 30 })).toBe(13.333333333333334)
})

test('0 min 0 per km to be 0 kph', () => {
    expect(fromMinutesPerKm({ min: 0, sec: 0 })).toBe(0)
})

test('3 min per 500 m to be 10 kph', () => {
    expect(fromMinutesPerDistanceInMeters({ min: 3, sec: 0, distance: 500 })).toBe(10)
})

test('4 min 30 per 0 m to be 0 kph', () => {
    expect(fromMinutesPerDistanceInMeters({ min: 4, sec: 30, distance: 0 })).toBe(0)
})

test('0 min 0 per km to be 0 kph', () => {
    expect(fromMinutesPerDistanceInMeters({ min: 0, sec: 0, distance: 500 })).toBe(0)
})

test('2 min 30 per km to be 13.1 kph (Bislett !)', () => {
    expect(+fromMinutesPerDistanceInMeters({ min: 2, sec: 30, distance: 546 }).toFixed(1)).toBe(13.1)
})

test('6.9 mph to be 11.10 rounded', () => {
    expect(+fromMph(6.9).toFixed(2)).toBe(11.10)
})

test('7 min per miles to be 13.79 kph rounded', () => {
    expect(+fromMinutesPerMile({ min: 7, sec: 0 }).toFixed(2)).toBe(13.79)
})

test('0 min 0 per miles to be 0 kph', () => {
    expect(fromMinutesPerMile({ min: 0, sec: 0 })).toBe(0)
})

test('7 min per 1760 yards to be 13.79 rounded', () => {
    expect(+fromMinutesPerDistanceInYards({ min: 7, sec: 0, distance: 1760 }).toFixed(2)).toBe(13.79)
})

test('13.333333333333334 kph to 4 min 30 sec per km', () => {
    expect(toMinutesPerKm(13.333333333333334)).toStrictEqual({min: 4, sec: 30})
})