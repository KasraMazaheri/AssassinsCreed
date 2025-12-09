// Initial List of Assassins
const assassins = [
    { name: 'Kasra', file_name: 'Kasra_Mazaheri.jpg', kills: 0, alive: true },
    { name: 'Adan', file_name: 'Adan Abu Naaj.jpeg', kills: 0, alive: true },
    { name: 'Adem', file_name: 'Adem_Bizid.jpg', kills: 1, alive: true },
    { name: 'Ashley', file_name: 'Ashley_Gallitto.JPG', kills: 0, alive: true },
    { name: 'Ayman', file_name: 'Ayman_Riad.jpg', kills: 0, alive: true },
    { name: 'Felipe', file_name: 'Felipe_Caicedo.jpg', kills: 0, alive: false },
    { name: 'Felix', file_name: 'Felix_Watson.jpg', kills: 0, alive: true },
    { name: 'Firas', file_name: 'Firas_Khalifa.jpg', kills: 0, alive: true },
    { name: 'Gabriela', file_name: 'Gabriela.jpg', kills: 1, alive: true },
    { name: 'Hanan', file_name: 'Hanan_Habahbeh.JPG', kills: 2, alive: true },
    { name: 'Hemetrio', file_name: 'Hemetrio.jpeg', kills: 0, alive: true },
    { name: 'Ionut', file_name: 'Ionut_Stan.JPG', kills: 0, alive: true },
    { name: 'Isabella', file_name: 'Isabella_Perez.jpg', kills: 0, alive: false },
    { name: 'Issa', file_name: 'Issa.JPG', kills: 1, alive: false },
    { name: 'Jayleen', file_name: 'Jayleen_Perez.PNG', kills: 0, alive: true },
    { name: 'Joshua', file_name: 'Joshua_Isaacs.jpg', kills: 0, alive: true },
    { name: 'Kai', file_name: 'Kai_Beasley.JPG', kills: 0, alive: false },
    { name: 'Margarita', file_name: 'Margarita_Carranza.jpg', kills: 0, alive: true },
    { name: 'Mensur', file_name: 'Mensur.jpeg', kills: 0, alive: false },
    { name: 'Nameer', file_name: 'Nameer.JPG', kills: 0, alive: true },
    { name: 'Natalia', file_name: 'Natalia_Buchajska.jpg', kills: 0, alive: false },
    { name: 'Ola', file_name: 'Ola_Kaminska.jpg', kills: 0, alive: true },
    { name: 'Olya', file_name: 'Olya_Volianyk.JPG', kills: 0, alive: true },
    { name: 'Paulo', file_name: 'Paulo_Silva.JPG', kills: 0, alive: true },
    { name: 'Pravalika', file_name: 'Pravalika.jpeg', kills: 0, alive: true },
    { name: 'Rafael', file_name: 'Rafael_Ribeiro.jpg', kills: 0, alive: true },
    { name: 'Saad', file_name: 'Saad_Thaher.jpg', kills: 1, alive: true },
    { name: 'Sara', file_name: 'Sara_Akasha.jpeg', kills: 0, alive: true },
    { name: 'Sara', file_name: 'Sara_Ramirez.JPG', kills: 0, alive: true },
    { name: 'Sophia', file_name: 'Sophia_Humpeler.jpg', kills: 0, alive: true },
    { name: 'Tim', file_name: 'Tim_Hindges.jpg', kills: 0, alive: true },
    { name: 'Varun', file_name: 'Varun_sangtani.jpeg', kills: 0, alive: true },
    { name: 'Yusuf', file_name: 'Yusuf_Syed.jpg', kills: 1, alive: true },
    { name: 'Zsofia', file_name: 'Zsofia_Keresztely.jpg', kills: 0, alive: false }
];


// Function to Get Avatar Address by Assassin's Name
function getAvatarByName(name) {
    if (name === 'Kasra') {
        return 'images/avatars/avatar1.png';
    }

    const avatarOptions = [
        // 'images/avatars/avatar1.png',
        'images/avatars/avatar2.png',
        'images/avatars/avatar3.png',
        'images/avatars/avatar4.png'
    ];
    // Simple hash to assign avatar based on name
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash += name.charCodeAt(i);
    }
    const index = hash % avatarOptions.length;
    return avatarOptions[index];
}

// Configuration for Sections (Enabling/Disabling)
const sectionConfig = {
    'home': true,
    'killofday': true,
    'leaderboard': true,
    'alive': true,
    'eliminated': true,
    'constitution': true,
    'map': true,
    'killmap': false // This section is no longer in the menu
};
