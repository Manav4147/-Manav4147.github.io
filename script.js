document.addEventListener('DOMContentLoaded', function() {
    // Content Replacement
    document.getElementById('link1').addEventListener('click', function() {
        var section1 = document.getElementById('section1');
        if (section1) {
            section1.innerHTML = '<h2>Section 1 Updated</h2><p>New content for Section 1.</p>';
        } else {
            console.error('Target section not found: section1');
        }
    });

    // Style Alteration
    var isDarkmodeOn = false;

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        document.getElementById('section1').classList.toggle('dark-mode-section');
        isDarkmodeOn = !isDarkmodeOn;
    }

   // Content Replacement - Sidebar Item Click
   document.getElementById('sidebar').addEventListener('click', function (event) {
    if (event.target.classList.contains('sidebar-item')) {
        var targetSectionId = event.target.getAttribute('data-target');
        var targetSection = document.getElementById(targetSectionId);

        if (targetSection) {
            document.querySelectorAll('section').forEach(function (section) {
                section.classList.remove('highlight');
            });

            targetSection.classList.add('highlight');
        } else {
            console.error('Target section not found:', targetSectionId);
        }
    }
});

// Variables to store original and new content
var originalContent = '<h2>Country Roads (Take Me Home)</h2><p><b>1. Country Roads (Take Me Home)<i>- Artist: John Denver</i></b> Description: "Country Roads (Take Me Home)" is an iconic folk-country song by John Denver, released in 1971. It has become a timeless classic, known for its heartfelt lyrics and Denver\'s soulful delivery. The song captures the yearning for a place called home, specifically West Virginia, with vivid imagery of winding roads, mountains, and a sense of belonging. The narrative resonates with the universal desire for connection to one\'s roots and the comfort found in familiar landscapes. Denver\'s gentle voice and the song\'s uplifting melody contribute to its enduring popularity, making it a beloved anthem that transcends generations.</p>';
var newContent = '<h2>More music suggestions</h2><p><b>"Bohemian Rhapsody"<i> Artist: Queen<br><br><b>"Imagine"<i> Artist: John Lennon <br><br><b>"Like a Rolling Stone"<i> Artist: Bob Dylan <br><br><b>"What\'s Going On"<i> Artist: Marvin Gaye <br><br><b>"I Want to Hold Your Hand"<i> Artist: The Beatles<br><br><b>"Hotel California"<i> Artist: Eagles<br><br><b>"Billie Jean"<i> Artist: Michael Jackson</p>';

// Content Replacement - Allow the user to change content dynamically
var isOriginalContent = true; // Flag to track content state

var changeContentButton = document.getElementById('changeContentButton');
changeContentButton.addEventListener('click', function () {
    var section1 = document.getElementById('section1');
    if (section1) {
        if (isOriginalContent) {
            section1.innerHTML = newContent;
            changeContentButton.textContent = 'Back'; 
        } else {
            section1.innerHTML = originalContent;
            changeContentButton.textContent = 'New'; 
        }
        isOriginalContent = !isOriginalContent; 
    } else {
        console.error('Target section not found: section1');
    }
});


// Element Creation and Deletion - Add new item to the sidebar
document.getElementById('addItemButton').addEventListener('click', function () {
    var newSidebarItem = document.createElement('li');
    newSidebarItem.classList.add('sidebar-item');
    newSidebarItem.textContent = 'New Song';

    // Add a data-target attribute to uniquely identify the corresponding section
    newSidebarItem.setAttribute('data-target', 'newSection');

    // Append the new item to the sidebar
    document.querySelector('aside ul').appendChild(newSidebarItem);
});

// Element Creation and Deletion - Remove existing item from the sidebar
document.getElementById('removeItemButton').addEventListener('click', function () {
    var lastSidebarItem = document.querySelector('aside ul li:last-child');
    if (lastSidebarItem) {
        // Remove the last item from the sidebar
        lastSidebarItem.remove();
    } else {
        console.error('No items to remove in the sidebar');
    }
});


    // Event Handling
    document.querySelector('header').addEventListener('mouseover', function() {
        alert('No Fly Zone!');
    });

   
    window.toggleDarkMode = toggleDarkMode;
});
