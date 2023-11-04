const questions =  [
    {
        question: "Ποιος είναι ο μεγαλύτερος σε μήκος ποταμός στην Ελλάδα;",
        options:[
            {
                id:"0",
                answer:"Αχελώος",
            },
            {
                id:"1",
                answer:"Στρυμόνας",
            },
            {
                id:"2",
                answer:"Αλιάκμονας",
            },
            {
                id:"3",
                answer:"Νέστος",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/lake4.jpg'),
        result: "Ο Αλιάκμονας έχει μήκος 297 χιλιόμετρα.\nΟ Αχελώος έχει μήκος 220 χιλιόμετρα. \nΟ Νέστος έχει μήκος 130 χιλιόμετρα.\nΟ Στρυμόνας έχει μήκος 118 χιλιόμετρα σε ελληνικό έδαφος."
    },
    {
        question: "Που βρίσκεται η λίμνη Βιστωνίδα;",
        options:[
            {
                id:"0",
                answer:"Ξάνθη-Ροδόπη",
            },
            {
                id:"1",
                answer:"Έβρο",
            },
            {
                id:"2",
                answer:"Φλώρινα",
            },
            {
                id:"3",
                answer:"Αιτωλοκαρ/νία",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/lake6.jpg'),
        result: "Η λίμνη Βιστωνίδα ή λίμνη Μπουρού είναι λίμνη της Ελλάδας που βρίσκεται στα σύνορα μεταξύ των Νομών Ξάνθης και Ροδόπης. Ο υγροβιότοπός της προστατεύεται από τη σύμβαση Ραμσάρ."
    },
    {
        question: "Που βρίσκεται ο ποταμός Βοϊδομάτης;",
        options:[
            {
                id:"0",
                answer:"Ν.Τρικάλων",
            },
            {
                id:"1",
                answer:"Ν.Ιωαννίνων",
            },
            {
                id:"2",
                answer:"Ν.Γρεβενών",
            },
            {
                id:"3",
                answer:"Ν.Άρτας",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/voidomatis.jpg'),
        result: "Ο Βοϊδομάτης είναι ποταμός του νομού Ιωαννίνων, παραπόταμος του Αώου. Οι κύριες πηγές του βρίσκονται κάτω από το χωριό Βίκος. Έχει συνολικό μήκος 15 χιλιόμετρα. "
    },
    {
        question: "Ποια είναι η μεγαλύτερη λίμνη της Ελλάδας;",
        options:[
            {
                id:"0",
                answer:"Βόλβη",
            },
            {
                id:"1",
                answer:"Βιστωνίδα",
            },
            {
                id:"2",
                answer:"Τριχωνίδα",
            },
            {
                id:"3",
                answer:"Βεγορίτιδα",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/lake2.jpg'),
        result: "Η λίμνη Τριχωνίδα είναι η μεγαλύτερη λίμνη της Ελλάδας. Βρίσκεται στον νομό Αιτωλοακαρνανίας, ανατολικά της πόλης του Αγρινίου, μεταξύ των επαρχιών Μεσολογγίου και Τριχωνίδας, νότια του Παναιτωλικού όρους και βόρεια του Αρακύνθου."
    },
    {
        question: "Ποιο ποτάμι από τα παρακάτω εκβάλλει στο Αιγαίο πέλαγος;",
        options:[
            {
                id:"0",
                answer:"Αλιάκμονας",
            },
            {
                id:"1",
                answer:"Άραχθος",
            },
            {
                id:"2",
                answer:"Αχελώος",
            },
            {
                id:"3",
                answer:"Αλφειός",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/river3.jpg'),
        result: "Ο Αλιάκμονας πηγάζει στο Γράμμο, κοντά στα σύνορα της Ελλάδας με την Αλβανία, και εκβάλλει στο Αιγαίο Πέλαγος μεταξύ της Θεσσαλονίκης και της Κατερίνης.\nΟ Άραχθος πηγάζει από την βόρεια Πίνδο και εκβάλλει στον Αμβρακικό κόλπο. \nΟ Αχελώος πηγάζει από την οροσειρά της Πίνδου και μετά από μια διαδρομή 220 χιλιομέτρων εκβάλλει στο Ιόνιο πέλαγος.\nΟ Αλφειός είναι ο σημαντικότερος ποταμός της Πελοποννήσου και εκβάλλει στο βόρειο τμήμα του Κυπαρισσιακού κόλπου."
    },
    {
        question: "Ποια από τις παρακάτω λίμνες είναι τεχνητή;",
        options:[
            {
                id:"0",
                answer:"Δοϊράνη",
            },
            {
                id:"1",
                answer:"Κερκίνη",
            },
            {
                id:"2",
                answer:"Λίμνη Πετρών",
            },
            {
                id:"3",
                answer:"Λίμνη Καϊάφα",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/lake2.jpg'),
        result: "Η Κερκίνη δημιουργήθηκε το 1932, όταν έγινε το φράγμα στην περιοχή του Λιθότοπου, Στρυμόνα και αργότερα χρησιμοποιήθηκε σαν μέρος αποθήκευσης νερού για την άρδευση της πεδιάδας του Νομού."
    },
    {
        question: "Που θα συναντήσεις τον ποταμό Αλφειό;",
        options:[
            {
                id:"0",
                answer:"Ήπειρο",
            },
            {
                id:"1",
                answer:"Θεσσαλία",
            },
            {
                id:"2",
                answer:"Θράκη",
            },
            {
                id:"3",
                answer:"Πελοπόννησο",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/river1.jpg'),
        result: "Ο Αλφειός, ο οποίος λέγεται επίσης και Ρουφιάς, είναι ο μεγαλύτερος ποταμός της Πελοποννήσου τόσο σε μήκος , όσο και σε παροχή. Είναι ποταμός συνεχούς ροής, που αποστραγγίζει ένα μεγάλο μέρος της κεντρικής και δυτικής Πελοποννήσου."
    },
    {
        question: "Πως λέγεται η λίμνη της Καστοριάς;",
        options:[
            {
                id:"0",
                answer:"Κορώνεια",
            },
            {
                id:"1",
                answer:"Ορεστιάδα",
            },
            {
                id:"2",
                answer:"Καστοριά",
            },
            {
                id:"3",
                answer:"Παμβώτιδα",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/kastoria1.jpg'),
        result: "Η Λίμνη Ορεστιάδα ή λίμνη της Καστοριάς βρίσκεται στη δυτική Μακεδονία στο μέσο της οποίας είναι χτισμένη η πόλη της Καστοριάς. Βρίσκεται σε υψόμετρο 630 μ. πάνω από την επιφάνεια της θάλασσας, έχει έκταση 28 τετ. χλμ. και είναι η ενδεκάτη σε μέγεθος λίμνη στην Ελλάδα. Το βάθος της κυμαίνεται από 1,4-12 μέτρα και η μέση θερμοκρασία είναι 22 βαθμοί Κελσίου."
    },
    {
        question: "Ποια από τις παρακάτω λίμνες βρίσκεται στη Θράκη;",
        options:[
            {
                id:"0",
                answer:"Βιστωνίδα",
            },
            {
                id:"1",
                answer:"Τριχωνίδα",
            },
            {
                id:"2",
                answer:"Υλίκη",
            },
            {
                id:"3",
                answer:"Δοϊράνη",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/MorePhotos/lake1.jpg'),
        result: "Η λίμνη Βιστωνίδα βρίσκεται στα σύνορα μεταξύ Νομού Ξάνθης και Ροδόπης.\n\nΗ λίμνη Τριχωνίδα βρίσκεται στον Νομό Αιτωλοακαρνανίας. \n\nΗ λίμνη Υλίκη βρίσκεται στον Νομό Βοιωτίας.\n\nΗ λίμνη Δοϊράνη βρίσκεται στον Νομό Κιλκίς."
    },
    {
        question: "Που εκβάλλει ο ποταμός Αλιάκμονας;",
        options:[
            {
                id:"0",
                answer:"Ιόνιο Πέλαγος",
            },
            {
                id:"1",
                answer:"Αμβρακικό Κόλπο",
            },
            {
                id:"2",
                answer:"Θερμαϊκό Κόλπο",
            },
            {
                id:"3",
                answer:"Μαλιακός Κόλπος",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/river2.jpg'),
        result: "Ο Αλιάκμονας είναι ο μεγαλύτερος ποταμός της Ελλάδας με συνολικό μήκος 297χλμ. Πηγάζει στο Γράμμο, κοντά στα σύνορα της χώρας με την Αλβανία, και εκβάλλει στο Αιγαίο Πέλαγος μεταξύ της Θεσσαλονίκης και της Κατερίνης."
    },
    {
        question: "Πως αλλιώς λέγεται η λίμνη των Ιωαννίνων;",
        options:[
            {
                id:"0",
                answer:"Ορεστιάδα",
            },
            {
                id:"1",
                answer:"Τριχωνίδα",
            },
            {
                id:"2",
                answer:"Κορώνεια",
            },
            {
                id:"3",
                answer:"Παμβώτιδα",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/lake1.jpg'),
        result: "Η λίμνη Παμβώτιδα γνωστή και ως λίμνη των Ιωαννίνων, βρίσκεται σε υψόμετρο 483 μέτρων από την επιφάνεια της θάλασσας. Έχει μήκος 7,9 περίπου χιλιόμετρα, πλάτος 1,5 ως 5,4 χιλιόμετρα, μέσο βάθος 4 - 5 μέτρα, μέγιστο βάθος 11 μέτρα και επιφάνεια 19,4 τετραγωνικά χιλιόμετρα. "
    },
    {
        question: "Που βρίσκεται η λίμνη Τριχωνίδα;",
        options:[
            {
                id:"0",
                answer:"Φλώρινα",
            },
            {
                id:"1",
                answer:"Αιτωλοακαρνανία",
            },
            {
                id:"2",
                answer:"Βοιωτία",
            },
            {
                id:"3",
                answer:"Μαγνησία",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/lake6.jpg'),
        result: "Η Λίμνη Τριχωνίδα είναι η μεγαλύτερη λίμνη της Ελλάδας. Βρίσκεται στον νομό Αιτωλοακαρνανίας, ανατολικά της πόλης του Αγρινίου, μεταξύ των επαρχιών Μεσολογγίου και Τριχωνίδας, νότια του Παναιτωλικού όρους και βόρεια του Αρακύνθου. Έχει επιφάνεια 95,8 τετραγωνικά χιλιόμετρα, μέγιστο μήκος 21,5 χλμ. και μέγιστο βάθος 58 μ. "
    },
    {
        question: "Ποιος από τους παρακάτω ποταμούς βρίσκεται στη Θεσσαλία;",
        options:[
            {
                id:"0",
                answer:"Αλιάκμονας",
            },
            {
                id:"1",
                answer:"Στρυμόνας",
            },
            {
                id:"2",
                answer:"Αξιός",
            },
            {
                id:"3",
                answer:"Πηνειός",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/river3.jpg'),
        result: "Ο Αλιάκμονας είναι ποταμός της Μακεδονίας στη βορειοδυτική Ελλάδα.\n\nΟ Στρυμόνας είναι ποταμός της νοτιοανατολικής Ευρώπης με συνολικό μήκος 392 χιλιόμετρα, από τα οποία 274 βρίσκονται σε βουλγαρικό έδαφος και 118 σε ελληνικό. Στο ελληνικό έδαφος, ο ποταμός ρέει αποκλειστικά στο έδαφος της Περιφερειακής Ενότητας Σερρών.\n\nΟ Αξιός διασχίζει τη Μακεδονία και χύνεται στον Θερμαϊκό Κόλπο.\n\nΟ Πηνειός, επίσης γνωστός ως Σαλαβριάς, είναι ποταμός της Θεσσαλίας. Οι πηγές του βρίσκονται στην Πίνδο."
    },
    {
        question: "Που βρίσκεται η λίμνη Πλαστήρα;",
        options:[
            {
                id:"0",
                answer:"Αγρίνιο",
            },
            {
                id:"1",
                answer:"Τρίκαλα",
            },
            {
                id:"2",
                answer:"Καρδίτσα",
            },
            {
                id:"3",
                answer:"Γρεβενά",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/lake5.jpg'),
        result: "Η Λίμνη Πλαστήρα είναι λίμνη που βρίσκεται στον Νομό Καρδίτσας. Είναι τεχνητή λίμνη και το επίσημό της όνομα είναι λίμνη Ταυρωπού."
    },
    {
        question: "Ποιος από τους παρακάτω ποταμούς εκβάλλει στο Ιόνιο πέλαγος;",
        options:[
            {
                id:"0",
                answer:"Πηνειός",
            },
            {
                id:"1",
                answer:"Νέστος",
            },
            {
                id:"2",
                answer:"Ευρώτας",
            },
            {
                id:"3",
                answer:"Αχελώος",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/river1.jpg'),
        result: " Ο Πηνειός βρίσκεται στη Θεσσαλία. Οι πηγές του βρίσκονται στην Πίνδο. Διασχίζει την κοιλάδα των Τεμπων και εκβάλλει στο Αιγαίο Πέλαγος.\n\nΟ Νέστος οριοθετεί τα σύνορα ανάμεσα στη Μακεδονία και τη Θράκη και εκβάλλει στο Θρακικό Πέλαγος.\n\nΟ Ευρώτας είναι ποταμός της Πελοποννήσου και εκβάλλει στο μυχό του Λακωνικού Κόλπου.\n\n Ο Αχελώος πηγάζει από την οροσειρά της Πίνδου και μετά από μια διαδρομή 220 χιλιομέτρων εκβάλλει στο Ιόνιο πέλαγος."
    },
]
export default questions