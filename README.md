# 🚗 ProofDrive — RideFlex

### Engineering the Ideal Ride-Service Vehicle for India 2035

> **One Vehicle. Multiple Missions. Self-Optimizing Economics.**

ProofDrive is a digital-first ride-service vehicle concept designed for **India 2035**, built around one central objective:

**Maximize driver net earnings per duty hour while improving passenger experience, fleet profitability, vehicle utilization, and lifecycle value.**

Instead of designing a vehicle only around its hardware or powertrain, ProofDrive treats the ride-service vehicle as a **commercial mobility asset** whose operation continuously adapts to the mission.

---

## 🌐 Overview

Ride-service vehicles in India operate very differently from private cars.

A commercial vehicle may experience:

* High daily utilization
* Significant stop-and-go city driving
* Airport and highway trips
* Dead kilometres between rides
* Multiple drivers over its lifetime
* High maintenance frequency
* Energy-price fluctuations
* Financing and resale uncertainty
* Passenger comfort and rating pressure
* Driver fatigue and long duty hours

ProofDrive addresses these challenges through a combination of:

1. **Adaptive Mission Intelligence**
2. **Revenue & Earnings Intelligence**
3. **Powertrain Selection**
4. **Mission-Aware Cabin**
5. **Vehicle Health Passport**
6. **Predictive Maintenance**
7. **Fleet Digital Twin**
8. **Lifecycle & Resale Intelligence**

The platform is designed around a continuous optimization loop:

```text
DEMAND
   ↓
MISSION
   ↓
POWERTRAIN
   ↓
ROUTE
   ↓
RIDE
   ↓
EARNINGS
   ↓
VEHICLE HEALTH
   ↓
RESALE
   ↓
SECOND LIFE
   ↓
BACK TO DEMAND
```

---

# 🎯 Problem

The traditional taxi/car model generally optimizes for vehicle purchase price, fuel efficiency, or passenger comfort independently.

However, fleet economics depend on much more than fuel consumption.

A ride-service vehicle must answer questions such as:

* Which powertrain makes the most sense in this city?
* Should this vehicle accept this ride?
* How much will this ride actually contribute to driver earnings?
* How expensive is the dead kilometre required to reach the passenger?
* Should the vehicle refuel/charge before accepting another trip?
* When should maintenance be performed?
* Is the vehicle still financially viable after years of commercial usage?
* What is its expected residual value?
* When should the vehicle move to a lower-intensity use case?

ProofDrive turns these decisions into a connected intelligence system.

---

# 💡 Core Idea

## Driver Net Earnings Per Duty Hour

The primary economic metric is:

```text
Driver Net Earnings / Duty Hour
=
(Fare Driver Keeps
 - Energy Cost
 - EMI Share
 - Maintenance
 - Cost of Lost Time)
÷
Hours Worked
```

The system also tracks:

```text
Fleet Profit / Vehicle / Month
```

This shifts the optimization target from:

> "How cheaply can the vehicle travel?"

to:

> **"How much useful income can this vehicle generate for every hour it is deployed?"**

---

# 🚘 The RideFlex Platform

ProofDrive uses a common commercial vehicle platform that can support multiple operating environments.

### Shared Vehicle Foundation

* Compact 4-door sedan platform
* Under 4 metres
* 5-seat configuration
* 400L+ target boot capacity
* Durable commercial-grade interior
* Easy-clean surfaces
* Rear charging ports
* Factory telematics
* Connected vehicle architecture
* Fleet-oriented maintenance design

### Multiple Powertrain Paths

The platform is designed to remain **powertrain-agnostic**.

Possible configurations include:

* **BEV**
* **CNG**
* **Strong Hybrid**

The system does not assume that one energy technology will dominate every Indian market.

Instead:

```text
City + Usage Pattern
        ↓
Energy Economics
        ↓
Infrastructure Availability
        ↓
Vehicle Utilization
        ↓
Recommended Powertrain
```

---

# 🧠 1. Adaptive Mission Intelligence

The vehicle identifies what kind of mission it is currently performing.

### City Mode

Optimized for:

