export default {
    template:`
        <header class="app-header">
            <div class="logo">
                <h2>Appsus</h2>
            </div>
            <nav class="nav-bar">
                <router-link to="/">Home</router-link> |
                <router-link to="/book">Books</router-link> |
                <router-link to="/about">About</router-link>|
                <router-link to="/note">Notes</router-link>|
                <router-link to="/mail">Mail</router-link>
            </nav>
        </header>
    
    `
}