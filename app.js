const STORAGE_KEY = "court-case-planner-records";
const API_TOKEN_KEY = "court-case-planner-api-token";
const COURTLISTENER_SEARCH_URL = "https://www.courtlistener.com/api/rest/v4/search/";
const COURTLISTENER_CITATION_URL =
  "https://www.courtlistener.com/api/rest/v4/citation-lookup/";

const COURTS = [
  { id: "la-superior", label: "Los Angeles County Superior Court", shortCode: "LASC" },
  { id: "cal-appeal", label: "California Court of Appeal", shortCode: "CCA" },
  { id: "cal-supreme", label: "Supreme Court of California", shortCode: "CSC" },
  { id: "us-appeals", label: "U.S. Court of Appeals", shortCode: "USCA" },
  { id: "us-supreme", label: "Supreme Court of the United States", shortCode: "SCOTUS" },
];

const ROUTES = [
  {
    id: "la-civil-start",
    court: "la-superior",
    label: "Start a Los Angeles civil case",
    stageHint: "pre-filing",
    summary:
      "Use this track to assemble an initial civil filing package in Los Angeles Superior Court.",
    flow: [
      {
        title: "Open matter",
        detail:
          "Identify the filing courthouse, confirm the claim type, and verify the statute of limitations before filing.",
      },
      {
        title: "Assemble filing package",
        detail:
          "Prepare the complaint or petition, summons if issuance is requested, and Los Angeles civil cover materials.",
      },
      {
        title: "File and obtain court number",
        detail:
          "File through the court's filing process, pay fees or seek a fee waiver, and track the court-assigned case number separately from this planner ID.",
      },
      {
        title: "Serve defendants",
        detail:
          "After issuance, complete service and calendar proof-of-service and responsive pleading deadlines.",
      },
    ],
    checklist: [
      "Confirm venue and courthouse assignment before filing.",
      "Prepare the complaint or petition and summons package.",
      "Include the Civil Case Cover Sheet and local addendum materials.",
      "Track service requirements and proof-of-service timing after filing.",
    ],
    authorities: [
      {
        citation:
          "Los Angeles Superior Court, 'What Documents Are Needed To Begin A Case?'",
        why:
          "Identifies the initial filing package, including the complaint or petition, summons, Civil Case Cover Sheet, Civil Case Cover Sheet Addendum, and Statement of Location (LACIV109).",
        url: "https://www.lacourt.org/division/civil/CI0018.aspx",
      },
      {
        citation: "Los Angeles Superior Court Civil Forms",
        why:
          "Provides access to statewide and local civil forms used in Los Angeles Superior Court filings.",
        url: "https://www.lacourt.org/forms/civil",
      },
      {
        citation: "Cal. Rules of Court, rule 2.100 et seq.",
        why:
          "Sets formatting and pleading baseline requirements for superior court filings; the Los Angeles court filing page directs filers to these rules when no official form exists.",
        url: "https://courts.ca.gov/cms/rules/index/two/rule2_100",
      },
      {
        citation: "Los Angeles Superior Court Find a Case",
        why:
          "Official portal for checking publicly available case access after a court case number is assigned.",
        url: "https://lacourt.org/website/FindaCase.aspx",
      },
    ],
    warnings: [
      "This planner ID is internal to the app; it is not the official court docket number.",
      "Statutes of limitation and service timing vary by claim and are not calculated by this prototype.",
    ],
    researchPrompts: [
      "Venue and jurisdiction",
      "Statute of limitations",
      "Service method and proof-of-service timing",
      "Local reservation and filing-fee requirements",
    ],
  },
  {
    id: "ca-notice-of-appeal",
    court: "cal-appeal",
    label: "Appeal from superior court to California Court of Appeal",
    stageHint: "appeal-window",
    summary:
      "Use this track to preserve appellate jurisdiction and launch a California civil appeal from superior court.",
    flow: [
      {
        title: "Confirm appealability",
        detail:
          "Identify the judgment or order and verify whether it is appealable or whether writ relief is the proper path.",
      },
      {
        title: "Calculate deadline",
        detail:
          "Calendar the earliest applicable deadline under rule 8.104 and check whether any valid postjudgment motions extend the time under rule 8.108.",
      },
      {
        title: "File notice in superior court",
        detail:
          "Serve and file the notice of appeal in the superior court, not the Court of Appeal, and address fees or fee-waiver materials.",
      },
      {
        title: "Open appellate file",
        detail:
          "After the Court of Appeal assigns a case number, file the Civil Case Information Statement and prepare the record and briefing schedule.",
      },
    ],
    checklist: [
      "Identify the appealable judgment or order.",
      "Calculate the earliest jurisdictional notice deadline.",
      "File the notice of appeal in superior court.",
      "Pay the filing fee and deposit or file fee-waiver materials.",
      "File form APP-004 within 15 days after the reviewing court assigns a case number.",
    ],
    authorities: [
      {
        citation: "Cal. Rules of Court, rule 8.100",
        why:
          "Governs filing the notice of appeal, the filing fee, deposit, and Civil Case Information Statement timing.",
        url: "https://courts.ca.gov/cms/rules/index/eight/rule8_100",
      },
      {
        citation: "Cal. Rules of Court, rule 8.104",
        why:
          "Sets the normal time to appeal, including the 60-day and 180-day timing structure in civil matters.",
        url: "https://courts.ca.gov/cms/rules/index/eight/rule8_104",
      },
      {
        citation: "Cal. Rules of Court, rule 8.108",
        why:
          "Explains when certain postjudgment motions extend the time to appeal.",
        url: "https://courts.ca.gov/cms/rules/index/eight/rule8_108",
      },
      {
        citation: "Cal. Rules of Court, rule 8.204",
        why: "Sets contents and formatting rules for appellate briefs.",
        url: "https://courts.ca.gov/cms/rules/index/eight/rule8_204",
      },
      {
        citation: "California Appellate Courts E-Filing",
        why:
          "Explains TrueFiling requirements, searchable PDFs, bookmarks, and service implications for civil filings.",
        url: "https://appellate.courts.ca.gov/e-filing",
      },
      {
        citation: "Hollister Convalescent Hosp., Inc. v. Rico (1975) 15 Cal.3d 660",
        why:
          "The official advisory comment to rule 8.104 cites this case for the principle that a late notice of appeal is jurisdictional.",
        url: "https://courts.ca.gov/cms/rules/index/eight/rule8_104",
      },
      {
        citation: "Estate of Hanley (1943) 23 Cal.2d 120",
        why:
          "Also cited in the official advisory comment to rule 8.104 on the jurisdictional consequence of a late appeal.",
        url: "https://courts.ca.gov/cms/rules/index/eight/rule8_104",
      },
    ],
    warnings: [
      "A late notice of appeal generally destroys appellate jurisdiction.",
      "This prototype does not determine appealability; some orders require a writ, not an appeal.",
    ],
    researchPrompts: [
      "Appealability and finality",
      "Postjudgment motions and tolling",
      "Record designation strategy",
      "Standard of review for each issue",
    ],
  },
  {
    id: "ca-emergency-writ",
    court: "cal-appeal",
    label: "California Court of Appeal emergency writ or stay path",
    stageHint: "emergency",
    summary:
      "Use this track when ordinary appeal timing is inadequate and urgent appellate relief may be needed.",
    flow: [
      {
        title: "Test urgency",
        detail:
          "Identify the irreparable harm, requested stay date, and why appellate intervention is needed before ordinary review can run its course.",
      },
      {
        title: "Determine vehicle",
        detail:
          "Choose between a writ petition, an application for stay, or a related emergency motion depending on the underlying order and posture.",
      },
      {
        title: "Assemble record support",
        detail:
          "Include the challenged order, key lodged materials, proof of service, and a clear chronology explaining the emergency.",
      },
      {
        title: "E-file and notify",
        detail:
          "Use TrueFiling when required and give prompt notice, especially if relief is needed after normal clerk hours.",
      },
    ],
    checklist: [
      "State why ordinary appellate review is inadequate.",
      "Describe the irreparable harm and the exact deadline for relief.",
      "Attach the order under review and essential supporting materials.",
      "Prepare a concise procedural timeline and requested relief.",
    ],
    authorities: [
      {
        citation: "California Appellate Courts E-Filing",
        why:
          "Explains mandatory e-filing, document formatting, and after-hours limitations for immediate relief.",
        url: "https://appellate.courts.ca.gov/e-filing",
      },
      {
        citation: "Cal. Rules of Court, rule 8.70",
        why:
          "Defines how electronic filing and service rules apply in the Supreme Court and Courts of Appeal.",
        url: "https://courts.ca.gov/cms/rules/index/eight/rule8_70",
      },
      {
        citation: "Cal. Rules of Court, rule 8.71",
        why:
          "Sets mandatory electronic filing rules in reviewing courts, with exceptions for self-represented litigants and hardship.",
        url: "https://courts.ca.gov/cms/rules/index/eight/rule8_71",
      },
      {
        citation: "Cal. Rules of Court, rule 8.711",
        why:
          "Addresses filing and service for proceedings in the appellate division, including electronic service and lack of time extension for e-service.",
        url: "https://courts.ca.gov/cms/rules/index/eight/rule8_711",
      },
    ],
    warnings: [
      "Emergency relief often depends on a complete and immediately understandable record.",
      "Whether a writ is available is issue-specific and must be researched before filing.",
    ],
    researchPrompts: [
      "Adequate remedy at law",
      "Irreparable harm showing",
      "Stay factors",
      "District-specific internal operating or local rules",
    ],
  },
  {
    id: "ca-petition-review",
    court: "cal-supreme",
    label: "Petition for review in the Supreme Court of California",
    stageHint: "discretionary-review",
    summary:
      "Use this track to seek discretionary review after a California Court of Appeal decision.",
    flow: [
      {
        title: "Test review grounds",
        detail:
          "Frame the case around uniformity of decision, an important legal question, jurisdiction, or another basis listed in rule 8.500(b).",
      },
      {
        title: "Calendar finality",
        detail:
          "Track finality in the Court of Appeal and file the petition within 10 days after the decision becomes final there.",
      },
      {
        title: "Draft petition",
        detail:
          "Prepare the issues presented, explain the grounds for review, and attach the opinion or order required by rule 8.504.",
      },
      {
        title: "E-file through TrueFiling",
        detail:
          "Use the California Supreme Court's electronic filing process when required and confirm service obligations.",
      },
    ],
    checklist: [
      "Identify a rule 8.500(b) ground for review.",
      "Calculate the filing date after Court of Appeal finality.",
      "Attach the Court of Appeal opinion or order showing the filing date.",
      "State whether rehearing was sought and how it was resolved.",
    ],
    authorities: [
      {
        citation: "Cal. Rules of Court, rule 8.500",
        why:
          "Governs petitions for review, grounds for review, and the 10-day filing window after finality in the Court of Appeal.",
        url: "https://courts.ca.gov/cms/rules/index/eight/rule8_500",
      },
      {
        citation: "Cal. Rules of Court, rule 8.504",
        why:
          "Sets the form, content, attachment, and word-limit requirements for the petition, answer, and reply.",
        url: "https://courts.ca.gov/cms/rules/index/eight/rule8_504",
      },
      {
        citation: "Supreme Court of California E-Filing",
        why:
          "Explains the Supreme Court's use of TrueFiling and the governing electronic filing materials.",
        url: "https://supreme.courts.ca.gov/e-filing-procedures/e-filing",
      },
      {
        citation: "California Appellate Courts E-Filing",
        why:
          "Clarifies that accepted TrueFiling submission can satisfy specified service requirements in civil matters.",
        url: "https://appellate.courts.ca.gov/e-filing",
      },
    ],
    warnings: [
      "The filing deadline for the petition itself is not extendable under rule 8.500(e)(2), subject to limited relief by the Chief Justice.",
      "Discretionary review requires a statewide or otherwise significant reason; error correction alone is usually not enough.",
    ],
    researchPrompts: [
      "Conflict among appellate decisions",
      "Important question of California law",
      "Rehearing posture in the Court of Appeal",
      "Publication and depublishing issues",
    ],
  },
  {
    id: "us-appeal-notice",
    court: "us-appeals",
    label: "Appeal from district court to U.S. Court of Appeals",
    stageHint: "appeal-window",
    summary:
      "Use this track to preserve a federal appeal and move from district court judgment into the court of appeals.",
    flow: [
      {
        title: "Identify appellate basis",
        detail:
          "Confirm appeal as of right under FRAP 3 and whether the order is final or otherwise appealable.",
      },
      {
        title: "Calculate the federal deadline",
        detail:
          "Apply FRAP 4 to determine whether the notice is due in 30 days, 60 days, or later because of a qualifying postjudgment motion.",
      },
      {
        title: "File in district court",
        detail:
          "File the notice of appeal with the district clerk and preserve a clean record for the circuit court.",
      },
      {
        title: "Check local circuit rules",
        detail:
          "After docketing, comply with the assigned circuit's local rules, schedules, and mediation or motion procedures.",
      },
    ],
    checklist: [
      "Identify the judgment or order being appealed.",
      "Compute the FRAP 4 deadline and any tolling effect of postjudgment motions.",
      "File the notice in district court.",
      "Calendar circuit-specific opening forms and transcript obligations.",
    ],
    authorities: [
      {
        citation: "Federal Rules of Appellate Procedure",
        why:
          "Official judiciary source for the national appellate rules currently in effect, including 2025 amendments.",
        url: "https://www.uscourts.gov/forms-rules/current-rules-practice-procedure/federal-rules-appellate-procedure",
      },
      {
        citation: "FRAP 3. Appeal as of Right - How Taken",
        why:
          "Explains that an appeal as of right is taken by filing a notice of appeal with the district clerk within the time allowed by Rule 4.",
        url: "https://www.ca2.uscourts.gov/clerk/case_filing/rules/title2/rule_3.html",
      },
      {
        citation: "FRAP 4. Appeal as of Right - When Taken",
        why:
          "Provides the timing framework for civil notices of appeal, including 30-day and 60-day deadlines and tolling motions.",
        url: "https://www.ca4.uscourts.gov/Rules/Rule04.html",
      },
      {
        citation: "Ninth Circuit FRAP and Local Rules",
        why:
          "For Los Angeles-based federal appeals, the Ninth Circuit is usually the relevant local rule set and motions practice reference.",
        url: "https://www.ca9.uscourts.gov/rules/",
      },
    ],
    warnings: [
      "Local circuit rules differ, so the circuit-specific rulebook must be checked after docketing.",
      "This prototype does not resolve finality or interlocutory-appeal questions.",
    ],
    researchPrompts: [
      "Final judgment rule",
      "Interlocutory appeal authority",
      "Postjudgment tolling motions",
      "Circuit-specific opening brief and transcript rules",
    ],
  },
  {
    id: "us-appeal-emergency",
    court: "us-appeals",
    label: "Emergency stay or injunction in U.S. Court of Appeals",
    stageHint: "emergency",
    summary:
      "Use this track when urgent circuit relief is needed before the normal appellate schedule can protect the client.",
    flow: [
      {
        title: "Seek district court relief first",
        detail:
          "Assess whether the requested stay or injunction should first be presented in the district court under FRAP 8 principles.",
      },
      {
        title: "Prove emergency",
        detail:
          "State the date by which relief is needed, the irreparable harm, and why immediate appellate action is necessary.",
      },
      {
        title: "Follow circuit emergency rules",
        detail:
          "Use the assigned circuit's emergency-motion procedure, contact instructions, and certificate requirements.",
      },
      {
        title: "Support with record excerpts",
        detail:
          "Submit the operative order, motion history, and record materials necessary for rapid review.",
      },
    ],
    checklist: [
      "State the exact date by which relief is needed.",
      "Explain notice to opposing parties and their position if known.",
      "Address whether relief was first sought in district court.",
      "Include a focused record package and proposed order if required.",
    ],
    authorities: [
      {
        citation: "Federal Rules of Appellate Procedure",
        why:
          "Official judiciary source for FRAP, including the national stay and motion rules.",
        url: "https://www.uscourts.gov/forms-rules/current-rules-practice-procedure/federal-rules-appellate-procedure",
      },
      {
        citation: "Ninth Circuit Rule 27-3 Emergency Motions",
        why:
          "For Ninth Circuit practice, defines the notice, certificate, and deadline-content requirements when relief is needed within 21 days to avoid irreparable harm.",
        url: "https://cdn.ca9.uscourts.gov/datastore/uploads/rules/rules.htm",
      },
      {
        citation: "United States Court of Appeals for the Ninth Circuit",
        why:
          "Provides current contact information for emergency motions and motions practice in Los Angeles-region federal appeals.",
        url: "https://www.ca9.uscourts.gov/",
      },
    ],
    warnings: [
      "Emergency motion practice is circuit-specific and often requires immediate notice to the court and opposing counsel.",
      "The record support must be lean but complete enough for rapid action.",
    ],
    researchPrompts: [
      "Stay standard",
      "Emergency motion certificate requirements",
      "Relief first sought below",
      "Circuit clerk and motions panel procedures",
    ],
  },
  {
    id: "scotus-cert",
    court: "us-supreme",
    label: "Petition for writ of certiorari",
    stageHint: "discretionary-review",
    summary:
      "Use this track to prepare a cert petition after the final judgment of the highest court available to review the case.",
    flow: [
      {
        title: "Confirm cert posture",
        detail:
          "Verify that the case is coming from a qualifying final judgment or equivalent review posture and that certiorari is the correct vehicle.",
      },
      {
        title: "Calendar Rule 13",
        detail:
          "Track the 90-calendar-day filing window from entry of judgment or denial of rehearing, not from the mandate.",
      },
      {
        title: "Choose paid or IFP path",
        detail:
          "Use the Court's paid-case or in-forma-pauperis guidance and formatting requirements, including booklet and electronic-filing rules where applicable.",
      },
      {
        title: "Check rule version by filing date",
        detail:
          "As of March 4, 2026, the Court's 2023 rules remain posted, but the Court announced revised rules effective March 16, 2026.",
      },
    ],
    checklist: [
      "Verify finality and rehearing posture.",
      "Calculate the 90-day cert deadline.",
      "Determine whether the filing is paid or in forma pauperis.",
      "Confirm whether counsel must submit an electronic version in addition to paper.",
    ],
    authorities: [
      {
        citation: "Supreme Court Filing and Rules",
        why:
          "Official landing page for Court rules, guidance, electronic filing, and related filing resources.",
        url: "https://www.supremecourt.gov/filingandrules/",
      },
      {
        citation: "Rules and Guidance",
        why:
          "Hosts the Court Rules, paid-case guide, IFP guide, and related filing materials.",
        url: "https://www.supremecourt.gov/filingandrules/rules_guidance.aspx",
      },
      {
        citation: "Guide to Filing Paid Cases (Jan. 2023)",
        why:
          "Explains, among other things, that the Rule 13 filing period is 90 calendar days and not measured from the mandate.",
        url: "https://www.supremecourt.gov/casehand/guidetofilingpaidcases2023.pdf",
      },
      {
        citation: "Supreme Court Electronic Filing",
        why:
          "Explains that paper remains the official form of filing and represented parties must also submit electronic versions through the Court's system.",
        url: "https://www.supremecourt.gov/filingandrules/electronicfiling.aspx",
      },
      {
        citation: "Supreme Court Press Release (Feb. 17, 2026)",
        why:
          "Announced revised Court Rules taking effect on March 16, 2026, so the applicable rule set depends on the actual filing date.",
        url: "https://www.supremecourt.gov/publicinfo/press/pressreleases/pr_02-17-26",
      },
    ],
    warnings: [
      "The applicable Supreme Court rules may change on March 16, 2026; confirm the operative rule set on the actual filing date.",
      "Certiorari is discretionary and the petition must emphasize the reasons for review rather than case-specific error alone.",
    ],
    researchPrompts: [
      "Rule 10 certworthiness factors",
      "Rule 13 time calculation",
      "Paid versus in forma pauperis filing path",
      "Booklet format and electronic-filing requirements",
    ],
  },
];

