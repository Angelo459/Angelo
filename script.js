// ============ PARALLAX DEL FONDO ============ //
const blobs = document.querySelectorAll('.blob');
let mouseX = 0, mouseY = 0;
let currentX = 0, currentY = 0;

document.addEventListener('mousemove', (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

function animate() {
  currentX += (mouseX - currentX) * 0.05;
  currentY += (mouseY - currentY) * 0.05;

  blobs.forEach((blob, i) => {
    const strength = (i + 1) * 15;
    blob.style.setProperty('--mx', `${currentX * strength}px`);
    blob.style.setProperty('--my', `${currentY * strength}px`);
  });

  requestAnimationFrame(animate);
}
animate();

// ============ DATOS ============ //
const unidadesData = {
  1: {
    titulo: 'Semanas de la Unidad I: Arquitecturas de Bases de Datos y Configuración del Entorno Corporativo',
    semanas: [
      { num: '01', titulo: 'Semana 1: Formulación del Proyecto y Selección de la Arquitectura' },
      { num: '02', titulo: 'Semana 2: Despliegue y Configuración de Motores de Datos (DBMS)' },
      { num: '03', titulo: 'Semana 3: Modelamiento Físico y Mecanismos de Integración' },
      { num: '04', titulo: 'Semana 4: Sustentación y Validación de la Infraestructura de Datos' }
    ]
  },
  2: {
    titulo: 'Semanas de la Unidad II: Diseño y Normalizacion',
    semanas: [
      { num: '01', titulo: 'Semana 1: Configuracion de la instancia y Gestion de memoria del servidor' },
      { num: '02', titulo: 'Semana 2: Arquitectura Fisica de Almacenamiento y Distribucion de Archivos' },
      { num: '03', titulo: 'Semana 3: Organización de Esquemas Lógicos y Estrategias de Indexación' },
      { num: '04', titulo: 'Semana 4: Sustentación y Pruebas de Carga de la Infraestructura de Almacenamiento' }
    ]
  },
  3: {
    titulo: 'Semanas de la Unidad III: Seguridad Corporativa, Conectividad de Red y Alta Disponibilidad de Datos',
    semanas: [
      { num: '01', titulo: 'Semana 1: Seguridad Corporativa en Bases de Datos' },
      { num: '02', titulo: 'Semana 2: Conectividad de Red' },
      { num: '03', titulo: 'Semana 3: Alta Disponibilidad de Datos' },
      { num: '04', titulo: 'Semana 4: Recuperación ante Desastres' }
    ]
  },
  4: {
    titulo: 'Semanas de la Unidad IV: Monitoreo de Servidores, Optimización del Desempeño y Recuperación Basada en Flashback',
    semanas: [
      { num: '01', titulo: 'Semana 1: Monitoreo de Servidores' },
      { num: '02', titulo: 'Semana 2: Optimización del Desempeño' },
      { num: '03', titulo: 'Semana 3: Recuperación Basada en Flashback' },
      { num: '04', titulo: 'Semana 4: Sustentación Final' }
    ]
  }
};

// Archivos por semana (personaliza con tus PDFs reales)
// Estructura: archivosData[unidadId][semanaNum] = [ { nombre, url } ]
const archivosData = {
  1: {
    '01': [
      { nombre: 'ARQUITECTURA CENTRALIZADA.pdf', url: 'https://drive.google.com/file/d/1PZ7m27eNQ_FF7AQWtRsjvwox5glg3P_F/preview' },
      { nombre: 'ARQUITECTURA CLIENTE - SERVIDOR.pdf', url: 'https://drive.google.com/file/d/1M2M-2hFUSQhAvGDZ7toBzlcJhxi8RK2J/preview' },
      { nombre: 'ARQUITECTURA DE LOS SISTEMAS DE ADMINISTRACION DE BASE DE DATOS.pdf', url: 'https://drive.google.com/file/d/15FTlT19HzNZAk1iXNTU20AuCh_CNBq5h/preview' },
      { nombre: 'ARQUITECTURA DISTRIBUIDA.pdf', url: 'https://drive.google.com/file/d/1groylw1uG75nwwSt-JT60LJZdpxeIm0o/preview' },
      { nombre: 'ARQUITECTURA EN LA NUBE Y MULTITENENCIA.pdf', url: 'https://drive.google.com/file/d/1PFuITp5_nUruHJJDMDxSYYaFKkY2LKAZ/preview' },
      { nombre: 'CARACTERISTICAS DE BASE DE DATOS.pdf', url: 'https://drive.google.com/file/d/1SitmBt0nFIeaq4y2Dw8yfTazuVweQ192/preview' },
      { nombre: 'DESARROLLO DE LA TECNOLOGIA DE BASE DE DATOS Y LA ESTRUCTURA DE MERCADO.pdf', url: 'https://drive.google.com/file/d/17Cskh3xvyfzbcg5OxZtWVOqUAA5T8eYg/preview' },
      { nombre: 'IMPACTOS ORGANIZACIONALES DE LA TECNOLOGIA DE BASE DE DATOS.pdf', url: 'https://drive.google.com/file/d/1707N5ZRu9l8eiSTFIWxGuR0MzShsQ38Y/preview' },
      { nombre: 'SISTEMAS DE ADMINISTRACION DE BASE DE DATOS.pdf', url: 'https://drive.google.com/file/d/1_3yrHev5h7m6L0axmNemRoHe4ma5Wlro/preview' }
    ],
    '02': [
      { nombre: 'INSTALACION SQL SERVER.pdf', url: 'https://drive.google.com/file/d/1BBf7VpfnCsxHn2oyKEt_CraJe9HO8Fhb/preview' },
      { nombre: 'ARANGO DB.pdf', url: 'https://drive.google.com/file/d/1K36L4FLDnhocXlRlrXuWTO2VP-AE0d7X/preview' },
      { nombre: 'INFOGRAFIA MYSQL.pdf', url: 'https://drive.google.com/file/d/1tRUhEFsnEB1Qb9HeJ_PXhlEhrre3BVvk/preview' },
      { nombre: 'INFOGRAFIA ORACLE.pdf', url: 'https://drive.google.com/file/d/1_kCnx1ce9Xf6AJn4jAVXvamMENxLGbuN/preview' },
      { nombre: 'INFOGRAFIA ORIENT DB.pdf', url: 'https://drive.google.com/file/d/1tqtXIyizq4s_kJDgp0MWSqSCEX_8YJAp/preview' },
      { nombre: 'INFOGRAFIA POSTGRE SQL.pdf', url: 'https://drive.google.com/file/d/17s3qkKBcOnS7ezHE18OiNbDCimq4wkrs/preview' },
      { nombre: 'INFOGRAFIA REDIS.pdf', url: 'https://drive.google.com/file/d/15aO59AYD6uDt50e7WBZE3mbvOT1hGAXE/preview' },
      { nombre: 'MONGO DB.pdf', url: 'https://drive.google.com/file/d/1vPsDTSoIdGtXVvHVpeNNEODL-uampKrr/preview' },
      { nombre: 'MYSQL.pdf', url: 'https://drive.google.com/file/d/1rTNOQcTUMM_NNtozLIhvRg9VSy3ZLo-h/preview' },
      { nombre: 'NEO4J.pdf', url: 'https://drive.google.com/file/d/1qvTVZRhEYHzwhzD1PPJHAKo1Pyc85zLL/preview' },
      { nombre: 'ORACLE MULTIMODEL.pdf', url: 'https://drive.google.com/file/d/1Xw4_lx2KOs8_3nF6epXGOAP4EPFc-dBu/preview' }
    ],
    '03': [
      { nombre: 'CADENA EDITORIAL.pdf', url: 'https://drive.google.com/file/d/1_Lvbh_s908C3Q6tixFgkRKAUzpWtDBIs/preview' },
      { nombre: 'GRADOS Y TITULOS.pdf', url: 'https://drive.google.com/file/d/1yXy4AkiCvnAB_agqKyUjkZh3ouBHyK9H/preview' }
    ],
    '04': [
      { nombre: 'CADENA EDITORIAL.pdf', url: 'https://drive.google.com/file/d/1bLuVT4AwX_rWbfX30A1niSVeoqr6lTjB/view'},
      { nombre: 'REVISTA Y SU ANALISIS.pdf', url: 'https://drive.google.com/file/d/10KgHDfgsjZR_79yajbefbYLw6tevUqXH/view'}
    ]
  },
  2: { '01': [
     { nombre: 'MANUAL DE CONFIGURACION SIMULTANEA AXURE Y SQL SERVER.pdf', url : 'https://drive.google.com/file/d/1MY-8evaERNfko8l_YFub9TsaCC21vbbY/view'},
     { nombre: 'MANUAL BD GRADOS Y TITULOS AZURE.pdf', url: 'https://drive.google.com/file/d/1E2E6gAuv_oj6JN-_toYZlx0sCM8CEZTk/view'},
     { nombre: 'MANUAL DE CREACION DE CUENTA AZURE.pdf', url: 'https://drive.google.com/file/d/1bIU4VxN7Hjj7b_ygDhfbVCAXw-DNka9V/view'},
     { nombre: 'MANUAL DE CREACION DE TABLAS Y GRADOS DE TITULOS.pdf', url: 'https://drive.google.com/file/d/1bJFX6YGNrQb4FG9wFpr_N7YDB9C8fyzN/view'}
  ], '02': [
     { nombre: 'CONFIGURACION DE LA INSTANCIA Y CONFIGURACION DE LA MEMORIA SQL.jpg', url: 'https://drive.google.com/file/d/1Ffs7VOfS85ldHldFvcSfr0AfE8HiPUDa/view'}    
  ], '03': [
     { nombre: 'ARQUITECTURA FISICA DEL SQL SERVER.pdf' , url: 'https://drive.google.com/file/d/15r7lpCm3naEmuiQhmhB30L_sWTw0VCOg/view'},
     { nombre: 'GUIAS DE LABORATORIO MULTIUSOS.pdf' , url: 'https://drive.google.com/file/d/1sPm3ds8lS-LGSkf0-hIn7GwSVrkVOTOE/view'}
  ], '04': [
     { nombre: 'PRACTICAS DEL 1 - 5 INDICES Y ESQUEMAS.pdf' , url: 'https://drive.google.com/file/d/1kQFz2RiFvhbRWtbqq1F6SuApJi6tGOxH/view'},
     { nombre: 'ESQUEMAS E INDEXACION.pdf' , url: 'https://drive.google.com/file/d/18f5vX8HbciUpLJnzKvCfHqbkCqioIT-j/view'}
  ] },
  3: { '01': [], '02': [], '03': [], '04': [] },
  4: { '01': [], '02': [], '03': [], '04': [] }
};

// ============ NAVEGACIÓN ENTRE VISTAS ============ //
const navItems = document.querySelectorAll('.nav-item');
const btnBack = document.getElementById('btn-back');
const btnVolverAbajo = document.getElementById('btn-volver-abajo');
const btnAtras = document.getElementById('btn-atras');
const semanasTitle = document.getElementById('semanas-title');
const weeksGrid = document.getElementById('weeks-grid');
const filesList = document.getElementById('files-list');
const archivosTitle = document.getElementById('archivos-title');

let unidadActual = null;
let semanaActual = null;

function switchView(viewName) {
  document.querySelectorAll('.view').forEach(v => v.classList.remove('view-active'));
  const target = document.getElementById('view-' + viewName);
  if (target) target.classList.add('view-active');

  navItems.forEach(item => {
    item.classList.toggle('active', item.dataset.view === viewName);
  });
}

// ============ VISTA SEMANAS ============ //
function loadUnidad(unidadId) {
  const data = unidadesData[unidadId];
  if (!data) return;

  unidadActual = unidadId;
  semanasTitle.textContent = data.titulo;

  weeksGrid.innerHTML = '';
  data.semanas.forEach((sem, index) => {
    const card = document.createElement('div');
    card.className = 'week-card';
    card.innerHTML = `
      <div class="week-icon">🗄️</div>
      <div class="week-number">${sem.num}</div>
      <h4>${sem.titulo}</h4>
    `;
    // Clic en semana -> vista archivos
    card.addEventListener('click', () => {
      loadArchivos(unidadId, (index + 1).toString().padStart(2, '0'), sem.titulo);
    });
    weeksGrid.appendChild(card);
  });

  switchView('semanas');
}

// ============ VISTA ARCHIVOS ============ //
function loadArchivos(unidadId, semanaNum, semanaTitulo) {
  semanaActual = semanaNum;
  archivosTitle.textContent = 'Archivos';

  const archivos = (archivosData[unidadId] && archivosData[unidadId][semanaNum]) || [];

  filesList.innerHTML = '';

  if (archivos.length === 0) {
    filesList.innerHTML = `
      <div style="text-align:center; padding: 40px 20px; color: var(--text-grey); font-style: italic;">
        No hay archivos disponibles para esta semana.
      </div>
    `;
  } else {
    archivos.forEach(arch => {
      const item = document.createElement('div');
      item.className = 'file-item';
      item.innerHTML = `
        <div class="file-left">
          <div class="file-icon">📄</div>
          <div class="file-name">${arch.nombre}</div>
        </div>
        <a href="${arch.url}" target="_blank" class="btn-preview">
          <span>👁️</span>
          <span>Vista previa</span>
        </a>
      `;
      filesList.appendChild(item);
    });
  }

  switchView('archivos');
}

// ============ EVENTOS ============ //
navItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const viewName = item.dataset.view;
    if (viewName === 'login') return;
    switchView(viewName);
  });
});

btnBack.addEventListener('click', () => switchView('welcome'));
btnVolverAbajo.addEventListener('click', () => switchView('tareas'));
btnAtras.addEventListener('click', () => {
  // Volver a la vista semanas de la unidad actual
  if (unidadActual) {
    loadUnidad(unidadActual);
  } else {
    switchView('tareas');
  }
});

document.querySelectorAll('.unit-card').forEach(card => {
  card.addEventListener('click', () => {
    loadUnidad(card.dataset.unit);
  });
});
