// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// Pode acessar banco de dados
// Pode requisitar apis
export default async function handler(req, res) {
  console.log('### res => ', res);
  await res.unstable_revalidate('/');// Força a atualização
  res.status(200).json({ name: 'John Doe' })
}
