const documents = [
    {
        title: "Certificate of Incorporation",
        purpose: "Legally establishes a company.",
        eligibility: "Startups, private limited companies, LLPs, OPCs.",
        requiredDocs: ["Digital Signature Certificate (DSC)", "Director Identification Number (DIN)", "Memorandum of Association (MoA)", "Articles of Association (AoA)", "PAN card of directors", "Address proof of company"],
        fees: "₹1,000 - ₹15,000 (varies by company type)",
        portal: "https://www.mca.gov.in/"
    },
    {
        title: "Articles of Association (AoA)",
        purpose: "Defines internal company rules.",
        eligibility: "Mandatory for private and public companies.",
        requiredDocs: ["Same as Certificate of Incorporation"],
        fees: "Included in company registration.",
        portal: "https://www.mca.gov.in/"
    },
    {
        title: "GST Registration",
        purpose: "Allows businesses to collect GST.",
        eligibility: "Businesses with turnover above ₹40 lakh (₹20 lakh for services).",
        requiredDocs: ["PAN card & Aadhaar of proprietor/company", "Proof of business location", "Bank account details"],
        fees: "Free (Government charges only for late filings)",
        portal: "https://www.gst.gov.in/"
    },
    {
        title: "Memorandum of Association (MoA)",
        purpose: "Defines company objectives.",
        eligibility: "Private & Public companies.",
        requiredDocs: ["Same as Certificate of Incorporation"],
        fees: "Included in registration fees.",
        portal: "https://www.mca.gov.in/"
    },
    {
        title: "Company Registration",
        purpose: "Legalizes business operations.",
        eligibility: "Anyone starting a business.",
        requiredDocs: ["PAN card, Aadhaar of directors", "Address proof", "MoA & AoA"],
        fees: "₹1,000 - ₹15,000 (varies by company type)",
        portal: "https://www.mca.gov.in/"
    },
    {
        title: "Non-Disclosure Agreement (NDA)",
        purpose: "Protects confidential information.",
        eligibility: "Businesses working with sensitive data.",
        requiredDocs: ["Business details & agreement terms."],
        fees: "₹500 - ₹5,000 (depends on lawyer/service)",
        portal: "https://vakilsearch.com/"
    },
    {
        title: "Business License",
        purpose: "Legal permission to operate a business.",
        eligibility: "Varies by business type.",
        requiredDocs: ["Business registration", "GST certificate", "PAN card"],
        fees: "₹2,000 - ₹25,000 (depends on license type)",
        portal: "Respective State Government websites"
    },
    {
        title: "Foreign Qualification",
        purpose: "Allows Indian companies to operate abroad.",
        eligibility: "Companies planning to expand internationally.",
        requiredDocs: ["Company registration details", "Tax filings"],
        fees: "Varies by country.",
        portal: "Depends on target country’s regulations."
    },
    {
        title: "Professional Tax Registration",
        purpose: "Mandatory tax for businesses in some states.",
        eligibility: "Salaried professionals & business owners.",
        requiredDocs: ["PAN", "Aadhaar", "Company registration"],
        fees: "₹1,000 - ₹2,500 per year (varies by state).",
        portal: "Respective State Tax Departments"
    },
    {
        title: "Business Insurance",
        purpose: "Covers financial risks for businesses.",
        eligibility: "Any business.",
        requiredDocs: ["Business details", "Financial statements"],
        fees: "Depends on coverage type (₹5,000 - ₹50,000 yearly).",
        portal: "Private insurance providers"
    },
    {
        title: "Director Identification Number (DIN)",
        purpose: "Unique ID for company directors.",
        eligibility: "Company directors.",
        requiredDocs: ["PAN", "Aadhaar", "Address proof"],
        fees: "₹500 per DIN",
        portal: "https://www.mca.gov.in/"
    },
    {
        title: "Labour License",
        purpose: "Required for companies hiring contract workers.",
        eligibility: "Businesses with contract employees.",
        requiredDocs: ["Business registration", "Employee list"],
        fees: "₹5,000 - ₹25,000",
        portal: "https://clc.gov.in/"
    },
    {
        title: "DSC (Digital Signature Certificate)",
        purpose: "Secure digital document signing.",
        eligibility: "Business owners, directors.",
        requiredDocs: ["PAN", "Aadhaar"],
        fees: "₹500 - ₹3,000",
        portal: "https://www.e-mudhra.com/"
    },
    {
        title: "Proof of Business Location",
        purpose: "Required for company registration & GST.",
        eligibility: "All businesses.",
        requiredDocs: ["Rent Agreement", "Electricity Bill"],
        fees: "N/A"
    },
    {
        title: "Shareholder Agreement",
        purpose: "Defines shareholder rights.",
        eligibility: "Companies with multiple shareholders.",
        requiredDocs: ["Business details", "Shareholder list"],
        fees: "₹1,000 - ₹10,000 (legal drafting)",
        portal: "https://vakilsearch.com/"
    },
    {
        title: "Website Terms of Use",
        purpose: "Legal protection for website owners.",
        eligibility: "All website owners.",
        requiredDocs: ["Business details", "Website policies"],
        fees: "₹500 - ₹5,000 (legal drafting)"
    },
    {
        title: "Driving License",
        purpose: "Identification for vehicle driving.",
        eligibility: "Indian citizens meeting age criteria.",
        requiredDocs: ["Aadhaar", "Address proof", "Learning license"],
        fees: "₹200 - ₹1,500",
        portal: "https://parivahan.gov.in/"
    },
    {
        title: "FSSAI License",
        purpose: "Food business operation approval.",
        eligibility: "Food businesses.",
        requiredDocs: ["Company details", "Food safety plan"],
        fees: "₹100 - ₹7,500 per year",
        portal: "https://foscos.fssai.gov.in/"
    },
    {
        title: "Voter ID Card",
        purpose: "Voting eligibility proof.",
        eligibility: "Indian citizens 18+ years.",
        requiredDocs: ["Aadhaar", "Address proof"],
        fees: "Free",
        portal: "https://www.nvsp.in/"
    },
    {
        title: "PAN Card",
        purpose: "Taxpayer identification.",
        eligibility: "Individuals & businesses.",
        requiredDocs: ["Proof of identity", "Proof of address"],
        fees: "₹110",
        portal: "https://www.onlineservices.nsdl.com/"
    },
    {
        title: "Passport",
        purpose: "International travel document.",
        eligibility: "Indian citizens.",
        requiredDocs: ["Aadhaar", "Birth certificate"],
        fees: "₹1,500 - ₹3,500",
        portal: "https://www.passportindia.gov.in/"
    },
    {
        title: "Aadhaar Card",
        purpose: "Unique identification number.",
        eligibility: "Indian citizens.",
        requiredDocs: ["Proof of identity", "Proof of address"],
        fees: "Free (₹50 for updates)",
        portal: "https://uidai.gov.in/"
    },
    {
        title: "Ration Card",
        purpose: "Government food subsidy eligibility.",
        eligibility: "Indian citizens.",
        requiredDocs: ["Proof of residence"],
        fees: "Free",
        portal: "Respective State Government websites"
    }
];

