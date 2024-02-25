const questions4 =  [
    {
        id: 1,
        question: "Ποια είναι η πρωτεύουσα του Ν.Αιτωλοακαρνανίας;",
        options:[
            {
                id:"0",
                answer:"Πάτρα",
            },
            {
                id:"1",
                answer:"'Aμφισσα",
            },
            {
                id:"2",
                answer:"Μεσολόγγι",
            },
            {
                id:"3",
                answer:"Καρπενήσι",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/Mesologi.jpg'),
        imgMap: require('../../assets/maps/N.Aitoloakarnanias.png'),
        nomos: 'Αιτωλοακαρνανίας',
        capital: 'Μεσολόγγι',
        answer: 'Πρωτεύουσα του Ν.Αιτωλοακαρνανίας είναι η πόλη του Μεσολογγίου.'
    },
    {
        id: 2,
        question: "Ποια είναι η πρωτεύουσα του Ν.Θεσπρωτίας;",
        options:[
            {
                id:"0",
                answer:"Ηγουμενίτσα",
            },
            {
                id:"1",
                answer:"Σύβοτα",
            },
            {
                id:"2",
                answer:"Πάργα"
            },
            {
                id:"3",
                answer:"Φιλιάτες",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/igoumenitsa.jpg'),
        imgMap: require('../../assets/maps/N.Thesprotias.png'),
        nomos: 'Θεσπρωτίας',
        capital: 'Ηγουμενίτσα',
        answer: 'Πρωτεύουσα του Ν.Θεσπρωτίας είναι η πόλη της Ηγουμενίτσας.'
    },
    {
        id: 3,
        question: "Ποια είναι η πρωτεύουσα του Ν.Αρκαδίας;",
        options:[
            {
                id:"0",
                answer:"Σπάρτη",
            },
            {
                id:"1",
                answer:"Τρίκαλα",
            },
            {
                id:"2",
                answer:"Τρίπολη",
            },
            {
                id:"3",
                answer:"Ναύπλιο",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/tripoli.jpg'),
        imgMap: require('../../assets/maps/N.Arkadias.png'),
        nomos: 'Αρκαδίας',
        capital: 'Τρίπολη',
        answer: 'Πρωτεύουσα του Ν.Αρκαδίας είναι η πόλη της Τρίπολης.'
    },
    {
        id: 4,
        question: "Ποια είναι η πρωτεύουσα του Ν.Μαγνησίας;",
        options:[
            {
                id:"0",
                answer:"Πήλιο",
            },
            {
                id:"1",
                answer:"Βόλος",
            },
            {
                id:"2",
                answer:"Λάρισα",
            },
            {
                id:"3",
                answer:"Κατερίνη",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/volos.jpg'),
        imgMap: require('../../assets/maps/N.Magnisias.png'),
        nomos: 'Μαγνησίας',
        capital: 'Βόλος',
        answer: 'Πρωτεύουσα του Ν.Μαγνησίας είναι η πόλη του Βόλου.'
    },
    {
        id: 5,
        question: "Ποια είναι η πρωτεύουσα του Ν.Αττικής;",
        options:[
            {
                id:"0",
                answer:"Αθήνα",
            },
            {
                id:"1",
                answer:"Πειραιάς",
            },
            {
                id:"2",
                answer:"Ραφήνα",
            },
            {
                id:"3",
                answer:"Λαύριο",
            },
        ], 
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/athens.jpg'),
        imgMap: require('../../assets/maps/attiki.png'),
        nomos: 'Αττικής',
        capital: 'Αθήνα',
        answer: 'Πρωτεύουσα του Ν.Αττικής είναι η πόλη της Αθήνας.'
    },
    {
        id: 6,
        question: "Ποια είναι η πρωτεύουσα του Ν.Λέσβου;",
        options:[
            {
                id:"0",
                answer:"Πλωμάρι",
            },
            {
                id:"1",
                answer:"Λήμνος",
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
        correctAnswerIndex: 3,
        img: require('../../assets/capitals/Mitilini.jpg'),
        imgMap: require('../../assets/maps/N.Lesvou.png'),
        nomos: 'Λέσβου',
        capital: 'Μυτιλήνη',
        answer: 'Πρωτεύουσα του Ν.Λέσβου είναι η πόλη της Μυτιλήνης.'
    },
    {
        id: 7,
        question: "Ποια είναι η πρωτεύουσα του Ν.Κεφαλονιάς;",
        options:[
            {
                id:"0",
                answer:"Αργοστόλι",
            },
            {
                id:"1",
                answer:"Ληξούρι",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Κυλλήνη",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/kefalonia.jpg'),
        imgMap: require('../../assets/maps/N.Kefalinias.png'),
        nomos: 'Κεφαλληνίας',
        capital: 'Αργοστόλι',
        answer: 'Πρωτεύουσα του Ν.Κεφαλονιάς είναι η πόλη του Αργοστολίου.'
    },
    {
        id: 8,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ευβοίας;",
        options:[
            {
                id:"0",
                answer:"Χαλκίδα",
            },
            {
                id:"1",
                answer:"Κάρυστος",
            },
            {
                id:"2",
                answer:"Ναύπακτος",
            },
            {
                id:"3",
                answer:"Λαμία",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/xalkida.jpg'),
        imgMap: require('../../assets/maps/N.Evoias.png'),
        nomos: 'Ευβοίας',
        capital: 'Χαλκίδα',
        answer: 'Πρωτεύουσα του Ν.Ευβοίας είναι η πόλη της Χαλκίδας.'
    },
    {
        id: 9,
        question: "Ποια είναι η πρωτεύουσα του Ν.Αργολίδας;",
        options:[
            {
                id:"0",
                answer:"Άργος",
            },
            {
                id:"1",
                answer:"Επίδαυρος",
            },
            {
                id:"2",
                answer:"Ναύπακτος",
            },
            {
                id:"3",
                answer:"Ναύπλιο",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/capitals/nafplio.jpg'),
        imgMap: require('../../assets/maps/N.Argolidas.png'),
        nomos: 'Αργολίδας',
        capital: 'Ναύπλιο',
        answer: 'Πρωτεύουσα του Ν.Αργολίδας είναι η πόλη του Ναυπλίου.'
    },
    {
        id: 10,
        question: "Ποια είναι η πρωτεύουσα του Ν.Μεσσηνίας;",
        options:[
            {
                id:"0",
                answer:"Κυπαρισσία",
            },
            {
                id:"1",
                answer:"Σπάρτη",
            },
            {
                id:"2",
                answer:"Καλαμάτα",
            },
            {
                id:"3",
                answer:"Τρίπολη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/kalamata.jpg'),
        imgMap: require('../../assets/maps/N.Messinias.png'),
        nomos: 'Μεσσηνίας',
        capital: 'Καλαμάτα',
        answer: 'Πρωτεύουσα του Ν.Μεσσηνίας είναι η πόλη της Καλαμάτας.'
    }
]
export default questions4