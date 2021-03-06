import Head from 'next/head'
import Link from 'next/link'
export default function menu(){
    return(
        <div>
            <Head>
                <link rel="stylesheet" href="css/page1.css"/> 
            </Head>
            <header>
                <img src="img/aganol.png"/>
                <a href="/login">
                <div className="nav-profil">
                    <label>Login</label>
                </div>
                </a>
                <form>
                    <input type="search" name="cari" class="cari" placeholder="Cari sesuatu"/>
                </form>
                <nav>
                    <ul>
                        <Link href="/index">
                            <li>Home</li>
                        </Link>
                        <li>Task</li>
                        <li>Projek</li>
                        <li>Helpdesk</li>
                        <Link href="/wahyutricahyo">
                            <li>About me</li>
                        </Link>
                    </ul>
                </nav>
            </header>
        </div>
    )
}