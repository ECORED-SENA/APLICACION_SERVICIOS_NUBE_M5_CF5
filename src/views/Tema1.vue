<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .titulo-principal
      .titulo-principal__numero
        span  1
      h1 Generalidades de la virtualización

    .row.mb-5
      .col-lg-2
        figure.mb-3
          img(src='@/assets/curso/t1-i1.svg', alt='Dos computadores conectados en red')
      .col-lg-10
        p.mb-3  La virtualización es el proceso mediante el cual es posible crear una representación de elementos físicos, como servidores, sistemas de almacenamiento, redes e incluso aplicaciones, mediante software, de modo que se puedan reducir los costos asociados a infraestructura de TI, al tiempo que se mejora la eficiencia en el uso de estos recursos (VMware, s.f.).
        p.mb-3  A continuación, conoceremos el esquema de virtualización. 
    
    .row.justify-content-center.mb-5
      .col-lg-10  
        figcaption.customCaption-bold.mb-2.h5  Esquema de virtualización
        figure.mb-3.slideInUp
          img(src='@/assets/curso/t1-i2.svg', alt='Esquema de virtualización entre infraestructura TI, Hypervisor, máquinas virtuales, representación')
    .row.mb-5
      .col-lg-8
        p.mb-5  Normalmente, un conjunto de recursos de infraestructura, como discos, memorias, procesadores, entre otros, que están presentes en un equipo o grupo de servidores, son ocupados únicamente por el sistema operativo y las aplicaciones que se ejecutan sobre este, y no siempre se usa todo su potencial, provocando desperdicios en el uso de recursos. <b>Con la virtualización, es posible hacer que estos recursos ejecuten una o varias máquinas virtuales al mismo tiempo y cada una de estas máquinas podrá ejecutar su propio conjunto de aplicaciones con sistemas operativos totalmente independientes,</b> como se representa en la figura 1.
        .cajon.color-secundario.p-4
          p <b>Una máquina virtual (MV)</b> es un software especial que funciona como un contenedor de software donde se incluye un sistema operativo y aplicaciones que funcionan totalmente independientes. <b>De esta forma, un equipo puede tener instaladas varias máquinas virtuales, cada una de las cuales se ejecuta independientemente</b> en un mismo equipo que sirve como host.
      .col-lg-4
        figure.mb-3
          img(src='@/assets/curso/t1-x1.svg', alt='tres computadores y un servidor conectados')
    p.mb-5  A continuación, se listan varias de las ventajas que se obtiene con la implementación de esquemas de virtualización, según VMWare (s.f.):

    .row.justify-content-center.mb-5
      .col-lg-10
        figcaption.customCaption.mb-2  Figura 1. Implementación de esquemas de virtualización.
        .boxTable
          .row.g-0
            .col-lg-5.light-yellow.d-flex.align-items-center
              .content-box.text-center
                figure.mb-3
                  img.h80(src='@/assets/curso/t1-i4.svg', alt='Dos computadores conectados en red')
                .h3 Implementación de<br/> esquemas de virtualización 

            .col-lg-7
              ul.lista-ul.m-0.zebra
                li 
                  i.fa.fa-check
                  | Aumento de rendimiento.
                li 
                  i.fa.fa-check
                  | Se pueden asignar más o menos recursos dinámicamente a una máquina dependiendo de la utilidad real requerida.
                li 
                  i.fa.fa-check
                  | Automatización de operaciones
                li 
                  i.fa.fa-check
                  | Reducción en la inversión de capital y gastos operativos asociados a la infraestructura de TI.
                li 
                  i.fa.fa-check
                  | Reducción de tiempos de inactividad de los recursos.


  
</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped></style>
