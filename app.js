{
    axios.interceptors.response.use(res => {
        console.info("status:" + res.status);
        return datalist;
    }, error => {
        console.info("error:");
        console.info(error)
    })


    let app = new Vue({
        el: "#app",
        data: {
            msg: "hello world!",
            list: null
        },
        created: async function () {
            this.list = await this.getmsg();
        },
        methods: {
            getmsg: async function () {
                let result;
                await axios.get("https://yesno.wtf/api").then(data => {
                    result = data;
                })
                console.info(result);
                return result;
            },
            setH1:function(val){
                this.msg = val;
            }
        },
        template: `
            <div class="wrap">
                <h1>{{msg}}</h1>
                <DataList :list="list"></DataList>
                <Iput @iputeventback="setH1"></Iput>
                <img src="lalalala.png">
            </div>
        `
    })





    ////////////////////
    var datalist = [{
        "type": "css",
        "content": "flex-order"
    },
    {
        "type": "vue",
        "content": "for"
    },
    {
        "type": "vue",
        "content": "if"
    },
    {
        "type": "vue",
        "content": "component"
    },
    {
        "type": "vue",
        "content": "props"
    },
    {
        "type": "vue",
        "content": "emit"
    },
    {
        "type": "vue",
        "content": "event"
    },
    {
        "type": "vue",
        "content": "class"
    },
    {
        "type": "vue",
        "content": "eventbus"
    },
    {
        "type": "vue",
        "content": "axios"
    },
    {
        "type": "vue",
        "content": "router"
    },
    {
        "type": "vue",
        "content": "vues"
    },
    {
        "type": "ts",
        "content": "ts-type"
    },
    {
        "type": "webpack",
        "content": "all-loader"
    },
    ]
    var url = "https://yesno.wtf/api";
}