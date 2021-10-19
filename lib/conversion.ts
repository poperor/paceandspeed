
export interface MinutesPerKm {
    min: number
    sec: number
}

export interface MinutesPerDistanceInMeters {
    min: number
    sec: number
    distance: number
}

export interface MinutesPerMile {
    min: number
    sec: number
}

export interface MinutesPerDistanceInYards {
    min: number
    sec: number
    distance: number
}

export const fromMinutesPerKm = (minPerKm: MinutesPerKm): number => {
    const sec = minPerKm.min * 60 + minPerKm.sec
    if (!sec) {
        return 0
    } else {
        return (3600 / sec)
    }
}

export const fromMinutesPerDistanceInMeters = (minutesPerMeters: MinutesPerDistanceInMeters): number => {
    const sec = minutesPerMeters.min * 60 + minutesPerMeters.sec
    if (!minutesPerMeters.distance || !sec) {
        return 0;
    }
    const distancePerKm = minutesPerMeters.distance / 1000
    return (3600 / sec) * distancePerKm
}

export const fromMph = (mph: number): number => mph * 1.60934

export const fromMinutesPerMile = (minPerMile: MinutesPerMile): number => {
    const sec = minPerMile.min * 60 + minPerMile.sec
    if (!sec) {
        return 0
    } else {
        return (3600 / sec) * 1.60934
    }
}

export const fromMinutesPerDistanceInYards = (minutesPerYards: MinutesPerDistanceInYards): number => {
    const sec = minutesPerYards.min * 60 + minutesPerYards.sec
    if (!minutesPerYards.distance || !sec) {
        return 0;
    }
    const distancePerMile = minutesPerYards.distance / 1760
    return (3600 / sec) * distancePerMile * 1.60934
}

export const toKph = (cannonicalKph: number): number => +cannonicalKph.toFixed(1)

export const toMinutesPerKm = (kph: number): MinutesPerKm => {
    const secPerKm = 3600 / kph
    return {
        min: Math.floor(secPerKm / 60),
        sec: +(secPerKm % 60).toFixed(0),
    }
}
