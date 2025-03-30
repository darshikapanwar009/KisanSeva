// Seasonal fruits, vegetables, and farmers selling them
const seasonalProduce = {
    "03": {  // March
        fruits: ["Mangoes 🥭", "Oranges 🍊", "Pineapple 🍍"],
        vegetables: ["Carrots 🥕", "Spinach 🥬", "Broccoli 🥦"],
        farmers: [
            { name: "Rajesh Kumar", location: "Indore", contact: "9876543210" },
            { name: "Amit Singh", location: "Ujjain", contact: "8765432109" }
        ]
    },
    "04": {  // April
        fruits: ["Strawberries 🍓", "Grapes 🍇", "Papaya 🥭"],
        vegetables: ["Capsicum 🫑", "Pumpkin 🎃", "Lettuce 🥗"],
        farmers: [
            { name: "Suresh Patil", location: "Bhopal", contact: "9988776655" },
            { name: "Priya Sharma", location: "Dewas", contact: "8899776655" }
        ]
    },
    "05": {  // May
        fruits: ["Watermelon 🍉", "Lychee 🍈", "Peach 🍑"],
        vegetables: ["Tomatoes 🍅", "Cucumber 🥒", "Green Beans"],
        farmers: [
            { name: "Deepak Verma", location: "Ratlam", contact: "9871234567" }
        ]
    },
    "06": {  // June
        fruits: ["Mangoes 🥭", "Plums 🍑", "Cherries 🍒"],
        vegetables: ["Bottle Gourd", "Okra", "Cabbage"],
        farmers: [
            { name: "Ramesh Tiwari", location: "Jabalpur", contact: "9900112233" }
        ]
    },
    "07": {  // July
        fruits: ["Apples 🍏", "Pears 🍐", "Pineapple 🍍"],
        vegetables: ["Eggplant 🍆", "Corn 🌽", "Radish"],
        farmers: [
            { name: "Sunita Yadav", location: "Sehore", contact: "9001122334" }
        ]
    },
    "08": {  // August
        fruits: ["Pomegranates 🍎", "Guava 🍏", "Banana 🍌"],
        vegetables: ["Cauliflower", "Carrots 🥕", "Onions"],
        farmers: [
            { name: "Ajay Pandey", location: "Vidisha", contact: "9876543211" }
        ]
    },
    "09": {  // September
        fruits: ["Papaya 🥭", "Kiwi 🥝", "Avocado 🥑"],
        vegetables: ["Potatoes", "Cabbage", "Mushrooms"],
        farmers: [
            { name: "Meera Sharma", location: "Hoshangabad", contact: "9898989898" }
        ]
    },
    "10": {  // October
        fruits: ["Custard Apple 🍏", "Oranges 🍊", "Apples 🍎"],
        vegetables: ["Turnip", "Sweet Potato", "Brinjal"],
        farmers: [
            { name: "Vikas Chauhan", location: "Chhindwara", contact: "9123456789" }
        ]
    }
};

// Sales data
const sales = {
    "2025-03-26": "🔥 10% off on Oranges!",
    "2025-04-10": "🎉 Special Discount on Strawberries!"
};

const calendarDays = document.getElementById("calendar-days");
const monthYear = document.getElementById("month-year");
const selectedDateText = document.getElementById("selected-date");
const fruitList = document.getElementById("fruit-list");
const veggieList = document.getElementById("veggie-list");
const saleInfo = document.getElementById("sale-info");
const farmerList = document.getElementById("farmer-list");

let currentDate = new Date();
let currentMonth = currentDate.getMonth();
let currentYear = currentDate.getFullYear();

// Generate Calendar
function generateCalendar(month, year) {
    calendarDays.innerHTML = "";
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();

    monthYear.textContent = new Date(year, month).toLocaleString("default", {
        month: "long",
        year: "numeric",
    });

    for (let i = 0; i < firstDay; i++) {
        let emptyDiv = document.createElement("div");
        emptyDiv.classList.add("day", "empty");
        calendarDays.appendChild(emptyDiv);
    }

    for (let day = 1; day <= totalDays; day++) {
        let date = `${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
        let dayDiv = document.createElement("div");
        dayDiv.classList.add("day");
        dayDiv.textContent = day;

        if (date === new Date().toISOString().split("T")[0]) {
            dayDiv.classList.add("today");
        }

        if (day <= 13) {
            dayDiv.classList.add("available");
        }

        dayDiv.addEventListener("click", () => updateInfo(month + 1, date));

        calendarDays.appendChild(dayDiv);
    }
}

// Update Panel
function updateInfo(month, date) {
    selectedDateText.textContent = date;
    let monthKey = String(month).padStart(2, "0");

    fruitList.innerHTML = seasonalProduce[monthKey]?.fruits.map(fruit => `<li>${fruit}</li>`).join("") || "<li>No fruits available</li>";
    veggieList.innerHTML = seasonalProduce[monthKey]?.vegetables.map(veg => `<li>${veg}</li>`).join("") || "<li>No vegetables available</li>";
    saleInfo.textContent = sales[date] || "No Sale";

    farmerList.innerHTML = seasonalProduce[monthKey]?.farmers.map(farmer => 
        `<li>${farmer.name} - ${farmer.location} 📍 (${farmer.contact} 📞)</li>`
    ).join("") || "<li>No farmers available</li>";
}

// Navigation
document.getElementById("prev-month").addEventListener("click", () => { currentMonth--; generateCalendar(currentMonth, currentYear); });
document.getElementById("next-month").addEventListener("click", () => { currentMonth++; generateCalendar(currentMonth, currentYear); });

generateCalendar(currentMonth, currentYear);