const OFFICIAL_LINKS = {
  "la-superior": [
    {
      label: "Los Angeles Superior Court Find a Case",
      detail:
        "Official trial-court case access. Use this for docket tracking once the court assigns the real case number.",
      url: "https://www.lacourt.org/website/FindaCase.aspx",
    },
    {
      label: "California Published / Citable Opinions",
      detail:
        "Official California opinions portal. Superior court rulings are generally not precedential, so appellate opinions usually drive the legal research path.",
      url: "https://courts.ca.gov/opinions-slip-opinions-and-published-citable-opinions",
    },
  ],
  "cal-appeal": [
    {
      label: "California Published / Citable Opinions",
      detail:
        "Official California opinions portal for published and citable opinions.",
      url: "https://courts.ca.gov/opinions-slip-opinions-and-published-citable-opinions",
    },
    {
      label: "California Appellate Case Information",
      detail:
        "Official docket lookup for California Supreme Court and Court of Appeal matters.",
      url: "https://appellatecases.courtinfo.ca.gov/",
    },
    {
      label: "Rule 8.1115",
      detail:
        "Official rule governing citation of unpublished California opinions.",
      url: "https://courts.ca.gov/cms/rules/index/eight/rule8_1115",
    },
  ],
  "cal-supreme": [
    {
      label: "Supreme Court of California Opinions",
      detail:
        "Official Supreme Court of California opinions page.",
      url: "https://supreme.courts.ca.gov/opinions-supreme-court",
    },
    {
      label: "California Appellate Case Information",
      detail:
        "Official docket lookup covering the Supreme Court of California.",
      url: "https://appellatecases.courtinfo.ca.gov/",
    },
    {
      label: "Rule 8.1115",
      detail:
        "Official rule governing when California opinions may be cited.",
      url: "https://courts.ca.gov/cms/rules/index/eight/rule8_1115",
    },
  ],
  "us-appeals": [
    {
      label: "U.S. Courts of Appeals Opinions Page",
      detail:
        "Official federal judiciary portal for Court of Appeals opinions and case information links.",
      url: "https://www.uscourts.gov/about-federal-courts/types-cases/appeals",
    },
    {
      label: "Ninth Circuit Opinions",
      detail:
        "Official Ninth Circuit opinions page. This is often the relevant circuit for Los Angeles federal appeals.",
      url: "https://www.ca9.uscourts.gov/opinions/",
    },
    {
      label: "Federal Rules of Appellate Procedure",
      detail:
        "Official judiciary rulebook for federal appellate procedure.",
      url: "https://www.uscourts.gov/forms-rules/current-rules-practice-procedure/federal-rules-appellate-procedure",
    },
  ],
  "us-supreme": [
    {
      label: "Supreme Court Opinions",
      detail:
        "Official Supreme Court opinions page.",
      url: "https://www.supremecourt.gov/opinions/opinions.aspx",
    },
    {
      label: "Supreme Court Case Citation Finder",
      detail:
        "Official citation finder for Supreme Court opinions.",
      url: "https://www.supremecourt.gov/opinions/case_citation_finder.aspx",
    },
    {
      label: "Supreme Court Filing and Rules",
      detail:
        "Official filing, rules, and guidance page.",
      url: "https://www.supremecourt.gov/filingandrules/",
    },
  ],
};

