import { Container } from 'react-bootstrap'
import Header from './Header'
import Footer from './Footer'


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Header />
            <main className="pt-5 mt-4">
            <Container className="container-narrow py-5">
            {children}
            </Container>
            </main>
            <Footer />
        </>
    )
}