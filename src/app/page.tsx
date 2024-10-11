import { Metadata } from "next";
import Image from "next/image";
import styles from "./page.module.css";


export const metadata: Metadata = {
  title: '...',
  description: '...',
  openGraph: {
    title: 'title',
    description: 'description',
    url: 'www.facebook.com',
    images: ['https://www.dev.webportal.vendidit.com/_next/image?url=https%3A%2F%2Fauction-site-storage.s3.us-east-2.amazonaws.com%2Fproducts%2F415327%2FSingleUnit.jpg%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAVN3I3QVJUUQGBLUC%252F20241011%252Fus-east-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20241011T134856Z%26X-Amz-Expires%3D3600%26X-Amz-Signature%3D54fc6e0d3e541ef776e3bec99529ace8fec32a4f6f50aff6cb0057984322810d%26X-Amz-SignedHeaders%3Dhost&w=600&q=100', 'https://www.dev.webportal.vendidit.com/_next/image?url=https%3A%2F%2Fauction-site-storage.s3.us-east-2.amazonaws.com%2Fproducts%2F414805%2FTruckload.jpg%3FX-Amz-Algorithm%3DAWS4-HMAC-SHA256%26X-Amz-Credential%3DAKIAVN3I3QVJUUQGBLUC%252F20241011%252Fus-east-2%252Fs3%252Faws4_request%26X-Amz-Date%3D20241011T134856Z%26X-Amz-Expires%3D3600%26X-Amz-Signature%3Dfb2d6752d02b6a461170cb43e51d07c13159026e310aa90c9246affa13c0b105%26X-Amz-SignedHeaders%3Dhost&w=600&q=100'],
  },
}

export default function Home() {
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <Image
          className={styles.logo}
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol>
          <li>
            Get started by editing <code>src/app/page.tsx</code>.
          </li>
          <li>Save and see your changes instantly.</li>
        </ol>

        <div className={styles.ctas}>
          <a
            className={styles.primary}
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className={styles.logo}
              src="https://nextjs.org/icons/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Deploy now
          </a>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Read our docs
          </a>
        </div>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