const state = {
  currentCaseId: "",
  activeSavedCaseId: "",
  records: loadRecords(),
  researchResults: [],
  citationMatches: [],
  researchQuery: "",
  manualCheckStates: {},
};

const form = document.querySelector("#case-form");
const caseIdElement = document.querySelector("#case-id");
const courtSelect = document.querySelector("#court");
const trackSelect = document.querySelector("#track");
const reportContent = document.querySelector("#report-content");
const flowNodes = document.querySelector("#flow-nodes");
const savedCaseList = document.querySelector("#saved-case-list");
const newCaseButton = document.querySelector("#new-case-button");
const saveButton = document.querySelector("#save-button");
const statusCheckButton = document.querySelector("#status-check-button");
const printButton = document.querySelector("#print-button");
const researchForm = document.querySelector("#research-form");
const researchQueryInput = document.querySelector("#research-query");
const researchScopeSelect = document.querySelector("#research-scope");
const researchLimitSelect = document.querySelector("#research-limit");
const citationInput = document.querySelector("#citation-input");
const apiTokenInput = document.querySelector("#api-token");
const searchResearchButton = document.querySelector("#search-research-button");
const verifyCitationButton = document.querySelector("#verify-citation-button");
const fillQueryButton = document.querySelector("#fill-query-button");
const researchStatus = document.querySelector("#research-status");
const officialLinks = document.querySelector("#official-links");
const citationResults = document.querySelector("#citation-results");
const researchResults = document.querySelector("#research-results");
const statusCheckContent = document.querySelector("#status-check-content");

