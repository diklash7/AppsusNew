export default{
template:`
<section>
<label>

{{info.txt}}

<!-- <input type="text" v-model="val" @change="reportVal"/> -->

</label>
</section>

`,
props:['info'],
data(){
    return{
        val:'',
    }

},
methods:{
    reportVal(){
        this.$emit('setVal', this.val)
    }
}








}