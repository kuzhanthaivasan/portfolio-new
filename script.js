// Function to show project details
function showDetails(title, description, url) {
    document.getElementById('project-title').textContent = title;
    document.getElementById('project-description').textContent = description;
    document.getElementById('project-link').href = url;
    document.getElementById('project-details').style.display = 'flex';
}

// Function to hide project details
function hideDetails() {
    document.getElementById('project-details').style.display = 'none';
}


// Function to animate progress bars
document.addEventListener('DOMContentLoaded', () => {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(bar => {
        const percentage = bar.getAttribute('data-skill');
        bar.style.width = `${percentage}%`;
    });
});


//new nav
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('open');
});

document.querySelectorAll('.dropdown-toggle').forEach(item => {
    item.addEventListener('click', function(event) {
        event.preventDefault();
        this.nextElementSibling.classList.toggle('show');
    });
});

document.querySelectorAll('.close-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.project-details').style.display = 'none';
    });
});

document.querySelectorAll('.view-more').forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.project-details').style.display = 'flex';
    });
});

//fade in fade out

document.addEventListener('DOMContentLoaded', () => {
    // Function to handle the intersection of elements
    const handleIntersection = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                entry.target.classList.remove('hidden');
            } else {
                entry.target.classList.add('hidden');
                entry.target.classList.remove('visible');
            }
        });
    };

    // Create an intersection observer
    const observer = new IntersectionObserver(handleIntersection, {
        threshold: 0.1 // Adjust this value as needed
    });

    // Target elements for animation
    document.querySelectorAll('.fade-in, .fade-out').forEach(element => {
        observer.observe(element);
    });
});

/*border-radius: 20px;
    height: 40px;
    width:50px;*/


// Get all contact items
const contactItems = document.querySelectorAll('.contact-item');

// Add a click event listener to each contact item
contactItems.forEach(item => {
    item.addEventListener('click', function() {
        // Add 'clicked' class for the scale effect
        this.classList.add('clicked');
        
        // Optionally, add 'bounce' class for bounce effect
        this.classList.add('bounce');

        // Remove the 'clicked' and 'bounce' class after the animation duration
        setTimeout(() => {
            this.classList.remove('clicked', 'bounce');
        }, 500); // Adjust time to match the animation duration
    });
});


// Toggle the mobile menu
document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.nav-links').classList.toggle('open');
});




document.getElementById('revealBtn').addEventListener('click', function() {
    const resumeContainer = document.getElementById('resumeContainer');
    if (resumeContainer.classList.contains('hidden')) {
        resumeContainer.classList.remove('hidden');
        this.textContent = 'Hide Resume';
    } else {
        resumeContainer.classList.add('hidden');
        this.textContent = 'View Resume';
    }
});





