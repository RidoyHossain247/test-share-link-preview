import { Metadata } from "next";
import styles from "./page.module.css";


export const metadata: Metadata = {
  title: 'title1',
  description: 'description1',
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
      <h1>Hello World</h1>
    </div>
  );
}
