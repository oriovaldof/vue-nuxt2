<template>
 <div>
  <pre>
    {{$config}}
  </pre>
  <br><br>
  <VTooltip>
    <a>Sponsor me</a>
    <template #popper>
      Help me found my Open Source work!
    </template>
  </VTooltip>
  <pre>
    {{$store.state.user}}
  </pre>
  <pre>
    {{user}}
  </pre>
 </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  name: 'IndexPage',
  asyncData({$config}) {
    console.log($config);
  },
  created(){
    console.log(this.$config.youtube_api_key); //como a variavel esta setada como publica é mostrada
    console.log(this.$config.facebook_api_key); //como a variavel esta setada como privada não é mostrada
    console.log(this.$name('Ori'));
  },
  mounted(){
    console.log(this.$dayjs().format());
  },
  computed:{
    ...mapState({
      user: state => state.user
    })
  }
}
</script>
