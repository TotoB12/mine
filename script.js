document.addEventListener('DOMContentLoaded', function() {
    // Get screen elements
    const mainMenu = document.getElementById('main-menu');
    const worldSelect = document.getElementById('world-select');
    const gameWorld = document.getElementById('game-world');
    
    // Get button elements
    const singleplayerBtn = document.getElementById('singleplayer-btn');
    const backToMenuBtn = document.getElementById('back-to-menu-btn');
    const createWorldBtn = document.getElementById('create-world-btn');
    const exitWorldBtn = document.getElementById('exit-world-btn');
    
    // Navigation functions
    function showScreen(screen) {
        // Hide all screens
        mainMenu.classList.remove('active');
        worldSelect.classList.remove('active');
        gameWorld.classList.remove('active');
        
        // Show the selected screen
        screen.classList.add('active');
    }
    
    // Button click event listeners
    singleplayerBtn.addEventListener('click', function() {
        showScreen(worldSelect);
    });
    
    backToMenuBtn.addEventListener('click', function() {
        showScreen(mainMenu);
    });
    
    createWorldBtn.addEventListener('click', function() {
        showScreen(gameWorld);
    });
    
    exitWorldBtn.addEventListener('click', function() {
        showScreen(mainMenu);
    });
    
    // Sound effects
    function playButtonSound() {
        // In a real implementation, you would add sound effects here
    }
    
    // Add click sound to all buttons
    const allButtons = document.querySelectorAll('button:not(.disabled)');
    allButtons.forEach(button => {
        button.addEventListener('click', playButtonSound);
    });
    
    // Add hover effect to simulate Minecraft's button behavior
    allButtons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('disabled')) {
                // In a real implementation, you would add hover sound here
            }
        });
    });
});