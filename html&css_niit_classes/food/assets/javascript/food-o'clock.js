const header = document.querySelector("header");

// Use 'mouseenter' to fire the event only when the mouse enters the header
header.addEventListener("mouseenter", (event) => {
    // Add the class to the header itself, not event.target
    header.classList.add("height120");
});

header.addEventListener("mouseleave", (event) => {
    header.classList.remove("height120");
});

// --- Hero Section Click Event ---

// Select the hero foreground element once and reuse it
const heroForeground = document.querySelector("#heroforeground");

if (heroForeground) {
    // Store the original HTML to easily switch back.
    const originalHeroHTML = heroForeground.innerHTML;
    const newHeroHTML = `
        <h2 style="font-size: 3rem; color: white;"> Hello 👋🏼</h2> 
        <p style="font-size: 2rem; color: white;">Glad to see you here! What will you be eating today?</p> 
        <p style="font-size: 2rem; color: white;">Check out our <a href="menu.html" style="color: white; text-decoration: underline;" target="_blank">Menu</a> for delicious options!</p>
    `;

    // Add a single, combined click listener to the container.
    heroForeground.addEventListener("click", (event) => {
        // Check if the current content is the original by comparing the trimmed HTML
        const isOriginal = heroForeground.innerHTML.trim() === originalHeroHTML.trim();

        // Toggle the HTML content
        heroForeground.innerHTML = isOriginal 
        ? newHeroHTML 
        : originalHeroHTML;

        // Also toggle the background color classes
        heroForeground.classList.toggle("bg-red");
        heroForeground.classList.toggle("bg-white");
    });
}
