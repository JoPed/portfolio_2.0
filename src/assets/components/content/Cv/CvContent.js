import { faLocationDot, faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons"

export const cvContent = {
    headline: "Webudvikler under uddannelse",
    image: {
        imgLx: "/assets/images/desktop/cv/Portrait_Jonas_Bjoern_Pedersen_lx.webp",
        imgLg: "/assets/images/desktop/cv/Portrait_Jonas_Bjoern_Pedersen_lg.webp",
        imgTablet:"/assets/images/tablet/cv/Portrait_Jonas_Bjoern_Pedersen_tablet.webp"
    },
    info: [
            {
                info: "Skolestræde 1, 2.t.v  8500 Grenaa",
                icon: faLocationDot,
                id: "address"
            },
            {
                info: "21152526",
                icon: faPhone,
                id: "phonenumber"
            },
            {
                info: "jonasbjoern@gmail.com",
                icon: faEnvelope,
                id: "mail"
            }
        ]
    ,
    education: [
        {
            year: "2022 - ",
            heading: "Webudcikling,\nErhvervsuddannelse - Grenaa"
        },
        {
            year: "2017 - 2018",
            heading: "GameHub Denmark,\nInkubatorprogrammet - Grenaa"
        },
        {
            year: "2014 - 2017",
            // in english: AP degree in Computer Science
            heading: "Datamatiker,\nSpeciale i spiludvikling - Grenaa"
        },
        {
            year: "2010 - 2013",
            heading: "Højere Teknisk Eksamen (HTX),\nRanders"
        }

    ],
    skills: [
        {
            mainSkill: "Html"
        },
        {
            mainSkill: "CSS",
            subSkills: [
                "Media query's",
                "Flexbox",
                "SCSS",
                "Bootstrap/React bootstrap",
            ]
        },
        {
            mainSkill: "JavaScript",
            subSkills: [
                "Kendskab til npm",
                "Kendskab til webpack"
            ]
        },
        {
            mainSkill: "ReactJS",
            subSkills: [
                "Kendskab til hooks (useRef, useState, ContextProvider, useNavigate m.fl.)",
                "Routing med React router dom",
                ["Eksempler på react pakker jeg har kendskab til: ", "React device detect", "React router dom", "React scroll", "React-bootstrap", "React icons"]

            ]
        }
    ],
    employmentHistory: [
        {
            year: "2019 - 2022",
            company: "Netto,",
            workPlace: "8500 Grenaa",
            titles: ["1.assistent fra d. 1/12 2019 - d. 31/12 2020", "Salgsleder fra d. 1/1 2021 - d. 31/1 2022", "1.assistent fra d. 1/2 2022 - d.31/5 2022"]
        },
        {
            year: "2016 - 2018",
            company: "Nerve Damage Games,",
            workPlace: "8500 Grenaa",
            titles: ["Medejer & programmør"]
        },
        {
            year: "2015 - 2019",
            company: "Fakta",
            workPlace: "8500 Grenaa",
            titles: ["1. assistent", "3.mand fra 1/4 - 30/11 2019"]
        }
    ],
    personalSkils: [
        "Selvstændig",
        "Lærenem",
        "Fleksibel",
        "Imødekommende",
        "Ansvarsbevidst"
    ],
    language: [
        {
            lang: "Dansk",
            level: "Modersmål"
        },
        {
            lang: "Engelsk",
            level: "Professionelt praktisk niveau"
        }
    ],
    otherRemarks: [
        {
            year: "2016",
            remark: {
                heading: "Fakta, 8500 Grenaa",
                text: "Årets medarbejder"
            }
        },
        {
            year: "April,\n2019",
            remark: {
                heading: "Fakta, 8500 Grenaa",
                text: "Månedens medarbejder"
            }
        },
        {
            year: "August,\n2016",
            remark: {
                heading: "Fakta, 8500 Grenaa",
                text: "Månedens medarbejder"
            }
        },
        {
            year: "Februar,\n2016",
            remark: {
                heading: "Fakta, 8500 Grenaa",
                text: "Månedens medarbejder"
            }
        },
        {
            year: "November,\n2015",
            remark: {
                heading: "Fakta, 8500 Grenaa",
                text: "Månedens medarbejder"
            }
        }

    ]
}