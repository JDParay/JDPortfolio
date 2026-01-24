function showSection(sectionId) {
    const ach = document.getElementById('achievements');
    const proj = document.getElementById('projects');
    
    // Hide both first
    ach.style.display = 'none';
    proj.style.display = 'none';
    
    // Remove animation class to reset it
    ach.classList.remove('animate-in');
    proj.classList.remove('animate-in');

    // Show the selected one and add the animation class
    const activeSection = document.getElementById(sectionId);
    activeSection.style.display = 'block';
    
    // Use a tiny timeout so the browser notices the class was re-added
    setTimeout(() => {
        activeSection.classList.add('animate-in');
    }, 10);

    // Toggle button active states
    document.getElementById('btn-ach').classList.toggle('active', sectionId === 'achievements');
    document.getElementById('btn-proj').classList.toggle('active', sectionId === 'projects');
}
