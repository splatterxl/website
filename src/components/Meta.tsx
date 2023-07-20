export const Meta: React.FC<{ page?: string }> = ({ page }) => (
  <>
    <meta
      name="og:title"
      content={page ? `Splatterxl | ${page}` : 'Splatterxl'}
    />
    <meta
      name="og:description"
      content="Backend engineer and web designer, occasional gamer."
    />
    <meta
      name="description"
      content="Backend engineer and web designer, occasional gamer."
    />
    <meta
      name="og:image"
      content="/assets/e0e3e0f61d042aa38595bc8e09f2b687c0ec519c.png"
    />
    <meta
      property="og:thumbnail"
      content="/assets/e0e3e0f61d042aa38595bc8e09f2b687c0ec519c.png"
    />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="Splatterxl" />
    <meta property="og:locale" content="en_GB" />
    <meta name="theme-color" content="#1cbe65" />
    <link
      rel="icon"
      href="/assets/e0e3e0f61d042aa38595bc8e09f2b687c0ec519c.png"
    />
  </>
);
