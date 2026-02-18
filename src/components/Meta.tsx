import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextSeo } from 'next-seo';
import { AppConfig } from '../../utils/AppConfing';

type IMetaProps = {
  title: string;
  description: string;
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  const {title, description} = props

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <title>{title}</title>
        <meta name="description" content={description} />
        
      </Head>
      <NextSeo
        title={props.title}
        description={props.description}
       
        openGraph={{
          title: props.title,
          description: props.description,
          locale: AppConfig.locale,
          site_name: AppConfig.site_name,
        }}
      />
    </>
  );
};

export { Meta };