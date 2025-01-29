import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'; // Removed unused 'data' import
import { items } from './Data';
import Product from './Product';

const SearchItem = () => {
  const { term } = useParams();
  const [filterData, setFilterData] = useState([]);

  useEffect(() => {
    const filteredData = () => {
      const data = items.filter((p) => p.title.toLowerCase().includes(term.toLowerCase()));
      setFilterData(data);
    };

    filteredData();
  }, [term]);

  return <Product items={filterData} />;
};

export default SearchItem;
