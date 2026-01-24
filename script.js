function showSection(sectionId) {
    const ach = document.getElementById('achievements');
    const proj = document.getElementById('projects');
    
    ach.style.display = 'none';
    proj.style.display = 'none';
    
    ach.classList.remove('animate-in');
    proj.classList.remove('animate-in');

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = 'block';
        
        void activeSection.offsetWidth; 
        
        activeSection.classList.add('animate-in');
    }

    const btnAch = document.getElementById('btn-ach');
    const btnProj = document.getElementById('btn-proj');
    
    if (btnAch && btnProj) {
        btnAch.classList.toggle('active', sectionId === 'achievements');
        btnProj.classList.toggle('active', sectionId === 'projects');
    }
}

window.onload = () => {
    showSection('achievements');
    
    const webSection = document.querySelector('.websites-section');
    if (webSection) {
        webSection.classList.add('animate-in');
    }
};
