import { Months } from "./MonthData"

/**
 * This determines whether or not a month is active or inactive. Inactive months can be viewed, but will show no data.
 */
export const activeMonths: Record<Months, {active: boolean}> = {
    'January': {
        active: true
    },
    'Februrary': {
        active: false
    },
    'March': {
        active: false
    },
    'April': {
        active: false
    },
    'May': {
        active: false
    },
    'June': {
        active: false
    },
    'July': {
        active: false
    },
    'August': {
        active: false
    },
    'September': {
        active: false
    },
    'October': {
        active: false
    },
    'November': {
        active: false
    },
    'December': {
        active: false
    }
}