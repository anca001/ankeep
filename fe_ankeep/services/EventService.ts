import axios from "axios";

export default {
    async getRecipes() {
        let res = await axios.get('http://localhost:5656/recipes/')
        return res.data    
    },
    
}