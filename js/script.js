// Navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menú hamburguesa para móvil
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un enlace
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Formulario de contacto
let contactCaptchaAnswer = 0;

function generateContactCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    contactCaptchaAnswer = num1 + num2;
    document.getElementById('contactCaptchaQuestion').textContent = `¿Cuánto es ${num1} + ${num2}?`;
}

function submitContactForm(event) {
    event.preventDefault();
    
    const userAnswer = parseInt(document.getElementById('contactCaptchaAnswer').value);
    
    if (userAnswer !== contactCaptchaAnswer) {
        alert('Respuesta incorrecta. Por favor, intenta de nuevo.');
        generateContactCaptcha();
        document.getElementById('contactCaptchaAnswer').value = '';
        return;
    }
    
    const nombre = document.getElementById('contactNombre').value;
    const email = document.getElementById('contactEmail').value;
    const mensaje = document.getElementById('contactMensaje').value;
    
    const mailtoLink = `mailto:borboletalanas@gmail.com?subject=Consulta desde la web&body=Nombre: ${encodeURIComponent(nombre)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0AMensaje:%0D%0A${encodeURIComponent(mensaje)}`;
    
    window.location.href = mailtoLink;
    
    document.getElementById('contactForm').reset();
    generateContactCaptcha();
}

window.addEventListener('load', function() {
    generateContactCaptcha();
});

// Botón subir al inicio
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Funciones para el modal de talleres
let captchaAnswer = 0;

function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1;
    const num2 = Math.floor(Math.random() * 10) + 1;
    captchaAnswer = num1 + num2;
    document.getElementById('captchaQuestion').textContent = `¿Cuánto es ${num1} + ${num2}?`;
}

function openWorkshopForm(taller, horario) {
    const modal = document.getElementById('workshopModal');
    const mensaje = document.getElementById('mensaje');
    mensaje.value = `Quiero inscribirme en el taller: ${taller}\nHorario: ${horario}`;
    generateCaptcha();
    modal.style.display = 'block';
    document.getElementById('nombre').focus();
}

function closeWorkshopForm() {
    const modal = document.getElementById('workshopModal');
    modal.style.display = 'none';
    document.getElementById('workshopForm').reset();
}

function submitWorkshopForm(event) {
    event.preventDefault();
    
    const userAnswer = parseInt(document.getElementById('captchaAnswer').value);
    
    if (userAnswer !== captchaAnswer) {
        alert('Respuesta incorrecta. Por favor, intenta de nuevo.');
        generateCaptcha();
        document.getElementById('captchaAnswer').value = '';
        return;
    }
    
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('mensaje').value;
    
    const mailtoLink = `mailto:borboletalanas@gmail.com?subject=Inscripción a Taller&body=Nombre: ${encodeURIComponent(nombre)}%0D%0AEmail: ${encodeURIComponent(email)}%0D%0A%0D%0A${encodeURIComponent(mensaje)}`;
    
    window.location.href = mailtoLink;
    
    closeWorkshopForm();
}

window.onclick = function(event) {
    const modal = document.getElementById('workshopModal');
    if (event.target == modal) {
        closeWorkshopForm();
    }
}

// Datos de talleres
const talleresData = {
    "_colores_disponibles": {
        "marron-muy-oscuro": "#5d4037 (marrón muy oscuro)",
        "marron-oscuro": "#6d4c41 (marrón oscuro)",
        "marron-medio-oscuro": "#8b6f47 (marrón medio-oscuro)",
        "marron-medio": "#9b7d5a (marrón medio)",
        "marron-medio-claro": "#a0826d (marrón medio-claro)",
        "marron-claro": "#b8956a (marrón claro)",
        "marron-muy-claro": "#cdaf8c (marrón muy claro)",
        "candy-rosa": "#ff6b9d (rosa candy)",
        "candy-coral": "#ff8a80 (coral candy)",
        "candy-melon": "#ffab91 (melón candy)",
        "candy-amarillo": "#fff176 (amarillo candy)",
        "candy-verde": "#a5d6a7 (verde candy)",
        "candy-menta": "#80cbc4 (menta candy)",
        "candy-azul": "#81d4fa (azul candy)",
        "candy-lavanda": "#b39ddb (lavanda candy)",
        "candy-lila": "#ce93d8 (lila candy)",
        "candy-durazno": "#ffcc80 (durazno candy)"
    },
    "talleres": [
        {
            "id": "gorro-punto",
            "nombre": "Gorro de Punto",
            "descripcion": "Aprende a tejer tu primer gorro con agujas y los puntos básicos",
            "color": "candy-rosa",
            "horarios": [
                {"dia": "Lunes", "horaInicio": "11:00", "horaFin": "13:00"},
                {"dia": "Miércoles", "horaInicio": "11:00", "horaFin": "13:00"},
                {"dia": "Martes", "horaInicio": "18:00", "horaFin": "20:00"},
                {"dia": "Jueves", "horaInicio": "18:00", "horaFin": "20:00"},
                {"dia": "Sábado", "horaInicio": "11:00", "horaFin": "13:00"}
            ]
        }//,
        // {
        //     "id": "ganchillo-creativo",
        //     "nombre": "Ganchillo Creativo",
        //     "descripcion": "Técnicas avanzadas para crear piezas únicas con ganchillo",
        //     "color": "candy-menta",
        //     "horarios": [
        //         {"dia": "Martes", "horaInicio": "11:00", "horaFin": "13:00"},
        //         {"dia": "Viernes", "horaInicio": "18:00", "horaFin": "20:00"}
        //     ]
        // },
        // {
        //     "id": "proyectos-hogar",
        //     "nombre": "Proyectos para el Hogar",
        //     "descripcion": "Crea mantas, cojines y decoración para tu hogar",
        //     "color": "candy-lavanda",
        //     "horarios": [
        //         {"dia": "Miércoles", "horaInicio": "18:00", "horaFin": "20:00"},
        //         {"dia": "Sábado", "horaInicio": "10:00", "horaFin": "11:00"}
        //     ]
        // }
    ]
};

