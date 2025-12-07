// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    handleSectionVisibility();
    renderLeaderboard();
    renderAlivePlayers();
    renderEliminatedPlayers();
    renderConstitution();
    implementSmoothScrolling();
    handleActiveNavLink();
});

// Handle Section Visibility Based on Configuration
function handleSectionVisibility() {
    const config = sectionConfig;
    for (const sectionId in config) {
        if (!config[sectionId]) {
            // Hide the section
            const section = document.getElementById(sectionId);
            if (section) {
                section.style.display = 'none';
            }
            // Remove from navigation menu
            const navLink = document.querySelector(`nav a[href="#${sectionId}"]`);
            if (navLink) {
                navLink.parentElement.style.display = 'none';
            }
        }
    }
}

// Render Leaderboard
function renderLeaderboard() {
    const leaderboardGrid = document.querySelector('.leaderboard-grid');
    if (!leaderboardGrid) return;

    // Sort assassins by kills in descending order and filter alive
    const sortedAssassins = assassins
        .sort((a, b) => {
            if (a.name === 'Kasra') return -1;
            if (b.name === 'Kasra') return 1;
            return b.kills - a.kills;
        });

    const topAssassins = [];
    let lastKills = null;

    for (let i = 0; i < sortedAssassins.length; i++) {
        if (i < 5 || sortedAssassins[i].kills === lastKills) {
            topAssassins.push(sortedAssassins[i]);
            lastKills = sortedAssassins[i].kills;
        } else {
            break;
        }
    }

    topAssassins.forEach(assassin => {
        const playerCard = createPlayerCard(assassin, true, !assassin.alive);
        leaderboardGrid.appendChild(playerCard);
    });
}

// Render Alive Players
function renderAlivePlayers() {
    const aliveGrid = document.querySelector('.alive-grid');
    if (!aliveGrid) return;

    const aliveAssassins = assassins.filter(assassin => assassin.alive);

    aliveAssassins.forEach(assassin => {
        const playerCard = createPlayerCard(assassin, false);
        aliveGrid.appendChild(playerCard);
    });
}

// Render Eliminated Players
function renderEliminatedPlayers() {
    const eliminatedGrid = document.querySelector('.eliminated-grid');
    if (!eliminatedGrid) return;

    const eliminatedAssassins = assassins.filter(assassin => !assassin.alive);

    eliminatedAssassins.forEach(assassin => {
        const playerCard = createPlayerCard(assassin, false, true);
        eliminatedGrid.appendChild(playerCard);
    });
}

// Render Constitution Content
function renderConstitution() {
    const constitutionSection = document.querySelector('.constitution-section p');
    if (!constitutionSection) return;

    // how to center a text <em>something</em> in the middle of the page
    // the full answer is: <p style="text-align: center;"><em>something</em></p>

    const constitutionText = `
        <p style="text-align: center;"><strong>Constitution of the Assassin's Creed</strong>

        <br><br>
        <em>Preamble</em>
        <br>

        In the darkened alleys and the shadowed corridors of the campus, the Assassins' Creed shall reign supreme.
        The brotherhood of assassins shall uphold the sacred principles of loyalty, silence, and respect as the foundation of their creed, as it is hereby decreed in this Constitution.

        <br><br>
        <em>Article I: The Code of Honor</em>
        <br>

        1. <strong>Loyalty</strong>: Every assassin shall uphold the principles of loyalty to the Continental Grounds, ensuring that no violence spills beyond its sacred boundaries.<br>
        2. <strong>Silence</strong>: Utter silence shall be maintained regarding the identities of the assassins' targets. Whispers and rumors are tools of the weak.<br>
        3. <strong>Respect</strong>: Each assassin commands respect, and any affront or challenge to another's honor shall be met with deadly consequence.<br>

        <br>
        <em>Article II: Rules of Engagement</em>
        <br>

        1. <strong>Continental Grounds</strong>: No blood shall be shed on the Continental Grounds, a neutral territory where all assassins convene in peace as marked in green on the map.<br>
        1. <strong>No Collateral Damage</strong>: Collateral damage is forbidden. Only designated targets shall be engaged, while preserving the integrity of the Continental Grounds.<br>
        3. <strong>Final Rulings</strong>: The Continental Council shall have the final say in all matters of dispute with regard to illegal assassination attempts.<br>
        4. <strong>Weapons</strong>: Assassin's choice. All weapons are permitted, but discretion is advised to avoid unnecessary attention. Weapons such as water balloons, guns, and other long and short range weapons are incouraged.<br>

        <br>
        <em>Article III: Governance</em>
        <br>
        1. <strong>Continental Council</strong>: The highest authority within the Assassins' Creed, responsible for overseeing missions, resolving disputes, and upholding the Constitution.<br>
        2. <strong>Mission Briefings</strong>: The Continental Council shall provide mission briefings, outlining targets, to all assassins. Upon completion of a mission, an assassin must persue the mission of its fallen target.<br>
        3. <strong>Proof of Assassination</strong>: Assassins must provide proof of successful assassinations to the Continental Council for verification in the form of a photo or video with the assassinated target in the frame.<br>

        </p>
    `;

    constitutionSection.innerHTML = constitutionText;
}

// Create Player Card Element
function createPlayerCard(assassin, includeKills, isEliminated = false) {
    const cardDiv = document.createElement('div');
    cardDiv.classList.add('player-card');

    const avatarImg = document.createElement('img');
    avatarImg.src = 'images/assassins/' + assassin.file_name;
    avatarImg.alt = assassin.name;
    if (isEliminated) {
        avatarImg.classList.add('eliminated-avatar');
    }

    const nameHeading = document.createElement('h3');
    nameHeading.textContent = assassin.name;

    cardDiv.appendChild(avatarImg);
    cardDiv.appendChild(nameHeading);

    if (includeKills) {
        const killsPara = document.createElement('p');
        killsPara.textContent = `Kills: ${assassin.kills}`;
        cardDiv.appendChild(killsPara);
    }

    return cardDiv;
}

// Implement Smooth Scrolling with Easing
function implementSmoothScrolling() {
    const navLinks = document.querySelectorAll('nav a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (!targetSection) return; // Exit if target section doesn't exist

            const navHeight = document.querySelector('nav').offsetHeight;
            const elementPosition = targetSection.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - navHeight;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        });
    });
}

// Handle Active Navigation Link Highlighting
function handleActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 150;
            if (pageYOffset >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
}
