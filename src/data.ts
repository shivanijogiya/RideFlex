export type Powertrain = 'BEV' | 'CNG' | 'Hybrid';
export type MissionId = 'city' | 'airport' | 'highway' | 'shared' | 'premium';

export interface PowertrainSpec {
  id: Powertrain;
  label: string;
  accent: string;
  energyUnit: string;
  energyPrice: number;
  efficiency: number;
  price: number;
  maintenance: number;
  range: string;
  readiness: number;
  bestFor: string;
}

export interface Mission {
  id: MissionId;
  label: string;
  eyebrow: string;
  description: string;
  optimises: string[];
  powertrain: Powertrain;
  cabin: string;
  demand: number;
  color: string;
}

export const powertrains: PowertrainSpec[] = [
  { id: 'BEV', label: 'RideFlex-BEV', accent: '#2dd4bf', energyUnit: 'kWh', energyPrice: 14, efficiency: 6, price: 1250000, maintenance: 0.6, range: '300 km target', readiness: 78, bestFor: 'High-km metros + depot charging' },
  { id: 'CNG', label: 'RideFlex-CNG', accent: '#f5b942', energyUnit: 'kg', energyPrice: 87, efficiency: 25, price: 774000, maintenance: 1, range: '600+ km target', readiness: 92, bestFor: 'Strong CNG network + thin charging' },
  { id: 'Hybrid', label: 'RideFlex-Hybrid', accent: '#6d9cff', energyUnit: 'L', energyPrice: 102, efficiency: 23, price: 1090000, maintenance: 0.9, range: '600+ km target', readiness: 84, bestFor: 'Highway + Tier 2/3 coverage' },
];

export const missions: Mission[] = [
  { id: 'city', label: 'City commute', eyebrow: 'CITY MODE', description: 'More trips per hour, lower energy per kilometre, and traffic-aware routing.', optimises: ['₹ / km', 'Stop-start efficiency', 'Trip frequency'], powertrain: 'CNG', cabin: '4 passengers · light luggage', demand: 82, color: '#f5b942' },
  { id: 'airport', label: 'Airport', eyebrow: 'AIRPORT MODE', description: 'Luggage-aware matching with comfort and range before high-value demand.', optimises: ['Luggage fit', 'Airport demand', 'Comfort'], powertrain: 'BEV', cabin: '1–2 passengers · max luggage', demand: 68, color: '#2dd4bf' },
  { id: 'highway', label: 'Inter-city', eyebrow: 'HIGHWAY MODE', description: 'Range planning, driver fatigue support, and a predictable refuel or charge window.', optimises: ['Range', 'Fatigue management', 'Safety'], powertrain: 'Hybrid', cabin: '2–4 passengers · balanced luggage', demand: 54, color: '#6d9cff' },
  { id: 'shared', label: 'Shared mobility', eyebrow: 'SHARED MODE', description: 'Occupancy and pickup sequence work together to make every route count.', optimises: ['Occupancy', 'Pickup sequencing', 'Route efficiency'], powertrain: 'CNG', cabin: 'Flexible passenger split', demand: 74, color: '#ef7c62' },
  { id: 'premium', label: 'Premium', eyebrow: 'PREMIUM MODE', description: 'A calmer cabin, higher comfort thresholds, and deliberate airport or executive positioning.', optimises: ['Comfort', 'Cabin quality', 'Reliability'], powertrain: 'Hybrid', cabin: '2 passengers · comfort first', demand: 46, color: '#d4a76a' },
];

export const fleet = [
  { id: 'RF-024', city: 'Bengaluru', mission: 'Airport', powertrain: 'BEV' as Powertrain, battery: 82, health: 94, earnings: 2860, utilisation: 86, status: 'On mission', tone: 'teal' },
  { id: 'RF-031', city: 'Delhi NCR', mission: 'City', powertrain: 'CNG' as Powertrain, battery: 68, health: 91, earnings: 2480, utilisation: 92, status: 'On mission', tone: 'gold' },
  { id: 'RF-042', city: 'Pune', mission: 'Highway', powertrain: 'Hybrid' as Powertrain, battery: 74, health: 88, earnings: 2610, utilisation: 78, status: 'Refuelling', tone: 'blue' },
  { id: 'RF-057', city: 'Bengaluru', mission: 'Shared', powertrain: 'CNG' as Powertrain, battery: 46, health: 83, earnings: 2190, utilisation: 72, status: 'Service window', tone: 'red' },
  { id: 'RF-063', city: 'Mumbai', mission: 'City', powertrain: 'CNG' as Powertrain, battery: 59, health: 96, earnings: 2530, utilisation: 89, status: 'On mission', tone: 'gold' },
  { id: 'RF-078', city: 'Delhi NCR', mission: 'Premium', powertrain: 'Hybrid' as Powertrain, battery: 91, health: 90, earnings: 3120, utilisation: 64, status: 'Available', tone: 'blue' },
];

export const loopSteps = ['Demand', 'Mission', 'Vehicle config', 'Powertrain', 'Route', 'Ride', 'Earnings', 'Health', 'Second life'];

export const roadmap = [
  { phase: '01', years: '2027–28', title: 'Pilot', copy: 'Urban CNG / Hybrid with telematics and Health Passport in 2–3 metros.', color: '#f5b942' },
  { phase: '02', years: '2028–31', title: 'Scale', copy: 'Highway version, Tier-2 cities, finance partners and BEV pilots where economics work.', color: '#6d9cff' },
  { phase: '03', years: '2031–35', title: 'Full ecosystem', copy: 'MPV family, wider BEV adoption, Bio-CNG and battery second-life partnerships.', color: '#2dd4bf' },
];

export const sources = [
  'Maruti Suzuki Dzire Tour S: 382 L boot, CNG, 5-star Bharat NCAP reference',
  'MoRTH Motor Vehicle Aggregator Guidelines 2025: dead-mileage and fare context',
  'PAIGAM / IFAT March 2024 driver survey: earnings and duty-hour context',
  'All live calculations and fleet data are synthetic prototype values',
];