* Stop-and-go traffic
* Short trips
* High trip frequency
* Low energy consumption
* Fast passenger turnaround

### Airport Mode

Optimized for:

* Airport demand
* Luggage
* Passenger comfort
* Queue/demand awareness
* Preparing energy before high-value trips

### Highway Mode

Optimized for:

* Longer-distance travel
* Range
* Driver comfort
* Safety
* Energy/refuelling planning

### Shared Mode

Optimized for:

* Higher occupancy
* Pickup sequencing
* Route efficiency
* Shared mobility economics

---

# 💰 2. Revenue Intelligence Engine

The Revenue Intelligence Engine evaluates the economics of a ride before the driver commits significant time and energy.

Instead of looking only at fare, the system considers:

```text
Expected Revenue
      -
Energy Cost
      -
Dead-Km Cost
      -
Maintenance Cost
      -
Time Cost
      -
Vehicle Wear
      =
Estimated Net Contribution
```

The system can then estimate:

* Net earnings from the ride
* Earnings per hour
* Energy cost
* Dead kilometres
* Estimated maintenance impact
* Ride attractiveness
* Expected destination demand

### Example

A ride with a high fare may not necessarily be profitable if:

* Pickup distance is large
* Traffic is severe
* Destination has weak return demand
* Energy cost is high
* The trip takes too long

ProofDrive therefore focuses on **economic contribution rather than gross fare**.

---

# 🛣️ 3. Dead-Kilometre Intelligence

Dead kilometres are kilometres driven without a paying passenger.

The system estimates:

```text
Pickup Distance
+
Empty Return Distance
+
Expected Energy Cost
+
Time Cost
=
Dead-Km Impact
```

This allows the driver/fleet operator to understand the true economics of a ride.

The system can also identify areas where demand is likely to be stronger and help drivers make better positioning decisions.

> The system provides decision support. It does not control Uber, Ola, Rapido, or other aggregator platforms.

---

# 🔋 4. Powertrain Intelligence

ProofDrive compares different powertrain options based on actual operating conditions.

Inputs can include:

* Daily kilometres
* Monthly kilometres
* Energy price
* Vehicle price
* Financing cost
* Maintenance cost
* Charging/refuelling availability
* Expected utilization
* Operating region

### Example Decision Logic

```text
High daily km
+
Affordable charging
+
Strong charging infrastructure
        ↓
       BEV
```

```text
Strong CNG infrastructure
+
Highway / Tier-2 / Tier-3 usage
        ↓
       CNG
```

```text
Mixed operating conditions
+
Need for flexibility
        ↓
     Hybrid
```

The system should show the calculations behind its recommendation instead of presenting the result as a black box.

---

# 🧮 5. TCO & Earnings Engine

The platform includes an interactive economics calculator.

Users can modify parameters such as:

* Daily kilometres
* Working days/month
* Fuel/energy price
* Vehicle cost
* Loan amount
* Interest rate
* Loan tenure
* Maintenance cost
* Driver working hours
* Average fare
* Trips/day

The system calculates:

* Monthly energy cost
* Monthly EMI
* Maintenance cost
* Insurance/permit/miscellaneous costs
* Total monthly operating cost
* Estimated driver earnings
* Earnings per duty hour
* Powertrain comparison
* Break-even scenarios

### Example Baseline

An illustrative scenario can use:

```text
Daily distance: 200 km
Working days: 26
Monthly distance: 5,200 km
CNG price: ₹87/kg
CNG efficiency: 25 km/kg
```

The application should clearly label such numbers as:

> **Illustrative assumptions — not verified market forecasts.**

---

# 👨‍✈️ 6. Driver Intelligence

The driver is treated as a core stakeholder rather than simply the person operating the vehicle.

The platform considers:

* Net earnings
* Duty hours
* Dead kilometres
* Fatigue
* Vehicle health
* Maintenance timing
* Demand patterns
* Ride profitability

## Driver Fatigue Intelligence

The system can monitor indicators such as:

* Driving duration
* Duty duration
* Driving behaviour
* Steering/braking patterns
* Attention indicators where available

It can recommend:

> "Take a break now — expected earnings impact is low."

