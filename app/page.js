
import Image from 'next/image';
import Navbar from './components/Navbar';
async function fetchProducts(){
  const productRes = await fetch('https://fakestoreapi.com/products');
  return productRes.json();
}

export default async function Home() {
  const products = await fetchProducts();
  return (
    <>
    <Navbar/>
     <h1 className='text-gray-800 text-center text-3xl font-bold leading-9 my-5'>Products</h1>
    <main className='max-w-screen-xl mx-auto'>
     <div className='grid w-full sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-5'>
     {products.map((product)=>{
      return(
        <>
        <div key={product.id}>
          <div className='w-full h-[160px] relative'>
          <Image src={product.image} fill className='w-full h-full object-contain'/>
          </div>
          <div className='text-center'>
        <h1>{product.title}</h1>
        <h3>{product.price}</h3>
     </div>
        </div>
        </>
      )
     })}
     </div>
    </main>
    </>
  )
}

