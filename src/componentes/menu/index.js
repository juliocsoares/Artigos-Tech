import MenuLink from "../../MenuLink";
import "./menu.modules.css";


export default function Menu() {
    return (
        <header>
            <nav className="navegacao">
                <MenuLink to="/">
                    Inicio
                </MenuLink>
                <MenuLink to="/artigos">
                    Artigos
                </MenuLink>
                <MenuLink to="/sobremim">
                    Sobre Mim
                </MenuLink>
            </nav>
        </header>
    );
}
