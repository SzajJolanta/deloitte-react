// Zadanie 2

const team = document.querySelectorAll('#team li');

const teamArr = Array.from(team);

const mappedTeam = teamArr
    .map(member => ({
        name: member.innerText,
        age: parseInt(member.dataset.age, 10),
    }));

mappedTeam
    .filter(member => member.age > 25 && member.age < 35);

const findOldestPerson = members => {
    const maxAge = Math.max(...members.map(m => m.age));

    return members.find(m => m.age === maxAge);
}

const sumAgeOfTeamMembers = members => members.reduce((prevSum, currentMember) => prevSum + currentMember.age, 0);

// Zadanie 3

const createTeamMemberDetails = ({ name, age }) => `${name} ma ${age} lat`;