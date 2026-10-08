/** Expanded European destination choices for Flight Scout.
 *  Integration notes:
 *  - Use EUROPE_AIRPORTS for the searchable selector (IATA code, city and country).
 *  - Use EUROPE_DEFAULT_CODES for the compact initial "Europe" preset.
 *  - Only query live fares for airports the user explicitly selects. Never fan
 *    out SerpApi calls to the entire catalog automatically.
 *  - This list is a travel discovery catalog, not a claim of nonstop service.
 */
export interface EuropeAirport {
  code: string;
  city: string;
  airport: string;
  country: string;
  region: string;
}

export const EUROPE_AIRPORTS: EuropeAirport[] = [
  {
    "code": "LHR",
    "city": "London",
    "airport": "Heathrow",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "LGW",
    "city": "London",
    "airport": "Gatwick",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "STN",
    "city": "London",
    "airport": "Stansted",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "LTN",
    "city": "London",
    "airport": "Luton",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "LCY",
    "city": "London",
    "airport": "City",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "MAN",
    "city": "Manchester",
    "airport": "Manchester",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "EDI",
    "city": "Edinburgh",
    "airport": "Edinburgh",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "GLA",
    "city": "Glasgow",
    "airport": "Glasgow",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "BRS",
    "city": "Bristol",
    "airport": "Bristol",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "BHX",
    "city": "Birmingham",
    "airport": "Birmingham",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "NCL",
    "city": "Newcastle",
    "airport": "Newcastle",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "INV",
    "city": "Inverness",
    "airport": "Inverness",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "ABZ",
    "city": "Aberdeen",
    "airport": "Aberdeen",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "BFS",
    "city": "Belfast",
    "airport": "Belfast International",
    "country": "United Kingdom",
    "region": "Western Europe"
  },
  {
    "code": "DUB",
    "city": "Dublin",
    "airport": "Dublin",
    "country": "Ireland",
    "region": "Western Europe"
  },
  {
    "code": "ORK",
    "city": "Cork",
    "airport": "Cork",
    "country": "Ireland",
    "region": "Western Europe"
  },
  {
    "code": "SNN",
    "city": "Shannon",
    "airport": "Shannon",
    "country": "Ireland",
    "region": "Western Europe"
  },
  {
    "code": "LIS",
    "city": "Lisbon",
    "airport": "Humberto Delgado",
    "country": "Portugal",
    "region": "Southern Europe"
  },
  {
    "code": "OPO",
    "city": "Porto",
    "airport": "Francisco Sá Carneiro",
    "country": "Portugal",
    "region": "Southern Europe"
  },
  {
    "code": "FAO",
    "city": "Faro",
    "airport": "Faro",
    "country": "Portugal",
    "region": "Southern Europe"
  },
  {
    "code": "FNC",
    "city": "Funchal (Madeira)",
    "airport": "Madeira",
    "country": "Portugal",
    "region": "Southern Europe"
  },
  {
    "code": "PDL",
    "city": "Ponta Delgada (Azores)",
    "airport": "João Paulo II",
    "country": "Portugal",
    "region": "Southern Europe"
  },
  {
    "code": "MAD",
    "city": "Madrid",
    "airport": "Adolfo Suárez Madrid–Barajas",
    "country": "Spain",
    "region": "Southern Europe"
  },
  {
    "code": "BCN",
    "city": "Barcelona",
    "airport": "El Prat",
    "country": "Spain",
    "region": "Southern Europe"
  },
  {
    "code": "AGP",
    "city": "Málaga",
    "airport": "Málaga–Costa del Sol",
    "country": "Spain",
    "region": "Southern Europe"
  },
  {
    "code": "SVQ",
    "city": "Seville",
    "airport": "Seville",
    "country": "Spain",
    "region": "Southern Europe"
  },
  {
    "code": "VLC",
    "city": "Valencia",
    "airport": "Valencia",
    "country": "Spain",
    "region": "Southern Europe"
  },
  {
    "code": "ALC",
    "city": "Alicante",
    "airport": "Alicante–Elche",
    "country": "Spain",
    "region": "Southern Europe"
  },
  {
    "code": "BIO",
    "city": "Bilbao",
    "airport": "Bilbao",
    "country": "Spain",
    "region": "Southern Europe"
  },
  {
    "code": "PMI",
    "city": "Palma de Mallorca",
    "airport": "Palma de Mallorca",
    "country": "Spain",
    "region": "Southern Europe"
  },
  {
    "code": "IBZ",
    "city": "Ibiza",
    "airport": "Ibiza",
    "country": "Spain",
    "region": "Southern Europe"
  },
  {
    "code": "TFS",
    "city": "Tenerife",
    "airport": "Tenerife South",
    "country": "Spain",
    "region": "Southern Europe"
  },
  {
    "code": "LPA",
    "city": "Gran Canaria",
    "airport": "Gran Canaria",
    "country": "Spain",
    "region": "Southern Europe"
  },
  {
    "code": "SDR",
    "city": "Santander",
    "airport": "Seve Ballesteros–Santander",
    "country": "Spain",
    "region": "Southern Europe"
  },
  {
    "code": "CDG",
    "city": "Paris",
    "airport": "Charles de Gaulle",
    "country": "France",
    "region": "Western Europe"
  },
  {
    "code": "ORY",
    "city": "Paris",
    "airport": "Orly",
    "country": "France",
    "region": "Western Europe"
  },
  {
    "code": "NCE",
    "city": "Nice",
    "airport": "Côte d'Azur",
    "country": "France",
    "region": "Western Europe"
  },
  {
    "code": "LYS",
    "city": "Lyon",
    "airport": "Saint-Exupéry",
    "country": "France",
    "region": "Western Europe"
  },
  {
    "code": "MRS",
    "city": "Marseille",
    "airport": "Provence",
    "country": "France",
    "region": "Western Europe"
  },
  {
    "code": "BOD",
    "city": "Bordeaux",
    "airport": "Bordeaux–Mérignac",
    "country": "France",
    "region": "Western Europe"
  },
  {
    "code": "TLS",
    "city": "Toulouse",
    "airport": "Blagnac",
    "country": "France",
    "region": "Western Europe"
  },
  {
    "code": "NTE",
    "city": "Nantes",
    "airport": "Atlantique",
    "country": "France",
    "region": "Western Europe"
  },
  {
    "code": "BIA",
    "city": "Bastia (Corsica)",
    "airport": "Bastia–Poretta",
    "country": "France",
    "region": "Western Europe"
  },
  {
    "code": "AJA",
    "city": "Ajaccio (Corsica)",
    "airport": "Napoléon Bonaparte",
    "country": "France",
    "region": "Western Europe"
  },
  {
    "code": "FCO",
    "city": "Rome",
    "airport": "Fiumicino",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "CIA",
    "city": "Rome",
    "airport": "Ciampino",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "MXP",
    "city": "Milan",
    "airport": "Malpensa",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "LIN",
    "city": "Milan",
    "airport": "Linate",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "BGY",
    "city": "Bergamo (Milan area)",
    "airport": "Orio al Serio",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "VCE",
    "city": "Venice",
    "airport": "Marco Polo",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "FLR",
    "city": "Florence",
    "airport": "Peretola",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "PSA",
    "city": "Pisa",
    "airport": "Galileo Galilei",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "BLQ",
    "city": "Bologna",
    "airport": "Guglielmo Marconi",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "NAP",
    "city": "Naples",
    "airport": "Capodichino",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "CTA",
    "city": "Catania (Sicily)",
    "airport": "Fontanarossa",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "PMO",
    "city": "Palermo (Sicily)",
    "airport": "Falcone Borsellino",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "CAG",
    "city": "Cagliari (Sardinia)",
    "airport": "Elmas",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "OLB",
    "city": "Olbia (Sardinia)",
    "airport": "Costa Smeralda",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "SUF",
    "city": "Lamezia Terme (Calabria)",
    "airport": "Lamezia Terme",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "TRN",
    "city": "Turin",
    "airport": "Caselle",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "BRI",
    "city": "Bari",
    "airport": "Karol Wojtyła",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "VRN",
    "city": "Verona",
    "airport": "Villafranca",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "TRS",
    "city": "Trieste",
    "airport": "Ronchi dei Legionari",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "PEG",
    "city": "Perugia",
    "airport": "San Francesco d'Assisi",
    "country": "Italy",
    "region": "Southern Europe"
  },
  {
    "code": "ZRH",
    "city": "Zürich",
    "airport": "Zürich",
    "country": "Switzerland",
    "region": "Central Europe"
  },
  {
    "code": "GVA",
    "city": "Geneva",
    "airport": "Geneva",
    "country": "Switzerland",
    "region": "Central Europe"
  },
  {
    "code": "BSL",
    "city": "Basel",
    "airport": "EuroAirport Basel–Mulhouse–Freiburg",
    "country": "Switzerland",
    "region": "Central Europe"
  },
  {
    "code": "FRA",
    "city": "Frankfurt",
    "airport": "Frankfurt",
    "country": "Germany",
    "region": "Central Europe"
  },
  {
    "code": "MUC",
    "city": "Munich",
    "airport": "Franz Josef Strauss",
    "country": "Germany",
    "region": "Central Europe"
  },
  {
    "code": "BER",
    "city": "Berlin",
    "airport": "Brandenburg",
    "country": "Germany",
    "region": "Central Europe"
  },
  {
    "code": "HAM",
    "city": "Hamburg",
    "airport": "Hamburg",
    "country": "Germany",
    "region": "Central Europe"
  },
  {
    "code": "DUS",
    "city": "Düsseldorf",
    "airport": "Düsseldorf",
    "country": "Germany",
    "region": "Central Europe"
  },
  {
    "code": "CGN",
    "city": "Cologne / Bonn",
    "airport": "Cologne Bonn",
    "country": "Germany",
    "region": "Central Europe"
  },
  {
    "code": "STR",
    "city": "Stuttgart",
    "airport": "Stuttgart",
    "country": "Germany",
    "region": "Central Europe"
  },
  {
    "code": "NUE",
    "city": "Nuremberg",
    "airport": "Nuremberg",
    "country": "Germany",
    "region": "Central Europe"
  },
  {
    "code": "AMS",
    "city": "Amsterdam",
    "airport": "Schiphol",
    "country": "Netherlands",
    "region": "Western Europe"
  },
  {
    "code": "EIN",
    "city": "Eindhoven",
    "airport": "Eindhoven",
    "country": "Netherlands",
    "region": "Western Europe"
  },
  {
    "code": "RTM",
    "city": "Rotterdam",
    "airport": "Rotterdam The Hague",
    "country": "Netherlands",
    "region": "Western Europe"
  },
  {
    "code": "BRU",
    "city": "Brussels",
    "airport": "Brussels",
    "country": "Belgium",
    "region": "Western Europe"
  },
  {
    "code": "CRL",
    "city": "Charleroi (Brussels area)",
    "airport": "Brussels South Charleroi",
    "country": "Belgium",
    "region": "Western Europe"
  },
  {
    "code": "VIE",
    "city": "Vienna",
    "airport": "Vienna",
    "country": "Austria",
    "region": "Central Europe"
  },
  {
    "code": "SZG",
    "city": "Salzburg",
    "airport": "Salzburg",
    "country": "Austria",
    "region": "Central Europe"
  },
  {
    "code": "INN",
    "city": "Innsbruck",
    "airport": "Innsbruck",
    "country": "Austria",
    "region": "Central Europe"
  },
  {
    "code": "PRG",
    "city": "Prague",
    "airport": "Václav Havel",
    "country": "Czechia",
    "region": "Central Europe"
  },
  {
    "code": "BUD",
    "city": "Budapest",
    "airport": "Ferenc Liszt",
    "country": "Hungary",
    "region": "Central Europe"
  },
  {
    "code": "WAW",
    "city": "Warsaw",
    "airport": "Chopin",
    "country": "Poland",
    "region": "Central Europe"
  },
  {
    "code": "KRK",
    "city": "Kraków",
    "airport": "John Paul II",
    "country": "Poland",
    "region": "Central Europe"
  },
  {
    "code": "GDN",
    "city": "Gdańsk",
    "airport": "Lech Wałęsa",
    "country": "Poland",
    "region": "Central Europe"
  },
  {
    "code": "WRO",
    "city": "Wrocław",
    "airport": "Copernicus",
    "country": "Poland",
    "region": "Central Europe"
  },
  {
    "code": "KTW",
    "city": "Katowice",
    "airport": "Katowice",
    "country": "Poland",
    "region": "Central Europe"
  },
  {
    "code": "CPH",
    "city": "Copenhagen",
    "airport": "Kastrup",
    "country": "Denmark",
    "region": "Northern Europe"
  },
  {
    "code": "BLL",
    "city": "Billund",
    "airport": "Billund",
    "country": "Denmark",
    "region": "Northern Europe"
  },
  {
    "code": "ARN",
    "city": "Stockholm",
    "airport": "Arlanda",
    "country": "Sweden",
    "region": "Northern Europe"
  },
  {
    "code": "GOT",
    "city": "Gothenburg",
    "airport": "Landvetter",
    "country": "Sweden",
    "region": "Northern Europe"
  },
  {
    "code": "MMX",
    "city": "Malmö",
    "airport": "Malmö",
    "country": "Sweden",
    "region": "Northern Europe"
  },
  {
    "code": "OSL",
    "city": "Oslo",
    "airport": "Gardermoen",
    "country": "Norway",
    "region": "Northern Europe"
  },
  {
    "code": "BGO",
    "city": "Bergen",
    "airport": "Flesland",
    "country": "Norway",
    "region": "Northern Europe"
  },
  {
    "code": "TOS",
    "city": "Tromsø",
    "airport": "Langnes",
    "country": "Norway",
    "region": "Northern Europe"
  },
  {
    "code": "TRD",
    "city": "Trondheim",
    "airport": "Værnes",
    "country": "Norway",
    "region": "Northern Europe"
  },
  {
    "code": "SVG",
    "city": "Stavanger",
    "airport": "Sola",
    "country": "Norway",
    "region": "Northern Europe"
  },
  {
    "code": "EVE",
    "city": "Harstad / Narvik",
    "airport": "Evenes",
    "country": "Norway",
    "region": "Northern Europe"
  },
  {
    "code": "HEL",
    "city": "Helsinki",
    "airport": "Helsinki–Vantaa",
    "country": "Finland",
    "region": "Northern Europe"
  },
  {
    "code": "RVN",
    "city": "Rovaniemi",
    "airport": "Rovaniemi",
    "country": "Finland",
    "region": "Northern Europe"
  },
  {
    "code": "KEF",
    "city": "Reykjavík / Keflavík",
    "airport": "Keflavík",
    "country": "Iceland",
    "region": "Northern Europe"
  },
  {
    "code": "AEY",
    "city": "Akureyri",
    "airport": "Akureyri",
    "country": "Iceland",
    "region": "Northern Europe"
  },
  {
    "code": "TLL",
    "city": "Tallinn",
    "airport": "Lennart Meri",
    "country": "Estonia",
    "region": "Northern Europe"
  },
  {
    "code": "RIX",
    "city": "Riga",
    "airport": "Riga",
    "country": "Latvia",
    "region": "Northern Europe"
  },
  {
    "code": "VNO",
    "city": "Vilnius",
    "airport": "Vilnius",
    "country": "Lithuania",
    "region": "Northern Europe"
  },
  {
    "code": "KUN",
    "city": "Kaunas",
    "airport": "Kaunas",
    "country": "Lithuania",
    "region": "Northern Europe"
  },
  {
    "code": "ATH",
    "city": "Athens",
    "airport": "Eleftherios Venizelos",
    "country": "Greece",
    "region": "Southern Europe"
  },
  {
    "code": "SKG",
    "city": "Thessaloniki",
    "airport": "Makedonia",
    "country": "Greece",
    "region": "Southern Europe"
  },
  {
    "code": "JTR",
    "city": "Santorini",
    "airport": "Santorini",
    "country": "Greece",
    "region": "Southern Europe"
  },
  {
    "code": "JMK",
    "city": "Mykonos",
    "airport": "Mykonos",
    "country": "Greece",
    "region": "Southern Europe"
  },
  {
    "code": "HER",
    "city": "Heraklion (Crete)",
    "airport": "Nikos Kazantzakis",
    "country": "Greece",
    "region": "Southern Europe"
  },
  {
    "code": "CHQ",
    "city": "Chania (Crete)",
    "airport": "Ioannis Daskalogiannis",
    "country": "Greece",
    "region": "Southern Europe"
  },
  {
    "code": "RHO",
    "city": "Rhodes",
    "airport": "Diagoras",
    "country": "Greece",
    "region": "Southern Europe"
  },
  {
    "code": "CFU",
    "city": "Corfu",
    "airport": "Ioannis Kapodistrias",
    "country": "Greece",
    "region": "Southern Europe"
  },
  {
    "code": "ZAG",
    "city": "Zagreb",
    "airport": "Franjo Tuđman",
    "country": "Croatia",
    "region": "Southeastern Europe"
  },
  {
    "code": "SPU",
    "city": "Split",
    "airport": "Split",
    "country": "Croatia",
    "region": "Southeastern Europe"
  },
  {
    "code": "DBV",
    "city": "Dubrovnik",
    "airport": "Ruđer Bošković",
    "country": "Croatia",
    "region": "Southeastern Europe"
  },
  {
    "code": "ZAD",
    "city": "Zadar",
    "airport": "Zadar",
    "country": "Croatia",
    "region": "Southeastern Europe"
  },
  {
    "code": "PUY",
    "city": "Pula",
    "airport": "Pula",
    "country": "Croatia",
    "region": "Southeastern Europe"
  },
  {
    "code": "LJU",
    "city": "Ljubljana",
    "airport": "Jože Pučnik",
    "country": "Slovenia",
    "region": "Southeastern Europe"
  },
  {
    "code": "BEG",
    "city": "Belgrade",
    "airport": "Nikola Tesla",
    "country": "Serbia",
    "region": "Southeastern Europe"
  },
  {
    "code": "TGD",
    "city": "Podgorica",
    "airport": "Podgorica",
    "country": "Montenegro",
    "region": "Southeastern Europe"
  },
  {
    "code": "TIV",
    "city": "Tivat",
    "airport": "Tivat",
    "country": "Montenegro",
    "region": "Southeastern Europe"
  },
  {
    "code": "TIA",
    "city": "Tirana",
    "airport": "Nënë Tereza",
    "country": "Albania",
    "region": "Southeastern Europe"
  },
  {
    "code": "SJJ",
    "city": "Sarajevo",
    "airport": "Sarajevo",
    "country": "Bosnia and Herzegovina",
    "region": "Southeastern Europe"
  },
  {
    "code": "SKP",
    "city": "Skopje",
    "airport": "Skopje",
    "country": "North Macedonia",
    "region": "Southeastern Europe"
  },
  {
    "code": "OHD",
    "city": "Ohrid",
    "airport": "St. Paul the Apostle",
    "country": "North Macedonia",
    "region": "Southeastern Europe"
  },
  {
    "code": "SOF",
    "city": "Sofia",
    "airport": "Sofia",
    "country": "Bulgaria",
    "region": "Southeastern Europe"
  },
  {
    "code": "VAR",
    "city": "Varna",
    "airport": "Varna",
    "country": "Bulgaria",
    "region": "Southeastern Europe"
  },
  {
    "code": "OTP",
    "city": "Bucharest",
    "airport": "Henri Coandă",
    "country": "Romania",
    "region": "Southeastern Europe"
  },
  {
    "code": "CLJ",
    "city": "Cluj-Napoca",
    "airport": "Avram Iancu",
    "country": "Romania",
    "region": "Southeastern Europe"
  },
  {
    "code": "TSR",
    "city": "Timișoara",
    "airport": "Traian Vuia",
    "country": "Romania",
    "region": "Southeastern Europe"
  },
  {
    "code": "MLA",
    "city": "Luqa (Malta)",
    "airport": "Malta International",
    "country": "Malta",
    "region": "Southern Europe"
  },
  {
    "code": "LCA",
    "city": "Larnaca",
    "airport": "Larnaca",
    "country": "Cyprus",
    "region": "Southern Europe"
  },
  {
    "code": "PFO",
    "city": "Paphos",
    "airport": "Paphos",
    "country": "Cyprus",
    "region": "Southern Europe"
  },
  {
    "code": "LUX",
    "city": "Luxembourg",
    "airport": "Luxembourg",
    "country": "Luxembourg",
    "region": "Western Europe"
  },
  {
    "code": "IST",
    "city": "Istanbul",
    "airport": "Istanbul",
    "country": "Türkiye",
    "region": "Southeastern Europe"
  },
  {
    "code": "SAW",
    "city": "Istanbul",
    "airport": "Sabiha Gökçen",
    "country": "Türkiye",
    "region": "Southeastern Europe"
  },
  {
    "code": "AYT",
    "city": "Antalya",
    "airport": "Antalya",
    "country": "Türkiye",
    "region": "Southeastern Europe"
  },
  {
    "code": "FAE",
    "city": "Vágar",
    "airport": "Vágar",
    "country": "Faroe Islands",
    "region": "Northern Europe"
  }
];

export const EUROPE_DEFAULT_CODES = ["LHR","CDG","LIS","MAD","BCN","FCO","AMS","KEF","LGW","OPO","MXP","VCE","DUB","EDI","ZRH","FRA","MUC","VIE","CPH","OSL","ATH","NCE","PRG","BUD"] as const;

/** Search by code, city, airport name, country or region. */
export function searchEuropeAirports(query: string): EuropeAirport[] {
  const q = query.trim().toLocaleLowerCase();
  if (!q) return EUROPE_AIRPORTS;
  return EUROPE_AIRPORTS.filter((a) =>
    [a.code, a.city, a.airport, a.country, a.region]
      .some((value) => value.toLocaleLowerCase().includes(q))
  );
}
