// Initial List of Assassins
const assassins = [
    { name: 'Kasra', kills: 0, alive: true },
    { name: 'Arusha', kills: 0, alive: true },
    { name: 'Romina', kills: 0, alive: true },
    { name: 'Josh', kills: 0, alive: true },
    { name: 'Olya', kills: 0, alive: true },
    { name: 'Ashley', kills: 0, alive: true },
    { name: 'Ola', kills: 0, alive: true },
    { name: 'Omar', kills: 0, alive: true },
    { name: 'Saad', kills: 0, alive: true },
    { name: 'Olivia', kills: 0, alive: true },
    { name: 'Sofia', kills: 0, alive: true },
    { name: 'Angeles', kills: 0, alive: true },
    { name: 'Pravi', kills: 0, alive: true },
    { name: 'Nevena', kills: 0, alive: true },
    { name: 'Kizito', kills: 0, alive: true },
    { name: 'Artem', kills: 0, alive: true },
    { name: 'Dila', kills: 0, alive: true },
    { name: 'Paulo', kills: 0, alive: true },
    { name: 'Fidan', kills: 0, alive: true },
    { name: 'Margarita', kills: 0, alive: true },
    { name: 'Issa', kills: 0, alive: true },
    { name: 'Jakob', kills: 0, alive: true },
    { name: 'Isabella', kills: 0, alive: true },
    { name: 'Holly', kills: 0, alive: true },
    { name: 'Adan', kills: 0, alive: true },
    { name: 'Fabiana', kills: 0, alive: true },
    { name: 'Nour', kills: 0, alive: true }
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
    'killofday': false,
    'leaderboard': true,
    'alive': true,
    'eliminated': false,
    'constitution': true,
    'map': true,
    'killmap': false // This section is no longer in the menu
};
