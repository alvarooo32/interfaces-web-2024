import "./HeaderComponent.css"

function HeaderComponent(props){
    const {greetings, links} = props; //son las dos variables que cree para HeaderComponent en App.jsx

    return (
        <header>
            <h1>Bienvenidos{greetings}</h1>
            <nav>
                <ul>
                    <li>
                        <a href="#">{links.home}</a>
                    </li>
                    <li>
                        <a href="#">{links.blog}</a>
                    </li>
                    <li>
                        <a href="#">{links.news}</a>
                    </li>
                    <li>
                        <a href="#">{links.contact}</a>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default HeaderComponent; //Para poder exportar este componente