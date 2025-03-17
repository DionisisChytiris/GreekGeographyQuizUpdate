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
    {
        id: 11,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ζακύνθου;",
        options:[
            {
                id:"0",
                answer:"Αργοστόλι",
            },
            {
                id:"1",
                answer:"Ζάκυνθος",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Αστακός",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/zakynthos.jpg'),
        imgMap: require('../../assets/maps/N.Zakythou.png'),
        nomos: "Ζακύνθου",
        capital: 'Ζάκυνθος',
        answer: 'Πρωτεύουσα του Ν.Ζακύνθου είναι η πόλη της Ζακύνθου.'
    },
    {
        id: 21,
        question: "Ποια είναι η πρωτεύουσα του Ν.Καβάλας;",
        options:[
            {
                id:"0",
                answer:"Καστοριά",
            },
            {
                id:"1",
                answer:"Σέρρες",
            },
            {
                id:"2",
                answer:"Ξάνθη",
            },
            {
                id:"3",
                answer:"Καβάλα",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/capitals/kavala1.jpg'),
        imgMap: require('../../assets/maps/N.Kavalas.png'),
        nomos: 'Καβάλας',
        capital: 'Καβάλα',
        answer: 'Πρωτεύουσα του Ν.Καβάλας είναι η πόλη της Καβάλας.'
    },
    {
        id: 31,
        question: "Ποια είναι η πρωτεύουσα του Ν.Καστοριάς;",
        options:[
            {
                id:"0",
                answer:"Καστοριά",
            },
            {
                id:"1",
                answer:"Καβάλα",
            },
            {
                id:"2",
                answer:"Κοζάνη",
            },
            {
                id:"3",
                answer:"Κόνιτσα",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/kastoria1.jpg'),
        imgMap: require('../../assets/maps/N.Kastorias.png'),
        nomos: 'Καστοριάς',
        capital: 'Καστοριά',
        answer: 'Πρωτεύουσα του Ν.Καστοριάς είναι η πόλη της Καστοριάς.'
    },
   {
        id: 41,
        question: "Ποια είναι η πρωτεύουσα του Ν.Σερρών;",
        options:[
            {
                id:"0",
                answer:"Κομοτηνή",
            },
            {
                id:"1",
                answer:"Σέρρες",
            },
            {
                id:"2",
                answer:"Κιλκίς",
            },
            {
                id:"3",
                answer:"Φλώρινα",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/serres.jpg'),
        imgMap: require('../../assets/maps/N.Serrwn.png'),
        nomos: 'Σερρών',
        capital: 'Σέρρες',
        answer: 'Πρωτεύουσα του Ν.Σερρών είναι η πόλη των Σερρών.'
    },
    {
        id: 51,
        question: "Ποια είναι η πρωτεύουσα του Ν.Καρδίτσα;",
        options:[
            {
                id:"0",
                answer:"Γρεβενά",
            },
            {
                id:"1",
                answer:"Κοζάνη",
            },
            {
                id:"2",
                answer:"Καρδίτσα",
            },
            {
                id:"3",
                answer:"Τρίκαλα",
            },
        ], 
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/KARDITSA.jpg'),
        imgMap: require('../../assets/maps/N.Karditsas.png'),
        nomos: 'Καρδίτσας',
        capital: 'Καρδίτσα',
        answer: 'Πρωτεύουσα του Ν.Καρδίτσας είναι η πόλη της Καρδίτσας.'
    },
    {
        id: 61,
        question: "Ποια είναι η πρωτεύουσα του Ν.Τρικάλων;",
        options:[
            {
                id:"0",
                answer:"Καρδίτσα",
            },
            {
                id:"1",
                answer:"Τρίπολη",
            },
            {
                id:"2",
                answer:"Καλαμπάκα",
            },
            {
                id:"3",
                answer:"Τρίκαλα",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/capitals/trikala.jpg'),
        imgMap: require('../../assets/maps/N.Trikalwn.png'),
        nomos: 'Τρικάλων',
        capital: 'Τρίκαλα',
        answer: 'Πρωτεύουσα του Ν.Τρικάλων είναι η πόλη των Τρικάλων.'
    },
    {
        id: 71,
        question: "Ποια είναι η πρωτεύουσα του Ν.Κορίνθου;",
        options:[
            {
                id:"0",
                answer:"Κόρινθος",
            },
            {
                id:"1",
                answer:"Λουτράκι",
            },
            {
                id:"2",
                answer:"Κιάτο",
            },
            {
                id:"3",
                answer:"Άργος",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/korinthos.jpg'),
        imgMap: require('../../assets/maps/N.Korithias.png'),
        nomos: 'Κορίνθου',
        capital: 'Κόρινθος',
        answer: 'Πρωτεύουσα του Ν.Κορύνθου είναι η πόλη της Κορύνθου.'
    },
    {
        id: 81,
        question: "Ποια είναι η πρωτεύουσα του Ν.Φλώρινας;",
        options:[
            {
                id:"0",
                answer:"Κοζάνη",
            },
            {
                id:"1",
                answer:"Γρεβενά",
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
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/florina.jpg'),
        imgMap: require('../../assets/maps/N.Florinas.png'),
        nomos: 'Φλώρινας',
        capital: 'Φλώρινα',
        answer: 'Πρωτεύουσα του Ν.Φλώρινας είναι η πόλη της Φλώρινας.'
    },
    {
        id: 91,
        question: "Ποια είναι η πρωτεύουσα του Ν.Ξάνθης;",
        options:[
            {
                id:"0",
                answer:"Ξάνθη",
            },
            {
                id:"1",
                answer:"Κομοτηνή",
            },
            {
                id:"2",
                answer:"Σέρρες",
            },
            {
                id:"3",
                answer:"Καβάλα",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/ksanthi.jpg'),
        imgMap: require('../../assets/maps/N.Xanthis.png'),
        nomos: 'Ξάνθης',
        capital: 'Ξάνθη',
        answer: 'Πρωτεύουσα του Ν.Ξάνθης είναι η πόλη της Ξάνθης.'
    },
    {
        id: 101,
        question: "Ποια είναι η πρωτεύουσα του Ν.Σάμου;",
        options:[
            {
                id:"0",
                answer:"Καρλόβασι",
            },
            {
                id:"1",
                answer:"Πάτμος",
            },
            {
                id:"2",
                answer:"Σάμος",
            },
            {
                id:"3",
                answer:"Πυθαγόρειο",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/samos.jpg'),
        imgMap: require('../../assets/maps/N.Samou.png'),
        nomos: 'Σάμου',
        capital: 'Σάμος',
        answer: 'Πρωτεύουσα του Ν.Σάμου είναι η πόλη της Σάμου.'
    },
    {
        id: 12,
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
        id: 22,
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
        id: 32,
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
        id: 42,
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
        id: 52,
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
        id: 62,
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
        id: 72,
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
        id: 82,
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
        id: 92,
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
        id: 102,
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
    {
        id: 13,
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
        id: 23,
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
        id: 33,
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
        id: 43,
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
        id: 53,
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
        id: 63,
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
        id: 73,
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
        id: 83,
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
        id: 93,
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
        id: 103,
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
    },
    {
        id: 14,
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
        id: 24,
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
        id: 34,
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
        id: 44,
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
        id: 54,
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
        id: 64,
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
        id: 74,
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
        id: 84,
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
        id: 94,
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
        id: 104,
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
    },
    {
        id: 15,
        question: "Ποια είναι η πρωτεύουσα του Ν.Λασιθίου;",
        options:[
            {
                id:"0",
                answer:"Ρέθυμνο",
            },
            {
                id:"1",
                answer:"Ηράκλειο",
            },
            {
                id:"2",
                answer:'Άγιος Νικόλαος',
            },
            {
                id:"3",
                answer:"Χανιά",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/lasithi.jpg'),
        imgMap: require('../../assets/maps/N.Lasithiou.png'),
        nomos: 'Λασιθίου',
        capital: 'Άγιος Νικόλαος',
        answer: 'Πρωτεύουσα του Ν.Λασιθίου είναι η πόλη του Αγίου Νικολάου.'
    },
    {
        id: 25,
        question: "Σε ποιο νομό βρίσκεται η Μονεμβασιά;",
        options:[
            {
                id:"0",
                answer:"Ν.Αργολίδας",
            },
            {
                id:"1",
                answer:"Ν.Μεσσηνίας",
            },
            {
                id:"2",
                answer:"N.Λακωνίας",
            },
            {
                id:"3",
                answer:"Ν.Αρκαδίας",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/monemvasia.jpg'),
        imgMap: require('../../assets/maps/N.Lakonias.png'),
        nomos: 'Λακωνίας',
        capital: 'Σπάρτη',
        answer: 'Η Μονεμβασιά βρίσκεται στον Ν.Λακωνίας.'
    },
    {
        id: 35,
        question: "Σε ποιο νομό βρίσκεται η Αρχαία Ολυμπία;",
        options:[
            {
                id:"0",
                answer:"Ν.Ηλείας",
            },
            {
                id:"1",
                answer:"Ν.Αχαΐας",
            },
            {
                id:"2",
                answer:"Ν.Αρκαδίας",
            },
            {
                id:"3",
                answer:"Ν.Κορινθίας",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/hliaOlympia.jpg'),
        imgMap: require('../../assets/maps/N.Hlias.png'),
        nomos: 'Ηλείας',
        capital: 'Πύργος',
        answer: 'Η Αρχαία Ολυμπία βρίσκεται στον Ν.Ηλείας.'
    },
    {
        id: 45,
        question: "Σε ποιο νομό βρίσκεται ο αρχαιολογικός χώρος των Δελφών;",
        options:[
            {
                id:"0",
                answer:"Ν.Βοιωτίας",
            },
            {
                id:"1",
                answer:"Ν.Φωκίδας",
            },
            {
                id:"2",
                answer:"Ν.Ευρυτανίας",
            },
            {
                id:"3",
                answer:"Ν.Φθιώτιδας",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/delphiFokida.jpg'),
        imgMap: require('../../assets/maps/N.Fokidas.png'),
        nomos: 'Φωκίδα',
        capital: 'Άμφισσα',
        answer: 'Ο χώρος των Δελφών βρίσκεται στον Ν.Φωκίδας.'
    },
    {
        id: 55,
        question: "Σε ποιο νομό βρίσκεται η Σύρος;",
        options:[
            {
                id:"0",
                answer:"Ν.Κυκλάδων",
            },
            {
                id:"1",
                answer:"Ν.Δωδεκανήσου",
            },
            {
                id:"2",
                answer:"Ν.Σποράδων",
            },
            {
                id:"3",
                answer:"Ν.Αττικής",
            },
        ], 
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/siros.jpg'),
        imgMap: require('../../assets/maps/N.Kykladwn.png'),
        nomos: 'Κυκλάδες',
        capital: 'Ερμούπολη',
        answer: 'Η Σύρος βρίσκεται στον Ν.Κυκλάδων.'
    },
    {
        id: 65,
        question: "Σε ποιο νομό βρίσκονται οι Θερμοπύλες;",
        options:[
            {
                id:"0",
                answer:"Ν.Ευβοίας",
            },
            {
                id:"1",
                answer:"Ν.Φωκίδας",
            },
            {
                id:"2",
                answer:"Ν.Φθιώτιδας",
            },
            {
                id:"3",
                answer:"Ν.Βοιωτίας",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/fthiotidaThermopiles.jpg'),
        imgMap: require('../../assets/maps/N.Fthiotidas.png'),
        nomos: 'Φθιώτιδα',
        capital: 'Λαμία',
        answer: 'Οι Θερμοπύλες βρίσκονται στον Ν.Φθιώτιδας.'
    },
    {
        id: 75,
        question: "Σε ποιο νομό βρίσκεται ο αρχαιολογικός χώρος της Κνωσσού;",
        options:[
            {
                id:"0",
                answer:"Ν.Ηρακλείου",
            },
            {
                id:"1",
                answer:"Ν.Αγίου Νικολάου",
            },
            {
                id:"2",
                answer:"Ν.Χανίων",
            },
            {
                id:"3",
                answer:"Ν.Ρεθύμνου",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/Knossos.jpg'),
        imgMap: require('../../assets/maps/N.Hrakliou.png'),
        nomos: 'Ηράκλειο',
        capital: 'Ηράκλειο',
        answer: 'Η Κνωσσός βρίσκεται στον Ν.Ηρακλείου.'
    },
    {
        id: 85,
        question: "Σε ποιο νομό βρίσκονται τα Μετέωρα;",
        options:[
            {
                id:"0",
                answer:"Ν.Γρεβενών",
            },
            {
                id:"1",
                answer:"Ν.Καρδίτσας",
            },
            {
                id:"2",
                answer:"Ν.Τρικάλων",
            },
            {
                id:"3",
                answer:"Ν.Ευρυτανίας",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/Photos/meteora.jpg'),
        imgMap: require('../../assets/maps/N.Trikalwn.png'),
        nomos: 'Τρικάλων',
        capital: 'Τρίκαλα',
        answer: 'Τα Μετέωρα βρίσκονται στον Ν.Τρικάλων.'
    },
    {
        id: 95,
        question: "Σε ποιο νομό βρίσκεται η Λήμνος;",
        options:[
            {
                id:"0",
                answer:"Ν.Λέσβου",
            },
            {
                id:"1",
                answer:"Ν.Σάμου",
            },
            {
                id:"2",
                answer:"Ν.Κυκλάδων",
            },
            {
                id:"3",
                answer:"Ν.Καβάλας",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/capitals/limnos.png'),
        imgMap: require('../../assets/maps/N.Lesvou.png'),
        nomos: 'Λέσβος',
        capital: 'Μυτιλήνη',
        answer: 'Η Λίμνος βρίσκεται στον Ν.Λέσβου.'
    },
    {
        id: 105,
        question: "Σε ποιο νομό βρίσκεται η Σαντορίνη;",
        options:[
            {
                id:"0",
                answer:"Ν.Λέσβου",
            },
            {
                id:"1",
                answer:"Ν.Δωδεκανήσου",
            },
            {
                id:"2",
                answer:"Ν.Κυκλάδων",
            },
            {
                id:"3",
                answer:"Ν.Αττικής",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/capitals/santorini.jpg'),
        imgMap: require('../../assets/maps/N.Kykladwn.png'),
        nomos: 'Ν.Κυκλάδων',
        capital: 'Ερμούπολη',
        answer: 'Η Σαντορίνι βρίσκεται στον Ν.Κυκλάδων.'
    }
]
export default questions1

