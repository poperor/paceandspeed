import {toKph} from './conversion'

test('rounds kph correctly', () => {
    expect(toKph(13.46576)).toBe(13.5)
})

test('rounds kph without integer without .0 at end', () => {
    expect(toKph(13)).toBe(13)
})

test('rounds kph without integer without .0 at end', () => {
    expect(toKph(13.0)).toBe(13)
})