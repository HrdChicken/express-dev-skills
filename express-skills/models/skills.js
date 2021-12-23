const skills = [
    {id: 184393, skill: 'javascript', truth: true},
    {id: 123244, skill: 'css', truth: true},
    {id: 138947, skill: 'html', truth: true},
    {id: 128079, skill: 'express', truth: true}
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteUno,
};

function getAll(){
    return skills;
};

function getOne(id){
    return skills.find(skill => skill.id === parseInt(id));
};

function create(skill){
    skill.id = Date.now() % 1000000;
    skill.done = false;
    skills.push(skill)
};

function deleteUno(id){
    const idx = skills.findIndex(skill => skill.id === parseInt(id));
    skills.splice(idx, 1);
}