// Render documents dynamically
function renderDocuments() {
    const documentList = document.getElementById("documentList");
    documents.forEach((doc, index) => {
        const documentItem = document.createElement("div");
        documentItem.classList.add("document-item");
        documentItem.innerHTML = `
            <h2 onclick="toggleDetails(${index})">${doc.title}</h2>
            <p id="details-${index}" class="details">
                <strong>Purpose:</strong> ${doc.purpose} <br>
                <strong>Eligibility:</strong> ${doc.eligibility} <br>
                <strong>Required Documents:</strong> ${doc.requiredDocs.join(", ")} <br>
                <strong>Fees:</strong> ${doc.fees} <br>
                <strong>Apply Here:</strong> <a href="${doc.portal}" target="_blank">Click Here</a>
            </p>
        `;
        documentList.appendChild(documentItem);
    });
}

// Toggle document details
function toggleDetails(index) {
    document.getElementById(`details-${index}`).classList.toggle("show");
}

renderDocuments();

// Function to filter documents
function searchDocuments() {
    const input = document.getElementById("searchBar").value.toLowerCase();
    const documentItems = document.querySelectorAll(".document-item");

    documentItems.forEach(item => {
        const title = item.getElementsByTagName("h2")[0].innerText.toLowerCase();
        item.style.display = title.includes(input) ? "block" : "none";
    });
}

// Initialize page
renderDocuments();