This connects **safety with economics**.

---

# 🛋️ 7. Passenger Comfort Intelligence

Passenger experience is measured through a conceptual **Ride Comfort Score**.

Potential signals include:

* Harsh acceleration
* Harsh braking
* Cornering
* Ride smoothness
* Cabin temperature
* Noise/vibration indicators
* Driving behaviour

The objective is to connect:

```text
Better Driving
      ↓
Better Ride Comfort
      ↓
Better Passenger Experience
      ↓
Better Service Quality
```

The system should avoid claiming unsupported numerical improvements.

---

# 🪑 8. Mission-Aware Cabin

The vehicle is designed around the mission rather than a single passenger profile.

Possible configurations include:

### City Mission

Efficient passenger seating and easy entry/exit.

### Airport Mission

Greater luggage accessibility and passenger comfort.

### Shared Mission

Optimized passenger/occupancy utilization.

### Premium Mission

Enhanced comfort and passenger experience.

The principle is:

> **A private car is designed around its owner. A ride-service vehicle should be designed around its mission.**

---

# 🩺 9. Vehicle Health Passport

Every vehicle maintains a digital health record.

The Vehicle Health Passport can contain:

* Service history
* Vehicle utilization
* Commercial kilometres
* Engine health
* Battery State of Health
* Maintenance events
* Accident history
* Component replacement
* Duty-cycle information

With appropriate consent, relevant information can be shared with:

* Fleet operators
* Financiers
* Insurers
* Potential buyers
* Service partners

### Objective

Reduce uncertainty around:

```text
Vehicle Condition
        ↓
Financing
        ↓
Insurance
        ↓
Resale
```

The system should **not guarantee a higher resale price**.

Instead, it aims to improve transparency and reduce uncertainty.

---

# 🔧 10. Predictive Maintenance

The platform uses vehicle usage and health information to identify potential maintenance requirements.

Instead of:

```text
Failure
 ↓
Breakdown
 ↓
Lost Working Hours
```

The objective is:

```text
Vehicle Data
 ↓
Early Warning
 ↓
Maintenance Prediction
 ↓
Schedule During Low-Demand Period
 ↓
Reduced Downtime
```

The demo can simulate vehicle health degradation and maintenance recommendations using synthetic data.

---

# 🏙️ 11. Fleet Digital Twin

The Fleet Digital Twin provides a fleet-level view of vehicle operations.

It can visualize:

* Vehicle utilization
* Daily kilometres
* Energy consumption
* Earnings
* Maintenance
* Downtime
* Vehicle health
* Demand distribution
* Powertrain performance

Fleet operators can use this information to understand:

> Which vehicles should operate where, using which powertrain, under what conditions?

---

# 📊 12. Fleet Intelligence

The dashboard can identify:

### High-performing vehicles

Vehicles with:

* High utilization
* High earnings/hour
* Low downtime
* Low energy cost

### Underperforming vehicles

Vehicles with:

* High dead kilometres
* High maintenance
* Low utilization
* Low earnings/hour

### Infrastructure requirements

The system can estimate where additional:

* Charging
* Refuelling
* Service capacity

may be required.

---

# ♻️ 13. Lifecycle Intelligence

ProofDrive does not stop optimization at the end of the first owner's usage.

The vehicle follows a commercial lifecycle:

```text
High-Utilization Ride Service
            ↓
Lower-Intensity Fleet Usage
            ↓
Rental / Taxi / Private Use
            ↓
Component Recovery
            ↓
Battery Second Life
            ↓
Recycling
```

This creates value across the **entire economic life of the vehicle**.

---

# 📈 14. Residual Value Intelligence

The system can estimate expected residual value using factors such as:

* Vehicle age
* Commercial kilometres
* Service history
* Vehicle health
* Battery health
* Accident history
* Usage intensity
* Maintenance record

This creates a more transparent approach to fleet financing and resale.

---

# 🌱 15. Sustainability

Sustainability is evaluated across the complete lifecycle rather than only tailpipe emissions.

The platform can track:

* Energy consumption
* Powertrain mix
* Vehicle utilization
* Battery health
* Component life
* Second-life opportunities
* Recycling pathway

