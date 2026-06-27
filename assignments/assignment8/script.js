let ch = null,
  editId = null;

/* storage */
const reg = () => JSON.parse(localStorage.getItem("reg") || "[]");
const setReg = (a) => localStorage.setItem("reg", JSON.stringify(a));
const sess = () => JSON.parse(sessionStorage.getItem("u") || "null");
const setSess = (u) => sessionStorage.setItem("u", JSON.stringify(u));
const clrSess = () => sessionStorage.removeItem("u");
const txKey = () => "tx_" + sess().username;
const udKey = () => "ud_" + sess().username;
const getTx = () => JSON.parse(localStorage.getItem(txKey()) || "[]");
const setTx = (a) => localStorage.setItem(txKey(), JSON.stringify(a));
const getUd = () =>
  JSON.parse(localStorage.getItem(udKey()) || '{"cur":"$","name":""}');
const setUd = (d) => localStorage.setItem(udKey(), JSON.stringify(d));
const cur = () => getUd().cur || "$";
const fmt = (n) => cur() + Math.abs(+n).toFixed(2);

/* toast */
function toast(msg, type) {
  const el = document.getElementById("toast");
  el.textContent = msg;
  el.className = "show " + (type || "");
  setTimeout(() => (el.className = ""), 2400);
}

/* auth screens */
function show(s) {
  document.getElementById("login-box").style.display =
    s === "login" ? "" : "none";
  document.getElementById("reg-box").style.display = s === "reg" ? "" : "none";
}

function doReg() {
  const u = document.getElementById("r-user").value.trim();
  const p = document.getElementById("r-pass").value;
  if (!u || !p) return toast("Fill all fields", "err");
  const arr = reg();
  if (arr.find((x) => x.username === u)) return toast("Username taken", "err");
  arr.push({ username: u, password: p });
  setReg(arr);
  toast("Registered! Log in now.", "ok");
  document.getElementById("r-user").value = "";
  document.getElementById("r-pass").value = "";
  show("login");
}

function doLogin() {
  const u = document.getElementById("l-user").value.trim();
  const p = document.getElementById("l-pass").value;
  if (!u || !p) return toast("Fill all fields", "err");
  if (!reg().find((x) => x.username === u && x.password === p))
    return toast("Wrong credentials", "err");
  setSess({ username: u });
  startApp();
}

function doLogout() {
  clrSess();
  document.getElementById("app").classList.remove("on");
  document.getElementById("auth").style.display = "";
  show("login");
}

function startApp() {
  document.getElementById("auth").style.display = "none";
  document.getElementById("app").classList.add("on");
  const u = sess();
  document.getElementById("top-user").textContent = u.username;
  const dark = localStorage.getItem("dark_" + u.username) === "1";
  document.getElementById("dark-toggle").checked = dark;
  document.body.classList.toggle("dark", dark);
  const d = getUd();
  document.getElementById("s-name").value = d.name || u.username;
  document.getElementById("s-cur").value = d.cur || "$";
  page("dash");
  refresh();
}

window.addEventListener("load", () => {
  const u = sess();
  if (u && reg().find((x) => x.username === u.username)) startApp();
  document.getElementById("m-date").value = new Date()
    .toISOString()
    .split("T")[0];
});

/* pages */
function page(p) {
  document.getElementById("p-dash").classList.toggle("on", p === "dash");
  document.getElementById("p-set").classList.toggle("on", p === "set");
  document.getElementById("n-dash").classList.toggle("active", p === "dash");
  document.getElementById("n-set").classList.toggle("active", p === "set");
}

/* dark mode */
function toggleDark() {
  const on = document.getElementById("dark-toggle").checked;
  document.body.classList.toggle("dark", on);
  localStorage.setItem("dark_" + sess().username, on ? "1" : "0");
  if (ch) renderChart();
}

/* settings */
function saveSettings() {
  const name = document.getElementById("s-name").value.trim();
  const c = document.getElementById("s-cur").value;
  setUd({ name, cur: c });
  document.getElementById("top-user").textContent = name || sess().username;
  refresh();
  toast("Saved!", "ok");
}

/* reset */
function resetAll() {
  if (!confirm("Delete all transactions?")) return;
  setTx([]);
  refresh();
  toast("Cleared.", "");
}

/* modal */
function openModal(id) {
  editId = id || null;
  document.getElementById("m-title").textContent = id
    ? "Edit Transaction"
    : "Add Transaction";
  if (id) {
    const t = getTx().find((x) => x.id === id);
    if (t) {
      document.getElementById("m-type").value = t.type;
      document.getElementById("m-desc").value = t.desc;
      document.getElementById("m-amt").value = t.amt;
      document.getElementById("m-date").value = t.date;
      document.getElementById("m-cat").value = t.cat;
    }
  } else {
    document.getElementById("m-type").value = "expense";
    document.getElementById("m-desc").value = "";
    document.getElementById("m-amt").value = "";
    document.getElementById("m-date").value = new Date()
      .toISOString()
      .split("T")[0];
    document.getElementById("m-cat").value = "";
  }
  document.getElementById("overlay").classList.add("on");
}

