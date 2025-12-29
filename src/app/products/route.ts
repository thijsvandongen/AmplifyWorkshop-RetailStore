import {
  cookiesClient,
} from '../../utils/server-utils';

export async function GET() {
  const { data } = await cookiesClient.models.Product.list({
    limit: 5
  });

  return Response.json(data);
}