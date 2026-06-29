let cashflowChart = null;

// Local Storage

function getRegisteredUsers() {
  return JSON.parse(localStorage.getItem("reg-users") || "[]");
}

function saveRegisteredUsers(arr) {
  localStorage.setItem("reg-users", JSON.stringify(arr));
}

function getActiveSession() {
  return JSON.parse(localStorage.getItem("active-users") || "null");
}

function saveActiveSession(user) {
  localStorage.setItem("active-users", JSON.stringify(user));
}

function clearActiveSession() {
  localStorage.removeItem("active-users");
}

function getTransaction() {
  const data = localStorage.getItem("transactions");

  if (!data || data === "undefined") {
    return [];
  }

  return JSON.parse(data);
}

function saveTransactionData(rs) {
  localStorage.setItem("transactions", JSON.stringify(rs));
}

function getUserPrefer() {
  return JSON.parse(
    localStorage.getItem("prefer") || '{"currency":"$","fullname":""}',
  );
}

function saveUserPrefer(data) {
  localStorage.setItem("prefer", JSON.stringify(data));
}

function getSelectedCurrency() {
  return getUserPrefer().currency || "$";
}

function formatAmt(amt) {
  return getSelectedCurrency() + Math.abs(+amt).toFixed(2);
}

// Login and Register

function showAuthScreen(scr) {
  const loginBox = document.getElementById("login-box");
  const registerBox = document.getElementById("register-box");

  if (scr === "login") {
    loginBox.style.display = "block";
    registerBox.style.display = "none";
  } else {
    loginBox.style.display = "none";
    registerBox.style.display = "block";
  }
}

function doRegister() {
  const username = document.getElementById("register-username").value.trim();
  const password = document.getElementById("register-password").value;

  if (!username || !password) {
    alert("Please fill all the fields.");
    return;
  }

  const users = getRegisteredUsers();

  if (users.find((user) => user.username === username)) {
    alert("Username already taken");
    return;
  }

  users.push({
    username,
    password,
  });

  saveRegisteredUsers(users);

  alert("Registered Successfully!");

  document.getElementById("register-username").value = "";
  document.getElementById("register-password").value = "";

  showAuthScreen("login");
}

function doLogin() {
  const username = document.getElementById("login-username").value.trim();
  const password = document.getElementById("login-password").value;

  if (!username || !password) {
    alert("Please fill all the fields.");
    return;
  }

  const found = getRegisteredUsers().find(
    (user) => user.username === username && user.password === password,
  );

  if (!found) {
    alert("Wrong username or password");
    return;
  }

  saveActiveSession({ username });

  startApp();
}

function doLogout() {
  clearActiveSession();
  document.getElementById("app-screen").classList.remove("on");

  document.getElementById("auth-screen").style.display = "";

  showAuthScreen("login");
}

function startApp() {
  document.getElementById("auth-screen").style.display = "none";

  document.getElementById("app-screen").classList.add("on");

  const user = getActiveSession();

  document.getElementById("topbar-username").textContent = user.username;

  const dark = localStorage.getItem("darkmode");
  if (dark === "1") {
    document.getElementById("darkmode-toggle").checked = true;
    document.body.classList.add("dark");
  } else {
    document.getElementById("darkmode-toggle").checked = false;
    document.body.classList.remove("dark");
  }

  showPage("dashboard");

  const prefs = getUserPrefer();
  document.getElementById("settings-fullname").value =
    prefs.fullname || user.username;
  document.getElementById("settings-currency").value = prefs.currency || "$";

  refreshDashboard();
}

function showPage(pgName) {
  const dashboard = document.getElementById("dashboard-page");
  const setting = document.getElementById("settings-page");

  const navDash = document.getElementById("nav-dashboard");
  const navSetting = document.getElementById("nav-settings");

  if (pgName === "dashboard") {
    dashboard.classList.add("on");
    setting.classList.remove("on");

    navDash.classList.add("active");
    navSetting.classList.remove("active");
  } else {
    dashboard.classList.remove("on");
    setting.classList.add("on");

    navDash.classList.remove("active");
    navSetting.classList.add("active");
  }
}

// Dark MOde
function toggleDarkMode() {
  const darkMode = document.getElementById("darkmode-toggle").checked;

  if (darkMode) {
    document.body.classList.add("dark");
    localStorage.setItem("darkmode", "1");
  } else {
    document.body.classList.remove("dark");
    localStorage.setItem("darkmode", "0");
  }

  renderCashflowChart();
}

// Setting Section

function saveSettings() {
  const fullname = document.getElementById("settings-fullname").value.trim();
  const currency = document.getElementById("settings-currency").value;

  saveUserPrefer({
    fullname,
    currency,
  });

  if (fullname) {
    document.getElementById("topbar-username").textContent = fullname;
  } else {
    document.getElementById("topbar-username").textContent =
      getActiveSession().username;
  }

  refreshDashboard();
}

function resetAllData() {
  const result = confirm("Delete all transactions?");

  if (result) {
    saveTransactionData([]);
    refreshDashboard();
    alert("All transactions deleted.");
  }
}

function closeTransactionModal() {
  document.getElementById("transaction-modal-overlay").classList.remove("on");
  editTransaction = null;
}

function closeOnOverlayClick(event) {
  if (event.target === document.getElementById("transaction-modal-overlay")) {
    closeTransactionModal();
  }
}

let editTransaction = null;

