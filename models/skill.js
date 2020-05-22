const skills = [
    {id:1, skill: 'HTML', learned: true},
    {id:2, skill: 'CSS', learned: true},
    {id:3, skill: 'JavaScript', learned: true},
    {id:4, skill: 'Node', learned: false},
    {id:5, skill: 'Express', learned:false},
    {id:6, skill: 'MongoDB', learned:false}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne
};

function getAll() {
    return skills;
};

function getOne(id) {
    return skills.find(skill => skill.id === parseInt(id));
};

function create(skill) {
    skill.id = skills.length + 1;
    skill.learned = false;
    skills.push(skill);
};

function deleteOne(id) {
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
};