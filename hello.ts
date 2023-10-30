// @see https://docs.aircode.io/guide/functions/
import aircode from 'aircode';

export default async function (params: any, context: any) {
  console.log('Received params:', params);
  console.log('test');
  const { hi } = params;

  return {
    message: `Hi, ${hi}.`,
  };
}
