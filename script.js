const toggleMemberInput = () => {
  const memberEntry = document.getElementById("memberEntry");
  memberEntry ? clearInputField() : showMemberInput();
};

const showMemberInput = () => {
  const inputField = clearInputField();

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
  inputField.appendChild(memberEntry);
};

const addMember = (name) => {
  console.log(`adding member ${name}`);

  if (!name) {
    console.log("No member name provided");
    return;
  }

  const nameList = document.getElementById("memberList");

  const hstack = document.createElement("div");
  hstack.id = `${name}Container`;
  hstack.className = "member-container";

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
    showPaymentInput(name, 100000);
  };

  const removeMemberButton = document.createElement("button");
  removeMemberButton.textContent = "❌";
  removeMemberButton.className = "member-button";
  removeMemberButton.onclick = () => {
    removeMember(name);
  };

  const itemsBox = document.createElement("div")
  itemsBox.id = `${name}Items`
  itemsBox.className = "payment-items-box";

  buttons.appendChild(addPaymentButton);
  buttons.appendChild(removeMemberButton);

  hstack.appendChild(addedMember);
  hstack.appendChild(buttons);

  const vstack = document.createElement("div")
  vstack.class = "vstack"

  vstack.appendChild(hstack);

  const items = document.createElement("div")
  items.id = `${name}Items`
  items.className = "item-list"

  vstack.appendChild(items);
  vstack.appendChild(items);

  nameList.appendChild(vstack);

  const memberInput = document.getElementById("memberInput");
  memberInput.value = "";

  console.log(`${name} added`);
};

const removeMember = (name) => {
  const member = document.getElementById(`${name}Container`);
  member.remove();

  const paymentContainer = document.getElementById("paymentContainer");
  paymentContainer.remove();
  console.log(`removed: ${name}`);
};

const squareUp = () => {
  console.log("square up");
};

const showPaymentInput = (name) => {
  field = clearInputField();

  paymentContainer = document.createElement("div");
  paymentContainer.id = "paymentContainer";

  const name_element = document.createElement("p");
  name_element.id = "paymentName";
  name_element.textContent = `Entering ${name}'s payment...`;
  paymentContainer.appendChild(name_element);

  const paymentInputContainer = getPaymentInputContainer(name);
  paymentContainer.appendChild(paymentInputContainer);

  field.appendChild(paymentContainer);
};

const addPayment = (name, title, amount) => {
  const memberContainer = document.getElementById(`${name}Items`);
  const paymentItems = document.createElement("div")
  paymentItems.className = "payment-item";
  paymentItems.textContent = `${title} - ${amount}`
  
  memberContainer.prepend(paymentItems);
};

const getPaymentInputContainer = (name) => {
  paymentInputContainer = document.createElement("div");
  paymentInputContainer.id = "paymentInputContainer";

  const titleInput = document.createElement("input");
  titleInput.id = "paymentTitleInput";
  titleInput.placeholder = "title";
  paymentInputContainer.appendChild(titleInput);

  const amountInput = document.createElement("input");
  amountInput.id = "paymentAmountInput";
  amountInput.placeholder = "amount";
  paymentInputContainer.appendChild(amountInput);

  const addButton = document.createElement("button");
  addButton.textContent = "+";
  addButton.onclick = () =>
    addPayment(name, titleInput.value, amountInput.value);
  paymentInputContainer.appendChild(addButton);

  return paymentInputContainer;
};

const clearInputField = () => {
  field = document.getElementById("inputField");
  field.innerHTML = "";
  return field;
};
