document.addEventListener("DOMContentLoaded", () => { 
    const tasks = document.querySelectorAll(".task");

    tasks.forEach(task => {
        const checkbox = task.querySelector(".task_id");
        const paragraph = task.querySelector('p');

        // Function to check and toggle line-through
        function checkCheckbox() {
            if (checkbox.checked) {
                paragraph.style.textDecoration = "line-through";
            } else {
                paragraph.style.textDecoration = "none";
            }
        }

        // Call function and add event listener
        checkCheckbox();
        checkbox.addEventListener('change', checkCheckbox);
    });
});
