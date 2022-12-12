"use strict";
var Days;
(function (Days) {
    Days[Days["mon"] = 0] = "mon";
    Days[Days["tue"] = 1] = "tue";
    Days[Days["wed"] = 2] = "wed";
    Days[Days["thu"] = 3] = "thu";
    Days[Days["fri"] = 4] = "fri";
    Days[Days["sat"] = 5] = "sat";
    Days[Days["sun"] = 6] = "sun";
})(Days || (Days = {}));
// let whichdays : Days;
//  whichdays =Days.mon;
//  console.log(whichdays==="mon");
function Fdays(day) {
    return day;
}
console.log(Fdays(Days.tue));