boot();

function boot() {
  populateCourts();
  hydrateTracks(COURTS[0].id);
  resetForm();
  apiTokenInput.value = loadApiToken();
  renderSavedCases();
  renderOfficialLinks();
  renderCitationMatches();
  renderResearchResults();
  renderStatusCheck();
  renderCurrentPlan();

  courtSelect.addEventListener("change", (event) => {
    hydrateTracks(event.target.value);
    state.currentCaseId = createPlannerCaseId(event.target.value);
    caseIdElement.textContent = state.currentCaseId;
    state.activeSavedCaseId = "";
    ensureManualChecklistState(getSelectedRoute());
    renderSavedCases();
    renderOfficialLinks();
    renderStatusCheck();
    renderCurrentPlan();
  });

  trackSelect.addEventListener("change", () => {
    ensureManualChecklistState(getSelectedRoute());
    renderStatusCheck();
    renderCurrentPlan();
  });
  form.addEventListener("submit", handleGenerate);
  saveButton.addEventListener("click", handleSave);
  statusCheckButton.addEventListener("click", handleStatusCheck);
  printButton.addEventListener("click", () => window.print());
  researchForm.addEventListener("submit", handleResearchSearch);
  verifyCitationButton.addEventListener("click", handleCitationLookup);
  fillQueryButton.addEventListener("click", fillSuggestedResearchQuery);
  apiTokenInput.addEventListener("change", handleApiTokenChange);
  newCaseButton.addEventListener("click", () => {
    state.activeSavedCaseId = "";
    resetForm();
    renderSavedCases();
    renderOfficialLinks();
    renderCitationMatches();
    renderResearchResults();
    renderStatusCheck();
    renderCurrentPlan();
  });

  form.querySelectorAll("input, select, textarea").forEach((field) => {
    field.addEventListener("input", () => {
      renderStatusCheck();
      renderCurrentPlan();
    });
    field.addEventListener("change", () => {
      renderStatusCheck();
      renderCurrentPlan();
    });
  });
}

function populateCourts() {
  courtSelect.innerHTML = COURTS.map(
    (court) => `<option value="${court.id}">${court.label}</option>`,
  ).join("");
}

function hydrateTracks(courtId, selectedTrackId) {
  const matchingRoutes = ROUTES.filter((route) => route.court === courtId);

  trackSelect.innerHTML = matchingRoutes
    .map((route) => `<option value="${route.id}">${route.label}</option>`)
    .join("");

  if (selectedTrackId && matchingRoutes.some((route) => route.id === selectedTrackId)) {
    trackSelect.value = selectedTrackId;
    return;
  }

  if (matchingRoutes[0]) {
    trackSelect.value = matchingRoutes[0].id;
  }
}

function handleGenerate(event) {
  event.preventDefault();
  renderCurrentPlan();
  document.querySelector("#print-area").scrollIntoView({ behavior: "smooth" });
}

function handleSave() {
  const snapshot = collectFormData();
  const existingIndex = state.records.findIndex(
    (record) => record.plannerCaseId === snapshot.plannerCaseId,
  );

  if (existingIndex >= 0) {
    state.records[existingIndex] = snapshot;
  } else {
    state.records.unshift(snapshot);
  }

  state.activeSavedCaseId = snapshot.plannerCaseId;
  persistRecords();
  renderSavedCases();
  renderStatusCheck();
}

