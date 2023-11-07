const {createApp} = Vue;

createApp({
    data() {
        return {
            questions: [],
            selected: null
        }
    },
    methods: {
        displayCountry(){
            axios.get("https://opentdb.com/api.php?amount=1&type=boolean").then((resp) => {
                console.log(resp.data.results)
                this.questions = resp.data.results
            })
        },
        showResult(){
            document.getElementById("result").classList.remove("d-none")
        }
            
    },
}).mount("#app")