The goal is:

> **Use the right vehicle, with the right energy source, for the right mission, for as much useful life as possible.**

---

# 🖥️ Application Structure

The website is organized into the following major sections:

```text
Overview
│
├── Vehicle
├── Mission Intelligence
├── Economics
├── Digital Twin
├── Vehicle Health
├── Driver
├── Lifecycle
├── Roadmap
└── Why ProofDrive
```

---

# 🧭 Recommended User Flow

A typical demo flow is:

```text
Landing Page
     ↓
Select City / Scenario
     ↓
Select Mission
     ↓
Vehicle Chooses Recommended Powertrain
     ↓
View Ride Economics
     ↓
Analyze Driver Earnings
     ↓
Check Vehicle Health
     ↓
View Fleet Impact
     ↓
View Lifecycle / Resale
```

---

# 🛠️ Tech Stack

The project is designed as a modern frontend application.

### Frontend

* React
* TypeScript
* Vite

### Styling

* Tailwind CSS

### Data Visualization

* Recharts

### Icons

* Lucide React

### Animation

* Framer Motion

### State / Logic

* React state and reusable calculation utilities

The application should work completely with **local synthetic/mock data** for the demo.

No external backend should be required for the core experience.

---

# ⚡ Getting Started

## Prerequisites

Make sure you have installed:

* Node.js
* npm

Check your installation:

```bash
node -v
npm -v
```

---

## Installation

Clone the repository:

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
```

Enter the project:

```bash
cd <PROJECT_FOLDER>
```

Install dependencies:

```bash
npm install
```

or:

```bash
npm i
```

---

## Run Locally

Start the development server:

```bash
npm run dev
```

Vite will provide a local URL similar to:

```text
http://localhost:5173
```

Open that URL in your browser.

### That's it.

The application should work locally without requiring:

* Database setup
* Docker
* Backend deployment
* API keys
* External APIs
* Cloud services
* Complex environment configuration

All core demo functionality should be available immediately after:

```bash
npm install
npm run dev
```

---

# 🧪 Demo Data

The application uses synthetic/illustrative data for demonstration.

This allows the project to run completely offline/local without depending on:

* Uber APIs
* Ola APIs
* Rapido APIs
* Live vehicle telemetry
* Real fleet databases
* External charging APIs
* External financial APIs

Where assumptions are used, the UI should clearly identify them.

---

# 🏷️ Data Classification

The application distinguishes between three types of information:

### Verified / Source-Based

Information directly supported by the provided challenge material or research sources.

### Illustrative Assumption

Numbers used to demonstrate how the model works but which require real-world validation.

### Concept / Design Proposal

Features or mechanisms proposed as part of the ProofDrive solution.

This distinction is important to avoid presenting assumptions as facts.

---

# 🧮 Economics Engine Architecture

The core calculations should be separated from the UI.

Example conceptual structure:

```text
User Inputs
     ↓
Economic Calculation Engine
     ↓
Energy Cost
Maintenance Cost
EMI
Dead-Km Cost
Time Cost
     ↓
Net Earnings
     ↓
Earnings / Duty Hour
     ↓
