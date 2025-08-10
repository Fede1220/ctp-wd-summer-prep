const form = document.getElementById('habit_form')

const habits = []
form.addEventListener('submit', (event) => {
    event.preventDefault()
    const data = new FormData(event.target)

    const habit = {
        habitName: data.get("habit_name"),
        targetStreak: Number(data.get("target_streak"))
    }

    habits.push(habit)
})