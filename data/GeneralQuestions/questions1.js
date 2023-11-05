const questions1 =  [
    {
        id: 1,
        question: "Ποιo είναι το μεγαλύτερο νησί της Ελλάδας;",
        options:[
            {
                id:"0",
                answer:"Κέρκυρα",
            },
            {
                id:"1",
                answer:"Kρήτη",
            },
            {
                id:"2",
                answer:"Εύβοια",
            },
            {
                id:"3",
                answer:"Ρόδος",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/capitals/rethimno1.jpg'),
        result: 'H έκταση της Κρήτης είναι 8.303 χλμ². \nH έκταση της Εύβοιας είναι 3.670 χλμ². \nH έκταση της Ρόδου είναι 1.401 χλμ². \nH έκταση της Κέρκυρας είναι 585,3 χλμ². '
    },
    {
        id: 2,
        question: "Ποιο είναι το μεγαλύτερο από τα παρακάτω νησιά;",
        options:[
            {
                id:"0",
                answer:"Σάμος",
            },
            {
                id:"1",
                answer:"Κεφαλοννιά",
            },
            {
                id:"2",
                answer:"Χίος",
            },
            {
                id:"3",
                answer:"Λήμνος",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/generalQuestions/greece.jpg'),
        result: 'H έκταση της Χίου είναι 842,3 χλμ². \nH έκταση της Κεφαλλονιάς είναι 786,6 χλμ². \nH έκταση της Σάμου είναι 477,4 χλμ². \nH έκταση της Λήμνου είναι 476 χλμ². '
    },
    {
        id: 3,
        question: "Που βρίσκεται το «Μονοπάτι του Ασκληπιού»;",
        options:[
            {
                id:"0",
                answer:"Λάρισα",
            },
            {
                id:"1",
                answer:"Γρεβενά",
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
        correctAnswerIndex: 3,
        img: require('../../assets/generalQuestions/trail.jpg'),
        result: 'Σύμφωνα με την παράδοση, ο Ασκληπιός συχνά ανηφόριζε προς τις πλαγιές του ξακουστού βουνού Κόζιακα (Κερκέτιο όρος 1.901 μ.υψόμετρο), τμήμα της νότιας Πίνδου που εκτείνεται από την Καλαμπάκα έως την Πύλη Τρικάλων, προκειμένου να μαζέψει αρωματικά και φαρμακευτικά βότανα για την παρασκευή φαρμάκων για την ίαση των ασθενών του.'
    },
    {
        id: 4,
        question: "Σε ποιο νομό βρίσκεται η Σαντορίνη;",
        options:[
            {
                id:"0",
                answer:"Ν.Δωδεκανήσου",
            },
            {
                id:"1",
                answer:"Ν.Κυκλάδων",
            },
            {
                id:"2",
                answer:"Ν.Θήρας",
            },
            {
                id:"3",
                answer:"Ν.Σύρου",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/generalQuestions/santorini.jpg'),
        result: "Ο Νομός Κυκλάδων είναι ένας νησιωτικός νομός που περιλαμβάνει όλα τα νησιά του συμπλέγματος των Κυκλάδων. Πρωτεύουσα είναι η Ερμούπολη, η οποία βρίσκεται στο νησί της Σύρου. \nΆλλα νησιά των Κυκλάδων είναι η Άνδρος, η Κέα, η Νάξος, η Τήνος κλπ."
    },
    {
        id: 5,
        question: "Που βρίσκεται το «Πέτρινο Δάσος»;",
        options:[
            {
                id:"0",
                answer:"Ν.Χανίων",
            },
            {
                id:"1",
                answer:"Ν.Πρέβεζας",
            },
            {
                id:"2",
                answer:"Ν.Ιωαννίνων",
            },
            {
                id:"3",
                answer:"Ν.Γρεβενών",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/generalQuestions/stone.jpg'),
        result: 'Το «Πέτρινο Δάσος» βρίσκεται στον Νομό Ιωαννίνων. Συγκεκριμένα στα Ζαγοροχώρια κοντά στο χωριό Μονοδένδρι.\nΠρόκειται για ασβεστολιθικούς, βραχώδεις σχηματισμούς που έχουν ηλικία από 160 έως 35 εκατομμύρια χρόνια. Η διάβρωση από τη βροχή και τον άνεμο έχει φέρει αυτό το αποτέλεσμα.'
    },
    {
        id: 6,
        question: "Σε ποιο γεωγραφικό διαμέρισμα ανήκει η Πρέβεζα;",
        options:[
            {
                id:"0",
                answer:"Ήπειρος",
            },
            {
                id:"1",
                answer:"Θεσσαλία",
            },
            {
                id:"2",
                answer:"Μακεδονία",
            },
            {
                id:"3",
                answer:"Στερεά Ελλάδα",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/generalQuestions/preveza.jpg'),
        result: 'Τα γεωγραφικά διαμερίσματα της Ελλάδας είναι εννιά: \nΘράκη, Μακεδονία, Θεσσαλία, Ήπειρος, Στερεά Ελλάδα, Πελοπόννησος, Κρήτη, Νησιά Αιγαίου και Νησιά Ιονίου. \nΗ Πρέβεζα ανήκει στην Ήπειρο.'
    },
    {
        id: 7,
        question: "Ποιος από τους παρακάτω νομούς έχει μεγαλύτερο πληθυσμό;",
        options:[
            {
                id:"0",
                answer:"Ν.Μαγνησίας",
            },
            {
                id:"1",
                answer:"Ν.Αιτωλ/νίας",
            },
            {
                id:"2",
                answer:"Ν.Δωδεκανήσου",
            },
            {
                id:"3",
                answer:"Ν.Ηλείας",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/generalQuestions/population.png'),
        result: 'Ο πληθυσμός του Ν.Αιτωλοακαρνανίας είναι περίπου 224.429 κάτοικοι.\nΟ πληθυσμός του Ν.Μαγνησίας είναι περίπου 206.995 κάτοικοι. \nΟ πληθυσμός του Ν.Ηλείας είναι περίπου 193.288 κάτοικοι. \nΟ πληθυσμός του Ν.Δωδεκανήσου είναι περίπου 190.071.'
    },
    {
        id: 8,
        question: "Ποιο από τα παρακάτω νησιά ΔΕΝ ανήκει στις Κυκλάδες;",
        options:[
            {
                id:"0",
                answer:"Κάρπαθος",
            },
            {
                id:"1",
                answer:"Μήλος",
            },
            {
                id:"2",
                answer:"Νάξος",
            },
            {
                id:"3",
                answer:"Τήνος",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/generalQuestions/cyclades.jpg'),
        result: 'Η Κάρπαθος ανήκει στο Νομό Δωδεκανήσου. \nΗ Μήλος, η Νάξος και η Τήνος ανήκουν στο Νομό Κυκλάδων.'
    },
    {
        id: 9,
        question: "Πως ονομάζεται η μεγαλύτερη λίμνη της Ελλάδας;",
        options:[
            {
                id:"0",
                answer:"Βόλβη",
            },
            {
                id:"1",
                answer:"Τριχωνίδα",
            },
            {
                id:"2",
                answer:"Βιστωνίδα",
            },
            {
                id:"3",
                answer:"Βεγορίτιδα",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/MorePhotos/lake2.jpg'),
        result: 'Η λίμνη Τριχωνίδα βρίσκεται στον Νομό Αιτωλοακαρνανίας και έχει έκταση 96,510 στρέμματα. \nΗ λίμνη Βόλβη βρίσκεται στον Νομό Θεσσαλονίκης και έχει έκταση 72,017 στρέμματα. \nΗ λίμνη Βιστωνίδα βρίσκεται στους Νομούς Ξάνθης και Ροδόπης, και έχει έκταση 54,000 στρέμματα. \nΗ λίμνη Βεγορίτιδα βρίσκεται στον Νομό Φλώρινας και έχει έκταση 53,968 στρέμματα. '
    },
    {
        id: 10,
        question: "Ποια είναι η μεγαλύτερη πόλη της Πελοποννήσου;",
        options:[
            {
                id:"0",
                answer:"Τρίπολη",
            },
            {
                id:"1",
                answer:"Καλαμάτα",
            },
            {
                id:"2",
                answer:"Κόρινθος",
            },
            {
                id:"3",
                answer:"Πύργος",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/generalQuestions/greece.jpg'),
        result: 'Η Καλαμάτα έχει πληθυσμό 54,100 κατοίκους. \nΗ Τρίπολη έχει πληθυσμό 30,866 κατοίκους. \nΗ Κόρινθος έχει πληθυσμό 30,176 κατοίκους. \nΟ Πύργος έχει πληθυσμό 24,359 κατοίκους. '
    },
    {
        id: 11,
        question: "Ποια από τις παρακάτω πόλεις βρίσκεται στην Θεσσαλία;",
        options:[
            {
                id:"0",
                answer:"Βέροια",
            },
            {
                id:"1",
                answer:"Κατερίνη",
            },
            {
                id:"2",
                answer:"Τρίκαλα",
            },
            {
                id:"3",
                answer:"Γιαννιτσά",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/generalQuestions/thessaly.jpeg'),
        result: 'Τα Τρίκαλα βρίσκονται στην Θεσσαλία. \nΗ Βέροια, η Κατερίνη και τα Γιαννιτσά βρίσκονται στην Μακεδονία.'
    },
    {
        id: 12,
        question: "Ποιο νησί αποκαλείται το νησί των Ιπποτών;",
        options:[
            {
                id:"0",
                answer:"Ρόδος",
            },
            {
                id:"1",
                answer:"Κέρκυρα",
            },
            {
                id:"2",
                answer:"Χίος",
            },
            {
                id:"3",
                answer:"Ζάκυνθος",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/generalQuestions/rod.jpg'),
        result: 'Η παλιά πόλη της Ρόδου είναι χτισμένη από τους Ιωαννίτες ιππότες τον 13ο αιώνα. Υπάρχουν γραπτές μαρτυρίες που αναφέρουν πως εδώ υπήρχε φρούριο το οποίο προστάτευε τον πληθυσμό από εχθρικές επιδρομές από τον 7ο ακόμα αιώνα.'
    },
    {
        id: 13,
        question: "Σε ποιο νομό βρίσκεται το Αρχαίο θέατρο της Επιδαύρου;",
        options:[
            {
                id:"0",
                answer:"Ν.Αρκαδίας",
            },
            {
                id:"1",
                answer:"Ν.Κορινθίας",
            },
            {
                id:"2",
                answer:"Ν.Αργολίδας",
            },
            {
                id:"3",
                answer:"Ν.Μεσσηνίας",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/generalQuestions/epid.jpg'),
        result: 'Το αρχαίο θέατρο της Επιδαύρου βρίσκεται στο νοτιοανατολικό άκρο του ιερού που ήταν αφιερωμένο στον θεραπευτή θεό της αρχαιότητας, τον Ασκληπιό, στο Ασκληπιείο Επιδαύρου. Βρίσκεται κοντά στο σημερινό Λυγουριό της Αργολίδας. Θεωρείται το τελειότερο αρχαίο ελληνικό θέατρο από άποψη ακουστικής και αισθητικής.'
    },
    {
        id: 14,
        question: "Με ποια από τις παρακάτω χώρες ΔΕΝ συνορεύει η Ελλάδα;",
        options:[
            {
                id:"0",
                answer:"Αλβανία",
            },
            {
                id:"1",
                answer:"Τουρκία",
            },
            {
                id:"2",
                answer:"Σερβία",
            },
            {
                id:"3",
                answer:"Βουλγαρία",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/generalQuestions/greece.jpg'),
        result: 'Η Ελλάδα συνορεύει με την Αλβανία, την Βόρειο Μακεδονία, τη Βουλγαρία και την Τουρκία.'
    },
    {
        id: 15,
        question: 'Με πόσες χώρες συνορεύει χερσαία η Ελλάδα;',
        options:[
            {
                id:"0",
                answer:"3",
            },
            {
                id:"1",
                answer:"2",
            },
            {
                id:"2",
                answer:"5",
            },
            {
                id:"3",
                answer:"4",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/MorePhotos/sinora.jpg'),
        result: 'Η Ελλάδα συνορεύει με 4 χώρες: την Αλβανία, την Βόρειο Μακεδονία, τη Βουλγαρία και την Τουρκία.'
    },
    { 
        id: 16,
        question: "Πως ονομάζεται η ψηλότερη κορυφή του Ολύμπου;",
        options:[
            {
                id:"0",
                answer:"Στεφάνι",
            },
            {
                id:"1",
                answer:"Μύτικας",
            },
            {
                id:"2",
                answer:"Κίσσαβος",
            },
            {
                id:"3",
                answer:"Σκολιό",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/generalQuestions/peak.jpg'),
        result: 'Ο Μύτικας είναι η ψηλότερη κορυφή της Ελλάδας. Γνωστή και ως «Πάνθεον», έχει υψόμετρο 2.919μ. \nΤο Στεφάνι, γνωστό και ως «ο Θρόνος του Δία», έχει υψόμετρο 2.909μ. \nΤο Σκολιό είναι δεύτερη σε ύψος κορυφή στα 2.912μ. \nΟ Κίσσαβος, γνωστός και με το όνομα Όσσα, βρίσκεται βορειοανατολικά του νομού Λάρισας απέναντι από τον Όλυμπο, με υψόμετρο στα 1.978μ.'
    },
    {
        id: 17,
        question: "Ποιο νησί αποκαλείται το νησί των Φαιάκων;",
        options:[
            {
                id:"0",
                answer:"Κεφαλλονιά",
            },
            {
                id:"1",
                answer:"Λευκάδα",
            },
            {
                id:"2",
                answer:"Κέρκυρα",
            },
            {
                id:"3",
                answer:"Ζάκυνθος",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/generalQuestions/corfu.jpg'),
        result: 'Στην ελληνική μυθολογία οι Φαίακες ήταν ένας λαός γνωστός (ιδιαίτερα από τον Όμηρο) για τη ναυτοσύνη του. Οι Φαίακες ήταν οι αγαπημένοι των θεών και φίλοι των ανθρώπων. Αναφέρεται ότι αρχικώς κατοικούσαν στην απομακρυσμένη Υπέρεια, στα πέρατα του κόσμου. Μια εποχή που βασιλιάς τους ήταν ο Ναυσίθοος, οι Φαίακες εκδιώχθηκαν από την Υπέρεια από τους Κύκλωπες και μετοίκησαν σε ένα νησί, τη Σχερία, που αποκλήθηκε από αυτούς και «Νήσος των Φαιάκων», το οποίο ο Θουκυδίδης επιβεβαιώνει ότι πρόκειται για τη σημερινή Κέρκυρα.'
    },
    {
        id: 18,
        question: "Ποιος είναι ο μεγαλύτερος ποταμός της Ελλάδας;",
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
                answer:"Αχελώος",
            },
            {
                id:"3",
                answer:"Πηνειός",
            },
        ],
        correctAnswerIndex: 0,
        img: require('../../assets/generalQuestions/river.jpg'),
        result: 'Ο Αλιάκμονας έχει μήκος 297χλμ. \nΟ Αχελώος έχει μήκος 220χλμ. \nΟ Πηνειός έχει μήκος 205χλμ. \nΟ Στρυμόνας έχει μήκος 118χλμ.'
    },
    {
        id: 19,
        question: "Που βρίσκεται η λίμνη Βεγορίτιδα;",
        options:[
            {
                id:"0",
                answer:"Θράκη",
            },
            {
                id:"1",
                answer:"Ήπειρος",
            },
            {
                id:"2",
                answer:"Μακεδονία",
            },
            {
                id:"3",
                answer:"Θεσσαλία",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/MorePhotos/lake2.jpg'),
        result: 'Η λίμνη Βεγορίτιδα είναι λίμνη της Μακεδονίας, και η τρίτη μεγαλύτερη λίμνη σε έκταση της Ελλάδας. '
    },
    {
        id: 20,
        question: "Πόσα τριεθνή σημεία έχει η Ελλάδα;",
        options:[
            {
                id:"0",
                answer:"1",
            },
            {
                id:"1",
                answer:"2",
            },
            {
                id:"2",
                answer:"3",
            },
            {
                id:"3",
                answer:"4",
            },
        ],
        correctAnswerIndex: 2,
        img: require('../../assets/generalQuestions/greece.jpg'),
        result: 'Η Ελλάδα έχει 3 τριεθνή σημεία: \n\n • Το «τριεθνές Έβρου», στα σύνορα της Ελλάδας, της Βουλγαρίας και της Τουρκίας. \n\n • Το «τριεθνές Μπέλλες», στα σύνορα Ελλάδας, της Βουλγαρίας και της Βόρειας Μακεδονίας. \n\n • Το «τριεθνές Μεγάλης Πρέσπας», στα σύνορα Ελλάδας, της Αλβανίας και της Βόρειας Μακεδονίας.'
    },
    {
        id: 21,
        question: "Σε ποιο νομό βρίσκονται τα Μετέωρα;",
        options:[
            {
                id:"0",
                answer:"Ν.Ιωαννίνων",
            },
            {
                id:"1",
                answer:"Ν.Τρικάλων",
            },
            {
                id:"2",
                answer:"Ν.Καρδίτσας",
            },
            {
                id:"3",
                answer:"Ν.Γρεβενών",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/meteora.jpg'),
        result: 'Τα Μετέωρα είναι ένα σύμπλεγμα από σκοτεινόχρωμους βράχους από ψαμμίτη οι οποίοι υψώνονται έξω από την Καλαμπάκα στη Θεσσαλία. Τα μοναστήρια των Μετεώρων, που είναι χτισμένα στις κορυφές κάποιων από τους βράχους, είναι σήμερα το δεύτερο σημαντικότερο μοναστικό συγκρότημα στην Ελλάδα, ύστερα από το Άγιο Όρος.'
    },
    {
        id: 22,
        question: "Σε ποιο νομό βρίσκεται το Μαντείο των Δελφών;",
        options:[
            {
                id:"0",
                answer:"Ν.Ευρυτανίας",
            },
            {
                id:"1",
                answer:"Ν.Βοιωτίας",
            },
            {
                id:"2",
                answer:"Ν.Φθιώτιδας",
            },
            {
                id:"3",
                answer:"Ν.Φωκίδας",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/generalQuestions/delphi.jpg'),
        result: 'Οι Δελφοί ήταν το σημαντικότερο μαντείο του αρχαιοελληνικού κόσμου. Εκεί έσπευδαν βασιλιάδες και νομοθέτες για να πάρουν χρησμό για τις κινήσεις τους, καθώς και πολλοί ακόμα λαοί της Ανατολικής Μεσογείου (Λύδοι, Φρύγες, Αιγύπτιοι κ.λπ.) για να ακούσουν τη γνώμη των θεών για τα ανθρώπινα καμώματά τους.'
    },
    {
        id: 23,
        question: "Που βρίσκεται το λιμνοσπήλαιο Μελισσάνης;",
        options:[
            {
                id:"0",
                answer:"Κέρκυρα",
            },
            {
                id:"1",
                answer:"Κεφαλλονιά",
            },
            {
                id:"2",
                answer:"Λευκάδα",
            },
            {
                id:"3",
                answer:"Ζάκυνθος",
            },
        ],
        correctAnswerIndex: 1,
        img: require('../../assets/generalQuestions/lakecave.jpg'),
        result: 'Μοναδικό γεωλογικό φαινόμενο, το Λιμνοσπήλαιο της Μελισσάνης βρίσκεται σε απόσταση 2 χιλ. βορειοδυτικά της Σάμης, στην Κεφαλλονιά.'
    },
    {
        id: 24,
        question: "Σε ποιο νομό βρίσκεται η παραλία της Βοϊδοκοιλιάς;",
        options:[
            {
                id:"0",
                answer:"Ν.Πρέβεζα",
            },
            {
                id:"1",
                answer:"Ν.Χανίων",
            },
            {
                id:"2",
                answer:"Ν.Λευκάδα",
            },
            {
                id:"3",
                answer:"Ν.Μεσσηνίας",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/generalQuestions/voidokilia.jpg'),
        result: 'Η παραλία της Βοϊδοκοιλιάς βρίσκεται στην δυτική πλευρά της Μεσσηνίας λίγα χιλιόμετρα από την Πύλο.'
    },
    {
        id: 25,
        question: "Πως αλλιώς ονομάζεται το Καστελόριζο;",
        options:[
            {
                id:"0",
                answer:"Τέλενδος",
            },
            {
                id:"1",
                answer:"Γαύδος",
            },
            {
                id:"2",
                answer:"Ψέριμος",
            },
            {
                id:"3",
                answer:"Μεγίστη",
            },
        ],
        correctAnswerIndex: 3,
        img: require('../../assets/generalQuestions/kaste.jpg'),
        result: 'Το Καστελλόριζο ή, επισήμως, η Μεγίστη είναι ελληνικό νησί των Δωδεκανήσων στο Λύκιο Πέλαγος στο γεωγραφικό διαμέρισμα των νησιών Αιγαίου. '
    },
]
export default questions1

