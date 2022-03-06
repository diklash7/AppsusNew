export default {
    template: `
        <header class="app-header">
            <div class="logo">
                <h1>Books shop</h1>
            </div>
            <nav class="nav-bar">
                <router-link class="link" to="/">Home</router-link> 
                <router-link class="link" to="/book">Books</router-link> 
                <router-link class="link" to="/about">About</router-link>
            </nav>
        </header>
    `
}