function showSection(sectionId) {
    const ach = document.getElementById('achievements');
    const proj = document.getElementById('projects');
    
    ach.style.display = (sectionId === 'achievements') ? 'block' : 'none';
    proj.style.display = (sectionId === 'projects') ? 'block' : 'none';
    
    document.getElementById('btn-ach').classList.toggle('active', sectionId === 'achievements');
    document.getElementById('btn-proj').classList.toggle('active', sectionId === 'projects');
}
