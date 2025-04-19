const mockPlayers = [
    {
      name:  "Κουκουβαγοχαμόγελο",
      img: "https://images.unsplash.com/photo-1555677284-6a6f971638e0?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      // img: "https://images.unsplash.com/photo-1563089145-599997674d42?q=80&w=2070&auto=format&fit=crop"
    },
    {
      name: "Αστραπόγατος",
      img: "https://images.unsplash.com/photo-1685017773914-fe88140e2e8f?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Γατοπαργαλένιος",
      img: "https://images.unsplash.com/photo-1625159956429-0a9ef6b510d6?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Σαυροκατακτητής",
      img: "https://images.unsplash.com/photo-1504450874802-0ba2bcd9b5ae?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Κοτομπουκιάς",
      img: "https://images.unsplash.com/photo-1599053776350-21c5e31dd1f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Γοργομαχητής",
      img: "https://images.unsplash.com/photo-1742390003820-27d480d1c8ab?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Μυθοπλάστης",
      img: "https://images.unsplash.com/photo-1742277666303-bbba7fa3fecf?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Χιονοδράκος",
      img: "https://images.unsplash.com/photo-1742506261388-4f5a6857d6c4?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Φιδόκαρδος",
      img: "https://images.unsplash.com/photo-1741851374430-d242e0dcd70c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Δελφινοκαβαλάρης",
      img: "https://images.unsplash.com/photo-1743041095820-3e09632071e1?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Σαλιγκαρομάχος",
      img: "https://images.unsplash.com/photo-1741230297079-55b8133ab5ae?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Τερατοκυνηγός",
      img: "https://images.unsplash.com/photo-1740188305229-63c68ef04712?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Γιγαντοδαμαστής",
      img: "https://images.unsplash.com/photo-1591824438708-ce405f36ba3d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Σκιεροδρόμος",
      img: "https://images.unsplash.com/photo-1574870111867-089730e5a72b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Καρβουνόφτερος",
      img: "https://images.unsplash.com/photo-1484406566174-9da000fda645?q=80&w=1889&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Φανταρομάχος",
      img: "https://images.unsplash.com/photo-1574068468668-a05a11f871da?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Γνώστης123",
      img: "https://images.unsplash.com/photo-1541364983171-a8ba01e95cfc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Σοφός_Νους",
      img: "https://images.unsplash.com/photo-1505628346881-b72b27e84530?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Μυαλοπλάνο",
      img: "https://plus.unsplash.com/premium_photo-1664299631876-f143dc691c4d?q=80&w=1994&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Εξυπνάκιας",
      img: "https://images.unsplash.com/photo-1469598614039-ccfeb0a21111?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "ΤσακΜπαμ",
      img: "https://images.unsplash.com/photo-1472457897821-70d3819a0e24?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Απαντητής",
      img: "https://plus.unsplash.com/premium_photo-1664539422574-59338896fb11?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Ζήνων_Quiz",
      img: "https://plus.unsplash.com/premium_photo-1664110690576-d815d13b8b8f?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Σπαρτοκουΐζ",
      img: "https://plus.unsplash.com/premium_photo-1681488094619-ec7ca2a39b07?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Νοητικός_Ζ",
      img: ""
    },
    {
      name: "Κουΐζολόγος",
      img: "https://images.unsplash.com/photo-1565551223391-be988013ee6d?q=80&w=1988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Μέγας_Σωκράτης",
      img: "https://plus.unsplash.com/premium_photo-1661926757229-f45f031624c5?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Νοημοσύνης",
      img: "https://images.unsplash.com/photo-1508138221679-760a23a2285b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Κουιζότιτος",
      img: "https://images.unsplash.com/photo-1494253109108-2e30c049369b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "ΣκέψουΜε",
      img: "https://plus.unsplash.com/premium_photo-1680497811614-4f93025d7e57?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Γρήγορο_Μυαλό",
      img: "https://images.unsplash.com/photo-1518895949257-7621c3c786d7?q=80&w=1976&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Αίνιγμας",
      img: "https://plus.unsplash.com/premium_photo-1666901328734-3c6eb9b6b979?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Κουίζορας",
      img: "https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Μάστερ_Νου",
      img: "https://images.unsplash.com/photo-1429087969512-1e85aab2683d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Σβέλτος ",
      img: "https://images.unsplash.com/photo-1513151233558-d860c5398176?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      name: "Κλικ_και_Σωστά",
      img: "https://images.unsplash.com/photo-1577401239170-897942555fb3?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
   
    // "Γατοπαργαλένιος",
    // "Σαυροκατακτητής",
    // "Δρακοφωτιάς",
    // "Bob",
    // "Charlie",
    // "David",
    // "Emma",
    // "Frank",
    // "Grace",
    // "Hannah",
    // "Ian",
    // "Jack",
    // "Kelly",
    // "Liam",
    // "Mia",
    // "Nathan",
    // "Olivia",
    // "Peter",
    // "Quinn",
    // "Rachel",
    // "Steve",
    // "Tina",
  ];

  export default mockPlayers