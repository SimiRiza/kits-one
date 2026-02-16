
// Grading Scale Constants (URR-24)
const GRADE_POINTS = {
    "S": 10,
    "A": 9,
    "B": 8,
    "C": 7,
    "D": 6,
    "P": 4,
    "F": 0,
    "M": 0
};

const BRANCH_MAPPING = {
    "CSE": "Computer Science & Engineering",
    "CSM": "CSE (AI & ML)",
    "CSD": "CSE (Data Science)",
    "CSN": "CSE (Networks)",
    "CSO": "CSE (IoT)",
    "ECE": "Electronics & Comm. Engg",
    "EEE": "Electrical & Electronics Engg",
    "ME": "Mechanical Engineering",
    "IT": "Information Technology",
    "ECI": "Electronics Comm. & Instrumentation Engg"
};

// n: Name, c: Credits
const COURSE_DATA = {
    "CSE": {
        "Sem 1": [
            { n: "DCODE", c: 3 },
            { n: "EP", c: 4 },
            { n: "COA", c: 3 },
            { n: "PPSC", c: 4 },
            { n: "BEE", c: 4 },
            { n: "ILMS", c: 1 },
            { n: "Practicum-1", c: 1 },
            { n: "SEA/SAA-1", c: 1 },
            { n: "ETS-1", c: 1 }
        ],
        "Sem 2": [
            { n: "MTVC", c: 3 },
            { n: "EC", c: 4 },
            { n: "OS", c: 3 },
            { n: "DSTC", c: 4 },
            { n: "ECRW", c: 2 },
            { n: "Sports & Yoga", c: 1 },
            { n: "EGCAD", c: 1 },
            { n: "PSD Lab-1", c: 1 },
            { n: "Practicum-2", c: 1 },
            { n: "SEA/SAA-2", c: 1 },
            { n: "ETS-2", c: 1 }
        ],
        "Sem 3": [
            { n: "SE", c: 3 },
            { n: "TOC", c: 3 },
            { n: "ADS", c: 4 },
            { n: "CN", c: 3 },
            { n: "OOP Through Java", c: 4 },
            { n: "QALR", c: 2 },
            { n: "PSD Lab-2", c: 1 },
            { n: "Practicum-3", c: 1 },
            { n: "SEA/SAA-3", c: 1 },
            { n: "ETS-3", c: 1 }
        ],
 /*
 * Added `code` field for each subject.
 * Purpose:
 * - Enables stable UMS auto-fill using official course codes.
 * - Avoids fragile name-based matching.
 * - Does NOT affect SGPA, Planner, or UI display logic.
 * - Currently implemented for Sem 4 (safe, isolated change).
 */
"Sem 4": [
    { n: "DMPS", code: "U24MH401", c: 3 },
    { n: "WP", code: "U24CS402", c: 4 },
    { n: "DBMS", code: "U24CS403", c: 4 },
    { n: "AI", code: "U24CS404", c: 3 },
    { n: "PP", code: "U24CS405", c: 4 },
    { n: "SIS", code: "U24VA406A", c: 1 },/* Explicitly mark standalone LABS as type "lab" so that UMS auto-fill matches correctly.*/
    { n: "PSD Lab-3", code: "U24SE407", c: 1, type: "lab" },
    { n: "Practicum-4", c: 1 },
    { n: "SEA/SAA-4", c: 1 },
    { n: "ETS-4", c: 1 }
],
"Sem 5": [
    { n: "M-Elective 1", code: "U24OE501YYX", c: 3 },
    { n: "ML", code: "U24CS502", c: 4 },
    { n: "Full Stack Dev", code: "U24CS503", c: 4 },
    { n: "CD", code: "U24CS504", c: 4 },
    { n: "S&E Basket", code: "U24ST505X", c: 3 },
    { n: "EITK", code: "U24IK506A", c: 2 },
    { n: "PSD Lab-4", code: "U24SE507", c: 1, type: "lab" },
    { n: "Tech. English", code: "U24MH508", c: 1 },
    { n: "Seminar", code: "U24CS509", c: 1 },
    { n: "ETS-5", code: "U24AE510", c: 1 }
],

"Sem 6": [
    { n: "P-Elective 1", code: "U24CS601", c: 3 },
    { n: "CNS", code: "U24CS602", c: 3 },
    { n: "DAA", code: "U24CS603", c: 4 },
    { n: "IOT", code: "U24IN604", c: 4 },
    { n: "MCB", code: "U24MB605X", c: 3 },
    { n: "UHV-II", code: "U24IK606B", c: 2 },
    { n: "PSD Lab-5", code: "U24SE607", c: 1, type: "lab" },
    { n: "Mini Project", code: "U24CS608", c: 1, type: "lab" },
    { n: "ETS-6", code: "U24AE609", c: 1 }
],

"Sem 7": [
    { n: "M-Elective-II", code: "U24OE701XX", c: 3 },
    { n: "P-Elective-II", code: "U24CS702", c: 3 },
    { n: "CC", code: "U24CS703", c: 4 },
    { n: "DL", code: "U24CS704", c: 3 },
    { n: "Blockchain", code: "U24CS705", c: 3 },
    { n: "Internship", code: "U24CS706", c: 1, type: "lab" },
    { n: "Major Project-I", code: "U24CS707", c: 4 }
],

"Sem 8": [
    { n: "M-Elective-III", code: "U24OE801XX", c: 3 },
    { n: "P-Elective-III", code: "U24CS802", c: 3 },
    { n: "P-Elective-IV", code: "U24CS803", c: 3 },
    { n: "Major Project-II", code: "U24CS804", c: 6 }
]
    },
    "CSM": {
        "Sem 1": [
            { n: "DCODE", c: 3 },
            { n: "EC", c: 4 },
            { n: "STLD", c: 3 },
            { n: "PPSC", c: 4 },
            { n: "ECRW", c: 2 },
            { n: "Sports & Yoga", c: 1 },
            { n: "EGCAD", c: 1 },
            { n: "Practicum-1", c: 1 },
            { n: "SEA/SAA-1", c: 1 },
            { n: "ETS-1", c: 1 }
        ],
        "Sem 2": [
            { n: "MTVC", c: 3 },
            { n: "EP", c: 4 },
            { n: "COA", c: 3 },
            { n: "DSTC", c: 4 },
            { n: "BEE", c: 4 },
            { n: "ILMS", c: 1 },
            { n: "PSD Lab-1", c: 1 },
            { n: "Practicum-2", c: 1 },
            { n: "SEA/SAA-2", c: 1 },
            { n: "ETS-2", c: 1 }
        ],
        "Sem 3": [
            { n: "EM & SML", c: 3 },
            { n: "ADS", c: 4 },
            { n: "OS", c: 3 },
            { n: "ATCD", c: 3 },
            { n: "OOP Through Java", c: 4 },
            { n: "SIS", c: 1 },
            { n: "PSD Lab-2", c: 1 },
            { n: "Practicum-3", c: 1 },
            { n: "SEA/SAA-3", c: 1 },
            { n: "ETS-3", c: 1 }
        ],
        "Sem 4": [
            { n: "DBMS", c: 4 },
            { n: "AI", c: 3 },
            { n: "SE", c: 3 },
            { n: "CN", c: 3 },
            { n: "PP", c: 4 },
            { n: "QALR", c: 2 },
            { n: "PSD Lab-3", c: 1 },
            { n: "Practicum-4", c: 1 },
            { n: "SEA/SAA-4", c: 1 },
            { n: "ETS-4", c: 1 }
        ],
        "Sem 5": [
    { n: "M-Elective 1", code: "U24OE501YYX", c: 3 },
    { n: "WP", code: "U24AI502", c: 4 },
    { n: "DAA", code: "U24AI503", c: 3 },
    { n: "ML", code: "U24AI504", c: 4 },
    { n: "M Basket", code: "U24MB505X", c: 3 },
    { n: "UHV-II", code: "U24IK506B", c: 2 },
    { n: "PSD Lab-4", code: "U24AI507", c: 1, type: "lab" },
    { n: "Tech. English", code: "U24MH508", c: 1 },
    { n: "Seminar", code: "U24AI509", c: 1 },
    { n: "ETS-5", code: "U24AE510", c: 1 }
],

"Sem 6": [
    { n: "P-Elective 1", code: "U24AI601X", c: 3 },
    { n: "CV & IP", code: "U24AI602", c: 3 },
    { n: "DL", code: "U24AI603", c: 4 },
    { n: "DevOps", code: "U24AI604", c: 4 },
    { n: "S&E Basket", code: "U24ST605X", c: 3 },
    { n: "EITK", code: "U24IK606B", c: 2 },
    { n: "PSD Lab-5", code: "U24AI607", c: 1, type: "lab" },
    { n: "Mini Project", code: "U24AI608", c: 1, type: "lab" },
    { n: "ETS-6", code: "U24AE609", c: 1 }
],

"Sem 7": [
    { n: "M-Elective-II", code: "U24OE701YYX", c: 3 },
    { n: "P-Elective-II", code: "U24AI702X", c: 3 },
    { n: "BDA", code: "U24AI703", c: 4 },
    { n: "CC", code: "U24AI704", c: 3 },
    { n: "EH", code: "U24AI705", c: 3 },
    { n: "Internship", code: "U24AI706", c: 1, type: "lab" },
    { n: "Major Project-I", code: "U24AI707", c: 4 }
],

"Sem 8": [
    { n: "M-Elective-III", code: "U24OE801YYX", c: 3 },
    { n: "P-Elective-III", code: "U24AI802X", c: 3 },
    { n: "P-Elective-IV", code: "U24AI803X", c: 3 },
    { n: "Major Project-II", code: "U24AI804", c: 6 }
]
    },
    "ME": {
        "Sem 1": [
            { n: "DCODE", code: "U24MH101", c: 3, type: "theory" },
            { n: "EC", code: "U24CY102A", c: 4 },
            { n: "TD", code: "U24ME103", c: 3, type: "theory" },
            { n: "PPSC", code: "U24ME104", c: 4 },
            { n: "ECRW", code: "U24MH105", c: 2, type: "theory" },
            { n: "Sports & Yoga", code: "U24VA106", c: 1, type: "lab" },
            { n: "EGCAD", code: "U24ME107", c: 1, type: "lab" }
        ],
        "Sem 2": [
            { n: "MTVC", code: "U24MH201", c: 3, type: "theory" },
            { n: "EP", code: "U24PY202A", c: 4 },
            { n: "EM & M", code: "U24ME203", c: 3, type: "theory" },
            { n: "DSTC", code: "U24ME204", c: 4 },
            { n: "BEEE", code: "U24EE205A", c: 4 },
            { n: "ES", code: "U24CY206", c: 0, type: "theory" },
            { n: "ILMS", code: "U24AE207", c: 1, type: "lab" },
            { n: "PSD Lab-1", code: "U24SE208", c: 1, type: "lab" }
        ],
        "Sem 3": [
            { n: "AM", code: "U24MH301B", c: 3, type: "theory" },
            { n: "MoM", code: "U24ME302", c: 4 },
            { n: "MT", code: "U24ME303", c: 3, type: "theory" },
            { n: "HPE", code: "U24ME304", c: 3, type: "theory" },
            { n: "PP", code: "U24ME305", c: 4 },
            { n: "SIS", code: "U24VA306B", c: 1, type: "lab" },
            { n: "PSD Lab-2", code: "U24SE307", c: 1, type: "lab" }
        ],
        "Sem 4": [
            { n: "HT", code: "U24ME401", c: 3, type: "theory" },
            { n: "MD", code: "U24ME402", c: 4 },
            { n: "FM & HM", code: "U24ME403", c: 4 },
            { n: "DME", code: "U24ME404", c: 3, type: "theory" },
            { n: "MT & M", code: "U24ME405", c: 4 },
            { n: "QALR", code: "U24VA406A", c: 2, type: "theory" },
            { n: "PSD Lab-3", code: "U24SE407", c: 1, type: "lab" }
        ],
        "Sem 5": [
            { n: "M-Elective 1", code: "", c: 3, type: "theory" },
            { n: "R & AC", code: "U24ME502", c: 4 },
            { n: "M & M", code: "U24ME503", c: 3, type: "theory" },
            { n: "AI & ML", code: "U24ME504", c: 4 },
            { n: "M Basket", code: "", c: 3, type: "theory" },
            { n: "UHV-II", code: "U24IK506B", c: 2, type: "theory" },
            { n: "CAD Lab", code: "U24ME507", c: 1, type: "lab" },
            { n: "Tech. English", code: "U24MH508", c: 1, type: "theory" },
            { n: "Seminar", code: "U24ME509", c: 1, type: "theory" }
        ],
        "Sem 6": [
            { n: "P-Elective 1", code: "U24ME601", c: 3, type: "theory" },
            { n: "MM & A", code: "U24ME602", c: 4 },
            { n: "DoM", code: "U24ME603", c: 3, type: "theory" },
            { n: "CFD", code: "U24ME604", c: 4 },
            { n: "S&E Basket", code: "", c: 3, type: "theory" },
            { n: "EITK", code: "U24IK606A", c: 2, type: "theory" },
            { n: "AIML Lab", code: "U24ME607", c: 1, type: "lab" },
            { n: "Mini Project", code: "U24ME608", c: 1, type: "theory" }
        ],
        "Sem 7": [
            { n: "M-Elective-II", code: "U24OE701YYX", c: 3, type: "theory" },
            { n: "P-Elective-II", code: "U24ME702", c: 3, type: "theory" },
            { n: "FEM", code: "U24ME703", c: 4 },
            { n: "Additive MFG", code: "U24ME704", c: 3, type: "theory" },
            { n: "P & OM", code: "U24ME705", c: 3, type: "theory" },
            { n: "Internship", code: "U24ME706", c: 1, type: "theory" },
            { n: "Major Project-I", code: "U24ME707", c: 4 }
        ],
        "Sem 8": [
            { n: "M-Elective-III", code: "U24OE801YYX", c: 3 },
            { n: "P-Elective-III", code: "U24ME802", c: 3 },
            { n: "P-Elective-IV", code: "U24ME803", c: 3 },
            { n: "Major Project-II", code: "U24ME804", c: 6 }
        ]
    },
    "CSD": {
        "Sem 1": [
            { n: "DCODE", c: 3 },
            { n: "EC", c: 4 },
            { n: "STLD", c: 3 },
            { n: "PPSC", c: 4 },
            { n: "ECRW", c: 2 },
            { n: "Sports & Yoga", c: 1 },
            { n: "EGCAD", c: 1 },
            { n: "Practicum-1", c: 1 },
            { n: "SEA/SAA-1", c: 1 },
            { n: "ETS-1", c: 1 }
        ],
        "Sem 2": [
            { n: "MTVC", c: 3 },
            { n: "EP", c: 4 },
            { n: "COA", c: 3 },
            { n: "DSTC", c: 4 },
            { n: "BEE", c: 4 },
            { n: "ILMS", c: 1 },
            { n: "PSD Lab-1", c: 1 },
            { n: "Practicum-2", c: 1 },
            { n: "SEA/SAA-2", c: 1 },
            { n: "ETS-2", c: 1 }
        ],
        "Sem 3": [
            { n: "EM & SD", c: 3 },
            { n: "ADS", c: 4 },
            { n: "OS", c: 3 },
            { n: "ATCD", c: 3 },
            { n: "OOP Through Java", c: 4 },
            { n: "SIS", c: 1 },
            { n: "PSD Lab-2", c: 1 },
            { n: "Practicum-3", c: 1 },
            { n: "SEA/SAA-3", c: 1 },
            { n: "ETS-3", c: 1 }
        ],
        "Sem 4": [
            { n: "DBMS", c: 4 },
            { n: "AI", c: 3 },
            { n: "SE", c: 3 },
            { n: "CN", c: 3 },
            { n: "PP", c: 4 },
            { n: "QALR", c: 2 },
            { n: "PSD Lab-3", c: 1 },
            { n: "Practicum-4", c: 1 },
            { n: "SEA/SAA-4", c: 1 },
            { n: "ETS-4", c: 1 }
        ],
        "Sem 5": [
    { n: "M-Elective 1", code: "U24OE501YYX", c: 3 },
    { n: "WP", code: "U24DS502", c: 4 },
    { n: "DAA", code: "U24DS503", c: 3 },
    { n: "ML", code: "U24DS504", c: 4 },
    { n: "M Basket", code: "U24MB505X", c: 3 },
    { n: "UHV-II", code: "U24IK506B", c: 2 },
    { n: "PSD Lab-4", code: "U24DS507", c: 1, type: "lab" },
    { n: "Tech. English", code: "U24MH508", c: 1 },
    { n: "Seminar", code: "U24DS509", c: 1 },
    { n: "ETS-5", code: "U24AE510", c: 1 }
],

"Sem 6": [
    { n: "P-Elective 1", code: "U24DS601X", c: 3 },
    { n: "CV & IP", code: "U24DS602", c: 3 },
    { n: "DL", code: "U24DS603", c: 4 },
    { n: "DevOps", code: "U24DS604", c: 4 },
    { n: "S&E Basket", code: "U24ST605X", c: 3 },
    { n: "EITK", code: "U24IK606B", c: 2 },
    { n: "PSD Lab-5", code: "U24DS607", c: 1, type: "lab" },
    { n: "Mini Project", code: "U24DS608", c: 1, type: "lab" },
    { n: "ETS-6", code: "U24AE609", c: 1 }
],

"Sem 7": [
    { n: "M-Elective-II", code: "U24OE701YYX", c: 3 },
    { n: "P-Elective-II", code: "U24DS702X", c: 3 },
    { n: "BDA", code: "U24DS703", c: 4 },
    { n: "CC", code: "U24DS704", c: 3 },
    { n: "EH", code: "U24DS705", c: 3 },
    { n: "Internship", code: "U24DS706", c: 1, type: "lab" },
    { n: "Major Project-I", code: "U24DS707", c: 4 }
],

"Sem 8": [
    { n: "M-Elective-III", code: "U24OE801YYX", c: 3 },
    { n: "P-Elective-III", code: "U24DS802X", c: 3 },
    { n: "P-Elective-IV", code: "U24DS803X", c: 3 },
    { n: "Major Project-II", code: "U24DS804", c: 6 }
]
 },
    "CSN": {
        "Sem 1": [
            { n: "DCODE", c: 3 },
            { n: "EC", c: 4 },
            { n: "DLD", c: 3 },
            { n: "PPSC", c: 4 },
            { n: "ECRW", c: 2 },
            { n: "Sports & Yoga", c: 1 },
            { n: "EGCAD", c: 1 },
            { n: "Practicum-1", c: 1 },
            { n: "SEA/SAA-1", c: 1 },
            { n: "ETS-1", c: 1 }
        ],
        "Sem 2": [
            { n: "MTVC", c: 3 },
            { n: "EP", c: 4 },
            { n: "COA", c: 3 },
            { n: "DSTC", c: 4 },
            { n: "BEE", c: 4 },
            { n: "ILMS", c: 1 },
            { n: "PSD Lab-1", c: 1 },
            { n: "Practicum-2", c: 1 },
            { n: "SEA/SAA-2", c: 1 },
            { n: "ETS-2", c: 1 }
        ],
        "Sem 3": [
            { n: "ATCD", c: 3 },
            { n: "OS", c: 3 },
            { n: "ADS", c: 4 },
            { n: "CN", c: 4 },
            { n: "OOP Through Java", c: 4 },
            { n: "SIS", c: 1 },
            { n: "PSD Lab-2", c: 1 },
            { n: "Practicum-3", c: 1 },
            { n: "SEA/SAA-3", c: 1 },
            { n: "ETS-3", c: 1 }
        ],
/*
 * CSN - Semester 4
 * Added course codes for robust UMS auto-fill matching.
 */
"Sem 4": [
    { n: "DMPS", code: "U24MH401", c: 3 },
    { n: "DBMS", code: "U24CN402", c: 4 },
    { n: "DAA", code: "U24CN403", c: 3 },
    { n: "PP", code: "U24CN405", c: 4 },
    { n: "I & V", code: "U24CN404", c: 4 },
    { n: "QALR", code: "U24VA406A", c: 2 },
    { n: "PSD Lab-3", c: 1, code: "U24SE407", type: "lab" },
    { n: "Practicum-4", c: 1 },
    { n: "SEA/SAA-4", c: 1 },
    { n: "ETS-4", c: 1 }
],
        "Sem 5": [
    { n: "M-Elective 1", code: "U24OE501YYX", c: 3 },
    { n: "AIML", code: "U24CN502", c: 4 },
    { n: "WP", code: "U24CN503", c: 4 },
    { n: "NA", code: "U24CN504", c: 4 },
    { n: "M Basket", code: "U24MB505X", c: 3 },
    { n: "UHV-II", code: "U24IK506B", c: 2 },
    { n: "DAA Lab", code: "U24CN507", c: 1, type: "lab" },
    { n: "Tech. English", code: "U24MH508", c: 1 },
    { n: "Seminar", code: "U24CN509", c: 1 },
    { n: "ETS-5", code: "U24AE510", c: 1 }
],

"Sem 6": [
    { n: "P-Elective 1", code: "U24CN601X", c: 3 },
    { n: "CNS", code: "U24CN602", c: 4 },
    { n: "DevOps", code: "U24CN603", c: 4 },
    { n: "IoT", code: "U24CN604", c: 4 },
    { n: "S&E Basket", code: "U24ST605X", c: 3 },
    { n: "EITK", code: "U24IK606A", c: 2 },
    { n: "FSD Lab", code: "U24CN607", c: 1, type: "lab" },
    { n: "Mini Project", code: "U24CN608", c: 1, type: "lab" },
    { n: "ETS-6", code: "U24AE609", c: 1 }
],

"Sem 7": [
    { n: "M-Elective-II", code: "U24OE701YYX", c: 3 },
    { n: "P-Elective-II", code: "U24CN702", c: 3 },
    { n: "CASE", code: "U24CN703", c: 4 },
    { n: "DCN", code: "U24CN704", c: 4 },
    { n: "Internship", code: "U24CN705", c: 1, type: "lab" },
    { n: "Major Project-I", code: "U24CN706", c: 4 }
],

"Sem 8": [
    { n: "M-Elective-III", code: "U24OE801YYX", c: 3 },
    { n: "P-Elective-III", code: "U24CN802", c: 3 },
    { n: "P-Elective-IV", code: "U24CN803", c: 3 },
    { n: "Major Project-II", code: "U24CN804", c: 6 }
]
    },
    "CSO": {
        "Sem 1": [
            { n: "DCODE", c: 3 },
            { n: "EC", c: 4 },
            { n: "DLD", c: 3 },
            { n: "PPSC", c: 4 },
            { n: "ECRW", c: 2 },
            { n: "Sports & Yoga", c: 1 },
            { n: "EGCAD", c: 1 },
            { n: "Practicum-1", c: 1 },
            { n: "SEA/SAA-1", c: 1 },
            { n: "ETS-1", c: 1 }
        ],
        "Sem 2": [
            { n: "MTVC", c: 3 },
            { n: "EP", c: 4 },
            { n: "COA", c: 3 },
            { n: "DSTC", c: 4 },
            { n: "BEE", c: 4 },
            { n: "ILMS", c: 1 },
            { n: "PSD Lab-1", c: 1 },
            { n: "Practicum-2", c: 1 },
            { n: "SEA/SAA-2", c: 1 },
            { n: "ETS-2", c: 1 }
        ],
        "Sem 3": [
            { n: "FIOT", c: 4 },
            { n: "OS", c: 3 },
            { n: "ADS", c: 4 },
            { n: "CN", c: 3 },
            { n: "OOP Through Java", c: 4 },
            { n: "SIS", c: 1 },
            { n: "PSD Lab-2", c: 1 },
            { n: "Practicum-3", c: 1 },
            { n: "SEA/SAA-3", c: 1 },
            { n: "ETS-3", c: 1 }
        ],
        "Sem 4": [
            { n: "DMPS", c: 3 },
            { n: "WT", c: 4 },
            { n: "DBMS", c: 4 },
            { n: "IoTA & P", c: 3 },
            { n: "PPIoT", c: 4 },
            { n: "QALR", c: 2 },
            { n: "PSD Lab-3", c: 1 },
            { n: "Practicum-4", c: 1 },
            { n: "SEA/SAA-4", c: 1 },
            { n: "ETS-4", c: 1 }
        ],
        "Sem 5": [
    { n: "M-Elective 1", code: "U24OE501XX", c: 3 },
    { n: "AIoT", code: "U24IN502", c: 4 },
    { n: "ATCD", code: "U24IN503", c: 3 },
    { n: "DAA", code: "U24IN504", c: 4 },
    { n: "M Basket", code: "U24ST505X", c: 3 },
    { n: "UHV-II", code: "U24IK506B", c: 2 },
    { n: "FSD Lab", code: "U24IN507", c: 1, type: "lab" },
    { n: "Tech. English", code: "U24MH508", c: 1 },
    { n: "Seminar", code: "U24IN509", c: 1 },
    { n: "ETS-5", code: "U24AE510", c: 1 }
],

"Sem 6": [
    { n: "P-Elective 1", code: "U24IN601X", c: 3 },
    { n: "IoTF", code: "U24IN602", c: 4 },
    { n: "DevOps", code: "U24IN603", c: 3 },
    { n: "Industrial IoT", code: "U24IN604", c: 4 },
    { n: "S&E Basket", code: "U24MB605X", c: 3 },
    { n: "EITK", code: "U24IK606A", c: 2 },
    { n: "DevOps Lab", code: "U24IN607", c: 1, type: "lab" },
    { n: "Mini Project", code: "U24IN608", c: 1, type: "lab" },
    { n: "ETS-6", code: "U24AE609", c: 1 }
],

"Sem 7": [
    { n: "M-Elective-II", code: "U24OE701YYX", c: 3 },
    { n: "P-Elective-II", code: "U24IN702", c: 3 },
    { n: "CASE", code: "U24IN703", c: 4 },
    { n: "PSIoT", code: "U24IN704", c: 3 },
    { n: "CPS", code: "U24IN705", c: 3 },
    { n: "Internship", code: "U24IN706", c: 1, type: "lab" },
    { n: "Major Project-I", code: "U24IN707", c: 4 }
],

"Sem 8": [
    { n: "M-Elective-III", code: "U24OE801YYX", c: 3 },
    { n: "P-Elective-III", code: "U24IN802", c: 3 },
    { n: "P-Elective-IV", code: "U24IN803", c: 3 },
    { n: "Major Project-II", code: "U24IN804", c: 6 }
]

    },
    "ECE": {
        "Sem 1": [
            { n: "DCODE", code: "U24MH101", c: 3, type: "theory" },
            { n: "EP", code: "U24PY102E", c: 4 },
            { n: "STLD", code: "U24EC103", c: 3, type: "theory" },
            { n: "PPSC", code: "U24EC104", c: 4 },
            { n: "BEE", code: "U24EE105B", c: 4 },
            { n: "ES", code: "U24CY106", c: 0, type: "theory" },
            { n: "ILMS", code: "U24AE107", c: 1, type: "lab" }
        ],
        "Sem 2": [
            { n: "MTVC", code: "U24MH201", c: 3, type: "theory" },
            { n: "EC", code: "U24CY202E", c: 4 },
            { n: "ELC", code: "U24EC203", c: 3, type: "theory" },
            { n: "DSTC", code: "U24EC204", c: 4 },
            { n: "ECRW", code: "U24MH205", c: 2, type: "theory" },
            { n: "Sports & Yoga", code: "U24VA206", c: 1, type: "lab" },
            { n: "EGCAD", code: "U24ME207", c: 1, type: "lab" },
            { n: "PSD Lab-1", code: "U24SE208", c: 1, type: "lab" }
        ],
        "Sem 3": [
            { n: "AM", code: "U24MH301D", c: 3, type: "theory" },
            { n: "ECAD", code: "U24EC302", c: 4 },
            { n: "DD", code: "U24EC303", c: 4 },
            { n: "SS", code: "U24EC304", c: 3, type: "theory" },
            { n: "OOP Through Java", code: "U24EC305", c: 4 },
            { n: "QALR", code: "U24VA306A", c: 2, type: "theory" },
            { n: "PSD Lab-2", code: "U24SE307", c: 1, type: "lab" }
        ],
        "Sem 4": [
            { n: "ICA", code: "U24EC401", c: 4 },
            { n: "CS", code: "U24EC402", c: 4 },
            { n: "EMWTL", code: "U24EC403", c: 3, type: "theory" },
            { n: "COMP", code: "U24EC404", c: 3, type: "theory" },
            { n: "PP", code: "U24EC405", c: 4 },
            { n: "SIS", code: "U24VA406B", c: 1, type: "lab" },
            { n: "PSD Lab-3", code: "U24SE407", c: 1, type: "lab" }
        ],
        "Sem 5": [
            { n: "M-Elective 1", code: "U24OE501YYX", c: 3, type: "theory" },
            { n: "Mb-ESARM", code: "U24EC502", c: 4 },
            { n: "AWP", code: "U24EC503", c: 3, type: "theory" },
            { n: "AI&ML", code: "U24EC504", c: 4 },
            { n: "S&E Basket", code: "U24ST505X", c: 3, type: "theory" },
            { n: "EITK", code: "U24IK506A", c: 2, type: "theory" },
            { n: "PSD Lab-4", code: "U24SE507", c: 1, type: "lab" },
            { n: "Tech. English", code: "U24MH508", c: 1, type: "theory" },
            { n: "Seminar", code: "U24EC509", c: 1 }
        ],
        "Sem 6": [
            { n: "P-Elective 1", code: "U24EC601", c: 3, type: "theory" },
            { n: "DSPA", code: "U24EC602", c: 4 },
            { n: "VLSI", code: "U24EC603", c: 4 },
            { n: "DC & CN", code: "U24EC604", c: 3, type: "theory" },
            { n: "MCB", code: "U24EC605X", c: 3, type: "theory" },
            { n: "UHV-II", code: "U24EC606B", c: 2, type: "theory" },
            { n: "AIML Lab", code: "U24EC607", c: 1, type: "lab" },
            { n: "Mini Project", code: "U24EC608", c: 1, type: "theory" }
        ],
        "Sem 7": [
            { n: "M-Elective-II", code: "U24OE701YYX", c: 3, type: "theory" },
            { n: "P-Elective-II", code: "U24EC702", c: 3, type: "theory" },
            { n: "SVDV", code: "U24EC703", c: 4 },
            { n: "MOFC", code: "U24EC704", c: 3, type: "theory" },
            { n: "WMC", code: "U24EC705", c: 3, type: "theory" },
            { n: "Internship", code: "U24EC706", c: 1, type: "theory" },
            { n: "Major Project-I", code: "U24EC707", c: 4 }
        ],
        "Sem 8": [
            { n: "M-Elective-III", code: "U24OE801YYX", c: 3 },
            { n: "P-Elective-III", code: "U24EC802", c: 3 },
            { n: "P-Elective-IV", code: "U24EC803", c: 3 },
            { n: "Major Project-II", code: "U24EC804", c: 6 }
        ]
    },
    "EEE": {
        "Sem 1": [
            { n: "DCODE", code: "U24MH101", c: 3, type: "theory" },
            { n: "EP", code: "U24PY102D", c: 4 },
            { n: "EMS", code: "U24EE103", c: 3, type: "theory" },
            { n: "PPSC", code: "U24EE104", c: 4 },
            { n: "BEE", code: "U24EE105D", c: 4 },
            { n: "ES", code: "U24CY106", c: 0, type: "theory" },
            { n: "ILMS", code: "U24AE107", c: 1 }
        ],
        "Sem 2": [
            { n: "MTVC", code: "U24MH201", c: 3, type: "theory" },
            { n: "EC", code: "U24CY202D", c: 4 },
            { n: "AE", code: "U24CI203", c: 3, type: "theory" },
            { n: "DSTC", code: "U24EE204", c: 4 },
            { n: "ECRW", code: "U24MH205", c: 2, type: "theory" },
            { n: "Sports & Yoga", code: "U24VA206", c: 1 },
            { n: "EGCAD", code: "U24ME207", c: 1 },
            { n: "PSD Lab-1", code: "U24SE208", c: 1 }
        ],
        "Sem 3": [
            { n: "AM", code: "U24MH301G", c: 3, type: "theory" },
            { n: "NA", code: "U24EE302", c: 4 },
            { n: "DEOA", code: "U24CI311", c: 4 },
            { n: "DCMT", code: "U24EE304", c: 3, type: "theory" },
            { n: "OOP Through Java", code: "U24EE305", c: 4 },
            { n: "QALR", code: "U24VA306A", c: 2, type: "theory" },
            { n: "PSD Lab-2", code: "U24SE307", c: 1 }
        ],
        "Sem 4": [
            { n: "CSE", code: "U24EE401", c: 4 },
            { n: "ACM", code: "U24EE402", c: 4 },
            { n: "EMF", code: "U24EE403", c: 3, type: "theory" },
            { n: "PSGD", code: "U24EE404", c: 3, type: "theory" },
            { n: "PP", code: "U24EE405", c: 4 },
            { n: "SIS", code: "U24VA406B", c: 1 },
            { n: "PSD Lab-3", code: "U24SE407", c: 1 }
        ],
        "Sem 5": [
            { n: "M-Elective 1", code: "U24OE501YYX", c: 3, type: "theory" },
            { n: "PE", code: "U24EE502", c: 4 },
            { n: "PSA", code: "U24EE503", c: 3, type: "theory" },
            { n: "AI & ML", code: "U24EE504", c: 4 },
            { n: "S&E Basket", code: "U24ST505X", c: 3, type: "theory" },
            { n: "EITK", code: "U24IK506A", c: 2, type: "theory" },
            { n: "PSD Lab-4", code: "U24SE507", c: 1 },
            { n: "Tech. English", code: "U24MH508", c: 1 },
            { n: "Seminar", code: "U24EE509", c: 1 }
        ],
        "Sem 6": [
            { n: "P-Elective 1", code: "U24EE601", c: 3, type: "theory" },
            { n: "PSCD", code: "U24EE602", c: 4 },
            { n: "S & P", code: "U24EE603", c: 3, type: "theory" },
            { n: "M & M", code: "U24EE604", c: 4 },
            { n: "MCB", code: "U24MB605X", c: 3, type: "theory" },
            { n: "UHV-II", code: "U24IK606B", c: 2, type: "theory" },
            { n: "AI&ML Lab", code: "U24SE607", c: 1, type: "lab" },
            { n: "Mini Project", code: "U24EE608", c: 1 }
        ],
        "Sem 7": [
            { n: "M-Elective-II", code: "U24OE701YYX", c: 3 },
            { n: "P-Elective-II", code: "U24EE702", c: 3 },
            { n: "PSOC", code: "U24EE703", c: 4 },
            { n: "UEE", code: "U24EE704", c: 3, type: "theory" },
            { n: "EV", code: "U24EE705", c: 3, type: "theory" },
            { n: "Internship", code: "U24EE706", c: 1 },
            { n: "Major Project-I", code: "U24EE707", c: 4 }
        ],
        "Sem 8": [
            { n: "M-Elective-III", code: "U24OE801YYX", c: 3 },
            { n: "P-Elective-III", code: "U24EE802", c: 3 },
            { n: "P-Elective-IV", code: "U24EE803", c: 3 },
            { n: "Major Project-II", code: "U24EE804", c: 6 }
        ]
    },
    "IT": {
        "Sem 1": [
            { n: "DCODE", code: "U24MH101", c: 3, type: "theory" },
            { n: "EC", code: "U24CY102B", c: 4 },
            { n: "DLD", code: "U24IT103", c: 3, type: "theory" },
            { n: "PPSC", code: "U24IT104", c: 4 },
            { n: "ECRW", code: "U24MH105", c: 2, type: "theory" },
            { n: "Sports & Yoga", code: "U24VA106", c: 1, type: "lab" },
            { n: "EGCAD", code: "U24ME107", c: 1, type: "lab" }
        ],
        "Sem 2": [
            { n: "MTVC", c: 3, code: "U24MH201", type: "theory" },
            { n: "EP", c: 4, code: "U24PY202B" }, // auto split
            { n: "COA", c: 3, code: "U24IT203", type: "theory" },
            { n: "DSTC", c: 4, code: "U24IT204" }, // auto split
            { n: "BEE", c: 4, code: "U24EE205B" }, // auto split
            { n: "ILMS", c: 1, code: "U24AE207", type: "lab" }, // mention standalone labs explicitly
            { n: "PSD Lab-1", c: 1, code: "U24SE208", type: "lab" },
            { n: "Practicum-2", c: 1 },
            { n: "SEA/SAA-2", c: 1 },
            { n: "ETS-2", c: 1 }
        ],
        "Sem 3": [
            { n: "AI", code: "U24IT301", c: 3, type: "theory" },
            { n: "ADS", code: "U24IT302", c: 4 },
            { n: "SE", code: "U24IT303", c: 3, type: "theory" },
            { n: "DBMS", code: "U24IT304", c: 4 },
            { n: "OOP Through Java", code: "U24IT305", c: 4 },
            { n: "SIS", code: "U24VA306B", c: 1, type: "lab" },
            { n: "PSD Lab-2", code: "U24SE307", c: 1, type: "lab" }
        ],
        /*
         * IT - Semester 4
         * Added course codes for robust UMS auto-fill matching.
         */
        "Sem 4": [
            { n: "DMPS", c: 3, code: "U24MH401", type: "theory" },
            { n: "DAA", c: 4, code: "U24IT402" }, // 4 credits → auto splits theory+lab
            { n: "PP", c: 4, code: "U24IT403" },  // auto split
            { n: "OS", c: 4, code: "U24IT404" },  // auto split
            { n: "CN", c: 3, code: "U24IT405", type: "theory" },
            { n: "QALR", c: 2, code: "U24VA406A", type: "theory" },
            { n: "PSD Lab-3", c: 1, code: "U24SE407", type: "lab" }// Standalone Lab — must explicitly define type
        ],
        "Sem 5": [
            { n: "M-Elective 1", code: "U24OE501YYX", c: 3, type: "theory" },
            { n: "ML", code: "U24IT502", c: 4 },
            { n: "Information Security", code: "U24IT503", c: 3, type: "theory" },
            { n: "Intro to IOT", code: "U24IT504", c: 4 },
            { n: "M Basket", code: "U24MB505X", c: 3, type: "theory" },
            { n: "UHV-II", code: "U24IK506B", c: 2, type: "theory" },
            { n: "PSD Lab-4", code: "U24SE507", c: 1, type: "lab" },
            { n: "Tech. English", code: "U24MH508", c: 1, type: "theory" },
            { n: "Seminar", code: "U24IT509", c: 1 }
        ],
        "Sem 6": [
            { n: "P-Elective 1", code: "U24IT601X", c: 3 },
            { n: "Data Science", code: "U24IT602", c: 3, type: "theory" },
            { n: "CC", code: "U24IT603", c: 4 },
            { n: "Full Stack w Java", code: "U24IT604", c: 4 },
            { n: "S&E Basket", code: "U24ST605X", c: 3, type: "theory" },
            { n: "EITK", code: "U24IK606A", c: 2, type: "theory" },
            { n: "PSD Lab-5", code: "U24SE607", c: 1, type: "lab" },
            { n: "Mini Project", code: "U24IT608", c: 1 }
        ],
        "Sem 7": [
            { n: "M-Elective-II", code: "U24OE701YYX", c: 3 },
            { n: "P-Elective-II", code: "U24IT702X", c: 3 },
            { n: "DevOps", code: "U24IT703", c: 4 },
            { n: "BDA", code: "U24IT704", c: 3, type: "theory" },
            { n: "ST & QA", code: "U24IT705", c: 3, type: "theory" },
            { n: "Internship", code: "U24IT706", c: 1 },
            { n: "Major Project-I", code: "U24IT707", c: 4 }
        ],
        "Sem 8": [
            { n: "M-Elective-III", code: "U24OE801YYX", c: 3 },
            { n: "P-Elective-III", code: "U24IT802X", c: 3 },
            { n: "P-Elective-IV", code: "U24IT803X", c: 3 },
            { n: "Major Project-II", code: "U24IT804", c: 6 }
        ]
    },
    "ECI": {
        "Sem 1": [
            { n: "DCODE", code: "U24MH101", c: 3, type: "theory" },
            { n: "EP", code: "U24PY102B", c: 4 },
            { n: "EMI", code: "U24CI103", c: 3, type: "theory" },
            { n: "PPSC", code: "U24CI104", c: 4 },
            { n: "BEE", code: "U24EE105B", c: 4 },
            { n: "ES", code: "U24CY106", c: 0 },
            { n: "ILMS", c: 1, type: "lab" }
        ],
        "Sem 2": [
            { n: "MTVC", code: "U24MH201", c: 3, type: "theory" },
            { n: "EC", code: "U24CY202B", c: 4 },
            { n: "AE", code: "U24CI203", c: 3, type: "theory" },
            { n: "DSTC", code: "U24CI204", c: 4 },
            { n: "ECRW", code: "U24MH205", c: 2, type: "theory" },
            { n: "Sports & Yoga", code: "U24VA206", c: 1, type: "lab" },
            { n: "EGCAD", code: "U24ME207", c: 1, type: "lab" },
            { n: "PSD Lab-1", code: "U24SE208", c: 1, type: "lab" }
        ],
        "Sem 3": [
            { n: "MFSP", code: "U24MH301C", c: 3, type: "theory" },
            { n: "S&A", code: "U24CI302", c: 4 },
            { n: "AIC&A", code: "U24CI303", c: 4 },
            { n: "DCLD", code: "U24CI304", c: 3, type: "theory" },
            { n: "OOP Through Java", code: "U24CI305", c: 4 },
            { n: "QALR", code: "U24VA306A", c: 2, type: "theory" },
            { n: "PSD Lab-2", code: "U24SE307", c: 1, type: "lab" }
        ],

        "Sem 4": [
            { n: "VLSID", code: "U24CI401", c: 4 },
            { n: "DSP", code: "U24CI402", c: 4 },
            { n: "EMT", code: "U24CI403", c: 3, type: "theory" },
            { n: "CA&M", code: "U24CI404", c: 3, type: "theory" },
            { n: "PP", code: "U24CI405", c: 4 },
            { n: "SIS", code: "U24VA406B", c: 1 },/* Explicitly mark standalone LABS as type "lab" so that UMS auto-fill matches correctly.*/
            { n: "PSD Lab-3", code: "U24SE407", c: 1, type: "lab" }
        ],
        "Sem 5": [
            { n: "M-Elective 1", code: "U24OE501YYX", c: 3 },
            { n: "M&ES", code: "U24CI502", c: 4 },
            { n: "LCS", code: "U24CI503", c: 3, type: "theory" },
            { n: "AI&ML", code: "U24CI504", c: 4 },
            { n: "S&E Basket", code: "U24ST505X", c: 3, type: "theory" },
            { n: "EITK", code: "U24IK506A", c: 2, type: "theory" },
            { n: "PSD Lab-4", code: "U24SE507", c: 1, type: "lab" },
            { n: "Tech. English", code: "U24MH508", c: 1 },
            { n: "Seminar", code: "U24CI509", c: 1 }
        ],
        "Sem 6": [
            { n: "P-Elective 1", code: "U24CI601", c: 3 },
            { n: "IoT", code: "U24CI602", c: 4 },
            { n: "BI&SP", code: "U24CI603", c: 3, type: "theory" },
            { n: "A&DC", code: "U24CI604", c: 4 },
            { n: "MCB", code: "U24MB605X", c: 3, type: "theory" },
            { n: "UHV-II", code: "U24IK606B", c: 2, type: "theory" },
            { n: "AI&ML Lab", code: "U24SE607", c: 1, type: "lab" },
            { n: "Mini Project", code: "U24CI608", c: 1 }
        ],
        "Sem 7": [
            { n: "M-Elective-II", code: "U24OE701YYX", c: 3 },
            { n: "P-Elective-II", code: "U24CI702", c: 3 },
            { n: "IA&C", code: "U24CI703", c: 4 },
            { n: "S&FOC", code: "U24CI704", c: 3, type: "theory" },
            { n: "DC&N", code: "U24CI705", c: 3, type: "theory" },
            { n: "Internship", code: "U24CI706", c: 1 },
            { n: "Major Project-I", code: "U24CI707", c: 4 }
        ],
        "Sem 8": [
            { n: "M-Elective-III", code: "U24OE801YYX", c: 3 },
            { n: "P-Elective-III", code: "U24CI802", c: 3 },
            { n: "P-Elective-IV", code: "U24CI803", c: 3 },
            { n: "Major Project-II", code: "U24CI804", c: 6 }
        ]
    },
};



// placeholders to avoid crashes
const COMMON_SEMESTERS = ["Sem 1", "Sem 2", "Sem 3", "Sem 4", "Sem 5", "Sem 6", "Sem 7", "Sem 8"];
const ALL_BRANCHES = Object.keys(BRANCH_MAPPING);

ALL_BRANCHES.forEach(branch => {
    if (!COURSE_DATA[branch]) COURSE_DATA[branch] = {};
    COMMON_SEMESTERS.forEach(sem => {
        if (!COURSE_DATA[branch][sem]) {
            COURSE_DATA[branch][sem] = [
                { n: `Course 1 (${branch} ${sem})`, c: 3 },
                { n: `Course 2 (${branch} ${sem})`, c: 3 },
                { n: `Course 3 (${branch} ${sem})`, c: 4 },
                { n: `Course 4 (${branch} ${sem})`, c: 4 },
                { n: `Lab 1 (${branch} ${sem})`, c: 1.5 },
                { n: `Lab 2 (${branch} ${sem})`, c: 1.5 }
            ];
        }
    });
});
