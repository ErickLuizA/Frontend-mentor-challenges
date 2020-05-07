const projects = [
    {
        name: 'four-card-feature-section-master'
    },
    {
        name: 'base-apparel-coming-soon-master'
    },
    {
        name: 'intro-component-with-signup-form-master'
    }
];

const list = document.querySelector('.list');

projects.forEach(({name}) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <a href = './${name}/index.html'>
            <img src = './${name}/design/desktop-preview.jpg' alt = '${name}'>
            <p> ${projectName(name)}  </p>
        </a>
    `

    list.appendChild(listItem);
});


function projectName(name) {
    return name.split(' ').map(word => word[0].toUpperCase() + word.slice(1))
}