function collectFormData() {
  const route = getSelectedRoute();
  const manualCheckStates = Object.fromEntries(
    Object.entries(state.manualCheckStates).map(([routeId, values]) => [
      routeId,
      Array.isArray(values) ? [...values] : [],
    ]),
  );
  return {
    plannerCaseId: state.currentCaseId,
    caseTitle: document.querySelector("#case-title").value.trim(),
    partyRole: document.querySelector("#party-role").value.trim(),
    court: courtSelect.value,
    track: trackSelect.value,
    caseType: document.querySelector("#case-type").value,
    stage: document.querySelector("#stage").value,
    deadline: document.querySelector("#deadline").value,
    objective: document.querySelector("#objective").value.trim(),
    notes: document.querySelector("#notes").value.trim(),
    lastUpdated: new Date().toISOString(),
    routeLabel: route ? route.label : "",
    researchQuery: researchQueryInput.value.trim(),
    researchResults: state.researchResults.map((item) => ({ ...item })),
    citationMatches: state.citationMatches.map((item) => ({ ...item })),
    manualCheckStates,
  };
}

function renderCurrentPlan() {
  const route = getSelectedRoute();
  const data = collectFormData();

  if (!route) {
    flowNodes.innerHTML =
      '<div class="empty-state">Select a court and track to build a procedure plan.</div>';
    reportContent.innerHTML = '<div class="empty-state">No route selected.</div>';
    return;
  }

  renderFlow(route);
  reportContent.innerHTML = renderReport(route, data);
}

function renderFlow(route) {
  flowNodes.innerHTML = route.flow
    .map(
      (node, index) => `
        <article class="flow-node ${index === 1 ? "active" : ""}">
          <h3>${escapeHtml(node.title)}</h3>
          <p>${escapeHtml(node.detail)}</p>
          <small>Step ${index + 1} of ${route.flow.length}</small>
        </article>
      `,
    )
    .join("");
}

function renderReport(route, data) {
  const court = COURTS.find((item) => item.id === data.court);
  const deadlineText = data.deadline ? formatDate(data.deadline) : "Not entered";
  const caseTitle = data.caseTitle || "Untitled matter";
  const partyRole = data.partyRole || "Not entered";
  const objective = data.objective || "No objective entered.";
  const notes = data.notes || "No notes entered.";

  return `
    <div class="report-card">
      <section class="report-headline">
        <span class="section-tag">Generated Plan</span>
        <h3>${escapeHtml(route.label)}</h3>
        <p>${escapeHtml(route.summary)}</p>
      </section>

      <ul class="meta-grid">
        <li>
          <strong>Planner Case ID</strong>
          <p>${escapeHtml(data.plannerCaseId)}</p>
        </li>
        <li>
          <strong>Court</strong>
          <p>${escapeHtml(court ? court.label : data.court)}</p>
        </li>
        <li>
          <strong>Case title</strong>
          <p>${escapeHtml(caseTitle)}</p>
        </li>
        <li>
          <strong>Party role</strong>
          <p>${escapeHtml(partyRole)}</p>
        </li>
        <li>
          <strong>Stage</strong>
          <p>${escapeHtml(humanizeStage(data.stage))}</p>
        </li>
        <li>
          <strong>Known deadline</strong>
          <p>${escapeHtml(deadlineText)}</p>
        </li>
      </ul>

      <section class="report-section">
        <h3>Requested Objective</h3>
        <p>${escapeHtml(objective)}</p>
      </section>

      <section class="report-section">
        <h3>Recommended Procedure</h3>
        <ol class="report-list">
          ${route.flow
            .map(
              (step) =>
                `<li><strong>${escapeHtml(step.title)}:</strong> ${escapeHtml(step.detail)}</li>`,
            )
            .join("")}
        </ol>
      </section>

      <section class="report-section">
        <h3>Checklist</h3>
        <ul class="report-list">
          ${route.checklist.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}
        </ul>
      </section>

      <section class="report-section">
        <h3>Official Authorities and Citations</h3>
        <ul class="citation-list">
          ${route.authorities
            .map(
              (authority) => `
                <li>
                  <code>Authority</code>
                  <strong>${escapeHtml(authority.citation)}</strong>
                  <p>${escapeHtml(authority.why)}</p>
                  <a href="${authority.url}" target="_blank" rel="noreferrer">${authority.url}</a>
                </li>
              `,
            )
            .join("")}
        </ul>
      </section>

      <section class="report-section">
        <h3>Live Research Results</h3>
        ${
          data.researchResults && data.researchResults.length
            ? `
              <ul class="citation-list">
                ${data.researchResults
                  .slice(0, 5)
                  .map(
                    (result) => `
                      <li>
                        <strong>${escapeHtml(result.caseName || "Untitled opinion")}</strong>
                        <p>${escapeHtml(
                          [result.court, result.dateFiled].filter(Boolean).join(" | "),
                        )}</p>
                        <p>${escapeHtml((result.citation || []).join("; ") || "No citation listed")}</p>
                        <a href="${escapeHtml(result.absolute_url || result.url || "#")}" target="_blank" rel="noreferrer">${escapeHtml(
                          result.absolute_url || result.url || "Result link unavailable",
                        )}</a>
                      </li>
                    `,
                  )
                  .join("")}
              </ul>
            `
            : "<p>No live research results saved for this matter yet.</p>"
        }
      </section>

      <section class="report-section">
        <h3>Status Check</h3>
        ${renderStatusSummary(route, data)}
      </section>

      <section class="report-section">
        <h3>Research Topics</h3>
        <ul class="report-list">
          ${route.researchPrompts.map((prompt) => `<li>${escapeHtml(prompt)}</li>`).join("")}
        </ul>
      </section>

      <section class="report-section">
        <h3>Warnings and Validation Checks</h3>
        <ul class="warning-list">
          ${route.warnings.map((warning) => `<li>${escapeHtml(warning)}</li>`).join("")}
        </ul>
      </section>

      <section class="report-section">
        <h3>Case Notes</h3>
        <p>${escapeHtml(notes)}</p>
      </section>

      <p class="footer-note">
        Generated on ${escapeHtml(formatDate(new Date().toISOString()))}. Validate all rule numbers, fee amounts,
        local forms, and filing mechanics against the linked official source before filing.
      </p>
    </div>
  `;
}

function renderSavedCases() {
  if (!state.records.length) {
    savedCaseList.innerHTML = `
      <div class="empty-state">
        No saved cases yet. Build a plan, then use <strong>Save Case</strong>.
      </div>
    `;
    return;
  }

  savedCaseList.innerHTML = state.records
    .map((record) => {
      const court = COURTS.find((item) => item.id === record.court);
      const activeClass = record.plannerCaseId === state.activeSavedCaseId ? "active" : "";
      return `
        <button
          class="saved-case-card ${activeClass}"
          type="button"
          data-case-id="${record.plannerCaseId}"
        >
          <strong>${escapeHtml(record.plannerCaseId)}</strong>
          <span>${escapeHtml(court ? court.label : record.court)}</span>
          <p>${escapeHtml(record.caseTitle || "Untitled matter")}</p>
        </button>
      `;
    })
    .join("");

  savedCaseList.querySelectorAll("[data-case-id]").forEach((button) => {
    button.addEventListener("click", () => loadSavedCase(button.dataset.caseId));
  });
}

function handleStatusCheck() {
  renderStatusCheck();
  document.querySelector("#status-check-panel").scrollIntoView({ behavior: "smooth" });
}

