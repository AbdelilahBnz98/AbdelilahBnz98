document.addEventListener('DOMContentLoaded', function () {
    const skillsContainer = document.getElementById('skills-container');
    const skillsList = skillsContainer.querySelector('ul');
  
    // Add a bounce animation to each skill when the page loads
    skillsList.childNodes.forEach((skill, index) => {
      skill.style.animation = `bounceIn 0.5s ease-in-out ${index * 0.1}s`;
    });
  });
  