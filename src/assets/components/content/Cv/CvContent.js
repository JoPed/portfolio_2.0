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
                info: "Skolestræde 1, 2.t.v,\n8500 Grenaa",
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
            heading: "Webudvikling,\nErhvervsuddannelse - Grenaa",
            id: "edu1"
        },
        {
            year: "2017 - 2018",
            heading: "GameHub Denmark,\nInkubatorprogrammet - Grenaa",
            id: "edu2"
        },
        {
            year: "2014 - 2017",
            // in english: AP degree in Computer Science
            heading: "Datamatiker,\nSpeciale i spiludvikling - Grenaa",
            id: "edu3"
        },
        {
            year: "2010 - 2013",
            heading: "Højere Teknisk Eksamen (HTX),\nRanders",
            id: "edu4"
        }

    ],
    skills: [
        {
            mainSkill: "Html",
            id: "skill1"
        },
        {
            mainSkill: "CSS",
            subSkills: [
                "Media query's",
                "Flexbox",
                "SCSS",
                "Bootstrap/React bootstrap",
            ],
            id: "skill2"
        },
        {
            mainSkill: "JavaScript",
            subSkills: [
                "Kendskab til npm",
                "Kendskab til webpack"
            ],
            id: "skill3"
        },
        {
            mainSkill: "ReactJS",
            subSkillsHeadline: "Eksempler på react pakker jeg har kendskab til: ",
            subSkills: [
                "Kendskab til hooks (useRef, useState, ContextProvider, useNavigate m.fl.)",
                "Routing med React router dom"
            ],
            subSkills2: ["React device detect", "React router dom", "React scroll", "React-bootstrap", "React icons"],
            id: "skill4"
        }
    ],
    employmentHistory: [
        {
            year: "2019 - 2022",
            company: "Netto, ",
            workPlace: "8500 Grenaa",
            titles: ["1.assistent, 1/12 2019 - 31/12 2020", "Salgsleder, 1/1 2021 - 31/1 2022", "1.assistent,  1/2 2022 - 31/5 2022"],
            id: "emp1"
        },
        {
            year: "2016 - 2018",
            company: "Nerve Damage Games, ",
            workPlace: "8500 Grenaa",
            titles: ["Medejer & programmør"],
            id: "emp2"
        },
        {
            year: "2015 - 2019",
            company: "Fakta, ",
            workPlace: "8500 Grenaa",
            titles: ["1. assistent fra 20/10 2015 - 31/3 2019", "3.mand fra 1/4 - 30/11 2019"],
            id: "emp3"
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
            level: "Modersmål",
            id:"lang1"
        },
        {
            lang: "Engelsk",
            level: "Professionelt praktisk niveau",
            id: "lang2"
        }
    ],
    otherRemarks: [
        {
            year: "2016",
            remark: {
                heading: "Fakta, 8500 Grenaa",
                text: "Årets medarbejder"
            },
            id: "remark1"
        },
        {
            year: "April,\n2019",
            remark: {
                heading: "Fakta, 8500 Grenaa",
                text: "Månedens medarbejder"
            },
            id: "remark2"
        },
        {
            year: "August,\n2016",
            remark: {
                heading: "Fakta, 8500 Grenaa",
                text: "Månedens medarbejder"
            },
            id: "remark3"
        },
        {
            year: "Februar,\n2016",
            remark: {
                heading: "Fakta, 8500 Grenaa",
                text: "Månedens medarbejder"
            },
            id: "remark4"
        },
        {
            year: "November,\n2015",
            remark: {
                heading: "Fakta, 8500 Grenaa",
                text: "Månedens medarbejder"
            }, 
            id: "remark5"

        }

    ]
}