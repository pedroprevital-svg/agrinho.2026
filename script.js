// ===== SCRIPT DO PROJETO AGRO INTELIGENTE =====
// Funcionalidades: Quiz ambiental + Acessibilidade (fonte + contraste)

// 1. AGUARDAR O CARREGAMENTO DA PÁGINA
document.addEventListener('DOMContentLoaded', function() {
    
    // ===== QUIZ AMBIENTAL =====
    // Lista de perguntas sobre desmatamento e agricultura sustentável
    const perguntas = [
        {
            texto: "1. O que é desmatamento?",
            alternativas: [
                "A) Plantar árvores em áreas vazias",
                "B) Retirada da vegetação nativa de uma área",
                "C) Proteger florestas contra queimadas"
            ],
            correta: 1 // índice 1 (B)
        },
        {
            texto: "2. Qual destas práticas ajuda a evitar o desmatamento na agricultura?",
            alternativas: [
                "A) Agrofloresta (plantar árvores junto com alimentos)",
                "B) Queimar a vegetação para abrir pasto",
                "C) Usar agrotóxicos em excesso"
            ],
            correta: 0
        },
        {
            texto: "3. Por que o desmatamento é prejudicial?",
            alternativas: [
                "A) Aumenta a biodiversidade",
                "B) Melhora a qualidade do solo",
                "C) Causa poluição do ar e perda de animais"
            ],
            correta: 2
        },
        {
            texto: "4. O tema do concurso Agrinho 2026 é: 'Agro forte, futuro sustentável'. O que significa equilíbrio entre produção e meio ambiente?",
            alternativas: [
                "A) Produzir sem se importar com a natureza",
                "B) Produzir alimentos preservando florestas e recursos naturais",
                "C) Desmatar tudo para plantar mais"
            ],
            correta: 1
        }
    ];
    
    // Exibir as perguntas no HTML
    const quizContainer = document.getElementById('quiz-container');
    
    function carregarQuiz() {
        let html = '';
        for (let i = 0; i < perguntas.length; i++) {
            const p = perguntas[i];
            html += `<div class="pergunta">
                        <p>${p.texto}</p>`;
            for (let j = 0; j < p.alternativas.length; j++) {
                html += `<label>
                            <input type="radio" name="pergunta${i}" value="${j}">
                            ${p.alternativas[j]}
                         </label>`;
            }
            html += `</div>`;
        }
        quizContainer.innerHTML = html;
    }
    
    // Função para calcular o resultado do quiz
    function calcularResultado() {
        let acertos = 0;
        
        for (let i = 0; i < perguntas.length; i++) {
            const opcoes = document.querySelectorAll(`input[name="pergunta${i}"]`);
            let selecionada = null;
            for (let j = 0; j < opcoes.length; j++) {
                if (opcoes[j].checked) {
                    selecionada = opcoes[j].value;
                    break;
                }
            }
            
            if (selecionada !== null && parseInt(selecionada) === perguntas[i].correta) {
                acertos++;
            }
        }
        
        const resultadoDiv = document.getElementById('resultadoQuiz');
        const total = perguntas.length;
        
        if (acertos === total) {
            resultadoDiv.innerHTML = `🎉 PARABÉNS! Você acertou ${acertos} de ${total} perguntas. Você é um defensor do meio ambiente! 🌿`;
        } else if (acertos >= total/2) {
            resultadoDiv.innerHTML = `👍 Bom trabalho! Você acertou ${acertos} de ${total}. Continue aprendendo sobre agricultura sustentável! 🌱`;
        } else {
            resultadoDiv.innerHTML = `📚 Você acertou ${acertos} de ${total}. Que tal revisar as informações do site e tentar novamente? O importante é aprender! 💚`;
        }
        
        // Rolar suavemente até o resultado
        resultadoDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    
    // Carregar o quiz quando a página abrir
    carregarQuiz();
    
    // Botão de enviar quiz
    const btnEnviar = document.getElementById('enviarQuiz');
    if (btnEnviar) {
        btnEnviar.addEventListener('click', calcularResultado);
    }
    
    // ===== FUNCIONALIDADES DE ACESSIBILIDADE =====
    
    // Controle de tamanho da fonte
    let tamanhoFonteAtual = 100; // porcentagem
    
    function aumentarFonte() {
        if (tamanhoFonteAtual < 130) {
            tamanhoFonteAtual += 10;
            document.body.style.fontSize = tamanhoFonteAtual + '%';
        }
    }
    
    function diminuirFonte() {
        if (tamanhoFonteAtual > 80) {
            tamanhoFonteAtual -= 10;
            document.body.style.fontSize = tamanhoFonteAtual + '%';
        }
    }
    
    // Alto contraste
    function ativarAltoContraste() {
        document.body.classList.toggle('alto-contraste');
        
        // Mudar texto do botão para feedback
        const btnContraste = document.getElementById('altoContraste');
        if (document.body.classList.contains('alto-contraste')) {
            btnContraste.textContent = '🌞 Modo normal';
        } else {
            btnContraste.textContent = '🎨 Contraste';
        }
    }
    
    // Conectar botões de acessibilidade
    const btnAumentar = document.getElementById('aumentarFonte');
    const btnDiminuir = document.getElementById('diminuirFonte');
    const btnContraste = document.getElementById('altoContraste');
    
    if (btnAumentar) btnAumentar.addEventListener('click', aumentarFonte);
    if (btnDiminuir) btnDiminuir.addEventListener('click', diminuirFonte);
    if (btnContraste) btnContraste.addEventListener('click', ativarAltoContraste);
    
});
