import Link from "next/link"
const Navbar =() => {
    return(
        <nav className="Navbar">
        <ul>
            <li>
                <Link href="/">Home</Link>
            </li>
            <li>
                <Link href="/about">About</Link>
            </li>
                <Link href="/contact">contact</Link>
        </ul>
        </nav>
    );
}

export default Navbar;