function renderStatusCheck() {
  const route = getSelectedRoute();
  const data = collectFormData();

  if (!route) {
    statusCheckContent.innerHTML =
      '<div class="empty-state">Select a court track to run the status check.</div>';
    return;
  }

  const summary = computeStatusCheck(route, data);
  statusCheckContent.innerHTML = `
    <div class="status-score">
      <span class="score-badge">${summary.score}% complete</span>
      <span class="status-chip">${escapeHtml(summary.readinessLabel)}</span>
      <span>${escapeHtml(summary.completedCount)} of ${escapeHtml(summary.totalCount)} checks satisfied</span>
    </div>

    <div class="status-check-grid">
      <section class="status-card">
        <h3>Automatic Checks</h3>
        <ul>
          ${summary.autoChecks
            .map(
              (check) => `
                <li class="${check.passed ? "status-pass" : "status-warn"}">
                  <strong>${check.passed ? "Pass" : "Pending"}:</strong>
                  ${escapeHtml(check.label)}. ${escapeHtml(check.detail)}
                </li>
              `,
            )
            .join("")}
        </ul>
      </section>

      <section class="status-card">
        <h3>Manual Procedure Confirmations</h3>
        <div class="manual-check-list">
          ${summary.manualChecks
            .map(
              (check, index) => `
                <label class="manual-check-item">
                  <input
                    type="checkbox"
                    data-manual-check-index="${index}"
                    ${check.passed ? "checked" : ""}
                  />
                  <span>${escapeHtml(check.label)}</span>
                </label>
              `,
            )
            .join("")}
        </div>
      </section>

      <section class="status-card">
        <h3>Follow-Up Items</h3>
        ${
          summary.followUpItems.length
            ? `
              <ul>
                ${summary.followUpItems
                  .map((item) => `<li class="status-fail">${escapeHtml(item)}</li>`)
                  .join("")}
              </ul>
            `
            : "<p class=\"status-pass\">No unresolved follow-up items are currently flagged by this checker.</p>"
        }
      </section>
    </div>
  `;

  statusCheckContent
    .querySelectorAll("[data-manual-check-index]")
    .forEach((checkbox) =>
      checkbox.addEventListener("change", () => {
        updateManualChecklistState(Number(checkbox.dataset.manualCheckIndex), checkbox.checked);
      }),
    );
}

function computeStatusCheck(route, data) {
  const manualState = ensureManualChecklistState(route);
  const deadlineRequired = [
    "judgment-entered",
    "appeal-window",
    "appellate-briefing",
    "emergency",
    "discretionary-review",
  ].includes(data.stage);
  const autoChecks = [
    {
      label: "Case identity entered",
      passed: Boolean(data.caseTitle && data.partyRole),
      detail: data.caseTitle && data.partyRole
        ? "Case title and party role are both present."
        : "Add both a case title and the user's role in the matter.",
    },
    {
      label: "Court and procedure track selected",
      passed: Boolean(data.court && data.track),
      detail: data.court && data.track
        ? "A court and route are selected."
        : "Pick the court and route before relying on the procedure output.",
    },
    {
      label: "Objective described",
      passed: data.objective.trim().length >= 12,
      detail: data.objective.trim().length >= 12
        ? "The case goal is described with enough detail to guide research."
        : "Describe the filing goal or issue to be resolved.",
    },
    {
      label: "Case notes recorded",
      passed: data.notes.trim().length >= 20,
      detail: data.notes.trim().length >= 20
        ? "Notes exist for facts or procedural history."
        : "Add facts, order history, or case context to support procedure review.",
    },
    {
      label: "Deadline captured when timing is material",
      passed: !deadlineRequired || Boolean(data.deadline),
      detail:
        !deadlineRequired || data.deadline
          ? "Deadline coverage is acceptable for the selected stage."
          : "Enter the known filing or response deadline for this stage.",
    },
    {
      label: "Research activity recorded",
      passed: state.researchResults.length > 0 || state.citationMatches.length > 0,
      detail:
        state.researchResults.length > 0 || state.citationMatches.length > 0
          ? "The matter has live research or citation verification results."
          : "Run live caselaw search or verify a citation before treating the plan as ready.",
    },
    {
      label: "Official authority bank available",
      passed: route.authorities.length > 0,
      detail: route.authorities.length > 0
        ? "The selected route includes seeded official rules or court sources."
        : "No authority bank is attached to this route yet.",
    },
  ];

  const manualChecks = route.checklist.map((label, index) => ({
    label,
    passed: Boolean(manualState[index]),
  }));

  const allChecks = [...autoChecks, ...manualChecks];
  const completedCount = allChecks.filter((check) => check.passed).length;
  const totalCount = allChecks.length || 1;
  const score = Math.round((completedCount / totalCount) * 100);
  const followUpItems = [
    ...autoChecks.filter((check) => !check.passed).map((check) => check.detail),
    ...manualChecks
      .filter((check) => !check.passed)
      .map((check) => `Manual procedure confirmation still pending: ${check.label}`),
  ];

  let readinessLabel = "High risk of procedural gaps";
  if (score >= 85) {
    readinessLabel = "Substantially ready for procedure review";
  } else if (score >= 60) {
    readinessLabel = "Needs targeted follow-up";
  }

  return {
    score,
    readinessLabel,
    completedCount,
    totalCount,
    autoChecks,
    manualChecks,
    followUpItems,
  };
}

function renderStatusSummary(route, data) {
  const summary = computeStatusCheck(route, data);
  return `
    <p><strong>${escapeHtml(summary.readinessLabel)}</strong> with ${escapeHtml(
      summary.score,
    )}% of tracked checks satisfied.</p>
    <ul class="warning-list">
      ${summary.followUpItems.length
        ? summary.followUpItems
            .slice(0, 4)
            .map((item) => `<li>${escapeHtml(item)}</li>`)
            .join("")
        : "<li>No follow-up items are currently flagged by the status checker.</li>"}
    </ul>
  `;
}

function ensureManualChecklistState(route) {
  if (!route) {
    return [];
  }

  const existing = state.manualCheckStates[route.id];
  const next = Array.isArray(existing) ? [...existing] : [];
  while (next.length < route.checklist.length) {
    next.push(false);
  }
  state.manualCheckStates[route.id] = next.slice(0, route.checklist.length);
  return state.manualCheckStates[route.id];
}

function updateManualChecklistState(index, checked) {
  const route = getSelectedRoute();
  if (!route) {
    return;
  }

  const manualState = ensureManualChecklistState(route);
  manualState[index] = checked;
  state.manualCheckStates[route.id] = manualState;
  renderStatusCheck();
  renderCurrentPlan();
}

