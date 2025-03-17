const pages = [
    {href: '/', title: 'Home'},
    {href: '/jsph-table', title: 'JSPH' },
]

export function Header(){
    return <header>
        <nav>
            <ol>
                {pages.map(pages=> 
                    <li key={pages.href}>
                        {pages.title}
                    </li>
                )}
            </ol>
        </nav>
    </header>
}