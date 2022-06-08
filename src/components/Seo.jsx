import { Title, Meta } from 'solid-meta';

const SEO = ({ description, title, siteTitle }) => {
  return (
    <>
      <Title>{`${title} | ${siteTitle}`}</Title>
      <Meta name="description" content={description} />
      {/* <Meta property="og:url" content={`http://ryancanfield.me/${title.toLowerCase()}`}/> */}
      {/* <Meta property="og:image" content="%PUBLIC_URL%/media/og-image.png"/> */}
      <Meta property="og:type" content="website" />
      <Meta property="og:title" content={title} />
      <Meta property="og:description" content={description} />
      <Meta property="og:site_name" content={siteTitle} />
      <Meta property="twitter:card" content="summary" />
      <Meta property="twitter:creator" content='https://twitter.com/local__citizen' />
      <Meta property="twitter:title" content={title} />
      <Meta property="twitter:description" content={description} />
    </>
  )
}

export default SEO;
