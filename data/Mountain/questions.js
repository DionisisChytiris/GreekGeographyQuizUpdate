const questions =  [
    {
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
        result: "Ο Όλυμπος είναι το υψηλότερο βουνό της Ελλάδας με ανώτερη κορυφή του τον Μύτικα στα 2918 μέτρα.\nΟ Σμόλικας είναι το δεύτερο υψηλότερο βουνό της Ελλάδας μετά τον Όλυμπο, με μέγιστο υψόμετρο στην κορυφή του Γέρος στα 2637 μέτρα.\nΟ Βόρας, που είναι το τρίτο υψηλότερο βουνό της χώρας, βρίσκεται στο βόρειο τμήμα του νομού Πέλλας, εκτείνεται ως τα όρια του νομού Φλώρινας, ενώ συνεχίζει βόρεια και απλώνεται και πέρα από τα ελληνικά σύνορα, με ανώτερη κορυφή του στα 2524 μέτρα.\nΟ Γράμμος έρχεται τέταρτος στη σειρά των ψηλότερων βουνών της Ελλάδας με ανώτερη κορυφή του την Τσούκα Πέτσικ στα 2520 μέτρα."
    },
    {
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
        result: "Η οροσειρά Λευκά Όρη ή Μαδάρες βρίσκεται στη δυτική Κρήτη, εκτεινόμενη σε περιοχή με μήκος 60 και πλάτος 35 χιλιομέτρων."
    },
    {
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
        result: "Το Όρος Βόρας ή Καϊμακτσαλάν, είναι το τρίτο ψηλότερο βουνό της Ελλάδας, μετά τον Όλυμπο και το Σμόλικα, τοποθετημένο στο βόρειο τμήμα του Νομού Πέλλας και εκτείνεται έως τα όρια του Νομού Φλώρινας ενώ συνεχίζεται και πέρα από τα σύνορα στην πλευρά της Πρώην Γιουγκοσλαβικής Δημοκρατίας της Μακεδονίας. Η ψηλότερη κορυφή του Βόρα είναι το Καϊμάκτσαλαν με ύψος 2.524 μέτρα. "
    },
    {
        question: "Που βρίσκεται το όρος Βασιλίτσα;",
        options:[
            {
                id:"0",
                answer:"Μακεδονία\nΘεσσαλία",
            },
            {
                id:"1",
                answer:"Μακεδονία\nΉπειρος",
            },
            {
                id:"2",
                answer:"Μακεδονία\nΘράκη",
            },
            {
                id:"3",
                answer:"Θεσσαλία\nΉπειρος",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/mountain1.jpg'),
        result: "Η Βασιλίτσα είναι βουνό της Μακεδονίας και της Ηπείρου, στα όρια των νομών Ιωαννίνων και Γρεβενών. Η κορυφή της έχει υψόμετρο 2.249 μέτρα και βρίσκεται στο κεντρικό τμήμα της οροσειράς της Βόρειας Πίνδου."
    },
    {
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
        result: "Παρόλο που η Ελλάδα είναι παγκοσμίως γνωστή για το αρχιπέλαγός της, ένα 80% της χερσαίας της έκτασης καλύπτεται από ορεινούς όγκους."
    },
    {
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
        result: "Ο Σμόλικας είναι το δεύτερο υψηλότερο βουνό της Ελλάδας μετά τον Όλυμπο, με μέγιστο υψόμετρο στην κορυφή του Γέρος στα 2637 μέτρα.\nΟ Βόρας, που είναι το τρίτο υψηλότερο βουνό της χώρας, βρίσκεται στο βόρειο τμήμα του νομού Πέλλας, εκτείνεται ως τα όρια του νομού Φλώρινας, ενώ συνεχίζει βόρεια και απλώνεται και πέρα από τα ελληνικά σύνορα, με ανώτερη κορυφή του στα 2524 μέτρα.\n\n."
    },
    {
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
        result: "Η Τύμφη (2.497 μ.) είναι βουνό της Ηπείρου στην επαρχία του Ζαγορίου. Ονομάζεται και Γκαμήλα από την ονομασία της ψηλότερης κορυφής της. Οι υψηλότερες κορυφές της Τύμφης είναι η Γκαμήλα 2.497 μ., η Γκούρα 2.467 μ., η Αστράκα 2.432 μ., και ακολουθούν ο Άβαλος, η Ραδόβολη, ο Πλόσκος, ο Λαγαρής, ο Αϊλιάς κ.ά."
    },
    {
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
        result: "Η Μερέντα είναι βουνό της Αττικής. Βρίσκεται στο νότιο τμήμα του νομού ανάμεσα στους οικισμούς Μαρκόπουλο Μεσογαίας, Καλύβια Θορικού, Πόρτο Ράφτη και Κουβαράς. "
    },
    {
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
        result: "Ο Βόρας είναι οροσειρά στα σύνορα της Ελλάδας με το κράτος των Σκοπίων εκτεινόμενη και στις δυο χώρες. Αποτελεί τη διαχωριστική γραμμή του νομού Πέλλας στα νότια, με το Μορίχοβο των Σκοπίων στα βόρεια και εκτείνεται ως τα όρια του νομού Φλώρινας. Αποτελεί το τρίτο υψηλότερο βουνό της Ελλάδας. Ονομάζεται και Καϊμακτσαλαν."
    },
    {
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
        result: "Ο Μύτικας είναι η υψηλότερη κορυφή του Ολύμπου και της Ελλάδος και δεύτερη υψηλότερη των Βαλκανίων, μετά τη Μουσαλά στη Βουλγαρία. Έχει υψόμετρο 2917 μέτρα. \nΟ Προφήτης Ηλίας έχει υψόμετρο 2802 μέτρα. \nΤο Στεφάνι έχει υψόμετρο 2909 μέτρα. \nΤΗ Σκάλα έχει υψόμετρο 2866 μέτρα."
    },
    {
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
        result: "Η Όσσα είναι βουνό της Θεσσαλίας, γνωστό επίσης με το όνομα Κίσσαβος. Βρίσκεται βορειοανατολικά του νομού Λάρισας και νότια των Τεμπών και του Πηνειού απέναντι από τον Όλυμπο, του οποίου αποτελεί συνέχεια γεωλογικά και από τον οποίο χωρίζεται από την κοιλάδα των Τεμπών."
    },
    {
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
        result: "Η Πίνδος είναι η μεγαλύτερη οροσειρά της Ελλάδας. Κυριαρχεί σχεδόν σ'ολόκληρη την δυτική Ελλάδα και ουσιαστικά αποτελεί συνέχεια των Ιλλυρικών και Δαλματικών οροσειρών. Ως βόρειο άκρο της μπορεί να οριστεί το οροπέδιο της Κορυτσάς, στην νοτιοανατολική Αλβανία και ως νοτιότερο σημείο της ο Κορινθιακός κόλπος."
    },
    {
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
        result: "Ο Ψηλορείτης, γνωστός και ως Ίδη, είναι ορεινός όγκος στην κεντρική Κρήτη με ύψος 2.456 μέτρα. Έχει 5 κορυφές που ξεπερνούν τα 2000 μέτρα: Ίδη (2.456 μ.), Αγκαθιάς (2.424 μ.), Στολίστρα (2.325 μ.), Βουλομένου (2.267 μ.) και Κούσακας (2.209 μ.)."
    },
    {
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
        result: "Τα Αθαμανικά όρη, ευρύτερα γνωστά ως Τζουμέρκα ή Τσουμέρκα. Είναι μεγάλη οροσειρά της δυτικής Ελλάδος, που ουσιαστικά αποτελεί νότιο τμήμα της ευρύτερης οροσειράς της Πίνδου που υψώνεται μεταξύ των ποταμών Αράχθου και Αχελώου."
    },
    {
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
        result: "Η Καλιακούδα είναι βουνό της Στερεάς Ελλάδας και βρίσκεται στο νομό Ευρυτανίας. Διαχωρίζει τους μεγάλους ορεινούς όγκους των Βαρδουσίων, του Τυμφρηστού και του Παναιτωλικού. Έχει υψόμετρο 2.101 μέτρα."
    },
]
export default questions