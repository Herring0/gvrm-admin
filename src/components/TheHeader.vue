<template>
    <header>
        <div class="navbar">
            <div class="navbar-container">
                <div class="navbar-wrapper">
                    <a href="#" class="navbar-brand">GvrmAdmin</a>
                    <nav role="navigation" class="nav-menu-wrapper">
                        <ul class="nav-menu">
                            <li>
                              <router-link to="invent" class="nav-link">Инвентаризация</router-link>
                            </li>
                            <li>
                                <router-link to="eds" class="nav-link">ЭЦП</router-link>
                            </li>
                            <li>
                                <a href="#" class="nav-link">VPN</a>
                            </li>
                            <li>
                                <div class="nav-dropdown-toggle">
                                    <a href="#" class="nav-link">Справочники</a>
                                    <nav class="nav-dropdown-list">
                                        <a href="#" class="nav-dropdown-link">Оборудование</a>
                                        <a href="#" class="nav-dropdown-link">Сотрудники</a>
                                        <a href="#" class="nav-dropdown-link">Кабинеты</a>
                                    </nav>
                                </div>
                            </li>
                        </ul>
                    </nav>
                    <a href="#" class="nav-user-button">{{ user }}</a>
                </div>
            </div>
        </div>
    </header>
</template>
  
<script>
export default {
    name: 'TheHeader',
    props: {
        user: String
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.navbar {
    background-color: var(--main-bg-color);
    width: 100%;
}

.navbar-container {
    color: white;
    padding: 10px 20px;
    margin-right: auto;
    margin-left: auto;
}

.navbar-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1170px;
    margin: auto;
}

.navbar-brand {
    float: left;
    font-size: 24px;
    letter-spacing: .25px;
    color: white;
}

.nav-menu-wrapper {
    float: right;
    margin: auto;
}

.nav-menu {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0;
}

.nav-link {
    margin-left: 5px;
    margin-right: 5px;
    padding: 5px 10px;
    font-size: 14px;
    letter-spacing: .25px;
    color: white;
}

.nav-link:hover,
.nav-dropdown-link:hover {
    box-shadow: 0 1px 0 0 rgb(255 255 255);
    transition-duration: 0.2s;
}

.nav-user-button {
    color: white;
    letter-spacing: .25px;
}

.nav-dropdown-list {
    display: none;
    position: absolute;
    background-color: var(--main-bg-color);
    padding-top: 10px;
    padding-bottom: 10px;
    border-radius: 10px;
}

.nav-dropdown-link {
    letter-spacing: .25px;
    color: white;
    display: block;
    font-size: 14px;
    padding: 10px 20px;
}

.nav-dropdown-toggle:hover .nav-dropdown-list {
    display: block;
}
</style>