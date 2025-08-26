// Fallback data in case API fails
const fallbackMetalData = [
  // 1–4: Precious Metals
  {
    name: "Gold",
    price: 10206,
    unit: "per gram",
    purity: "24K",
    change: 12.5,
    changePercent: 0.12,
    currency: "INR"
  },
  {
    name: "Silver",
    price: 120,
    unit: "per gram",
    purity: "999+",
    change: -0.8,
    changePercent: -0.65,
    currency: "INR"
  },
  {
    name: "Platinum",
    price: 3772,
    unit: "per gram",
    purity: "99%",
    change: 18.2,
    changePercent: 0.48,
    currency: "INR"
  },
  {
    name: "Palladium",
    price: 3080,
    unit: "per gram",
    purity: "99.5%",
    change: -15.6,
    changePercent: -0.51,
    currency: "INR"
  },

  // 5–9: Base Metals
  {
    name: "Aluminium",
    price: 0.251,
    unit: "per gram",
    purity: "industrial grade",
    change: 0.01,
    changePercent: 0.22,
    currency: "INR"
  },
  {
    name: "Copper",
    price: 0.886,
    unit: "per gram",
    purity: "industrial grade",
    change: -0.02,
    changePercent: -0.31,
    currency: "INR"
  },
  {
    name: "Lead",
    price: 0.182,
    unit: "per gram",
    purity: "industrial grade",
    change: 0.003,
    changePercent: 0.15,
    currency: "INR"
  },
  {
    name: "Nickel",
    price: 1.341,
    unit: "per gram",
    purity: "industrial grade",
    change: -0.01,
    changePercent: -0.09,
    currency: "INR"
  },
  {
    name: "Zinc",
    price: 0.266,
    unit: "per gram",
    purity: "industrial grade",
    change: 0.002,
    changePercent: 0.08,
    currency: "INR"
  },

  // 10–30: Exotic/Rare Metals (estimates)
  {
    name: "Rhodium",
    price: 4350,
    unit: "per gram",
    purity: "estimate",
    change: 22.5,
    changePercent: 0.52,
    currency: "INR"
  },
  {
    name: "Iridium",
    price: 3600,
    unit: "per gram",
    purity: "estimate",
    change: 15.0,
    changePercent: 0.42,
    currency: "INR"
  },
  {
    name: "Osmium",
    price: 3200,
    unit: "per gram",
    purity: "estimate",
    change: -10.2,
    changePercent: -0.32,
    currency: "INR"
  },
  {
    name: "Ruthenium",
    price: 2400,
    unit: "per gram",
    purity: "estimate",
    change: 8.6,
    changePercent: 0.36,
    currency: "INR"
  },
  {
    name: "Gallium",
    price: 1500,
    unit: "per gram",
    purity: "estimate",
    change: -5.0,
    changePercent: -0.33,
    currency: "INR"
  },
  {
    name: "Indium",
    price: 980,
    unit: "per gram",
    purity: "estimate",
    change: 3.2,
    changePercent: 0.28,
    currency: "INR"
  },
  {
    name: "Tin",
    price: 2460,
    unit: "per gram",
    purity: "estimate",
    change: -12.4,
    changePercent: -0.51,
    currency: "INR"
  },
  {
    name: "Cobalt",
    price: 450,
    unit: "per gram",
    purity: "estimate",
    change: 2.1,
    changePercent: 0.47,
    currency: "INR"
  },
  {
    name: "Titanium",
    price: 450,
    unit: "per gram",
    purity: "estimate",
    change: 1.2,
    changePercent: 0.26,
    currency: "INR"
  },
  {
    name: "Manganese",
    price: 22,
    unit: "per gram",
    purity: "estimate",
    change: -0.1,
    changePercent: -0.45,
    currency: "INR"
  },
  {
    name: "Magnesium",
    price: 185,
    unit: "per gram",
    purity: "estimate",
    change: 0.6,
    changePercent: 0.33,
    currency: "INR"
  },
  {
    name: "Chromium",
    price: 125,
    unit: "per gram",
    purity: "estimate",
    change: 0.4,
    changePercent: 0.32,
    currency: "INR"
  },
  {
    name: "Lithium",
    price: 850,
    unit: "per gram",
    purity: "estimate",
    change: 4.8,
    changePercent: 0.56,
    currency: "INR"
  },
  {
    name: "Molybdenum",
    price: 1250,
    unit: "per gram",
    purity: "estimate",
    change: 6.2,
    changePercent: 0.49,
    currency: "INR"
  },
  {
    name: "Vanadium",
    price: 1400,
    unit: "per gram",
    purity: "estimate",
    change: 7.1,
    changePercent: 0.51,
    currency: "INR"
  },
  {
    name: "Bismuth",
    price: 450,
    unit: "per gram",
    purity: "estimate",
    change: -2.2,
    changePercent: -0.49,
    currency: "INR"
  },
  {
    name: "Antimony",
    price: 120,
    unit: "per gram",
    purity: "estimate",
    change: 0.5,
    changePercent: 0.42,
    currency: "INR"
  },
  {
    name: "Uranium",
    price: 5200,
    unit: "per gram",
    purity: "estimate",
    change: 35.0,
    changePercent: 0.67,
    currency: "INR"
  }
];


