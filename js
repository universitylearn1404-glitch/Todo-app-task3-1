let todos = [];

function addTodo(title) {
    if (!title || title.trim() === "") {
        console.error("❌ خطا: عنوان تسک نمی‌تواند خالی باشد!");
        return;
    }

    const newTodo = {
        id: Date.now(),
        title: title.trim(),
        isCompleted: false
    };

    todos.push(newTodo);
    console.log(`✅ تسک "${title}" با موفقیت اضافه شد.`);
}

function deleteTodo(id) {
    const initialLength = todos.length;
    todos = todos.filter(todo => todo.id !== id);

    if (todos.length < initialLength) {
        console.log(`🗑 تسک با شناسه ${id} حذف شد.`);
    } else {
        console.warn(`⚠️ تسکی با شناسه ${id} پیدا نشد.`);
    }
}

function editTodo(id, newTitle) {
    if (!newTitle || newTitle.trim() === "") {
        console.error("❌ خطا: عنوان جدید نمی‌تواند خالی باشد!");
        return;
    }

    const todo = todos.find(todo => todo.id === id);

    if (todo) {
        todo.title = newTitle.trim();
        console.log(`✏️ تسک با شناسه ${id} به "${newTitle}" تغییر یافت.`);
    } else {
        console.warn(`⚠️ تسکی با شناسه ${id} برای ویرایش یافت نشد.`);
    }
}

function toggleTodoStatus(id) {
    const todo = todos.find(todo => todo.id === id);

    if (todo) {
        todo.isCompleted = !todo.isCompleted;
        const status = todo.isCompleted ? "انجام شده ✅" : "در حال انجام ⏳";
        console.log(`🔄 وضعیت تسک "${todo.title}" به (${status}) تغییر کرد.`);
    } else {
        console.warn(`⚠️ تسکی با شناسه ${id} یافت نشد.`);
    }
}

function displayTodos() {
    console.log("\n================ 📋 لیست تسک‌ها ================");
    
    if (todos.length === 0) {
        console.log("هیچ تسکی وجود ندارد.");
        console.log("================================================\n");
        return;
    }

    todos.forEach((todo, index) => {
        const statusIcon = todo.isCompleted ? "[✔]" : "[ ]";
        console.log(`${index + 1}. ${statusIcon} ${todo.title} (ID: ${todo.id})`);
    });

    console.log("================================================\n");
}

console.log("🚀 شروع تست منطق برنامه To-Do List:\n");

addTodo("یادگیری مباحث پایه JavaScript");
addTodo("حل تسک‌های هفته سوم");
addTodo("مطالعه ES6 و Scope");

displayTodos();

if (todos.length > 0) {
    toggleTodoStatus(todos[0].id);
}

if (todos.length > 1) {
    editTodo(todos[1].id, "ارسال تسک هفته سوم به پشتیبان");
}

displayTodos();

if (todos.length > 2) {
    deleteTodo(todos[2].id);
}

displayTodos();