function closeModal() {
  document.getElementById("overlay").classList.remove("on");
  editId = null;
}

function bgClose(e) {
  if (e.target === document.getElementById("overlay")) closeModal();
}

function saveTx() {
  const type = document.getElementById("m-type").value;
  const desc = document.getElementById("m-desc").value.trim();
  const amt = parseFloat(document.getElementById("m-amt").value);
  const date = document.getElementById("m-date").value;
  const cat = document.getElementById("m-cat").value;
  if (!desc) return toast("Enter a description", "err");
  if (!amt || amt <= 0) return toast("Enter a valid amount", "err");
  if (!date) return toast("Pick a date", "err");
  if (!cat) return toast("Select a category", "err");
  const arr = getTx();
  if (editId) {
    const i = arr.findIndex((x) => x.id === editId);
    if (i > -1) arr[i] = { ...arr[i], type, desc, amt, date, cat };
  } else {
    arr.push({ id: Date.now(), type, desc, amt, date, cat });
  }
  setTx(arr);
  closeModal();
  refresh();
  toast(editId ? "Updated!" : "Added!", "ok");
}

function delTx(id) {
  if (!confirm("Delete this transaction?")) return;
  setTx(getTx().filter((x) => x.id !== id));
  refresh();
  toast("Deleted.", "");
}

/* render */
function totals() {
  let inc = 0,
    exp = 0;
  getTx().forEach((t) =>
    t.type === "income" ? (inc += +t.amt) : (exp += +t.amt),
  );
  return { inc, exp, bal: inc - exp, cnt: getTx().length };
}

function updateCards() {
  const t = totals();
  document.getElementById("c-bal").textContent = cur() + t.bal.toFixed(2);
  document.getElementById("c-inc").textContent = cur() + t.inc.toFixed(2);
  document.getElementById("c-exp").textContent = cur() + t.exp.toFixed(2);
  document.getElementById("c-cnt").textContent = t.cnt;
}

function renderTx() {
  const f = document.getElementById("filter").value;
  const s = document.getElementById("search").value.toLowerCase();
  let list = getTx();
  if (f !== "all") list = list.filter((t) => t.type === f);
  if (s)
    list = list.filter(
      (t) =>
        t.desc.toLowerCase().includes(s) || t.cat.toLowerCase().includes(s),
    );
  list.sort((a, b) => new Date(b.date) - new Date(a.date));

  const body = document.getElementById("tx-body");
  const empty = document.getElementById("empty");
  body.innerHTML = "";

  if (!list.length) {
    empty.style.display = "";
    return;
  }
  empty.style.display = "none";

  list.forEach((t) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${t.date}</td>
        <td class="bold">${t.desc}</td>
        <td><span class="badge">${t.cat}</span></td>
        <td class="${t.type === "income" ? "pos" : "neg"}">${t.type === "income" ? "+" : "-"}${fmt(t.amt)}</td>
        <td>
          <div class="row-actions">
            <button class="icon-btn edit" onclick="openModal(${t.id})" title="Edit"><i class="ri-pencil-line"></i></button>
            <button class="icon-btn del"  onclick="delTx(${t.id})"    title="Delete"><i class="ri-delete-bin-line"></i></button>
          </div>
        </td>`;
    body.appendChild(tr);
  });
}

function renderChart() {
  const dark = document.body.classList.contains("dark");
  const gc = dark ? "rgba(255,255,255,0.06)" : "rgba(0,0,0,0.05)";
  const tc = dark ? "#71717a" : "#71717a";
  let inc = 0,
    exp = 0;
  getTx().forEach((t) =>
    t.type === "income" ? (inc += +t.amt) : (exp += +t.amt),
  );
  const ctx = document.getElementById("chart").getContext("2d");
  if (ch) {
    ch.destroy();
    ch = null;
  }
  ch = new Chart(ctx, {
    type: "bar",
    data: {
      labels: ["Income vs Expenses"],
      datasets: [
        {
          label: "Income",
          data: [inc],
          backgroundColor: "#16a34a",
          borderRadius: 5,
          barThickness: 55,
        },
        {
          label: "Expenses",
          data: [exp],
          backgroundColor: "#dc2626",
          borderRadius: 5,
          barThickness: 55,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "top",
          labels: { color: tc, boxWidth: 11, font: { size: 12 } },
        },
      },
      scales: {
        x: { grid: { color: gc }, ticks: { color: tc } },
        y: { grid: { color: gc }, ticks: { color: tc } },
      },
    },
  });
}

function refresh() {
  updateCards();
  renderTx();
  renderChart();
}
