const addMember = (member) => {
    const memberList = document.getElementById('memberList');
    console.log(`${member} added`)
}

const squareUp = () => {
    console.log("square up")
}

const showMemberInput = () => {
    const membersList = document.getElementById('addMember');

    const memberEntry = document.createElement('div');
    memberEntry.className = 'member-entry';

    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'member-input';
    input.placeholder = 'Enter member name';

    const addButton = document.createElement('button');
    addButton.textContent = '+';
    addButton.className = 'add-button'

    addButton.onclick = () => {
        addMember(input.value);
    };

    memberEntry.appendChild(input);
    memberEntry.appendChild(addButton);
    membersList.appendChild(memberEntry);
}