// Simulated historical data
const historicalData = {
  Gold: [
    { date: "2023-06-01", price: 5820 },
    { date: "2023-06-02", price: 5835 },
    { date: "2023-06-03", price: 5842 },
    { date: "2023-06-04", price: 5858 },
    { date: "2023-06-05", price: 5865 },
    { date: "2023-06-06", price: 5872 },
    { date: "2023-06-07", price: 5890 }
  ],
  Silver: [
    { date: "2023-06-01", price: 70.2 },
    { date: "2023-06-02", price: 71.5 },
    { date: "2023-06-03", price: 72.8 },
    { date: "2023-06-04", price: 73.1 },
    { date: "2023-06-05", price: 72.9 },
    { date: "2023-06-06", price: 72.7 },
    { date: "2023-06-07", price: 72.5 }
  ],
  Platinum: [
    { date: "2023-06-01", price: 3100 },
    { date: "2023-06-02", price: 3120 },
    { date: "2023-06-03", price: 3135 },
    { date: "2023-06-04", price: 3142 },
    { date: "2023-06-05", price: 3148 },
    { date: "2023-06-06", price: 3152 },
    { date: "2023-06-07", price: 3150 }
  ],
  Palladium: [
    { date: "2023-06-01", price: 4280 },
    { date: "2023-06-02", price: 4275 },
    { date: "2023-06-03", price: 4268 },
    { date: "2023-06-04", price: 4262 },
    { date: "2023-06-05", price: 4258 },
    { date: "2023-06-06", price: 4253 },
    { date: "2023-06-07", price: 4250 }
  ]
};

// Function to fetch metal prices
export const fetchMetalPrices = async () => {
  try {
    // Try to use a free API first
    const response = await fetch('https://api.metalpriceapi.com/v1/latest?api_key=93ee20a52dbf5a64468603f0d73dbf65&base=USD&currencies=INR&metals=XAU,XAG,XPT,XPD');
    
    if (!response.ok) {
      throw new Error('API request failed');
    }
    
    const data = await response.json();
    
    // Convert prices to INR and format data
    // Note: This would require proper conversion rates from the API
    // For now, we'll use the fallback data
    return fallbackMetalData;
  } catch (error) {
    console.error("API failed, using fallback data:", error);
    // Return fallback data if API fails
    return fallbackMetalData;
  }
};

// Function to get historical data for a metal
export const getMetalHistory = async (metalName) => {
  try {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return historical data for the metal
    return historicalData[metalName] || [];
  } catch (error) {
    console.error("Failed to fetch historical data:", error);
    return historicalData[metalName] || [];
  }
};