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