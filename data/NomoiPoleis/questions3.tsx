const questions3 =  [
    {
        id: 1,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ρεθύμνου;",
        options:[
            {
                id:"0",
                answer:"Ρέθυμνο",
            },
            {
                id:"1",
                answer:"Άγιος Νικόλαος",
            },
            {
                id:"2",
                answer:"Χανιά",
            },
            {
                id:"3",
                answer:"Ηράκλειο",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/rethymno.jpg'),
        imgMap: require('../../assets/maps/N.Rethymnis.png'),
        nomos: 'Ρεθύμνου',
        capital: 'Ρέθυμνο',
        answer: 'Πρωτεύουσα του Ν.Ρεθύμνου είναι η πόλη του Ρεθύμνου.'
    },
    {
        id: 2,
        question: "Ποια είναι η πρωτεύουσα του Ν.Δράμας;",
        options:[
            {
                id:"0",
                answer:"Έδεσσα",
            },
            {
                id:"1",
                answer:"Καβάλα",
            },
            {
                id:"2",
                answer:"Κιλκίς",
            },
            {
                id:"3",
                answer:"Δράμα",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/capitals/drama.png'),
        imgMap: require('../../assets/maps/N.Dramas.png'),
        nomos: 'Δράμας',
        capital: 'Δράμα',
        answer: 'Πρωτεύουσα του Ν.Δράμας είναι η πόλη της Δράμας.'
    },
    {
        id: 3,
        question: "Ποια είναι η πρωτεύουσα του Ν.Κοζάνης;",
        options:[
            {
                id:"0",
                answer:"Κόνιτσα",
            },
            {
                id:"1",
                answer:"Κοζάνη",
            },
            {
                id:"2",
                answer:"Καστορία",
            },
            {
                id:"3",
                answer:"Ιωάννινα",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/kozani.jpg'),
        imgMap: require('../../assets/maps/N.Kozanis.png'),
        nomos: 'Κοζάνης',
        capital: 'Κοζάνη',
        answer: 'Πρωτεύουσα του Ν.Κοζάνης είναι η πόλη της Κοζάνης.'
    },
    {
        id: 4,
        question: "Ποια είναι η πρωτεύουσα του Ν.Γρεβενών;",
        options:[
            {
                id:"0",
                answer:"Γρεβενά",
            },
            {
                id:"1",
                answer:"Σιάτιστα",
            },
            {
                id:"2",
                answer:"Μέτσοβο",
            },
            {
                id:"3",
                answer:"Καλαμπάκα",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/grevena.jpg'),
        imgMap: require('../../assets/maps/N.Grevenwn.png'),
        nomos: 'Γρεβενών',
        capital: 'Γρεβενά',
        answer: 'Πρωτεύουσα του Ν.Γρεβενών είναι η πόλη των Γρεβενών.'
    },
    {
        id: 5,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ηρακλείου;",
        options:[
            {
                id:"0",
                answer:"Χανιά",
            },
            {
                id:"1",
                answer:"Ρέθυμνο",
            },
            {
                id:"2",
                answer:"Λασίθι",
            },
            {
                id:"3",
                answer:"Ηράκλειο",
            },
        ], 
        correctAnswerIndex: 3,
        img: require('../../assets/capitals/Knossos.jpg'),
        imgMap: require('../../assets/maps/N.Hrakliou.png'),
        nomos: 'Ηρακλείου',
        capital: 'Ηράκλειο',
        answer: 'Πρωτεύουσα του Ν.Ηρακλείου είναι η πόλη του Ηρακλείου.'
    },
    {
        id: 6,
        question: "Ποια είναι η πρωτεύουσα του Ν.Κυκλάδων;",
        options:[
            {
                id:"0",
                answer:"Ερμούπολη",
            },
            {
                id:"1",
                answer:"Σύρος",
            },
            {
                id:"2",
                answer:"Ρόδος",
            },
            {
                id:"3",
                answer:"Νάξος",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/siros.jpg'),
        imgMap: require('../../assets/maps/N.Kykladwn.png'),
        nomos: 'Κυκλάδων',
        capital: 'Ερμούπολη',
        answer: 'Πρωτεύουσα του Ν.Κυκλάδων είναι η πόλη της Σύρου.'
    },
   
    {
        id: 7,
        question: "Ποια είναι η πρωτεύουσα του Ν.Έβρου;",
        options:[
            {
                id:"0",
                answer:"Αλεξανδρούπολη",
            },
            {
                id:"1",
                answer:"Κομοτηνή",
            },
            {
                id:"2",
                answer:"Ορεστιάδα",
            },
            {
                id:"3",
                answer:"Ξάνθη",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/Alexandroupoli.jpg'),
        imgMap: require('../../assets/maps/N.Evrou.png'),
        nomos: 'Εβρου',
        capital: 'Αλεξανδρούπολη',
        answer: 'Πρωτεύουσα του Ν.Έβρου είναι η πόλη της Αλεξανδρούπολης.'
    },
    {
        id: 8,
        question: "Ποια είναι η πρωτεύουσα του Ν.Αχαΐας;",
        options:[
            {
                id:"0",
                answer:"Πύργος",
            },
            {
                id:"1",
                answer:"Κυλλήνη",
            },
            {
                id:"2",
                answer:"Πάτρα",
            },
            {
                id:"3",
                answer:"Καλάβρυτα",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/patra.jpg'),
        imgMap: require('../../assets/maps/N.Axaias.png'),
        nomos: 'Αχαΐας',
        capital: 'Πάτρα',
        answer: 'Πρωτεύουσα του Ν.Αχαΐας είναι η πόλη της Πάτρας.'
    },
    {
        id: 9,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ροδόπης;",
        options:[
            {
                id:"0",
                answer:"Κομοτηνή",
            },
            {
                id:"1",
                answer:"Καβάλα",
            },
            {
                id:"2",
                answer:"Ξάνθη",
            },
            {
                id:"3",
                answer:"Αλεξανδρούπολη",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/Komotini.jpg'),
        imgMap: require('../../assets/maps/N.Rodopis.jpg'),
        nomos: 'Ροδόπης',
        capital: 'Κομοτηνή',
        answer: 'Πρωτεύουσα του Ν.Αχαΐας είναι η πόλη της Πάτρας.'
    },
    {
        id: 10,
        question: "Ποια είναι η πρωτεύουσα του Ν.Δωδεκανήσου;",
        options:[
            {
                id:"0",
                answer:"Κως",
            },
            {
                id:"1",
                answer:"Πάτμος",
            },
            {
                id:"2",
                answer:"Ρόδος",
            },
            {
                id:"3",
                answer:"Νάξος",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/rodos.png'),
        imgMap: require('../../assets/maps/N.Dodekanisou1.png'),
        nomos: 'Δωδεκανήσου',
        capital: 'Ρόδος',
        answer: 'Πρωτεύουσα του Ν.Δωδεκανήσου είναι η πόλη της Ρόδου.'
    },
]
export default questions3