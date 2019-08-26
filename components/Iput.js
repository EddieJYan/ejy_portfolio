{
    let htmlStr = `<div><input type="text" v-model="val"><button @click="btnHandlar">确认</button></div>`;
    Vue.component("Iput",{
        data(){
            return {
                val:"请输入.."
            }
        },
        methods:{
            btnHandlar:function(){
                this.$emit("iputeventback",this.val)
            }
        },
        template:htmlStr
    })
}