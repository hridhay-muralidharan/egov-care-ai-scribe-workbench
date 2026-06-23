window.COPILOT_WORKSTREAMS = [
  "Problem Space Model",
  "Clinical Workflow Discovery",
  "User And Setting Segments",
  "EMR Data Model",
  "AI Quality Loop",
  "Review And Correction Loop",
  "Integration And Orchestration",
  "Governance And Safety",
  "Adoption And Usage Signals",
  "Product Evolution"
];

window.COPILOT_STEPS = [
  {
    title: "Clinical documentation burden enters the product model",
    readiness: 16,
    label: "Problem framed",
    prompt: "The product team is exploring CARE AI-Scribe as the anchor workflow for improving clinical documentation inside CARE HMIS. The early hypothesis is that voice-assisted note creation can reduce doctor burden while improving EMR completion quality.",
    response: "The co-pilot adds this as a problem-space entry. It captures target users, documentation burden, baseline evidence, and the assumptions that should stay visible as the product evolves.",
    affected: ["Problem Space Model", "Clinical Workflow Discovery", "Product Evolution"],
    select: "Problem Space Model",
    updates: {
      "Problem Space Model": {
        status: "in_discovery",
        note: "AI-Scribe opportunity translated into product hypotheses.",
        logged: ["Anchor use case: voice-assisted clinical documentation inside CARE HMIS.", "Intended value: reduce documentation burden and improve EMR completion quality."],
        missing: ["Baseline documentation time.", "Current EMR completion quality.", "Priority user group.", "Pilot facility profile.", "Clinical owner for validation."],
        risks: ["Workflow fit should stay visible alongside transcription quality."],
        questions: ["Which clinical setting has enough burden, usage volume, and validation support for the first focused product learning cycle?"]
      },
      "Clinical Workflow Discovery": {
        status: "missing_evidence",
        note: "Workflow setting ready for field definition.",
        missing: ["OPD/ICU/ward/nursing/TeleOPD priority.", "Consultation start and end points.", "Who speaks.", "Who reviews.", "When notes are submitted."],
        questions: ["Where does documentation happen today, and what gets compressed under time pressure?"]
      },
      "Product Evolution": {
        status: "missing_evidence",
        note: "Evolution path depends on evidence from field settings.",
        missing: ["Facility mix.", "State-level decision criteria.", "Adoption threshold.", "Cost threshold.", "Roadmap review cadence."]
      }
    }
  },
  {
    title: "Field discovery separates settings and users",
    readiness: 27,
    label: "Workflow variation visible",
    prompt: "Early field conversations suggest the documentation workflow may differ across OPD consultations, ICU rounds, ward notes, nursing updates, and TeleOPD oncology consultations. Each setting may have different time pressure, speaker patterns, review needs, and data-entry expectations.",
    response: "The co-pilot organizes setting-specific workflow hypotheses and adds user-setting segments to the product model. This helps roadmap decisions stay grounded in observed differences.",
    affected: ["Clinical Workflow Discovery", "User And Setting Segments", "Review And Correction Loop", "Product Evolution"],
    select: "Clinical Workflow Discovery",
    updates: {
      "Clinical Workflow Discovery": {
        status: "retry_needed",
        note: "Clinical settings require separate workflow maps.",
        logged: ["Potential settings: OPD, ICU rounds, ward notes, nursing updates, TeleOPD oncology consultations.", "Each setting may differ in time pressure, speakers, review needs, and data-entry expectations."],
        missing: ["Observed workflow per setting.", "Frequency and duration.", "User pain by role.", "Documentation handoff points.", "Failure modes."],
        risks: ["Setting-specific variation can affect review burden, adoption, and release sequencing."],
        questions: ["Which workflow should define the first product learning cycle, and which settings should become extension paths?"]
      },
      "User And Setting Segments": {
        status: "in_discovery",
        note: "Segmentation begins with role and care setting.",
        logged: ["Segments may include doctors, nurses, clinical validators, hospital administrators, implementation teams, and state reviewers."],
        missing: ["Primary user for v1.", "Secondary users.", "Role-specific adoption barriers.", "Setting-specific success criteria."]
      },
      "Review And Correction Loop": {
        status: "missing_evidence",
        note: "Correction model depends on user and setting.",
        missing: ["Reviewer role.", "Correction timing.", "Accept/edit/reject pattern.", "Clinical sign-off point."]
      }
    }
  },
  {
    title: "Structured EMR mapping becomes product memory",
    readiness: 39,
    label: "Data model scoped",
    prompt: "The team wants Scribe output to become useful structured records. The next product question is how captured speech becomes note sections, coded fields where applicable, and CARE HMIS entries aligned with relevant health-data expectations.",
    response: "The co-pilot adds the structured record path to the product model. Field mapping, clinical review, data quality, and standards alignment become persistent product decisions.",
    affected: ["EMR Data Model", "Integration And Orchestration", "Review And Correction Loop", "Governance And Safety"],
    select: "EMR Data Model",
    updates: {
      "EMR Data Model": {
        status: "missing_evidence",
        note: "Structured output needs explicit mapping.",
        logged: ["Scribe output should map into note sections and CARE HMIS fields where appropriate.", "Relevant standards may include FHIR, SNOMED CT, and LOINC depending on the data element."],
        missing: ["Target fields for v1.", "Required vs optional fields.", "Coding responsibility.", "Data-quality rules.", "Standards owner."],
        risks: ["A readable note still needs field, code, and completion logic to work as product data."],
        questions: ["Which fields should be populated automatically, suggested for review, or left for manual entry in the current release?"]
      },
      "Integration And Orchestration": {
        status: "in_discovery",
        note: "Scribe-to-EMR handoff needs product design.",
        missing: ["Where draft notes appear.", "Save/submit sequence.", "Fallback path.", "Sync behavior."]
      },
      "Governance And Safety": {
        status: "at_risk",
        note: "Clinical data quality affects safety.",
        risks: ["Field-mapping choices can create downstream clinical and reporting risk signals."]
      }
    }
  },
  {
    title: "AI quality becomes a product feedback loop",
    readiness: 49,
    label: "Evaluation loop emerging",
    prompt: "The AI partner can report model accuracy and latency. The product team also needs workflow-level measures: documentation time saved, correction effort, missing-critical-field rate, clinician trust, completion quality, and failure cases by setting and language.",
    response: "The co-pilot connects model metrics with product metrics. Evaluation becomes a feedback loop that informs prompt design, model routing, UI review states, and release priorities.",
    affected: ["AI Quality Loop", "Review And Correction Loop", "Adoption And Usage Signals", "Product Evolution"],
    select: "AI Quality Loop",
    updates: {
      "AI Quality Loop": {
        status: "ready_for_review",
        note: "Workflow-level evaluation defined.",
        logged: ["Metrics needed: accuracy, latency, time saved, correction effort, missing-critical-field rate, clinician trust, completion quality, setting/language failure cases."],
        decisions: ["Evaluate AI-Scribe through both model quality and workflow usefulness."],
        missing: ["Gold-standard review sample.", "Acceptance thresholds.", "Language test set.", "Error taxonomy.", "Clinical reviewer cadence."],
        risks: ["Correction effort can reveal product friction even when transcription quality is strong."]
      },
      "Review And Correction Loop": {
        status: "in_discovery",
        note: "Correction effort becomes a core product signal.",
        missing: ["Edit distance proxy.", "Review time.", "Common correction categories.", "Clinician satisfaction signal."]
      },
      "Product Evolution": {
        status: "in_discovery",
        note: "Roadmap needs explicit thresholds.",
        missing: ["Minimum quality bar.", "Adoption bar.", "Cost bar.", "Safety bar.", "Release review rhythm."]
      }
    }
  },
  {
    title: "Review and correction become learning infrastructure",
    readiness: 57,
    label: "Human review loop defined",
    prompt: "Clinical validation feedback suggests v1 should require clinician review before note submission. The product needs clear states for draft, reviewed, corrected, submitted, and rejected outputs, with a way to capture correction feedback for product improvement.",
    response: "The co-pilot defines AI-Scribe as a documentation assistant with clinician accountability, explicit review states, and correction data that improves the product over time.",
    affected: ["Review And Correction Loop", "Governance And Safety", "AI Quality Loop", "Integration And Orchestration"],
    select: "Review And Correction Loop",
    updates: {
      "Review And Correction Loop": {
        status: "ready_for_review",
        note: "Review states and accountability boundary defined.",
        logged: ["V1 requires clinician review before note submission.", "Draft, reviewed, corrected, submitted, and rejected states are needed."],
        decisions: ["AI-Scribe assists documentation; clinicians remain accountable for submitted records."],
        missing: ["Correction reason categories.", "Reviewer workload impact.", "Audit trail fields.", "Feedback-to-model/product loop."]
      },
      "Governance And Safety": {
        status: "ready_for_review",
        note: "Human accountability preserved.",
        decisions: ["V1 final clinical note submission requires clinician review."]
      },
      "Integration And Orchestration": {
        status: "missing_evidence",
        note: "State transitions must be reflected in CARE HMIS.",
        missing: ["Draft storage behavior.", "Submission trigger.", "Rejection path.", "Revision history."]
      }
    }
  },
  {
    title: "Usage and cost signals enter the product model",
    readiness: 64,
    label: "Usage model scoped",
    prompt: "State stakeholders will need evidence on AI usage and cost as adoption grows. The product team wants dashboards for consultations processed, minutes captured, tokens or model usage, cost per consultation, cost per doctor, cost per facility, and adoption by department or setting.",
    response: "The co-pilot adds cost and usage signals as first-class product inputs. These signals help product managers reason about adoption quality, infrastructure choices, model routing, and state-level planning.",
    affected: ["Adoption And Usage Signals", "Product Evolution", "AI Quality Loop", "Governance And Safety"],
    select: "Adoption And Usage Signals",
    updates: {
      "Adoption And Usage Signals": {
        status: "ready_for_review",
        note: "Cost and usage model defined.",
        logged: ["Usage evidence: consultations processed, minutes captured, model usage, cost per consultation, cost per doctor, cost per facility, adoption by setting."],
        decisions: ["Cost transparency belongs inside product instrumentation from the pilot stage."],
        missing: ["Model pricing assumptions.", "Facility-level allocation rules.", "Dashboard owners.", "Budget-holder reporting format."],
        risks: ["State-readable cost evidence supports product planning for clinically promising workflows."]
      },
      "Product Evolution": {
        status: "in_discovery",
        note: "Product evolution now includes budget evidence.",
        missing: ["Acceptable cost range.", "Volume projection.", "State review cadence.", "Expansion decision format."]
      },
      "AI Quality Loop": {
        status: "ready_for_review",
        note: "Model quality and cost should be reviewed together.",
        missing: ["Model-routing policy.", "Cost-quality trade-off threshold."]
      }
    }
  },
  {
    title: "Governance becomes product guardrails",
    readiness: 59,
    label: "Governance review active",
    prompt: "Privacy and safety review asks for role-based access, consent or notice expectations, audit logs, retention rules, incident handling, clinical disclaimers, protected data boundaries, and review rules for AI-generated content.",
    response: "The co-pilot adds governance as durable product guardrails. Access, accountability, auditability, and data handling become part of the product model that evolves with each release.",
    affected: ["Governance And Safety", "EMR Data Model", "Review And Correction Loop", "Adoption And Usage Signals"],
    select: "Governance And Safety",
    updates: {
      "Governance And Safety": {
        status: "blocked",
        note: "Governance requirements ready for review.",
        logged: ["Governance asks: role-based access, consent/notice expectations, audit logs, retention rules, incident handling, disclaimers, data boundaries, review rules."],
        missing: ["Governance owner sign-off.", "Audit event schema.", "Retention policy.", "Incident response path.", "Clinical safety review cadence."],
        risks: ["Privacy, safety, and accountability boundaries shape release sequencing."],
        questions: ["Which AI outputs are suggestions, which become draft records, and which require explicit clinician approval before submission?"]
      },
      "EMR Data Model": {
        status: "at_risk",
        note: "Data handling rules affect integration.",
        missing: ["Access control mapping.", "Data retention by artifact type.", "Audit fields."]
      },
      "Adoption And Usage Signals": {
        status: "at_risk",
        note: "Training should include safe-use expectations.",
        missing: ["Safe-use training content.", "Escalation and support path."]
      }
    }
  },
  {
    title: "Field adoption becomes product telemetry",
    readiness: 73,
    label: "Adoption loop shaped",
    prompt: "Implementation planning suggests the pilot should launch with a constrained facility set, defined clinical settings, hands-on onboarding, daily support during early use, clinician feedback loops, and weekly review of quality, usage, cost, and workflow friction.",
    response: "The co-pilot turns adoption into product telemetry. The rollout is observed, supported, and measured so the product model improves with field use.",
    affected: ["Adoption And Usage Signals", "Clinical Workflow Discovery", "User And Setting Segments", "Product Evolution"],
    select: "Adoption And Usage Signals",
    updates: {
      "Adoption And Usage Signals": {
        status: "ready_for_review",
        note: "Constrained rollout and feedback loop defined.",
        logged: ["Pilot plan: constrained facility set, defined clinical settings, hands-on onboarding, daily support, clinician feedback loops, weekly quality/usage/cost review."],
        decisions: ["Treat adoption support as part of the product plan and implementation rhythm."],
        missing: ["Pilot calendar.", "Training assets.", "Support rota.", "Escalation owner.", "Feedback review cadence."]
      },
      "Clinical Workflow Discovery": {
        status: "ready_for_review",
        note: "Field observation continues during rollout.",
        decisions: ["Use pilot feedback to refine setting-specific workflow assumptions."]
      },
      "Product Evolution": {
        status: "ready_for_review",
        note: "Roadmap evidence will come from constrained rollout.",
        missing: ["Expansion decision thresholds.", "State review pack.", "Next release candidate list."]
      }
    }
  },
  {
    title: "Product evolution becomes the operating rhythm",
    readiness: 84,
    label: "Evolution loop active",
    prompt: "The team defines an ongoing product scorecard: documentation time saved, EMR completion quality, correction effort, clinician adoption, patient-flow impact, latency, accuracy, language performance, cost per consultation, incident count, and state-level decision evidence.",
    response: "The co-pilot marks the product model as active. Each field input can update the model, reshape the roadmap, and guide the next product learning cycle.",
    affected: ["Product Evolution", "Problem Space Model", "AI Quality Loop", "Governance And Safety", "Adoption And Usage Signals"],
    select: "Product Evolution",
    updates: {
      "Problem Space Model": { status: "approved", note: "Problem hypothesis is bounded and measurable." },
      "Clinical Workflow Discovery": { status: "ready_for_review", note: "Core workflow assumptions are mapped for ongoing validation." },
      "User And Setting Segments": { status: "ready_for_review", note: "User and setting segments are part of the product model." },
      "EMR Data Model": { status: "ready_for_review", note: "Structured EMR mapping is a launch-critical product workstream." },
      "AI Quality Loop": { status: "ready_for_review", note: "Evaluation includes model quality and workflow usefulness." },
      "Review And Correction Loop": { status: "ready_for_review", note: "Human review and correction feedback loop are explicit." },
      "Integration And Orchestration": { status: "ready_for_review", note: "Scribe-to-EMR handoff states need build validation." },
      "Governance And Safety": { status: "ready_for_review", note: "Governance controls are explicit product guardrails." },
      "Adoption And Usage Signals": { status: "ready_for_review", note: "Adoption, cost, and usage instrumentation are part of the product model." },
      "Product Evolution": {
        status: "pilot_candidate",
        note: "Continuous product scorecard defined.",
        logged: ["Scorecard: time saved, EMR completion quality, correction effort, adoption, patient-flow impact, latency, accuracy, language performance, cost per consultation, incidents, state-level decision evidence."],
        decisions: ["Use the scorecard to guide roadmap updates, release reviews, and future product learning cycles."],
        missing: ["Final acceptance thresholds.", "Baseline measurement window.", "State-level expansion decision format.", "Next release review date."],
        risks: ["Balanced scoring keeps quality, safety, cost, and adoption visible alongside time saved."],
        questions: ["Which signals should trigger the next roadmap update?"]
      }
    }
  }
];
