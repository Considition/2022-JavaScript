﻿const {isUndefined} = require("axios/lib/utils");

let bagType_price = [1.7, 1.75, 6, 25, 200];
let bagType_co2_transport = [3.0, 4.2, 1.8, 3.6, 12.0];
let bagType_co2_production = [30, 24, 36, 42, 60];
let solution = {};

/**
 * Tries to solve the given map.
 * @param   map             The chosen map.
 * @param   bagType         The chosen bag type.
 * @param   days            Days to run simulation. Should be 365 days unless it is a training map, where it is 31.
 * @returns A solution with bag orders per day and other attributes.
 */

function solve(map, bagType, days) {
    solution.recycleRefundChoice = true
    solution.bagPrice = 10
    solution.refundAmount = 1
    solution.bagType = 1
    
    solution.orders = []
    for (let day = 0; day < days; day++) {
        solution.orders.push(wasteMoney(bagType, map.companyBudget))
    }

    return solution

}

// Solution 1: "Spend all money day 1"
function wasteMoney(bagtype, companyBudget) {
    return Math.floor(companyBudget / bagType_price[bagtype]);
}

// Solution 2: "Spend equally money every day"
function splitMoney(bagtype, companyBudget, days) {
    return Math.floor(companyBudget / bagType_price[bagtype] / days);
}

// Solution 3: "Everyone get one bag every day"
function holdMoney(bagtype, companyBudget, population, days) {
    return Math.floor(companyBudget / bagType_price[bagtype] / population / days);
}

module.exports = {
    solve
}
