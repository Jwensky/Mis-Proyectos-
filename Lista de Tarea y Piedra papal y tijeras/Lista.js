// Seleccionar elementos del DOM
const inputTarea = document.getElementById("inputTarea");
const botonAdd = document.getElementById("botonAdd");
const listaTareas = document.querySelector(".listas-de-tareas");

// Función para agregar una tarea
function agregarTarea() {
const tareaTexto = inputTarea.value.trim();

if (tareaTexto === "") {
    alert("Por favor, escribe una tarea.");
    return;
}

  // Crear elementos para la nueva tarea
const nuevaTarea = document.createElement("li");
    nuevaTarea.innerHTML = `
    <label>
    <input type="checkbox"> ${tareaTexto}
    </label>
    <span class="delete">X</span>
`;

  // Agregar evento para eliminar la tarea
const botonEliminar = nuevaTarea.querySelector(".delete");
botonEliminar.addEventListener("click", () => eliminarTarea(nuevaTarea));

  // Agregar la tarea a la lista
listaTareas.appendChild(nuevaTarea);

  // Limpiar el input
inputTarea.value = "";
inputTarea.focus();
}

// Función para eliminar una tarea
function eliminarTarea(tarea) {
listaTareas.removeChild(tarea);
}

// Agregar evento al botón "Agregar"
botonAdd.addEventListener("click", agregarTarea);

// Permitir agregar tarea con la tecla Enter
inputTarea.addEventListener("keypress", (event) => {
if (event.key === "Enter") {
    agregarTarea();
}
});