function renderOfficialLinks() {
  const links = OFFICIAL_LINKS[courtSelect.value] || [];

  officialLinks.innerHTML = `
    <section class="status-card">
      <h3>Official Court Links</h3>
      <div class="official-links-grid">
        ${links
          .map(
            (link) => `
              <article class="official-link-card">
                <strong>${escapeHtml(link.label)}</strong>
                <p>${escapeHtml(link.detail)}</p>
                <a href="${escapeHtml(link.url)}" target="_blank" rel="noreferrer">${escapeHtml(
                  link.url,
                )}</a>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderCitationMatches() {
  if (!state.citationMatches.length) {
    citationResults.innerHTML = "";
    return;
  }

  citationResults.innerHTML = `
    <section class="status-card">
      <h3>Citation Check Results</h3>
      <div class="citation-match-list">
        ${state.citationMatches
          .map(
            (match) => `
              <article class="citation-match-card">
                <strong>${escapeHtml(match.caseName || "Matched opinion")}</strong>
                <p>${escapeHtml(match.matchType || "Citation match")}</p>
                <div class="result-meta">
                  ${[match.court, match.dateFiled]
                    .filter(Boolean)
                    .map((value) => `<span class="meta-chip">${escapeHtml(value)}</span>`)
                    .join("")}
                </div>
                ${
                  match.citationList && match.citationList.length
                    ? `<div class="result-citations">${match.citationList
                        .map((citation) => `<span class="citation-chip">${escapeHtml(citation)}</span>`)
                        .join("")}</div>`
                    : ""
                }
                ${
                  match.url
                    ? `<div class="result-actions"><a href="${escapeHtml(
                        match.url,
                      )}" target="_blank" rel="noreferrer">${escapeHtml(match.url)}</a></div>`
                    : ""
                }
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;
}

function renderResearchResults() {
  if (!state.researchResults.length) {
    researchResults.innerHTML = "";
    return;
  }

  researchResults.innerHTML = `
    <section class="status-card">
      <h3>Live Caselaw Results</h3>
      <div class="research-result-list">
        ${state.researchResults
          .map(
            (result, index) => `
              <article class="research-result-card">
                <strong>${escapeHtml(result.caseName || "Untitled opinion")}</strong>
                <p>${escapeHtml(result.snippet || "No summary snippet returned.")}</p>
                <div class="result-meta">
                  ${[result.court, result.dateFiled, result.docketNumber]
                    .filter(Boolean)
                    .map((value) => `<span class="meta-chip">${escapeHtml(value)}</span>`)
                    .join("")}
                </div>
                ${
                  result.citation && result.citation.length
                    ? `<div class="result-citations">${result.citation
                        .slice(0, 4)
                        .map((citation) => `<span class="citation-chip">${escapeHtml(citation)}</span>`)
                        .join("")}</div>`
                    : ""
                }
                <div class="result-actions">
                  <a href="${escapeHtml(result.absolute_url)}" target="_blank" rel="noreferrer">${escapeHtml(
                    result.absolute_url,
                  )}</a>
                  <button class="inline-button" type="button" data-action="citation" data-result-index="${index}">
                    Use Citation
                  </button>
                  <button class="inline-button" type="button" data-action="note" data-result-index="${index}">
                    Add to Notes
                  </button>
                </div>
              </article>
            `,
          )
          .join("")}
      </div>
    </section>
  `;

  researchResults.querySelectorAll("[data-result-index]").forEach((button) => {
    button.addEventListener("click", () => {
      const result = state.researchResults[Number(button.dataset.resultIndex)];
      if (!result) {
        return;
      }

      if (button.dataset.action === "citation") {
        citationInput.value = (result.citation && result.citation[0]) || result.caseName || "";
        setResearchStatus("Primary citation copied into the citation check field.", "success");
        return;
      }

      const notePrefix = `${result.caseName || "Opinion"} | ${result.court || "Court"} | ${
        result.dateFiled || "Date unknown"
      }`;
      const nextNote = `${notePrefix}\n${result.absolute_url}`;
      const notesField = document.querySelector("#notes");
      notesField.value = notesField.value.trim()
        ? `${notesField.value.trim()}\n\n${nextNote}`
        : nextNote;
      renderStatusCheck();
      renderCurrentPlan();
      setResearchStatus("Selected opinion added to case notes.", "success");
    });
  });
}

async function handleResearchSearch(event) {
  event.preventDefault();

  const query = researchQueryInput.value.trim();
  const limit = Number(researchLimitSelect.value) || 8;
  const scope = researchScopeSelect.value;

  if (!query) {
    setResearchStatus("Enter a query or use the case outline to build one.", "warn");
    return;
  }

  setResearchBusy(true);
  setResearchStatus("Searching live opinions...", "info");

  try {
    const params = new URLSearchParams({
      q: query,
      type: "o",
      order_by: "score desc",
    });
    const payload = await fetchJson(`${COURTLISTENER_SEARCH_URL}?${params.toString()}`);
    const results = Array.isArray(payload.results) ? payload.results : [];
    const filtered = scope === "selected" ? filterResultsForCourt(results, courtSelect.value) : results;
    const finalResults = (filtered.length ? filtered : results)
      .slice(0, limit)
      .map(normalizeResearchResult);

    state.researchQuery = query;
    state.researchResults = finalResults;
    renderResearchResults();
    renderStatusCheck();
    renderCurrentPlan();

    if (!finalResults.length) {
      setResearchStatus("No opinions matched the current research query.", "warn");
      return;
    }

    const scopeNote =
      scope === "selected" && !filtered.length
        ? " No selected-court matches were found, so broader results are shown."
        : "";
    setResearchStatus(`Loaded ${finalResults.length} live opinion result(s).${scopeNote}`, "success");
  } catch (error) {
    setResearchStatus(`Live search failed: ${error.message}`, "error");
  } finally {
    setResearchBusy(false);
  }
}

async function handleCitationLookup() {
  const query = citationInput.value.trim();
  if (!query) {
    setResearchStatus("Enter a citation or case name to verify.", "warn");
    return;
  }

  setResearchBusy(true);
  setResearchStatus("Checking citation...", "info");

  try {
    let matches = [];
    const token = apiTokenInput.value.trim();

    if (token) {
      try {
        const payload = await fetchJson(COURTLISTENER_CITATION_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Token ${token}`,
          },
          body: JSON.stringify({ text: query }),
        });
        matches = extractCitationMatches(payload);
      } catch (error) {
        matches = [];
      }
    }

    if (!matches.length) {
      const params = new URLSearchParams({
        q: query,
        type: "o",
        order_by: "score desc",
      });
      const payload = await fetchJson(`${COURTLISTENER_SEARCH_URL}?${params.toString()}`);
      matches = buildSearchBasedCitationMatches(payload.results || [], query);
    }

    state.citationMatches = matches;
    renderCitationMatches();
    renderStatusCheck();
    renderCurrentPlan();

    if (!matches.length) {
      setResearchStatus("No citation match was found from the available lookup paths.", "warn");
      return;
    }

    setResearchStatus(
      token
        ? `Citation check returned ${matches.length} match(es).`
        : `Approximate citation verification returned ${matches.length} match(es). Add an API token if you want to attempt direct lookup.`,
      "success",
    );
  } catch (error) {
    setResearchStatus(`Citation check failed: ${error.message}`, "error");
  } finally {
    setResearchBusy(false);
  }
}

function fillSuggestedResearchQuery() {
  const route = getSelectedRoute();
  const parts = [
    document.querySelector("#case-title").value.trim(),
    document.querySelector("#objective").value.trim(),
    route && route.researchPrompts.length ? route.researchPrompts[0] : "",
  ].filter(Boolean);

  researchQueryInput.value = parts.join(" ");
  setResearchStatus("Research query filled from the current case outline.", "success");
}

function handleApiTokenChange() {
  const token = apiTokenInput.value.trim();
  if (token) {
    localStorage.setItem(API_TOKEN_KEY, token);
    setResearchStatus("CourtListener API token stored in this browser.", "success");
    return;
  }

  localStorage.removeItem(API_TOKEN_KEY);
  setResearchStatus("Stored API token cleared from this browser.", "warn");
}

function loadApiToken() {
  try {
    return localStorage.getItem(API_TOKEN_KEY) || "";
  } catch (error) {
    return "";
  }
}

function setResearchStatus(message, tone) {
  const toneLabel = {
    info: "Working",
    success: "Ready",
    warn: "Attention",
    error: "Error",
  }[tone] || "Status";

  researchStatus.innerHTML = `
    <span class="status-chip">${escapeHtml(toneLabel)}</span>
    <div>${escapeHtml(message)}</div>
  `;
}

function setResearchBusy(isBusy) {
  searchResearchButton.disabled = isBusy;
  verifyCitationButton.disabled = isBusy;
  fillQueryButton.disabled = isBusy;
}

function filterResultsForCourt(results, courtId) {
  return results.filter((result) => matchesSelectedCourt(result, courtId));
}

function matchesSelectedCourt(result, courtId) {
  const courtName = normalizeText(result.court || "");
  const courtCode = normalizeText(result.court_id || "");
  const courtCitation = normalizeText(result.court_citation_string || "");
  const haystack = normalizeText([courtName, courtCode, courtCitation].filter(Boolean).join(" "));

  if (courtId === "us-supreme") {
    return haystack.includes("supreme court of the united states") || haystack.includes("scotus");
  }

  if (courtId === "us-appeals") {
    return (
      courtName.includes("court of appeals") ||
      courtName.includes("district court") ||
      haystack.includes("scotus") ||
      courtName.includes("united states")
    );
  }

  return courtName.includes("california") || courtCode.startsWith("cal") || courtCitation.startsWith("cal.");
}

function normalizeResearchResult(result) {
  return {
    ...result,
    absolute_url: toAbsoluteCourtListenerUrl(result.absolute_url),
    snippet: truncateText(stripHtml(result.opinions?.[0]?.snippet || result.snippet || result.syllabus || ""), 420),
  };
}

function buildSearchBasedCitationMatches(results, query) {
  const normalizedQuery = normalizeText(query);
  return results
    .map(normalizeResearchResult)
    .filter((result) => {
      const citations = (result.citation || []).map(normalizeText);
      const names = normalizeText(result.caseName || "");
      return citations.some((citation) => citation.includes(normalizedQuery)) || names.includes(normalizedQuery);
    })
    .slice(0, 3)
    .map((result) => ({
      caseName: result.caseName,
      court: result.court,
      dateFiled: result.dateFiled,
      url: result.absolute_url,
      citationList: result.citation || [],
      matchType: "Approximate verification from public opinion search",
    }));
}

function extractCitationMatches(payload) {
  const candidates = Array.isArray(payload)
    ? payload
    : Array.isArray(payload.matches)
      ? payload.matches
      : Array.isArray(payload.results)
        ? payload.results
        : [];

  return candidates.slice(0, 5).map((item) => ({
    caseName: item.caseName || item.case_name || item.canonical_case_name || "Matched opinion",
    court: item.court || item.court_name || "",
    dateFiled: item.dateFiled || item.date_filed || "",
    url: toAbsoluteCourtListenerUrl(item.absolute_url || item.url || ""),
    citationList: item.citation || item.citations || item.matched_citations || [],
    matchType: "Direct citation lookup",
  }));
}

async function fetchJson(url, options = {}) {
  const response = await fetch(url, {
    ...options,
    mode: "cors",
  });

  if (!response.ok) {
    throw new Error(`HTTP ${response.status}`);
  }

  return response.json();
}

function toAbsoluteCourtListenerUrl(url) {
  if (!url) {
    return "";
  }

  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }

  return `https://www.courtlistener.com${url}`;
}

function stripHtml(value) {
  return String(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

function truncateText(value, limit) {
  if (value.length <= limit) {
    return value;
  }

  return `${value.slice(0, limit - 1).trim()}...`;
}

function normalizeText(value) {
  return String(value).toLowerCase().replace(/\s+/g, " ").trim();
}

function loadSavedCase(caseId) {
  const record = state.records.find((item) => item.plannerCaseId === caseId);
  if (!record) {
    return;
  }

  state.currentCaseId = record.plannerCaseId;
  state.activeSavedCaseId = record.plannerCaseId;
  caseIdElement.textContent = state.currentCaseId;

  document.querySelector("#case-title").value = record.caseTitle || "";
  document.querySelector("#party-role").value = record.partyRole || "";
  courtSelect.value = record.court || COURTS[0].id;
  hydrateTracks(courtSelect.value, record.track);
  document.querySelector("#case-type").value = record.caseType || "civil";
  document.querySelector("#stage").value = record.stage || "pre-filing";
  document.querySelector("#deadline").value = record.deadline || "";
  document.querySelector("#objective").value = record.objective || "";
  document.querySelector("#notes").value = record.notes || "";
  researchQueryInput.value = record.researchQuery || "";
  state.researchQuery = record.researchQuery || "";
  state.researchResults = Array.isArray(record.researchResults) ? record.researchResults : [];
  state.citationMatches = Array.isArray(record.citationMatches) ? record.citationMatches : [];
  state.manualCheckStates = record.manualCheckStates || {};
  ensureManualChecklistState(getSelectedRoute());

  renderSavedCases();
  renderOfficialLinks();
  renderCitationMatches();
  renderResearchResults();
  renderStatusCheck();
  renderCurrentPlan();
}

function resetForm() {
  form.reset();
  researchForm.reset();
  apiTokenInput.value = loadApiToken();
  courtSelect.value = COURTS[0].id;
  hydrateTracks(COURTS[0].id);
  document.querySelector("#case-type").value = "civil";
  document.querySelector("#stage").value = "pre-filing";
  state.currentCaseId = createPlannerCaseId(courtSelect.value);
  state.researchQuery = "";
  state.researchResults = [];
  state.citationMatches = [];
  state.manualCheckStates = {};
  ensureManualChecklistState(getSelectedRoute());
  caseIdElement.textContent = state.currentCaseId;
}

function getSelectedRoute() {
  return ROUTES.find((route) => route.id === trackSelect.value) || null;
}

function createPlannerCaseId(courtId) {
  const court = COURTS.find((item) => item.id === courtId) || COURTS[0];
  const now = new Date();
  const datePart = `${now.getFullYear()}${String(now.getMonth() + 1).padStart(2, "0")}${String(
    now.getDate(),
  ).padStart(2, "0")}`;
  const randomPart = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `${court.shortCode}-${datePart}-${randomPart}`;
}

function loadRecords() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (error) {
    return [];
  }
}

function persistRecords() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state.records));
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function humanizeStage(stage) {
  const mapping = {
    "pre-filing": "Pre-filing",
    "judgment-entered": "Judgment or order entered",
    "appeal-window": "Inside appeal window",
    "appellate-briefing": "Appellate briefing",
    emergency: "Emergency relief needed",
    "discretionary-review": "Discretionary review",
  };

  return mapping[stage] || stage;
}

function formatDate(value) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) {
    return value;
  }

  return new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}
