import { Dispatch, SetStateAction } from "react"

export interface SourceProps {
    setCannonicalKph: Dispatch<SetStateAction<number>>
}

export interface ResultProps {
    cannonicalKph: number
}

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

const KphMphRatio = 1.60934
const YardsPerMile = 1760

export const fromKph = (kph: number) => kph 

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

export const fromMph = (mph: number): number => mph * KphMphRatio

export const fromMinutesPerMile = (minPerMile: MinutesPerMile): number => {
    const sec = minPerMile.min * 60 + minPerMile.sec
    if (!sec) {
        return 0
    } else {
        return (3600 / sec) * KphMphRatio
    }
}

export const fromMinutesPerDistanceInYards = (minutesPerYards: MinutesPerDistanceInYards): number => {
    const sec = minutesPerYards.min * 60 + minutesPerYards.sec
    if (!minutesPerYards.distance || !sec) {
        return 0;
    }
    const distancePerMile = minutesPerYards.distance / YardsPerMile
    return (3600 / sec) * distancePerMile * KphMphRatio
}

export const toKph = (cannonicalKph: number): number => +cannonicalKph.toFixed(1)

export const toMinutesPerKm = (kph: number): MinutesPerKm | undefined => {
    if (!kph) {
        return undefined
    }
    const secPerKm = 3600 / kph
    return {
        min: Math.floor(secPerKm / 60),
        sec: +(secPerKm % 60).toFixed(0),
    }
}

export const toMinutesPerDistanceInMeters = (kph: number, distance: number): MinutesPerDistanceInMeters => {
    const secPerDistance = (3600 / kph) * (distance / 1000) 
    return {
        min: Math.floor(secPerDistance / 60),
        sec: +(secPerDistance % 60).toFixed(0),
        distance
    }
}

export const toMph = (cannonicalKph: number): number => cannonicalKph / KphMphRatio

export const toMinutesPerMile = (kph: number): MinutesPerMile => {
    const secPerMile = (3600 / kph) * KphMphRatio
    return {
        min: Math.floor(secPerMile / 60),
        sec: +(secPerMile % 60).toFixed(0),
    }
}

export const toMinutesPerDistanceInYards = (kph: number, distance: number): MinutesPerDistanceInYards => {
    const mph = kph / KphMphRatio
    const secPerDistance = (2.04545455 / mph) * distance
    return {
        min: Math.floor(secPerDistance / 60),
        sec: +(secPerDistance % 60).toFixed(0),
        distance
    }
}