// Cargar talleres
function loadWorkshops() {
    renderWorkshopCards(talleresData.talleres);
    renderScheduleTable(talleresData.talleres);
}

function renderWorkshopCards(talleres) {
    const container = document.querySelector('.workshops');
    container.innerHTML = talleres.map(taller => {
        const horariosHTML = taller.horarios.map(horario => 
            `<a href="#" class="horario-item" onclick="openWorkshopForm('${taller.nombre}', '${horario.dia} ${horario.horaInicio}-${horario.horaFin}'); return false;">${horario.dia}: ${horario.horaInicio} - ${horario.horaFin}</a>`
        ).join('');
        
        return `
            <div class="workshop-card">
                <h3>
                    <span class="color-indicator ${taller.color}"></span>
                    ${taller.nombre}
                </h3>
                <p>${taller.descripcion}</p>
                <div class="horarios-info">
                    <h4>Horarios:</h4>
                    ${horariosHTML}
                </div>
            </div>
        `;
    }).join('');
}

function renderScheduleTable(talleres) {
    const tbody = document.querySelector('.timetable tbody');
    const dias = ['Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const horarios = ['10:00', '11:00', '12:00', '13:00', '17:00', '18:00', '19:00'];
    
    const schedule = {};
    talleres.forEach(taller => {
        taller.horarios.forEach(horario => {
            const key = `${horario.dia}-${horario.horaInicio}`;
            schedule[key] = {
                taller: taller.nombre,
                color: taller.color,
                horaFin: horario.horaFin,
                dia: horario.dia
            };
        });
    });
    
    tbody.innerHTML = '';
    const skipCells = new Set();
    
    horarios.forEach((hora, horaIndex) => {
        const row = document.createElement('tr');
        if (hora === '17:00') row.classList.add('closed-hours');
        
        const timeCell = document.createElement('td');
        timeCell.className = 'time-slot';
        const nextHora = horarios[horaIndex + 1] || '20:00';
        timeCell.textContent = `${hora} - ${nextHora}`;
        row.appendChild(timeCell);
        
        dias.forEach((dia, diaIndex) => {
            const skipKey = `${diaIndex}-${horaIndex}`;
            if (skipCells.has(skipKey)) {
                return;
            }
            
            const key = `${dia}-${hora}`;
            const cell = document.createElement('td');
            
            // Marcar sábado por la tarde como cerrado (combinar 3 celdas)
            if (dia === 'Sábado' && hora === '17:00') {
                cell.className = 'closed';
                cell.rowSpan = 3;
                cell.textContent = 'CERRADO';
                // Marcar las siguientes 2 celdas para que se salten
                skipCells.add(`${diaIndex}-${horaIndex + 1}`);
                skipCells.add(`${diaIndex}-${horaIndex + 2}`);
            } else if (schedule[key]) {
                const workshop = schedule[key];
                const horaInicio = hora;
                const horaFin = workshop.horaFin;
                const rowspan = calculateRowspan(horaInicio, horaFin, horarios);
                
                cell.className = `workshop ${workshop.color}`;
                cell.rowSpan = rowspan;
                cell.innerHTML = `<a href="#" onclick="openWorkshopForm('${workshop.taller}', '${dia} ${horaInicio}-${horaFin}'); return false;">${workshop.taller}</a>`;
                
                for (let i = 1; i < rowspan; i++) {
                    skipCells.add(`${diaIndex}-${horaIndex + i}`);
                }
            }
            
            row.appendChild(cell);
        });
        
        // Añadir columna de horario al final
        const timeCellEnd = document.createElement('td');
        timeCellEnd.className = 'time-slot';
        timeCellEnd.textContent = `${hora} - ${nextHora}`;
        row.appendChild(timeCellEnd);
        
        tbody.appendChild(row);
    });
}

function calculateRowspan(horaInicio, horaFin, horarios) {
    const inicio = horarios.indexOf(horaInicio);
    let fin = horarios.indexOf(horaFin.split(':')[0] + ':00');
    
    if (fin === -1) {
        const horaFinNum = parseInt(horaFin.split(':')[0]);
        const horaInicioNum = parseInt(horaInicio.split(':')[0]);
        return horaFinNum - horaInicioNum;
    }
    
    return fin > inicio ? fin - inicio : 1;
}

window.addEventListener('load', loadWorkshops);