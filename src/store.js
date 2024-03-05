// store = è la  fonte della verità  
//che tutte le section deve avere in comune

import { reactive } from 'vue'

export const store = reactive ({
    // un data() condiviso da tutti i componenti della mia app

    cards : [],

    // inserisco una variabile(stringa vuota per ceracre le carte)
    searchCard: "",
})