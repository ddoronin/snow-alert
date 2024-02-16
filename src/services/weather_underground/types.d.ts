
/*
    The Tomorrow.io REST Weather API provides the following information:
    https://docs.tomorrow.io/reference/data-layers-core
*/
export interface Forecast {
    timelines: {
        daily: TimeValues[],
        hourly: TimeValues[]
    }
}

type ISODateTime = string

export interface TimeValues {
    time: ISODateTime,
    values: Core
}

export interface Core {
    /* 
        The measure of the intensity of snowfall by calculating the amount of snow that would fall over a given interval of time if the snow intensity were constant over that time period.
        The rate is expressed in terms of length (depth) per unit time, in millimeters per hour, or inches per hour.

        mm/hr or in/hr
    */
    snowIntensity: number
}
