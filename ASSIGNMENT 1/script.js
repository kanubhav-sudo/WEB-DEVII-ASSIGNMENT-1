let events = [];

function addEvent() {
    const title = document.getElementById("title").value;
    const date = document.getElementById("date").value;
    const category = document.getElementById("category").value;
    const desc = document.getElementById("description").value;

    if (!title || !date) {
        alert("Title and Date are required");
        return;
    }

    events.push({ title, date, category, desc });
    renderEvents();
    clearForm();
}
function renderEvents() {
    const list = document.getElementById("eventList");
    list.innerHTML = "";

    if (events.length === 0) {
        list.innerHTML = `<p class="empty">No events yet. Add your first event!</p>`;
        return;
    }

    const today = new Date();
    today.setHours(0,0,0,0);

    events.forEach((e, index) => {
        const eventDate = new Date(e.date);
        eventDate.setHours(0,0,0,0);

        const cardType = eventDate < today ? "old" : "upcoming";

        list.innerHTML += `
            <div class="event ${cardType}">
                <button class="delete-btn" onclick="deleteEvent(${index})">×</button>
                <h4>${e.title}</h4>
                <div class="date">📅 ${e.date}</div>
                <div class="category">${e.category}</div>
                <div class="desc">${e.desc}</div>
            </div>
        `;
    });
}

function deleteEvent(index) {
    events.splice(index, 1);
    renderEvents();
}

function clearEvents() {
    events = [];
    renderEvents();
}

function addSampleEvents() {
    events = [
        {
            title: "Web Development Conference",
            date: "2026-02-15",
            category: "Conference",
            desc: "Annual conference on modern web technologies."
        },
        {
            title: "JavaScript Workshop",
            date: "2026-02-20",
            category: "Workshop",
            desc: "Hands-on JavaScript learning session."
        }
    ];
    renderEvents();
}

function clearForm() {
    document.getElementById("title").value = "";
    document.getElementById("date").value = "";
    document.getElementById("description").value = "";
}
document.getElementById("addEventBtn").addEventListener("click", addEvent);
document.getElementById("clearEventsBtn").addEventListener("click", clearEvents);
document.getElementById("addSampleBtn").addEventListener("click", addSampleEvents);


renderEvents();

