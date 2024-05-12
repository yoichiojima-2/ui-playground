const toggleMemberInput = () => {
  const memberEntry = document.getElementById("member-entry");
  memberEntry ? hideMemberInput() : showMemberInput();
};

const showMemberInput = () => {
  const membersList = document.getElementById("addMember");

  const memberEntry = document.createElement("div");
  memberEntry.id = "member-entry";
  memberEntry.className = "member-entry";

  const input = document.createElement("input");
  input.id = "memberInput";
  input.type = "text";
  input.className = "member-input";
  input.placeholder = "enter name to add";

  const addButton = document.createElement("button");
  addButton.id = "add-member-button";
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

const addMember = (memberName) => {
  if (!memberName) {
    console.log("No member name provided");
    return;
  }

  const memberNameList = document.getElementById("memberList");

  const container = document.createElement("div");
  container.id = `${memberName}Container`;
  container.className = "member-container";

  const addPaymentButton = document.createElement("button");
  addPaymentButton.textContent = "+💰";
  addPaymentButton.className = "add-payment-button";
  addPaymentButton.onclick = () => {
    addPayment(memberName, 100000);
  };

  const addedMember = document.createElement("p");
  addedMember.id = `${memberName}Name`;
  addedMember.textContent = memberName;
  addedMember.className = "member-name";

  container.appendChild(addPaymentButton);
  container.appendChild(addedMember);

  memberNameList.appendChild(container);

  const memberInput = document.getElementById("memberInput");
  memberInput.value = "";

  console.log(`${memberName} added`);
};

const squareUp = () => {
  console.log("square up");
};

const addPayment = (name, amount) => {
  console.log(`adding payment ${name} - ${amount}`);
};