Recommendation
```

This makes the system easier to test and extend.

---

# 🧱 Suggested Project Structure

```text
src/
│
├── components/
│   ├── charts/
│   ├── dashboard/
│   ├── vehicle/
│   ├── mission/
│   ├── economics/
│   ├── health/
│   └── lifecycle/
│
├── pages/
│   ├── Overview.tsx
│   ├── Vehicle.tsx
│   ├── MissionIntelligence.tsx
│   ├── Economics.tsx
│   ├── DigitalTwin.tsx
│   ├── VehicleHealth.tsx
│   ├── Driver.tsx
│   ├── Lifecycle.tsx
│   └── Roadmap.tsx
│
├── data/
│   └── mockData.ts
│
├── utils/
│   ├── economics.ts
│   ├── powertrain.ts
│   ├── maintenance.ts
│   └── lifecycle.ts
│
├── types/
│   └── index.ts
│
├── App.tsx
└── main.tsx
```

---

# 🚀 Future Scope

ProofDrive can be extended beyond the prototype into a production ecosystem.

Potential future integrations include:

* Real vehicle telemetry
* OEM vehicle APIs
* Charging networks
* CNG infrastructure
* Fleet management systems
* Aggregator integrations
* Financial institutions
* Insurance providers
* Service networks
* Battery health systems
* Vehicle resale marketplaces
* Battery recycling networks

These integrations are intentionally outside the core prototype so that the demo remains simple and self-contained.

---

# 🗺️ Implementation Roadmap

## Phase 1 — 2027–2028

### Urban Deployment

* Urban CNG/Hybrid version
* Factory telematics
* Vehicle Health Passport
* TCO & Earnings Engine
* Pilot in selected metros
* Measure real-world earnings
* Measure dead kilometres
* Track breakdowns and maintenance

---

## Phase 2 — 2028–2031

### Expansion

* Highway-focused version
* Tier-2 city deployment
* Financing partnerships
* Insurance partnerships
* BEV urban pilots where economics support them
* Expanded fleet intelligence

---

## Phase 3 — 2031–2035

### Scaled Mobility Ecosystem

* 6–7 seat MPV
* Shared/premium configurations
* Wider BEV deployment where economically viable
* Bio-CNG opportunities
* Battery second-life systems
* Recycling ecosystem
* Fleet digital twin at scale

---

# 🏆 Why ProofDrive?

Traditional vehicle development asks:

> **"What vehicle should we build?"**

ProofDrive asks:

> **"What vehicle should operate where, for which mission, using which energy source, and how can it generate the highest sustainable economic value over its entire lifecycle?"**

That is the fundamental difference.

---

# ⭐ X-Factor

## One Vehicle. Multiple Missions. Self-Optimizing Economics.

ProofDrive combines:

```text
Adaptive Vehicle
       +
Revenue Intelligence
       +
Mission-Aware Cabin
       +
Powertrain Intelligence
       +
Vehicle Health
       +
Lifecycle Intelligence
```

The result is not simply another taxi.

It is a **commercial mobility asset designed to continuously adapt to changing demand, energy economics, vehicle health, and lifecycle conditions.**

---

# 🎯 Key Differentiator

> **Don't build a taxi. Build a commercial mobility asset.**

The vehicle is optimized not just for the next ride, but for:

**the next ride → the next month → the next owner → the next life of the vehicle.**

---

# 📌 Important Disclaimer

ProofDrive is a **conceptual engineering and product solution** developed for the Maruti Suzuki E-Track challenge.

Market figures, operating costs, vehicle specifications, energy prices, maintenance costs, resale assumptions, and other numerical values used in the prototype may be illustrative unless explicitly identified as verified sources.

The prototype is intended to demonstrate the **product concept, decision logic, economics framework, and digital experience**, rather than represent a production-ready commercial vehicle specification.

---

# 👥 Team

**ProofDrive / RideFlex**

Engineering the Ideal Ride-Service Vehicle for India 2035.

---

## 📄 Challenge

**Maruti Suzuki E-Track — Engineering the Ideal Ride-Service Vehicle for India 2035**

### Core Objective

Balance:

* Passenger comfort
* Driver profitability
* Fleet efficiency
* Sustainability
* Scalability

through a vehicle and digital ecosystem designed specifically for India's future ride-service market.

---

## ❤️ Final Vision

```text
                 PROOFDRIVE
                     │
          ┌──────────┴──────────┐
          │                     │
      VEHICLE               INTELLIGENCE
          │                     │
   ┌──────┼──────┐       ┌──────┼──────┐
   │      │      │       │      │      │
  BEV    CNG   HYBRID  MISSION  REVENUE HEALTH
                         AI       AI     AI
   │      │      │       │      │      │
   └──────┴──────┴───────┴──────┴──────┘
                     │
              FLEET DIGITAL TWIN
                     │
             LIFECYCLE INTELLIGENCE
                     │
          ┌──────────┴──────────┐
          │                     │
        RESALE              SECOND LIFE
```

### **One Vehicle. Multiple Missions. Self-Optimizing Economics.**
