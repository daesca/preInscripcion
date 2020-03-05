Vue.use(Vuex)

const store = new Vuex.Store({

    state: {

        configForm: [


        ]

    },
    mutations: {

        addElementForm(state, value) {

            state.configForm.push(value)

        }

    }

});