function openTransactionModal(id) {
  editTransaction = id;

  const type = document.getElementById("transaction-type");
  const desc = document.getElementById("transaction-description");
  const amount = document.getElementById("transaction-amount");
  const date = document.getElementById("transaction-date");
  const category = document.getElementById("transaction-category");

  if (id) {
    document.getElementById("modal-title").textContent = "Edit Transaction";

    const data = getTransaction().find((item) => {
      return item.id == id;
    });

    type.value = data.type;
    desc.value = data.description;
    amount.value = data.amount;
    date.value = data.date;
    category.value = data.category;
  } else {
    document.getElementById("modal-title").textContent = "Add Transaction";

    type.value = "expense";
    desc.value = "";
    amount.value = "";
    date.value = new Date().toISOString().split("T")[0];
    category.value = "";
  }

  document.getElementById("transaction-modal-overlay").classList.add("on");
}

window.onload = function () {
  const user = getActiveSession();

  if (user) {
    startApp();
  }

  document.getElementById("transaction-date").value = new Date()
    .toISOString()
    .split("T")[0];
};

function saveTransactionForm() {
  const type = document.getElementById("transaction-type").value;
  const description = document
    .getElementById("transaction-description")
    .value.trim();
  const amount = Number(document.getElementById("transaction-amount").value);
  const date = document.getElementById("transaction-date").value;
  const category = document.getElementById("transaction-category").value;

  if (description === "") {
    alert("Enter Description");
    return;
  }
  if (amount <= 0) {
    alert("Enter Valid Amount");
    return;
  }
  if (category === "") {
    alert("Select Category");
    return;
  }

  let allTransactions = getTransaction();

  if (editTransaction != null) {
    for (let i = 0; i < allTransactions.length; i++) {
      if (allTransactions[i].id == editTransaction) {
        allTransactions[i].type = type;
        allTransactions[i].description = description;
        allTransactions[i].amount = amount;
        allTransactions[i].date = date;
        allTransactions[i].category = category;
      }
    }
  } else {
    allTransactions.push({
      id: Date.now(),
      type: type,
      description: description,
      amount: amount,
      date: date,
      category: category,
    });
  }

  saveTransactionData(allTransactions);

  closeTransactionModal();
  refreshDashboard();
}

function renderTransactionTable() {
  const tableBody = document.getElementById("transaction-table-body");
  const emptyState = document.getElementById("empty-state");
  const selectedFilter = document.getElementById("type-filter").value;
  const searchQuery = document
    .getElementById("search-input")
    .value.toLowerCase();

  let transactions = getTransaction();

  if (selectedFilter !== "all") {
    transactions = transactions.filter((t) => t.type === selectedFilter);
  }

  if (searchQuery) {
    transactions = transactions.filter(
      (t) =>
        t.description.toLowerCase().includes(searchQuery) ||
        t.category.toLowerCase().includes(searchQuery),
    );
  }

  transactions.sort((a, b) => new Date(b.date) - new Date(a.date));

  tableBody.innerHTML = "";

  if (transactions.length === 0) {
    emptyState.style.display = "";
    return;
  }
  emptyState.style.display = "none";

  for (let i = 0; i < transactions.length; i++) {
    const t = transactions[i];
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${t.date}</td>
      <td class="description-cell">${t.description}</td>
      <td><span class="category-badge">${t.category}</span></td>
      <td class="${t.type === "income" ? "amount-positive" : "amount-negative"}">
        ${t.type === "income" ? "+" : "-"}${formatAmt(t.amount)}
      </td>
      <td>
        <div class="row-action-buttons">
          <button class="edit-btn" onclick="openTransactionModal(${t.id})" title="Edit">
            <i class="ri-pencil-line"></i>
          </button>
          <button class="delete-btn" onclick="deleteTransaction(${t.id})" title="Delete">
            <i class="ri-delete-bin-line"></i>
          </button>
        </div>
      </td>
    `;
    tableBody.appendChild(row);
  }
}

function deleteTransaction(id) {
  const result = confirm("Delete this transaction?");

  if (!result) {
    return;
  }

  let transactions = getTransaction();

  let newTransactions = [];

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].id != id) {
      newTransactions.push(transactions[i]);
    }
  }

  saveTransactionData(newTransactions);

  refreshDashboard();
}

function renderCashflowChart() {
  let income = 0;
  let expense = 0;

  const transactions = getTransaction();

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type == "income") {
      income += Number(transactions[i].amount);
    } else {
      expense += Number(transactions[i].amount);
    }
  }

  const canvas = document.getElementById("cashflow-chart");
  const ctx = canvas.getContext("2d");

  if (cashflowChart != null) {
    cashflowChart.destroy();
  }

  cashflowChart = new Chart(ctx, {
    type: "bar",

    data: {
      labels: ["Income", "Expense"],

      datasets: [
        {
          label: "Amount",
          data: [income, expense],
          backgroundColor: ["green", "red"],
        },
      ],
    },

    options: {
      responsive: true,
      maintainAspectRatio: false,
    },
  });
}

function updateSummaryCards() {
  let income = 0;
  let expense = 0;

  const transactions = getTransaction();

  for (let i = 0; i < transactions.length; i++) {
    if (transactions[i].type == "income") {
      income += Number(transactions[i].amount);
    } else {
      expense += Number(transactions[i].amount);
    }
  }

  const balance = income - expense;

  document.getElementById("balance-value").textContent = formatAmt(balance);

  document.getElementById("income-value").textContent = formatAmt(income);

  document.getElementById("expense-value").textContent = formatAmt(expense);

  document.getElementById("transaction-count").textContent =
    transactions.length;
}

function refreshDashboard() {
  updateSummaryCards();
  renderTransactionTable();
  renderCashflowChart();
}
