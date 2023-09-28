import Head from 'next/head';
import Link from 'next/link';

export default function Layout( {children, home} ) {
  return(
    <div className = "text-center">
      <Head>
        <title>Basic Next.js App</title>
      </Head>
      <header>
      <h1>Best Sonoma County Italian Restaurants</h1>
        <h2>(selected by their dessert menus)</h2>
      </header>
      <main className = "col-6 margin-auto">
        {children}
      </main>
      {!home && (
        <Link href="/" className="btn btn-primary mt-3">
         ← Back to home
        </Link>
        )
      }
      <footer className="mt-3 link-primary">
        <a href="https://www.sonomacounty.com/articles/best-italian-restaurants-sonoma-county">Read about the best Italian resturants in Sonoma County here</a>
      </footer>
    </div>
  );
}