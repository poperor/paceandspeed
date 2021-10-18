
export interface MinutesPerKm {
    min: number
    sec: number
}

export interface MinutesPerDistanceInMeters {
    min: number
    sec: number
    distance: number
}

export interface MinutesPerMiles {
    min: number
    sec: number
}

export interface MinutesPerDistanceInYards {
    min: number
    sec: number
    distance: number
}

export const toKph = (cannonicalKph: number): number => +cannonicalKph.toFixed(1)

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
