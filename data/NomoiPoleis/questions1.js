const questions1 =  [
    {
        id: 1,
        question: "Ποια είναι η πρωτεύουσα του Ν.Κέρκυρας;",
        options:[
            {
                id:"0",
                answer:"Κέρκυρα",
            },
            {
                id:"1",
                answer:"Παξοί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Ηγουμενίτσα",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/kerkyra1.jpg'),
        imgMap: require('../../assets/maps/N.Kerkyras.png'),
        nomos: 'Κέρκυρα',
        capital: 'Κέρκυρα',
        answer: 'Πρωτεύουσα του νομού είναι η πόλη της Κέρκυρας.'
    },
    {
        id: 2,
        question: "Ποια είναι η πρωτεύουσα του Ν.Κιλκίς;",
        options:[
            {
                id:"0",
                answer:"Σέρρες",
            },
            {
                id:"1",
                answer:"Κοζάνη",
            },
            {
                id:"2",
                answer:"Κιλκίς",
            },
            {
                id:"3",
                answer:"Καστοριά",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/kilkis.jpg'),
        imgMap: require('../../assets/maps/N.Kilkis.png'),
        nomos: 'Κιλκίς',
        capital: 'Κιλκίς',
        answer: 'Πρωτεύουσα του Ν.Κιλκίς είναι η πόλη του Κιλκίς.'
    },
    {
        id: 3,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ιωαννίνων;",
        options:[
            {
                id:"0",
                answer:"Κόνιτσα",
            },
            {
                id:"1",
                answer:"Μέτσοβο",
            },
            {
                id:"2",
                answer:"Ηγουμενίτσα",
            },
            {
                id:"3",
                answer:"Ιωάννινα",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/capitals/ioannina.jpg'),
        imgMap: require('../../assets/maps/N.Ioanninwn.png'),
        nomos: 'Ιωαννίνων',
        answer: 'Πρωτεύουσα του Ν.Ιωαννίνων είναι η ομώνυμη πόλη.'
    },
    {
        id: 4,
        question: "Ποια είναι η πρωτεύουσα του Ν.Λάρισας;",
        options:[
            {
                id:"0",
                answer:"Καρδίτσα",
            },
            {
                id:"1",
                answer:"Λάρισα",
            },
            {
                id:"2",
                answer:"Λαμία",
            },
            {
                id:"3",
                answer:"Λιβαδειά",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/larissa.jpg'),
        imgMap: require('../../assets/maps/N.Larissas.png'),
        nomos: 'Λάρισας',
        answer: 'Πρωτεύουσα του Ν.Λάρισας είναι η πόλη της Λάρισας. '
    },
    {
        id: 5,
        question: "Ποια είναι η πρωτεύουσα του Ν.Πρέβεζας;",
        options:[
            {
                id:"0",
                answer:"Πάτρα",
            },
            {
                id:"1",
                answer:"Πρέβεζα",
            },
            {
                id:"2",
                answer:"Πάργα",
            },
            {
                id:"3",
                answer:"Πράγα",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/preveza.jpg'),
        imgMap: require('../../assets/maps/N.Prevezas.png'),
        nomos: 'Πρέβεζας',
        capital: 'Πρέβεζα',
        answer: 'Πρωτεύουσα του Ν.Πρέβεζας είναι η πόλη της Πρέβεζας.'
    },
    {
        id: 6,
        question: "Ποια είναι η πρωτεύουσα του Ν.Θεσσαλονίκης;",
        options:[
            {
                id:"0",
                answer:"Καλαμαριά",
            },
            {
                id:"1",
                answer:"Σέρρες",
            },
            {
                id:"2",
                answer:"Αλεξανδρούπολη",
            },
            {
                id:"3",
                answer:"Θεσσαλονίκη",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/capitals/thessaloniki.jpg'),
        imgMap: require('../../assets/maps/N.Thessalonikis.png'),
        nomos: 'Θεσσαλονίκης',
        capital: 'Θεσσαλονίκη',
        answer: 'Πρωτεύουσα του Ν.Θεσσαλονίκης είναι η ομώνυμη πόλη.'
    },
    
    {
        id: 7,
        question: "Ποια είναι η πρωτεύουσα του Ν.Άρτας;",
        options:[
            {
                id:"0",
                answer:"Άμφισσα",
            },
            {
                id:"1",
                answer:"Άρτα",
            },
            {
                id:"2",
                answer:"Αμφιλοχία",
            },
            {
                id:"3",
                answer:"Άρτεμη",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/arta.jpg'),
        imgMap: require('../../assets/maps/N.Thessalonikis.png'),
        nomos: 'Άρτας',
        capital: 'Άρτα',
        answer: 'Πρωτεύουσα του Ν.Άρτας είναι η πόλη της Άρτας.'
    },
    {
        id: 8,
        question: "Ποια είναι η πρωτεύουσα του Ν.Χίου;",
        options:[
            {
                id:"0",
                answer:"Λέσβος",
            },
            {
                id:"1",
                answer:"Σάμος",
            },
            {
                id:"2",
                answer:"Χίος",
            },
            {
                id:"3",
                answer:"Μυτιλήνη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/xiosad1.jpg'),
        imgMap: require('../../assets/maps/N.Xiou.png'),
        nomos: 'Χίου',
        capital: 'Χίος',
        answer: 'Πρωτεύουσα του Ν.Χίου είναι η πόλη της Χίου.'
    },
    {
        id: 9,
        question: "Ποια είναι η πρωτεύουσα του Ν.Χανίων;",
        options:[
            {
                id:"0",
                answer:"Χανιά",
            },
            {
                id:"1",
                answer:"Ηράκλειο",
            },
            {
                id:"2",
                answer:"Άγιος Νικόλαος",
            },
            {
                id:"3",
                answer:"Ρέθυμνο",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/chania.jpg'),
        imgMap: require('../../assets/maps/N.Xaniwn.png'),
        nomos: 'Χανίων',
        capital: 'Χανιά',
        answer: 'Πρωτεύουσα του Ν.Χανίων είναι η πόλη των Χανίων.'
    },
    {
        id: 10,
        question: "Ποια είναι η πρωτεύουσα του Ν.Λευκάδας;",
        options:[
            {
                id:"0",
                answer:"Πρέβεζα",
            },
            {
                id:"1",
                answer:"Νυδρί",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Λευκίμμη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lefkada.jpg'),
        imgMap: require('../../assets/maps/N.Lefkadas.png'),
        nomos: 'Λευκάδας',
        capital: 'Λευκάδα',
        answer: 'Πρωτεύουσα του Ν.Λευκάδας είναι η πόλη της Λευκάδας.'
    },
]
export default questions1

