<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca
    .main-wrap.p-4.p-md-5
      .titulo-principal
        .titulo-principal__numero
          span  4
        h1 Ejemplo de virtualización
      .clearfix

      .row.justify-content-center.mb-5
        .col-lg-10
          .bloque-texto-a.bg-image2.p-4.p-md-5.mb-5.slideInUp 
            .row.m-0.align-items-center.justify-content-between
              .col-lg-4.mb-4.mb-lg-0
                h2.mb-0
              .col-lg-8
                .bloque-texto-a__texto.p-4.shadow-box
                  p A continuación, se presenta una secuencia a modo de ejemplo de cómo realizar un proceso de virtualización de una máquina con sistema operativo Linux en una máquina con sistema operativo Windows. Para esta ilustración, se utilizará una máquina host con sistema operativo Windows 10 Home de 64 bits, se virtualizará y ejecutará una máquina virtual con <b>sistema operativo Ubuntu desktop 20.04, por medio de la herramienta Oracle Virtual Box.</b>
      
      p A continuación, se podrán observar acciones realizables durante la instalación de VirtualBox:

    .row
      .tarjeta.light-yellow.p-4.mb-5.no-rounded
        SlyderA
          .row.p-7
            .col-md-5.mb-4.mb-md-0
              .h3 Instalación de VirtualBox
              p VirtualBox es una de las herramientas de virtualización de servidores más utilizadas,  debido a que  permite trabajar desde diversos sistemas operativos como host y, de igual forma, virtualizar gran cantidad de sistemas operativos diferentes. Adicionalmente, es un software de uso gratuito. Para hacer el proceso de instalación, es necesario ir directamente a la página oficial de la herramienta,  en la sección de descargas, y luego seleccionar el tipo de sistema operativo del equipo host.
          
            .col-md-7
              figure
                img.h360.shadow-box(src='@/assets/curso/Figura1.jpg', alt='Texto que describa la imagen')

          .row.p-7
            .col-md-6.mb-4.mb-md-0
              .h3 Instalador de VirtualBox
              p Realizado el proceso anterior, se procede a buscar en la carpeta de descargas, o en la que se haya programado el alojamiento de la descarga, para ejecutarlo e iniciar su instalación. Recuerde que el sistema le solicitará algunos  permisos necesarios en el equipo host para este proceso. 
          
            .col-md-6
              figure
                img.w480.shadow-box(src='@/assets/curso/Figura2.jpg', alt='Texto que describa la imagen')
          
          .row.p-7
            .col-md-6.mb-4.mb-md-0
              .h3 Interfaz de Custom Setup VirtualBox
              p Continuando el proceso de instalación, se realiza la verificación de  los componentes, características y ubicación física donde se instalará en el equipo Host y los accesos directos. Se recomienda dejar las opciones por defecto que presenta el sistema. Sin embargo, se pueden realizar  los ajustes que se consideren pertinentes ante la necesidad a cubrir.
          
            .col-md-6
              figure
                img.w480.shadow-box(src='@/assets/curso/Figura3.jpg', alt='Texto que describa la imagen')
          .row.p-7
            .col-md-6.mb-4.mb-md-0
              .h3 Interfaz de Custom Setup 2  VirtualBox
              p Finalizada la verificación de las características de configuración de la instalación, el sistema indica que se requiere de un reinicio de la conexión de red y una desconexión temporal de la misma; sin embargo, esto ocurre en fracción de segundos, por lo que no afecta realmente el sistema, a menos de que en ese mismo momento se esté realizando un proceso crítico en host que requiera conexión ininterrumpida.
          
            .col-md-6
              figure
                img.w480.shadow-box(src='@/assets/curso/Figura4.jpg', alt='Texto que describa la imagen')

          .row.p-7
            .col-md-6.mb-4.mb-md-0
              .h3 Interfaz advertencia de red VirtualBox
              p El sistema pedirá aceptar el procedimiento de instalación. 
          
            .col-md-6
              figure
                img.w480.shadow-box(src='@/assets/curso/Figura5.jpg', alt='Texto que describa la imagen')
          
          .row.p-7
            .col-md-6.mb-4.mb-md-0
              .h3 Interfaz Ready to install VirtualBox
              p El sistema pedirá dar clic en “instalar” para continuar con el procedimiento.
          
            .col-md-6
              figure
                img.w480.shadow-box(src='@/assets/curso/Figura6.jpg', alt='Texto que describa la imagen')
          
          .row.p-7
            .col-md-6.mb-4.mb-md-0
              .h3 Interfaz advertencia de red VirtualBox
              p En algunas ocasiones,  es posible que en los  sistemas operativos Windows se presente o salte  una advertencia de seguridad,  indicando al usuario que se va a  autorizar una instalación de un software de Oracle Corporation. Al momento  que el sistema genere la notificación,  se deberá indicar que se desea instalar para poder continuar.
          
            .col-md-6
              figure
                img.w480(src='@/assets/curso/Figura7.png', alt='Texto que describa la imagen')

          .row.p-7
            .col-md-6.mb-4.mb-md-0
              .h3 Interfaz advertencia de red VirtualBox
              p En algunas ocasiones,  es posible que en los  sistemas operativos Windows se presente o salte  una advertencia de seguridad,  indicando al usuario que se va a  autorizar una instalación de un software de Oracle Corporation. Al momento  que el sistema genere la notificación,  se deberá indicar que se desea instalar para poder continuar.
          
            .col-md-6
              figure.w480
                img.shadow-box(src='@/assets/curso/Figura8.jpg', alt='Texto que describa la imagen')

          .row.p-7
            .col-md-5.mb-4.mb-md-0
              .h3 Interfaz advertencia de red VirtualBox
              p En algunas ocasiones,  es posible que en los  sistemas operativos Windows se presente o salte  una advertencia de seguridad,  indicando al usuario que se va a  autorizar una instalación de un software de Oracle Corporation. Al momento  que el sistema genere la notificación,  se deberá indicar que se desea instalar para poder continuar.
          
            .col-md-7
              figure
                img.w620.shadow-box(src='@/assets/curso/Figura8A.jpg', alt='Texto que describa la imagen')
    
    .main-wrap.p-4.p-md-5
      p.mb-5  A continuación, se podrán observar acciones realizables durante la instalación de VirtualBox:

      PasosA.color-acento-contenido.mb-5(tipo="n")
        .row
          .col-md-6.mb-4.mb-md-0
            h3 Alistamiento del sistema operativo a cargar en una máquina virtual
            p Es momento de abordar la virtualización de un sistema operativo Linux de distribución Ubuntu, por lo cual se debe realizar el proceso de descarga del mismo desde la pagina oficial www.ubuntu.com, ingresando  a la  sección de descargas.
          .col-md-6
            figure
              img(src='@/assets/curso/t4-i2.jpg', alt='Texto que describa la imagen')

        .row
          .col-md-6.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t4-i3.jpg', alt='Texto que describa la imagen')

          .col-md-6
            p Al ingresar a la página oficial, se puede realizar la  descarga de diferentes tipos de distribuciones del sistema operativo, esto en diferentes versiones, facilitando el acceso  a la documentación oficial. En este punto el sistema detecta la arquitectura del procesador de la máquina desde donde se genera la  descarga.
            

        .row
          .col-md-6.mb-4.mb-md-0
            p Ahora es necesario que desde la página se indique cuáles son los requerimientos mínimos recomendados para un proceso de instalación, estos deben leerse  antes de iniciar el proceso de instalación, de esta manera podrá asegurarse el éxito del mismo.
        
          .col-md-6
            figure
              img(src='@/assets/curso/t4-i4.jpg', alt='Texto que describa la imagen')


        .row
          .col-md-6
            figure
              img.h270(src='@/assets/curso/t4-i5.svg', alt='Texto que describa la imagen')

          .col-md-6.mb-4.mb-md-0
            p El tamaño del archivo puede variar dependiendo de la versión y tipo de distribución seleccionada.  El descargable se genera en una  extensión .iso y, para el caso particular de Ubuntu 20.04.2.0 para arquitectura de procesador amd y 64 bits, ocupa un espacio aproximado de 2.67GB. Todos los archivos .iso de sistemas operativos generalmente tienen un  tamaño considerable por lo que debe asegurarse de tener el espacio disponible para el proceso de descarga  del mismo, además de una buena conexión a Internet.
        
      p.mb-5  Para finalizar, conoce acerca de la configuración de la máquina virtual e instalación del sistema operativo de la máquina invitada. 

      .tarjeta.color-blue2.p-3.mb-5
        .row.justify-content-around.align-items-center
          .col-3.col-sm-2.col-lg-1
            img(src="@/assets/curso/t4-i6.svg", alt='imagen decorativa')
          .col
            .row.justify-content-between.align-items-center
              .col.mb-3.mb-sm-0
                h3.mb-1 Configuración de la máquina virtual e instalación del sistema operativo de la máquina invitada
                p.text-small Descarga la siguiente guía PDF.
              .col-sm-auto
                a.boton.color-acento-botones(:href="obtenerLink('/downloads/prueba.pdf')" target="_blank")
                  span Descargar
                  i.fas.fa-file-download
             






</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.h250{height: 250px}
.h270{max-height: 250px}
.h360{height: 360px}
.w480{max-width: 480px}
.w620{max-width: 620px}
</style>
