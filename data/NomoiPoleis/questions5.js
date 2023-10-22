const questions5 =  [
    {
        id: 1,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ηλείας;",
        options:[
            {
                id:"0",
                answer:"Ηλεία",
            },
            {
                id:"1",
                answer:"Πάτρα",
            },
            {
                id:"2",
                answer:"Πύργος",
            },
            {
                id:"3",
                answer:"Καλαμάτα",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/hliaOlympia.jpg'),
        imgMap: require('../../assets/maps/N.Hlias.png'),
        nomos: 'Ηλείας',
        capital: 'Πύργος',
        answer: 'Πρωτεύουσα του Ν.Ηλίας είναι η πόλη του Πύργου.'
    },
    {
        id: 2,
        question: "Ποια είναι η πρωτεύουσα του Ν.Πιερίας;",
        options:[
            {
                id:"0",
                answer:"Κατερίνη",
            },
            {
                id:"1",
                answer:"Καβάλα",
            },
            {
                id:"2",
                answer:"Πλαταμώνας",
            },
            {
                id:"3",
                answer:"Λιτόχωρο",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/pieria.jpg'),
        imgMap: require('../../assets/maps/Pieria.png'),
        nomos: 'Πιερίας',
        capital: 'Κατερίνη',
        answer: 'Πρωτεύουσα του Ν.Πιερίας είναι η πόλη της Κατερίνης.'
    },
    {
        id: 3,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ευρυτανίας;",
        options:[
            {
                id:"0",
                answer:"Αράχωβα",
            },
            {
                id:"1",
                answer:"Άγραφα",
            },
            {
                id:"2",
                answer:"Αγρίνιο",
            },
            {
                id:"3",
                answer:"Καρπενήσι",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/capitals/karpenissi1.jpg'),
        imgMap: require('../../assets/maps/N.Evritanias.png'),
        nomos: 'Ευρυτανίας',
        capital: 'Καρπενήσι',
        answer: 'Πρωτεύουσα του Ν.Ευρυτανίας είναι η πόλη του Καρπενησίου.'
    },
    {
        id: 4,
        question: "Ποια είναι η πρωτεύουσα του Ν.Φωκίδας;",
        options:[
            {
                id:"0",
                answer:"Άμφισσα",
            },
            {
                id:"1",
                answer:"Αράχωβα",
            },
            {
                id:"2",
                answer:"Αγρίνιο",
            },
            {
                id:"3",
                answer:"Αμφιλοχία",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/delphiFokida.jpg'),
        imgMap: require('../../assets/maps/N.Fokidas.png'),
        nomos: 'Φωκίδας',
        capital: 'Άμφισσα',
        answer: 'Πρωτεύουσα του Ν.Φωκίδας είναι η πόλη της Άμφισσας.'
    },
    {
        id: 5,
        question: "Ποια είναι η πρωτεύουσα του Ν.Βοιωτίας;",
        options:[
            {
                id:"0",
                answer:"Λιβαδειά",
            },
            {
                id:"1",
                answer:"Αράχωβα",
            },
            {
                id:"2",
                answer:"Λαμία",
            },
            {
                id:"3",
                answer:"Λιτόχωρο",
            },
        ], 
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/livadia1.jpg'),
        imgMap: require('../../assets/maps/N.Voiwtias.png'),
        nomos: 'Βοιωτίας',
        capital: 'Λιβαδειά',
        answer: 'Πρωτεύουσα του Ν.Βοιωτίας είναι η πόλη της Λιβαδειάς.'
    },
    {
        id: 6,
        question: "Ποια είναι η πρωτεύουσα του Ν.Χαλκιδικής;",
        options:[
            {
                id:"0",
                answer:"Καρυές",
            },
            {
                id:"1",
                answer:"Θέρμη",
            },
            {
                id:"2",
                answer:"Θεσσαλονίκη",
            },
            {
                id:"3",
                answer:"Πολύγυρος",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/capitals/chalkidiki.jpg'),
        imgMap: require('../../assets/maps/N.Chalkidikis.png'),
        nomos: 'Χαλκιδικής',
        capital: 'Πολύγυρος',
        answer: 'Πρωτεύουσα του Ν.Χαλκιδικής είναι η πόλη του Πολύγυρου.'
    },
    {
        id: 7,
        question: "Ποια είναι η πρωτεύουσα του Ν.Φθιώτιδας;",
        options:[
            {
                id:"0",
                answer:"Θερμοπύλες",
            },
            {
                id:"1",
                answer:"Λαμία",
            },
            {
                id:"2",
                answer:"Άμφισσα",
            },
            {
                id:"3",
                answer:"Στυλίδα",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/fthiotidaThermopiles.jpg'),
        imgMap: require('../../assets/maps/N.Fthiotidas.png'),
        nomos: 'Φθιώτιδας',
        capital: 'Λαμία',
        answer: 'Πρωτεύουσα του Ν.Φθιώτιδας είναι η πόλη της Λαμίας.'
    },
    {
        id: 8,
        question: "Ποια είναι η πρωτεύουσα του Ν.Λακωνίας;",
        options:[
            {
                id:"0",
                answer:"Καλαμάτα",
            },
            {
                id:"1",
                answer:"Μονεμβασιά",
            },
            {
                id:"2",
                answer:"Σπάρτη",
            },
            {
                id:"3",
                answer:"Τρίπολη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/monemvasia.jpg'),
        imgMap: require('../../assets/maps/N.Lakonias.png'),
        nomos: 'Λακωνίας',
        capital: 'Σπάρτη',
        answer: 'Πρωτεύουσα του Ν.Λακωνίας είναι η πόλη της Σπάρτης.'
    },
    {
        id: 9,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ημαθίας;",
        options:[
            {
                id:"0",
                answer:"Κατερίνη",
            },
            {
                id:"1",
                answer:"Βέροια",
            },
            {
                id:"2",
                answer:"Φλώρινα",
            },
            {
                id:"3",
                answer:"Έδεσσα",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/veroia.jpg'),
        imgMap: require('../../assets/maps/N.Imathias.png'),
        nomos: 'Ημαθίας',
        capital: 'Βέροια',
        answer: 'Πρωτεύουσα του Ν.Ημαθίας είναι η πόλη της Βέροιας.'
    },
    {
        id: 10,
        question: "Ποια είναι η πρωτεύουσα του Ν.Πέλλας;",
        options:[
            {
                id:"0",
                answer:"Κατερίνη",
            },
            {
                id:"1",
                answer:"Κοζάνη",
            },
            {
                id:"2",
                answer:"Φλώρινα",
            },
            {
                id:"3",
                answer:"Έδεσσα",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/capitals/edessa.jpg'),
        imgMap: require('../../assets/maps/N.Pellas.png'),
        nomos: 'Πέλλας',
        capital: 'Έδεσσα',
        answer: 'Πρωτεύουσα του Ν.Πέλλας είναι η πόλη της Έδεσσας.'
    }
]
export default questions5