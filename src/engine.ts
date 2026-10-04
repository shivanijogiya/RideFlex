import { powertrains, type Powertrain } from './data';

export interface EconomicsInputs {
  dailyKm: number;
  days: number;
  farePerKm: number;
  deadKmShare: number;
  commission: number;
  hours: number;
}

export const monthlyEmi = (price: number): number => Math.round((price * 0.78 * (0.1 / 12) * Math.pow(1 + 0.1 / 12, 60)) / (Math.pow(1 + 0.1 / 12, 60) - 1));

export const economicsFor = (powertrain: Powertrain, input: EconomicsInputs) => {
  const spec = powertrains.find((item) => item.id === powertrain) ?? powertrains[1];
  const monthlyKm = input.dailyKm * input.days;
  const energy = Math.round((monthlyKm / spec.efficiency) * spec.energyPrice);
  const maintenance = Math.round(monthlyKm * spec.maintenance);
  const emi = monthlyEmi(spec.price);
  const insurance = 3000;
  const gross = Math.round(monthlyKm * input.farePerKm * 0.58);
  const downtime = Math.round(monthlyKm * 0.04 * (input.farePerKm * 0.58));
  const totalCost = energy + maintenance + emi + insurance + downtime;
  const net = gross - totalCost;
  return { monthlyKm, energy, maintenance, emi, insurance, downtime, totalCost, gross, net, costPerKm: totalCost / Math.max(monthlyKm, 1), netPerHour: net / Math.max(input.days * input.hours, 1) };
};

export const recommendPowertrain = (dailyKm: number, charging: number, cng: number, highway: boolean): Powertrain => {
  if (highway || charging < 45) return cng > 65 ? 'CNG' : 'Hybrid';
  if (dailyKm > 220 && charging > 75) return 'BEV';
  return cng > charging ? 'CNG' : 'BEV';
};

export const rideEconomics = (fare: number, pickup: number, trip: number, efficiency: number, energyPrice: number, maintenance: number, commission: number, minutes: number) => {
  const totalKm = pickup + trip;
  const energyCost = (totalKm / efficiency) * energyPrice;
  const maintenanceCost = totalKm * maintenance;
  const platformCost = fare * commission;
  const net = fare - energyCost - maintenanceCost - platformCost;
  const hourly = net / (minutes / 60);
  const score = Math.max(0, Math.min(100, Math.round((hourly / 320) * 100)));
  return { totalKm, energyCost, maintenanceCost, platformCost, net, hourly, score };
};

export const comfortScore = (smoothness: number, braking: number, cornering: number, temperature: number) => Math.round(smoothness * 0.3 + braking * 0.25 + cornering * 0.2 + temperature * 0.25);
export const fatigueScore = (hours: number, timeOfDay: number, trips: number, smoothness: number) => Math.max(0, Math.min(100, Math.round(100 - hours * 4.5 - timeOfDay * 0.18 - trips * 1.1 + smoothness * 0.18)));
export const healthScore = (battery: number, engine: number, service: number, accident: number) => Math.round(battery * 0.35 + engine * 0.3 + service * 0.25 + accident * 0.1);
export const residualValue = (age: number, annualKm: number, battery: number, service: number, accidents: number) => Math.max(18, Math.min(86, Math.round(86 - age * 7 - annualKm / 26000 + battery * 0.08 + service * 0.12 - accidents * 14)));
