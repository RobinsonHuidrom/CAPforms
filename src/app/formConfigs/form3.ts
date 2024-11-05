
import { FormConfig } from '../types';

const form3Config: FormConfig = {
  name: "Form 3",
  formId: 3,
  steps: [
    {
      heading: "SPECIMEN",
      controls: [
        {
          type: "checkbox-group",
          controlName: "procedure",
          label: "Procedure",
          options: [
            {
              label: "Excision (less than total mastectomy)",
              value: "excision",
              controlName: "excision",
            },
            {
              label: "Total mastectomy (including nipple-sparing and skin-sparing mastectomy)",
              value: "totalMastectomy",
              controlName: "totalMastectomy",
            },
            {
              label: "Other (specify):",
              value: "otherSpecifyProcedure",
              type: "input",
              controlName: "otherSpecifyProcedureInput",
              inputLabel: "Please specify",
            },
            {
              label: "Not specified",
              value: "notSpecifiedProcedure",
              controlName: "notSpecifiedProcedure",
            }
          ]
        },
        {
          type: "checkbox-group",
          controlName: "specimenLaterality",
          label: "Specimen Laterality",
          options: [
            {
              label: "Right",
              value: "right",
              controlName: "right",
            },
            {
              label: "Left",
              value: "left",
              controlName: "left",
            },
            {
              label: "Not specified",
              value: "notSpecifiedLaterality",
              controlName: "notSpecifiedLaterality",
            }
          ]
        }
      ]
    },
    {
      heading: "Tumor Site",
      controls: [
        {
          type: "checkbox-group",
          controlName: "tumorSite",
          label: "(select all that apply)",
          options: [
            {
              label: "Upper outer quadrant",
              value: "upperOuterQuadrant",
              controlName: "upperOuterQuadrant",
            },
            {
              label: "Lower outer quadrant",
              value: "lowerOuterQuadrant",
              controlName: "lowerOuterQuadrant",
            },
            {
              label: "Upper inner quadrant",
              value: "upperInnerQuadrant",
              controlName: "upperInnerQuadrant",
            },
            {
              label: "Lower inner quadrant",
              value: "lowerInnerQuadrant",
              controlName: "lowerInnerQuadrant",
            },
            {
              label: "Central",
              value: "central",
              controlName: "central",
            },
            {
              label: "Nipple",
              value: "nipple",
              controlName: "nipple",
            },
            {
              label: "Clock position",
              value: "clockPosition",
              controlName: "clockPosition",
              children: [
                {
                  type: "checkbox-group",
                  controlName: "clockPositionOptions",
                  label: "",
                  options: [
                    {
                      label: "1 o'clock",
                      value: "oneOclock",
                      controlName: "oneOclock"
                    },
                    {
                      label: "2 o'clock",
                      value: "twoOclock",
                      controlName: "twoOclock"
                    },
                    {
                      label: "3 o'clock",
                      value: "threeOclock",
                      controlName: "threeOclock"
                    },
                    {
                      label: "4 o'clock",
                      value: "fourOclock",
                      controlName: "fourOclock"
                    },
                    {
                      label: "5 o'clock",
                      value: "fiveOclock",
                      controlName: "fiveOclock"
                    },
                    {
                      label: "6 o'clock",
                      value: "sixOclock",
                      controlName: "sixOclock"
                    },
                    {
                      label: "7 o'clock",
                      value: "sevenOclock",
                      controlName: "sevenOclock"
                    },
                    {
                      label: "8 o'clock",
                      value: "eightOclock",
                      controlName: "eightOclock"
                    },
                    {
                      label: "9 o'clock",
                      value: "nineOclock",
                      controlName: "nineOclock"
                    },
                    {
                      label: "10 o'clock",
                      value: "tenOclock",
                      controlName: "tenOclock"
                    },
                    {
                      label: "11 o'clock",
                      value: "elevenOclock",
                      controlName: "elevenOclock"
                    },
                    {
                      label: "12 o'clock",
                      value: "twelveOclock",
                      controlName: "twelveOclock"
                    }
                  ]
                }
              ]
            },
            {
              label: "Specify distance from nipple in Centimeters (cm)",
              value: "specifyDistanceFromNipple",
              type: "input",
              controlName: "distanceFromNipple",
              inputLabel: "Enter distance (in cm)"
            },
            {
              label: "Other (specify)",
              value: "otherSpecify",
              type: "input",
              controlName: "otherSpecifyInput",
              inputLabel: "Please specify",
            },
            {
              label: "Not specified",
              value: "notSpecified",
              controlName: "notSpecified",
            }
          ]
        }
      ]
    },
    {
      heading: "Tumor Size",
      controls: [
        {
          type: "checkbox-group",
          controlName: "dimension",
          label: " ",
          options: [
            {
              label: "Greatest dimension in Millimeters (mm)",
              type: "input",
              value: "",
              controlName: "greatestDimension",
              children: [
                {
                  type: "checkbox-group",
                  controlName: "additionalDimensions",
                  label: "",
                  options: [
                    {
                      type : "input",
                      value: "",
                      label: "Add Additional Dimensions in Millimeters (mm)",
                    }
                  ]
                }
              ]
            },
            {
              type: "input",
              controlName: "cannotBeDetermined",
              label: "Cannot be determined (explain)",
              value: "cannotBeDetermined",
              inputLabel: "Please explain",
            }
          ]
        }
      ]
    },
    {
      heading: "Histologic Type (Note A)",
      controls: [
        {
          type: "checkbox-group",
          controlName: "histologicType",
          label: "",
          options: [
            {
              label: "Phyllodes tumor, benign",
              value: "benign",
              controlName: "benign",
              children: []
            },
            {
              label: "Phyllodes tumor, borderline",
              value: "borderline",
              controlName: "borderline",
              children: []
            },
            {
              label: "Phyllodes tumor, malignant",
              value: "malignant",
              controlName: "malignant",
              children: []
            }
          ]
        }
      ]
    },
    {
      heading: "Stromal Cellularity (Note B)",
      controls: [
        {
          type: "checkbox-group",
          controlName: "stromalCellularity",
          label: "",
          options: [
            {
              label: "Mild (stromal nuclei are non-overlapping)",
              value: "mild",
              controlName: "mild"
            },
            {
              label: "Moderate (some overlapping stromal nuclei)",
              value: "moderate",
              controlName: "moderate"
            },
            {
              label: "Marked (many overlapping stromal nuclei)",
              value: "marked",
              controlName: "marked"
            }
          ]
        }
      ]
    },
    {
      heading: "Stromal Atypia (Note C)",
      controls: [
        {
          type: "checkbox-group",
          controlName: "stromalAtypia",
          label: "",
          options: [
            {
              label: "None",
              value: "none",
              controlName: "none",
            },
            {
              label: "Mild (minimal variation in nuclear size, even chromatin, and smooth nuclear contours)",
              value: "mild",
              controlName: "mild",
            },
            {
              label: "Moderate (more variation in nuclear size and irregular nuclear membranes)",
              value: "moderate",
              controlName: "moderate",
            },
            {
              label: "Marked (marked nuclear pleomorphism, hyperchromasia, and irregular nuclear contours)",
              value: "marked",
              controlName: "marked",
            }
          ]
        }
      ]
    },
    {
      heading: "Stromal Overgrowth (Note D)",
      controls: [
        {
          type: "checkbox-group",
          controlName: "stromalOvergrowth",
          label: "",
          options: [
            {
              label: "Absent",
              value: "absent",
              controlName: "absent",
            },
            {
              label: "Present",
              value: "present",
              controlName: "present",
            },
            {
              label: "Cannot be determined",
              value: "cannotDetermine",
              controlName: "cannotDetermine",
            }
          ]
        }
      ]
    },
    {
      heading: "Mitotic Rate (Note E)",
      controls: [
        {
          type: "checkbox-group",
          controlName: "mitoticRate",
          label: "",
          options: [
            {
              label: "Specify number of mitoses per square Millimeter (mm)",
              value: "specifyNumber",
              type: "input",
              controlName: "mitosesSpecifyNumber",
              inputLabel: "Please specify",
            },
            {
              label: "Cannot be determined",
              value: "cannotDetermine",
              controlName: "cannotDetermine",
            }
          ]
        }
      ]
    },
    {
      heading: "Histologic Tumor Border",
      controls: [
        {
          type: "checkbox-group",
          controlName: "tumorBorder",
          label: "",
          options: [
            {
              label: "Circumscribed (well-defined; pushing)",
              value: "circumscribed",
              controlName: "circumscribed",
            },
            {
              label: "Infiltrative (permeative)",
              value: "infiltrative",
              controlName: "infiltrative",
              children: [
                {
                  type: "checkbox-group",
                  controlName: "infiltrativeDetail",
                  label: "",
                  options: [
                    {
                      label: "Focal",
                      value: "focal",
                      controlName: "focal",
                    },
                    {
                      label: "Extensive",
                      value: "extensive",
                      controlName: "extensive",
                    }
                  ]
                }
              ]
            },
            {
              label: "Cannot be determined",
              value: "cannotDetermine",
              controlName: "cannotDetermine",
            }
          ]
        }
      ]
    },
    {
      heading: "Malignant Heterologous Elements (Note F)",
      controls: [
        {
          type: "checkbox-group",
          controlName: "heterologousElements",
          label: " ",
          options: [
            {
              label: "Not identified",
              value: "notIdentified",
              controlName: "notIdentified",
            },
            {
              label: "Liposarcoma (excluding well-differentiated liposarcoma)",
              value: "liposarcoma",
              controlName: "liposarcoma",
            },
            {
              label: "Osteosarcoma",
              value: "osteosarcoma",
              controlName: "osteosarcoma",
            },
            {
              label: "Chondrosarcoma",
              value: "chondrosarcoma",
              controlName: "chondrosarcoma",
            },
            {
              label: "Other (specify):",
              value: "otherHeterologousElement",
              type: "input",
              controlName: "otherHeterologousElement",
              inputLabel: "Please specify",
            }
          ]
        }
      ]
    },
    {
      heading: "Margin Status for Phyllodes Tumor",
      controls: [
        {
          type: "checkbox-group",
          controlName: "phyllodesTumorStatus",
          label: " ",
          options: [
            {
              label: "All margins negative for phyllodes tumor",
              value: "allMarginsNegative",
              controlName: "allMarginsNegative",
              children: [
                { 
                  label: "Closest Margin(s) to Phyllodes Tumor (select all that apply)", 
                  type: "checkbox-group",
                  controlName: "closestMargins",
                  options: [
                    {
                      label: "Anterior",
                      value: "anterior",
                      controlName: "anterior",
                    },
                    {
                      label: "Posterior",
                      value: "posterior",
                      controlName: "posterior",
                    },
                    {
                      label: "Other (specify)",
                      value: "other",
                      type: "input",
                      controlName: "otherClosestMargin",
                      inputLabel: "Please specify",
                    },
                    {
                      label: "Cannot be determined (explain)",
                      value: "cannotDetermine",
                      type: "input",
                      controlName: "cannotDetermineClosestMargin",
                      inputLabel: "Please explain",
                    }
                  ]
                },
                {
                  type: "checkbox-group",
                  controlName: "distanceToClosestMargin",
                  label: "Distance from Phyllodes Tumor to Closest Margin. Specify in Millimeters (mm)",
                  options: [
                    {
                      label: "Exact distance:",
                      value: "exactDistance",
                      type: "input",
                      controlName: "exactDistanceInput",
                      inputLabel: "Enter exact distance (in mm)",
                    },
                    {
                      label: "Less than:",
                      value: "lessThan",
                      type: "input",
                      controlName: "lessThanInput",
                      inputLabel: "Enter value (in mm)",
                    },
                    {
                      label: "Greater than:",
                      value: "greaterThan",
                      type: "input",
                      controlName: "greaterThanInput",
                      inputLabel: "Enter value (in mm)",
                    },
                    {
                      label: "Other (specify)",
                      value: "otherDistance",
                      type: "input",
                      controlName: "otherDistanceInput",
                      inputLabel: "Please specify distance (in mm)",
                    },
                    {
                      label: "Cannot be determined (explain)",
                      value: "cannotDetermineDistance",
                      type: "input",
                      controlName: "cannotDetermineDistanceInput",
                      inputLabel: "Please explain",
                    }
                  ]
                }
              ]
            },
            {
              label: "Phyllodes tumor present at margin",
              value: "tumorPresentAtMargin",
              controlName: "tumorPresentAtMargin",
              children: [
                {
                  type: "checkbox-group",
                  controlName: "marginsInvolved",
                  label: "Margin(s) Involved by Phyllodes Tumor (select all that apply)",
                  options: [
                    {
                      label: "Medial",
                      value: "medial",
                      controlName: "medial",
                    },
                    {
                      label: "Lateral",
                      value: "lateral",
                      controlName: "lateral",
                    },
                    {
                      label: "Other (specify)",
                      value: "otherInvolved",
                      type: "input",
                      controlName: "otherInvolvedInput",
                      inputLabel: "Please specify",
                    },
                    {
                      label: "Cannot be determined (explain)",
                      value: "cannotDetermineInvolved",
                      type: "input",
                      controlName: "cannotDetermineInvolvedInput",
                      inputLabel: "Please explain",
                    }
                  ]
                }
              ]
            },
            {
              label: "Other (specify):",
              value: "otherInvolved",
              type: "input",
              controlName: "otherInvolvedInput",
              inputLabel: "Please specify",
            },
            {
              label: "Cannot be determined (explain)",
              value: "cannotDetermineInvolved",
              type: "input",
              controlName: "cannotDetermineInvolvedInput",
              inputLabel: "Please explain",
            }
          ]
        },
        {
          label: "Margin Comment",
          type: "checkbox-input",
          controlName: "MarginComment",
          inputLabel: "Comment here",
        }
      ]
    },
    {
      heading: "REGIONAL LYMPH NODES",
      controls: [
        {
          type: "checkbox-group",
          controlName: "regionalLymphNodeStatus",
          label: " ",
          options: [
            {
              label: "Not applicable (no regional lymph nodes submitted or found)",
              value: "notApplicable",
              controlName: "notApplicable",
              children: []
            },
            {
              label: "Regional lymph nodes present",
              value: "regionalLymphNodesPresent",
              controlName: "regionalLymphNodesPresent",
              children: [
                {
                  type: "checkbox-group",
                  controlName: "regionalNodesDetail",
                  label: "",
                  options: [
                    {
                      label: "All regional lymph nodes negative for tumor",
                      value: "allNegative",
                      controlName: "allNegative",
                    },
                    {
                      label: "Tumor present in regional lymph nodes",
                      value: "tumorPresent",
                      controlName: "tumorPresent",
                      children: [
                        {
                          type: "checkbox-group",
                          controlName: "nodesWithTumor",
                          label: "Number of Lymph Nodes with Tumor",
                          options: [
                            {
                              label: " Exact number (specify) ",
                              value: "exact",
                              type: "input",
                              controlName: "exactNumber",
                              inputLabel: "Enter distance (in cm)",
                            },
                            {
                              label: " At least (specify): ",
                              value: "atLeast",
                              type: "input",
                              controlName: "atLeastSpecify",
                              inputLabel: "Enter distance (in cm)",
                            },
                            {
                              label: "Other (specify)",
                              value: "otherSpecify",
                              type: "input",
                              controlName: "others",
                              inputLabel: "Please specify",
                            },
                            {
                              label: "Cannot be determined (explain)",
                              value: "cannotDetermine",
                              type: "input",
                              controlName: "cannotDetermine",
                              inputLabel: "Please explain",
                            },
                          ]
                        }
                      ]
                    },
                    {
                      label: "Other (specify)",
                      value: "otherSpecify",
                      type: "input",
                      controlName: "others",
                      inputLabel: "Please specify",
                    },
                    {
                      label: "Cannot be determined (explain)",
                      value: "cannotDetermine",
                      type: "input",
                      controlName: "cannotDetermine",
                      inputLabel: "Please explain",
                    },
                    {
                      label: "Number of Lymph Nodes Examined",
                      value: "lymphNodesExamined",
                      controlName: "lymphNodesExamined",
                      children: [
                        {
                          type: "checkbox-group",
                          controlName: "lymphNodes",
                          label: "",
                          options: [
                            {
                              label: " Exact number (specify) ",
                              value: "exact",
                              type: "input",
                              controlName: "exactNumber",
                              inputLabel: "Enter distance (in cm)",
                            },
                            {
                              label: " At least (specify) ",
                              value: "atLeast",
                              type: "input",
                              controlName: "atLeastSpecify",
                              inputLabel: "Enter distance (in cm)",
                            },
                            {
                              label: "Other (specify)",
                              value: "otherSpecify",
                              type: "input",
                              controlName: "others",
                              inputLabel: "Please specify",
                            },
                            {
                              label: "Cannot be determined (explain) ",
                              value: "cannotDetermine",
                              type: "input",
                              controlName: "cannotDetermine",
                              inputLabel: "Please explain",
                            },
                          ]
                        }
                      ]
                    },
                  ]
                }
              ]
            }
          ]
        },
        {
          label: "+Regional Lymph Node Comment:",
          type: "input",
          controlName: "LymphNodeComment",
          inputLabel: "Please explain",
        }
      ]
    },
    {
      heading: "DISTANT METASTASIS",
      controls: [
        {
          type: "checkbox-group",
          controlName: "distantMetastasis",
          label: "Distant Site(s) Involved, if applicable",
          options: [
            {
              label: "Not applicable",
              value: "notApplicable",
              controlName: "notApplicable",
            },
            {
              label: "Other (specify):",
              value: "otherSpecify",
              type: "input",
              controlName: "others",
              inputLabel: "Please specify",
            },
            {
              label: "Cannot be determined (explain):",
              value: "cannotDetermine",
              type: "input",
              controlName: "cannotDetermine",
              inputLabel: "Please explain",
            },
          ]
        }
      ]
    },
    {
      heading: "PATHOLOGIC STAGE CLASSIFICATION (pTNM, AJCC 8th Edition) (Note G)",
      controls: [
        {
          type: "checkbox-group",
          controlName: "pathologicStage",
          label: "(required only if the tumor is malignant)",
          options: [
            {
              label: "Not applicable",
              value: "notApplicable",
              controlName: "notApplicable",
              children: []
            },
            {
              label: "Tumor is malignant",
              value: "tumorMalignant",
              controlName: "tumorMalignant",
              children: [
                {
                  type: "checkbox-group",
                  controlName: "tnmDescriptors",
                  label: "TNM Descriptors (select all that apply)",
                  options: [
                    {
                      label: "Not applicable",
                      value: "notApplicable",
                      controlName: "notApplicable",
                    },
                    {
                      label: "m (multiple)",
                      value: "multiple",
                      controlName: "multiple",
                    },
                    {
                      label: "r (recurrent)",
                      value: "recurrent",
                      controlName: "recurrent",
                    },
                    {
                      label: "y (post treatment)",
                      value: "postTreatment",
                      controlName: "postTreatment",
                    }
                  ]
                },
                {
                  type: "checkbox-group",
                  controlName: "pTCategory",
                  label: "pT Category",
                  options: [
                    {
                      label: "pT not assigned (cannot be determined based on available pathological information)",
                      value: "pTNotAssigned",
                      controlName: "pTNotAssigned",
                    },
                    {
                      label: "pT0: No evidence of primary tumor",
                      value: "pT0",
                      controlName: "pT0",
                    },
                    {
                      label: "pT1: Tumor 5 cm or less in greatest dimension",
                      value: "pT1",
                      controlName: "pT1",
                    },
                    {
                      label: "pT2: Tumor more than 5 cm but not more than 10 cm",
                      value: "pT2",
                      controlName: "pT2",
                    },
                    {
                      label: "pT3: Tumor more than 10 cm but not more than 15 cm",
                      value: "pT3",
                      controlName: "pT3",
                    },
                    {
                      label: "pT4: Tumor more than 15 cm in greatest dimension",
                      value: "pT4",
                      controlName: "pT4",
                    }
                  ]
                },
                {
                  type: "checkbox-group",
                  controlName: "pNCategory",
                  label: "pN Category",
                  options: [
                    {
                      label: "pN not assigned (no nodes submitted or found)",
                      value: "pNNotAssignedNoNodes",
                      controlName: "pNNotAssignedNoNodes",
                    },
                    {
                      label: "pN not assigned (cannot be determined based on available pathological information)",
                      value: "pNNotAssignedCannotDetermine",
                      controlName: "pNNotAssignedCannotDetermine",
                    },
                    {
                      label: "pN0: No regional lymph node metastasis",
                      value: "pN0",
                      controlName: "pN0",
                    },
                    {
                      label: "pN1: Regional lymph node metastasis",
                      value: "pN1",
                      controlName: "pN1",
                    }
                  ]
                },
                {
                  type: "checkbox-group",
                  controlName: "pMCategory",
                  label: "pM Category (required only if confirmed pathologically)",
                  options: [
                    {
                      label: "Not applicable - pM cannot be determined from the submitted specimen(s)",
                      value: "notApplicablePM",
                      controlName: "notApplicablePM",
                    },
                    {
                      label: "pM1: Distant metastasis",
                      value: "pM1",
                      controlName: "pM1",
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    },
    {
      heading: "ADDITIONAL FINDINGS",
      controls: [
        {
          type: "checkbox-group",
          controlName: "additionalFindings",
          label: "(select all that apply)",
          options: [
            {
              label: "Fibroepithelial proliferation (coexisting fibroadenoma or fibroadenomatoid change in the tissue surrounding the phyllodes tumor)",
              value: "fibroepithelialProliferation",
              controlName: "fibroepithelialProliferation",
            },
            {
              label: "Atypical ductal hyperplasia",
              value: "atypicalDuctalHyperplasia",
              controlName: "atypicalDuctalHyperplasia",
            },
            {
              label: "Atypical lobular hyperplasia",
              value: "atypicalLobularHyperplasia",
              controlName: "atypicalLobularHyperplasia",
            },
            {
              label: "Other (specify):",
              value: "otherSpecify",
              type: "input",
              controlName: "others",
              inputLabel: "Please specify",
            },
          ]
        }
      ]
    },
    {
      heading: "COMMENTS",
      controls: [
        {
          type: "input",
          controlName: "comments",
          label: "Comment(s):",
          inputLabel: "Enter comments"
        }
      ]
    }
  ],
};

export default form3Config;