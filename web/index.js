function startQuiz() {
    const quizContainer = document.getElementById('quiz-container');
    quizContainer.innerHTML = `
        <form id="quiz-form">
            <div>
                <label>Pregunta 1: Verdadero o Falso</label>
                <input type="radio" name="q1" value="true"> Verdadero
                <input type="radio" name="q1" value="false"> Falso
            </div>
            <div>
                <label>Pregunta 2: Selección Simple</label>
                <select name="q2">
                    <option value="a">Opción A</option>
                    <option value="b">Opción B</option>
                    <option value="c">Opción C</option>
                </select>
            </div>
            <div>
                <label>Pregunta 3: Selección Múltiple</label>
                <input type="checkbox" name="q3" value="a"> Opción A
                <input type="checkbox" name="q3" value="b"> Opción B
                <input type="checkbox" name="q3" value="c"> Opción C
            </div>
            <button type="button" onclick="submitQuiz()">Enviar</button>
        </form>
    `;
    quizContainer.style.display = 'block';
}

function submitQuiz() {
    const quizForm = document.getElementById('quiz-form');
    const formData = new FormData(quizForm);
    let score = 0;

    if (formData.get('q1') === 'true') score++;
    if (formData.get('q2') === 'b') score++;
    if (formData.getAll('q3').includes('a') && formData.getAll('q3').includes('b') && !formData.getAll('q3').includes('c')) score++;

    alert('Tu puntaje es: ' + score);
}