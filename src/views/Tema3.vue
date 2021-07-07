<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  3
      h1 Herramientas de virtualización de servidores
    .clearfix
    br
    .row.justify-content-center.mb-5
      .col-lg-10.slideInUp
        .tarjeta-avatar-b.mb-5.custom-card
          .tarjeta.light-yellow.shadow-box
            .p-4
              p En el mercado, existen diversas herramientas de software creadas para facilitar el proceso de virtualización de servidores. En la Tabla 1, se presentan algunas de ellas usadas para entornos domésticos y pequeñas empresas. <b>Además, se comparten algunas de sus características y sitios web para ampliar la información sobre las mismas y realizar las descargas de varias de ellas.</b>
          img(src='@/assets/curso/t3-i1.svg' alt='imagen decorativa')

    #t3_1.titulo-segundo
      h2 Virtualización de servidores
    TabsB.color-acento-contenido.mb-2
      .py-4.py-md-5(titulo="VMware" :icono="require('@/assets/curso/t3-i2.svg')")
        .row
          .col-md-8.mb-4.mb-md-0.px-5
            .h3.d-block.d-sm-none VMware
            .h4 Características
            ul.lista-ul
              li 
                i.fa.fa-check
                | Gran cantidad de paquetes de software disponibles para virtualización.
              li 
                i.fa.fa-check
                | Tiene soluciones libres y de pago.
              li 
                i.fa.fa-check
                | Compatibilidad con la tecnología Intel VT-x, la cual permite ejecutar máquinas virtuales en forma nativa de la CPU host cuando esta tiene procesadores Intel.
              
            p.mb-5 En el material complementario, se encuentra la página oficial de descarga.
        
          .col-md-4
            figure
              img(src='@/assets/curso/t3-i1.jpg', alt='Logotipo de VMWARE')

      .py-4.py-md-5(titulo="Oracle VM VirtualBox" :icono="require('@/assets/curso/t3-i3.svg')")
        .row
          .col-md-8.px-5
            .h3.d-block.d-sm-none Oracle VM VirtualBox
            .h4 Características
            ul.lista-ul.mb-5
              li 
                i.fa.fa-check
                | Software gratuito descargable desde su sitio web oficial.
              li 
                i.fa.fa-check
                | Posibilidad de instalar máquinas Linux, MacOS y Windows en la gran mayoría de versiones de forma gratuita.
              li 
                i.fa.fa-check
                | Soporta virtualización en tecnologías Intel y AMD.

            p En el material complementario, se encuentra la página oficial de descarga.

          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t3-i2.jpg', alt='Logotipo de oracle')
        
      .py-4.py-md-5(titulo="Microsoft Hyper-V" :icono="require('@/assets/curso/t3-i4.svg')")
        .row
          .col-md-8.mb-4.mb-md-0.px-5
            .h3.d-block.d-sm-none Microsoft Hyper-V
            .h4 Características
            ul.lista-ul.mb-5
              li 
                i.fa.fa-check
                | Disponible en forma nativa en S.O Windows en versión pro y server. Es decir, si se tiene este tipo de versiones, estará disponible de forma gratuita y no requiere de instalación de software externo al sistema.
              li 
                i.fa.fa-check
                | Sirve para virtualizar sistemas Windows y otros como Linux y FreeBSD.
              li 
                i.fa.fa-check
                | Soporta virtualización en tecnologías Intel y AMD.

            p En el material complementario, se encuentra la página oficial de habilitar Hyper-V. 
        
          .col-md-4
            figure
              img(src='@/assets/curso/t3-i3.jpg', alt='Logotipo de microsoft hyper-V')


      .py-4.py-md-5(titulo="Qemu" :icono="require('@/assets/curso/t3-i5.svg')")
        .row
          .col-md-8.px-5
            .h3.d-block.d-sm-none Qemu
            .h4 Características
            ul.lista-ul.mb-5
              li 
                i.fa.fa-check
                | Es software libre y está disponible para diferentes tipos de sistemas operativos.
              li 
                i.fa.fa-check
                | No dispone de GUI, pero se puede instalar mediante una extensión para Mac y Windows.
              li 
                i.fa.fa-check
                | Soporta virtualización en tecnologías Intel y AMD.

            p En el material complementario, se encuentra la página oficial de descarga.

          .col-md-4.mb-4.mb-md-0
            figure
              img(src='@/assets/curso/t3-i4.jpg', alt='Logo de Qemu')
        
      
      .py-4.py-md-5(titulo="Parallels" :icono="require('@/assets/curso/t3-i6.svg')")
        .row
          .col-md-8.mb-4.mb-md-0.px-5
            .h3.d-block.d-sm-none Parallels
            .h4 Características
            ul.lista-ul.mb-5
              li 
                i.fa.fa-check
                | Hypervisor para sistemas operativos MacOS
              li 
                i.fa.fa-check
                | Permite ejecutar máquinas virtuales de otros sistemas sobre la plataforma de Apple.
              li 
                i.fa.fa-check
                | Compatibilidad con la tecnología Intel VT-x.
              li 
                i.fa.fa-check
                | Permite traspaso de archivos, carpetas compartidas y comunicación de todo tipo de dispositivos de E/S entre la máquina host y las virtuales.
              li 
                i.fa.fa-check
                | Se debe pagar licencia para su uso.


            p En el material complementario, se encuentra la página oficial de descarga y compra.
        
          .col-md-4
            figure
              img(src='@/assets/curso/t3-i5.jpg', alt='Logotipo de parallels')
    figcaption Fuente: SENA, 2021






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
</style>
