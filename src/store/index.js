import {createStore} from "vuex";
import {inventModule} from "@/store/modules/inventModule";

export default createStore( {
    modules: {
        invent: inventModule
    }
})