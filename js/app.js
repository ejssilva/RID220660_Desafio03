/**
 * Gerenciador de Tarefas - DNC
 * Aplicação para gerenciar tarefas com funcionalidades de adicionar e concluir
 */

let tasks = [];
let taskIdCounter = 1;

// ========================================
// ELEMENTOS DO DOM
// ========================================

const taskForm = document.getElementById('taskForm');
const taskNameInput = document.getElementById('taskName');
const taskTagInput = document.getElementById('taskTag');
const tasksList = document.getElementById('tasksList');
const tasksCounter = document.getElementById('tasksCounter');


/**
 * Formata a data atual no formato DD/MM/YYYY
 * @returns {string} Data formatada
 */
function formatDate() {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, '0');
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const year = now.getFullYear();
    return `${day}/${month}/${year}`;
}

/**
 * Atualiza o contador de tarefas concluídas
 */
function updateTasksCounter() {
    const completedCount = tasks.filter(task => task.completed).length;
    const taskWord = completedCount === 1 ? 'tarefa concluída' : 'tarefas concluídas';
    tasksCounter.textContent = `${completedCount} ${taskWord}`;
}

/**
 * Salva as tarefas no localStorage
 */
function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
    localStorage.setItem('taskIdCounter', taskIdCounter.toString());
}

/**
 * Carrega as tarefas do localStorage
 */
function loadTasks() {
    const savedTasks = localStorage.getItem('tasks');
    const savedCounter = localStorage.getItem('taskIdCounter');
    
    if (savedTasks) {
        tasks = JSON.parse(savedTasks);
    }
    
    if (savedCounter) {
        taskIdCounter = parseInt(savedCounter, 10);
    }
}

// ========================================
// FUNÇÕES DE MANIPULAÇÃO DE TAREFAS
// ========================================

/**
 * Cria um novo objeto de tarefa
 * @param {string} name - Nome da tarefa
 * @param {string} tag - Etiqueta da tarefa
 * @returns {Object} Objeto da tarefa
 */
function createTask(name, tag) {
    return {
        id: taskIdCounter++,
        name: name.trim(),
        tag: tag.trim(),
        date: formatDate(),
        completed: false
    };
}

/**
 * Adiciona uma nova tarefa
 * @param {string} name - Nome da tarefa
 * @param {string} tag - Etiqueta da tarefa
 */
function addTask(name, tag) {
    const task = createTask(name, tag);
    tasks.push(task);
    saveTasks();
    renderTasks();
    updateTasksCounter();
}

/**
 * Marca uma tarefa como concluída
 * @param {number} taskId - ID da tarefa
 */
function completeTask(taskId) {
    const task = tasks.find(t => t.id === taskId);
    if (task) {
        task.completed = true;
        saveTasks();
        renderTasks();
        updateTasksCounter();
    }
}

// ========================================
// FUNÇÕES DE RENDERIZAÇÃO
// ========================================

/**
 * Cria o elemento HTML de uma tarefa
 * @param {Object} task - Objeto da tarefa
 * @returns {HTMLElement} Elemento da tarefa
 */
function createTaskElement(task) {
    const taskItem = document.createElement('div');
    taskItem.className = 'task-item';
    taskItem.setAttribute('data-task-id', task.id);
    
    const taskHeader = document.createElement('div');
    taskHeader.className = 'task-header';
    
    const taskInfo = document.createElement('div');
    taskInfo.className = 'task-info';
    
    const taskTitle = document.createElement('h3');
    taskTitle.className = 'task-title';
    if (task.completed) {
        taskTitle.classList.add('completed');
    }
    taskTitle.textContent = task.name;
    
    const taskTag = document.createElement('span');
    taskTag.className = 'task-tag';
    taskTag.textContent = task.tag;
    
    const taskDate = document.createElement('p');
    taskDate.className = 'task-date';
    taskDate.textContent = `Criado em: ${task.date}`;
    
    taskInfo.appendChild(taskTitle);
    taskInfo.appendChild(taskTag);
    taskInfo.appendChild(taskDate);
    
    const taskActions = document.createElement('div');
    taskActions.className = 'task-actions';
    
    if (task.completed) {
        const checkIcon = document.createElement('div');
        checkIcon.className = 'check-icon';
        checkIcon.innerHTML = '✓';
        checkIcon.setAttribute('aria-label', 'Tarefa concluída');
        taskActions.appendChild(checkIcon);
    } else {
        const completeButton = document.createElement('button');
        completeButton.className = 'btn-complete';
        completeButton.textContent = 'Concluir';
        completeButton.setAttribute('aria-label', `Concluir tarefa: ${task.name}`);
        completeButton.addEventListener('click', () => completeTask(task.id));
        taskActions.appendChild(completeButton);
    }
    
    taskHeader.appendChild(taskInfo);
    taskHeader.appendChild(taskActions);
    taskItem.appendChild(taskHeader);
    
    return taskItem;
}

/**
 * Renderiza todas as tarefas na tela
 */
function renderTasks() {
    tasksList.innerHTML = '';
    
    if (tasks.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.textContent = 'Nenhuma tarefa cadastrada. Adicione uma nova tarefa acima!';
        tasksList.appendChild(emptyState);
        return;
    }
    
    tasks.forEach(task => {
        const taskElement = createTaskElement(task);
        tasksList.appendChild(taskElement);
    });
}

// ========================================
// MANIPULADORES DE EVENTOS
// ========================================

/**
 * Manipula o envio do formulário
 * @param {Event} event - Evento de submit
 */
function handleFormSubmit(event) {
    event.preventDefault();
    
    const taskName = taskNameInput.value.trim();
    const taskTag = taskTagInput.value.trim();
    
    if (taskName && taskTag) {
        addTask(taskName, taskTag);
        taskForm.reset();
        taskNameInput.focus();
    }
}

// ========================================
// INICIALIZAÇÃO DA APLICAÇÃO
// ========================================

/**
 * Inicializa a aplicação
 */
function initApp() {
    // Carrega as tarefas salvas
    loadTasks();
    
    // Se não houver tarefas, adiciona tarefas iniciais de exemplo
    if (tasks.length === 0) {
        addTask('Implementar tela de listagem de tarefas', 'frontend');
        addTask('Criar endpoint para cadastro de tarefas', 'backend');
        addTask('Criar protótipo da listagem de tarefas', 'ux');
        
        // Marca a terceira tarefa como concluída
        if (tasks.length >= 3) {
            tasks[2].completed = true;
            saveTasks();
        }
    }
    
    // Renderiza as tarefas
    renderTasks();
    updateTasksCounter();
    
    // Adiciona event listener ao formulário
    taskForm.addEventListener('submit', handleFormSubmit);
    
    // Foca no primeiro campo
    taskNameInput.focus();
}

// ========================================
// EXECUÇÃO
// ========================================

// Aguarda o carregamento completo do DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}
