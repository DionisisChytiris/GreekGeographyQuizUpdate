const questions =  [
    {
        id:"1",
        question: "Ποιο είναι το ψηλότερο βουνό της Ελλάδας;",
        options:[
            {
                id:"0",
                answer:"Σμόλικας",
            },
            {
                id:"1",
                answer:"Βόρας",
            },
            {
                id:"2",
                answer:"Όλυμπος",
            },
            {
                id:"3",
                answer:"Γράμμος",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/generalQuestions/peak.jpg'),
        result1: "Ο Όλυμπος είναι το υψηλότερο βουνό της Ελλάδας με ανώτερη κορυφή του τον Μύτικα στα 2918 μέτρα.",
        result2: "Ο Σμόλικας είναι το δεύτερο υψηλότερο βουνό της Ελλάδας, με μέγιστο υψόμετρο στην κορυφή του Γέρος στα 2637 μέτρα.",
        result3: "Ο Βόρας βρίσκεται στο βόρειο τμήμα του νομού Πέλλας με ανώτερη κορυφή του στα 2524 μέτρα.",
        result4: "Ο Γράμμος έρχεται τέταρτος στη σειρά των ψηλότερων βουνών της Ελλάδας με ανώτερη κορυφή του την Τσούκα Πέτσικ στα 2520 μέτρα.",
    },
    {
        id:"2",
        question: "Που βρίσκονται τα Λευκά Όρη;",
        options:[
            {
                id:"0",
                answer:"Θράκη",
            },
            {
                id:"1",
                answer:"Θεσσαλία",
            },
            {
                id:"2",
                answer:"Ήπειρος",
            },
            {
                id:"3",
                answer:"Κρήτη",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/mountain.jpg'),
        result1: "Η οροσειρά Λευκά Όρη ή Μαδάρες βρίσκεται στη δυτική Κρήτη, εκτεινόμενη σε περιοχή με μήκος 60 και πλάτος 35 χιλιομέτρων.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"3",
        question: "Σε ποιο γεωγραφικό διαμέρισμα βρίσκεται το Καϊμακτσαλάν;",
        options:[
            {
                id:"0",
                answer:"Μακεδονία",
            },
            {
                id:"1",
                answer:"Θράκη",
            },
            {
                id:"2",
                answer:"Πελοπόννησος",
            },
            {
                id:"3",
                answer:"Κρήτη",
            }, 
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/mountain5.jpg'),
        result1: "Το Όρος Βόρας ή Καϊμακτσαλάν, είναι το τρίτο ψηλότερο βουνό της Ελλάδας, μετά τον Όλυμπο και το Σμόλικα, τοποθετημένο στο βόρειο τμήμα του Νομού Πέλλας και εκτείνεται έως τα όρια του Νομού Φλώρινας ενώ συνεχίζεται και πέρα από τα σύνορα στην πλευρά της Πρώην Γιουγκοσλαβικής Δημοκρατίας της Μακεδονίας. Η ψηλότερη κορυφή του Βόρα είναι το Καϊμάκτσαλαν με ύψος 2.524 μέτρα. ",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"4",
        question: "Που βρίσκεται το όρος Βασιλίτσα;",
        options:[
            {
                id:"0",
                answer:"Μακεδονία-Θεσσαλία",
            },
            {
                id:"1",
                answer:"Μακεδονία-Ήπειρος",
            },
            {
                id:"2",
                answer:"Μακεδονία-Θράκη",
            },
            {
                id:"3",
                answer:"Θεσσαλία-Ήπειρος",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/mountain1.jpg'),
        result1: "Η Βασιλίτσα είναι βουνό της Μακεδονίας και της Ηπείρου, στα όρια των νομών Ιωαννίνων και Γρεβενών. Η κορυφή της έχει υψόμετρο 2.249 μέτρα και βρίσκεται στο κεντρικό τμήμα της οροσειράς της Βόρειας Πίνδου.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"5",
        question: "Σε τι ποσοστό τα βουνά καλύπτουν το έδαφος της Ελλάδας;",
        options:[
            {
                id:"0",
                answer:"40%",
            },
            {
                id:"1",
                answer:"80%",
            },
            {
                id:"2",
                answer:"60%",
            },
            {
                id:"3",
                answer:"50%",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/mountain6.jpg'),
        result1: "Παρόλο που η Ελλάδα είναι παγκοσμίως γνωστή για το αρχιπέλαγός της, ένα 80% της χερσαίας της έκτασης καλύπτεται από ορεινούς όγκους.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"6",
        question: "Ποιο είναι το δεύτερο ψηλότερο βουνό της Ελλάδας;",
        options:[
            {
                id:"0",
                answer:"Γκιώνα",
            },
            {
                id:"1",
                answer:"Βόρας",
            },
            {
                id:"2",
                answer:"Σμόλικας",
            },
            {
                id:"3",
                answer:"Ταΰγετος",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/mountain1.jpg'),
        result1: "Ο Σμόλικας είναι το δεύτερο υψηλότερο βουνό της Ελλάδας μετά τον Όλυμπο, με μέγιστο υψόμετρο στην κορυφή του Γέρος στα 2637 μέτρα.",
        result2: "Ο Βόρας, που είναι το τρίτο υψηλότερο βουνό της χώρας, βρίσκεται στο βόρειο τμήμα του νομού Πέλλας, εκτείνεται ως τα όρια του νομού Φλώρινας, ενώ συνεχίζει βόρεια και απλώνεται και πέρα από τα ελληνικά σύνορα, με ανώτερη κορυφή του στα 2524 μέτρα.",
        result3: "",
        result4: "",
    },
    {
        id:"7",
        question: "Ποιο βουνό λέγεται Γκαμήλα;",
        options:[
            {
                id:"0",
                answer:"Γκούρα",
            },
            {
                id:"1",
                answer:"Αστράκα",
            },
            {
                id:"2",
                answer:"Τύμφη",
            },
            {
                id:"3",
                answer:"Άβαλος",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/mountain.jpg'),
        result1: "Η Τύμφη (2.497 μ.) είναι βουνό της Ηπείρου στην επαρχία του Ζαγορίου. Ονομάζεται και Γκαμήλα από την ονομασία της ψηλότερης κορυφής της. Οι υψηλότερες κορυφές της Τύμφης είναι η Γκαμήλα 2.497 μ., η Γκούρα 2.467 μ., η Αστράκα 2.432 μ., και ακολουθούν ο Άβαλος, η Ραδόβολη, ο Πλόσκος, ο Λαγαρής, ο Αϊλιάς κ.ά.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"8",
        question: "Που βρίσκεται το βουνό Μερέντα;",
        options:[
            {
                id:"0",
                answer:"Αττική",
            },
            {
                id:"1",
                answer:"Βοιωτία",
            },
            {
                id:"2",
                answer:"Τρίκαλα",
            },
            {
                id:"3",
                answer:"Κικλίς",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/mountain7.jpg'),
        result1: "Η Μερέντα είναι βουνό της Αττικής. Βρίσκεται στο νότιο τμήμα του νομού ανάμεσα στους οικισμούς Μαρκόπουλο Μεσογαίας, Καλύβια Θορικού, Πόρτο Ράφτη και Κουβαράς. ",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"9",
        question: "Πως αλλιώς ονομάζεται το βουνό Βόρας;",
        options:[
            {
                id:"0",
                answer:"Τύμφη",
            },
            {
                id:"1",
                answer:"Ίδη",
            },
            {
                id:"2",
                answer:"Καϊμακτσαλαν",
            },
            {
                id:"3",
                answer:"Ασέληνον Όρος",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/mountain3.jpg'),
        result1: "Ο Βόρας είναι οροσειρά στα σύνορα της Ελλάδας με το κράτος των Σκοπίων εκτεινόμενη και στις δυο χώρες. Αποτελεί τη διαχωριστική γραμμή του νομού Πέλλας στα νότια, με το Μορίχοβο των Σκοπίων στα βόρεια και εκτείνεται ως τα όρια του νομού Φλώρινας. Αποτελεί το τρίτο υψηλότερο βουνό της Ελλάδας. Ονομάζεται και Καϊμακτσαλαν.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"10",
        question: "Ποια είναι η ψηλότερη κορυφή του Ολύμπου;",
        options:[
            {
                id:"0",
                answer:"Μύτικας",
            },
            {
                id:"1",
                answer:"Προφήτης Ηλίας",
            },
            {
                id:"2",
                answer:"Στεφάνι",
            },
            {
                id:"3",
                answer:"Σκάλα",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/generalQuestions/peak.jpg'),
        result1: "Ο Μύτικας είναι η υψηλότερη κορυφή του Ολύμπου και της Ελλάδος και δεύτερη υψηλότερη των Βαλκανίων, μετά τη Μουσαλά στη Βουλγαρία. Έχει υψόμετρο 2917 μέτρα. ",
        result2: "Ο Προφήτης Ηλίας έχει υψόμετρο 2802 μέτρα. ",
        result3: "Το Στεφάνι έχει υψόμετρο 2909 μέτρα. ",
        result4: "ΤΗ Σκάλα έχει υψόμετρο 2866 μέτρα.",
    },
    {
        id:"11",
        question: "Το βουνό της Θεσσαλίας Κίσσαβος ονομάζεται και...;",
        options:[
            {
                id:"0",
                answer:"Όσσα",
            },
            {
                id:"1",
                answer:"Ίδη",
            },
            {
                id:"2",
                answer:"Βελούχι",
            },
            {
                id:"3",
                answer:"Τύμφη",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/mountain6.jpg'),
        result1: "Η Όσσα είναι βουνό της Θεσσαλίας, γνωστό επίσης με το όνομα Κίσσαβος. Βρίσκεται βορειοανατολικά του νομού Λάρισας και νότια των Τεμπών και του Πηνειού απέναντι από τον Όλυμπο, του οποίου αποτελεί συνέχεια γεωλογικά και από τον οποίο χωρίζεται από την κοιλάδα των Τεμπών.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"12",
        question: "Ποια είναι η μεγαλύτερη οροσειρά της Ελλάδας;",
        options:[
            {
                id:"0",
                answer:"Τζουμέρκα",
            },
            {
                id:"1",
                answer:"Λευκά Όρη",
            },
            {
                id:"2",
                answer:"Πίνδος",
            },
            {
                id:"3",
                answer:"Αροάνια",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/mountain2.jpg'),
        result1: "Η Πίνδος είναι η μεγαλύτερη οροσειρά της Ελλάδας. Κυριαρχεί σχεδόν σ'ολόκληρη την δυτική Ελλάδα και ουσιαστικά αποτελεί συνέχεια των Ιλλυρικών και Δαλματικών οροσειρών. Ως βόρειο άκρο της μπορεί να οριστεί το οροπέδιο της Κορυτσάς, στην νοτιοανατολική Αλβανία και ως νοτιότερο σημείο της ο Κορινθιακός κόλπος.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"13",
        question: "Πως είναι πιο γνωστή η Ίδη;",
        options:[
            {
                id:"0",
                answer:"Γκαμήλα",
            },
            {
                id:"1",
                answer:"Αροάνια",
            },
            {
                id:"2",
                answer:"Ψηλορείτης",
            },
            {
                id:"3",
                answer:"Κόραξ",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/generalQuestions/psiloritis.jpg'),
        result1: "Ο Ψηλορείτης, γνωστός και ως Ίδη, είναι ορεινός όγκος στην κεντρική Κρήτη με ύψος 2.456 μέτρα. Έχει 5 κορυφές που ξεπερνούν τα 2000 μέτρα: Ίδη (2.456 μ.), Αγκαθιάς (2.424 μ.), Στολίστρα (2.325 μ.), Βουλομένου (2.267 μ.) και Κούσακας (2.209 μ.).",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"14",
        question: "Πως είναι ευρέως γνωστά τα Αθαμανικά όρη;",
        options:[
            {
                id:"0",
                answer:"Τζουμέρκα",
            },
            {
                id:"1",
                answer:"Κακαρδίτσα",
            },
            {
                id:"2",
                answer:"Μαδάρες",
            },
            {
                id:"3",
                answer:"Ασέληνον Όρος",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/mountain.jpg'),
        result1: "Τα Αθαμανικά όρη, ευρύτερα γνωστά ως Τζουμέρκα ή Τσουμέρκα. Είναι μεγάλη οροσειρά της δυτικής Ελλάδος, που ουσιαστικά αποτελεί νότιο τμήμα της ευρύτερης οροσειράς της Πίνδου που υψώνεται μεταξύ των ποταμών Αράχθου και Αχελώου.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"15",
        question: "Η Καλιακούδα είναι βουνό της Στερεάς Ελλάδας. Σε ποιο νομό βρίσκεται;",
        options:[
            {
                id:"0",
                answer:"Φωκίδα",
            },
            {
                id:"1",
                answer:"Αιτωλοακαρνανίας",
            },
            {
                id:"2",
                answer:"Βοιωτίας",
            },
            {
                id:"3",
                answer:"Ευρυτανία",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/mountain1.jpg'),
        result1: "Η Καλιακούδα είναι βουνό της Στερεάς Ελλάδας και βρίσκεται στο νομό Ευρυτανίας. Διαχωρίζει τους μεγάλους ορεινούς όγκους των Βαρδουσίων, του Τυμφρηστού και του Παναιτωλικού. Έχει υψόμετρο 2.101 μέτρα.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"16",
        question: "Πoυ βρίσκεται το φαράγγι του Βίκου;",
        options:[
            {
                id:"0",
                answer:"Ήπειρος",
            },
            {
                id:"1",
                answer:"Μακεδονία",
            },
            {
                id:"2",
                answer:"Θεσσαλία",
            },
            {
                id:"3",
                answer:"Μακεδονία",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/mountain1vikos.jpg'),
        result1: "Βρίσκεται στην βορειοδυτική Ελλάδα και είναι ένα από τα βαθύτερα φαράγγια στον κόσμο.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"17",
        question: "Ποιο βουνό είναι γνωστό ως το «Άγιο Βουνό» λόγω του μοναστηριακού του χαρακτήρα;",
        options:[
            {
                id:"0",
                answer:"Παρνασσός",
            },
            {
                id:"1",
                answer:"Άθως",
            },
            {
                id:"2",
                answer:"Όλυμπος",
            },
            {
                id:"3",
                answer:"Γκιώνα ",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/athos.jpg'),
        result1: "Εκεί βρίσκεται η αυτοδιοικούμενη μοναστική κοινότητα του Αγίου Όρους.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"18",
        question: "Ποιο από τα παρακάτω βουνά βρίσκεται στη Στερεά Ελλάδα;",
        options:[
            {
                id:"0",
                answer:"Όλυμπος",
            },
            {
                id:"1",
                answer:"Άθως",
            },
            {
                id:"2",
                answer:"Ψηλορείτης",
            },
            {
                id:"3",
                answer:"Παρνασσός",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/parnassos.jpg'),
        result1: "Είναι γνωστό για το χιονοδρομικό του κέντρο και τη σχέση του με το μαντείο των Δελφών.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"19",
        question: "Ποιο είναι το υψόμετρο του βουνού 'Όλυμπος';",
        options:[
            {
                id:"0",
                answer:"1.950μ",
            },
            {
                id:"1",
                answer:"2.917μ",
            },
            {
                id:"2",
                answer:"2.175μ",
            },
            {
                id:"3",
                answer:"3.435μ",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/olympus.jpg'),
        result1: "Είναι το ψηλότερο βουνό της Ελλάδας και φτάνει πάνω από 2.900 μέτρα στο υψηλότερο σημείο του, τη 'Μύτη του Ολύμπου'.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"20",
        question: "Ποιο είναι το ψηλότερο βουνό της Πελοποννήσου;",
        options:[
            {
                id:"0",
                answer:"Ταΰγετος",
            },
            {
                id:"1",
                answer:"Πάρνωνας ",
            },
            {
                id:"2",
                answer:"Χελμός",
            },
            {
                id:"3",
                answer:"Αροάνια ",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/taygetos.jpg'),
        result1: "Είναι γνωστό για τις απότομες χαράδρες του και τη μυθική πόλη της Σπάρτης.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"21",
        question: "Σε ποιο βουνό βρίσκεται το χιονοδρομικό κέντρο Καλαβρύτων;",
        options:[
            {
                id:"0",
                answer:"Όλυμπος",
            },
            {
                id:"1",
                answer:"Γκιώνα",
            },
            {
                id:"2",
                answer:"Παρνασσός",
            },
            {
                id:"3",
                answer:"Χελμός",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/xionokalavryta.jpg'),
        result1: "Είναι το ψηλότερο βουνό της Αχαΐας και κοντά του βρίσκεται η ιστορική Μονή Αγίας Λαύρας.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"22",
        question: "Ποιο βουνό συνδέεται με τη λατρεία του Δία στην αρχαιότητα;",
        options:[
            {
                id:"0",
                answer:"Ταΰγετος",
            },
            {
                id:"1",
                answer:"Πίνδος",
            },
            {
                id:"2",
                answer:"Όλυμπος",
            },
            {
                id:"3",
                answer:"Παρνασσός ",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/olympus.jpg'),
        result1: "Σύμφωνα με τη μυθολογία, εκεί κατοικούσαν οι δώδεκα θεοί.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"23",
        question: "Σε ποιο βουνό βρίσκεται το καταφύγιο 'Σπήλιος Αγαπητός';",
        options:[
            {
                id:"0",
                answer:"Όλυμπος",
            },
            {
                id:"1",
                answer:"Πίνδος ",
            },
            {
                id:"2",
                answer:"Βέρμιο ",
            },
            {
                id:"3",
                answer:"Παρνασσός",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/mountain1.jpg'),
        result1: "Είναι το πιο διάσημο καταφύγιο στην Ελλάδα και βρίσκεται στο μονοπάτι προς τον Μύτικα.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"24",
        question: "Ποιο βουνό είναι γνωστό για τη σπηλιά του Οδυσσέα Ανδρούτσου;",
        options:[
            {
                id:"0",
                answer:"Πίνδος",
            },
            {
                id:"1",
                answer:"Όλυμπος",
            },
            {
                id:"2",
                answer:"Γράμμος",
            },
            {
                id:"3",
                answer:"Παρνασσός",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/mountain5.jpg'),
        result1: "Βρίσκεται κοντά στους Δελφούς και συνδέεται με την Ελληνική Επανάσταση.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"25",
        question: "Ποιο βουνό της Κρήτης είναι το ψηλότερο;",
        options:[
            {
                id:"0",
                answer:"Ψηλορείτης",
            },
            {
                id:"1",
                answer:"Λευκά Όρη",
            },
            {
                id:"2",
                answer:"Δίκτη",
            },
            {
                id:"3",
                answer:"Κέδρος",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/mountain2.jpg'),
        result1: "Είναι γνωστό και ως 'Όρος Ίδη' και εκεί λέγεται ότι ανατράφηκε ο Δίας.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"26",
        question: "Ποιο βουνό της Μακεδονίας είναι το δεύτερο ψηλότερο στην Ελλάδα;",
        options:[
            {
                id:"0",
                answer:"Βόρας",
            },
            {
                id:"1",
                answer:"Βέρμιο",
            },
            {
                id:"2",
                answer:"Σμόλικας",
            },
            {
                id:"3",
                answer:"Φαλακρό",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/mountain.jpg'),
        result1: "Βρίσκεται στα σύνορα με την Αλβανία και έχει πλούσια βλάστηση.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"27",
        question: "Ποιο όρος είναι γνωστό για τα μοναστήρια των Μετεώρων;",
        options:[
            {
                id:"0",
                answer:"Άθως",
            },
            {
                id:"1",
                answer:"Όθρυς",
            },
            {
                id:"2",
                answer:"Χορτιάτης",
            },
            {
                id:"3",
                answer:"Τρίκκη",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/Photos/meteora.jpg'),
        result1: "Στην κορυφή του σχηματίζονται επιβλητικοί βράχοι με ιστορικά μοναστήρια.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"28",
        question: "Ποια οροσειρά χωρίζει τη Θεσσαλία από την Ήπειρο;",
        options:[
            {
                id:"0",
                answer:"Ταϋγετος",
            },
            {
                id:"1",
                answer:"Βόρας",
            },
            {
                id:"2",
                answer:"Πίνδος",
            },
            {
                id:"3",
                answer:"Ροδόπη",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/mountain.jpg'),
        result1: "Είναι η φυσική συνέχεια των Δειναρικών Άλπεων και φιλοξενεί πολλά χωριά του Ζαγορίου.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"29",
        question: "Ποιο βουνό είναι γνωστό για το φαράγγι της Σαμαριάς;",
        options:[
            {
                id:"0",
                answer:"Λευκά Όρη",
            },
            {
                id:"1",
                answer:"Ψηλορείτης",
            },
            {
                id:"2",
                answer:"Δίκτη",
            },
            {
                id:"3",
                answer:"Πάρνωνας",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/mountain2.jpg'),
        result1: "Βρίσκεται στη δυτική Κρήτη και είναι από τα μεγαλύτερα φαράγγια της Ευρώπης.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"30",
        question: "Σε ποιο βουνό βρίσκεται το σπήλαιο Διρού;",
        options:[
            {
                id:"0",
                answer:"Παρνασσός",
            },
            {
                id:"1",
                answer:"Χελμός ",
            },
            {
                id:"2",
                answer:"Ταΰγετος",
            },
            {
                id:"3",
                answer:"Γκιώνα",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/taygetos.jpg'),
        result1: "Βρίσκεται στη Λακωνία και αποτελεί ένα από τα πιο εντυπωσιακά λιμναία σπήλαια.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"31",
        question: "Ποιο βουνό είναι γνωστό για το περίφημο φαράγγι του Λούσιου;",
        options:[
            {
                id:"0",
                answer:"Παρνασσός",
            },
            {
                id:"1",
                answer:"Βόρας",
            },
            {
                id:"2",
                answer:"Ταΰγετος",
            },
            {
                id:"3",
                answer:"Mαίναλο",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/mountain.jpg'),
        result1: "Βρίσκεται στην Αρκαδία και φιλοξενεί ιστορικά μοναστήρια, όπως η Μονή Προδρόμου.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"32",
        question: "Ποιο βουνό συνδέεται με τον Ορφέα στην ελληνική μυθολογία;",
        options:[
            {
                id:"0",
                answer:"Παρνασσός",
            },
            {
                id:"1",
                answer:"Ροδόπη",
            },
            {
                id:"2",
                answer:"Όλυμπος",
            },
            {
                id:"3",
                answer:"Πίνδος",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/rodopi.jpg'),
        result1: "Το βουνό που συνδέεται με τον Ορφέα στην ελληνική μυθολογία είναι το βουνό Ροδόπη.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"33",
        question: "Ποιο βουνό της Στερεάς Ελλάδας είναι γνωστό για το χιονοδρομικό του κέντρο;",
        options:[
            {
                id:"0",
                answer:"Όρθρυς",
            },
            {
                id:"1",
                answer:"Βέρμιο",
            },
            {
                id:"2",
                answer:"Όλυμπος",
            },
            {
                id:"3",
                answer:"Παρνασσός",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/parnassos.jpg'),
        result1: "Είναι το μεγαλύτερο χιονοδρομικό κέντρο της Ελλάδας και βρίσκεται κοντά στην Αράχωβα.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"34",
        question: "Ποιο βουνό συνδέεται με τις Δελφικές προφητείες;",
        options:[
            {
                id:"0",
                answer:"Όλυμπος",
            },
            {
                id:"1",
                answer:"Παρνασσός",
            },
            {
                id:"2",
                answer:"Ταΰγετος",
            },
            {
                id:"3",
                answer:"Σμόλικας ",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/delphiFokida.jpg'),
        result1: "Βρίσκεται κοντά στο μαντείο των Δελφών, το οποίο ήταν αφιερωμένο στον Απόλλωνα και ήταν το πιο σημαντικό μαντείο της αρχαιότητας.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"35",
        question: "Ποιο είναι το υψηλότερο βουνό της Θράκης;",
        options:[
            {
                id:"0",
                answer:"Ροδόπη",
            },
            {
                id:"1",
                answer:"Φαλακρό",
            },
            {
                id:"2",
                answer:"Βροντού ",
            },
            {
                id:"3",
                answer:"Βέρμιο",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/mountain.jpg'),
        result1: "Εκτείνεται και στη Βουλγαρία, όπου είναι γνωστό ως 'Ρίλα'.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"36",
        question: "Σε ποιο βουνό βρίσκεται η λίμνη Δρακολίμνη;",
        options:[
            {
                id:"0",
                answer:"Σμόλικας ",
            },
            {
                id:"1",
                answer:"Παρνασσός",
            },
            {
                id:"2",
                answer:"Ταΰγετος",
            },
            {
                id:"3",
                answer:"Τύμφη",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/mountain3.jpg'),
        result1: "H  λίμνη Δρακολίμνη βρίσκεται στο βουνό Τύμφη.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"37",
        question: "Ποιο βουνό της Θεσσαλίας είναι γνωστό για τη Λίμνη Πλαστήρα;",
        options:[
            {
                id:"0",
                answer:"Βέρμιο",
            },
            {
                id:"1",
                answer:"Γράμμος",
            },
            {
                id:"2",
                answer:"Άγραφα",
            },
            {
                id:"3",
                answer:"Πίνδος",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/mountain.jpg'),
        result1: "Το όνομά του σημαίνει «μαύρο βουνό» και βρίσκεται κοντά στην Καρδίτσα.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"38",
        question: "Ποιο βουνό είναι γνωστό για το χιονοδρομικό κέντρο Καϊμακτσαλάν;",
        options:[
            {
                id:"0",
                answer:"Βόρας",
            },
            {
                id:"1",
                answer:"Σμόλικας",
            },
            {
                id:"2",
                answer:"Όρθρυς",
            },
            {
                id:"3",
                answer:"Βέρμιο",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/xionokalavryta.jpg'),
        result1: "Είναι το ψηλότερο βουνό της Μακεδονίας και ανήκει στη συνοριακή γραμμή με τη Βόρεια Μακεδονία.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"39",
        question: "Ποιο βουνό βρίσκεται δίπλα από τον Όλυμπο και χωρίζεται από το στενό της Πέτρας;",
        options:[
            {
                id:"0",
                answer:"Παρνασσός",
            },
            {
                id:"1",
                answer:"Βέρμιο",
            },
            {
                id:"2",
                answer:"Γκιώνα",
            },
            {
                id:"3",
                answer:"Όσσα",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/mountain1.jpg'),
        result1: "Είναι γνωστό και ως το «βουνό των Κενταύρων» και βρίσκεται στην περιοχή της Θεσσαλίας.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"40",
        question: "Ποιο βουνό συνδέεται με τον μυθικό Ελικώνα, τον τόπο των Μουσών;",
        options:[
            {
                id:"0",
                answer:"Παρνασσός",
            },
            {
                id:"1",
                answer:"Όλυμπος",
            },
            {
                id:"2",
                answer:"Ελικώνας",
            },
            {
                id:"3",
                answer:"Ταΰγετος",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/mountain2.jpg'),
        result1: "Βρίσκεται στη Στερεά Ελλάδα και συνδέεται με τη μυθολογία, καθώς ήταν ο τόπος όπου οι Μούσες ενέπνεαν τις τέχνες και τη μουσική.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"41",
        question: "Σε ποιο βουνό βρίσκεται το μοναστήρι της Παναγίας Σουμελά;",
        options:[
            {
                id:"0",
                answer:"Πίνδος ",
            },
            {
                id:"1",
                answer:"Σμόλικας",
            },
            {
                id:"2",
                answer:"Παρνασσός ",
            },
            {
                id:"3",
                answer:"Βέρμιο ",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/soumela.jpg'),
        result1: "Βρίσκεται στη Βόρεια Ελλάδα και αποτελεί σημαντικό προσκύνημα του Ποντιακού Ελληνισμού.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"42",
        question: "Ποιο βουνό είναι γνωστό για τη 'Χαράδρα του Βίκου';",
        options:[
            {
                id:"0",
                answer:"Τύμφη",
            },
            {
                id:"1",
                answer:"Παρνασσός",
            },
            {
                id:"2",
                answer:"Σμόλικας",
            },
            {
                id:"3",
                answer:"Όλυμπος",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/mountain1vikos.jpg'),
        result1: "Βρίσκεται στην Ήπειρο και είναι το βαθύτερο φαράγγι στον κόσμο σε αναλογία βάθους και πλάτους.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"43",
        question: "Ποιο βουνό της Πελοποννήσου βρίσκεται κοντά στην Τρίπολη;",
        options:[
            {
                id:"0",
                answer:"Ταΰγετος",
            },
            {
                id:"1",
                answer:"Πάρνωνας ",
            },
            {
                id:"2",
                answer:"Μαίναλο",
            },
            {
                id:"3",
                answer:"Χελμός",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/mountain5.jpg'),
        result1: "Το βουνό της Πελοποννήσου που βρίσκεται κοντά στην Τρίπολη είναι ο Μαίναλος.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"44",
        question: "Ποιο βουνό χωρίζει τη Θεσσαλία από την Εύβοια;",
        options:[
            {
                id:"0",
                answer:"Παρνασσός",
            },
            {
                id:"1",
                answer:"Βέρμιο",
            },
            {
                id:"2",
                answer:"Πίνδος",
            },
            {
                id:"3",
                answer:"Όρθρυς",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/mountain1.jpg'),
        result1: "Το βουνό Όρθρυς χωρίζει τη Θεσσαλία από την Εύβοια.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"45",
        question: "Ποιο βουνό της Κρήτης φιλοξενεί το Σπήλαιο του Δία;",
        options:[
            {
                id:"0",
                answer:"Ψηλορείτης",
            },
            {
                id:"1",
                answer:"Δίκτη",
            },
            {
                id:"2",
                answer:"Λευκά Όρη ",
            },
            {
                id:"3",
                answer:"Κέδρος",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/mountain2.jpg'),
        result1: "Το βουνό Δίκτης φιλοξενεί το Σπήλαιο του Δία.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"46",
        question: "Ποιο βουνό λέγεται και 'Αρκαδικός Όλυμπος';",
        options:[
            {
                id:"0",
                answer:"Ταΰγετος",
            },
            {
                id:"1",
                answer:"Βέρμιο",
            },
            {
                id:"2",
                answer:"Παρνασσός",
            },
            {
                id:"3",
                answer:"Μαίναλο",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/mountain5.jpg'),
        result1: "'Αρκαδικός Όλυμπος' λέγεται το βουνό Μαίναλος.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"47",
        question: "Ποιο βουνό της Ελλάδας είναι γνωστό για το πέρασμα των Θερμοπυλών;",
        options:[
            {
                id:"0",
                answer:"Καλλίδρομο",
            },
            {
                id:"1",
                answer:"Παρνασσός",
            },
            {
                id:"2",
                answer:"Πίνδος",
            },
            {
                id:"3",
                answer:"Όρθρυς",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/mountain2.jpg'),
        result1: "Το βουνό Καλλίδρομος είναι γνωστό για το πέρασμα των Θερμοπυλών.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"48",
        question: "Ποιο βουνό της Ηπείρου έχει κορυφή που ονομάζεται 'Τραπεζίτσα';",
        options:[
            {
                id:"0",
                answer:"Τύμφη",
            },
            {
                id:"1",
                answer:"Σμόλικας",
            },
            {
                id:"2",
                answer:"Παρνασσός",
            },
            {
                id:"3",
                answer:"Όλυμπος",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/olympus.jpg'),
        result1: "Είναι το δεύτερο ψηλότερο βουνό της Ελλάδας και βρίσκεται στην περιοχή της Ηπείρου, κοντά στην πόλη των Ιωαννίνων.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"49",
        question: "Ποιο βουνό της Ελλάδας φιλοξενεί τη λίμνη του Μαυροβουνίου;",
        options:[
            {
                id:"0",
                answer:"Πίνδος",
            },
            {
                id:"1",
                answer:"Βέρμιο",
            },
            {
                id:"2",
                answer:"Όλυμπος",
            },
            {
                id:"3",
                answer:" Σμόλικας",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/mountain4.jpg'),
        result1: "Βρίσκεται στη δυτική Ελλάδα και είναι γνωστό για τις παρθένες του δασικές εκτάσεις και την ομορφιά της φύσης του.",
        result2: "",
        result3: "",
        result4: "",
    },
    {
        id:"50",
        question: "Σε ποιο βουνό βρίσκεται η αρχαία Δωδώνη, το παλαιότερο μαντείο της Ελλάδας;",
        options:[
            {
                id:"0",
                answer:"Μαίναλο",
            },
            {
                id:"1",
                answer:"Τόμαρος",
            },
            {
                id:"2",
                answer:"Πίνδος",
            },
            {
                id:"3",
                answer:"Τζουμέρκα",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/mountain3.jpg'),
        result1: "Βρίσκεται στην Ήπειρο και είναι το δεύτερο σημαντικότερο μαντείο μετά τους Δελφούς, ο Τόμαρος.",
        result2: "",
        result3: "",
        result4: "",
    }
]
export default questions