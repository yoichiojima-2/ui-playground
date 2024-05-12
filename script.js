const toggleMemberInput = () => {
  const memberEntry = document.getElementById("memberEntry");
  memberEntry ? hideMemberInput() : showMemberInput();
};


const showMemberInput = () => {
  const membersList = document.getElementById("addMember");

  const memberEntry = document.createElement("div");
  memberEntry.id = "memberEntry";

  const input = document.createElement("input");
  input.id = "memberInput";
  input.type = "text";
  input.className = "member-input";
  input.placeholder = "enter name to add";

  const addButton = document.createElement("button");
  addButton.id = "memberAddButton";
  addButton.textContent = "+";

  addButton.onclick = () => {
    addMember(input.value);
  };

  memberEntry.appendChild(input);
  memberEntry.appendChild(addButton);
  membersList.appendChild(memberEntry);
};


const hideMemberInput = () => {
  const membersList = document.getElementById("addMember");
  membersList.innerHTML = "";
};


const addMember = (name) => {
  console.log(`adding member ${name}`)
  if (!name) {
    console.log("No member name provided");
    return;
  }

  const nameList = document.getElementById("memberList");

  const container = document.createElement("div");
  container.id = `${name}Container`;
  container.className = "member-container";

  const addedMember = document.createElement("p");
  addedMember.id = `${name}Name`;
  addedMember.textContent = name;
  addedMember.className = "member-name";

  const buttons = document.createElement("div");
  buttons.className = "member-buttons";

  const addPaymentButton = document.createElement("button");
  addPaymentButton.textContent = "💰";
  addPaymentButton.className = "member-button";
  addPaymentButton.onclick = () => {
    addPayment(name, 100000);
  };

  const removeMemberButton = document.createElement("button");
  removeMemberButton.textContent = "❌";
  removeMemberButton.className = "member-button";
  removeMemberButton.onclick = () => {
    removeMember(name);
  };

  buttons.appendChild(addPaymentButton);
  buttons.appendChild(removeMemberButton);

  container.appendChild(addedMember);
  container.appendChild(buttons);

  nameList.appendChild(container);

  const memberInput = document.getElementById("memberInput");
  memberInput.value = "";

  console.log(`${name} added`);
};


const removeMember = (name) => {
    const member = document.getElementById(`${name}Container`);
    member.remove();
    console.log(`removed: ${name}`);
}


const squareUp = () => {
  console.log("square up");
};


const addPayment = (name, amount) => {
  console.log(`adding payment ${name} - ${amount}`);
};
