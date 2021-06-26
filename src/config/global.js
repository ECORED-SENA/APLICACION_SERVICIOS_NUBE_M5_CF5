export default {
  global: {
    componenteFormativo: 'Virtualización',
    descripcionCurso:
      'En este componente formativo se aborda el tema de virtualización, sus diferentes tipos y algunas herramientas útiles para este proceso. Esta virtualización se comprende como una arquitectura de software que posibilita la ejecución de varios sistemas operativos de servidor como invitado en host de servidor físico específico.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.svg'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Generalidades de la virtualización',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Tipos de virtualización',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Virtualización de servidores',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Virtualización a nivel de sistema operativo o basada en contenedores',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo:
              'Virtualización a nivel de sistema operativo o basada en contenedores',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Virtualización de escritorios',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Herramientas de virtualización de servidores',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Ejemplo de virtualización',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Heim, B. (s. f.). Tecnologías de virtualización - Virtualización. Conceptos de Virtualización.',
      link:
        'https://sites.google.com/site/virutalizacionyha/tecnologias-de-virtualizacion',
    },
    {
      referencia: 'VMware. (s. f.). Virtualización. VMware.',
      link: 'https://www.vmware.com/co/solutions/virtualization.html',
    },
  ],
  glosario: [
    {
      termino: 'Binarios',
      significado:
        'tipo de archivos que contiene información requerida para la ejecución de ciertas aplicaciones.',
    },
    {
      termino: 'Data center',
      significado:
        'es un espacio donde se aloja un conjunto de equipos e infraestructura con el fin de brindar servicios a un grupo específico de usuarios.',
    },
    {
      termino: 'Librerías',
      significado:
        'conjunto de códigos construidos en un lenguaje de programación que sirve para ser reutilizado por otras aplicaciones.',
    },
    {
      termino: 'SDN',
      significado: 'redes definidas por software.',
    },
    {
      termino: 'VM',
      significado: 'máquina virtual.',
    },
    {
      termino: 'VLAN',
      significado: 'red de área local virtual.',
    },
    {
      termino: 'VPN',
      significado: 'red privada virtual.',
    },
  ],
  complementario: [
    {
      texto:
        'Generalidades de la virtualización: AlbertoLopez TECH TIPS. (2021). ¿Qué es la virtualización? ¿Para qué sirve la Virtualización? Tipos de virtualización de sistemas. YouTube. ',
      tipo: 'Video',
      link: 'https://youtu.be/K1vPbQtOlSc',
    },
    {
      texto:
        'Tipos de virtualización: AlbertoLopez TECH TIPS. (2021). Tipos de virtualización. 10 tipos de virtualización explicadas (de S.O., VDI, VPS, hardware, etc.). YouTube.',
      tipo: 'Página web',
      link: 'https://youtu.be/LMl2_W7cRME',
    },
    {
      texto:
        'Herramientas de virtualización de servidores: VMware. (s.f.). Download VMware Workstation Pro. VMware. ',
      tipo: 'Página web',
      link: 'VMware. (s.f.). Download VMware Workstation Pro. VMware',
    },
    {
      texto:
        'Herramientas de virtualización de servidores: VirtualBox. (s.f.). Download VirtualBox. VirtualBox',
      tipo: 'Página web',
      link: 'https://www.virtualbox.org/wiki/Downloads',
    },
    {
      texto:
        'Herramientas de virtualización de servidores: Docs Microsoft. (2019). Install Hyper-V on Windows 10. Docs Microsoft.',
      tipo: 'Página web',
      link:
        'https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v',
    },
    {
      texto:
        'Herramientas de virtualización de servidores: QEMU. (s.f.). Download QEMU. QEMU. ',
      tipo: 'Página web',
      link: 'https://www.qemu.org/download/',
    },
    {
      texto:
        'Herramientas de virtualización de servidores: Parallels. (s.f.). Run Windows on Mac. Parallels. ',
      tipo: 'Página web',
      link: 'https://www.parallels.com',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: ['Nombre 1', 'Nombre 2'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
