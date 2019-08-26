
{
    let htmlStr = `
    <ul class="ul-flex">
        <li v-for="(item,index) in list" :style="order(index)" :index="index" >
            <span>type:</span>{{item.type}}
            <span>content:</span>{{item.content}}
        </li>
    </ul>
    `

    Vue.component("DataList", {
        props:["list"],
        methods:{
            order:function(idx){
                return "order:" + idx;
            }
        },
        template: htmlStr
    })

}
