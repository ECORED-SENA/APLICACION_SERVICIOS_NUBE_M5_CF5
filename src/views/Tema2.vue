<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  2
      h1 Tipos de virtualización
    p.mb-5  Los tipos de virtualización dependen de lo que se desee clasificar, esto se da desde la virtualización de servidores, sistemas operativos, de la red y de escritorios. A continuación, se enlista la intención de cada uno: 
    #t_2_1.titulo-segundo
      h2 Virtualización de servidores
    p.mb-5  La virtualización de servidores es una implementación en la que <b>un servidor físico (host) se divide mediante software en varios servidores virtuales únicos y aislados,</b> los cuales se visualizan al cliente como servidores independientes. Según VMware (s. f.), este tipo de virtualización tiene las siguientes ventajas clave:
      .row.justify-content-center.mb-5
        .col-lg-8
          .boxTable.slideInUp
            .row.g-0
              .col-lg-5.light-yellow.d-flex.align-items-center
                .content-box.text-center
                  figure.mb-3
                    img.h80(src='@/assets/curso/t2-i2.svg', alt='Dos computadores conectados en red')
                  .h3 Ventajas de la virtualización 

              .col-lg-7
                ul.lista-ul.m-0.zebra
                  li 
                    i.fa.fa-check
                    | Mayor disponibilidad de los servidores.
                  li 
                    i.fa.fa-check
                    | Reducción en costes operativos.
                  li 
                    i.fa.fa-check
                    | Eliminación de la complejidad de los servidores.
                  li 
                    i.fa.fa-check
                    | Mejora en el rendimiento de las aplicaciones.
                  li 
                    i.fa.fa-check
                    | Distribución más rápida de las cargas de trabajo.
    p.mb-5.text-bold  La virtualización de servidores se puede clasificar en dos tipos:
    .row.mb-5
      .col-lg-6
        .card.outlined.h-100.slideInLeft
          .card-body
            .h5.titulo-cuarto  Virtualización completa:
            p.card-text.mb-5 En este tipo de virtualización, <b>se usa el hipervisor,</b> el cual es un software desde el cual se realiza la supervisión y gestión de los recursos físicos y, adicionalmente, se encarga de independizar cada servidor virtual. Sin embargo, el hipervisor requiere recursos para hacer el procesamiento correspondiente, <b>lo que puede afectar el rendimiento general del servidor.</b>
            br
            figure
              img(src='@/assets/curso/t2-i3.svg', alt='grafico ilustrativo de los componentes de una virtualización completa')
      .col-lg-6    
        .card.outlined.h-100.slideInRight
          .card-body
            .h5.titulo-cuarto  Paravirtualización:
            p.card-text.mb-4 En este esquema, cada sistema operativo de los servidores virtuales tiene conocimiento de la existencia de los otros, por ende, el hipervisor se libera un poco de la carga para gestionar los sistemas operativos; adicionalmente, se tienen ventajas como la posibilidad de crear copias de seguridad fácilmente, migraciones más rápidas, mejor utilización del sistema y ahorro de energía. No todos los sistemas operativos son aptos para este proceso, en algunos casos se pueden presentar problemas de compatibilidad de hardware.
            figure
              img(src='@/assets/curso/t2-i4.svg', alt='grafico ilustrativo de un esquema paravirtualizado')
    Separador
    br
    br
    #t_2_2.titulo-segundo
      h2 Virtualización a nivel de sistema operativo o basada en contenedores
    .row.mb-5
      .col-lg-12
        .card.outlined.h-100
          .card-body
            .row
              .col-lg-6
                p.mb-3  En este tipo de virtualización <b>no se usa hipervisor,</b> se hace uso del sistema operativo del servidor físico, el cual se encarga de las actividades de virtualización; sin embargo, en este esquema, <b>los servidores virtuales deben ejecutar el mismo sistema operativo del host.</b> 
              .col-lg-6
                figure
                  img(src='@/assets/curso/t2-i5.svg', alt='grafico ilustrativo de un esquema basado en contenedores')
    Separador
    br
    br    
    #t_2_3.titulo-segundo
      h2 Virtualización a nivel de sistema operativo o basada en contenedores
    p.mb-5  Consiste en la creación de redes virtuales independientes y separadas, mediante el uso de software sobre redes físicas. Este tipo de virtualización se puede presentar de dos maneras:
    .row.justify-content-center.mb-5
      .col-lg-5
        .boxTable
          .row.g-0
            .col-lg-12.light-yellow.d-flex.align-items-center
              .content-box.text-center.min-p
                .h3 Virtualización externa

            .col-lg-12.p-4
              p.mb-4 La cual consiste en la combinación de <b>varias redes completas, o partes, en una unidad virtual.</b>
        

      .col-lg-5
        .boxTable
          .row.g-0
            .col-lg-12.light-yellow.d-flex.align-items-center
              .content-box.text-center.min-p
                .h3 Virtualización interna

            .col-lg-12.p-4
              p.mb-4 Esta hace <b>uso de contenedores de software </b> para proveer la funcionalidad de una unidad de red física.

    .row.mb-5
      .col-lg-7
        .cajon.color-blue.p-4
          p Algunos ejemplos de aplicaciones y enfoque de virtualización de red con: <b>VPN, VLAN, SDN.</b>
    Separador
    br
    br    
    #t_2_4.titulo-segundo
      h2 Virtualización de escritorios
    .bloque-texto-a.bg-image.p-4.p-md-5.mb-5 
      .row.m-0.align-items-center.justify-content-between
        .col-lg-8
          .bloque-texto-a__texto.p-4.shadow-box
            p Este tipo de virtualización es empleada por muchas empresas en la actualidad, también se conoce como VDI por sus siglas en inglés (infraestructura de escritorios virtuales), en este esquema se dispone de un conjunto de servidores, o data centers, que publican varias páginas virtuales, cada una con su propio sistema operativo, aplicaciones y servicios, con su propio entorno de escritorio. <b>Estas máquinas de escritorio virtuales se entregan a los usuarios de forma remota, a través de una red pública o privada;</b> los usuarios no necesitan descargar la máquina virtual, ya que reciben la imagen de sus escritorios desde los servidores, de forma remota. La máquina virtual se ejecuta en los servidores y no en la PC del usuario. <b>Es decir, la carga de procesamiento, almacenamiento y demás capacidades de gestión se realiza por medio del servidor remoto.</b>

        .col-lg-4.mb-4.mb-lg-0
          h2.mb-0 











</template>

<script>
export default {
  name: 'Tema2',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
