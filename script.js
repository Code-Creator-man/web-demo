document.addEventListener('DOMContentLoaded', function() {
    // This ensures the script runs only after the entire HTML document is loaded.

    // 1. Update Current Year in Footer
    const currentYearSpan = document.getElementById('current-year');
    if (currentYearSpan) { // Check if the element exists
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // 2. Skill Description Interaction
    const skillList = document.getElementById('skill-list');
    const skillDescription = document.getElementById('skill-description');

    // Define skill descriptions
    const skillsData = {
        'HTML': 'HyperText Markup Language: The backbone of all web pages.',
        'CSS': 'Cascading Style Sheets: Used for styling the look and feel of web pages.',
        'JavaScript': 'A programming language that enables interactive web pages.',
        'Web Design': 'The process of creating the visual elements and layout of a website.'
    };

    if (skillList && skillDescription) {
        skillList.addEventListener('click', function(event) {
            // Check if a list item (li) was clicked
            if (event.target.tagName === 'LI') {
                const skillName = event.target.dataset.skill; // Get the skill name from the data-skill attribute

                // Update the description based on the clicked skill
                if (skillsData[skillName]) {
                    skillDescription.textContent = skillsData[skillName];
                } else {
                    skillDescription.textContent = 'Click on a skill to see its description!';
                }
            }
        });

        // Optionally, clear description if clicking outside a skill (e.g., on the ul itself)
        // Or you might want to set a default message on page load.
        // skillDescription.textContent = 'Click on a skill to learn more!';
    }
});