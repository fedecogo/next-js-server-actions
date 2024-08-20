import { fetchListOfProducts } from "../../../actions";

async function ServerActions() {
  const products = await fetchListOfProducts();

  console.log(products);

  return (
    <div>
      <h1>Server actions example -server components</h1>
      {products && products.length > 0 ? (
        products.map((i) => <li key={i.id}>{i.title}</li>)
      ) : (
        <h2> non c'è nessun prodotto</h2>
      )}
    </div>
  );
}

export default ServerActions;
