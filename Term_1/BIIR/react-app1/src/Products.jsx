import productDB from "./data/products.json";

export default function Products() {
  return (
    <div>
      <h2>Products</h2>
      <hr />

      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Id</th>
            <th>Name</th>
            <th style={{ textAlign: "right" }}>Price</th>
          </tr>
        </thead>
        <tbody>
          {productDB.map((product, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td style={{ textAlign: "right" }}>{product.price}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
