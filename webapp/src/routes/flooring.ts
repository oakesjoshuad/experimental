const sum = function (...args: number[]): number {
    return args.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
};

const sysf = function (...args: number[]): number {
    let subtotal = sum(...args);
    return subtotal * 9;
};

const sfsy = function (...args: number[]): number {
    let subtotal = sum(...args);
    return subtotal / 9;
}

const baseAdhesive = function (lf: number, ea: number = 120): number {
    return Math.ceil((lf / ea) * 2);
}

const cptAdhesive = function (sf: number): number {
    let gallons = sf / 350;
    return gallons / 4;
};

const hourlyRateAvg = (drate: number, dhours: number, nrate: number, nhours: number): number => {
    return ((dhours * drate) + (nhours * nrate)) / (dhours + nhours);
}

const prevailingEstimate = (cost: number, dhours: number = 4, nhours: number = 4): void => {
    const regAvg = hourlyRateAvg(regularDay, dhours, regularNight, nhours);
    const prevAvg = hourlyRateAvg(prevailingDay, dhours, prevailingNight, nhours);
    const allottedHours = cost / regAvg;
    const totalCost = allottedHours * prevAvg;
    console.log(`Total labor cost: ${totalCost.toFixed(2)}`);
    console.log(`Prevailing Labor Cost: ${(totalCost - cost).toFixed(2)}`)
};

const featherFinish = (sf: number): number => {
    return Math.ceil(sf / ardexFeatherFinishSpreadRate);
};

const quit = () => {
    process.exit();
}

const prevailingNight = 96.61;
const prevailingDay = 71.8;
const regularNight = 50;
const regularDay = 45;
const ardexFeatherFinishSpreadRate = 50;

export { };