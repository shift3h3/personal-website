import { createStore } from 'vuex'

// Create a new store instance.
const store = createStore({
    state () {
        return {
            // used for changing navbar from web to mobile view
            mobileView: true,
            // scrollPosition used in AppHeader and AppHeaderMobile
            scrollPosition: 0,
            windowWidth: true,
            reveal: 0,
            // links used in AppHeader and AppHeaderMobile
            links: [
                { title: "HOME", to: "/" },
                { title: "Experiences", to: "/experience" },
                { title: "Modeling", to: "/modeling" },
                { title: "Programming", to: "/programming" },
                { title: "Contact", to: "/contact" },
            ],
        }
    },
    mutations: {
        // update the scrollPosition to current scroll position
        updateScroll(state) {
            state.scrollPosition = window.scrollY
        },
        handleView(state){
            state.mobileView = window.innerWidth < 1024;
            state.windowWidth = window.innerWidth < 640;
        },
        changeSlide(state,index){
            state.reveal = index;
        }
    },
    getters:{
        allLinks: (state) => state.links,
        scrollPosition: (state) => state.scrollPosition,
        windowWidth: (state) => state.windowWidth,
        mobileView: (state) => state.mobileView,
        reveal: (state) => state.reveal,
        },
    actions: {
        updateScroll({commit}){
            commit('updateScroll')
        },
        handleView({commit}){
            commit('handleView')
        },
        changeSlide({commit},index){
            commit('changeSlide',index)
        }
    },
})

export default store;