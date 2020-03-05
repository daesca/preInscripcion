const componentA = {

    components: {

        "TextBox": textBox,
        "TextField": textField

    },
    data() {

        return {
            selected: '',
            // nombre: "Hola desde la seccion de creacion",
            saveOption: false,
            avalibleFormElemets: avalibleFormElemets

        };
    },
    methods: {

        // saveElement(configElement) {

        //     // store.commit('addElementForm', configElement);

        //     console.log("Esta entrando en el metodo");

        //     configForm.push(configElement);

        // },

        saveElement(configElement) {

            console.log("Esta entrando en el metodo", configElement);

            store.commit('addElementForm', configElement);

            this.saveOption = false;

            // configForm.push(configElement);

        }

    },
    template: `
        <div>

            <select v-model="selected">
                <option disabled value="">Seleccione una opcion</option>
                <option v-for="(value, key, index) in avalibleFormElemets" :key="index" :value="key">{{ value }}</option>

            </select>

            Selected: {{ selected }}

            <div v-if="selected != ''">

                <component :is="selected" :activateSaveOption ="saveOption" @send-option="saveElement"></component>

                <!-- <component :is="selected" :activateSaveOption ="saveOption"></component> -->

            </div>
            
            <div>

                <button @click="saveOption = true">Guardar elemento</button>
                <span v-if="saveOption">Si funciona el boolean</span>
            
            </div>
        
        </div>


    `

};

// define component variable 
// const fruitY = {
//     data() {
//         return {
//             fruits: ["Apple", "Orange", "Avocado", "Coconut", "Kiwi", "Mango"]
//         };
//     },
//     template: `
//     <ul>
//     <li v-for="fruit in fruits">{{ fruit }}</li>
//     </ul> 
//     `
// };


// // create a root instance and register the local component inside it 
// let app = new Vue({
//     el: '#vue-app',
//     components: {
//         fruity
//     }
// });