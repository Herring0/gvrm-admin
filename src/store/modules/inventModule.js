export const inventModule = {
    state: () => ({
        selectedCategory: null
    }),
    getters: {

    },
    mutations: {
        setSelectedCategory(state, category) {
            state.selectedCategory = category;
        }
    },
    actions: {

    },
    namespaced: true
}