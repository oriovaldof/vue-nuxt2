<template>
  <div>
    <h1 class="text-lg font-bold">Servicos</h1>
    <NuxtLink to="/servicos/desenvolvimento-de-sites">
      Desenvolvimento de Sites
    </NuxtLink>
    <NuxtLink to="/servicos/marketing-digital"> Marketing Digital </NuxtLink>
    <br /><br />
    <NuxtChild />

    <div v-if="$fetchState.pending">Carregando...</div>
    <div v-else>
      <div
        v-for="service in services"
        :key="service.id"
        class="border-b border-gray-400 py-3"
      >
        {{ service.username }}
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Servicos",
  head() {
    return {
      title: this.title,
      meta: [
        { hid: "description", name: "description", content: "Minha Descrição do serviço" },
      ],
      bodyAttrs:{
        class: 'bg-gray-400'
      }
    };
  },
  data: () => ({
    title:'',
    services: [],
  }),
  async fetch() {
    //fetch é executado depois do componente ser criado
    this.services = await this.$axios.$get(
      "users?_limit=3"
    );
  },
  created(){
    this.getTitle();
  },
  methods:{
    getTitle(){
      setTimeout(()=>{
        this.title = 'Serviços'
      },3000);
    }
  }
};
</script>
