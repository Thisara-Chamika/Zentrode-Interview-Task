import { useState, useEffect } from 'react'
import './App.css'
import { fetchProducts } from './service/api';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const data = await fetchProducts();
        setProducts(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (error) return <div style={{ padding: '20px', color: 'red', textAlign: 'center' }}>Error: {error}</div>;

  return (
    <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center'}}>Product List</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px'
      }}>

        {products.map((item) => (
          <div key={item.id} style={{
            border: '1px solid',
            padding: '15px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
          }}>
            <img
              src={item.thumbnail}
              alt={item.title}
              style={{ width: '150px', height: '150px', marginBottom: '10px' }}
            />
            <span style={{ backgroundColor: '#ffffff', padding: '2px 8px', borderRadius: '5px', fontSize: '12px', fontWeight: 'bold' }}>
              {item.id}
            </span>
            <h3 style={{ margin: '10px 0', textAlign: 'center' }}>{item.title}</h3>
            <p style={{ fontSize: '14px', color: '#000000', textAlign: 'center', margin: '0' }}>
              {item.description}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}

export default App;
