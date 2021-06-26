<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    .row
      .col-lg-7
        p.mb-3  Este componente formativo aborda el tema de la virtualización como la base sobre la que se fundamenta la computación en la nube y los sistemas actuales de despliegue de aplicaciones y servicios en la nube. 
        p.mb-5  En el desarrollo de este espacio de aprendizaje, se abordan las generalidades de la virtualización, los tipos y características que más se destacan, además, un listado donde se presentan varias herramientas para realizar un proceso de virtualización de servidores. <b>Para finalizar, se presentará un ejemplo detallado referente a la realización de la virtualización de un sistema operativo Linux corriendo en una máquina Windows.</b>
        .cajon.color-secundario.p-4
          p Para la elaboración de este componente, se abordaron varios autores conocidos en virtualización, de quienes se han citado y referenciado conceptos y ejemplos para los fines educativos de esta materia, en el entendido de que el conocimiento es social y, por lo tanto, es para usarlo por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos, aprendices y lectores en general, <b>que estén interesados en acercarse a asuntos básicos de programación de aplicaciones y servicios para la nube.</b>
      .col-lg-5
        figure.slideInUp
          img(src='@/assets/curso/t0-i1.jpg', alt='usuario frente al computador iniciando sistema operativo Windows')
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
