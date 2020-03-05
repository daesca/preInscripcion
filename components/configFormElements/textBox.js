const textBox = {

    props: [

        'activateSaveOption'

    ],
    data() {

        return {

            type: 'textBox',
            options: {

                title: '',
                placeHolder: '',
                keyWordsText: '',
                arrayKeyWors: [],
                valueElement: 0,


            },


        }

    },
    watch: {

        activateSaveOption: function(val) {

            console.log("El watcher esta funcionando", val);

            if (val) {

                let configElement = {
                    type: this.type,
                    options: this.options
                }

                return this.$emit('send-option', configElement);

            }
            // configForm.push(configElement);

        }

    },
    template: `

        <div>
            EstadoSAve: {{ activateSaveOption }}
            <label for="title">Ingrese un titulo o encabezado</label><br>
            <input type="text" name="title" v-model="options.title"></input> <br><br>

            <label for="placeHolder">Agregue un placeholder a la caja de texto</label><br>
            <input type="text" name="placeHolder" v-model="options.placeHolder"></input> <br><br>

            <label for="keyWords">Ingrese palabras claves separadas por comas y sin espacios</label><br>
            <input type="text" name="keyWors" v-model="options.keyWordsText"></input> <br><br>

            <label for="valueElement">Ingrese un valor para este elemento de encuesta</label><br>
            <input type="text" name="valueElement" v-model="options.valueElement"></input> <br><br>

        </div>
    
    `

}