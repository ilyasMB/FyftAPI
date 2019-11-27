const express = require('express');// gerer les routes 
const bodyParser = require("body-parser"); //middleware reccup contenu de la raquette
const app = express(); // extrait le chemin de l'URL
const mysqlManager = require('./mysqlManager.js');
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "OPTIONS, GET, POST, DELETE, PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    if ('OPTIIONS' == req.method) {
        res.sendStatus(200);
    } else {
        console.log('bsa7tek ${req.ip} ${req.method} ${req.url}')
        next();
    }
});

let exampleLinkdin = {
    "Nom": 'frfr',
    "Prenom": 'dfrg',
    "Age": 'gtgt',
    "Rue": 'gegt',
    "Ville": '',
    "CP": '',
    "Tel": '',
    "Mail": '',
    "Photo": '',
    "Autre": {
        "Sport": "",
        "Activité": [
            "Cinéma", "Rondo.."
        ]
    },
    "Criteres": {
        "Poste": '',
        "Experience": [
            "Dev", "Sys", "reseaux"
        ],
        "Language": [
            "Java", "C", "CSS"
        ],
        "MDT": [
            "Agile", "V"
        ]
    }
}
let codeWarsExample =
{
    "username": "some_user",
    "name": "Some Person",
    "honor": 544,
    "clan": "some clan",
    "leaderboardPosition": 134,
    "skills": [
        "ruby",
        "c#",
        ".net",
        "javascript",
        "coffeescript",
        "nodejs",
        "rails"
    ],
    "ranks": {
        "overall": {
            "rank": -3,
            "name": "3 kyu",
            "color": "blue",
            "score": 2116
        },
        "languages": {
            "javascript": {
                "rank": -3,
                "name": "3 kyu",
                "color": "blue",
                "score": 1819
            },
            "ruby": {
                "rank": -4,
                "name": "4 kyu",
                "color": "blue",
                "score": 1005
            },
            "coffeescript": {
                "rank": -4,
                "name": "4 kyu",
                "color": "blue",
                "score": 870
            }
        }
    },
    "codeChallenges": {
        "totalAuthored": 3,
        "totalCompleted": 230
    }


}
let stackExample =
{
    "items": [
        {
            "owner": {
                "reputation": 29832,
                "user_id": 262683,
                "user_type": "registered",
                "profile_image": "https://i.stack.imgur.com/gMMY3.png?s=128&g=1",
                "display_name": "Costi Ciudatu",
                "link": "https://stackoverflow.com/users/262683/costi-ciudatu"
            },
            "edited": false,
            "score": 1430,
            "creation_date": 1311756149,
            "post_id": 6841333,
            "comment_id": 8132455
        },
        {
            "owner": {
                "reputation": 635,
                "user_id": 995110,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/0d7e2371e0c63bfb4ef7bfa37561b0ee?s=128&d=identicon&r=PG",
                "display_name": "cptloop",
                "link": "https://stackoverflow.com/users/995110/cptloop"
            },
            "edited": false,
            "score": 1304,
            "creation_date": 1385468758,
            "post_id": 11304926,
            "comment_id": 30146633
        },
        {
            "owner": {
                "reputation": 63966,
                "user_id": 1180620,
                "user_type": "registered",
                "accept_rate": 83,
                "profile_image": "https://i.stack.imgur.com/FXaAg.jpg?s=128&g=1",
                "display_name": "Mark Adler",
                "link": "https://stackoverflow.com/users/1180620/mark-adler"
            },
            "edited": false,
            "score": 1296,
            "creation_date": 1445013520,
            "post_id": 20765054,
            "comment_id": 54158279
        },
        {
            "owner": {
                "reputation": 2914,
                "user_id": 757461,
                "user_type": "registered",
                "accept_rate": 67,
                "profile_image": "https://www.gravatar.com/avatar/9bd447630fc7fe13519626e687987c5d?s=128&d=identicon&r=PG",
                "display_name": "adriendenat",
                "link": "https://stackoverflow.com/users/757461/adriendenat"
            },
            "edited": false,
            "score": 1224,
            "creation_date": 1363210904,
            "post_id": 3296701,
            "comment_id": 21766075
        },
        {
            "owner": {
                "reputation": 41118,
                "user_id": 247542,
                "user_type": "registered",
                "accept_rate": 59,
                "profile_image": "https://www.gravatar.com/avatar/c125f576c3a08c0c1d4330bc565ae28c?s=128&d=identicon&r=PG",
                "display_name": "Cerin",
                "link": "https://stackoverflow.com/users/247542/cerin"
            },
            "edited": false,
            "score": 1202,
            "creation_date": 1296511553,
            "post_id": 901144,
            "comment_id": 5395836
        },
        {
            "owner": {
                "reputation": 2363,
                "user_id": 123012,
                "user_type": "registered",
                "accept_rate": 81,
                "profile_image": "https://i.stack.imgur.com/oWzIM.png?s=128&g=1",
                "display_name": "SadSido",
                "link": "https://stackoverflow.com/users/123012/sadsido"
            },
            "edited": false,
            "score": 1099,
            "creation_date": 1256801241,
            "post_id": 1642028,
            "comment_id": 1511871
        },
        {
            "owner": {
                "reputation": 13235,
                "user_id": 7867,
                "user_type": "registered",
                "accept_rate": 70,
                "profile_image": "https://i.stack.imgur.com/0dJQT.png?s=128&g=1",
                "display_name": "Mr. Shiny and New 安宇",
                "link": "https://stackoverflow.com/users/7867/mr-shiny-and-new-%e5%ae%89%e5%ae%87"
            },
            "edited": false,
            "score": 1050,
            "creation_date": 1224003742,
            "post_id": 34586,
            "comment_id": 76873
        },
        {
            "owner": {
                "reputation": 41557,
                "user_id": 20774,
                "user_type": "registered",
                "accept_rate": 92,
                "profile_image": "https://www.gravatar.com/avatar/3e32e31d4c24c1558abd6567f2ab60ba?s=128&d=identicon&r=PG",
                "display_name": "James McMahon",
                "link": "https://stackoverflow.com/users/20774/james-mcmahon"
            },
            "edited": false,
            "score": 1023,
            "creation_date": 1321942442,
            "post_id": 53522,
            "comment_id": 10110919
        },
        {
            "owner": {
                "reputation": 307110,
                "user_id": 2988,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/ed181f8c80df53d2b67a4f4fff088ed4?s=128&d=identicon&r=PG",
                "display_name": "J&#246;rg W Mittag",
                "link": "https://stackoverflow.com/users/2988/j%c3%b6rg-w-mittag"
            },
            "edited": false,
            "score": 986,
            "creation_date": 1236698227,
            "post_id": 630475,
            "comment_id": 443250
        },
        {
            "owner": {
                "reputation": 158494,
                "user_id": 102937,
                "user_type": "registered",
                "accept_rate": 90,
                "profile_image": "https://www.gravatar.com/avatar/1233ec65168f4aae4d939ae8fe6cde1e?s=128&d=identicon&r=PG",
                "display_name": "Robert Harvey",
                "link": "https://stackoverflow.com/users/102937/robert-harvey"
            },
            "edited": false,
            "score": 974,
            "creation_date": 1402503042,
            "post_id": 2003505,
            "comment_id": 37300870
        },
        {
            "owner": {
                "reputation": 1305,
                "user_id": 385571,
                "user_type": "registered",
                "accept_rate": 100,
                "profile_image": "https://www.gravatar.com/avatar/7fb2b188a95faee2db8e1b7365719adf?s=128&d=identicon&r=PG",
                "display_name": "MattBianco",
                "link": "https://stackoverflow.com/users/385571/mattbianco"
            },
            "edited": false,
            "score": 942,
            "creation_date": 1283351777,
            "post_id": 409305,
            "comment_id": 3801330
        },
        {
            "owner": {
                "reputation": 827,
                "user_id": 1478655,
                "user_type": "registered",
                "profile_image": "https://www.gravatar.com/avatar/e7edc2f58f86eb3465da1f4047588f4c?s=128&d=identicon&r=PG",
                "display_name": "Archibald",
                "link": "https://stackoverflow.com/users/1478655/archibald"
            },
            "edited": false,
            "score": 930,
            "creation_date": 1376486632,
            "post_id": 8567149,
            "comment_id": 26730310
        },
        {
            "owner": {
                "reputation": 5641,
                "user_id": 1172174,
                "user_type": "registered",
                "accept_rate": 80,
                "profile_image": "https://i.stack.imgur.com/5vijs.jpg?s=128&g=1",
                "display_name": "Gus",
                "link": "https://stackoverflow.com/users/1172174/gus"
            },
            "edited": false,
            "score": 896,
            "creation_date": 1329330902,
            "post_id": 784929,
            "comment_id": 11728310
        },
        {
            "owner": {
                "reputation": 4088,
                "user_id": 720097,
                "user_type": "registered",
                "accept_rate": 88,
                "profile_image": "https://www.gravatar.com/avatar/fe923df72209d178abe0de3c3bcf147c?s=128&d=identicon&r=PG",
                "display_name": "Alexander.Iljushkin",
                "link": "https://stackoverflow.com/users/720097/alexander-iljushkin"
            },
            "edited": false,
            "score": 880,
            "creation_date": 1390511640,
            "post_id": 2939979,
            "comment_id": 32135213
        },
        {
            "owner": {
                "reputation": 165210,
                "user_id": 825,
                "user_type": "registered",
                "accept_rate": 90,
                "profile_image": "https://www.gravatar.com/avatar/8cff0e19c525c987e7fe10a3e3aef350?s=128&d=identicon&r=PG",
                "display_name": "Pat Notz",
                "link": "https://stackoverflow.com/users/825/pat-notz"
            },
            "edited": false,
            "score": 868,
            "creation_date": 1223669537,
            "post_id": 179123,
            "comment_id": 71122
        },
        {
            "owner": {
                "reputation": 8666,
                "user_id": 491553,
                "user_type": "registered",
                "accept_rate": 45,
                "profile_image": "https://i.stack.imgur.com/gh31e.jpg?s=128&g=1",
                "display_name": "Ryan Shillington",
                "link": "https://stackoverflow.com/users/491553/ryan-shillington"
            },
            "edited": false,
            "score": 829,
            "creation_date": 1365539519,
            "post_id": 14992078,
            "comment_id": 22662748
        },
        {
            "owner": {
                "reputation": 2235,
                "user_id": 2418793,
                "user_type": "registered",
                "accept_rate": 62,
                "profile_image": "https://i.stack.imgur.com/nQ6dp.jpg?s=128&g=1",
                "display_name": "Azurespot",
                "link": "https://stackoverflow.com/users/2418793/azurespot"
            },
            "edited": false,
            "score": 797,
            "creation_date": 1400522955,
            "post_id": 16754643,
            "comment_id": 36502904
        },
        {
            "owner": {
                "reputation": 57153,
                "user_id": 12943,
                "user_type": "registered",
                "accept_rate": 84,
                "profile_image": "https://www.gravatar.com/avatar/d6a9924b767fe91c46def7edc7bce035?s=128&d=identicon&r=PG",
                "display_name": "Bill K",
                "link": "https://stackoverflow.com/users/12943/bill-k"
            },
            "edited": false,
            "score": 789,
            "creation_date": 1227287792,
            "post_id": 309424,
            "comment_id": 152598
        },
        {
            "owner": {
                "reputation": 60319,
                "user_id": 60777,
                "user_type": "registered",
                "accept_rate": 77,
                "profile_image": "https://www.gravatar.com/avatar/4e698bea14e1d5f5c86d0359e5f24d28?s=128&d=identicon&r=PG",
                "display_name": "Chris Lutz",
                "link": "https://stackoverflow.com/users/60777/chris-lutz"
            },
            "edited": false,
            "score": 774,
            "creation_date": 1267686445,
            "post_id": 1642028,
            "comment_id": 2353958
        },
        {
            "owner": {
                "reputation": 3696,
                "user_id": 1177198,
                "user_type": "registered",
                "accept_rate": 66,
                "profile_image": "https://www.gravatar.com/avatar/4ea56c658e69eef33b6557b20c7a19ab?s=128&d=identicon&r=PG",
                "display_name": "bigtunacan",
                "link": "https://stackoverflow.com/users/1177198/bigtunacan"
            },
            "edited": false,
            "score": 770,
            "creation_date": 1363059991,
            "post_id": 37632,
            "comment_id": 21688679
        },
        {
            "owner": {
                "reputation": 1270,
                "user_id": 1030576,
                "user_type": "registered",
                "accept_rate": 92,
                "profile_image": "https://www.gravatar.com/avatar/3056c5185987f1265aca9235680a0bcd?s=128&d=identicon&r=PG",
                "display_name": "Anthony",
                "link": "https://stackoverflow.com/users/1030576/anthony"
            },
            "edited": false,
            "score": 764,
            "creation_date": 1356218522,
            "post_id": 423596,
            "comment_id": 19339130
        },
        {
            "owner": {
                "reputation": 6484,
                "user_id": 2251840,
                "user_type": "registered",
                "accept_rate": 91,
                "profile_image": "https://i.stack.imgur.com/O3LmV.png?s=128&g=1",
                "display_name": "SmallChess",
                "link": "https://stackoverflow.com/users/2251840/smallchess"
            },
            "edited": false,
            "score": 761,
            "creation_date": 1294631839,
            "post_id": 237280,
            "comment_id": 5111802
        },
        {
            "owner": {
                "reputation": 2413,
                "user_id": 169545,
                "user_type": "registered",
                "accept_rate": 80,
                "profile_image": "https://www.gravatar.com/avatar/055c47019b27276a208db0417b700157?s=128&d=identicon&r=PG",
                "display_name": "Michel Gokan",
                "link": "https://stackoverflow.com/users/169545/michel-gokan"
            },
            "edited": false,
            "score": 758,
            "creation_date": 1262530231,
            "post_id": 1995156,
            "comment_id": 1913148
        },
        {
            "owner": {
                "reputation": 80694,
                "user_id": 127893,
                "user_type": "registered",
                "accept_rate": 90,
                "profile_image": "https://www.gravatar.com/avatar/8da618b78da4991fca5c5bd5835b6e19?s=128&d=identicon&r=PG",
                "display_name": "AraK",
                "link": "https://stackoverflow.com/users/127893/arak"
            },
            "edited": false,
            "score": 731,
            "creation_date": 1253503177,
            "post_id": 1452738,
            "comment_id": 1299906
        },
        {
            "owner": {
                "reputation": 155277,
                "user_id": 122718,
                "user_type": "registered",
                "accept_rate": 88,
                "profile_image": "https://i.stack.imgur.com/213Kw.png?s=128&g=1",
                "display_name": "usr",
                "link": "https://stackoverflow.com/users/122718/usr"
            },
            "edited": false,
            "score": 724,
            "creation_date": 1351096118,
            "post_id": 149099,
            "comment_id": 17726234
        },
        {
            "owner": {
                "reputation": 7445,
                "user_id": 527776,
                "user_type": "registered",
                "accept_rate": 86,
                "profile_image": "https://i.stack.imgur.com/kKPEM.jpg?s=128&g=1",
                "display_name": "Larry Battle",
                "link": "https://stackoverflow.com/users/527776/larry-battle"
            },
            "edited": false,
            "score": 716,
            "creation_date": 1339481866,
            "post_id": 1986896,
            "comment_id": 14359320
        },
        {
            "owner": {
                "reputation": 6080,
                "user_id": 1085483,
                "user_type": "registered",
                "accept_rate": 83,
                "profile_image": "https://www.gravatar.com/avatar/6b0625923fdca55e4ab88a1d7542c3f8?s=128&d=identicon&r=PG",
                "display_name": "Rui Marques",
                "link": "https://stackoverflow.com/users/1085483/rui-marques"
            },
            "edited": false,
            "score": 690,
            "creation_date": 1384426116,
            "post_id": 6943704,
            "comment_id": 29735882
        },
        {
            "owner": {
                "reputation": 8413,
                "user_id": 4966,
                "user_type": "registered",
                "accept_rate": 62,
                "profile_image": "https://www.gravatar.com/avatar/929fba6f82f04811b09c16df239bbb21?s=128&d=identicon&r=PG",
                "display_name": "Tony Meyer",
                "link": "https://stackoverflow.com/users/4966/tony-meyer"
            },
            "edited": false,
            "score": 688,
            "creation_date": 1222423835,
            "post_id": 136138,
            "comment_id": 36456
        },
        {
            "owner": {
                "reputation": 7434,
                "user_id": 1939564,
                "user_type": "registered",
                "profile_image": "https://i.stack.imgur.com/a4INA.jpg?s=128&g=1",
                "display_name": "Muhammad Babar",
                "link": "https://stackoverflow.com/users/1939564/muhammad-babar"
            },
            "edited": false,
            "score": 684,
            "creation_date": 1395381530,
            "post_id": 1662088,
            "comment_id": 34322247
        },
        {
            "owner": {
                "reputation": 18827,
                "user_id": 62194,
                "user_type": "registered",
                "accept_rate": 83,
                "profile_image": "https://i.stack.imgur.com/QGgp1.jpg?s=128&g=1",
                "display_name": "Art",
                "link": "https://stackoverflow.com/users/62194/art"
            },
            "edited": false,
            "score": 683,
            "creation_date": 1276329610,
            "post_id": 153047,
            "comment_id": 3096673
        }
    ],
    "has_more": true,
    "backoff": 10,
    "quota_max": 300,
    "quota_remaining": 218
}
let Response =
{
    "persones": [
        {
            "Nom": "Bernard",
            "Prénom": "Nicolas",
            "Age": 30,
            "Ville": "Landerneau",
            "Tel": "06.90.43.55.67",
            "Mail": "nicolas.berard@gmail.com",
            "Photo": "https://media.licdn.com/dms/image/C5603AQEdoQx1noISEw/profile-displayphoto-shrink_800_800/0?e=1580342400&v=beta&t=FUZlVFESNqDS5z1zv2F6hkpm4fpnmbQOFvn_m21q634",
            "Reputation": 444,
            "StackOverFlow": {
                "Reputation": 555,
                "Score": 444
            },
            "CodeWors": {
                "color": "blue",
                "Langage": {
                    "HTML": {
                        "Score": "780"
                    },
                    "CSS": {
                        "Score": "1500"
                    },
                    "Sass": {
                        "Score": "800"
                    },
                    "JavaScript": {
                        "Score": "907"
                    },
                    "C#": {
                        "Score": "1020"
                    },
                    "ASP.net": {
                        "Score": "500"
                    },
                    "Java": {
                        "Score": "840"
                    }
                }
            },
            "Source": ["Linkdin", "stackOverFlow", "CodeWars"]
        },
        {
            "Nom": "Ahamadi",
            "Prénom": "Nourdine",
            "Age": 23,
            "Ville": "Brest",
            "Tel": "06.90.45.35.66",
            "Mail": "nourdine.ahamadi01@gmail.com",
            "Photo": "https://media.licdn.com/dms/image/C4D03AQFhOviVg2k8Ww/profile-displayphoto-shrink_800_800/0?e=1580342400&v=beta&t=_7NU4hnBrJ5uvcmdOwkyP0y-QDpwR1N-mmIp4LwXdh0",
            "StackOverFlow": "",
            "CodeWors": {
                "color": "blue",
                "Langage": {
                    "Angular": {
                        "Score": "750"
                    },
                    "Python": {
                        "Score": "900"
                    },
                    "Impala": {
                        "Score": "933"
                    },
                    "SQL": {
                        "Score": "400"
                    },
                    "C#": {
                        "Score": "567"
                    },
                    "Hive": {
                        "Score": "666"
                    }
                }
            },
            "Source": ["Linkdin", "StackOverFlow", "CodeWars"]
        },
        {
            "Nom": "Akbilgin",
            "Prénom": "Mehmet ",
            "Age": 27,
            "Ville": "Paris",
            "Tel": "0765782543",
            "Mail": "mehmet.Akbilgin@hotmail.fr",
            "Photo": "https://media.licdn.com/dms/image/C4D03AQHFEtFRrZw3CQ/profile-displayphoto-shrink_800_800/0?e=1580342400&v=beta&t=8lR_W5mG462ZjzspuM5eNQ0qWRdxGL8ce2MG_7z07JI",
            "StackOverFlow": {
                "Reputation": 2235,
                "Score": 1680
            },
            "CodeWors": {
                "color": "green",
                "Langage": {
                    "JAVA 8": {
                        "Score": 737
                    },
                    "MongoDB": {
                        "Score": 508
                    },
                    "Bootstrap ": {
                        "score": 666
                    },
                    "Material Design": {
                        "score": 274
                    }
                }
            },
            "Source": ["Linkdin", "StackOverFlow", "CodeWars"]
        },
        {
            "Nom": "El Bouhassani",
            "Prénom": "Omar",
            "Age": 29,
            "Ville": "Puteaux",
            "Tel": "0656298756",
            "Mail": "elbouhassaniomar@gmail.com",
            "Photo": "",
            "StackOverFlow": "",
            "CodeWors": {
                "color": "blue",
                "Langage": {
                    "Java": {
                        "Score": "1050"
                    },
                    "NodeJs": {
                        "Score": 800
                    },
                    "JavaScript": {
                        "Score": 1200
                    },
                    "Angular": {
                        "Score": 989
                    }
                }
            },
            "Source": ["codeWars"]
        },
        {
            "Nom": "Le Roch",
            "Prénom": "Johan",
            "Age": 35,
            "Ville": "Brest",
            "Tel": "0645871089",
            "Mail": "Johan.leroch@gmail.com",
            "Photo": "https://media.licdn.com/dms/image/C4E03AQEGiK0-KqeWNw/profile-displayphoto-shrink_800_800/0?e=1580342400&v=beta&t=xbeVlf_IMhNeBghdeI6a3lCVyS9FdLy8pKODhccd5MQ",
            "StackOverFlow": {
                "Reputation": 2235,
                "Score": 1680
            },
            "CodeWors": {
                "color": "green",
                "Langage": {
                    "React": {
                        "Score": 837
                    },
                    "HTML": {
                        "Score": 800
                    },
                    "SCSS": {
                        "Score": 900
                    },
                    "NodeJS": {
                        "Score": 567
                    },
                    "Angular": {
                        "Score": 263
                    }
                }
            },
            "Source": ["Linkdin", "StackOverFlow", "CodeWars"]
        },
        {
            "Nom": "Colin",
            "Prénom": "Patrick",
            "Age": 35,
            "Ville": "Paris",
            "Tel": "06.35.14.67.42",
            "Mail": "patrick.colin@gmail.com",
            "Photo": "",
            "StackOverFlow": {
                "Reputation": 2235,
                "Score": 1680
            },
            "CodeWors": {
                "color": "",
                "Langage": ""
            },
            "Source": ["Linkdin"]
        },
        {
            "Nom": "Le Gall",
            "Prénom": "Catherine",
            "Age": 26,
            "Ville": "Créteil",
            "Tel": "06.57.52.40.81",
            "Mail": "",
            "Photo": "",
            "StackOverFlow": {
                "Reputation": 2235,
                "Score": 1680
            },
            "CodeWors": {

                "Langage": ""
            },
            "Source": ["Linkdin", "StackOverFlow"]
        },
        {
            "Nom": "Marchal",
            "Prénom": "Juliette",
            "Age": 30,
            "Ville": "Marseille",
            "Tel": "",
            "Mail": "juliette.marchal@gmail.com",
            "Photo": "",
            "StackOverFlow": {
                "Reputation": 2235,
                "Score": 1680
            },
            "CodeWors": {
                "Langage": {
                    "C++": {
                        "Score": "800"
                    },
                    "python": {
                        "Score": "367"
                    }
                }
            },
            "Source": ["Linkdin", "StackOverFlow", "CodeWars"]
        },
        {
            "Nom": "Bouvier",
            "Prénom": "Bruno",
            "Age": 50,
            "Ville": "Brest",
            "Tel": "",
            "Mail": "",
            "Photo": "",
            "StackOverFlow": "",
            "CodeWors": {
                "Langage": {
                    "asp": {
                        "Score": "730"
                    }
                }
            },
            "Source": ["Linkdin", "StackOverFlow"]
        },
        {
            "Nom": "Bernard",
            "Prénom": "Flora",
            "Age": 28,
            "Ville": "",
            "Tel": "",
            "Mail": "",
            "Photo": "",
            "StackOverFlow": {
                "Reputation": 2235,
                "Score": 1680
            },
            "CodeWors": {
                "color": "green",
                "Langage": {
                    "html": {
                        "Score": "500"
                    },
                    "css": {
                        "Score": "450"
                    },
                    "php": {
                        "Score": "200"
                    }
                }
            },
            "Source": ["StackOverFlow"]
        }
    ],
}
app.get('/', (req, res) => {
    res.send([{ api: 'Cables' }]);
});
app.get('/linkdin', (req, res) => {
    res.send([exampleLinkdin]);
});
app.get('/stackoverflow', (req, res) => {
    res.send([stackExample]);
});
app.get('/codewars', (req, res) => {
    res.send([codeWarsExample]);
});
app.get('/example', (req, res) => {
    res.send([Response]);
});

function formatJson() {
    var jsonCodeWar = {
        "nom": codeWarsExample.name.split(' ')[0]
    };
    console.log(jsonCodeWar);
}
formatJson();


app.listen(8081, () => {
    console.log("started");
});