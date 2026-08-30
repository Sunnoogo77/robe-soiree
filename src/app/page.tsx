import Link from "next/link";
import { PromoBar } from "@/components/PromoBar";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ProductCard } from "@/components/ProductCard";
import { HeroPhoto, EditorialPhoto, UniversArt } from "@/components/Silhouette";
import { PRODUCTS } from "@/lib/products";

export default function HomePage() {
  const newProducts = [PRODUCTS[0], PRODUCTS[1], PRODUCTS[3], PRODUCTS[5]];
  return (
    <div className="ml-screen ml-screen--home" data-screen-label="01 Home">
      <PromoBar />
      <Navbar active="boutique" />

      <section className="ml-hero">
        <div className="ml-hero__bg" aria-hidden="true">
          <HeroPhoto />
        </div>
        <div className="ml-hero__content">
          <p className="ml-hero__eyebrow">Collection hiver 2026</p>
          <h1 className="ml-hero__title">La nouvelle collection.</h1>
          <p className="ml-hero__sub">
            Pièces d&apos;exception, en quantités limitées.
            <br />
            Confectionnées à Paris.
          </p>
          <div className="ml-hero__cta">
            <Link href="/boutique" className="ml-btn ml-btn--apple-blue ml-btn--lg">
              Découvrir
            </Link>
            <Link href="/boutique" className="ml-btn ml-btn--apple-blue-outline ml-btn--lg">
              Boutique
            </Link>
          </div>
        </div>
      </section>

      <section className="ml-section">
        <div className="ml-container">
          <header className="ml-section__head">
            <p className="t-eyebrow">Nos univers</p>
            <h2 className="t-h1" style={{ fontSize: 48 }}>
              Trois maisons, une signature.
            </h2>
          </header>
          <div className="ml-univers">
            <Link className="ml-univers__tile" href="/boutique?cat=robes">
              <div className="ml-univers__art"><UniversArt kind="robes" /></div>
              <div className="ml-univers__label">
                <span className="ml-univers__name">Robes</span>
                <span className="ml-univers__sub">38 pièces</span>
              </div>
            </Link>
            <Link className="ml-univers__tile" href="/boutique?cat=sacs">
              <div className="ml-univers__art"><UniversArt kind="sacs" /></div>
              <div className="ml-univers__label">
                <span className="ml-univers__name">Sacs</span>
                <span className="ml-univers__sub">24 pièces</span>
              </div>
            </Link>
            <Link className="ml-univers__tile" href="/boutique?cat=accessoires">
              <div className="ml-univers__art"><UniversArt kind="access" /></div>
              <div className="ml-univers__label">
                <span className="ml-univers__name">Accessoires</span>
                <span className="ml-univers__sub">46 pièces</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <section className="ml-section ml-section--alt">
        <div className="ml-container">
          <header className="ml-section__head ml-section__head--row">
            <div className="col" style={{ gap: 6 }}>
              <p className="t-eyebrow">Nouveautés</p>
              <h2 className="t-h1" style={{ fontSize: 48 }}>
                Arrivages de la semaine.
              </h2>
            </div>
            <Link href="/boutique?sort=new" className="ml-link-blue" style={{ fontSize: 15 }}>
              Voir tout
            </Link>
          </header>
          <div className="ml-grid">
            {newProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      <section className="ml-section">
        <div className="ml-container ml-edito">
          <div className="ml-edito__art" aria-hidden="true">
            <EditorialPhoto />
          </div>
          <div className="ml-edito__body">
            <p className="t-eyebrow">L&apos;atelier</p>
            <h2 className="t-display" style={{ fontSize: 48 }}>
              Une pièce, une signature.
            </h2>
            <p className="ml-edito__copy">
              Chaque robe est confectionnée à Paris, dans notre atelier rue
              d&apos;Aboukir. Coupes droites, finitions main, étoffes choisies
              chez les tisseurs italiens et lyonnais. Numérotées, livrées
              dans leur écrin.
            </p>
            <div className="row">
              <button className="ml-btn ml-btn--primary" type="button">
                Visiter l&apos;atelier
              </button>
              <a href="#" className="ml-link-blue" style={{ fontSize: 15 }}>
                Notre savoir-faire ›
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
