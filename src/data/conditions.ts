export type Condition = {
  id: string;
  name: string;
  type: string;
  overview: string;
  symptoms: {
    common: string[];
    additional: string[];
  };
  causes: string[];
  riskFactors: string[];
  treatment: string[];
  prevention: string[];
  urgentCare: string[];
  image: string;
};

export const conditions: Condition[] = [
  {
    id: 'dfu',
    name: 'Diabetic Foot Ulcer (DFU)',
    type: 'Diabetic Wound',
    overview: 'A Diabetic Foot Ulcer (DFU) is an open sore or wound that occurs in approximately 15% of patients with diabetes and is commonly located on the bottom of the foot. DFUs are a major cause of morbidity and can lead to serious complications including infection and amputation if not managed properly.',
    symptoms: {
      common: ['Open sore or wound on the foot', 'Swelling, redness, and warmth around the wound', 'Drainage from the wound', 'Odor from the wound', 'Pain or tenderness in the affected area'],
      additional: ['Fever or chills (if infected)', 'Black tissue (necrosis)', 'Numbness or tingling', 'Delayed healing']
    },
    causes: ['Poor blood circulation', 'High blood sugar levels', 'Nerve damage (neuropathy)', 'Foot trauma or pressure', 'Infection'],
    riskFactors: ['Diabetes mellitus', 'Peripheral neuropathy', 'Poor glycemic control', 'History of foot ulcers', 'Foot deformities', 'Smoking', 'Kidney disease'],
    treatment: ['Blood sugar control', 'Wound cleaning and dressing', 'Debridement (removal of dead tissue)', 'Antibiotics for infection', 'Offloading pressure from the foot', 'Surgical intervention if needed'],
    prevention: ['Daily foot inspection', 'Proper foot hygiene', 'Wearing appropriate footwear', 'Regular medical check-ups', 'Prompt treatment of minor foot injuries'],
    urgentCare: ['Signs of spreading infection (redness, swelling, warmth)', 'Fever or chills', 'Black or foul-smelling tissue', 'Rapidly worsening pain', 'Non-healing wound', 'Signs of sepsis (confusion, rapid heartbeat)'],
    image: '/dfu.jpg'
  },
  {
    id: 'ba-cellulitis',
    name: 'BA-Cellulitis',
    type: 'Bacterial Infection',
    overview: 'Cellulitis is a common bacterial skin infection that affects the deeper layers of skin and subcutaneous tissue. It occurs when bacteria enter through breaks in the skin, causing inflammation, redness, and swelling. The infection can spread rapidly if left untreated and may lead to serious complications.',
    symptoms: {
      common: ['Red, swollen skin that feels warm to touch', 'Pain and tenderness in the affected area', 'Skin that appears stretched or glossy', 'Fever and chills', 'Red streaking from the infected area', 'Swollen lymph nodes'],
      additional: ['Fatigue and weakness', 'Nausea or vomiting', 'Muscle aches', 'Rapid pulse', 'Dizziness']
    },
    causes: ['Staphylococcus and Streptococcus bacteria', 'Bacteria entering through cuts, scrapes, or wounds', 'Insect bites or stings', 'Surgical incisions', 'Skin conditions like eczema or athlete\'s foot'],
    riskFactors: ['Diabetes mellitus', 'Compromised immune system', 'Skin injuries or chronic skin conditions', 'Poor circulation', 'Obesity', 'History of cellulitis', 'Intravenous drug use', 'Lymphedema'],
    treatment: ['Oral antibiotics (most common treatment)', 'Intravenous antibiotics for severe cases', 'Pain relievers and anti-inflammatory medications', 'Elevation of the affected limb', 'Rest and adequate hydration', 'Warm compresses to reduce pain'],
    prevention: ['Keep skin clean and moisturized', 'Treat cuts and wounds promptly', 'Manage underlying conditions like diabetes', 'Avoid walking barefoot in public areas', 'Maintain good hygiene practices', 'Seek prompt treatment for skin infections'],
    urgentCare: ['Red streaking extending from the infected area', 'High fever or chills', 'Rapid spread of redness or swelling', 'Signs of systemic infection', 'Severe pain that worsens rapidly', 'Areas of skin that turn black or develop blisters'],
    image: '/ba-cellulitis.webp'
  },
  {
    id: 'ba-impetigo',
    name: 'BA-Impetigo',
    type: 'Bacterial Infection',
    overview: 'Impetigo is a highly contagious superficial bacterial skin infection that primarily affects infants and children. It is characterized by the formation of vesicles that rupture and form honey-colored crusts. The infection is usually caused by Staphylococcus aureus or Streptococcus pyogenes.',
    symptoms: {
      common: ['Small red spots that develop into fluid-filled blisters', 'Honey-colored or yellowish crusts after blisters burst', 'Itching and mild pain', 'Red, raw skin after crusts are removed', 'Lesions that spread to other areas'],
      additional: ['Swollen lymph nodes near the infection', 'Mild fever in some cases', 'Multiple lesions in different stages of healing']
    },
    causes: ['Staphylococcus aureus bacteria', 'Streptococcus pyogenes (Group A Strep)', 'Direct contact with infected skin', 'Contaminated objects or surfaces', 'Scratching infected areas'],
    riskFactors: ['Age (more common in children 2-5 years)', 'Crowded living conditions', 'Poor hygiene', 'Warm, humid weather', 'Skin injuries or insect bites', 'Participation in contact sports', 'Compromised skin barrier'],
    treatment: ['Topical antibiotics (mupirocin ointment)', 'Oral antibiotics for widespread infection', 'Gentle cleansing with antibacterial soap', 'Removal of crusts with warm, soapy water', 'Covering lesions to prevent spread', 'Pain relievers if needed'],
    prevention: ['Maintain good personal hygiene', 'Keep fingernails short and clean', 'Avoid touching or scratching lesions', 'Wash hands frequently', 'Clean and disinfect surfaces', 'Avoid sharing personal items', 'Keep wounds clean and covered'],
    urgentCare: ['Signs of deeper skin infection', 'Fever or systemic illness', 'Rapid spread of lesions', 'Signs of kidney problems (rare complication)', 'Lesions that do not improve with treatment', 'Severe pain or extensive involvement'],
    image: '/ba-impetigo.webp'
  },
  {
    id: 'fu-athlete-foot',
    name: "FU-Athlete's Foot",
    type: 'Fungal Infection',
    overview: "Athlete's foot (tinea pedis) is a fungal infection that typically affects the skin between the toes and on the soles of the feet. It thrives in warm, moist environments and is commonly contracted in public areas like swimming pools, locker rooms, and showers.",
    symptoms: {
      common: ['Itching and burning sensation between toes', 'Peeling, cracking, or scaling skin', 'Red, inflamed skin', 'Blisters or ulcers in severe cases', 'Foul odor from feet', 'Dry, scaly skin on soles and sides of feet'],
      additional: ['Thickened, discolored toenails', 'Secondary bacterial infection from scratching', 'Spread to other areas of the body']
    },
    causes: ['Trichophyton rubrum (most common)', 'Trichophyton mentagrophytes', 'Epidermophyton floccosum', 'Direct contact with infected skin or surfaces', 'Contaminated footwear or socks'],
    riskFactors: ['Frequent use of public pools or locker rooms', 'Wearing tight-fitting, poorly ventilated shoes', 'Excessive sweating (hyperhidrosis)', 'Walking barefoot in public areas', 'Compromised immune system', 'Diabetes mellitus', 'Poor foot hygiene'],
    treatment: ['Over-the-counter antifungal creams or powders', 'Prescription antifungal medications for severe cases', 'Keeping feet clean and dry', 'Changing socks daily or more frequently', 'Using antifungal powder in shoes', 'Oral antifungal medications for resistant cases'],
    prevention: ['Keep feet clean and dry', 'Wear moisture-wicking socks', 'Use antifungal powder or spray', 'Wear sandals in public showers and pools', 'Change socks frequently', 'Choose breathable footwear', 'Disinfect shoes regularly'],
    urgentCare: ['Signs of secondary bacterial infection', 'Severe swelling or pain', 'Red streaking up the leg', 'Fever or chills', 'Diabetic patients with any foot infection', 'Non-healing ulcers or wounds'],
    image: '/fu-athlete-foot.jpg'
  },
  {
    id: 'fu-nail-fungus',
    name: 'FU-Nail Fungus',
    type: 'Fungal Infection',
    overview: 'Nail fungus (onychomycosis) is a fungal infection that affects the nails, most commonly the toenails. The infection causes the nails to become thick, discolored, and brittle. It can be difficult to treat and may require long-term therapy.',
    symptoms: {
      common: ['Thickened nails', 'Yellow, brown, or white discoloration', 'Brittle, crumbly, or ragged nails', 'Distorted nail shape', 'Separation of nail from nail bed', 'Foul smell from infected nail'],
      additional: ['Pain or discomfort when wearing shoes', 'Complete nail loss in severe cases', 'Secondary bacterial infections']
    },
    causes: ['Dermatophyte fungi (most common)', 'Candida species', 'Non-dermatophyte molds', 'Trauma to the nail', 'Contaminated nail instruments'],
    riskFactors: ['Increasing age', 'Male gender', 'Diabetes mellitus', 'Compromised immune system', 'Poor circulation', 'History of athlete\'s foot', 'Nail trauma or injury', 'Hyperhidrosis (excessive sweating)'],
    treatment: ['Topical antifungal medications', 'Oral antifungal medications (terbinafine, itraconazole)', 'Nail removal in severe cases', 'Laser therapy (newer treatment option)', 'Medicated nail polish', 'Regular nail debridement'],
    prevention: ['Keep nails short and clean', 'Wear breathable footwear', 'Use antifungal spray or powder', 'Avoid walking barefoot in public areas', "Don't share nail clippers or files", 'Choose reputable nail salons', "Treat athlete's foot promptly"],
    urgentCare: ['Signs of secondary bacterial infection', 'Severe pain or swelling', 'Diabetic patients with nail infections', 'Complete nail loss', 'Signs of cellulitis around the nail', 'Non-response to treatment after several months'],
    image: '/fu-nail-fungus.webp'
  },
  {
    id: 'fu-ringworm',
    name: 'FU-Ringworm',
    type: 'Fungal Infection',
    overview: 'Ringworm (tinea corporis) is a fungal infection of the skin that appears as a circular, red, scaly patch with clearer skin in the center, creating a ring-like appearance. Despite its name, it is not caused by worms but by dermatophyte fungi.',
    symptoms: {
      common: ['Circular, red, scaly patches on skin', 'Clear or less affected skin in the center', 'Itching and burning sensation', 'Slightly raised border of the lesion', 'Hair loss if scalp is affected', 'Multiple rings that may overlap'],
      additional: ['Blisters or pustules around the ring', 'Secondary bacterial infection from scratching', 'Spread to other body areas']
    },
    causes: ['Trichophyton rubrum', 'Microsporum canis (from animals)', 'Trichophyton mentagrophytes', 'Direct contact with infected person or animal', 'Contaminated objects or surfaces'],
    riskFactors: ['Close contact with infected individuals', 'Contact with infected animals', 'Warm, humid environments', 'Compromised immune system', 'Participation in contact sports', 'Poor hygiene', 'Crowded living conditions'],
    treatment: ['Topical antifungal creams or ointments', 'Oral antifungal medications for widespread infection', 'Keep affected area clean and dry', 'Continue treatment for 2-4 weeks after symptoms resolve', 'Treat all infected family members or pets', 'Disinfect contaminated items'],
    prevention: ['Maintain good personal hygiene', 'Avoid sharing personal items', 'Keep skin clean and dry', 'Wear loose-fitting, breathable clothing', 'Avoid contact with infected animals', 'Disinfect gym equipment before use', 'Treat pets for fungal infections'],
    urgentCare: ['Signs of secondary bacterial infection', 'Widespread or rapidly spreading lesions', 'Severe inflammation or pain', 'Non-response to over-the-counter treatments', 'Involvement of scalp or beard area', 'Immunocompromised patients with any fungal infection'],
    image: '/fu-ringworm.avif'
  },
  {
    id: 'pa-cutaneous-larva-migrans',
    name: 'PA-Cutaneous Larva Migrans',
    type: 'Parasitic Infection',
    overview: 'Cutaneous larva migrans, also known as "creeping eruption," is a parasitic skin infection caused by hookworm larvae that penetrate the skin and migrate through the epidermis. It is commonly acquired by walking barefoot on contaminated sand or soil.',
    symptoms: {
      common: ['Serpentine, raised, red tracks on skin', 'Intense itching, especially at night', 'Tracks that advance daily', 'Small, red bumps at the beginning of tracks', 'Secondary bacterial infection from scratching'],
      additional: ['Blisters along the tracks', 'Swelling in affected areas', 'Multiple tracks in some cases']
    },
    causes: ['Ancylostoma braziliense (most common)', 'Ancylostoma caninum', 'Uncinaria stenocephala', 'Contact with contaminated soil or sand', 'Walking barefoot in areas with animal feces'],
    riskFactors: ['Walking barefoot on beaches or in tropical areas', 'Contact with areas where dogs and cats defecate', 'Travel to tropical or subtropical regions', 'Occupational exposure (gardeners, construction workers)', 'Children playing in sandboxes', 'Poor sanitation conditions'],
    treatment: ['Oral antiparasitic medications (albendazole, ivermectin)', 'Topical antiparasitic creams in some cases', 'Antihistamines for itching', 'Topical corticosteroids for inflammation', 'Antibiotics if secondary bacterial infection occurs', 'Freezing therapy (cryotherapy) for localized lesions'],
    prevention: ['Wear protective footwear on beaches and in endemic areas', 'Avoid sitting directly on sand or soil', 'Use beach towels or chairs', 'Maintain good pet hygiene and deworming', 'Proper disposal of animal waste', 'Educate about risks in endemic areas'],
    urgentCare: ['Signs of secondary bacterial infection', 'Severe allergic reactions', 'Multiple or extensive lesions', 'Non-response to initial treatment', 'Development of fever or systemic symptoms', 'Immunocompromised patients with any parasitic infection'],
    image: '/pa-cutaneous-larva-migrans.jpg'
  },
  {
    id: 'vi-chickenpox',
    name: 'VI-Chickenpox',
    type: 'Viral Infection',
    overview: 'Chickenpox (varicella) is a highly contagious viral infection caused by the varicella-zoster virus. It typically affects children and is characterized by an itchy rash with fluid-filled blisters that appear in successive crops over several days.',
    symptoms: {
      common: ['Itchy, blister-like rash throughout the body', 'Red spots that develop into fluid-filled vesicles', 'Vesicles that crust over and heal', 'Fever, usually mild', 'Headache and general malaise', 'Loss of appetite'],
      additional: ['Sore throat', 'Mild abdominal pain', 'Feeling unwell for 1-2 days before rash appears', 'Fatigue and irritability']
    },
    causes: ['Varicella-zoster virus (VZV)', 'Respiratory droplets from infected person', 'Direct contact with vesicle fluid', 'Airborne transmission in enclosed spaces'],
    riskFactors: ['Not being vaccinated against varicella', 'Close contact with infected individuals', 'Age (more common in children under 12)', 'Immunocompromised state', 'Pregnancy (risk to fetus)', 'Never having had chickenpox before'],
    treatment: ['Symptomatic treatment (rest, fluids, fever reducers)', 'Antiviral medications for high-risk patients', 'Calamine lotion for itching relief', 'Cool baths with baking soda or oatmeal', 'Antihistamines for severe itching', 'Avoid aspirin in children (Reye\'s syndrome risk)'],
    prevention: ['Varicella vaccination (highly effective)', 'Avoid contact with infected individuals', 'Isolation of infected persons until all lesions crust over', 'Good hand hygiene', 'Respiratory etiquette', 'Boost immune system health'],
    urgentCare: ['Signs of secondary bacterial infection', 'Difficulty breathing or chest pain', 'High fever (>102°F) persisting beyond 4 days', 'Severe headache or neck stiffness', 'Confusion or altered mental state', 'Pregnant women exposed to chickenpox', 'Immunocompromised individuals with exposure'],
    image: '/vi-chickenpox.webp'
  },
  {
    id: 'vi-shingles',
    name: 'VI-Shingles',
    type: 'Viral Infection',
    overview: 'Shingles (herpes zoster) is a viral infection caused by the reactivation of the varicella-zoster virus, the same virus that causes chickenpox. It typically presents as a painful, blistering rash that appears in a band-like distribution along nerve pathways.',
    symptoms: {
      common: ['Painful, burning, or tingling sensation', 'Red rash that develops into fluid-filled blisters', 'Rash typically appears on one side of the body', 'Blisters that crust over after 7-10 days', 'Fever and chills', 'Headache and general malaise'],
      additional: ['Fatigue and weakness', 'Sensitivity to light', 'Muscle pain', 'Nausea', 'Post-herpetic neuralgia (persistent pain after rash heals)']
    },
    causes: ['Reactivation of varicella-zoster virus', 'Virus remains dormant in nerve roots after chickenpox', 'Weakened immune system triggers reactivation', 'Stress or illness can precipitate outbreak', 'Age-related immune decline'],
    riskFactors: ['Age over 50 years', 'History of chickenpox', 'Immunocompromised state', 'Cancer or cancer treatments', 'Chronic use of steroids', 'Stress or physical trauma', 'Certain medications that suppress immunity'],
    treatment: ['Antiviral medications (acyclovir, valacyclovir, famciclovir)', 'Pain medications (acetaminophen, ibuprofen)', 'Topical anesthetics for localized pain relief', 'Cool, wet compresses', 'Calamine lotion for itching', 'Prescription pain medications for severe cases'],
    prevention: ['Shingles vaccination (recommended for adults 50+)', 'Maintain a healthy immune system', 'Manage stress effectively', 'Adequate rest and nutrition', 'Prompt treatment of the acute phase', 'Regular medical check-ups for high-risk individuals'],
    urgentCare: ['Rash near or in the eye', 'Signs of secondary bacterial infection', 'Severe, persistent pain', 'Weakness or numbness in affected area', 'Widespread rash or multiple body areas affected', 'Immunocompromised patients with any shingles symptoms', 'Signs of complications (meningitis, encephalitis)'],
    image: '/vi-shingles.jpg'
  }
]; 