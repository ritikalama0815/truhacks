import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [sortType, setSortType] = useState('relevant');

  const toggleCategory = (e) => {
    if(category.includes(e.target.value)){
      setCategory(prev=>prev.filter(item => item !== e.target.value));
    } else{
      setCategory(prev =>[...prev, e.target.value]);
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice();
    if(showSearch && search){
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()));
    }
    if(category.length > 0){
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }
    setFilterProducts(productsCopy);
  }


  const sortProducts = () => {
    let fpCopy = filterProducts.slice();

    switch(sortType){
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) =>(a.price - b.price)));
        break;
      case 'high-low':
          setFilterProducts(fpCopy.sort((a, b) =>(b.price - a.price)));
          break;

      default:
        applyFilter();
        break;

    }
  }


  useEffect(() => {
    sortProducts();
  }, [sortType]);

  useEffect(() => {
    applyFilter();
  }, [category, search, showSearch]);

 

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', paddingTop: '2.5rem', borderTop: '1px solid #E5E7EB' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative' }}>
        <div style={{ minWidth: '15rem', position: 'relative' }}>
          <p 
            style={{ margin: '0.5rem 0', fontSize: '21px', display: 'flex', alignItems: 'center', cursor: 'pointer', gap: '0.5rem', marginLeft: "30px"}}
            onClick={() => setShowFilter(!showFilter)}
          >
            Filters <img src={assets.menu_icon} style={{ height: '0.75rem', transform: showFilter ? 'rotate(90deg)' : 'none' }} alt=''/>
          </p>
          <div style={{ border: '1px solid #D1D5DB', paddingLeft: '1.25rem', paddingTop: '0.75rem', paddingBottom: '0.75rem', marginTop: '1.5rem', display: showFilter ? 'block' : 'none', position: 'absolute', backgroundColor: 'white', zIndex: 1 }}>
            <p style={{ marginBottom: '0.75rem', fontSize: '0.875rem', fontWeight: '500' }}>Categories</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', fontSize: '0.875rem', fontWeight: '300', color: '#4B5563' }}>
              <p style={{ display: 'flex', gap: '0.5rem' }}>
                <input type='checkbox' style={{ width: '0.75rem', height: '0.75rem' }} value={'Kitchen'} onChange={toggleCategory} />Kitchen
              </p>
              <p style={{ display: 'flex', gap: '0.5rem' }}>
                <input type='checkbox' style={{ width: '0.75rem', height: '0.75rem' }} value={'Electronics'} onChange={toggleCategory}/>Electronics
              </p>
              <p style={{ display: 'flex', gap: '0.5rem' }}>
                <input type='checkbox' style={{ width: '0.75rem', height: '0.75rem' }} value={'Care'} onChange={toggleCategory}/>Personal Care
              </p>
              <p style={{ display: 'flex', gap: '0.5rem' }}>
                <input type='checkbox' style={{ width: '0.75rem', height: '0.75rem' }} value={'Mis'} onChange={toggleCategory}/>Miscellaneous
              </p>
              <p style={{ display: 'flex', gap: '0.5rem' }}>
                <input type='checkbox' style={{ width: '0.75rem', height: '0.75rem' }} value={'Fashion'} onChange={toggleCategory} />Fashion
              </p>
            </div>
          </div>
        </div>
        <div style={{ flex: '1', textAlign: 'center', fontSize: "34px" }}>
          <Title text1={'All'} text2={'Collections'}/>
        </div>
        <div style={{ marginRight: '30px' }}>
          <select onChange={(e)=>setSortType(e.target.value)} style={{ border: '2px solid #6B7280', fontSize: '18px', padding: '0.5rem' }}>
            <option value='relevant'>Relevant</option>
            <option value='low-high'>Low to High</option>
            <option value='high-low'>High to Low</option>
          </select>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2rem', rowGap: '2rem' }}>
        {filterProducts.map((item, index) => (
          <ProductItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} category={item.category} date={item.date} />
        ))}
      </div>
    </div>
  )
}

export default Collection