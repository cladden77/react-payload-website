import { buildConfig } from 'payload/config';
import dotenv from 'dotenv';
import Page from './collections/Page';
import Media from './collections/Media';
import FormSubmission from './collections/FormSubmission';
import study from './collections/study';
import Category from './collections/Category';

dotenv.config();

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  collections: [
    Page,
    study,
    Media,
    FormSubmission,
    Category,
  ],
});
