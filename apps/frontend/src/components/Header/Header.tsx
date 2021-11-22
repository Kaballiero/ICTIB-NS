import './header.module.scss'
export function Header({...args}) {
    return (
        <header style={{backgroundColor:args.color, height:132}}>
            <div className="__search">
                <input/>
                <h1>Lorem ipsum dolor sit amet, consectetur </h1>
            </div>

            <div>
                <button>quite</button>
                <button>pr</button>
            </div>
        </header>
    );
}

export default Header;