import { eASICModel } from './enum/eASICModel';

export interface ISystemInfo {

    flipscreen: number;
    invertscreen: number;
    power: number,
    voltage: number,
    current: number,
    fanSpeed: number,
    temp: number,
    hashRate: number,
    bestDiff: string,
    freeHeap: number,
    coreVoltage: number,
    ssid: string,
    wifiPass: string,
    wifiStatus: string,
    sharesAccepted: number,
    sharesRejected: number,
    uptimeSeconds: number,
    ASICModel: eASICModel,
    stratumURL: string,
    stratumPort: number,
    stratumUser: string,
    frequency: number,
    version: string,
    invertfanpolarity: number,
    autofanspeed: number,
    fanspeed: number,
    coreVoltageActual: number
}